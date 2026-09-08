import type { INodeProperties } from "n8n-workflow";
import { OPERATIONS, RESOURCE_OPTIONS, type FieldSpec, type OperationSpec } from "./OperationManifest";

/**
 * Turns one FieldSpec (derived from a Scrapio API endpoint's params shape)
 * into an n8n INodeProperties entry, scoped to a single resource+operation
 * pair via displayOptions.
 */
function fieldToProperty(field: FieldSpec, resource: string, operation: string): INodeProperties {
	const base: INodeProperties = {
		displayName: field.displayName,
		name: field.name,
		type: "string",
		default: "",
		required: field.required,
		displayOptions: {
			show: {
				resource: [resource],
				operation: [operation],
			},
		},
	};

	switch (field.type) {
		case "number":
			return { ...base, type: "number", default: 0 };
		case "boolean":
			return { ...base, type: "boolean", default: false };
		case "options":
			return {
				...base,
				type: "options",
				options: (field.options ?? []).map((v) => ({ name: v, value: v })),
				default: field.options?.[0] ?? "",
			};
		case "multiOptions":
			return {
				...base,
				type: "multiOptions",
				options: (field.options ?? []).map((v) => ({ name: v, value: v })),
				default: [],
			};
		case "json":
			return {
				...base,
				type: "json",
				default: "",
				description: `Raw value for the API field "${field.jsonKey}" (type: ${field.rawType}). Provide valid JSON.`,
			};
		case "string":
		default:
			return {
				...base,
				type: "string",
				default: "",
				description: field.isArrayCsv
					? `Comma-separated list (API field "${field.jsonKey}": ${field.rawType})`
					: undefined,
			};
	}
}

function idField(op: OperationSpec): INodeProperties {
	return {
		displayName: op.idLabel ?? "ID",
		name: "resourceId",
		type: "string",
		default: "",
		required: true,
		displayOptions: {
			show: { resource: [op.resource], operation: [op.operation] },
		},
	};
}

function limitField(op: OperationSpec): INodeProperties {
	return {
		displayName: "Limit",
		name: "limit",
		type: "number",
		default: 50,
		required: false,
		displayOptions: {
			show: { resource: [op.resource], operation: [op.operation] },
		},
	};
}

function additionalFieldsCollection(op: OperationSpec): INodeProperties | null {
	if (op.optionalFields.length === 0) return null;
	return {
		displayName: "Additional Fields",
		name: "additionalFields",
		type: "collection",
		placeholder: "Add Field",
		default: {},
		displayOptions: {
			show: { resource: [op.resource], operation: [op.operation] },
		},
		options: op.optionalFields.map((f) => {
			const prop = fieldToProperty(f, op.resource, op.operation);
			// Nested inside a collection: displayOptions on the inner option
			// itself are not used by n8n, so strip them to avoid confusion.
			const { displayOptions: _drop, required: _req, ...rest } = prop;
			return rest as INodeProperties;
		}),
	};
}

const WAIT_FOR_COMPLETION_FIELDS = (op: OperationSpec): INodeProperties[] => [
	{
		displayName: "Wait for Completion",
		name: "waitForCompletion",
		type: "boolean",
		default: false,
		description: "Whether to poll the job (via Jobs > Get Job / Get Job Result) until it finishes before returning, instead of returning just the job ID",
		displayOptions: {
			show: { resource: [op.resource], operation: [op.operation] },
		},
	},
	{
		displayName: "Poll Interval (Ms)",
		name: "pollIntervalMs",
		type: "number",
		default: 2000,
		displayOptions: {
			show: { resource: [op.resource], operation: [op.operation], waitForCompletion: [true] },
		},
	},
	{
		displayName: "Timeout (Ms)",
		name: "timeoutMs",
		type: "number",
		default: 300000,
		displayOptions: {
			show: { resource: [op.resource], operation: [op.operation], waitForCompletion: [true] },
		},
	},
];

const WAIT_FOR_JOB_FIELDS = (op: OperationSpec): INodeProperties[] => [
	{
		displayName: "Poll Interval (Ms)",
		name: "pollIntervalMs",
		type: "number",
		default: 2000,
		displayOptions: {
			show: { resource: [op.resource], operation: [op.operation] },
		},
	},
	{
		displayName: "Timeout (Ms)",
		name: "timeoutMs",
		type: "number",
		default: 300000,
		displayOptions: {
			show: { resource: [op.resource], operation: [op.operation] },
		},
	},
];

export function buildProperties(): INodeProperties[] {
	const properties: INodeProperties[] = [
		{
			displayName: "Resource",
			name: "resource",
			type: "options",
			noDataExpression: true,
			options: RESOURCE_OPTIONS.map((r) => ({ name: r.name, value: r.value })),
			default: RESOURCE_OPTIONS[0]?.value ?? "",
		},
	];

	for (const resource of RESOURCE_OPTIONS) {
		const ops = OPERATIONS.filter((o) => o.resource === resource.value);
		properties.push({
			displayName: "Operation",
			name: "operation",
			type: "options",
			noDataExpression: true,
			displayOptions: {
				show: { resource: [resource.value] },
			},
			options: ops.map((o) => ({ name: o.name, value: o.operation, description: o.description, action: o.name })),
			default: ops[0]?.operation ?? "",
		});
	}

	for (const op of OPERATIONS) {
		if (op.argShape === "id" || op.argShape === "idParams" || op.argShape === "idLimit") {
			properties.push(idField(op));
		}
		if (op.argShape === "waitForJob") {
			properties.push(idField(op));
		}

		for (const f of op.requiredFields) {
			properties.push(fieldToProperty(f, op.resource, op.operation));
		}

		const additional = additionalFieldsCollection(op);
		if (additional) properties.push(additional);

		if (op.argShape === "idLimit") {
			properties.push(limitField(op));
		}
		if (op.argShape === "waitForJob") {
			properties.push(...WAIT_FOR_JOB_FIELDS(op));
		}
		if (op.isQueue) {
			properties.push(...WAIT_FOR_COMPLETION_FIELDS(op));
		}
	}

	return properties;
}
