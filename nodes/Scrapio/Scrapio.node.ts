import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	JsonObject,
} from "n8n-workflow";
import { NodeApiError, NodeConnectionTypes, NodeOperationError } from "n8n-workflow";
import { buildProperties } from "./DescriptionBuilder";
import { OPERATIONS } from "./OperationManifest";
import { callOperation, waitForJob } from "./GenericFunctions";

export class Scrapio implements INodeType {
	description: INodeTypeDescription = {
		displayName: "Scrapio",
		name: "scrapio",
		icon: "file:scrapio.svg",
		group: ["transform"],
		version: 1,
		subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
		description: "Interact with the Scrapio web-scraping API (fetch, search, e-commerce, social, AI prompting, monitors)",
		defaults: {
			name: "Scrapio",
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		usableAsTool: true,
		credentials: [
			{
				name: "scrapioApi",
				required: true,
			},
		],
		properties: buildProperties(),
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		const resource = this.getNodeParameter("resource", 0) as string;

		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			try {
				const operation = this.getNodeParameter("operation", itemIndex) as string;
				const op = OPERATIONS.find((o) => o.resource === resource && o.operation === operation);
				if (!op) {
					throw new NodeOperationError(
						this.getNode(),
						`Unknown Scrapio operation: ${resource}.${operation}`,
						{ itemIndex },
					);
				}

				let result = await callOperation(this, op, itemIndex);

				if (op.isQueue) {
					const waitForCompletion = this.getNodeParameter("waitForCompletion", itemIndex, false) as boolean;
					if (waitForCompletion) {
						const jobId = (result as { job_id?: string })?.job_id;
						if (!jobId) {
							throw new NodeOperationError(
								this.getNode(),
								"Scrapio queue operation did not return a job_id to wait on",
								{ itemIndex },
							);
						}
						const pollIntervalMs = this.getNodeParameter("pollIntervalMs", itemIndex, 2000) as number;
						const timeoutMs = this.getNodeParameter("timeoutMs", itemIndex, 300000) as number;
						result = await waitForJob(this, jobId, pollIntervalMs, timeoutMs);
					}
				}

				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(result as IDataObject | IDataObject[]),
					{ itemData: { item: itemIndex } },
				);
				returnData.push(...executionData);
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: { error: (error as Error).message },
						pairedItem: { item: itemIndex },
					});
					continue;
				}
				if (error instanceof NodeOperationError) {
					throw new NodeOperationError(this.getNode(), error, { itemIndex });
				}
				throw new NodeApiError(this.getNode(), error as JsonObject, { itemIndex });
			}
		}

		return [returnData];
	}
}
