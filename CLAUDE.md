# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Yudistira Ashadi, a full-stack web developer based in Indonesia. The site showcases work experience, portfolio projects, and contact information.

**Tech Stack:**
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Mantine UI v7.10.1
- pnpm (package manager)

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server (localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Architecture

### Project Structure

- **src/app/**: Next.js App Router pages and layouts
  - `layout.tsx`: Root layout with Mantine provider, notifications, and app shell
  - `page.tsx`: Home page with hero, work experience, and featured portfolio
  - `portfolio/page.tsx`: Full portfolio page
  - `globals.css`: Global styles including Mantine CSS imports
  - `mantine-custom-provider.tsx`: Custom Mantine theme configuration

- **src/components/**: Reusable React components
  - `appshell.tsx`: Main navigation, header, footer with responsive mobile menu
  - `theme.tsx`: Dark mode toggle component
  - `hero-highlight.tsx`, `meteors.tsx`, `flip-words.tsx`: Animated UI components
  - `portfolio.tsx`: Portfolio card component
  - `container.tsx`: Max-width container wrapper
  - `search-bar.tsx`: Search component

- **src/data/**: Static data as TypeScript files
  - `portfolio.ts`: Array of portfolio projects with metadata
  - `work.ts`: Array of work experience entries

- **src/assets/**: Images and static assets (portfolio screenshots, work logos, profile photos)

- **src/utils/**: Utility functions
  - `cn.ts`: Class name utility (likely using clsx/tailwind-merge)

### Key Architecture Patterns

**Styling System:**
- Hybrid approach using both Tailwind CSS and Mantine UI components
- Custom Mantine theme with yellow as primary color, dark mode as default
- PostCSS configuration includes `postcss-preset-mantine` and `postcss-simple-vars`
- Dark mode uses Mantine's color scheme selector: `[data-mantine-color-scheme="dark"]`
- Custom variant color resolver in `mantine-custom-provider.tsx` for yellow filled buttons

**Path Aliases:**
- `@/*` maps to `./src/*` (configured in tsconfig.json)

**Data Management:**
- Portfolio data stored in typed arrays in `src/data/portfolio.ts`
- Work experience in `src/data/work.ts`
- No external CMS or database - all content is static

**Component Patterns:**
- Server Components by default (Next.js App Router)
- Client components marked with `"use client"` directive (appshell, theme toggle, mantine provider)
- Dynamic imports used for theme toggle to optimize bundle

**Responsive Design:**
- Mantine's responsive utilities (`visibleFrom`, `hiddenFrom`)
- Tailwind responsive prefixes (`lg:`, `sm:`)
- Mobile-first approach with burger menu

## Image Optimization

Images use Next.js `<Image>` component with Sharp for optimization. Portfolio images are .webp format stored in `src/assets/portfolio/` and `src/assets/work/`.

## Deployment

Built for Vercel deployment (as indicated in README). Uses Next.js production optimizations including package import optimization in `next.config.mjs`.
