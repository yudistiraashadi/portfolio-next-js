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
pnpm lint       # Lint with ESLint (next lint)
```

No test suite is configured.

## Architecture

**Next.js 14 App Router** with TypeScript, Mantine 7 for UI components, and Tailwind CSS for utility styling. The two work in tandem — Mantine handles component theming/dark mode, Tailwind handles layout and custom utilities.

### Key directories

- `src/app/` — App Router pages and root layout. `layout.tsx` wraps the app with Mantine provider and AppShell.
- `src/components/` — Client components (mark `"use client"` when needed for interactivity/animations).
- `src/data/` — Static TypeScript data files. Portfolio projects live in `portfolio.ts`, work experience in `work.ts`. These are the only place content changes should happen for updating portfolio items.
- `src/assets/` — Images imported directly into data files (Next.js image optimization via `import`).
- `src/utils/cn.ts` — `clsx` + `tailwind-merge` helper for conditional className merging.

### Styling system

Dark mode uses Mantine's `data-mantine-color-scheme="dark"` attribute selector (not `class="dark"`). Tailwind's dark mode config in `tailwind.config.ts` is set to this selector. When writing dark mode Tailwind utilities, use `dark:` prefix — it will activate via Mantine's color scheme.

PostCSS config (`postcss.config.mjs`) wires Mantine's CSS variables into Tailwind via `postcss-preset-mantine` and `postcss-simple-vars`.

Custom Tailwind utilities (dotted background pattern `bg-dot-thick-*`, meteor animation) are defined in `tailwind.config.ts`.

### Data model

`PortfolioType` in `src/data/portfolio.ts`:
- `priority: true` marks a project as featured on the homepage
- `urlMissingReason` explains why a project has no live link
- `image` is a statically imported asset (required for Next.js image optimization)

### Theme

Primary color is yellow (`#FFEB00`). Custom `variantColorResolver` in `src/app/mantine-custom-provider.tsx` handles the filled button variant for yellow. Default color scheme is dark.
