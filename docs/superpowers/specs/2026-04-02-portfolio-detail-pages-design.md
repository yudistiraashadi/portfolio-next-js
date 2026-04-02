# Portfolio Detail Pages, MDX Content System & Work Experience Update

**Date:** 2026-04-02  
**Status:** Approved

## Overview

Three changes to the personal portfolio site:

1. **Portfolio detail pages** — each portfolio item gets a `/portfolio/[slug]` detail page with rich MDX article content.
2. **New portfolio items** — add 5 projects from the otomindo/gtm-landing-page repo.
3. **Work experience update** — align `work.ts` with LinkedIn profile.

---

## 1. Data Architecture

### Hybrid approach
`src/data/portfolio.ts` remains the source of truth for list metadata (title, description, statically-imported image, year, tags, priority, url, urlMissingReason). MDX files add rich article content for the detail page.

### Changes to `PortfolioType`
- Add `slug: string` (required) — URL-safe identifier, connects each card to its detail page.
- Add `result?: string` — optional one-line outcome callout shown on detail page.

### MDX files
- Location: `content/portfolios/[slug].mdx`
- Frontmatter: none (all metadata lives in `portfolio.ts`)
- Body: markdown article content
- **30 files total:**
  - 25 existing items — content written from existing descriptions and tags
  - 5 new items — ported directly from otomindo project MDX:
    - `kompetify`
    - `sahabat-pu`
    - `new-ekaryasiswa`
    - `dishub-nganjuk-pju` ("Dishub PJU" treated as the same project)
  - Each new item also gets a corresponding entry added to `portfolioData` in `portfolio.ts` with metadata (title, description, image path, year, tags, slug, result) sourced from the otomindo MDX frontmatter. Images use the same filenames as in the otomindo project's `/public/portfolios/` directory and must be copied to `src/assets/portfolio/`.

### New library: `src/lib/portfolios.ts`
Reads `content/portfolios/[slug].mdx` and returns the article body as a string. Uses `gray-matter` for parsing (frontmatter section is empty but the library handles it cleanly). Validates slug with a regex guard (`/^[\w-]+$/`) before any filesystem access.

---

## 2. Routing & Components

### New route: `src/app/portfolio/[slug]/page.tsx`
- Looks up metadata by `slug` in `portfolioData` → `notFound()` if absent
- Reads article body from `content/portfolios/${slug}.mdx` via `src/lib/portfolios.ts`
- `generateStaticParams` walks `portfolioData` to pre-render all pages at build time
- `generateMetadata` uses `title` + `description` from `portfolioData`

**Page sections (top to bottom):**
1. Back link → `/#portfolio`
2. Thumbnail (16:9, Next.js `<Image fill>`)
3. Title (`h1`)
4. Tags (badges) + year
5. Visit Project button (external link) — or disabled button with `urlMissingReason` if no URL
6. Result callout (yellow left-border highlight) — rendered only if `result` is set
7. MDX article body (rendered with `next-mdx-remote/rsc`, styled with `@tailwindcss/typography` prose classes)
8. CTA footer — "Have a similar project in mind?" → contact link

### Updated `PortfolioCard`
- Always links to `/portfolio/${slug}` (internal `<Link>`)
- Removes external URL as the primary link target; external URL is shown as metadata but not the click target
- Hover and cursor styles remain active for all cards

### New dependencies
| Package | Purpose |
|---------|---------|
| `next-mdx-remote` | RSC-compatible MDX renderer |
| `gray-matter` | MDX frontmatter parsing |
| `@tailwindcss/typography` | Prose styles for MDX article body |

---

## 3. Work Experience Update

**`src/data/work.ts`** — replace all entries with:

| # | Company | Title | Start | End |
|---|---------|-------|-------|-----|
| 1 | PT Graha Teknologi Maju | CTO and Co-Founder | Oct 2023 | present |
| 2 | Retas.io | Lead Developer | Feb 2021 | Oct 2023 |
| 3 | MyDaxue | Mobile Application Developer | Apr 2018 | Jan 2019 |
| 4 | Freelancer | Freelance Developer | Nov 2014 | Jan 2019 |

**Logo:** Copy `gtm-logo.png` from `otomindo/gtm-landing-page/public/images/gtm-logo.png` to `src/assets/work/gtm-logo.png`. Update `work.ts` import accordingly.

---

## 4. File Changelist

| File | Change |
|------|--------|
| `package.json` | Add `next-mdx-remote`, `gray-matter`, `@tailwindcss/typography` |
| `src/data/portfolio.ts` | Add `slug` + `result` fields to type; update all 25 existing entries; add 5 new entries |
| `src/data/work.ts` | Update all 4 work entries, add GTM logo import |
| `src/assets/work/gtm-logo.png` | Copy from otomindo project |
| `src/lib/portfolios.ts` | New — MDX file reader |
| `src/app/portfolio/[slug]/page.tsx` | New — detail page |
| `src/app/portfolio-card.tsx` | Update card to link to `/portfolio/${slug}` |
| `src/app/globals.css` | Add typography plugin config if needed |
| `content/portfolios/*.mdx` | 30 new MDX files |

---

## 5. Out of Scope

- No changes to the portfolio list layout or filtering
- No pagination or search on the detail page
- No MDX custom components (standard HTML elements only)
- Nexus PU project is **not** added (excluded by user)
