# Barnhardt Performance (Next.js + Vercel)

This is a **Next.js (App Router)** website intended to be deployed on **Vercel**.

## Tech stack

- Next.js (React 18)
- TypeScript
- Tailwind CSS + shadcn/ui
- TanStack Query

## Requirements

- Node.js **20 LTS** (recommended)
- npm

## Local development

```sh
npm install
npm run dev
```

## Environment variables

Create a `.env.local` file for local dev (do not commit it):

```bash
SITE_URL="https://www.barnhardtperformance.com"
```

This is used for canonical URLs, OpenGraph/Twitter metadata, `robots.txt`, and `sitemap.xml`.

## Build & run

```sh
npm run build
npm run start
```

## SEO endpoints

- `GET /robots.txt`
- `GET /sitemap.xml`
- `GET /opengraph-image`
- `GET /twitter-image`

## Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket (or import it in Vercel).
2. In Vercel, create a new project from the repo (framework auto-detects Next.js).
3. Add environment variable:
   - `SITE_URL=https://www.barnhardtperformance.com`
4. Deploy.

### Custom domain

- Canonical domain: `www.barnhardtperformance.com`
- Apex redirect: `barnhardtperformance.com` → `www.barnhardtperformance.com` (configured in `next.config.mjs`)
