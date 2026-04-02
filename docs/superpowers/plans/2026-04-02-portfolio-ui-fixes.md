# Portfolio UI Fixes & Visual Enhancements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix three UI bugs and apply two visual enhancements (aurora headers on portfolio pages, expanded contact footer).

**Architecture:** All changes are surgical edits to existing components. The existing `AuroraBackground` component is reused as-is for portfolio pages. No new files, no new dependencies.

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind CSS 4, Framer Motion 11, `next-mdx-remote`

---

## File Map

| File | Change |
|------|--------|
| `src/app/layout.tsx` | `pt-20` → `pt-16` on `<main>` |
| `src/app/portfolio/page.tsx` | Wrap header `<section>` in `AuroraBackground` |
| `src/app/portfolio/[slug]/page.tsx` | Fix back href, fix result text color, change root to fragment, wrap header in `AuroraBackground` |
| `src/components/footer.tsx` | Two-column expanded contact layout |

> No test suite is configured. Verification for each task is: `pnpm build` passes + visual check in `pnpm dev`.

---

### Task 1: Fix navbar gap

**Files:**
- Modify: `src/app/layout.tsx:38`

- [ ] **Step 1: Edit layout.tsx**

Change line 38 from:
```tsx
<main className="pt-20">{children}</main>
```
to:
```tsx
<main className="pt-16">{children}</main>
```

- [ ] **Step 2: Verify build passes**

```bash
pnpm build
```
Expected: Build completes with no errors.

- [ ] **Step 3: Visual check**

```bash
pnpm dev
```
Open `http://localhost:3000`. The hero section should sit flush against the bottom of the navbar with no visible gap.

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx
git commit -m "fix: remove extra gap between navbar and hero (pt-20 → pt-16)"
```

---

### Task 2: Fix back button href on portfolio detail page

**Files:**
- Modify: `src/app/portfolio/[slug]/page.tsx:52`

- [ ] **Step 1: Edit the back link href**

Change line 52 from:
```tsx
<Link
  href="/#portfolio"
  className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
>
```
to:
```tsx
<Link
  href="/portfolio"
  className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
>
```

- [ ] **Step 2: Verify build passes**

```bash
pnpm build
```
Expected: Build completes with no errors.

- [ ] **Step 3: Visual check**

```bash
pnpm dev
```
Open any portfolio detail page (e.g. `http://localhost:3000/portfolio/karyasiswa-pupr`). Click "Back to Portfolio" — should navigate to `/portfolio`, not `/#portfolio`.

- [ ] **Step 4: Commit**

```bash
git add src/app/portfolio/[slug]/page.tsx
git commit -m "fix: back button on portfolio detail now links to /portfolio"
```

---

### Task 3: Fix yellow result box text color

**Files:**
- Modify: `src/app/portfolio/[slug]/page.tsx:108`

- [ ] **Step 1: Edit result paragraph text color**

Change line 108 from:
```tsx
<p className="text-sm font-medium text-primary">{portfolio.result}</p>
```
to:
```tsx
<p className="text-sm font-medium text-foreground">{portfolio.result}</p>
```

The `TrendingUp` icon on line 107 keeps `text-primary` for the yellow accent.

- [ ] **Step 2: Verify build passes**

```bash
pnpm build
```
Expected: Build completes with no errors.

- [ ] **Step 3: Visual check in light mode**

```bash
pnpm dev
```
Open a portfolio detail that has a `result` field (e.g. `http://localhost:3000/portfolio/karyasiswa-pupr`). Switch to light mode. The result text inside the yellow box should now be dark (foreground) and clearly legible.

- [ ] **Step 4: Commit**

```bash
git add src/app/portfolio/[slug]/page.tsx
git commit -m "fix: result highlight text uses foreground color for light mode legibility"
```

---

### Task 4: Expand footer into two-column contact section

**Files:**
- Modify: `src/components/footer.tsx`

- [ ] **Step 1: Replace footer content**

Replace the entire file with:

```tsx
import Link from "next/link";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const contacts = [
  {
    href: "mailto:distra96@gmail.com",
    label: "distra96@gmail.com",
    icon: Mail,
  },
  {
    href: "https://www.linkedin.com/in/yudistiraashadi/",
    label: "@yudistiraashadi",
    icon: Linkedin,
  },
  {
    href: "https://github.com/yudistiraashadi",
    label: "@yudistiraashadi",
    icon: Github,
  },
  {
    href: "https://x.com/yudistiraashadi",
    label: "@yudistiraashadi",
    icon: Twitter,
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background">
      <div id="contacts" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 grid gap-10 sm:grid-cols-2">
          {/* Left: identity + availability */}
          <div>
            <p className="mb-1 text-base font-semibold">Yudistira Ashadi</p>
            <p className="font-mono mb-3 text-xs tracking-widest text-primary uppercase">
              CTO · Co-Founder · Software Engineer
            </p>
            <p className="max-w-xs text-sm text-muted-foreground">
              Available for enterprise projects, consulting, and freelance
              engagements across Indonesia and remotely.
            </p>
          </div>

          {/* Right: contact links */}
          <div>
            <p className="font-mono mb-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Get in Touch
            </p>
            <ul className="flex flex-col gap-3">
              {contacts.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={
                      href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="flex flex-col items-center gap-1 text-center text-xs text-muted-foreground sm:flex-row sm:justify-center sm:gap-2">
          <span>© {currentYear} Yudistira Ashadi</span>
          <span className="hidden sm:inline">·</span>
          <span>
            Powered by{" "}
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-primary"
            >
              Next.js
            </Link>{" "}
            and{" "}
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-primary"
            >
              Tailwind CSS
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify build passes**

```bash
pnpm build
```
Expected: Build completes with no errors.

- [ ] **Step 3: Visual check**

```bash
pnpm dev
```
Open `http://localhost:3000` and click "Contact" in the navbar. Page should scroll to the footer which now shows a two-column layout: name/tagline/bio on the left, contact links stacked on the right. Check both dark and light modes.

- [ ] **Step 4: Commit**

```bash
git add src/components/footer.tsx
git commit -m "feat: expand footer into two-column contact section with bio and stacked links"
```

---

### Task 5: Add aurora header to portfolio list page

**Files:**
- Modify: `src/app/portfolio/page.tsx`

- [ ] **Step 1: Replace portfolio page content**

Replace the entire file with:

```tsx
import { Metadata } from "next";

import { AuroraBackground } from "@/components/aurora-background";
import { PortfolioList } from "@/components/portfolio-list";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Projects by Yudistira Ashadi — web apps, AI tools, and mobile applications.",
};

export default function PortfolioPage() {
  return (
    <>
      <AuroraBackground className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h1 className="mb-3 text-4xl font-bold tracking-tight lg:text-5xl">
            Portfolio
          </h1>
          <p className="max-w-xl text-muted-foreground">
            A collection of projects across web platforms, AI integrations,
            government systems, and mobile apps — built over 10+ years.
          </p>
        </div>
      </AuroraBackground>

      <div className="mx-auto max-w-7xl px-4 py-16">
        <PortfolioList portfolioData={portfolioData} />
      </div>
    </>
  );
}
```

- [ ] **Step 2: Verify build passes**

```bash
pnpm build
```
Expected: Build completes with no errors.

- [ ] **Step 3: Visual check**

```bash
pnpm dev
```
Open `http://localhost:3000/portfolio`. The "Portfolio" heading and description should have the animated yellow aurora + grid background, separated from the card grid below by a border.

- [ ] **Step 4: Commit**

```bash
git add src/app/portfolio/page.tsx
git commit -m "feat: add aurora header to portfolio list page"
```

---

### Task 6: Add aurora header to portfolio detail page + fix invalid nested main

**Files:**
- Modify: `src/app/portfolio/[slug]/page.tsx`

- [ ] **Step 1: Add missing import and replace the return value**

First, add `AuroraBackground` to the imports at the top of the file (after the existing imports):
```tsx
import { AuroraBackground } from "@/components/aurora-background";
```

Then replace the entire `return (...)` block (starts at line 47) with:

```tsx
  return (
    <>
      {/* Header — aurora background */}
      <AuroraBackground className="border-b border-border">
        <div className="container mx-auto max-w-4xl px-4 pt-8 pb-10">
          {/* Back link */}
          <Link
            href="/portfolio"
            className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Back to Portfolio
          </Link>

          {/* Thumbnail */}
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg border border-border">
            <Image
              src={portfolio.image}
              alt={`Screenshot of ${portfolio.title}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="mb-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
            {portfolio.title}
          </h1>

          {/* Tags + Year */}
          <div className="mb-4 flex flex-wrap items-center gap-1.5">
            {portfolio.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="font-mono text-[10px]">
                {tag}
              </Badge>
            ))}
            <span className="ml-1 text-sm text-muted-foreground">
              {portfolio.year}
            </span>
          </div>

          {/* Visit Project / URL Missing */}
          {portfolio.url ? (
            <a
              href={portfolio.url}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "sm", className: "mb-6" })}
            >
              Visit Project
              <ExternalLink className="ml-1 size-3" />
            </a>
          ) : portfolio.urlMissingReason ? (
            <Button disabled variant="outline" size="sm" className="mb-6">
              {portfolio.urlMissingReason}
            </Button>
          ) : null}

          {/* Result highlight */}
          {portfolio.result && (
            <div className="mb-2 flex items-start gap-2 rounded-md border-l-4 border-primary bg-primary/10 px-4 py-3">
              <TrendingUp className="mt-0.5 size-4 shrink-0 text-primary" />
              <p className="text-sm font-medium text-foreground">{portfolio.result}</p>
            </div>
          )}
        </div>
      </AuroraBackground>

      {/* Body */}
      <div className="container mx-auto max-w-4xl px-4 pt-10 pb-16">
        {/* MDX Article */}
        {article && (
          <article className="prose prose-lg dark:prose-invert prose-headings:font-semibold prose-a:text-primary max-w-none">
            <MDXRemote source={article} />
          </article>
        )}

        {/* CTA */}
        <div className="mt-16 rounded-lg bg-primary/10 p-8 text-center">
          <h3 className="mb-2 text-2xl font-bold text-foreground">
            Have a similar project in mind?
          </h3>
          <p className="mb-6 text-muted-foreground">
            Let&apos;s discuss how we can build the right solution together.
          </p>
          <Link href="/#contact" className={buttonVariants({ size: "lg" })}>
            Get in Touch
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </div>
    </>
  );
```

Note: The `mb-8` on the back link acts as the top spacing from the aurora section edge. The old `<main>` wrapper with `pt-24 pb-16` is gone — replaced by two inner divs. Also note that the result highlight text is already `text-foreground` here (consolidating Task 3's fix). If Task 3 was committed first, this step overwrites that file cleanly.

> **If executing Tasks 2, 3, and 6 in sequence:** Tasks 2 and 3 make small edits; Task 6 replaces the entire return block. Run Tasks 2 and 3 first, commit them, then do Task 6. The Task 6 replacement already incorporates the Task 2 and 3 fixes — no double-applying needed.

- [ ] **Step 2: Verify build passes**

```bash
pnpm build
```
Expected: Build completes with no errors. TypeScript should not complain — all imports (`AuroraBackground`, etc.) are already present or being added via existing imports.

Check imports at top of file — add `AuroraBackground` import if not present:
```tsx
import { AuroraBackground } from "@/components/aurora-background";
```

- [ ] **Step 3: Visual check**

```bash
pnpm dev
```
Open a portfolio detail page (e.g. `http://localhost:3000/portfolio/karyasiswa-pupr`). Verify:
- Header area (back link → thumbnail → title → tags → result box) has aurora + grid background
- MDX article body below the border is plain
- Result box text is legible in both light and dark modes
- "Back to Portfolio" navigates to `/portfolio`

- [ ] **Step 4: Commit**

```bash
git add src/app/portfolio/[slug]/page.tsx
git commit -m "feat: aurora header on detail page, fix nested main, consolidate bug fixes"
```
