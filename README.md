# Eagles United WFC

Modern marketing site for **Eagles United Women's Football Club**, built with [Astro](https://astro.build), [Sanity CMS](https://www.sanity.io), and [Tailwind CSS](https://tailwindcss.com), deployed to [Vercel](https://vercel.com).

## Stack

- **Astro 6** — static pages with build-time Sanity fetching (edge-friendly on Vercel + Cloudflare DNS)
- **Sanity Studio** — content for home, about, gallery, and global settings
- **React** — interactive gallery carousel (`client:load`)
- **Tailwind CSS v4** — club palette (charcoal, red, white)

## Getting started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Configure Sanity

1. Create a project at [sanity.io/manage](https://www.sanity.io/manage).
2. Copy `.env.example` to `.env` and set your project ID and dataset.
3. Start the studio and publish singleton documents:

```bash
pnpm studio
```

In Studio, open **Site Settings**, **Home Page**, **About Page**, and **Gallery** (upload gallery images here).

### 3. Run the site

```bash
pnpm dev
```

Visit `http://localhost:4321`.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Astro dev server |
| `pnpm build` | Production build (static) |
| `pnpm preview` | Preview production build |
| `pnpm studio` | Sanity Studio locally |
| `pnpm studio:deploy` | Deploy Studio to `*.sanity.studio` |

## Deployment (Vercel)

1. Import the repo in Vercel.
2. Set environment variables from `.env.example`.
3. Build command: `pnpm build` — output is static HTML with long-cache headers for assets (see `vercel.json`).

Point your Cloudflare DNS A/CNAME records at Vercel when ready.

## Content fallbacks

Until Sanity is configured, pages use copy migrated from the existing Wix site. Once documents are published in Studio, content replaces the defaults automatically at build time.

## Gallery carousel

- Fetches images from the Sanity `gallery` document
- Auto-advances every **10 seconds**
- Large **‹ ›** controls for manual navigation
- **Double-click** active image for fullscreen lightbox (Close button or click outside)

## Project structure

```
schemaTypes/          Sanity schemas
sanity.config.ts      Studio configuration
src/
  components/         UI + GalleryCarousel.tsx
  layouts/            BaseLayout.astro
  lib/                Sanity client, queries, fallbacks
  pages/              index, about, gallery, contact
public/images/        Club logo assets
```
