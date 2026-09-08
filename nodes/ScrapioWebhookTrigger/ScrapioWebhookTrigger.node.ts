import type {
	IDataObject,
	IHookFunctions,
	ILoadOptionsFunctions,
	INodePropertyOptions,
	INodeType,
	INodeTypeDescription,
	IWebhookFunctions,
	IWebhookResponseData,
} from "n8n-workflow";
import { NodeConnectionTypes } from "n8n-workflow";
import { MONITOR_FAMILIES, getMonitorBasePath, scrapioRequest } from "./MonitorFamilies";

export class ScrapioWebhookTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: "Scrapio Webhook Trigger",
		name: "scrapioWebhookTrigger",
		icon: "file:scrapio.svg",
		group: ["trigger"],
		version: 1,
		subtitle: '={{$parameter["monitorFamily"]}}',
		description: "Starts the workflow instantly when Scrapio detects a change on a monitor, via a real webhook (no polling)",
		defaults: {
			name: "Scrapio Webhook Trigger",
		},
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: "scrapioApi",
				required: true,
			},
		],
		webhooks: [
			{
				name: "default",
				httpMethod: "POST",
				responseMode: "onReceived",
				path: "webhook",
			},
		],
		properties: [
			{
				displayName: "Monitor Family",
				name: "monitorFamily",
				type: "options",
				noDataExpression: true,
				options: MONITOR_FAMILIES.map((f) => ({ name: f.name, value: f.value })),
				default: "monitors",
				description: "Which monitor family to wire this webhook to. Generic Monitor covers monitors created via the Monitors resource; the others are the legacy per-source monitor families with the same create/list/update shape.",
			},
			{
				displayName: "Monitor Name or ID",
				name: "monitorId",
				type: "options",
				noDataExpression: true,
				typeOptions: {
					loadOptionsMethod: "getMonitors",
					loadOptionsDependsOn: ["monitorFamily"],
				},
				default: "",
				required: true,
				description: 'Monitor to attach the webhook to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
		],
	};

	methods = {
		loadOptions: {
			async getMonitors(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const family = this.getCurrentNodeParameter("monitorFamily") as string;
				const basePath = getMonitorBasePath(family);
				const { monitors } = (await scrapioRequest(this, "GET", basePath)) as {
					monitors?: Array<{ id: string; name: string }>;
				};
				return (monitors ?? []).map((m) => ({ name: `${m.name} (${m.id})`, value: m.id }));
			},
		},
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const staticData = this.getWorkflowStaticData("node") as IDataObject;
				const endpointId = staticData.webhookEndpointId as string | undefined;
				if (!endpointId) return false;

				try {
					// Confirms the endpoint we created previously still exists server-side,
					// so n8n doesn't recreate (and rewire the monitor to) a new one on every
					// activation -- e.g. after an n8n restart.
					await scrapioRequest(this, "GET", `/v1/webhooks/endpoints/${encodeURIComponent(endpointId)}`);
					return true;
				} catch (error) {
					return false;
				}
			},

			async create(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl("default");

				const endpoint = (await scrapioRequest(this, "POST", "/v1/webhooks/endpoints", {
					url: webhookUrl as string,
					description: `n8n workflow: ${this.getWorkflow().name ?? this.getWorkflow().id}`,
					events: ["monitor.change_detected"],
				})) as { id: string };

				const monitorFamily = this.getNodeParameter("monitorFamily") as string;
				const monitorId = this.getNodeParameter("monitorId") as string;
				const basePath = getMonitorBasePath(monitorFamily);
				await scrapioRequest(this, "PATCH", `${basePath}/${encodeURIComponent(monitorId)}`, {
					webhook_endpoint_id: endpoint.id,
				});

				const staticData = this.getWorkflowStaticData("node") as IDataObject;
				staticData.webhookEndpointId = endpoint.id;
				return true;
			},

			async delete(this: IHookFunctions): Promise<boolean> {
				const staticData = this.getWorkflowStaticData("node") as IDataObject;
				const endpointId = staticData.webhookEndpointId as string | undefined;
				if (!endpointId) return true;

				try {
					await scrapioRequest(this, "DELETE", `/v1/webhooks/endpoints/${encodeURIComponent(endpointId)}`);
				} catch (error) {
					// Already gone (e.g. deleted manually via the dashboard) -- nothing left to do.
				}

				// Note: the monitor's `webhook_endpoint_id` is intentionally left pointing at the
				// now-deleted endpoint. None of the per-family update request bodies accept a way
				// to explicitly clear the field back to null/undefined -- it's an optional string
				// everywhere, write-only for "set". A deleted endpoint simply stops receiving
				// deliveries, so this is inert rather than harmful.
				delete staticData.webhookEndpointId;
				return true;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const body = this.getBodyData();
		return {
			workflowData: [this.helpers.returnJsonArray(body)],
		};
	}
}
