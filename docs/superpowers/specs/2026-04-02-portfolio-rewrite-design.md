# Portfolio Website Full Rewrite — Design Spec

**Date:** 2026-04-02
**Status:** Approved

---

## Overview

Full in-place rewrite of the portfolio website. Upgrades Next.js to v15, replaces Mantine 7 with ShadCN UI, upgrades all dependencies, and redesigns the entire site with a Minimal + Yellow Accent aesthetic tailored for a business/enterprise audience (investors, enterprise buyers, executives). The site now leads with a CTO & Co-founder identity in addition to software engineer.

---

## Tech Stack

### Upgrades
- `next` → 15 (App Router, React 19)
- `react` / `react-dom` → 19
- `typescript` → 5 (latest)
- `tailwindcss` → 4 (CSS-first config, no `tailwind.config.ts`)
- `framer-motion` → 11 (latest)

### Removed (Mantine + related)
- `@mantine/core`
- `@mantine/hooks`
- `@mantine/dates`
- `@mantine/notifications`
- `@tabler/icons-react`
- `postcss-preset-mantine`
- `postcss-simple-vars`
- `nextjs-toploader`
- `dayjs`
- `mini-svg-data-uri`

### Added
- `shadcn/ui` (via CLI — components added individually)
- `lucide-react` (icons, comes with ShadCN)
- `next-themes` (dark/light mode, replaces Mantine color scheme)

### ShadCN Components Required
`Button`, `Badge`, `Input`, `Sheet`, `Separator` — `Separator` used between contact links in the footer

### Kept
- `clsx` + `tailwind-merge` (same `cn` util at `src/utils/cn.ts`)
- `sharp` (Next.js image optimization)

---

## Visual Design

### Aesthetic
**Minimal + Yellow Accent.** Clean whitespace, restrained typography, professional. Yellow (`#FFE500`) used sparingly as the single accent color — active nav underline, primary CTA button, one highlighted headline word, photo border.

### Color Scheme
- Light (primary): `#fafafa` background, `#fff` card surfaces, `#111` text, `#888` muted
- Dark: `#0f0f0f` background, `#1a1a1a` card surfaces, `#f0f0f0` text, `#555` muted
- Accent: `#FFE500` yellow — both modes

### Dark Mode
`next-themes` with `class` strategy. `ThemeProvider` sets `dark` class on `<html>`. Tailwind `darkMode: 'class'` in CSS config. ShadCN CSS variables customized for yellow primary in `globals.css`.

### Typography
- Font: Inter (Google Fonts, Next.js font optimization)
- Eyebrow labels / tech chips / stat labels: `JetBrains Mono` (monospace accent — signals developer identity without going full terminal)
- Body: Inter

### Hero Effect
Aurora / soft gradient blobs — 3 blurred yellow/amber orbs (`filter: blur`) animating slowly with `framer-motion` infinite loops. GPU-accelerated via `will-change: transform`. Content fades up on mount (one-shot).

### Other Animations
- Scroll: sections fade + slide up on enter (`framer-motion` `whileInView`, `once: true`)
- Cards: `hover:shadow-md` + `hover:border-yellow-400`
- No looping animations outside the hero

---

## Page Structure

### Pages
- `/` — Homepage
- `/portfolio` — Full portfolio grid

### Homepage Sections (top to bottom)

1. **Hero**
   - Aurora blob background animation
   - Grid layout: text left, profile photo right
   - Eyebrow: `CTO · Co-founder · Software Engineer` (JetBrains Mono)
   - Headline: mixed weight — `"Building technology that"` (light) + `"scales."` (bold, yellow highlight)
   - Bio paragraph (2–3 sentences, same content as current)
   - CTA buttons: `View Projects →` (yellow filled) + `Our Agency ↗` (ghost, external link)
   - Social icons: LinkedIn, GitHub, X

2. **Stats Bar**
   - Full-width strip, 3 columns, thin top/bottom border
   - Values: `10+` years · `24+` projects · `Gov & Enterprise` clients
   - Labels in JetBrains Mono (`yrs_experience`, `projects_shipped`, `enterprise_clients`)

3. **Skills / Tech Stack**
   - Section heading: `Skills & Technologies`
   - Grouped by category: Frontend · Backend · Mobile · AI & Cloud
   - Each group: label + chip row using ShadCN `Badge` (outline variant)
   - Chips use JetBrains Mono font

4. **Featured Projects**
   - Heading + `View all →` link to `/portfolio`
   - Grid: 1 col mobile → 2 cols sm → 4 cols lg
   - Filters to `priority: true` items, max 8
   - Cards: image (aspect-video) → tags (ShadCN Badge) → year → title → description → url/urlMissingReason

5. **Work Experience**
   - Section heading: `Work Experience`
   - 4 entries, horizontal on desktop
   - Company logo + name + title + date range
   - `View on LinkedIn →` button at bottom

6. **Footer / Contact**
   - `id="contacts"` anchor for nav scroll
   - Contact links: email, LinkedIn, GitHub, X
   - Bottom bar: copyright + "Powered by Next.js and Tailwind CSS"

### Portfolio Page (`/portfolio`)
- Page header: `Portfolio` title + description
- Search: ShadCN `Input` (replaces custom SearchBar)
- Grid: 1 col → 2 cols sm → 3 cols lg
- Same filter logic as current (search across title + tags + year + description)
- Cards use same design as homepage featured cards

### Navigation
- **Desktop:** Logo (avatar + name) left · Home · Portfolio · Contact (scroll) center · `Our Agency ↗` + theme toggle right
- **Mobile:** Burger icon → ShadCN `Sheet` drawer from left
- Active link: yellow bottom border underline
- Header collapses on scroll down, re-appears on scroll up (Intersection Observer or `framer-motion` scroll)
- No top progress bar (removed `nextjs-toploader`)

---

## Component File Map

| File | Replaces | Notes |
|---|---|---|
| `src/components/navbar.tsx` | `appshell.tsx` | ShadCN `Sheet` for mobile |
| `src/components/footer.tsx` | part of `appshell.tsx` | Extracted |
| `src/components/hero.tsx` | inline in `page.tsx` | Aurora + content |
| `src/components/aurora-background.tsx` | `hero-highlight.tsx`, `meteors.tsx` | framer-motion blobs |
| `src/components/stats-bar.tsx` | — | New |
| `src/components/tech-stack.tsx` | — | New |
| `src/components/portfolio-card.tsx` | `portfolio.tsx` (PortfolioCard) | ShadCN Badge |
| `src/components/portfolio-list.tsx` | `portfolio.tsx` (PortfolioList) | ShadCN Input search |
| `src/components/work-experience.tsx` | inline in `page.tsx` | Extracted |
| `src/components/theme-toggle.tsx` | `theme.tsx` | next-themes |
| `src/utils/cn.ts` | — | Unchanged |

**Deleted:** `flip-words.tsx`, `hero-highlight.tsx`, `meteors.tsx`, `search-bar.tsx`, `container.tsx`, `mantine-custom-provider.tsx`

---

## Data Model

**Unchanged.** `src/data/portfolio.ts` and `src/data/work.ts` keep their current shape. No migration needed.

`PortfolioType` fields used:
- `title`, `description`, `image`, `tags`, `year` — displayed on card
- `priority` — filters featured projects on homepage
- `url` — card link target; if absent, card is non-interactive
- `urlMissingReason` — shown in place of URL with lock icon

---

## Skills / Tech Stack Data

New static data added to `src/data/skills.ts`:

```ts
export const skillsData: Record<string, string[]> = {
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "PHP", "Supabase", "PostgreSQL", "REST API"],
  Mobile: ["React Native", "Expo"],
  "AI & Cloud": ["OpenAI", "LangChain", "Vercel", "Docker"],
}
```

---

## Key Constraints

- No `any`, no non-null assertions, no type assertions — strict TypeScript throughout
- `"use client"` only on components that need interactivity (navbar, portfolio-list, theme-toggle, aurora-background)
- Server Components by default for all pages and static sections
- All images remain as statically imported assets (Next.js image optimization)
- `.superpowers/` added to `.gitignore`
