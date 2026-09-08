import type { IDataObject, IExecuteFunctions } from "n8n-workflow";
import { NodeOperationError } from "n8n-workflow";
import type { FieldSpec, OperationSpec } from "./OperationManifest";

/** Statuses that mean a job is done polling (success, partial, failed, or cancelled). */
const TERMINAL_JOB_STATUSES = new Set(["completed", "partial", "failed", "cancelled"]);

function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function setAtPath(target: Record<string, unknown>, path: string[], value: unknown): void {
	let cursor = target;
	for (let i = 0; i < path.length - 1; i++) {
		const key = path[i];
		if (typeof cursor[key] !== "object" || cursor[key] === null) {
			cursor[key] = {};
		}
		cursor = cursor[key] as Record<string, unknown>;
	}
	cursor[path[path.length - 1]] = value;
}

function isEmpty(value: unknown): boolean {
	return value === undefined || value === null || value === "";
}

function coerceField(
	ctx: IExecuteFunctions,
	field: FieldSpec,
	rawValue: unknown,
	itemIndex: number,
): unknown {
	if (field.type === "json") {
		if (typeof rawValue === "string") {
			if (rawValue.trim() === "") return undefined;
			try {
				return JSON.parse(rawValue);
			} catch (error) {
				throw new NodeOperationError(
					ctx.getNode(),
					`Field "${field.displayName}" must be valid JSON: ${(error as Error).message}`,
					{ itemIndex },
				);
			}
		}
		return rawValue;
	}

	if (field.isArrayCsv && typeof rawValue === "string") {
		if (rawValue.trim() === "") return undefined;
		return rawValue.split(",").map((s) => s.trim()).filter((s) => s.length > 0);
	}

	if (field.type === "multiOptions" && Array.isArray(rawValue) && rawValue.length === 0) {
		return undefined;
	}

	return rawValue;
}

/**
 * Reads every required + additionalFields value for one operation off the
 * node's parameters and assembles the flat object the matching Scrapio API
 * endpoint expects (applying wrapPath nesting like session -> { id } and
 * CSV -> string[] conversion along the way).
 */
export function buildParams(
	ctx: IExecuteFunctions,
	op: OperationSpec,
	itemIndex: number,
): Record<string, unknown> {
	const result: Record<string, unknown> = {};

	for (const field of op.requiredFields) {
		const raw = ctx.getNodeParameter(field.name, itemIndex);
		const value = coerceField(ctx, field, raw, itemIndex);
		if (isEmpty(value)) continue;
		if (field.wrapPath) setAtPath(result, field.wrapPath, value);
		else result[field.jsonKey] = value;
	}

	if (op.optionalFields.length > 0) {
		const additional = ctx.getNodeParameter("additionalFields", itemIndex, {}) as Record<string, unknown>;
		for (const field of op.optionalFields) {
			if (!(field.name in additional)) continue;
			const value = coerceField(ctx, field, additional[field.name], itemIndex);
			if (isEmpty(value)) continue;
			if (field.wrapPath) setAtPath(result, field.wrapPath, value);
			else result[field.jsonKey] = value;
		}
	}

	return result;
}

/**
 * Substitutes every `{placeholder}` in a path template. `resourceId` comes
 * from the node's "Resource ID"-style parameter (id/idParams/idLimit
 * argShapes); any other placeholder (e.g. `{video_id}`) is pulled out of the
 * already-built params object and removed from it, since it belongs in the
 * URL rather than the query string / body.
 */
function resolvePath(
	path: string,
	params: Record<string, unknown>,
	resourceId?: string,
): string {
	return path.replace(/\{([^}]+)\}/g, (_match, key: string) => {
		if (key === "resourceId") {
			if (resourceId === undefined) {
				throw new Error(`Path "${path}" requires a resourceId but none was provided`);
			}
			return encodeURIComponent(resourceId);
		}
		const value = params[key];
		delete params[key];
		if (value === undefined || value === null) {
			throw new Error(`Path "${path}" requires a "${key}" value but none was provided`);
		}
		return encodeURIComponent(String(value));
	});
}

async function request(
	ctx: IExecuteFunctions,
	baseUrl: string,
	httpMethod: "GET" | "POST" | "PATCH" | "DELETE",
	path: string,
	params: Record<string, unknown>,
): Promise<unknown> {
	const url = `${baseUrl}${path}`;
	const options: IDataObject = {
		method: httpMethod,
		url,
		json: true,
	};

	if (httpMethod === "GET" || httpMethod === "DELETE") {
		if (Object.keys(params).length > 0) options.qs = params;
	} else if (Object.keys(params).length > 0) {
		options.body = params;
	}

	return ctx.helpers.httpRequestWithAuthentication.call(ctx, "scrapioApi", options as never);
}

async function getBaseUrl(ctx: IExecuteFunctions): Promise<string> {
	const credentials = await ctx.getCredentials("scrapioApi");
	const baseUrl = ((credentials.baseUrl as string) || "https://api.scrapio.dev").replace(/\/$/, "");
	return baseUrl;
}

interface JobRecord extends IDataObject {
	status: string;
}

/** Poll GET /v1/jobs/{id} until it reaches a terminal status (or times out), then GET its result. */
async function waitForJobCompletion(
	ctx: IExecuteFunctions,
	baseUrl: string,
	jobId: string,
	pollIntervalMs: number,
	timeoutMs: number,
): Promise<unknown> {
	const deadline = Date.now() + timeoutMs;

	while (Date.now() < deadline) {
		const job = (await request(ctx, baseUrl, "GET", `/v1/jobs/${encodeURIComponent(jobId)}`, {})) as JobRecord;
		if (TERMINAL_JOB_STATUSES.has(job.status)) {
			return request(ctx, baseUrl, "GET", `/v1/jobs/${encodeURIComponent(jobId)}/result`, {});
		}
		await sleep(pollIntervalMs);
	}

	throw new Error(`Job ${jobId} did not complete within ${timeoutMs}ms`);
}

/**
 * Public wrapper around the job poll loop, used by Scrapio.node.ts's
 * `isQueue` + "Wait for Completion" post-processing step (queue-style
 * operations like `amazon.queueSearchCrawl` return a `job_id` immediately;
 * this is opted into separately from the `waitForJob` argShape above).
 */
export async function waitForJob(
	ctx: IExecuteFunctions,
	jobId: string,
	pollIntervalMs: number,
	timeoutMs: number,
): Promise<unknown> {
	const baseUrl = await getBaseUrl(ctx);
	return waitForJobCompletion(ctx, baseUrl, jobId, pollIntervalMs, timeoutMs);
}

/** Builds and sends the raw HTTP request for one operation and returns its parsed JSON result. */
export async function callOperation(
	ctx: IExecuteFunctions,
	op: OperationSpec,
	itemIndex: number,
): Promise<unknown> {
	if (op.argShape === "waitForJob") {
		const id = ctx.getNodeParameter("resourceId", itemIndex) as string;
		const pollIntervalMs = ctx.getNodeParameter("pollIntervalMs", itemIndex, 2000) as number;
		const timeoutMs = ctx.getNodeParameter("timeoutMs", itemIndex, 300000) as number;
		const baseUrl = await getBaseUrl(ctx);
		return waitForJobCompletion(ctx, baseUrl, id, pollIntervalMs, timeoutMs);
	}

	if (!op.httpMethod || !op.path) {
		throw new Error(`Scrapio operation ${op.resource}.${op.operation} has no HTTP method/path`);
	}

	const baseUrl = await getBaseUrl(ctx);

	switch (op.argShape) {
		case "none": {
			return request(ctx, baseUrl, op.httpMethod, op.path, {});
		}
		case "params":
		case "paramsOptional": {
			const params = buildParams(ctx, op, itemIndex);
			const path = resolvePath(op.path, params);
			return request(ctx, baseUrl, op.httpMethod, path, params);
		}
		case "id": {
			const resourceId = ctx.getNodeParameter("resourceId", itemIndex) as string;
			const path = resolvePath(op.path, {}, resourceId);
			return request(ctx, baseUrl, op.httpMethod, path, {});
		}
		case "idParams": {
			const resourceId = ctx.getNodeParameter("resourceId", itemIndex) as string;
			const params = buildParams(ctx, op, itemIndex);
			const path = resolvePath(op.path, params, resourceId);
			return request(ctx, baseUrl, op.httpMethod, path, params);
		}
		case "idLimit": {
			const resourceId = ctx.getNodeParameter("resourceId", itemIndex) as string;
			const limit = ctx.getNodeParameter("limit", itemIndex, undefined) as number | undefined;
			const params: Record<string, unknown> = limit ? { limit } : {};
			const path = resolvePath(op.path, params, resourceId);
			return request(ctx, baseUrl, op.httpMethod, path, params);
		}
		default:
			throw new Error(`Unhandled argShape: ${op.argShape}`);
	}
}
