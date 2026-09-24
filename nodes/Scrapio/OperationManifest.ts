// AUTO-GENERATED from packages/sdk-typescript/src/{resources,types}.ts.
// Regenerate with the manifest generator script if the SDK surface changes;
// do not hand-edit the OPERATIONS / RESOURCE_OPTIONS arrays below.

export interface FieldSpec {
  name: string;
  jsonKey: string;
  displayName: string;
  type: "string" | "number" | "boolean" | "options" | "multiOptions" | "json";
  required: boolean;
  options?: string[];
  isArrayCsv?: boolean;
  wrapPath?: string[];
  rawType: string;
}

export interface OperationSpec {
  resource: string;
  resourceName: string;
  operation: string;
  name: string;
  description: string;
  clientPath: string[];
  method: string;
  httpMethod: "GET" | "POST" | "PATCH" | "DELETE" | null;
  path: string | null;
  argShape:
    | "none"
    | "params"
    | "paramsOptional"
    | "id"
    | "idParams"
    | "idLimit"
    | "waitForJob";
  idLabel: string | null;
  isQueue: boolean;
  requiredFields: FieldSpec[];
  optionalFields: FieldSpec[];
}

export const RESOURCE_OPTIONS: Array<{ name: string; value: string }> = [
  {
    "name": "Instagram",
    "value": "instagram"
  },
  {
    "name": "Fetch",
    "value": "fetch"
  },
  {
    "name": "Jobs",
    "value": "jobs"
  },
  {
    "name": "Google",
    "value": "google"
  },
  {
    "name": "Fast Search",
    "value": "fastSearch"
  },
  {
    "name": "Amazon",
    "value": "amazon"
  },
  {
    "name": "Walmart",
    "value": "walmart"
  },
  {
    "name": "YouTube",
    "value": "youtube"
  },
  {
    "name": "Interact",
    "value": "interact"
  },
  {
    "name": "Crawl",
    "value": "crawl"
  },
  {
    "name": "Search (Web)",
    "value": "search"
  },
  {
    "name": "Map",
    "value": "map"
  },
  {
    "name": "Booking.com",
    "value": "booking"
  },
  {
    "name": "Agoda",
    "value": "agoda"
  },
  {
    "name": "Airbnb",
    "value": "airbnb"
  },
  {
    "name": "Autotrader",
    "value": "autotrader"
  },
  {
    "name": "Glassdoor",
    "value": "glassdoor"
  },
  {
    "name": "Trustpilot",
    "value": "trustpilot"
  },
  {
    "name": "ZipRecruiter",
    "value": "ziprecruiter"
  },
  {
    "name": "Dice",
    "value": "dice"
  },
  {
    "name": "SimplyHired",
    "value": "simplyhired"
  },
  {
    "name": "Built In",
    "value": "builtin"
  },
  {
    "name": "Wellfound",
    "value": "wellfound"
  },
  {
    "name": "ChatGPT",
    "value": "chatgpt"
  },
  {
    "name": "Perplexity",
    "value": "perplexity"
  },
  {
    "name": "Gemini",
    "value": "gemini"
  },
  {
    "name": "Bing",
    "value": "bing"
  },
  {
    "name": "Reddit",
    "value": "reddit"
  },
  {
    "name": "Hacker News",
    "value": "hackerNews"
  },
  {
    "name": "TikTok",
    "value": "tiktok"
  },
  {
    "name": "Target",
    "value": "target"
  },
  {
    "name": "Apple App Store",
    "value": "appleAppStore"
  },
  {
    "name": "Product Hunt",
    "value": "productHunt"
  },
  {
    "name": "Facebook",
    "value": "facebook"
  },
  {
    "name": "Twitter / X",
    "value": "twitter"
  },
  {
    "name": "Threads",
    "value": "threads"
  },
  {
    "name": "GitHub",
    "value": "github"
  },
  {
    "name": "Monitors",
    "value": "monitors"
  },
  {
    "name": "Booking Monitors",
    "value": "bookingMonitors"
  },
  {
    "name": "Agoda Monitors",
    "value": "agodaMonitors"
  },
  {
    "name": "Product Hunt Monitors",
    "value": "productHuntMonitors"
  },
  {
    "name": "Reddit Monitors",
    "value": "redditMonitors"
  },
  {
    "name": "Hacker News Monitors",
    "value": "hackerNewsMonitors"
  },
  {
    "name": "Telegram",
    "value": "telegram"
  },
  {
    "name": "Rumble",
    "value": "rumble"
  },
  {
    "name": "Truth Social",
    "value": "truthSocial"
  },
  {
    "name": "Bluesky",
    "value": "bluesky"
  },
  {
    "name": "Twitch",
    "value": "twitch"
  },
  {
    "name": "Apple Music",
    "value": "appleMusic"
  },
  {
    "name": "Spotify",
    "value": "spotify"
  },
  {
    "name": "SoundCloud",
    "value": "soundcloud"
  },
  {
    "name": "Kwai",
    "value": "kwai"
  },
  {
    "name": "Kick",
    "value": "kick"
  },
  {
    "name": "Snapchat",
    "value": "snapchat"
  },
  {
    "name": "Pinterest",
    "value": "pinterest"
  },
  {
    "name": "LinkedIn",
    "value": "linkedin"
  },
  {
    "name": "Link in Bio",
    "value": "linkInBio"
  }
];

export const OPERATIONS: OperationSpec[] = [
  {
    "resource": "fetch",
    "resourceName": "Fetch",
    "operation": "fetch",
    "name": "Fetch URL",
    "description": "Fetch a single URL and return rendered output",
    "clientPath": [
      "fetch"
    ],
    "method": "fetch",
    "httpMethod": "POST",
    "path": "/v1/fetch",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "render_js",
        "jsonKey": "render_js",
        "displayName": "Render JS",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      },
      {
        "name": "device",
        "jsonKey": "device",
        "displayName": "Device",
        "type": "options",
        "required": false,
        "options": [
          "desktop",
          "mobile",
          "tablet"
        ],
        "rawType": "\"desktop\" | \"mobile\" | \"tablet\""
      },
      {
        "name": "session_id",
        "jsonKey": "session",
        "displayName": "Session ID",
        "type": "string",
        "required": false,
        "wrapPath": [
          "session",
          "id"
        ],
        "rawType": "{ id: string }"
      },
      {
        "name": "output",
        "jsonKey": "output",
        "displayName": "Output",
        "type": "string",
        "required": false,
        "isArrayCsv": true,
        "rawType": "string[]"
      },
      {
        "name": "extract",
        "jsonKey": "extract",
        "displayName": "Extract",
        "type": "json",
        "required": false,
        "rawType": "Record<string, unknown>"
      },
      {
        "name": "wait_for_network_idle",
        "jsonKey": "wait_for",
        "displayName": "Wait For Network Idle",
        "type": "boolean",
        "required": false,
        "wrapPath": [
          "wait_for",
          "network_idle"
        ],
        "rawType": "{ network_idle?: boolean }"
      },
      {
        "name": "timeout_ms",
        "jsonKey": "timeout_ms",
        "displayName": "Timeout MS",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "proxy",
        "jsonKey": "proxy",
        "displayName": "Proxy",
        "type": "options",
        "required": false,
        "options": [
          "auto",
          "basic",
          "stealth"
        ],
        "rawType": "\"auto\" | \"basic\" | \"stealth\""
      }
    ]
  },
  {
    "resource": "jobs",
    "resourceName": "Jobs",
    "operation": "create",
    "name": "Create Job",
    "description": "Create an async job (fetch/interact/search/crawl/map)",
    "clientPath": [
      "jobs"
    ],
    "method": "create",
    "httpMethod": "POST",
    "path": "/v1/jobs",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "kind",
        "jsonKey": "kind",
        "displayName": "Kind",
        "type": "options",
        "required": true,
        "options": [
          "fetch",
          "interact",
          "search",
          "crawl",
          "map"
        ],
        "rawType": "\"fetch\" | \"interact\" | \"search\" | \"crawl\" | \"map\""
      },
      {
        "name": "input",
        "jsonKey": "input",
        "displayName": "Input",
        "type": "json",
        "required": true,
        "rawType": "Record<string, unknown>"
      }
    ],
    "optionalFields": [
      {
        "name": "webhook_url",
        "jsonKey": "webhook",
        "displayName": "Webhook URL",
        "type": "string",
        "required": false,
        "wrapPath": [
          "webhook",
          "url"
        ],
        "rawType": "{ url: string }"
      }
    ]
  },
  {
    "resource": "jobs",
    "resourceName": "Jobs",
    "operation": "get",
    "name": "Get Job",
    "description": "Get job status",
    "clientPath": [
      "jobs"
    ],
    "method": "get",
    "httpMethod": "GET",
    "path": "/v1/jobs/{resourceId}",
    "argShape": "id",
    "idLabel": "Job ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "jobs",
    "resourceName": "Jobs",
    "operation": "getResult",
    "name": "Get Job Result",
    "description": "Get job result",
    "clientPath": [
      "jobs"
    ],
    "method": "getResult",
    "httpMethod": "GET",
    "path": "/v1/jobs/{resourceId}/result",
    "argShape": "id",
    "idLabel": "Job ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "jobs",
    "resourceName": "Jobs",
    "operation": "cancel",
    "name": "Cancel Job",
    "description": "Cancel a running job",
    "clientPath": [
      "jobs"
    ],
    "method": "cancel",
    "httpMethod": "POST",
    "path": "/v1/jobs/{resourceId}/cancel",
    "argShape": "id",
    "idLabel": "Job ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "jobs",
    "resourceName": "Jobs",
    "operation": "waitForCompletion",
    "name": "Wait for Job Completion",
    "description": "Poll a job until it finishes (or times out)",
    "clientPath": [
      "jobs"
    ],
    "method": "waitForCompletion",
    "httpMethod": null,
    "path": null,
    "argShape": "waitForJob",
    "idLabel": "Job ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "google",
    "resourceName": "Google",
    "operation": "search",
    "name": "Search",
    "description": "",
    "clientPath": [
      "google"
    ],
    "method": "search",
    "httpMethod": "GET",
    "path": "/v1/google/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "search",
        "jsonKey": "search",
        "displayName": "Search",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "search_type",
        "jsonKey": "search_type",
        "displayName": "Search Type",
        "type": "options",
        "required": false,
        "options": [
          "classic",
          "news",
          "images",
          "lens",
          "ai_mode",
          "ads"
        ],
        "rawType": "GoogleSearchType"
      },
      {
        "name": "country_code",
        "jsonKey": "country_code",
        "displayName": "Country Code",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "language",
        "jsonKey": "language",
        "displayName": "Language",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "device",
        "jsonKey": "device",
        "displayName": "Device",
        "type": "options",
        "required": false,
        "options": [
          "desktop",
          "mobile"
        ],
        "rawType": "GoogleDevice"
      },
      {
        "name": "page",
        "jsonKey": "page",
        "displayName": "Page",
        "type": "string",
        "required": false,
        "rawType": "number | string"
      },
      {
        "name": "date_range",
        "jsonKey": "date_range",
        "displayName": "Date Range",
        "type": "options",
        "required": false,
        "options": [
          "past_hour",
          "past_day",
          "past_week",
          "past_month",
          "past_year"
        ],
        "rawType": "GoogleDateRange"
      },
      {
        "name": "latitude",
        "jsonKey": "latitude",
        "displayName": "Latitude",
        "type": "string",
        "required": false,
        "rawType": "number | string"
      },
      {
        "name": "longitude",
        "jsonKey": "longitude",
        "displayName": "Longitude",
        "type": "string",
        "required": false,
        "rawType": "number | string"
      },
      {
        "name": "radius",
        "jsonKey": "radius",
        "displayName": "Radius",
        "type": "string",
        "required": false,
        "rawType": "number | string"
      },
      {
        "name": "extra_params",
        "jsonKey": "extra_params",
        "displayName": "Extra Params",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "light_request",
        "jsonKey": "light_request",
        "displayName": "Light Request",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      },
      {
        "name": "add_html",
        "jsonKey": "add_html",
        "displayName": "Add HTML",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      },
      {
        "name": "nfpr",
        "jsonKey": "nfpr",
        "displayName": "NFPR",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      },
      {
        "name": "tag",
        "jsonKey": "tag",
        "displayName": "Tag",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "fastSearch",
    "resourceName": "Fast Search",
    "operation": "search",
    "name": "Search",
    "description": "",
    "clientPath": [
      "fastSearch"
    ],
    "method": "search",
    "httpMethod": "GET",
    "path": "/v1/fast-search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "search",
        "jsonKey": "search",
        "displayName": "Search",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "country_code",
        "jsonKey": "country_code",
        "displayName": "Country Code",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "language",
        "jsonKey": "language",
        "displayName": "Language",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "page",
        "jsonKey": "page",
        "displayName": "Page",
        "type": "string",
        "required": false,
        "rawType": "number | string"
      }
    ]
  },
  {
    "resource": "amazon",
    "resourceName": "Amazon",
    "operation": "getProduct",
    "name": "Get Product",
    "description": "",
    "clientPath": [
      "amazon"
    ],
    "method": "getProduct",
    "httpMethod": "GET",
    "path": "/v1/amazon/product",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "asin",
        "jsonKey": "asin",
        "displayName": "ASIN",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "country",
        "jsonKey": "country",
        "displayName": "Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "amazon",
    "resourceName": "Amazon",
    "operation": "getPricing",
    "name": "Get Pricing",
    "description": "",
    "clientPath": [
      "amazon"
    ],
    "method": "getPricing",
    "httpMethod": "GET",
    "path": "/v1/amazon/pricing",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "asin",
        "jsonKey": "asin",
        "displayName": "ASIN",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "country",
        "jsonKey": "country",
        "displayName": "Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "amazon",
    "resourceName": "Amazon",
    "operation": "search",
    "name": "Search",
    "description": "",
    "clientPath": [
      "amazon"
    ],
    "method": "search",
    "httpMethod": "GET",
    "path": "/v1/amazon/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "search",
        "jsonKey": "search",
        "displayName": "Search",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "page",
        "jsonKey": "page",
        "displayName": "Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "merchant_id",
        "jsonKey": "merchant_id",
        "displayName": "Merchant ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "sort_by",
        "jsonKey": "sort_by",
        "displayName": "Sort By",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "enrich",
        "jsonKey": "enrich",
        "displayName": "Enrich",
        "type": "options",
        "required": false,
        "options": [
          "pricing"
        ],
        "rawType": "\"pricing\""
      },
      {
        "name": "country",
        "jsonKey": "country",
        "displayName": "Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "language",
        "jsonKey": "language",
        "displayName": "Language",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "domain",
        "jsonKey": "domain",
        "displayName": "Domain",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "device",
        "jsonKey": "device",
        "displayName": "Device",
        "type": "options",
        "required": false,
        "options": [
          "desktop",
          "mobile",
          "tablet"
        ],
        "rawType": "\"desktop\" | \"mobile\" | \"tablet\""
      },
      {
        "name": "timeout_ms",
        "jsonKey": "timeout_ms",
        "displayName": "Timeout MS",
        "type": "number",
        "required": false,
        "rawType": "number"
      }
    ]
  },
  {
    "resource": "amazon",
    "resourceName": "Amazon",
    "operation": "queueSearchCrawl",
    "name": "Queue Search Crawl",
    "description": "",
    "clientPath": [
      "amazon"
    ],
    "method": "queueSearchCrawl",
    "httpMethod": "GET",
    "path": "/v1/amazon/search/crawl",
    "argShape": "params",
    "idLabel": null,
    "isQueue": true,
    "requiredFields": [
      {
        "name": "search",
        "jsonKey": "search",
        "displayName": "Search",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "end_page",
        "jsonKey": "end_page",
        "displayName": "End Page",
        "type": "number",
        "required": true,
        "rawType": "number"
      }
    ],
    "optionalFields": [
      {
        "name": "start_page",
        "jsonKey": "start_page",
        "displayName": "Start Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "merchant_id",
        "jsonKey": "merchant_id",
        "displayName": "Merchant ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "sort_by",
        "jsonKey": "sort_by",
        "displayName": "Sort By",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "enrich",
        "jsonKey": "enrich",
        "displayName": "Enrich",
        "type": "options",
        "required": false,
        "options": [
          "pricing"
        ],
        "rawType": "\"pricing\""
      },
      {
        "name": "country",
        "jsonKey": "country",
        "displayName": "Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "language",
        "jsonKey": "language",
        "displayName": "Language",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "domain",
        "jsonKey": "domain",
        "displayName": "Domain",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "device",
        "jsonKey": "device",
        "displayName": "Device",
        "type": "options",
        "required": false,
        "options": [
          "desktop",
          "mobile",
          "tablet"
        ],
        "rawType": "\"desktop\" | \"mobile\" | \"tablet\""
      },
      {
        "name": "timeout_ms",
        "jsonKey": "timeout_ms",
        "displayName": "Timeout MS",
        "type": "number",
        "required": false,
        "rawType": "number"
      }
    ]
  },
  {
    "resource": "walmart",
    "resourceName": "Walmart",
    "operation": "getProduct",
    "name": "Get Product",
    "description": "Deprecated server-side as of 2026-07-11; may 404",
    "clientPath": [
      "walmart"
    ],
    "method": "getProduct",
    "httpMethod": "GET",
    "path": "/v1/walmart/product",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "product_id",
        "jsonKey": "product_id",
        "displayName": "Product ID",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "slug",
        "jsonKey": "slug",
        "displayName": "Slug",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "delivery_zip",
        "jsonKey": "delivery_zip",
        "displayName": "Delivery Zip",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "zip_code",
        "jsonKey": "zip_code",
        "displayName": "Zip Code",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "store_id",
        "jsonKey": "store_id",
        "displayName": "Store ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "walmart",
    "resourceName": "Walmart",
    "operation": "search",
    "name": "Search",
    "description": "",
    "clientPath": [
      "walmart"
    ],
    "method": "search",
    "httpMethod": "GET",
    "path": "/v1/walmart/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "search",
        "jsonKey": "search",
        "displayName": "Search",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "delivery_zip",
        "jsonKey": "delivery_zip",
        "displayName": "Delivery Zip",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "zip_code",
        "jsonKey": "zip_code",
        "displayName": "Zip Code",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "store_id",
        "jsonKey": "store_id",
        "displayName": "Store ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "sort_by",
        "jsonKey": "sort_by",
        "displayName": "Sort By",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "min_price",
        "jsonKey": "min_price",
        "displayName": "Min Price",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "max_price",
        "jsonKey": "max_price",
        "displayName": "Max Price",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "page",
        "jsonKey": "page",
        "displayName": "Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "pages",
        "jsonKey": "pages",
        "displayName": "Pages",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "fulfillment_speed",
        "jsonKey": "fulfillment_speed",
        "displayName": "Fulfillment Speed",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "fulfillment_type",
        "jsonKey": "fulfillment_type",
        "displayName": "Fulfillment Type",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "device",
        "jsonKey": "device",
        "displayName": "Device",
        "type": "options",
        "required": false,
        "options": [
          "desktop",
          "mobile",
          "tablet"
        ],
        "rawType": "\"desktop\" | \"mobile\" | \"tablet\""
      },
      {
        "name": "timeout_ms",
        "jsonKey": "timeout_ms",
        "displayName": "Timeout MS",
        "type": "number",
        "required": false,
        "rawType": "number"
      }
    ]
  },
  {
    "resource": "walmart",
    "resourceName": "Walmart",
    "operation": "queueSearchCrawl",
    "name": "Queue Search Crawl",
    "description": "",
    "clientPath": [
      "walmart"
    ],
    "method": "queueSearchCrawl",
    "httpMethod": "GET",
    "path": "/v1/walmart/search/crawl",
    "argShape": "params",
    "idLabel": null,
    "isQueue": true,
    "requiredFields": [
      {
        "name": "search",
        "jsonKey": "search",
        "displayName": "Search",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "end_page",
        "jsonKey": "end_page",
        "displayName": "End Page",
        "type": "number",
        "required": true,
        "rawType": "number"
      }
    ],
    "optionalFields": [
      {
        "name": "delivery_zip",
        "jsonKey": "delivery_zip",
        "displayName": "Delivery Zip",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "zip_code",
        "jsonKey": "zip_code",
        "displayName": "Zip Code",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "store_id",
        "jsonKey": "store_id",
        "displayName": "Store ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "sort_by",
        "jsonKey": "sort_by",
        "displayName": "Sort By",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "min_price",
        "jsonKey": "min_price",
        "displayName": "Min Price",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "max_price",
        "jsonKey": "max_price",
        "displayName": "Max Price",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "start_page",
        "jsonKey": "start_page",
        "displayName": "Start Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "fulfillment_speed",
        "jsonKey": "fulfillment_speed",
        "displayName": "Fulfillment Speed",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "fulfillment_type",
        "jsonKey": "fulfillment_type",
        "displayName": "Fulfillment Type",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "device",
        "jsonKey": "device",
        "displayName": "Device",
        "type": "options",
        "required": false,
        "options": [
          "desktop",
          "mobile",
          "tablet"
        ],
        "rawType": "\"desktop\" | \"mobile\" | \"tablet\""
      },
      {
        "name": "timeout_ms",
        "jsonKey": "timeout_ms",
        "displayName": "Timeout MS",
        "type": "number",
        "required": false,
        "rawType": "number"
      }
    ]
  },
  {
    "resource": "youtube",
    "resourceName": "YouTube",
    "operation": "search",
    "name": "Search",
    "description": "",
    "clientPath": [
      "youtube"
    ],
    "method": "search",
    "httpMethod": "GET",
    "path": "/v1/youtube/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "search",
        "jsonKey": "search",
        "displayName": "Search",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "type",
        "jsonKey": "type",
        "displayName": "Type",
        "type": "options",
        "required": false,
        "options": [
          "video",
          "channel",
          "playlist",
          "all"
        ],
        "rawType": "\"video\" | \"channel\" | \"playlist\" | \"all\""
      },
      {
        "name": "limit",
        "jsonKey": "limit",
        "displayName": "Limit",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "start_page",
        "jsonKey": "start_page",
        "displayName": "Start Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "end_page",
        "jsonKey": "end_page",
        "displayName": "End Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "country",
        "jsonKey": "country",
        "displayName": "Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "language",
        "jsonKey": "language",
        "displayName": "Language",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "youtube",
    "resourceName": "YouTube",
    "operation": "getVideo",
    "name": "Get Video",
    "description": "",
    "clientPath": [
      "youtube"
    ],
    "method": "getVideo",
    "httpMethod": "GET",
    "path": "/v1/youtube/videos/{video_id}",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "video_id",
        "jsonKey": "video_id",
        "displayName": "Video ID",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "youtube",
    "resourceName": "YouTube",
    "operation": "getSubtitles",
    "name": "Get Subtitles",
    "description": "",
    "clientPath": [
      "youtube"
    ],
    "method": "getSubtitles",
    "httpMethod": "GET",
    "path": "/v1/youtube/subtitles",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "video_id",
        "jsonKey": "video_id",
        "displayName": "Video ID",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "language",
        "jsonKey": "language",
        "displayName": "Language",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "youtube",
    "resourceName": "YouTube",
    "operation": "queueSearchCrawl",
    "name": "Queue Search Crawl",
    "description": "",
    "clientPath": [
      "youtube"
    ],
    "method": "queueSearchCrawl",
    "httpMethod": "POST",
    "path": "/v1/youtube/search/crawl",
    "argShape": "params",
    "idLabel": null,
    "isQueue": true,
    "requiredFields": [
      {
        "name": "search",
        "jsonKey": "search",
        "displayName": "Search",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "type",
        "jsonKey": "type",
        "displayName": "Type",
        "type": "options",
        "required": false,
        "options": [
          "video",
          "channel",
          "playlist",
          "all"
        ],
        "rawType": "\"video\" | \"channel\" | \"playlist\" | \"all\""
      },
      {
        "name": "limit",
        "jsonKey": "limit",
        "displayName": "Limit",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "start_page",
        "jsonKey": "start_page",
        "displayName": "Start Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "end_page",
        "jsonKey": "end_page",
        "displayName": "End Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "country",
        "jsonKey": "country",
        "displayName": "Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "language",
        "jsonKey": "language",
        "displayName": "Language",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "youtube",
    "resourceName": "YouTube",
    "operation": "getChannel",
    "name": "Get Channel",
    "description": "",
    "clientPath": [
      "youtube"
    ],
    "method": "getChannel",
    "httpMethod": "GET",
    "path": "/v1/youtube/channel",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "handle",
        "jsonKey": "handle",
        "displayName": "Handle",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "limit",
        "jsonKey": "limit",
        "displayName": "Limit",
        "type": "number",
        "required": false,
        "rawType": "number"
      }
    ]
  },
  {
    "resource": "interact",
    "resourceName": "Interact",
    "operation": "interact",
    "name": "Interact",
    "description": "",
    "clientPath": [
      "interact"
    ],
    "method": "interact",
    "httpMethod": "POST",
    "path": "/v1/interact",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "actions",
        "jsonKey": "actions",
        "displayName": "Actions",
        "type": "json",
        "required": true,
        "rawType": "InteractAction[]"
      }
    ],
    "optionalFields": [
      {
        "name": "device",
        "jsonKey": "device",
        "displayName": "Device",
        "type": "options",
        "required": false,
        "options": [
          "desktop",
          "mobile",
          "tablet"
        ],
        "rawType": "\"desktop\" | \"mobile\" | \"tablet\""
      },
      {
        "name": "session_id",
        "jsonKey": "session",
        "displayName": "Session ID",
        "type": "string",
        "required": false,
        "wrapPath": [
          "session",
          "id"
        ],
        "rawType": "{ id: string }"
      },
      {
        "name": "output",
        "jsonKey": "output",
        "displayName": "Output",
        "type": "string",
        "required": false,
        "isArrayCsv": true,
        "rawType": "string[]"
      },
      {
        "name": "extract",
        "jsonKey": "extract",
        "displayName": "Extract",
        "type": "json",
        "required": false,
        "rawType": "Record<string, unknown>"
      },
      {
        "name": "timeout_ms",
        "jsonKey": "timeout_ms",
        "displayName": "Timeout MS",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "proxy",
        "jsonKey": "proxy",
        "displayName": "Proxy",
        "type": "options",
        "required": false,
        "options": [
          "auto",
          "basic",
          "stealth"
        ],
        "rawType": "\"auto\" | \"basic\" | \"stealth\""
      }
    ]
  },
  {
    "resource": "crawl",
    "resourceName": "Crawl",
    "operation": "crawl",
    "name": "Crawl",
    "description": "",
    "clientPath": [
      "crawl"
    ],
    "method": "crawl",
    "httpMethod": "POST",
    "path": "/v1/crawl",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "seeds",
        "jsonKey": "seeds",
        "displayName": "Seeds",
        "type": "string",
        "required": true,
        "isArrayCsv": true,
        "rawType": "string[]"
      }
    ],
    "optionalFields": [
      {
        "name": "max_pages",
        "jsonKey": "max_pages",
        "displayName": "Max Pages",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "max_depth",
        "jsonKey": "max_depth",
        "displayName": "Max Depth",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "same_domain_only",
        "jsonKey": "same_domain_only",
        "displayName": "Same Domain Only",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      },
      {
        "name": "output",
        "jsonKey": "output",
        "displayName": "Output",
        "type": "string",
        "required": false,
        "isArrayCsv": true,
        "rawType": "string[]"
      },
      {
        "name": "extract",
        "jsonKey": "extract",
        "displayName": "Extract",
        "type": "json",
        "required": false,
        "rawType": "Record<string, unknown>"
      },
      {
        "name": "timeout_ms",
        "jsonKey": "timeout_ms",
        "displayName": "Timeout MS",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "proxy",
        "jsonKey": "proxy",
        "displayName": "Proxy",
        "type": "options",
        "required": false,
        "options": [
          "auto",
          "basic",
          "stealth"
        ],
        "rawType": "\"auto\" | \"basic\" | \"stealth\""
      }
    ]
  },
  {
    "resource": "search",
    "resourceName": "Search (Web)",
    "operation": "search",
    "name": "Search",
    "description": "",
    "clientPath": [
      "search"
    ],
    "method": "search",
    "httpMethod": "POST",
    "path": "/v1/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "provider",
        "jsonKey": "provider",
        "displayName": "Provider",
        "type": "options",
        "required": false,
        "options": [
          "google"
        ],
        "rawType": "\"google\""
      },
      {
        "name": "max_results",
        "jsonKey": "max_results",
        "displayName": "Max Results",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "fetch_results",
        "jsonKey": "fetch_results",
        "displayName": "Fetch Results",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      },
      {
        "name": "output",
        "jsonKey": "output",
        "displayName": "Output",
        "type": "multiOptions",
        "required": false,
        "options": [
          "html",
          "markdown",
          "json"
        ],
        "rawType": "Array<\"html\" | \"markdown\" | \"json\">"
      },
      {
        "name": "extract",
        "jsonKey": "extract",
        "displayName": "Extract",
        "type": "json",
        "required": false,
        "rawType": "Record<string, unknown>"
      },
      {
        "name": "timeout_ms",
        "jsonKey": "timeout_ms",
        "displayName": "Timeout MS",
        "type": "number",
        "required": false,
        "rawType": "number"
      }
    ]
  },
  {
    "resource": "map",
    "resourceName": "Map",
    "operation": "map",
    "name": "Map",
    "description": "",
    "clientPath": [
      "map"
    ],
    "method": "map",
    "httpMethod": "POST",
    "path": "/v1/map",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "seeds",
        "jsonKey": "seeds",
        "displayName": "Seeds",
        "type": "string",
        "required": true,
        "isArrayCsv": true,
        "rawType": "string[]"
      }
    ],
    "optionalFields": [
      {
        "name": "max_urls",
        "jsonKey": "max_urls",
        "displayName": "Max Urls",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "max_depth",
        "jsonKey": "max_depth",
        "displayName": "Max Depth",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "same_domain_only",
        "jsonKey": "same_domain_only",
        "displayName": "Same Domain Only",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      },
      {
        "name": "include_metadata",
        "jsonKey": "include_metadata",
        "displayName": "Include Metadata",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      },
      {
        "name": "timeout_ms",
        "jsonKey": "timeout_ms",
        "displayName": "Timeout MS",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "use_proxy",
        "jsonKey": "use_proxy",
        "displayName": "Use Proxy",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      },
      {
        "name": "proxy",
        "jsonKey": "proxy",
        "displayName": "Proxy",
        "type": "options",
        "required": false,
        "options": [
          "auto",
          "basic",
          "stealth"
        ],
        "rawType": "\"auto\" | \"basic\" | \"stealth\""
      }
    ]
  },
  {
    "resource": "booking",
    "resourceName": "Booking.com",
    "operation": "search",
    "name": "Search",
    "description": "",
    "clientPath": [
      "booking"
    ],
    "method": "search",
    "httpMethod": "GET",
    "path": "/v1/booking/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "check_in",
        "jsonKey": "check_in",
        "displayName": "Check In",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "check_out",
        "jsonKey": "check_out",
        "displayName": "Check Out",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "location",
        "jsonKey": "location",
        "displayName": "Location",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "adults",
        "jsonKey": "adults",
        "displayName": "Adults",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "children",
        "jsonKey": "children",
        "displayName": "Children",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "children_ages",
        "jsonKey": "children_ages",
        "displayName": "Children Ages",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "rooms",
        "jsonKey": "rooms",
        "displayName": "Rooms",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "currency",
        "jsonKey": "currency",
        "displayName": "Currency",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "pos_country",
        "jsonKey": "pos_country",
        "displayName": "POS Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "timeout_ms",
        "jsonKey": "timeout_ms",
        "displayName": "Timeout MS",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "page",
        "jsonKey": "page",
        "displayName": "Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "pages",
        "jsonKey": "pages",
        "displayName": "Pages",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "sort_by",
        "jsonKey": "sort_by",
        "displayName": "Sort By",
        "type": "options",
        "required": false,
        "options": [
          "price_low",
          "price_high",
          "rating",
          "best_match",
          "secret_deals"
        ],
        "rawType": "\"price_low\" | \"price_high\" | \"rating\" | \"best_match\" | \"secret_deals\""
      },
      {
        "name": "min_price",
        "jsonKey": "min_price",
        "displayName": "Min Price",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "max_price",
        "jsonKey": "max_price",
        "displayName": "Max Price",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "stars",
        "jsonKey": "stars",
        "displayName": "Stars",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "min_review_score",
        "jsonKey": "min_review_score",
        "displayName": "Min Review Score",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "device",
        "jsonKey": "device",
        "displayName": "Device",
        "type": "options",
        "required": false,
        "options": [
          "desktop",
          "mobile",
          "tablet"
        ],
        "rawType": "\"desktop\" | \"mobile\" | \"tablet\""
      }
    ]
  },
  {
    "resource": "booking",
    "resourceName": "Booking.com",
    "operation": "queueSearchCrawl",
    "name": "Queue Search Crawl",
    "description": "",
    "clientPath": [
      "booking"
    ],
    "method": "queueSearchCrawl",
    "httpMethod": "GET",
    "path": "/v1/booking/search/crawl",
    "argShape": "params",
    "idLabel": null,
    "isQueue": true,
    "requiredFields": [
      {
        "name": "check_in",
        "jsonKey": "check_in",
        "displayName": "Check In",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "check_out",
        "jsonKey": "check_out",
        "displayName": "Check Out",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "location",
        "jsonKey": "location",
        "displayName": "Location",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "end_page",
        "jsonKey": "end_page",
        "displayName": "End Page",
        "type": "number",
        "required": true,
        "rawType": "number"
      }
    ],
    "optionalFields": [
      {
        "name": "adults",
        "jsonKey": "adults",
        "displayName": "Adults",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "children",
        "jsonKey": "children",
        "displayName": "Children",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "children_ages",
        "jsonKey": "children_ages",
        "displayName": "Children Ages",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "rooms",
        "jsonKey": "rooms",
        "displayName": "Rooms",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "currency",
        "jsonKey": "currency",
        "displayName": "Currency",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "pos_country",
        "jsonKey": "pos_country",
        "displayName": "POS Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "timeout_ms",
        "jsonKey": "timeout_ms",
        "displayName": "Timeout MS",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "sort_by",
        "jsonKey": "sort_by",
        "displayName": "Sort By",
        "type": "options",
        "required": false,
        "options": [
          "price_low",
          "price_high",
          "rating",
          "best_match",
          "secret_deals"
        ],
        "rawType": "\"price_low\" | \"price_high\" | \"rating\" | \"best_match\" | \"secret_deals\""
      },
      {
        "name": "min_price",
        "jsonKey": "min_price",
        "displayName": "Min Price",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "max_price",
        "jsonKey": "max_price",
        "displayName": "Max Price",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "stars",
        "jsonKey": "stars",
        "displayName": "Stars",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "min_review_score",
        "jsonKey": "min_review_score",
        "displayName": "Min Review Score",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "device",
        "jsonKey": "device",
        "displayName": "Device",
        "type": "options",
        "required": false,
        "options": [
          "desktop",
          "mobile",
          "tablet"
        ],
        "rawType": "\"desktop\" | \"mobile\" | \"tablet\""
      },
      {
        "name": "start_page",
        "jsonKey": "start_page",
        "displayName": "Start Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      }
    ]
  },
  {
    "resource": "booking",
    "resourceName": "Booking.com",
    "operation": "getProperty",
    "name": "Get Property",
    "description": "",
    "clientPath": [
      "booking"
    ],
    "method": "getProperty",
    "httpMethod": "GET",
    "path": "/v1/booking/property",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "check_in",
        "jsonKey": "check_in",
        "displayName": "Check In",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "check_out",
        "jsonKey": "check_out",
        "displayName": "Check Out",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "adults",
        "jsonKey": "adults",
        "displayName": "Adults",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "children",
        "jsonKey": "children",
        "displayName": "Children",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "children_ages",
        "jsonKey": "children_ages",
        "displayName": "Children Ages",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "rooms",
        "jsonKey": "rooms",
        "displayName": "Rooms",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "currency",
        "jsonKey": "currency",
        "displayName": "Currency",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "pos_country",
        "jsonKey": "pos_country",
        "displayName": "POS Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "timeout_ms",
        "jsonKey": "timeout_ms",
        "displayName": "Timeout MS",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "property_id",
        "jsonKey": "property_id",
        "displayName": "Property ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "city_id",
        "jsonKey": "city_id",
        "displayName": "City ID",
        "type": "number",
        "required": false,
        "rawType": "number"
      }
    ]
  },
  {
    "resource": "booking",
    "resourceName": "Booking.com",
    "operation": "getReviews",
    "name": "Get Reviews",
    "description": "",
    "clientPath": [
      "booking"
    ],
    "method": "getReviews",
    "httpMethod": "GET",
    "path": "/v1/booking/reviews",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "property_id",
        "jsonKey": "property_id",
        "displayName": "Property ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "page",
        "jsonKey": "page",
        "displayName": "Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "sort_by",
        "jsonKey": "sort_by",
        "displayName": "Sort By",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "language",
        "jsonKey": "language",
        "displayName": "Language",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "include_review_details",
        "jsonKey": "include_review_details",
        "displayName": "Include Review Details",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      },
      {
        "name": "timeout_ms",
        "jsonKey": "timeout_ms",
        "displayName": "Timeout MS",
        "type": "number",
        "required": false,
        "rawType": "number"
      }
    ]
  },
  {
    "resource": "agoda",
    "resourceName": "Agoda",
    "operation": "search",
    "name": "Search",
    "description": "",
    "clientPath": [
      "agoda"
    ],
    "method": "search",
    "httpMethod": "GET",
    "path": "/v1/agoda/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "check_in",
        "jsonKey": "check_in",
        "displayName": "Check In",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "check_out",
        "jsonKey": "check_out",
        "displayName": "Check Out",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "location",
        "jsonKey": "location",
        "displayName": "Location",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "adults",
        "jsonKey": "adults",
        "displayName": "Adults",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "children",
        "jsonKey": "children",
        "displayName": "Children",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "children_ages",
        "jsonKey": "children_ages",
        "displayName": "Children Ages",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "rooms",
        "jsonKey": "rooms",
        "displayName": "Rooms",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "currency",
        "jsonKey": "currency",
        "displayName": "Currency",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "pos_country",
        "jsonKey": "pos_country",
        "displayName": "POS Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "timeout_ms",
        "jsonKey": "timeout_ms",
        "displayName": "Timeout MS",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "page",
        "jsonKey": "page",
        "displayName": "Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "pages",
        "jsonKey": "pages",
        "displayName": "Pages",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "sort_by",
        "jsonKey": "sort_by",
        "displayName": "Sort By",
        "type": "options",
        "required": false,
        "options": [
          "price_low",
          "price_high",
          "rating",
          "best_match",
          "secret_deals"
        ],
        "rawType": "\"price_low\" | \"price_high\" | \"rating\" | \"best_match\" | \"secret_deals\""
      },
      {
        "name": "min_price",
        "jsonKey": "min_price",
        "displayName": "Min Price",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "max_price",
        "jsonKey": "max_price",
        "displayName": "Max Price",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "stars",
        "jsonKey": "stars",
        "displayName": "Stars",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "min_review_score",
        "jsonKey": "min_review_score",
        "displayName": "Min Review Score",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "device",
        "jsonKey": "device",
        "displayName": "Device",
        "type": "options",
        "required": false,
        "options": [
          "desktop",
          "mobile",
          "tablet"
        ],
        "rawType": "\"desktop\" | \"mobile\" | \"tablet\""
      }
    ]
  },
  {
    "resource": "agoda",
    "resourceName": "Agoda",
    "operation": "queueSearchCrawl",
    "name": "Queue Search Crawl",
    "description": "",
    "clientPath": [
      "agoda"
    ],
    "method": "queueSearchCrawl",
    "httpMethod": "GET",
    "path": "/v1/agoda/search/crawl",
    "argShape": "params",
    "idLabel": null,
    "isQueue": true,
    "requiredFields": [
      {
        "name": "check_in",
        "jsonKey": "check_in",
        "displayName": "Check In",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "check_out",
        "jsonKey": "check_out",
        "displayName": "Check Out",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "location",
        "jsonKey": "location",
        "displayName": "Location",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "end_page",
        "jsonKey": "end_page",
        "displayName": "End Page",
        "type": "number",
        "required": true,
        "rawType": "number"
      }
    ],
    "optionalFields": [
      {
        "name": "adults",
        "jsonKey": "adults",
        "displayName": "Adults",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "children",
        "jsonKey": "children",
        "displayName": "Children",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "children_ages",
        "jsonKey": "children_ages",
        "displayName": "Children Ages",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "rooms",
        "jsonKey": "rooms",
        "displayName": "Rooms",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "currency",
        "jsonKey": "currency",
        "displayName": "Currency",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "pos_country",
        "jsonKey": "pos_country",
        "displayName": "POS Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "timeout_ms",
        "jsonKey": "timeout_ms",
        "displayName": "Timeout MS",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "device",
        "jsonKey": "device",
        "displayName": "Device",
        "type": "options",
        "required": false,
        "options": [
          "desktop",
          "mobile",
          "tablet"
        ],
        "rawType": "\"desktop\" | \"mobile\" | \"tablet\""
      },
      {
        "name": "start_page",
        "jsonKey": "start_page",
        "displayName": "Start Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      }
    ]
  },
  {
    "resource": "agoda",
    "resourceName": "Agoda",
    "operation": "getProperty",
    "name": "Get Property",
    "description": "",
    "clientPath": [
      "agoda"
    ],
    "method": "getProperty",
    "httpMethod": "GET",
    "path": "/v1/agoda/property",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "check_in",
        "jsonKey": "check_in",
        "displayName": "Check In",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "check_out",
        "jsonKey": "check_out",
        "displayName": "Check Out",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "adults",
        "jsonKey": "adults",
        "displayName": "Adults",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "children",
        "jsonKey": "children",
        "displayName": "Children",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "children_ages",
        "jsonKey": "children_ages",
        "displayName": "Children Ages",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "rooms",
        "jsonKey": "rooms",
        "displayName": "Rooms",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "currency",
        "jsonKey": "currency",
        "displayName": "Currency",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "pos_country",
        "jsonKey": "pos_country",
        "displayName": "POS Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "timeout_ms",
        "jsonKey": "timeout_ms",
        "displayName": "Timeout MS",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "property_id",
        "jsonKey": "property_id",
        "displayName": "Property ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "city_id",
        "jsonKey": "city_id",
        "displayName": "City ID",
        "type": "number",
        "required": false,
        "rawType": "number"
      }
    ]
  },
  {
    "resource": "agoda",
    "resourceName": "Agoda",
    "operation": "getReviews",
    "name": "Get Reviews",
    "description": "",
    "clientPath": [
      "agoda"
    ],
    "method": "getReviews",
    "httpMethod": "GET",
    "path": "/v1/agoda/reviews",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "property_id",
        "jsonKey": "property_id",
        "displayName": "Property ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "page",
        "jsonKey": "page",
        "displayName": "Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "sort_by",
        "jsonKey": "sort_by",
        "displayName": "Sort By",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "language",
        "jsonKey": "language",
        "displayName": "Language",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "include_review_details",
        "jsonKey": "include_review_details",
        "displayName": "Include Review Details",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      },
      {
        "name": "timeout_ms",
        "jsonKey": "timeout_ms",
        "displayName": "Timeout MS",
        "type": "number",
        "required": false,
        "rawType": "number"
      }
    ]
  },
  {
    "resource": "agoda",
    "resourceName": "Agoda",
    "operation": "queueReviewsCrawl",
    "name": "Queue Reviews Crawl",
    "description": "",
    "clientPath": [
      "agoda"
    ],
    "method": "queueReviewsCrawl",
    "httpMethod": "GET",
    "path": "/v1/agoda/reviews/crawl",
    "argShape": "params",
    "idLabel": null,
    "isQueue": true,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "property_id",
        "jsonKey": "property_id",
        "displayName": "Property ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "sort_by",
        "jsonKey": "sort_by",
        "displayName": "Sort By",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "language",
        "jsonKey": "language",
        "displayName": "Language",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "include_review_details",
        "jsonKey": "include_review_details",
        "displayName": "Include Review Details",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      },
      {
        "name": "timeout_ms",
        "jsonKey": "timeout_ms",
        "displayName": "Timeout MS",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "start_page",
        "jsonKey": "start_page",
        "displayName": "Start Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "end_page",
        "jsonKey": "end_page",
        "displayName": "End Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      }
    ]
  },
  {
    "resource": "airbnb",
    "resourceName": "Airbnb",
    "operation": "search",
    "name": "Search",
    "description": "",
    "clientPath": [
      "airbnb"
    ],
    "method": "search",
    "httpMethod": "GET",
    "path": "/v1/airbnb/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "location",
        "jsonKey": "location",
        "displayName": "Location",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "check_in",
        "jsonKey": "check_in",
        "displayName": "Check In",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "check_out",
        "jsonKey": "check_out",
        "displayName": "Check Out",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "adults",
        "jsonKey": "adults",
        "displayName": "Adults",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "children",
        "jsonKey": "children",
        "displayName": "Children",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "infants",
        "jsonKey": "infants",
        "displayName": "Infants",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "pets",
        "jsonKey": "pets",
        "displayName": "Pets",
        "type": "number",
        "required": false,
        "rawType": "number"
      }
    ]
  },
  {
    "resource": "airbnb",
    "resourceName": "Airbnb",
    "operation": "getListing",
    "name": "Get Listing",
    "description": "",
    "clientPath": [
      "airbnb"
    ],
    "method": "getListing",
    "httpMethod": "GET",
    "path": "/v1/airbnb/listing",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "listing_id",
        "jsonKey": "listing_id",
        "displayName": "Listing ID",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "check_in",
        "jsonKey": "check_in",
        "displayName": "Check In",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "check_out",
        "jsonKey": "check_out",
        "displayName": "Check Out",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "adults",
        "jsonKey": "adults",
        "displayName": "Adults",
        "type": "number",
        "required": false,
        "rawType": "number"
      }
    ]
  },
  {
    "resource": "autotrader",
    "resourceName": "Autotrader",
    "operation": "search",
    "name": "Search",
    "description": "",
    "clientPath": [
      "autotrader"
    ],
    "method": "search",
    "httpMethod": "GET",
    "path": "/v1/autotrader/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "postcode",
        "jsonKey": "postcode",
        "displayName": "Postcode",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "radius",
        "jsonKey": "radius",
        "displayName": "Radius",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "make",
        "jsonKey": "make",
        "displayName": "Make",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "model",
        "jsonKey": "model",
        "displayName": "Model",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "year_from",
        "jsonKey": "year_from",
        "displayName": "Year From",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "year_to",
        "jsonKey": "year_to",
        "displayName": "Year To",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "exclude_writeoffs",
        "jsonKey": "exclude_writeoffs",
        "displayName": "Exclude Writeoffs",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      },
      {
        "name": "page",
        "jsonKey": "page",
        "displayName": "Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "geo",
        "jsonKey": "geo",
        "displayName": "Geo",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "autotrader",
    "resourceName": "Autotrader",
    "operation": "getListing",
    "name": "Get Listing",
    "description": "",
    "clientPath": [
      "autotrader"
    ],
    "method": "getListing",
    "httpMethod": "GET",
    "path": "/v1/autotrader/listing",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "listing_id",
        "jsonKey": "listing_id",
        "displayName": "Listing ID",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "geo",
        "jsonKey": "geo",
        "displayName": "Geo",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "glassdoor",
    "resourceName": "Glassdoor",
    "operation": "jobs",
    "name": "Search Jobs",
    "description": "",
    "clientPath": [
      "glassdoor"
    ],
    "method": "jobs",
    "httpMethod": "GET",
    "path": "/v1/glassdoor/jobs",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "location",
        "jsonKey": "location",
        "displayName": "Location",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "limit",
        "jsonKey": "limit",
        "displayName": "Limit",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "cursor",
        "jsonKey": "cursor",
        "displayName": "Cursor",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "glassdoor",
    "resourceName": "Glassdoor",
    "operation": "jobDetail",
    "name": "Get Job Detail",
    "description": "",
    "clientPath": [
      "glassdoor"
    ],
    "method": "jobDetail",
    "httpMethod": "GET",
    "path": "/v1/glassdoor/job",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "job_id",
        "jsonKey": "job_id",
        "displayName": "Job ID",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "trustpilot",
    "resourceName": "Trustpilot",
    "operation": "reviews",
    "name": "Get Reviews",
    "description": "",
    "clientPath": [
      "trustpilot"
    ],
    "method": "reviews",
    "httpMethod": "GET",
    "path": "/v1/trustpilot/reviews",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "domain",
        "jsonKey": "domain",
        "displayName": "Domain",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "stars",
        "jsonKey": "stars",
        "displayName": "Stars",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "language",
        "jsonKey": "language",
        "displayName": "Language",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "verified",
        "jsonKey": "verified",
        "displayName": "Verified",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      },
      {
        "name": "limit",
        "jsonKey": "limit",
        "displayName": "Limit",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "cursor",
        "jsonKey": "cursor",
        "displayName": "Cursor",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "ziprecruiter",
    "resourceName": "ZipRecruiter",
    "operation": "jobs",
    "name": "Search Jobs",
    "description": "",
    "clientPath": [
      "ziprecruiter"
    ],
    "method": "jobs",
    "httpMethod": "GET",
    "path": "/v1/ziprecruiter/jobs",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "location",
        "jsonKey": "location",
        "displayName": "Location",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "limit",
        "jsonKey": "limit",
        "displayName": "Limit",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "cursor",
        "jsonKey": "cursor",
        "displayName": "Cursor",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "dice",
    "resourceName": "Dice",
    "operation": "jobs",
    "name": "Search Jobs",
    "description": "",
    "clientPath": [
      "dice"
    ],
    "method": "jobs",
    "httpMethod": "GET",
    "path": "/v1/dice/jobs",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "location",
        "jsonKey": "location",
        "displayName": "Location",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "limit",
        "jsonKey": "limit",
        "displayName": "Limit",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "cursor",
        "jsonKey": "cursor",
        "displayName": "Cursor",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "simplyhired",
    "resourceName": "SimplyHired",
    "operation": "jobs",
    "name": "Search Jobs",
    "description": "",
    "clientPath": [
      "simplyhired"
    ],
    "method": "jobs",
    "httpMethod": "GET",
    "path": "/v1/simplyhired/jobs",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "location",
        "jsonKey": "location",
        "displayName": "Location",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "limit",
        "jsonKey": "limit",
        "displayName": "Limit",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "cursor",
        "jsonKey": "cursor",
        "displayName": "Cursor",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "builtin",
    "resourceName": "Built In",
    "operation": "jobs",
    "name": "Search Jobs",
    "description": "",
    "clientPath": [
      "builtin"
    ],
    "method": "jobs",
    "httpMethod": "GET",
    "path": "/v1/builtin/jobs",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "limit",
        "jsonKey": "limit",
        "displayName": "Limit",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "cursor",
        "jsonKey": "cursor",
        "displayName": "Cursor",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "wellfound",
    "resourceName": "Wellfound",
    "operation": "jobs",
    "name": "Search Jobs",
    "description": "",
    "clientPath": [
      "wellfound"
    ],
    "method": "jobs",
    "httpMethod": "GET",
    "path": "/v1/wellfound/jobs",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "role",
        "jsonKey": "role",
        "displayName": "Role",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "limit",
        "jsonKey": "limit",
        "displayName": "Limit",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "cursor",
        "jsonKey": "cursor",
        "displayName": "Cursor",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "chatgpt",
    "resourceName": "ChatGPT",
    "operation": "prompt",
    "name": "Prompt",
    "description": "",
    "clientPath": [
      "chatgpt"
    ],
    "method": "prompt",
    "httpMethod": "GET",
    "path": "/v1/chatgpt/prompt",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "prompt",
        "jsonKey": "prompt",
        "displayName": "Prompt",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "search",
        "jsonKey": "search",
        "displayName": "Search",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      },
      {
        "name": "geo",
        "jsonKey": "geo",
        "displayName": "Geo",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "perplexity",
    "resourceName": "Perplexity",
    "operation": "prompt",
    "name": "Prompt",
    "description": "",
    "clientPath": [
      "perplexity"
    ],
    "method": "prompt",
    "httpMethod": "GET",
    "path": "/v1/perplexity/prompt",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "prompt",
        "jsonKey": "prompt",
        "displayName": "Prompt",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "geo",
        "jsonKey": "geo",
        "displayName": "Geo",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "gemini",
    "resourceName": "Gemini",
    "operation": "prompt",
    "name": "Prompt",
    "description": "",
    "clientPath": [
      "gemini"
    ],
    "method": "prompt",
    "httpMethod": "GET",
    "path": "/v1/gemini/prompt",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "prompt",
        "jsonKey": "prompt",
        "displayName": "Prompt",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "geo",
        "jsonKey": "geo",
        "displayName": "Geo",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "bing",
    "resourceName": "Bing",
    "operation": "search",
    "name": "Search",
    "description": "",
    "clientPath": [
      "bing"
    ],
    "method": "search",
    "httpMethod": "GET",
    "path": "/v1/bing/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "search",
        "jsonKey": "search",
        "displayName": "Search",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "geo",
        "jsonKey": "geo",
        "displayName": "Geo",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "locale",
        "jsonKey": "locale",
        "displayName": "Locale",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "domain",
        "jsonKey": "domain",
        "displayName": "Domain",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "page",
        "jsonKey": "page",
        "displayName": "Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "page_count",
        "jsonKey": "page_count",
        "displayName": "Page Count",
        "type": "number",
        "required": false,
        "rawType": "number"
      }
    ]
  },
  {
    "resource": "reddit",
    "resourceName": "Reddit",
    "operation": "getPost",
    "name": "Get Post",
    "description": "",
    "clientPath": [
      "reddit"
    ],
    "method": "getPost",
    "httpMethod": "GET",
    "path": "/v1/reddit/post",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "reddit",
    "resourceName": "Reddit",
    "operation": "getSubreddit",
    "name": "Get Subreddit",
    "description": "",
    "clientPath": [
      "reddit"
    ],
    "method": "getSubreddit",
    "httpMethod": "GET",
    "path": "/v1/reddit/subreddit",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "subreddit",
        "jsonKey": "subreddit",
        "displayName": "Subreddit",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "reddit",
    "resourceName": "Reddit",
    "operation": "getUser",
    "name": "Get User",
    "description": "",
    "clientPath": [
      "reddit"
    ],
    "method": "getUser",
    "httpMethod": "GET",
    "path": "/v1/reddit/user",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "hackerNews",
    "resourceName": "Hacker News",
    "operation": "getItem",
    "name": "Get Item",
    "description": "",
    "clientPath": [
      "hackerNews"
    ],
    "method": "getItem",
    "httpMethod": "GET",
    "path": "/v1/hacker-news/item",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "id",
        "jsonKey": "id",
        "displayName": "ID",
        "type": "number",
        "required": true,
        "rawType": "number"
      }
    ],
    "optionalFields": [
      {
        "name": "include_comments",
        "jsonKey": "include_comments",
        "displayName": "Include Comments",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      }
    ]
  },
  {
    "resource": "hackerNews",
    "resourceName": "Hacker News",
    "operation": "getUser",
    "name": "Get User",
    "description": "",
    "clientPath": [
      "hackerNews"
    ],
    "method": "getUser",
    "httpMethod": "GET",
    "path": "/v1/hacker-news/user",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "hackerNews",
    "resourceName": "Hacker News",
    "operation": "search",
    "name": "Search",
    "description": "",
    "clientPath": [
      "hackerNews"
    ],
    "method": "search",
    "httpMethod": "GET",
    "path": "/v1/hacker-news/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "tags",
        "jsonKey": "tags",
        "displayName": "Tags",
        "type": "json",
        "required": false,
        "rawType": "HackerNewsSearchTag[]"
      },
      {
        "name": "since",
        "jsonKey": "since",
        "displayName": "Since",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "sort",
        "jsonKey": "sort",
        "displayName": "Sort",
        "type": "options",
        "required": false,
        "options": [
          "relevance",
          "date"
        ],
        "rawType": "\"relevance\" | \"date\""
      },
      {
        "name": "page",
        "jsonKey": "page",
        "displayName": "Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "hits_per_page",
        "jsonKey": "hits_per_page",
        "displayName": "Hits Per Page",
        "type": "number",
        "required": false,
        "rawType": "number"
      }
    ]
  },
  {
    "resource": "hackerNews",
    "resourceName": "Hacker News",
    "operation": "getStories",
    "name": "Get Stories",
    "description": "",
    "clientPath": [
      "hackerNews"
    ],
    "method": "getStories",
    "httpMethod": "GET",
    "path": "/v1/hacker-news/stories",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "type",
        "jsonKey": "type",
        "displayName": "Type",
        "type": "options",
        "required": true,
        "options": [
          "top",
          "new",
          "best",
          "ask",
          "show",
          "job"
        ],
        "rawType": "HackerNewsStoriesType"
      }
    ],
    "optionalFields": [
      {
        "name": "limit",
        "jsonKey": "limit",
        "displayName": "Limit",
        "type": "number",
        "required": false,
        "rawType": "number"
      }
    ]
  },
  {
    "resource": "tiktok",
    "resourceName": "TikTok",
    "operation": "getPost",
    "name": "Get Post",
    "description": "",
    "clientPath": [
      "tiktok"
    ],
    "method": "getPost",
    "httpMethod": "GET",
    "path": "/v1/tiktok/post",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "target",
    "resourceName": "Target",
    "operation": "getProduct",
    "name": "Get Product",
    "description": "",
    "clientPath": [
      "target"
    ],
    "method": "getProduct",
    "httpMethod": "GET",
    "path": "/v1/target/product",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "product_id",
        "jsonKey": "product_id",
        "displayName": "Product ID",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "delivery_type",
        "jsonKey": "delivery_type",
        "displayName": "Delivery Type",
        "type": "options",
        "required": false,
        "options": [
          "pickup",
          "delivery",
          "shipping"
        ],
        "rawType": "TargetDeliveryType"
      },
      {
        "name": "delivery_zip",
        "jsonKey": "delivery_zip",
        "displayName": "Delivery Zip",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "store_id",
        "jsonKey": "store_id",
        "displayName": "Store ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "target",
    "resourceName": "Target",
    "operation": "search",
    "name": "Search",
    "description": "",
    "clientPath": [
      "target"
    ],
    "method": "search",
    "httpMethod": "GET",
    "path": "/v1/target/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "search",
        "jsonKey": "search",
        "displayName": "Search",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "delivery_type",
        "jsonKey": "delivery_type",
        "displayName": "Delivery Type",
        "type": "options",
        "required": false,
        "options": [
          "pickup",
          "delivery",
          "shipping"
        ],
        "rawType": "TargetDeliveryType"
      },
      {
        "name": "delivery_zip",
        "jsonKey": "delivery_zip",
        "displayName": "Delivery Zip",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "store_id",
        "jsonKey": "store_id",
        "displayName": "Store ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "appleAppStore",
    "resourceName": "Apple App Store",
    "operation": "getApp",
    "name": "Get App",
    "description": "",
    "clientPath": [
      "appleAppStore"
    ],
    "method": "getApp",
    "httpMethod": "GET",
    "path": "/v1/apple-app-store/app",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "productHunt",
    "resourceName": "Product Hunt",
    "operation": "leaderboard",
    "name": "Get Leaderboard",
    "description": "",
    "clientPath": [
      "productHunt"
    ],
    "method": "leaderboard",
    "httpMethod": "GET",
    "path": "/v1/product-hunt/leaderboard",
    "argShape": "paramsOptional",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "period",
        "jsonKey": "period",
        "displayName": "Period",
        "type": "options",
        "required": false,
        "options": [
          "daily",
          "weekly",
          "monthly"
        ],
        "rawType": "\"daily\" | \"weekly\" | \"monthly\""
      },
      {
        "name": "date",
        "jsonKey": "date",
        "displayName": "Date",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "category",
        "jsonKey": "category",
        "displayName": "Category",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "productHunt",
    "resourceName": "Product Hunt",
    "operation": "queueLeaderboardCrawl",
    "name": "Queue Leaderboard Crawl",
    "description": "",
    "clientPath": [
      "productHunt"
    ],
    "method": "queueLeaderboardCrawl",
    "httpMethod": "GET",
    "path": "/v1/product-hunt/leaderboard/crawl",
    "argShape": "paramsOptional",
    "idLabel": null,
    "isQueue": true,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "period",
        "jsonKey": "period",
        "displayName": "Period",
        "type": "options",
        "required": false,
        "options": [
          "daily",
          "weekly",
          "monthly"
        ],
        "rawType": "\"daily\" | \"weekly\" | \"monthly\""
      },
      {
        "name": "date",
        "jsonKey": "date",
        "displayName": "Date",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "category",
        "jsonKey": "category",
        "displayName": "Category",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "productHunt",
    "resourceName": "Product Hunt",
    "operation": "getProduct",
    "name": "Get Product",
    "description": "",
    "clientPath": [
      "productHunt"
    ],
    "method": "getProduct",
    "httpMethod": "GET",
    "path": "/v1/product-hunt/product",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "slug",
        "jsonKey": "slug",
        "displayName": "Slug",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "include_comments",
        "jsonKey": "include_comments",
        "displayName": "Include Comments",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      }
    ]
  },
  {
    "resource": "productHunt",
    "resourceName": "Product Hunt",
    "operation": "getMaker",
    "name": "Get Maker",
    "description": "",
    "clientPath": [
      "productHunt"
    ],
    "method": "getMaker",
    "httpMethod": "GET",
    "path": "/v1/product-hunt/maker",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "facebook",
    "resourceName": "Facebook",
    "operation": "getPage",
    "name": "Get Page",
    "description": "",
    "clientPath": [
      "facebook"
    ],
    "method": "getPage",
    "httpMethod": "GET",
    "path": "/v1/facebook/page",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "facebook",
    "resourceName": "Facebook",
    "operation": "getPosts",
    "name": "Get Posts",
    "description": "",
    "clientPath": [
      "facebook"
    ],
    "method": "getPosts",
    "httpMethod": "GET",
    "path": "/v1/facebook/posts",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "facebook",
    "resourceName": "Facebook",
    "operation": "getPhotos",
    "name": "Get Photos",
    "description": "",
    "clientPath": [
      "facebook"
    ],
    "method": "getPhotos",
    "httpMethod": "GET",
    "path": "/v1/facebook/photos",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "facebook",
    "resourceName": "Facebook",
    "operation": "getReels",
    "name": "Get Reels",
    "description": "",
    "clientPath": [
      "facebook"
    ],
    "method": "getReels",
    "httpMethod": "GET",
    "path": "/v1/facebook/reels",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "facebook",
    "resourceName": "Facebook",
    "operation": "getPost",
    "name": "Get Post",
    "description": "",
    "clientPath": [
      "facebook"
    ],
    "method": "getPost",
    "httpMethod": "GET",
    "path": "/v1/facebook/post",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "facebook",
    "resourceName": "Facebook",
    "operation": "getGroup",
    "name": "Get Group",
    "description": "",
    "clientPath": [
      "facebook"
    ],
    "method": "getGroup",
    "httpMethod": "GET",
    "path": "/v1/facebook/group",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "id",
        "jsonKey": "id",
        "displayName": "ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "facebook",
    "resourceName": "Facebook",
    "operation": "getGroupPosts",
    "name": "Get Group Posts",
    "description": "",
    "clientPath": [
      "facebook"
    ],
    "method": "getGroupPosts",
    "httpMethod": "GET",
    "path": "/v1/facebook/group/posts",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "id",
        "jsonKey": "id",
        "displayName": "ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "facebook",
    "resourceName": "Facebook",
    "operation": "getEvent",
    "name": "Get Event",
    "description": "",
    "clientPath": [
      "facebook"
    ],
    "method": "getEvent",
    "httpMethod": "GET",
    "path": "/v1/facebook/event",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "id",
        "jsonKey": "id",
        "displayName": "ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "facebook",
    "resourceName": "Facebook",
    "operation": "searchEvents",
    "name": "Search Events",
    "description": "",
    "clientPath": [
      "facebook"
    ],
    "method": "searchEvents",
    "httpMethod": "GET",
    "path": "/v1/facebook/events/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "facebook",
    "resourceName": "Facebook",
    "operation": "getMarketplaceItem",
    "name": "Get Marketplace Item",
    "description": "",
    "clientPath": [
      "facebook"
    ],
    "method": "getMarketplaceItem",
    "httpMethod": "GET",
    "path": "/v1/facebook/marketplace/item",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "id",
        "jsonKey": "id",
        "displayName": "ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "facebook",
    "resourceName": "Facebook",
    "operation": "searchMarketplace",
    "name": "Search Marketplace",
    "description": "",
    "clientPath": [
      "facebook"
    ],
    "method": "searchMarketplace",
    "httpMethod": "GET",
    "path": "/v1/facebook/marketplace/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "lat",
        "jsonKey": "lat",
        "displayName": "Lat",
        "type": "number",
        "required": true,
        "rawType": "number"
      },
      {
        "name": "lng",
        "jsonKey": "lng",
        "displayName": "Lng",
        "type": "number",
        "required": true,
        "rawType": "number"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "facebook",
    "resourceName": "Facebook",
    "operation": "getAd",
    "name": "Get Ad",
    "description": "",
    "clientPath": [
      "facebook"
    ],
    "method": "getAd",
    "httpMethod": "GET",
    "path": "/v1/facebook/adLibrary/ad",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "id",
        "jsonKey": "id",
        "displayName": "ID",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "facebook",
    "resourceName": "Facebook",
    "operation": "searchAdLibrary",
    "name": "Search Ad Library",
    "description": "",
    "clientPath": [
      "facebook"
    ],
    "method": "searchAdLibrary",
    "httpMethod": "GET",
    "path": "/v1/facebook/adLibrary/search/ads",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "country",
        "jsonKey": "country",
        "displayName": "Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "facebook",
    "resourceName": "Facebook",
    "operation": "getAdLibraryCompanyAds",
    "name": "Get Ad Library Company Ads",
    "description": "",
    "clientPath": [
      "facebook"
    ],
    "method": "getAdLibraryCompanyAds",
    "httpMethod": "GET",
    "path": "/v1/facebook/adLibrary/company/ads",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "pageId",
        "jsonKey": "pageId",
        "displayName": "PageId",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "country",
        "jsonKey": "country",
        "displayName": "Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "twitter",
    "resourceName": "Twitter / X",
    "operation": "getProfile",
    "name": "Get Profile",
    "description": "",
    "clientPath": [
      "twitter"
    ],
    "method": "getProfile",
    "httpMethod": "GET",
    "path": "/v1/twitter/profile",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "twitter",
    "resourceName": "Twitter / X",
    "operation": "getTweets",
    "name": "Get Tweets",
    "description": "",
    "clientPath": [
      "twitter"
    ],
    "method": "getTweets",
    "httpMethod": "GET",
    "path": "/v1/twitter/tweets",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "twitter",
    "resourceName": "Twitter / X",
    "operation": "getTweet",
    "name": "Get Tweet",
    "description": "",
    "clientPath": [
      "twitter"
    ],
    "method": "getTweet",
    "httpMethod": "GET",
    "path": "/v1/twitter/tweet",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "twitter",
    "resourceName": "Twitter / X",
    "operation": "search",
    "name": "Search",
    "description": "",
    "clientPath": [
      "twitter"
    ],
    "method": "search",
    "httpMethod": "GET",
    "path": "/v1/twitter/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "sort",
        "jsonKey": "sort",
        "displayName": "Sort",
        "type": "options",
        "required": false,
        "options": [
          "top",
          "latest"
        ],
        "rawType": "\"top\" | \"latest\""
      }
    ]
  },
  {
    "resource": "twitter",
    "resourceName": "Twitter / X",
    "operation": "getCommunity",
    "name": "Get Community",
    "description": "",
    "clientPath": [
      "twitter"
    ],
    "method": "getCommunity",
    "httpMethod": "GET",
    "path": "/v1/twitter/community",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "twitter",
    "resourceName": "Twitter / X",
    "operation": "getCommunityTweets",
    "name": "Get Community Tweets",
    "description": "",
    "clientPath": [
      "twitter"
    ],
    "method": "getCommunityTweets",
    "httpMethod": "GET",
    "path": "/v1/twitter/community/tweets",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "threads",
    "resourceName": "Threads",
    "operation": "getProfile",
    "name": "Get Profile",
    "description": "",
    "clientPath": [
      "threads"
    ],
    "method": "getProfile",
    "httpMethod": "GET",
    "path": "/v1/threads/profile",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "threads",
    "resourceName": "Threads",
    "operation": "getPosts",
    "name": "Get Posts",
    "description": "",
    "clientPath": [
      "threads"
    ],
    "method": "getPosts",
    "httpMethod": "GET",
    "path": "/v1/threads/posts",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "threads",
    "resourceName": "Threads",
    "operation": "getPost",
    "name": "Get Post",
    "description": "",
    "clientPath": [
      "threads"
    ],
    "method": "getPost",
    "httpMethod": "GET",
    "path": "/v1/threads/post",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "github",
    "resourceName": "GitHub",
    "operation": "getUser",
    "name": "Get User",
    "description": "",
    "clientPath": [
      "github"
    ],
    "method": "getUser",
    "httpMethod": "GET",
    "path": "/v1/github/user",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "github",
    "resourceName": "GitHub",
    "operation": "getRepo",
    "name": "Get Repo",
    "description": "",
    "clientPath": [
      "github"
    ],
    "method": "getRepo",
    "httpMethod": "GET",
    "path": "/v1/github/repo",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "owner",
        "jsonKey": "owner",
        "displayName": "Owner",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "repo",
        "jsonKey": "repo",
        "displayName": "Repo",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "github",
    "resourceName": "GitHub",
    "operation": "getRepos",
    "name": "Get Repos",
    "description": "",
    "clientPath": [
      "github"
    ],
    "method": "getRepos",
    "httpMethod": "GET",
    "path": "/v1/github/repos",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "monitors",
    "resourceName": "Monitors",
    "operation": "create",
    "name": "Create Monitor",
    "description": "",
    "clientPath": [
      "monitors"
    ],
    "method": "create",
    "httpMethod": "POST",
    "path": "/v1/monitors",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "name",
        "jsonKey": "name",
        "displayName": "Name",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "cron",
        "jsonKey": "cron",
        "displayName": "CRON",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "mode",
        "jsonKey": "mode",
        "displayName": "Mode",
        "type": "options",
        "required": false,
        "options": [
          "fields",
          "content"
        ],
        "rawType": "\"fields\" | \"content\""
      },
      {
        "name": "extract",
        "jsonKey": "extract",
        "displayName": "Extract",
        "type": "json",
        "required": false,
        "rawType": "Record<string, string>"
      },
      {
        "name": "watch",
        "jsonKey": "watch",
        "displayName": "Watch",
        "type": "json",
        "required": false,
        "rawType": "unknown"
      },
      {
        "name": "webhook_endpoint_id",
        "jsonKey": "webhook_endpoint_id",
        "displayName": "Webhook Endpoint ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "monitors",
    "resourceName": "Monitors",
    "operation": "list",
    "name": "List Monitors",
    "description": "",
    "clientPath": [
      "monitors"
    ],
    "method": "list",
    "httpMethod": "GET",
    "path": "/v1/monitors",
    "argShape": "none",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "monitors",
    "resourceName": "Monitors",
    "operation": "get",
    "name": "Get Monitor",
    "description": "",
    "clientPath": [
      "monitors"
    ],
    "method": "get",
    "httpMethod": "GET",
    "path": "/v1/monitors/{resourceId}",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "monitors",
    "resourceName": "Monitors",
    "operation": "update",
    "name": "Update Monitor",
    "description": "",
    "clientPath": [
      "monitors"
    ],
    "method": "update",
    "httpMethod": "PATCH",
    "path": "/v1/monitors/{resourceId}",
    "argShape": "idParams",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "name",
        "jsonKey": "name",
        "displayName": "Name",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "extract",
        "jsonKey": "extract",
        "displayName": "Extract",
        "type": "json",
        "required": false,
        "rawType": "Record<string, string>"
      },
      {
        "name": "cron",
        "jsonKey": "cron",
        "displayName": "CRON",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "watch",
        "jsonKey": "watch",
        "displayName": "Watch",
        "type": "json",
        "required": false,
        "rawType": "unknown"
      },
      {
        "name": "webhook_endpoint_id",
        "jsonKey": "webhook_endpoint_id",
        "displayName": "Webhook Endpoint ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "active",
        "jsonKey": "active",
        "displayName": "Active",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      }
    ]
  },
  {
    "resource": "monitors",
    "resourceName": "Monitors",
    "operation": "delete",
    "name": "Delete Monitor",
    "description": "",
    "clientPath": [
      "monitors"
    ],
    "method": "delete",
    "httpMethod": "DELETE",
    "path": "/v1/monitors/{resourceId}",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "monitors",
    "resourceName": "Monitors",
    "operation": "trigger",
    "name": "Trigger Monitor",
    "description": "",
    "clientPath": [
      "monitors"
    ],
    "method": "trigger",
    "httpMethod": "POST",
    "path": "/v1/monitors/{resourceId}/trigger",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "monitors",
    "resourceName": "Monitors",
    "operation": "listRuns",
    "name": "List Runs",
    "description": "",
    "clientPath": [
      "monitors"
    ],
    "method": "listRuns",
    "httpMethod": "GET",
    "path": "/v1/monitors/{resourceId}/runs",
    "argShape": "idLimit",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "monitors",
    "resourceName": "Monitors",
    "operation": "getLatestRun",
    "name": "Get Latest Run",
    "description": "",
    "clientPath": [
      "monitors"
    ],
    "method": "getLatestRun",
    "httpMethod": "GET",
    "path": "/v1/monitors/{resourceId}/runs/latest",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "monitors",
    "resourceName": "Monitors",
    "operation": "listChanges",
    "name": "List Changes",
    "description": "",
    "clientPath": [
      "monitors"
    ],
    "method": "listChanges",
    "httpMethod": "GET",
    "path": "/v1/monitors/{resourceId}/changes",
    "argShape": "idLimit",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "monitors",
    "resourceName": "Monitors",
    "operation": "getLatestChange",
    "name": "Get Latest Change",
    "description": "",
    "clientPath": [
      "monitors"
    ],
    "method": "getLatestChange",
    "httpMethod": "GET",
    "path": "/v1/monitors/{resourceId}/changes/latest",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "bookingMonitors",
    "resourceName": "Booking Monitors",
    "operation": "create",
    "name": "Create Monitor",
    "description": "",
    "clientPath": [
      "booking",
      "monitors"
    ],
    "method": "create",
    "httpMethod": "POST",
    "path": "/v1/booking/monitors",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "name",
        "jsonKey": "name",
        "displayName": "Name",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "cron",
        "jsonKey": "cron",
        "displayName": "CRON",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "property_id",
        "jsonKey": "property_id",
        "displayName": "Property ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "check_in",
        "jsonKey": "check_in",
        "displayName": "Check In",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "check_out",
        "jsonKey": "check_out",
        "displayName": "Check Out",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "adults",
        "jsonKey": "adults",
        "displayName": "Adults",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "children",
        "jsonKey": "children",
        "displayName": "Children",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "rooms",
        "jsonKey": "rooms",
        "displayName": "Rooms",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "currency",
        "jsonKey": "currency",
        "displayName": "Currency",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "pos_country",
        "jsonKey": "pos_country",
        "displayName": "POS Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "channels",
        "jsonKey": "channels",
        "displayName": "Channels",
        "type": "json",
        "required": false,
        "rawType": "{ provider: \"booking\" | \"agoda\"; property_id: string }[]"
      },
      {
        "name": "watch",
        "jsonKey": "watch",
        "displayName": "Watch",
        "type": "json",
        "required": false,
        "rawType": "unknown"
      },
      {
        "name": "webhook_endpoint_id",
        "jsonKey": "webhook_endpoint_id",
        "displayName": "Webhook Endpoint ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "bookingMonitors",
    "resourceName": "Booking Monitors",
    "operation": "list",
    "name": "List Monitors",
    "description": "",
    "clientPath": [
      "booking",
      "monitors"
    ],
    "method": "list",
    "httpMethod": "GET",
    "path": "/v1/booking/monitors",
    "argShape": "none",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "bookingMonitors",
    "resourceName": "Booking Monitors",
    "operation": "get",
    "name": "Get Monitor",
    "description": "",
    "clientPath": [
      "booking",
      "monitors"
    ],
    "method": "get",
    "httpMethod": "GET",
    "path": "/v1/booking/monitors/{resourceId}",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "bookingMonitors",
    "resourceName": "Booking Monitors",
    "operation": "update",
    "name": "Update Monitor",
    "description": "",
    "clientPath": [
      "booking",
      "monitors"
    ],
    "method": "update",
    "httpMethod": "PATCH",
    "path": "/v1/booking/monitors/{resourceId}",
    "argShape": "idParams",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "name",
        "jsonKey": "name",
        "displayName": "Name",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "check_in",
        "jsonKey": "check_in",
        "displayName": "Check In",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "check_out",
        "jsonKey": "check_out",
        "displayName": "Check Out",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "adults",
        "jsonKey": "adults",
        "displayName": "Adults",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "children",
        "jsonKey": "children",
        "displayName": "Children",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "rooms",
        "jsonKey": "rooms",
        "displayName": "Rooms",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "currency",
        "jsonKey": "currency",
        "displayName": "Currency",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "pos_country",
        "jsonKey": "pos_country",
        "displayName": "POS Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "channels",
        "jsonKey": "channels",
        "displayName": "Channels",
        "type": "json",
        "required": false,
        "rawType": "{ provider: \"booking\" | \"agoda\"; property_id: string }[]"
      },
      {
        "name": "cron",
        "jsonKey": "cron",
        "displayName": "CRON",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "watch",
        "jsonKey": "watch",
        "displayName": "Watch",
        "type": "json",
        "required": false,
        "rawType": "unknown"
      },
      {
        "name": "webhook_endpoint_id",
        "jsonKey": "webhook_endpoint_id",
        "displayName": "Webhook Endpoint ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "active",
        "jsonKey": "active",
        "displayName": "Active",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      }
    ]
  },
  {
    "resource": "bookingMonitors",
    "resourceName": "Booking Monitors",
    "operation": "delete",
    "name": "Delete Monitor",
    "description": "",
    "clientPath": [
      "booking",
      "monitors"
    ],
    "method": "delete",
    "httpMethod": "DELETE",
    "path": "/v1/booking/monitors/{resourceId}",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "bookingMonitors",
    "resourceName": "Booking Monitors",
    "operation": "trigger",
    "name": "Trigger Monitor",
    "description": "",
    "clientPath": [
      "booking",
      "monitors"
    ],
    "method": "trigger",
    "httpMethod": "POST",
    "path": "/v1/booking/monitors/{resourceId}/trigger",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "bookingMonitors",
    "resourceName": "Booking Monitors",
    "operation": "listRuns",
    "name": "List Runs",
    "description": "",
    "clientPath": [
      "booking",
      "monitors"
    ],
    "method": "listRuns",
    "httpMethod": "GET",
    "path": "/v1/booking/monitors/{resourceId}/runs",
    "argShape": "idLimit",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "bookingMonitors",
    "resourceName": "Booking Monitors",
    "operation": "getLatestRun",
    "name": "Get Latest Run",
    "description": "",
    "clientPath": [
      "booking",
      "monitors"
    ],
    "method": "getLatestRun",
    "httpMethod": "GET",
    "path": "/v1/booking/monitors/{resourceId}/runs/latest",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "bookingMonitors",
    "resourceName": "Booking Monitors",
    "operation": "listChanges",
    "name": "List Changes",
    "description": "",
    "clientPath": [
      "booking",
      "monitors"
    ],
    "method": "listChanges",
    "httpMethod": "GET",
    "path": "/v1/booking/monitors/{resourceId}/changes",
    "argShape": "idLimit",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "bookingMonitors",
    "resourceName": "Booking Monitors",
    "operation": "getLatestChange",
    "name": "Get Latest Change",
    "description": "",
    "clientPath": [
      "booking",
      "monitors"
    ],
    "method": "getLatestChange",
    "httpMethod": "GET",
    "path": "/v1/booking/monitors/{resourceId}/changes/latest",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "agodaMonitors",
    "resourceName": "Agoda Monitors",
    "operation": "create",
    "name": "Create Monitor",
    "description": "",
    "clientPath": [
      "agoda",
      "monitors"
    ],
    "method": "create",
    "httpMethod": "POST",
    "path": "/v1/agoda/monitors",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "name",
        "jsonKey": "name",
        "displayName": "Name",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "cron",
        "jsonKey": "cron",
        "displayName": "CRON",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "check_in",
        "jsonKey": "check_in",
        "displayName": "Check In",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "check_out",
        "jsonKey": "check_out",
        "displayName": "Check Out",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "adults",
        "jsonKey": "adults",
        "displayName": "Adults",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "children",
        "jsonKey": "children",
        "displayName": "Children",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "rooms",
        "jsonKey": "rooms",
        "displayName": "Rooms",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "currency",
        "jsonKey": "currency",
        "displayName": "Currency",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "pos_country",
        "jsonKey": "pos_country",
        "displayName": "POS Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "watch",
        "jsonKey": "watch",
        "displayName": "Watch",
        "type": "json",
        "required": false,
        "rawType": "unknown"
      },
      {
        "name": "webhook_endpoint_id",
        "jsonKey": "webhook_endpoint_id",
        "displayName": "Webhook Endpoint ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "agodaMonitors",
    "resourceName": "Agoda Monitors",
    "operation": "list",
    "name": "List Monitors",
    "description": "",
    "clientPath": [
      "agoda",
      "monitors"
    ],
    "method": "list",
    "httpMethod": "GET",
    "path": "/v1/agoda/monitors",
    "argShape": "none",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "agodaMonitors",
    "resourceName": "Agoda Monitors",
    "operation": "get",
    "name": "Get Monitor",
    "description": "",
    "clientPath": [
      "agoda",
      "monitors"
    ],
    "method": "get",
    "httpMethod": "GET",
    "path": "/v1/agoda/monitors/{resourceId}",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "agodaMonitors",
    "resourceName": "Agoda Monitors",
    "operation": "update",
    "name": "Update Monitor",
    "description": "",
    "clientPath": [
      "agoda",
      "monitors"
    ],
    "method": "update",
    "httpMethod": "PATCH",
    "path": "/v1/agoda/monitors/{resourceId}",
    "argShape": "idParams",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "name",
        "jsonKey": "name",
        "displayName": "Name",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "check_in",
        "jsonKey": "check_in",
        "displayName": "Check In",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "check_out",
        "jsonKey": "check_out",
        "displayName": "Check Out",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "adults",
        "jsonKey": "adults",
        "displayName": "Adults",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "children",
        "jsonKey": "children",
        "displayName": "Children",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "rooms",
        "jsonKey": "rooms",
        "displayName": "Rooms",
        "type": "number",
        "required": false,
        "rawType": "number"
      },
      {
        "name": "currency",
        "jsonKey": "currency",
        "displayName": "Currency",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "pos_country",
        "jsonKey": "pos_country",
        "displayName": "POS Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "cron",
        "jsonKey": "cron",
        "displayName": "CRON",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "watch",
        "jsonKey": "watch",
        "displayName": "Watch",
        "type": "json",
        "required": false,
        "rawType": "unknown"
      },
      {
        "name": "webhook_endpoint_id",
        "jsonKey": "webhook_endpoint_id",
        "displayName": "Webhook Endpoint ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "active",
        "jsonKey": "active",
        "displayName": "Active",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      }
    ]
  },
  {
    "resource": "agodaMonitors",
    "resourceName": "Agoda Monitors",
    "operation": "delete",
    "name": "Delete Monitor",
    "description": "",
    "clientPath": [
      "agoda",
      "monitors"
    ],
    "method": "delete",
    "httpMethod": "DELETE",
    "path": "/v1/agoda/monitors/{resourceId}",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "agodaMonitors",
    "resourceName": "Agoda Monitors",
    "operation": "trigger",
    "name": "Trigger Monitor",
    "description": "",
    "clientPath": [
      "agoda",
      "monitors"
    ],
    "method": "trigger",
    "httpMethod": "POST",
    "path": "/v1/agoda/monitors/{resourceId}/trigger",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "agodaMonitors",
    "resourceName": "Agoda Monitors",
    "operation": "listRuns",
    "name": "List Runs",
    "description": "",
    "clientPath": [
      "agoda",
      "monitors"
    ],
    "method": "listRuns",
    "httpMethod": "GET",
    "path": "/v1/agoda/monitors/{resourceId}/runs",
    "argShape": "idLimit",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "agodaMonitors",
    "resourceName": "Agoda Monitors",
    "operation": "getLatestRun",
    "name": "Get Latest Run",
    "description": "",
    "clientPath": [
      "agoda",
      "monitors"
    ],
    "method": "getLatestRun",
    "httpMethod": "GET",
    "path": "/v1/agoda/monitors/{resourceId}/runs/latest",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "agodaMonitors",
    "resourceName": "Agoda Monitors",
    "operation": "listChanges",
    "name": "List Changes",
    "description": "",
    "clientPath": [
      "agoda",
      "monitors"
    ],
    "method": "listChanges",
    "httpMethod": "GET",
    "path": "/v1/agoda/monitors/{resourceId}/changes",
    "argShape": "idLimit",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "agodaMonitors",
    "resourceName": "Agoda Monitors",
    "operation": "getLatestChange",
    "name": "Get Latest Change",
    "description": "",
    "clientPath": [
      "agoda",
      "monitors"
    ],
    "method": "getLatestChange",
    "httpMethod": "GET",
    "path": "/v1/agoda/monitors/{resourceId}/changes/latest",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "productHuntMonitors",
    "resourceName": "Product Hunt Monitors",
    "operation": "create",
    "name": "Create Monitor",
    "description": "",
    "clientPath": [
      "productHunt",
      "monitors"
    ],
    "method": "create",
    "httpMethod": "POST",
    "path": "/v1/product-hunt/monitors",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "name",
        "jsonKey": "name",
        "displayName": "Name",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "cron",
        "jsonKey": "cron",
        "displayName": "CRON",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "slug",
        "jsonKey": "slug",
        "displayName": "Slug",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "watch",
        "jsonKey": "watch",
        "displayName": "Watch",
        "type": "json",
        "required": false,
        "rawType": "unknown"
      },
      {
        "name": "webhook_endpoint_id",
        "jsonKey": "webhook_endpoint_id",
        "displayName": "Webhook Endpoint ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "productHuntMonitors",
    "resourceName": "Product Hunt Monitors",
    "operation": "list",
    "name": "List Monitors",
    "description": "",
    "clientPath": [
      "productHunt",
      "monitors"
    ],
    "method": "list",
    "httpMethod": "GET",
    "path": "/v1/product-hunt/monitors",
    "argShape": "none",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "productHuntMonitors",
    "resourceName": "Product Hunt Monitors",
    "operation": "get",
    "name": "Get Monitor",
    "description": "",
    "clientPath": [
      "productHunt",
      "monitors"
    ],
    "method": "get",
    "httpMethod": "GET",
    "path": "/v1/product-hunt/monitors/{resourceId}",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "productHuntMonitors",
    "resourceName": "Product Hunt Monitors",
    "operation": "update",
    "name": "Update Monitor",
    "description": "",
    "clientPath": [
      "productHunt",
      "monitors"
    ],
    "method": "update",
    "httpMethod": "PATCH",
    "path": "/v1/product-hunt/monitors/{resourceId}",
    "argShape": "idParams",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "name",
        "jsonKey": "name",
        "displayName": "Name",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "slug",
        "jsonKey": "slug",
        "displayName": "Slug",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "cron",
        "jsonKey": "cron",
        "displayName": "CRON",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "watch",
        "jsonKey": "watch",
        "displayName": "Watch",
        "type": "json",
        "required": false,
        "rawType": "unknown"
      },
      {
        "name": "webhook_endpoint_id",
        "jsonKey": "webhook_endpoint_id",
        "displayName": "Webhook Endpoint ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "active",
        "jsonKey": "active",
        "displayName": "Active",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      }
    ]
  },
  {
    "resource": "productHuntMonitors",
    "resourceName": "Product Hunt Monitors",
    "operation": "delete",
    "name": "Delete Monitor",
    "description": "",
    "clientPath": [
      "productHunt",
      "monitors"
    ],
    "method": "delete",
    "httpMethod": "DELETE",
    "path": "/v1/product-hunt/monitors/{resourceId}",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "productHuntMonitors",
    "resourceName": "Product Hunt Monitors",
    "operation": "trigger",
    "name": "Trigger Monitor",
    "description": "",
    "clientPath": [
      "productHunt",
      "monitors"
    ],
    "method": "trigger",
    "httpMethod": "POST",
    "path": "/v1/product-hunt/monitors/{resourceId}/trigger",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "productHuntMonitors",
    "resourceName": "Product Hunt Monitors",
    "operation": "listRuns",
    "name": "List Runs",
    "description": "",
    "clientPath": [
      "productHunt",
      "monitors"
    ],
    "method": "listRuns",
    "httpMethod": "GET",
    "path": "/v1/product-hunt/monitors/{resourceId}/runs",
    "argShape": "idLimit",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "productHuntMonitors",
    "resourceName": "Product Hunt Monitors",
    "operation": "getLatestRun",
    "name": "Get Latest Run",
    "description": "",
    "clientPath": [
      "productHunt",
      "monitors"
    ],
    "method": "getLatestRun",
    "httpMethod": "GET",
    "path": "/v1/product-hunt/monitors/{resourceId}/runs/latest",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "productHuntMonitors",
    "resourceName": "Product Hunt Monitors",
    "operation": "listChanges",
    "name": "List Changes",
    "description": "",
    "clientPath": [
      "productHunt",
      "monitors"
    ],
    "method": "listChanges",
    "httpMethod": "GET",
    "path": "/v1/product-hunt/monitors/{resourceId}/changes",
    "argShape": "idLimit",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "productHuntMonitors",
    "resourceName": "Product Hunt Monitors",
    "operation": "getLatestChange",
    "name": "Get Latest Change",
    "description": "",
    "clientPath": [
      "productHunt",
      "monitors"
    ],
    "method": "getLatestChange",
    "httpMethod": "GET",
    "path": "/v1/product-hunt/monitors/{resourceId}/changes/latest",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "redditMonitors",
    "resourceName": "Reddit Monitors",
    "operation": "create",
    "name": "Create Monitor",
    "description": "",
    "clientPath": [
      "reddit",
      "monitors"
    ],
    "method": "create",
    "httpMethod": "POST",
    "path": "/v1/reddit/monitors",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "name",
        "jsonKey": "name",
        "displayName": "Name",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "target",
        "jsonKey": "target",
        "displayName": "Target",
        "type": "json",
        "required": true,
        "rawType": "RedditMonitorTarget"
      },
      {
        "name": "cron",
        "jsonKey": "cron",
        "displayName": "CRON",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "watch",
        "jsonKey": "watch",
        "displayName": "Watch",
        "type": "json",
        "required": false,
        "rawType": "unknown"
      },
      {
        "name": "webhook_endpoint_id",
        "jsonKey": "webhook_endpoint_id",
        "displayName": "Webhook Endpoint ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "redditMonitors",
    "resourceName": "Reddit Monitors",
    "operation": "list",
    "name": "List Monitors",
    "description": "",
    "clientPath": [
      "reddit",
      "monitors"
    ],
    "method": "list",
    "httpMethod": "GET",
    "path": "/v1/reddit/monitors",
    "argShape": "none",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "redditMonitors",
    "resourceName": "Reddit Monitors",
    "operation": "get",
    "name": "Get Monitor",
    "description": "",
    "clientPath": [
      "reddit",
      "monitors"
    ],
    "method": "get",
    "httpMethod": "GET",
    "path": "/v1/reddit/monitors/{resourceId}",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "redditMonitors",
    "resourceName": "Reddit Monitors",
    "operation": "update",
    "name": "Update Monitor",
    "description": "",
    "clientPath": [
      "reddit",
      "monitors"
    ],
    "method": "update",
    "httpMethod": "PATCH",
    "path": "/v1/reddit/monitors/{resourceId}",
    "argShape": "idParams",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "name",
        "jsonKey": "name",
        "displayName": "Name",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "target",
        "jsonKey": "target",
        "displayName": "Target",
        "type": "json",
        "required": false,
        "rawType": "RedditMonitorTarget"
      },
      {
        "name": "cron",
        "jsonKey": "cron",
        "displayName": "CRON",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "watch",
        "jsonKey": "watch",
        "displayName": "Watch",
        "type": "json",
        "required": false,
        "rawType": "unknown"
      },
      {
        "name": "webhook_endpoint_id",
        "jsonKey": "webhook_endpoint_id",
        "displayName": "Webhook Endpoint ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "active",
        "jsonKey": "active",
        "displayName": "Active",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      }
    ]
  },
  {
    "resource": "redditMonitors",
    "resourceName": "Reddit Monitors",
    "operation": "delete",
    "name": "Delete Monitor",
    "description": "",
    "clientPath": [
      "reddit",
      "monitors"
    ],
    "method": "delete",
    "httpMethod": "DELETE",
    "path": "/v1/reddit/monitors/{resourceId}",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "redditMonitors",
    "resourceName": "Reddit Monitors",
    "operation": "trigger",
    "name": "Trigger Monitor",
    "description": "",
    "clientPath": [
      "reddit",
      "monitors"
    ],
    "method": "trigger",
    "httpMethod": "POST",
    "path": "/v1/reddit/monitors/{resourceId}/trigger",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "redditMonitors",
    "resourceName": "Reddit Monitors",
    "operation": "listRuns",
    "name": "List Runs",
    "description": "",
    "clientPath": [
      "reddit",
      "monitors"
    ],
    "method": "listRuns",
    "httpMethod": "GET",
    "path": "/v1/reddit/monitors/{resourceId}/runs",
    "argShape": "idLimit",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "redditMonitors",
    "resourceName": "Reddit Monitors",
    "operation": "getLatestRun",
    "name": "Get Latest Run",
    "description": "",
    "clientPath": [
      "reddit",
      "monitors"
    ],
    "method": "getLatestRun",
    "httpMethod": "GET",
    "path": "/v1/reddit/monitors/{resourceId}/runs/latest",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "redditMonitors",
    "resourceName": "Reddit Monitors",
    "operation": "listChanges",
    "name": "List Changes",
    "description": "",
    "clientPath": [
      "reddit",
      "monitors"
    ],
    "method": "listChanges",
    "httpMethod": "GET",
    "path": "/v1/reddit/monitors/{resourceId}/changes",
    "argShape": "idLimit",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "redditMonitors",
    "resourceName": "Reddit Monitors",
    "operation": "getLatestChange",
    "name": "Get Latest Change",
    "description": "",
    "clientPath": [
      "reddit",
      "monitors"
    ],
    "method": "getLatestChange",
    "httpMethod": "GET",
    "path": "/v1/reddit/monitors/{resourceId}/changes/latest",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "hackerNewsMonitors",
    "resourceName": "Hacker News Monitors",
    "operation": "create",
    "name": "Create Monitor",
    "description": "",
    "clientPath": [
      "hackerNews",
      "monitors"
    ],
    "method": "create",
    "httpMethod": "POST",
    "path": "/v1/hacker-news/monitors",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "name",
        "jsonKey": "name",
        "displayName": "Name",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "target",
        "jsonKey": "target",
        "displayName": "Target",
        "type": "json",
        "required": true,
        "rawType": "HackerNewsMonitorTarget"
      },
      {
        "name": "cron",
        "jsonKey": "cron",
        "displayName": "CRON",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "watch",
        "jsonKey": "watch",
        "displayName": "Watch",
        "type": "json",
        "required": false,
        "rawType": "unknown"
      },
      {
        "name": "webhook_endpoint_id",
        "jsonKey": "webhook_endpoint_id",
        "displayName": "Webhook Endpoint ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "hackerNewsMonitors",
    "resourceName": "Hacker News Monitors",
    "operation": "list",
    "name": "List Monitors",
    "description": "",
    "clientPath": [
      "hackerNews",
      "monitors"
    ],
    "method": "list",
    "httpMethod": "GET",
    "path": "/v1/hacker-news/monitors",
    "argShape": "none",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "hackerNewsMonitors",
    "resourceName": "Hacker News Monitors",
    "operation": "get",
    "name": "Get Monitor",
    "description": "",
    "clientPath": [
      "hackerNews",
      "monitors"
    ],
    "method": "get",
    "httpMethod": "GET",
    "path": "/v1/hacker-news/monitors/{resourceId}",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "hackerNewsMonitors",
    "resourceName": "Hacker News Monitors",
    "operation": "update",
    "name": "Update Monitor",
    "description": "",
    "clientPath": [
      "hackerNews",
      "monitors"
    ],
    "method": "update",
    "httpMethod": "PATCH",
    "path": "/v1/hacker-news/monitors/{resourceId}",
    "argShape": "idParams",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "name",
        "jsonKey": "name",
        "displayName": "Name",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "target",
        "jsonKey": "target",
        "displayName": "Target",
        "type": "json",
        "required": false,
        "rawType": "HackerNewsMonitorTarget"
      },
      {
        "name": "cron",
        "jsonKey": "cron",
        "displayName": "CRON",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "watch",
        "jsonKey": "watch",
        "displayName": "Watch",
        "type": "json",
        "required": false,
        "rawType": "unknown"
      },
      {
        "name": "webhook_endpoint_id",
        "jsonKey": "webhook_endpoint_id",
        "displayName": "Webhook Endpoint ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "active",
        "jsonKey": "active",
        "displayName": "Active",
        "type": "boolean",
        "required": false,
        "rawType": "boolean"
      }
    ]
  },
  {
    "resource": "hackerNewsMonitors",
    "resourceName": "Hacker News Monitors",
    "operation": "delete",
    "name": "Delete Monitor",
    "description": "",
    "clientPath": [
      "hackerNews",
      "monitors"
    ],
    "method": "delete",
    "httpMethod": "DELETE",
    "path": "/v1/hacker-news/monitors/{resourceId}",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "hackerNewsMonitors",
    "resourceName": "Hacker News Monitors",
    "operation": "trigger",
    "name": "Trigger Monitor",
    "description": "",
    "clientPath": [
      "hackerNews",
      "monitors"
    ],
    "method": "trigger",
    "httpMethod": "POST",
    "path": "/v1/hacker-news/monitors/{resourceId}/trigger",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "hackerNewsMonitors",
    "resourceName": "Hacker News Monitors",
    "operation": "listRuns",
    "name": "List Runs",
    "description": "",
    "clientPath": [
      "hackerNews",
      "monitors"
    ],
    "method": "listRuns",
    "httpMethod": "GET",
    "path": "/v1/hacker-news/monitors/{resourceId}/runs",
    "argShape": "idLimit",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "hackerNewsMonitors",
    "resourceName": "Hacker News Monitors",
    "operation": "getLatestRun",
    "name": "Get Latest Run",
    "description": "",
    "clientPath": [
      "hackerNews",
      "monitors"
    ],
    "method": "getLatestRun",
    "httpMethod": "GET",
    "path": "/v1/hacker-news/monitors/{resourceId}/runs/latest",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "hackerNewsMonitors",
    "resourceName": "Hacker News Monitors",
    "operation": "listChanges",
    "name": "List Changes",
    "description": "",
    "clientPath": [
      "hackerNews",
      "monitors"
    ],
    "method": "listChanges",
    "httpMethod": "GET",
    "path": "/v1/hacker-news/monitors/{resourceId}/changes",
    "argShape": "idLimit",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "hackerNewsMonitors",
    "resourceName": "Hacker News Monitors",
    "operation": "getLatestChange",
    "name": "Get Latest Change",
    "description": "",
    "clientPath": [
      "hackerNews",
      "monitors"
    ],
    "method": "getLatestChange",
    "httpMethod": "GET",
    "path": "/v1/hacker-news/monitors/{resourceId}/changes/latest",
    "argShape": "id",
    "idLabel": "Monitor ID",
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  }
,
  {
    "resource": "telegram",
    "resourceName": "Telegram",
    "operation": "getChannel",
    "name": "Get Channel",
    "description": "",
    "clientPath": [
      "telegram"
    ],
    "method": "getChannel",
    "httpMethod": "GET",
    "path": "/v1/telegram/channel",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "handle",
        "jsonKey": "handle",
        "displayName": "Handle",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "telegram",
    "resourceName": "Telegram",
    "operation": "getChannelPosts",
    "name": "Get Channel Posts",
    "description": "",
    "clientPath": [
      "telegram"
    ],
    "method": "getChannelPosts",
    "httpMethod": "GET",
    "path": "/v1/telegram/channel/posts",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "handle",
        "jsonKey": "handle",
        "displayName": "Handle",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "cursor",
        "jsonKey": "cursor",
        "displayName": "Cursor",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "rumble",
    "resourceName": "Rumble",
    "operation": "search",
    "name": "Search",
    "description": "",
    "clientPath": [
      "rumble"
    ],
    "method": "search",
    "httpMethod": "GET",
    "path": "/v1/rumble/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "cursor",
        "jsonKey": "cursor",
        "displayName": "Cursor",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "rumble",
    "resourceName": "Rumble",
    "operation": "getChannelVideos",
    "name": "Get Channel Videos",
    "description": "",
    "clientPath": [
      "rumble"
    ],
    "method": "getChannelVideos",
    "httpMethod": "GET",
    "path": "/v1/rumble/channel/videos",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "handle",
        "jsonKey": "handle",
        "displayName": "Handle",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "cursor",
        "jsonKey": "cursor",
        "displayName": "Cursor",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "rumble",
    "resourceName": "Rumble",
    "operation": "getVideo",
    "name": "Get Video",
    "description": "",
    "clientPath": [
      "rumble"
    ],
    "method": "getVideo",
    "httpMethod": "GET",
    "path": "/v1/rumble/video",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "truthSocial",
    "resourceName": "Truth Social",
    "operation": "getProfile",
    "name": "Get Profile",
    "description": "",
    "clientPath": [
      "truthSocial"
    ],
    "method": "getProfile",
    "httpMethod": "GET",
    "path": "/v1/truthsocial/profile",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "handle",
        "jsonKey": "handle",
        "displayName": "Handle",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "truthSocial",
    "resourceName": "Truth Social",
    "operation": "getUserPosts",
    "name": "Get User Posts",
    "description": "",
    "clientPath": [
      "truthSocial"
    ],
    "method": "getUserPosts",
    "httpMethod": "GET",
    "path": "/v1/truthsocial/user/posts",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "handle",
        "jsonKey": "handle",
        "displayName": "Handle",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "next_max_id",
        "jsonKey": "next_max_id",
        "displayName": "Next Max ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "truthSocial",
    "resourceName": "Truth Social",
    "operation": "getPost",
    "name": "Get Post",
    "description": "",
    "clientPath": [
      "truthSocial"
    ],
    "method": "getPost",
    "httpMethod": "GET",
    "path": "/v1/truthsocial/post",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "bluesky",
    "resourceName": "Bluesky",
    "operation": "getProfile",
    "name": "Get Profile",
    "description": "",
    "clientPath": [
      "bluesky"
    ],
    "method": "getProfile",
    "httpMethod": "GET",
    "path": "/v1/bluesky/profile",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "handle",
        "jsonKey": "handle",
        "displayName": "Handle",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "user_id",
        "jsonKey": "user_id",
        "displayName": "User ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "bluesky",
    "resourceName": "Bluesky",
    "operation": "getUserPosts",
    "name": "Get User Posts",
    "description": "",
    "clientPath": [
      "bluesky"
    ],
    "method": "getUserPosts",
    "httpMethod": "GET",
    "path": "/v1/bluesky/user/posts",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "handle",
        "jsonKey": "handle",
        "displayName": "Handle",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "user_id",
        "jsonKey": "user_id",
        "displayName": "User ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "bluesky",
    "resourceName": "Bluesky",
    "operation": "getPost",
    "name": "Get Post",
    "description": "",
    "clientPath": [
      "bluesky"
    ],
    "method": "getPost",
    "httpMethod": "GET",
    "path": "/v1/bluesky/post",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "twitch",
    "resourceName": "Twitch",
    "operation": "getProfile",
    "name": "Get Profile",
    "description": "",
    "clientPath": [
      "twitch"
    ],
    "method": "getProfile",
    "httpMethod": "GET",
    "path": "/v1/twitch/profile",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "handle",
        "jsonKey": "handle",
        "displayName": "Handle",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "twitch",
    "resourceName": "Twitch",
    "operation": "getUserVideos",
    "name": "Get User Videos",
    "description": "",
    "clientPath": [
      "twitch"
    ],
    "method": "getUserVideos",
    "httpMethod": "GET",
    "path": "/v1/twitch/user/videos",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "handle",
        "jsonKey": "handle",
        "displayName": "Handle",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "twitch",
    "resourceName": "Twitch",
    "operation": "getUserSchedule",
    "name": "Get User Schedule",
    "description": "",
    "clientPath": [
      "twitch"
    ],
    "method": "getUserSchedule",
    "httpMethod": "GET",
    "path": "/v1/twitch/user/schedule",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "handle",
        "jsonKey": "handle",
        "displayName": "Handle",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "twitch",
    "resourceName": "Twitch",
    "operation": "getClip",
    "name": "Get Clip",
    "description": "",
    "clientPath": [
      "twitch"
    ],
    "method": "getClip",
    "httpMethod": "GET",
    "path": "/v1/twitch/clip",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "appleMusic",
    "resourceName": "Apple Music",
    "operation": "getArtist",
    "name": "Get Artist",
    "description": "",
    "clientPath": [
      "appleMusic"
    ],
    "method": "getArtist",
    "httpMethod": "GET",
    "path": "/v1/apple-music/artist",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "id",
        "jsonKey": "id",
        "displayName": "ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "appleMusic",
    "resourceName": "Apple Music",
    "operation": "getAlbum",
    "name": "Get Album",
    "description": "",
    "clientPath": [
      "appleMusic"
    ],
    "method": "getAlbum",
    "httpMethod": "GET",
    "path": "/v1/apple-music/album",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "id",
        "jsonKey": "id",
        "displayName": "ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "appleMusic",
    "resourceName": "Apple Music",
    "operation": "getTrack",
    "name": "Get Track",
    "description": "",
    "clientPath": [
      "appleMusic"
    ],
    "method": "getTrack",
    "httpMethod": "GET",
    "path": "/v1/apple-music/track",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "id",
        "jsonKey": "id",
        "displayName": "ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "appleMusic",
    "resourceName": "Apple Music",
    "operation": "search",
    "name": "Search",
    "description": "",
    "clientPath": [
      "appleMusic"
    ],
    "method": "search",
    "httpMethod": "GET",
    "path": "/v1/apple-music/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "type",
        "jsonKey": "type",
        "displayName": "Type",
        "type": "options",
        "required": false,
        "options": [
          "all",
          "song",
          "album",
          "artist",
          "playlist",
          "station",
          "music_video",
          "radio_episode"
        ],
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "spotify",
    "resourceName": "Spotify",
    "operation": "getArtist",
    "name": "Get Artist",
    "description": "",
    "clientPath": [
      "spotify"
    ],
    "method": "getArtist",
    "httpMethod": "GET",
    "path": "/v1/spotify/artist",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "id",
        "jsonKey": "id",
        "displayName": "ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "spotify",
    "resourceName": "Spotify",
    "operation": "getTrack",
    "name": "Get Track",
    "description": "",
    "clientPath": [
      "spotify"
    ],
    "method": "getTrack",
    "httpMethod": "GET",
    "path": "/v1/spotify/track",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "id",
        "jsonKey": "id",
        "displayName": "ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "spotify",
    "resourceName": "Spotify",
    "operation": "getAlbum",
    "name": "Get Album",
    "description": "",
    "clientPath": [
      "spotify"
    ],
    "method": "getAlbum",
    "httpMethod": "GET",
    "path": "/v1/spotify/album",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "id",
        "jsonKey": "id",
        "displayName": "ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "spotify",
    "resourceName": "Spotify",
    "operation": "getPlaylist",
    "name": "Get Playlist",
    "description": "",
    "clientPath": [
      "spotify"
    ],
    "method": "getPlaylist",
    "httpMethod": "GET",
    "path": "/v1/spotify/playlist",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "id",
        "jsonKey": "id",
        "displayName": "ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "cursor",
        "jsonKey": "cursor",
        "displayName": "Cursor",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "spotify",
    "resourceName": "Spotify",
    "operation": "getPodcast",
    "name": "Get Podcast",
    "description": "",
    "clientPath": [
      "spotify"
    ],
    "method": "getPodcast",
    "httpMethod": "GET",
    "path": "/v1/spotify/podcast",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "id",
        "jsonKey": "id",
        "displayName": "ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "spotify",
    "resourceName": "Spotify",
    "operation": "search",
    "name": "Search",
    "description": "",
    "clientPath": [
      "spotify"
    ],
    "method": "search",
    "httpMethod": "GET",
    "path": "/v1/spotify/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "soundcloud",
    "resourceName": "SoundCloud",
    "operation": "getArtist",
    "name": "Get Artist",
    "description": "",
    "clientPath": [
      "soundcloud"
    ],
    "method": "getArtist",
    "httpMethod": "GET",
    "path": "/v1/soundcloud/artist",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "handle",
        "jsonKey": "handle",
        "displayName": "Handle",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "soundcloud",
    "resourceName": "SoundCloud",
    "operation": "getArtistTracks",
    "name": "Get Artist Tracks",
    "description": "",
    "clientPath": [
      "soundcloud"
    ],
    "method": "getArtistTracks",
    "httpMethod": "GET",
    "path": "/v1/soundcloud/artist/tracks",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "handle",
        "jsonKey": "handle",
        "displayName": "Handle",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "soundcloud",
    "resourceName": "SoundCloud",
    "operation": "getTrack",
    "name": "Get Track",
    "description": "",
    "clientPath": [
      "soundcloud"
    ],
    "method": "getTrack",
    "httpMethod": "GET",
    "path": "/v1/soundcloud/track",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "kwai",
    "resourceName": "Kwai",
    "operation": "getProfile",
    "name": "Get Profile",
    "description": "",
    "clientPath": [
      "kwai"
    ],
    "method": "getProfile",
    "httpMethod": "GET",
    "path": "/v1/kwai/profile",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "handle",
        "jsonKey": "handle",
        "displayName": "Handle",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "kwai",
    "resourceName": "Kwai",
    "operation": "getUserPosts",
    "name": "Get User Posts",
    "description": "",
    "clientPath": [
      "kwai"
    ],
    "method": "getUserPosts",
    "httpMethod": "GET",
    "path": "/v1/kwai/user/posts",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "handle",
        "jsonKey": "handle",
        "displayName": "Handle",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "kwai",
    "resourceName": "Kwai",
    "operation": "getPost",
    "name": "Get Post",
    "description": "",
    "clientPath": [
      "kwai"
    ],
    "method": "getPost",
    "httpMethod": "GET",
    "path": "/v1/kwai/post",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "kick",
    "resourceName": "Kick",
    "operation": "getClip",
    "name": "Get Clip",
    "description": "",
    "clientPath": [
      "kick"
    ],
    "method": "getClip",
    "httpMethod": "GET",
    "path": "/v1/kick/clip",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "snapchat",
    "resourceName": "Snapchat",
    "operation": "getProfile",
    "name": "Get Profile",
    "description": "",
    "clientPath": [
      "snapchat"
    ],
    "method": "getProfile",
    "httpMethod": "GET",
    "path": "/v1/snapchat/profile",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "handle",
        "jsonKey": "handle",
        "displayName": "Handle",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "snapchat",
    "resourceName": "Snapchat",
    "operation": "getSpotlight",
    "name": "Get Spotlight",
    "description": "",
    "clientPath": [
      "snapchat"
    ],
    "method": "getSpotlight",
    "httpMethod": "GET",
    "path": "/v1/snapchat/spotlight",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "pinterest",
    "resourceName": "Pinterest",
    "operation": "getProfile",
    "name": "Get Profile",
    "description": "",
    "clientPath": [
      "pinterest"
    ],
    "method": "getProfile",
    "httpMethod": "GET",
    "path": "/v1/pinterest/profile",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "pinterest",
    "resourceName": "Pinterest",
    "operation": "getPins",
    "name": "Get Pins",
    "description": "",
    "clientPath": [
      "pinterest"
    ],
    "method": "getPins",
    "httpMethod": "GET",
    "path": "/v1/pinterest/pins",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "pinterest",
    "resourceName": "Pinterest",
    "operation": "getPin",
    "name": "Get Pin",
    "description": "",
    "clientPath": [
      "pinterest"
    ],
    "method": "getPin",
    "httpMethod": "GET",
    "path": "/v1/pinterest/pin",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "pinterest",
    "resourceName": "Pinterest",
    "operation": "search",
    "name": "Search",
    "description": "",
    "clientPath": [
      "pinterest"
    ],
    "method": "search",
    "httpMethod": "GET",
    "path": "/v1/pinterest/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "linkedin",
    "resourceName": "LinkedIn",
    "operation": "getCompany",
    "name": "Get Company",
    "description": "",
    "clientPath": [
      "linkedin"
    ],
    "method": "getCompany",
    "httpMethod": "GET",
    "path": "/v1/linkedin/company",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "vanity_name",
        "jsonKey": "vanity_name",
        "displayName": "Vanity Name",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "linkedin",
    "resourceName": "LinkedIn",
    "operation": "getCompanyPosts",
    "name": "Get Company Posts",
    "description": "",
    "clientPath": [
      "linkedin"
    ],
    "method": "getCompanyPosts",
    "httpMethod": "GET",
    "path": "/v1/linkedin/company/posts",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "vanity_name",
        "jsonKey": "vanity_name",
        "displayName": "Vanity Name",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "linkedin",
    "resourceName": "LinkedIn",
    "operation": "getPost",
    "name": "Get Post",
    "description": "",
    "clientPath": [
      "linkedin"
    ],
    "method": "getPost",
    "httpMethod": "GET",
    "path": "/v1/linkedin/post",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "linkedin",
    "resourceName": "LinkedIn",
    "operation": "searchAdLibrary",
    "name": "Search Ad Library",
    "description": "",
    "clientPath": [
      "linkedin"
    ],
    "method": "searchAdLibrary",
    "httpMethod": "GET",
    "path": "/v1/linkedin/ad-library/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "advertiser",
        "jsonKey": "advertiser",
        "displayName": "Advertiser",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "country",
        "jsonKey": "country",
        "displayName": "Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "linkedin",
    "resourceName": "LinkedIn",
    "operation": "getAdLibraryAd",
    "name": "Get Ad Library Ad",
    "description": "",
    "clientPath": [
      "linkedin"
    ],
    "method": "getAdLibraryAd",
    "httpMethod": "GET",
    "path": "/v1/linkedin/ad-library/ad",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "ad_id",
        "jsonKey": "ad_id",
        "displayName": "Ad ID",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "linkInBio",
    "resourceName": "Link in Bio",
    "operation": "getPage",
    "name": "Get Page",
    "description": "",
    "clientPath": [
      "linkInBio"
    ],
    "method": "getPage",
    "httpMethod": "GET",
    "path": "/v1/link-in-bio/{provider}",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "provider",
        "jsonKey": "provider",
        "displayName": "Provider",
        "type": "options",
        "required": true,
        "options": [
          "linktree",
          "komi",
          "pillar",
          "linkbio",
          "linkme"
        ],
        "rawType": "string"
      }
    ],
    "optionalFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "tiktok",
    "resourceName": "TikTok",
    "operation": "searchShop",
    "name": "Search Shop",
    "description": "",
    "clientPath": [
      "tiktok"
    ],
    "method": "searchShop",
    "httpMethod": "GET",
    "path": "/v1/tiktok/shop/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "tiktok",
    "resourceName": "TikTok",
    "operation": "getShopProduct",
    "name": "Get Shop Product",
    "description": "",
    "clientPath": [
      "tiktok"
    ],
    "method": "getShopProduct",
    "httpMethod": "GET",
    "path": "/v1/tiktok/shop/product",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "product_id",
        "jsonKey": "product_id",
        "displayName": "Product ID",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "tiktok",
    "resourceName": "TikTok",
    "operation": "searchAdLibrary",
    "name": "Search Ad Library",
    "description": "",
    "clientPath": [
      "tiktok"
    ],
    "method": "searchAdLibrary",
    "httpMethod": "GET",
    "path": "/v1/tiktok/ad-library/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "advertiser",
        "jsonKey": "advertiser",
        "displayName": "Advertiser",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "country",
        "jsonKey": "country",
        "displayName": "Country",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "tiktok",
    "resourceName": "TikTok",
    "operation": "getAdLibraryAd",
    "name": "Get Ad Library Ad",
    "description": "",
    "clientPath": [
      "tiktok"
    ],
    "method": "getAdLibraryAd",
    "httpMethod": "GET",
    "path": "/v1/tiktok/ad-library/ad",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "ad_id",
        "jsonKey": "ad_id",
        "displayName": "Ad ID",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "google",
    "resourceName": "Google",
    "operation": "searchAdLibrary",
    "name": "Search Ad Library",
    "description": "",
    "clientPath": [
      "google"
    ],
    "method": "searchAdLibrary",
    "httpMethod": "GET",
    "path": "/v1/google/ad-library/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "advertiser",
        "jsonKey": "advertiser",
        "displayName": "Advertiser",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "region",
        "jsonKey": "region",
        "displayName": "Region",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "google",
    "resourceName": "Google",
    "operation": "getAdLibraryAd",
    "name": "Get Ad Library Ad",
    "description": "",
    "clientPath": [
      "google"
    ],
    "method": "getAdLibraryAd",
    "httpMethod": "GET",
    "path": "/v1/google/ad-library/ad",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "ad_id",
        "jsonKey": "ad_id",
        "displayName": "Ad ID",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "instagram",
    "resourceName": "Instagram",
    "operation": "getProfile",
    "name": "Get Profile",
    "description": "",
    "clientPath": [
      "instagram"
    ],
    "method": "getProfile",
    "httpMethod": "GET",
    "path": "/v1/instagram/profile",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "instagram",
    "resourceName": "Instagram",
    "operation": "getPosts",
    "name": "Get Posts",
    "description": "",
    "clientPath": [
      "instagram"
    ],
    "method": "getPosts",
    "httpMethod": "GET",
    "path": "/v1/instagram/posts",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "instagram",
    "resourceName": "Instagram",
    "operation": "getPost",
    "name": "Get Post",
    "description": "",
    "clientPath": [
      "instagram"
    ],
    "method": "getPost",
    "httpMethod": "GET",
    "path": "/v1/instagram/post",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "instagram",
    "resourceName": "Instagram",
    "operation": "getHighlights",
    "name": "Get Highlights",
    "description": "",
    "clientPath": [
      "instagram"
    ],
    "method": "getHighlights",
    "httpMethod": "GET",
    "path": "/v1/instagram/highlights",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "instagram",
    "resourceName": "Instagram",
    "operation": "getHighlight",
    "name": "Get Highlight",
    "description": "",
    "clientPath": [
      "instagram"
    ],
    "method": "getHighlight",
    "httpMethod": "GET",
    "path": "/v1/instagram/highlight",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "id",
        "jsonKey": "id",
        "displayName": "ID",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "instagram",
    "resourceName": "Instagram",
    "operation": "search",
    "name": "Search",
    "description": "",
    "clientPath": [
      "instagram"
    ],
    "method": "search",
    "httpMethod": "GET",
    "path": "/v1/instagram/search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "instagram",
    "resourceName": "Instagram",
    "operation": "getTagged",
    "name": "Get Tagged",
    "description": "",
    "clientPath": [
      "instagram"
    ],
    "method": "getTagged",
    "httpMethod": "GET",
    "path": "/v1/instagram/tagged",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  },
  {
    "resource": "instagram",
    "resourceName": "Instagram",
    "operation": "getComments",
    "name": "Get Comments",
    "description": "",
    "clientPath": [
      "instagram"
    ],
    "method": "getComments",
    "httpMethod": "GET",
    "path": "/v1/instagram/comments",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "media_id",
        "jsonKey": "media_id",
        "displayName": "Media ID",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "instagram",
    "resourceName": "Instagram",
    "operation": "searchHashtag",
    "name": "Search Hashtag",
    "description": "",
    "clientPath": [
      "instagram"
    ],
    "method": "searchHashtag",
    "httpMethod": "GET",
    "path": "/v1/instagram/hashtag-search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "instagram",
    "resourceName": "Instagram",
    "operation": "searchProfiles",
    "name": "Search Profiles",
    "description": "",
    "clientPath": [
      "instagram"
    ],
    "method": "searchProfiles",
    "httpMethod": "GET",
    "path": "/v1/instagram/profile-search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "instagram",
    "resourceName": "Instagram",
    "operation": "searchPopular",
    "name": "Search Popular",
    "description": "",
    "clientPath": [
      "instagram"
    ],
    "method": "searchPopular",
    "httpMethod": "GET",
    "path": "/v1/instagram/popular-search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "instagram",
    "resourceName": "Instagram",
    "operation": "searchReels",
    "name": "Search Reels",
    "description": "",
    "clientPath": [
      "instagram"
    ],
    "method": "searchReels",
    "httpMethod": "GET",
    "path": "/v1/instagram/reels-search",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "query",
        "jsonKey": "query",
        "displayName": "Query",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "instagram",
    "resourceName": "Instagram",
    "operation": "getReelsByAudio",
    "name": "Get Reels By Audio",
    "description": "",
    "clientPath": [
      "instagram"
    ],
    "method": "getReelsByAudio",
    "httpMethod": "GET",
    "path": "/v1/instagram/reels-by-audio",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "audio_id",
        "jsonKey": "audio_id",
        "displayName": "Audio ID",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "instagram",
    "resourceName": "Instagram",
    "operation": "getTrendingReels",
    "name": "Get Trending Reels",
    "description": "",
    "clientPath": [
      "instagram"
    ],
    "method": "getTrendingReels",
    "httpMethod": "GET",
    "path": "/v1/instagram/trending-reels",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": []
  },
  {
    "resource": "instagram",
    "resourceName": "Instagram",
    "operation": "getHashtagPosts",
    "name": "Get Hashtag Posts",
    "description": "",
    "clientPath": [
      "instagram"
    ],
    "method": "getHashtagPosts",
    "httpMethod": "GET",
    "path": "/v1/instagram/hashtag-posts",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "hashtag",
        "jsonKey": "hashtag",
        "displayName": "Hashtag",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "instagram",
    "resourceName": "Instagram",
    "operation": "getBasicProfile",
    "name": "Get Basic Profile",
    "description": "",
    "clientPath": [
      "instagram"
    ],
    "method": "getBasicProfile",
    "httpMethod": "GET",
    "path": "/v1/instagram/basic-profile",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "user_id",
        "jsonKey": "user_id",
        "displayName": "User ID",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "instagram",
    "resourceName": "Instagram",
    "operation": "getCommentReplies",
    "name": "Get Comment Replies",
    "description": "",
    "clientPath": [
      "instagram"
    ],
    "method": "getCommentReplies",
    "httpMethod": "GET",
    "path": "/v1/instagram/comment-replies",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [
      {
        "name": "media_id",
        "jsonKey": "media_id",
        "displayName": "Media ID",
        "type": "string",
        "required": true,
        "rawType": "string"
      },
      {
        "name": "comment_id",
        "jsonKey": "comment_id",
        "displayName": "Comment ID",
        "type": "string",
        "required": true,
        "rawType": "string"
      }
    ],
    "optionalFields": []
  },
  {
    "resource": "instagram",
    "resourceName": "Instagram",
    "operation": "getReels",
    "name": "Get Reels",
    "description": "",
    "clientPath": [
      "instagram"
    ],
    "method": "getReels",
    "httpMethod": "GET",
    "path": "/v1/instagram/reels",
    "argShape": "params",
    "idLabel": null,
    "isQueue": false,
    "requiredFields": [],
    "optionalFields": [
      {
        "name": "username",
        "jsonKey": "username",
        "displayName": "Username",
        "type": "string",
        "required": false,
        "rawType": "string"
      },
      {
        "name": "url",
        "jsonKey": "url",
        "displayName": "URL",
        "type": "string",
        "required": false,
        "rawType": "string"
      }
    ]
  }
];
