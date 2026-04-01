# Portfolio Rewrite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Full in-place rewrite — Next.js 15, React 19, Tailwind 4, ShadCN UI replacing Mantine, redesigned UI with Minimal + Yellow Accent aesthetic and CTO/co-founder positioning.

**Architecture:** App Router (server components by default, `"use client"` only where needed). ShadCN components + Tailwind utilities for styling. `next-themes` for dark/light mode via `class` strategy. `framer-motion` for aurora hero effect and scroll-triggered fade-ins.

**Tech Stack:** Next.js 15, React 19, TypeScript 5, Tailwind CSS 4, ShadCN UI, next-themes, framer-motion 11, lucide-react, Inter + JetBrains Mono (Google Fonts)

**Spec:** `docs/superpowers/specs/2026-04-02-portfolio-rewrite-design.md`

---

## File Map

| Action | Path | Purpose |
|---|---|---|
| Modify | `package.json` | Remove Mantine, upgrade deps |
| Modify | `postcss.config.mjs` | Tailwind 4 postcss plugin |
| Modify | `src/app/globals.css` | Tailwind 4 + ShadCN CSS vars, yellow primary |
| Modify | `src/app/layout.tsx` | Inter + JetBrains Mono fonts, ThemeProvider |
| Modify | `src/app/page.tsx` | Assemble homepage sections |
| Modify | `src/app/portfolio/page.tsx` | Use new PortfolioList |
| Create | `src/components/providers.tsx` | next-themes ThemeProvider wrapper |
| Create | `src/components/navbar.tsx` | Top nav with ShadCN Sheet mobile drawer |
| Create | `src/components/footer.tsx` | Contact links + copyright |
| Create | `src/components/aurora-background.tsx` | framer-motion yellow blobs |
| Create | `src/components/hero.tsx` | Hero section with aurora + content |
| Create | `src/components/stats-bar.tsx` | 3-col stats strip |
| Create | `src/components/tech-stack.tsx` | Skills/tech chips grouped by category |
| Create | `src/components/portfolio-card.tsx` | Project card with ShadCN Badge |
| Create | `src/components/portfolio-list.tsx` | Search + grid, client component |
| Create | `src/components/work-experience.tsx` | Work history cards |
| Create | `src/components/fade-in.tsx` | Scroll-triggered fade-up client wrapper |
| Create | `src/components/theme-toggle.tsx` | Light/dark toggle button |
| Create | `src/data/skills.ts` | Skills grouped by category |
| Delete | `src/app/mantine-custom-provider.tsx` | Replaced by providers.tsx |
| Delete | `src/components/appshell.tsx` | Replaced by navbar.tsx + footer.tsx |
| Delete | `src/components/container.tsx` | Replaced by Tailwind max-w-7xl inline |
| Delete | `src/components/flip-words.tsx` | Removed |
| Delete | `src/components/hero-highlight.tsx` | Replaced by aurora-background.tsx |
| Delete | `src/components/meteors.tsx` | Removed |
| Delete | `src/components/search-bar.tsx` | Replaced by ShadCN Input inline |
| Delete | `src/components/portfolio.tsx` | Split into portfolio-card + portfolio-list |
| Delete | `src/components/theme.tsx` | Replaced by theme-toggle.tsx |

---

## Task 1: Update Dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Replace package.json contents**

```json
{
  "name": "portfolio-web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^11.18.2",
    "lucide-react": "^0.487.0",
    "next": "^15.3.0",
    "next-themes": "^0.4.6",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "sharp": "^0.33.5",
    "tailwind-merge": "^2.6.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.4",
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "^15.3.0",
    "prettier": "^3.5.3",
    "prettier-plugin-tailwindcss": "^0.6.11",
    "tailwindcss": "^4.1.4",
    "tw-animate-css": "^1.2.5",
    "typescript": "^5.8.3"
  }
}
```

- [ ] **Step 2: Install**

```bash
pnpm install
```

Expected: clean install, no peer dependency errors related to Mantine.

- [ ] **Step 3: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: upgrade deps to Next.js 15, React 19, Tailwind 4; remove Mantine"
```

---

## Task 2: Configure Tailwind 4 and ShadCN

**Files:**
- Modify: `postcss.config.mjs`
- Modify: `src/app/globals.css`
- Create: `components.json` (ShadCN config)

- [ ] **Step 1: Update postcss config**

```js
// postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

- [ ] **Step 2: Initialize ShadCN**

```bash
pnpm dlx shadcn@latest init -d
```

Answer the prompts:
- Style: **Default**
- Base color: **Neutral** (we'll override to yellow manually)
- CSS variables: **Yes**

This creates `components.json` and updates `globals.css`.

- [ ] **Step 3: Replace globals.css with full custom config**

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(0.98 0 0);
  --foreground: oklch(0.13 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.13 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.13 0 0);
  --primary: oklch(0.93 0.18 95);
  --primary-foreground: oklch(0 0 0);
  --secondary: oklch(0.94 0 0);
  --secondary-foreground: oklch(0.13 0 0);
  --muted: oklch(0.94 0 0);
  --muted-foreground: oklch(0.55 0 0);
  --accent: oklch(0.93 0.18 95);
  --accent-foreground: oklch(0 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.90 0 0);
  --input: oklch(0.90 0 0);
  --ring: oklch(0.93 0.18 95);
  --radius: 0.25rem;
}

.dark {
  --background: oklch(0.11 0 0);
  --foreground: oklch(0.94 0 0);
  --card: oklch(0.15 0 0);
  --card-foreground: oklch(0.94 0 0);
  --popover: oklch(0.15 0 0);
  --popover-foreground: oklch(0.94 0 0);
  --primary: oklch(0.93 0.18 95);
  --primary-foreground: oklch(0 0 0);
  --secondary: oklch(0.19 0 0);
  --secondary-foreground: oklch(0.94 0 0);
  --muted: oklch(0.19 0 0);
  --muted-foreground: oklch(0.60 0 0);
  --accent: oklch(0.93 0.18 95);
  --accent-foreground: oklch(0 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(0.22 0 0);
  --input: oklch(0.22 0 0);
  --ring: oklch(0.93 0.18 95);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --radius-sm: calc(var(--radius) - 2px);
  --radius-md: var(--radius);
  --radius-lg: calc(var(--radius) + 2px);
  --radius-xl: calc(var(--radius) + 4px);
}

* {
  border-color: var(--border);
}

body {
  background-color: var(--background);
  color: var(--foreground);
}

html {
  scroll-behavior: smooth;
}

::selection {
  background-color: oklch(0.93 0.18 95 / 0.4);
  color: oklch(0.13 0 0);
}
```

- [ ] **Step 4: Add required ShadCN components**

```bash
pnpm dlx shadcn@latest add button badge input sheet separator
```

- [ ] **Step 5: Verify Tailwind compiles**

```bash
pnpm build
```

Expected: build succeeds (pages may look broken — Mantine imports still exist in old files, that's fine for now).

- [ ] **Step 6: Commit**

```bash
git add postcss.config.mjs src/app/globals.css components.json src/components/ui/
git commit -m "chore: configure Tailwind 4, initialize ShadCN with yellow primary"
```

---

## Task 3: Fonts, Providers, and Layout

**Files:**
- Create: `src/components/providers.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create providers.tsx**

```tsx
// src/components/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
```

- [ ] **Step 2: Replace layout.tsx**

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s — Yudistira Ashadi",
    default: "Yudistira Ashadi — CTO & Software Engineer",
  },
  description:
    "Personal website of Yudistira Ashadi — CTO, co-founder, and full-stack software engineer based in Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Providers>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
```

Note: `Navbar` and `Footer` are created in Tasks 5 and 6. The build will fail until then — that's expected. Keep moving.

- [ ] **Step 3: Add font CSS variables to globals.css**

Append at the end of `src/app/globals.css`:

```css
@theme inline {
  --font-sans: var(--font-inter);
  --font-mono: var(--font-mono);
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/providers.tsx src/app/layout.tsx src/app/globals.css
git commit -m "feat: add next-themes provider, Inter + JetBrains Mono fonts"
```

---

## Task 4: Theme Toggle

**Files:**
- Create: `src/components/theme-toggle.tsx`

- [ ] **Step 1: Create theme-toggle.tsx**

```tsx
// src/components/theme-toggle.tsx
"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-8 w-8 text-foreground hover:bg-primary/10 hover:text-foreground"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/theme-toggle.tsx
git commit -m "feat: add ThemeToggle component"
```

---

## Task 5: Navbar

**Files:**
- Create: `src/components/navbar.tsx`

- [ ] **Step 1: Create navbar.tsx**

```tsx
// src/components/navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/utils/cn";

import photoProfile from "@/assets/images/photo_profile.jpg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "#contacts" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [prevY, setPrevY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > prevY && latest > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setPrevY(latest);
  });

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-md p-1 transition-opacity hover:opacity-80"
        >
          <div className="h-7 w-7 overflow-hidden rounded-full border border-border">
            <Image
              src={photoProfile}
              alt="Yudistira Ashadi"
              width={28}
              height={28}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="text-sm font-semibold leading-none">
              Yudistira Ashadi
            </div>
            <div className="font-mono text-[9px] text-muted-foreground">
              CTO &amp; Co-founder
            </div>
          </div>
        </Link>

        {/* Desktop nav — center */}
        <nav className="hidden items-center gap-1 sm:flex">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              size="sm"
              asChild
              className={cn(
                "rounded-full text-sm text-muted-foreground hover:text-foreground",
                isActive(link.href) &&
                  "border-b-2 border-primary text-foreground rounded-none pb-0",
              )}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline-flex"
          >
            <Link
              href="https://grahateknologimaju.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our Agency ↗
            </Link>
          </Button>

          <ThemeToggle />

          {/* Mobile burger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 sm:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left text-sm font-semibold">
                  Yudistira Ashadi
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    variant={isActive(link.href) ? "secondary" : "ghost"}
                    className="justify-start"
                    asChild
                    onClick={() => setMobileOpen(false)}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  className="justify-start text-muted-foreground"
                  asChild
                  onClick={() => setMobileOpen(false)}
                >
                  <Link
                    href="https://grahateknologimaju.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Our Agency ↗
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
```

- [ ] **Step 2: Verify it renders**

```bash
pnpm dev
```

Open `http://localhost:3000`. The navbar should appear. Pages will look broken — expected until all components are built.

- [ ] **Step 3: Commit**

```bash
git add src/components/navbar.tsx
git commit -m "feat: add Navbar with hide-on-scroll, mobile Sheet drawer"
```

---

## Task 6: Footer

**Files:**
- Create: `src/components/footer.tsx`

- [ ] **Step 1: Create footer.tsx**

```tsx
// src/components/footer.tsx
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
    <footer className="mt-24 border-t border-border bg-background">
      <div
        id="contacts"
        className="mx-auto max-w-7xl px-4 py-16"
      >
        <div className="mb-10 flex flex-wrap justify-center gap-8">
          {contacts.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm">{label}</span>
            </Link>
          ))}
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

- [ ] **Step 2: Commit**

```bash
git add src/components/footer.tsx
git commit -m "feat: add Footer with contact links"
```

---

## Task 7: Aurora Background

**Files:**
- Create: `src/components/aurora-background.tsx`

- [ ] **Step 1: Create aurora-background.tsx**

```tsx
// src/components/aurora-background.tsx
"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    className: "absolute -top-20 -left-20 h-72 w-72",
    color: "rgba(255, 229, 0, 0.09)",
    animate: {
      x: [0, 40, -20, 0],
      y: [0, -20, 30, 0],
      scale: [1, 1.1, 0.95, 1],
    },
    duration: 10,
  },
  {
    className: "absolute top-10 -right-10 h-60 w-60",
    color: "rgba(255, 180, 0, 0.07)",
    animate: {
      x: [0, -25, 20, 0],
      y: [0, 20, -10, 0],
      scale: [1, 1.05, 1.1, 1],
    },
    duration: 13,
  },
  {
    className: "absolute -bottom-20 left-1/3 h-64 w-64",
    color: "rgba(255, 229, 0, 0.06)",
    animate: {
      x: [0, 15, -25, 0],
      y: [0, -25, 15, 0],
      scale: [1.05, 0.95, 1.05, 1],
    },
    duration: 9,
  },
] as const;

export function AuroraBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={blob.className}
          style={{
            borderRadius: "50%",
            background: blob.color,
            filter: "blur(60px)",
            willChange: "transform",
          }}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="relative">{children}</div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/aurora-background.tsx
git commit -m "feat: add AuroraBackground animation component"
```

---

## Task 8: Hero Section

**Files:**
- Create: `src/components/hero.tsx`

- [ ] **Step 1: Create hero.tsx**

```tsx
// src/components/hero.tsx
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/aurora-background";

import photoYudis from "@/assets/images/photo_yudis.jpg";

const socials = [
  { href: "https://www.linkedin.com/in/yudistiraashadi/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/yudistiraashadi", icon: Github, label: "GitHub" },
  { href: "https://x.com/yudistiraashadi", icon: Twitter, label: "X" },
] as const;

export function Hero() {
  return (
    <AuroraBackground className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-5">
          {/* Text */}
          <div className="lg:col-span-3">
            <p className="font-mono mb-4 text-xs tracking-widest text-muted-foreground uppercase">
              CTO · Co-founder · Software Engineer
            </p>

            <h1 className="mb-4 text-4xl font-light leading-tight tracking-tight lg:text-5xl xl:text-6xl">
              Building technology
              <br />
              <span className="font-extrabold">
                that{" "}
                <span className="bg-primary px-1 text-primary-foreground">
                  scales.
                </span>
              </span>
            </h1>

            <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
              Co-founder &amp; CTO of{" "}
              <Link
                href="https://grahateknologimaju.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-2 hover:text-primary"
              >
                Graha Teknologi Maju
              </Link>
              . Full-stack software engineer with 10+ years delivering enterprise
              web platforms, AI-powered solutions, and mobile applications for
              governments and multinational companies across Indonesia.
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/portfolio">View Projects →</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://grahateknologimaju.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Our Agency ↗
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-5">
              {socials.map(({ href, icon: Icon, label }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:col-span-2 lg:justify-end">
            <div className="relative h-64 w-64 overflow-hidden rounded-xl border-2 border-primary lg:h-80 lg:w-80">
              <Image
                src={photoYudis}
                alt="Yudistira Ashadi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/hero.tsx
git commit -m "feat: add Hero section with aurora background"
```

---

## Task 9: Stats Bar

**Files:**
- Create: `src/components/stats-bar.tsx`

- [ ] **Step 1: Create stats-bar.tsx**

```tsx
// src/components/stats-bar.tsx
const stats = [
  { value: "10+", label: "yrs_experience" },
  { value: "24+", label: "projects_shipped" },
  { value: "Gov & Enterprise", label: "enterprise_clients" },
] as const;

export function StatsBar() {
  return (
    <div className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-3 divide-x divide-border">
          {stats.map(({ value, label }) => (
            <div key={label} className="px-6 py-6 text-center lg:px-8">
              <div className="text-2xl font-extrabold tracking-tight lg:text-3xl">
                {value}
              </div>
              <div className="font-mono mt-1 text-[10px] tracking-widest text-muted-foreground uppercase">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/stats-bar.tsx
git commit -m "feat: add StatsBar component"
```

---

## Task 10: Skills Data and Tech Stack Section

**Files:**
- Create: `src/data/skills.ts`
- Create: `src/components/tech-stack.tsx`

- [ ] **Step 1: Create skills.ts**

```ts
// src/data/skills.ts
export const skillsData: Record<string, string[]> = {
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "PHP", "Supabase", "PostgreSQL", "REST API"],
  Mobile: ["React Native", "Expo"],
  "AI & Cloud": ["OpenAI", "LangChain", "Vercel", "Docker"],
};
```

- [ ] **Step 2: Create tech-stack.tsx**

```tsx
// src/components/tech-stack.tsx
import { Badge } from "@/components/ui/badge";
import { skillsData } from "@/data/skills";

export function TechStack() {
  return (
    <section className="border-b border-border py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-2xl font-bold tracking-tight lg:text-3xl">
          Skills &amp; Technologies
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <p className="font-mono mb-3 text-[10px] tracking-widest text-muted-foreground uppercase">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="font-mono text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/data/skills.ts src/components/tech-stack.tsx
git commit -m "feat: add skills data and TechStack section"
```

---

## Task 11: Portfolio Card

**Files:**
- Create: `src/components/portfolio-card.tsx`

- [ ] **Step 1: Create portfolio-card.tsx**

```tsx
// src/components/portfolio-card.tsx
import Image from "next/image";
import Link from "next/link";
import { Link2, LinkOff } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/cn";
import { type PortfolioType } from "@/data/portfolio";

const sharedClassName = (hasUrl: boolean, className?: string) =>
  cn(
    "group flex flex-col rounded-lg border border-border bg-card transition-all duration-200",
    hasUrl && "cursor-pointer hover:border-primary hover:shadow-md",
    !hasUrl && "cursor-default",
    className,
  );

function CardBody({ portfolio }: { portfolio: PortfolioType }) {
  return (
    <>
      {/* Image */}
      <div className="relative aspect-video overflow-hidden rounded-t-lg bg-muted">
        <Image
          src={portfolio.image}
          alt={`Screenshot of ${portfolio.title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {portfolio.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="font-mono text-[10px]">
              {tag}
            </Badge>
          ))}
        </div>

        <p className="font-mono mb-1 text-[10px] text-muted-foreground">
          {portfolio.year}
        </p>
        <h3 className="mb-2 font-semibold leading-snug">{portfolio.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {portfolio.description}
        </p>

        {portfolio.url && (
          <div className="mt-4 flex items-center gap-1.5">
            <Link2 className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
            <span className="truncate text-xs text-muted-foreground">
              {portfolio.url}
            </span>
          </div>
        )}
        {!portfolio.url && portfolio.urlMissingReason && (
          <div className="mt-4 flex items-center gap-1.5">
            <LinkOff className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {portfolio.urlMissingReason}
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export function PortfolioCard({
  portfolio,
  className,
}: {
  portfolio: PortfolioType;
  className?: string;
}) {
  if (portfolio.url) {
    return (
      <Link
        href={portfolio.url}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClassName(true, className)}
      >
        <CardBody portfolio={portfolio} />
      </Link>
    );
  }

  return (
    <div className={sharedClassName(false, className)}>
      <CardBody portfolio={portfolio} />
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/portfolio-card.tsx
git commit -m "feat: add PortfolioCard with ShadCN Badge"
```

---

## Task 12: Portfolio List

**Files:**
- Create: `src/components/portfolio-list.tsx`

- [ ] **Step 1: Create portfolio-list.tsx**

```tsx
// src/components/portfolio-list.tsx
"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { PortfolioCard } from "@/components/portfolio-card";
import { type PortfolioType } from "@/data/portfolio";

export function PortfolioList({
  portfolioData,
}: {
  portfolioData: PortfolioType[];
}) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return portfolioData.filter((p) =>
      `${p.title} ${p.tags.join(" ")} ${p.year} ${p.description}`
        .toLowerCase()
        .includes(q),
    );
  }, [search, portfolioData]);

  return (
    <>
      <div className="relative mb-8 w-full lg:w-1/2">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search by name, tech, or year…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-muted-foreground">No projects found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PortfolioCard key={p.title} portfolio={p} />
          ))}
        </div>
      )}
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/portfolio-list.tsx
git commit -m "feat: add PortfolioList with search"
```

---

## Task 13: Work Experience Section

**Files:**
- Create: `src/components/work-experience.tsx`

- [ ] **Step 1: Create work-experience.tsx**

```tsx
// src/components/work-experience.tsx
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { workData, monthNames } from "@/data/work";

function formatDateRange(
  monthStart: number,
  yearStart: number,
  monthEnd: number | undefined,
  yearEnd: number | undefined,
): string {
  const start = `${monthNames[monthStart]} ${yearStart}`;
  if (!yearEnd) return `${start} — Present`;
  const end = monthEnd !== undefined
    ? `${monthNames[monthEnd]} ${yearEnd}`
    : String(yearEnd);
  return `${start} — ${end}`;
}

export function WorkExperience() {
  return (
    <section className="border-b border-border py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-2xl font-bold tracking-tight lg:text-3xl">
          Work Experience
        </h2>

        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workData.slice(0, 4).map((work) => (
            <div
              key={work.companyName}
              className="rounded-lg border border-border bg-card p-5"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md border border-border bg-white">
                  <Image
                    src={work.companyLogo}
                    alt={`${work.companyName} logo`}
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-snug">
                    {work.companyName}
                  </p>
                  <p className="text-xs text-muted-foreground">{work.jobTitle}</p>
                </div>
              </div>
              <p className="font-mono text-[10px] text-muted-foreground">
                {formatDateRange(
                  work.monthStart,
                  work.yearStart,
                  work.monthEnd,
                  work.yearEnd,
                )}
              </p>
            </div>
          ))}
        </div>

        <Button variant="outline" asChild>
          <Link
            href="https://www.linkedin.com/in/yudistiraashadi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View full history on LinkedIn ↗
          </Link>
        </Button>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/work-experience.tsx
git commit -m "feat: add WorkExperience section"
```

---

## Task 13b: Scroll Fade-In Wrapper

**Files:**
- Create: `src/components/fade-in.tsx`

Sections are Server Components so they can't use `motion` directly. This thin client wrapper adds the scroll animation without making entire sections client components.

- [ ] **Step 1: Create fade-in.tsx**

```tsx
// src/components/fade-in.tsx
"use client";

import { motion } from "framer-motion";

export function FadeIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/fade-in.tsx
git commit -m "feat: add FadeIn scroll animation wrapper"
```

---

## Task 14: Assemble Homepage

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace page.tsx**

```tsx
// src/app/page.tsx
import Link from "next/link";

import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { TechStack } from "@/components/tech-stack";
import { WorkExperience } from "@/components/work-experience";
import { PortfolioCard } from "@/components/portfolio-card";
import { FadeIn } from "@/components/fade-in";

import { portfolioData } from "@/data/portfolio";

const featured = portfolioData.filter((p) => p.priority).slice(0, 8);

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />

      <FadeIn>
        <TechStack />
      </FadeIn>

      {/* Featured Projects */}
      <FadeIn>
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
                Featured Projects
              </h2>
              <Link
                href="/portfolio"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                View all →
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((p) => (
                <PortfolioCard key={p.title} portfolio={p} />
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <WorkExperience />
      </FadeIn>
    </>
  );
}
```

- [ ] **Step 2: Verify homepage renders**

```bash
pnpm dev
```

Open `http://localhost:3000`. All sections should be visible: hero with aurora, stats bar, tech stack chips, featured projects, work experience.

Check dark/light toggle works and switches modes correctly.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: assemble homepage with all sections"
```

---

## Task 15: Portfolio Page

**Files:**
- Modify: `src/app/portfolio/page.tsx`

- [ ] **Step 1: Replace portfolio/page.tsx**

```tsx
// src/app/portfolio/page.tsx
import { Metadata } from "next";

import { PortfolioList } from "@/components/portfolio-list";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Projects by Yudistira Ashadi — web apps, AI tools, and mobile applications.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <section className="mb-12">
        <h1 className="mb-3 text-4xl font-bold tracking-tight lg:text-5xl">
          Portfolio
        </h1>
        <p className="max-w-xl text-muted-foreground">
          A collection of projects across web platforms, AI integrations, government
          systems, and mobile apps — built over 10+ years.
        </p>
      </section>

      <PortfolioList portfolioData={portfolioData} />
    </div>
  );
}
```

- [ ] **Step 2: Verify portfolio page**

```bash
pnpm dev
```

Open `http://localhost:3000/portfolio`. Grid renders, search filters correctly.

- [ ] **Step 3: Commit**

```bash
git add src/app/portfolio/page.tsx
git commit -m "feat: update portfolio page to use new components"
```

---

## Task 16: Delete Old Files

**Files:**
- Delete: `src/app/mantine-custom-provider.tsx`
- Delete: `src/components/appshell.tsx`
- Delete: `src/components/container.tsx`
- Delete: `src/components/flip-words.tsx`
- Delete: `src/components/hero-highlight.tsx`
- Delete: `src/components/meteors.tsx`
- Delete: `src/components/search-bar.tsx`
- Delete: `src/components/portfolio.tsx`
- Delete: `src/components/theme.tsx`

- [ ] **Step 1: Delete old files**

```bash
rm src/app/mantine-custom-provider.tsx
rm src/components/appshell.tsx
rm src/components/container.tsx
rm src/components/flip-words.tsx
rm src/components/hero-highlight.tsx
rm src/components/meteors.tsx
rm src/components/search-bar.tsx
rm src/components/portfolio.tsx
rm src/components/theme.tsx
```

- [ ] **Step 2: Run lint to catch any stale imports**

```bash
pnpm lint
```

Fix any errors — they will all be "module not found" for the deleted files. Check that `page.tsx` and `portfolio/page.tsx` no longer import any of the deleted modules.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: delete legacy Mantine components and utilities"
```

---

## Task 17: Final Verification

- [ ] **Step 1: Full lint pass**

```bash
pnpm lint
```

Expected: no errors.

- [ ] **Step 2: Production build**

```bash
pnpm build
```

Expected: build succeeds with no TypeScript errors and no missing module errors.

- [ ] **Step 3: Smoke test in browser**

```bash
pnpm start
```

Check all of the following:
- [ ] Homepage loads with aurora effect visible
- [ ] Dark/light toggle switches modes; both look correct
- [ ] Navbar hides on scroll down, reappears on scroll up
- [ ] Mobile: hamburger opens Sheet drawer, links work
- [ ] "Our Agency ↗" link opens `https://grahateknologimaju.com/` in new tab
- [ ] Stats bar, tech stack chips, featured projects, work experience all render
- [ ] `/portfolio` page: all 24 projects render; search filters them
- [ ] Footer contact links all point to correct destinations
- [ ] `#contacts` anchor scroll works from the Contact nav link

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete portfolio rewrite — Next.js 15, ShadCN UI, minimal yellow design"
```
