# n8n-nodes-scrapio

n8n community node for [Scrapio](https://scrapio.dev) — fetch, crawl, search, and extract structured data from the web, plus e-commerce (Amazon, Walmart, Target), social platforms, hotels, and more.

## Install

In n8n: **Settings → Community Nodes → Install**, and enter `n8n-nodes-scrapio`.

Or manually:

```bash
npm install n8n-nodes-scrapio
```

## Nodes

- **Scrapio** — the main action node. 142 operations across 35 resources (Fetch, Crawl, Search, Amazon, Walmart, Booking.com, Reddit, GitHub, Monitors, and many more), organized as a Resource → Operation picker.
- **Scrapio Webhook Trigger** — starts a workflow instantly when a Scrapio monitor detects a change, via a real webhook (registered automatically on activation).

## Credentials

Create a **Scrapio API** credential with:

- **API Key** — from your [Scrapio dashboard](https://app.scrapio.dev)'s API Keys page
- **Base URL** — defaults to `https://api.scrapio.dev`; only override for self-hosted/staging use

## Example: price monitoring

1. Add a **Scrapio Webhook Trigger** node, pick the monitor you want to watch
2. Connect it to whatever should happen on a change — a Slack message, a Google Sheets row, an email

## Support

- [Scrapio documentation](https://docs.scrapio.dev)
- [Report an issue](https://github.com/xsronhou/n8n-nodes-scrapio/issues)

## License

MIT
