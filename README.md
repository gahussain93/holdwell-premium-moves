# HoldWell Premium Moves

Professional house removals, office relocations, and transport services across West London.

## Overview

HoldWell Premium Moves is a modern, SEO-optimised removals website built with:

- TanStack Start (React)
- Vite
- Cloudflare Workers
- TypeScript

The site is designed for:

- Local SEO (service + location targeting)
- Fast edge delivery (Cloudflare)
- Clear conversion paths (calls, WhatsApp, quotes)

## Live Domain

https://www.holdwellremovals.co.uk

## Core Features

**Service pages targeting commercial intent:**

- House removals
- Office removals
- Man and van
- Packing & assembly
- Storage runs
- Small moves / single item transport

**Location pages targeting West London areas:**

- Ealing, Hounslow, Harrow, Wembley
- Chiswick, Fulham, Brentford
- Richmond, Uxbridge, Shepherd's Bush

**SEO foundations:**

- Canonical URLs on all routes
- XML sitemap
- robots.txt
- JSON-LD (MovingCompany, WebSite)

**Conversion-focused UI:**

- Click-to-call
- WhatsApp integration
- Quote CTA

## Tech Stack

- **Framework:** TanStack Start (React)
- **Bundler:** Vite
- **Runtime:** Cloudflare Workers
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## Project Structure

```
src/
  routes/           # All pages (SSR routes)
  components/       # UI components
  lib/              # Data (services, areas, config)
public/
  sitemap.xml
  robots.txt
```

## Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Deployment

This project is configured for Cloudflare Workers.

Worker name:

```
holdwell-removals
```

To deploy:

```bash
npx wrangler deploy
```

## SEO Notes

- All pages use canonical URLs with the production domain
- Sitemap must stay aligned with routes
- Avoid duplicate routes or trailing slash inconsistencies
- Do not deploy using preview domains as canonical targets

## Important Constraints

- Do not remove the Lovable Vite wrapper while developing in Lovable
- Any removal requires full build/runtime validation
- Do not fabricate reviews or schema data

## License

Private project – not for redistribution
