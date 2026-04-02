# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Code Quality Standards

- Make minimal, surgical changes
- **Never compromise type safety**: No `any`, no non-null assertion operator (`!`), no type assertions (`as Type`)
- **Make illegal states unrepresentable**: Model domain with ADTs/discriminated unions; parse inputs at boundaries into typed structures; if state can't exist, code can't mishandle it
- **Abstractions**: Consciously constrained, pragmatically parameterised, doggedly documented

### **ENTROPY REMINDER**

This codebase will outlive you. Every shortcut you take becomes
someone else's burden. Every hack compounds into technical debt
that slows the whole team down.

You are not just writing code. You are shaping the future of this
project. The patterns you establish will be copied. The corners
you cut will be cut again.

**Fight entropy. Leave the codebase better than you found it.**

## Plans

- At the end of each plan, give me a list of unresolved questions to answer, if any. Make the questions extremely concise. Sacrifice grammar for the sake of concision.

## Commands

Use `pnpm` as the package manager.

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Lint with ESLint
```

No test suite is configured.

## Architecture

**Next.js 16 App Router** with TypeScript, ShadCN UI for components, and Tailwind CSS 4 for styling. Dark/light mode via `next-themes` (`class` strategy — `dark` class on `<html>`). Animations via `framer-motion` 11.

### Key directories

- `src/app/` — App Router pages and root layout. `layout.tsx` wraps the app in `Providers` (next-themes), `Navbar`, and `Footer`.
- `src/components/` — Components. Mark `"use client"` only where interactivity or browser APIs are needed. Server components by default.
- `src/components/ui/` — ShadCN UI primitives (button, badge, input, sheet, separator). Do not edit these directly; re-run `pnpm dlx shadcn@latest add <component>` to update.
- `src/data/` — Static TypeScript data files. Portfolio projects in `portfolio.ts`, work experience in `work.ts`, skills in `skills.ts`. Content changes happen only here.
- `src/assets/` — Images imported directly into data files (Next.js image optimization via `import`).
- `src/utils/cn.ts` — `clsx` + `tailwind-merge` helper for conditional className merging.

### Styling system

Tailwind CSS 4 uses a **CSS-first config** — there is no `tailwind.config.ts`. All theme tokens live in `src/app/globals.css` under `@theme inline` and `:root` / `.dark` CSS variable blocks.

Dark mode uses `next-themes` with `attribute="class"`. When writing dark mode Tailwind utilities, use the `dark:` prefix — it activates via the `.dark` class on `<html>`.

The `@custom-variant dark (&:is(.dark *))` line in `globals.css` wires this up for Tailwind v4.

PostCSS config (`postcss.config.mjs`) uses `@tailwindcss/postcss` only — no legacy Mantine plugins.

### Data model

`PortfolioType` in `src/data/portfolio.ts`:
- `priority: true` marks a project as featured on the homepage
- `urlMissingReason` explains why a project has no live link
- `image` is a statically imported asset (required for Next.js image optimization)

### Theme

Primary color is yellow (`oklch(0.93 0.18 95)` ≈ `#FFE500`). Defined as `--primary` in `globals.css`. Default color scheme is dark. `enableSystem` is disabled in `Providers` — theme is always explicitly dark or light.

### Grid items and flex children

Always add `min-w-0` to grid items and flex children that contain text or images that could overflow. CSS grid/flex default `min-width: auto` causes track blowout — `min-w-0` prevents it.
