import type { IDataObject, IExecuteFunctions, IHookFunctions, ILoadOptionsFunctions } from "n8n-workflow";

/**
 * Shared helper for the webhook trigger's monitor-family plumbing: which
 * base path each family lives at (for list/get/update) and the raw HTTP
 * request helper used instead of an SDK client. Moved here (out of the
 * now-deleted ScrapioTrigger.node.ts) when the polling trigger was dropped
 * to keep the package to n8n's one-trigger-node verification limit.
 */
export const MONITOR_FAMILIES: Array<{ name: string; value: string; basePath: string }> = [
	{ name: "Generic Monitor", value: "monitors", basePath: "/v1/monitors" },
	{ name: "Booking Monitor", value: "bookingMonitors", basePath: "/v1/booking/monitors" },
	{ name: "Agoda Monitor", value: "agodaMonitors", basePath: "/v1/agoda/monitors" },
	{ name: "Product Hunt Monitor", value: "productHuntMonitors", basePath: "/v1/product-hunt/monitors" },
	{ name: "Reddit Monitor", value: "redditMonitors", basePath: "/v1/reddit/monitors" },
	{ name: "Hacker News Monitor", value: "hackerNewsMonitors", basePath: "/v1/hacker-news/monitors" },
];

export function getMonitorBasePath(family: string): string {
	const def = MONITOR_FAMILIES.find((f) => f.value === family) ?? MONITOR_FAMILIES[0];
	return def.basePath;
}

export async function getBaseUrl(
	ctx: IHookFunctions | ILoadOptionsFunctions | IExecuteFunctions,
): Promise<string> {
	const credentials = await ctx.getCredentials("scrapioApi");
	return ((credentials.baseUrl as string) || "https://api.scrapio.dev").replace(/\/$/, "");
}

/** Thin wrapper around httpRequestWithAuthentication for the webhook trigger's own calls. */
export async function scrapioRequest(
	ctx: IHookFunctions | ILoadOptionsFunctions | IExecuteFunctions,
	method: "GET" | "POST" | "PATCH" | "DELETE",
	path: string,
	body?: IDataObject,
): Promise<IDataObject> {
	const baseUrl = await getBaseUrl(ctx);
	const options: IDataObject = {
		method,
		url: `${baseUrl}${path}`,
		json: true,
	};
	if (body && Object.keys(body).length > 0) {
		options.body = body;
	}
	return ctx.helpers.httpRequestWithAuthentication.call(ctx, "scrapioApi", options as never);
}
