import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from "n8n-workflow";

export class ScrapioApi implements ICredentialType {
	name = "scrapioApi";

	displayName = "Scrapio API";

	documentationUrl = "https://docs.scrapio.dev";

	icon = "file:scrapio.svg" as const;

	properties: INodeProperties[] = [
		{
			displayName: "API Key",
			name: "apiKey",
			type: "string",
			typeOptions: { password: true },
			default: "",
			required: true,
			description: "Your Scrapio API key (from the dashboard's API Keys page)",
		},
		{
			displayName: "Base URL",
			name: "baseUrl",
			type: "string",
			default: "https://api.scrapio.dev",
			description: "Override the Scrapio API base URL (self-hosted / staging use only)",
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: "generic",
		properties: {
			headers: {
				Authorization: "={{\"Bearer \" + $credentials.apiKey}}",
			},
		},
	};

	// /v1/me is purpose-built for exactly this: it validates the key (401 if
	// invalid) but deliberately skips the credits/plan-tier gates almost
	// every other endpoint enforces (those throw 402 for a perfectly valid
	// key, which n8n's generic credential tester still displays as
	// "Authorization failed", misleadingly). Works for every plan and never
	// burns scrape credits.
	test: ICredentialTestRequest = {
		request: {
			baseURL: "={{$credentials.baseUrl}}",
			url: "/v1/me",
		},
	};
}
