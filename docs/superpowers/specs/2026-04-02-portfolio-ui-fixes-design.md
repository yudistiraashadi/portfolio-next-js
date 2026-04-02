# Portfolio UI Fixes & Visual Enhancements

**Date:** 2026-04-02  
**Status:** Approved

## Overview

Five targeted changes: three bug fixes and two visual enhancements. No new dependencies required — all changes use existing components (`AuroraBackground`, Tailwind utilities, existing layout).

---

## 1. Yellow result box — text readability fix

**File:** `src/app/portfolio/[slug]/page.tsx` (line ~105)

**Problem:** The result highlight block uses `bg-primary/10` (pale yellow background) with `text-primary` (yellow text). In light mode both are yellow, making the text illegible.

**Fix:** Change the paragraph element's class from `text-primary` to `text-foreground`. Keep the `TrendingUp` icon's class as `text-primary` so the yellow accent remains.

```tsx
// Before
<p className="text-sm font-medium text-primary">{portfolio.result}</p>

// After
<p className="text-sm font-medium text-foreground">{portfolio.result}</p>
```

---

## 2. Back button — wrong href

**File:** `src/app/portfolio/[slug]/page.tsx` (line ~52)

**Problem:** `href="/#portfolio"` scrolls to the home page portfolio section instead of navigating to `/portfolio`.

**Fix:** Change `href="/#portfolio"` → `href="/portfolio"`.

---

## 3. Navbar gap — excess top padding

**File:** `src/app/layout.tsx` (line ~38)

**Problem:** `<main className="pt-20">` adds 80px top padding. The navbar is `h-16` (64px), leaving a visible 16px gap between the navbar bottom edge and the hero top.

**Fix:** Change `pt-20` → `pt-16`.

---

## 4. Portfolio page — aurora header

**File:** `src/app/portfolio/page.tsx`

**Change:** Wrap the existing `<section>` block (h1 + description paragraph) in `<AuroraBackground className="border-b border-border">`. The `<PortfolioList>` card grid below stays outside the wrapper and remains plain.

The outer `<div className="mx-auto max-w-7xl px-4 py-16">` becomes two parts:
- Inside `AuroraBackground`: the header section with its own `max-w-7xl px-4 py-16` inner container
- Outside: the `PortfolioList` in its own `max-w-7xl px-4 py-16` container

---

## 5. Portfolio detail page — aurora header

**File:** `src/app/portfolio/[slug]/page.tsx`

**Change:** Wrap the header block — back link, thumbnail, title, tags, URL button, and result highlight — in `<AuroraBackground className="border-b border-border">`. The MDX article body and CTA section below remain outside the wrapper.

The page currently returns `<main>` which nests inside the layout's `<main>` — invalid HTML. Change the root element to a fragment `<>`. Split content into two sections:

```tsx
<>
  <AuroraBackground className="border-b border-border">
    <div className="container mx-auto max-w-4xl px-4 pt-8 pb-10">
      {/* back link, thumbnail, title, tags, url button, result highlight */}
    </div>
  </AuroraBackground>
  <div className="container mx-auto max-w-4xl px-4 pt-10 pb-16">
    {/* MDX article + CTA */}
  </div>
</>
```

The old `pt-24 pb-16` on the former `<main>` is removed; each inner section manages its own spacing.

---

## 6. Contact section — expanded footer

**File:** `src/components/footer.tsx`

**Change:** Replace the current minimal layout (4 icon links in a row + separator + copyright) with a two-column layout:

**Left column:**
- Name: `Yudistira Ashadi` (semibold)
- Tagline: `CTO · Co-Founder · Software Engineer` (yellow, small monospace)
- One-sentence availability blurb (muted text)

**Right column:**
- Section label: `Get in Touch` (uppercase, muted, small)
- 4 contact links stacked vertically: Mail, LinkedIn, GitHub, X — each with icon + label text

**Below both columns:**
- `<Separator />` (same as now)
- Copyright line (same as now)

The `id="contacts"` anchor stays on the footer's outer div so the navbar "Contact" scroll target continues to work.

---

## Files changed

| File | Change |
|------|--------|
| `src/app/layout.tsx` | `pt-20` → `pt-16` on `<main>` |
| `src/app/portfolio/page.tsx` | Wrap header section in `AuroraBackground` |
| `src/app/portfolio/[slug]/page.tsx` | Fix `href`, fix result text color, wrap header in `AuroraBackground`, restructure layout |
| `src/components/footer.tsx` | Two-column expanded contact layout |
