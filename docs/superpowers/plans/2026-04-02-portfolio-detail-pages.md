# Portfolio Detail Pages, MDX Content & Work Experience Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add MDX-powered portfolio detail pages at `/portfolio/[slug]`, update all 24 existing portfolio entries with slugs, add 4 new portfolio items, and update work experience to match LinkedIn.

**Architecture:** Hybrid approach — `src/data/portfolio.ts` remains source of truth for list metadata (preserves Next.js static image optimization); `content/portfolios/[slug].mdx` files add rich article content for detail pages. `src/lib/portfolios.ts` reads MDX bodies. Cards link to `/portfolio/${slug}` instead of external URLs.

**Tech Stack:** Next.js 16 App Router, `next-mdx-remote/rsc`, `gray-matter`, `@tailwindcss/typography`, TypeScript, Tailwind CSS 4

---

## File Map

| File | Action | Purpose |
|------|--------|---------|
| `package.json` | Modify | Add `next-mdx-remote`, `gray-matter`, `@tailwindcss/typography` |
| `src/assets/work/gtm-logo.png` | Create | PT Graha Teknologi Maju logo (copied from otomindo project) |
| `src/assets/portfolio/kompetify.webp` | Create | New portfolio image |
| `src/assets/portfolio/sahabat-pu.webp` | Create | New portfolio image |
| `src/assets/portfolio/new-ekaryasiswa.webp` | Create | New portfolio image |
| `src/assets/portfolio/dishub-nganjuk-pju.webp` | Create | New portfolio image |
| `src/data/portfolio.ts` | Modify | Add `slug`/`result` to type; update 24 entries; add 4 new entries |
| `src/data/work.ts` | Modify | Update company name, title, logo for current role |
| `src/lib/portfolios.ts` | Create | Reads MDX body by slug |
| `src/app/globals.css` | Modify | Add `@plugin "@tailwindcss/typography"` |
| `src/app/portfolio/[slug]/page.tsx` | Create | Portfolio detail page |
| `src/app/portfolio-card.tsx` | Modify | Link cards to `/portfolio/${slug}` |
| `content/portfolios/*.mdx` | Create | 28 MDX article files (24 existing + 4 new) |

---

## Task 1: Install Dependencies

**Files:** `package.json`

- [ ] **Install packages**

```bash
cd /Users/yudis/Codes/Personal/portfolio-web
pnpm add next-mdx-remote gray-matter @tailwindcss/typography
```

Expected: packages added to `dependencies` in `package.json`.

- [ ] **Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: add next-mdx-remote, gray-matter, typography plugin"
```

---

## Task 2: Copy Asset Files

**Files:** `src/assets/work/gtm-logo.png`, `src/assets/portfolio/*.webp` (4 files)

- [ ] **Copy GTM logo**

```bash
cp /Users/yudis/Codes/Works/otomindo/gtm-landing-page/public/images/gtm-logo.png \
   /Users/yudis/Codes/Personal/portfolio-web/src/assets/work/gtm-logo.png
```

- [ ] **Copy 4 new portfolio images**

```bash
cp /Users/yudis/Codes/Works/otomindo/gtm-landing-page/public/portfolios/kompetify.webp \
   /Users/yudis/Codes/Personal/portfolio-web/src/assets/portfolio/kompetify.webp

cp /Users/yudis/Codes/Works/otomindo/gtm-landing-page/public/portfolios/sahabat-pu.webp \
   /Users/yudis/Codes/Personal/portfolio-web/src/assets/portfolio/sahabat-pu.webp

cp /Users/yudis/Codes/Works/otomindo/gtm-landing-page/public/portfolios/new-ekaryasiswa.webp \
   /Users/yudis/Codes/Personal/portfolio-web/src/assets/portfolio/new-ekaryasiswa.webp

cp /Users/yudis/Codes/Works/otomindo/gtm-landing-page/public/portfolios/dishub-nganjuk-pju.webp \
   /Users/yudis/Codes/Personal/portfolio-web/src/assets/portfolio/dishub-nganjuk-pju.webp
```

- [ ] **Commit**

```bash
git add src/assets/
git commit -m "chore: add GTM logo and new portfolio images"
```

---

## Task 3: Update PortfolioType and portfolio.ts

**Files:** `src/data/portfolio.ts`

- [ ] **Replace the entire file** with the following content. Key changes: `slug: string` and `result?: string` added to type; all entries updated with slugs; 4 new entries added at the top; 4 new image imports added.

```typescript
export type PortfolioType = {
  slug: string;
  url?: string;
  urlMissingReason?: string;
  year: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  priority?: boolean;
  result?: string;
};

import kelaslyImage from "@/assets/portfolio/kelasly.webp";
import bonImage from "@/assets/portfolio/bon.webp";
import bpsdmPuprImage from "@/assets/portfolio/bpsdm-pupr.webp";
import lspBpsdmImage from "@/assets/portfolio/lsp-bpsdm.webp";
import posParkingTulungagungImage from "@/assets/portfolio/pos-parking-tulungagung.webp";
import puspasUnairImage from "@/assets/portfolio/puspas-unair.webp";
import exitaImage from "@/assets/portfolio/exita.webp";
import trakerKediriImage from "@/assets/portfolio/traker-kediri.webp";
import simantuImage from "@/assets/portfolio/simantu.webp";
import ePelatihanImage from "@/assets/portfolio/e-pelatihan.webp";
import panglimaEkspresImage from "@/assets/portfolio/panglima-ekspres.webp";
import meijiTimbanganImage from "@/assets/portfolio/meiji-timbangan.webp";
import ekinImage from "@/assets/portfolio/ekin.webp";
import appaDairyImage from "@/assets/portfolio/appa-dairy.webp";
import appaSportImage from "@/assets/portfolio/appa-sport.webp";
import lhrImage from "@/assets/portfolio/lhr.webp";
import pqsUnilever from "@/assets/portfolio/pqs-unilever.webp";
import sistemPersonalia from "@/assets/portfolio/sistem-personalia.webp";
import aaainvestama from "@/assets/portfolio/aaainvestama.webp";
import klop from "@/assets/portfolio/klop.webp";
import sunScraping from "@/assets/portfolio/sun-scraping.webp";
import sumwizardImage from "@/assets/portfolio/sumwizard.webp";
import appaAcademyImage from "@/assets/portfolio/appa-academy.webp";
import rekapKaryasiswaImage from "@/assets/portfolio/rekap-karyasiswa.webp";
import kompetifyImage from "@/assets/portfolio/kompetify.webp";
import sahabatPuImage from "@/assets/portfolio/sahabat-pu.webp";
import newEkaryasiswaImage from "@/assets/portfolio/new-ekaryasiswa.webp";
import dishubNganjukPjuImage from "@/assets/portfolio/dishub-nganjuk-pju.webp";

export const portfolioData: PortfolioType[] = [
  {
    slug: "sahabat-pu",
    urlMissingReason: "Only available for internal use",
    year: 2026,
    title: "Sahabat PU: AI-Powered Ticketing & Chat Platform",
    description:
      "Government ticketing system with AI chatbot integration, enabling citizens to get answers about public services, submit forms, and create support tickets through configurable workflows",
    image: sahabatPuImage.src,
    tags: ["Next.js", "AI", "Chatbot", "Ticketing", "Government", "SaaS"],
    priority: true,
    result: "AI-assisted citizen service platform for Ministry of Public Works",
  },
  {
    slug: "new-ekaryasiswa",
    url: "https://bpsdm.pu.go.id/new-e-karyasiswa/",
    year: 2026,
    title: "New e-Karyasiswa: Scholarship Management System",
    description:
      "Next-generation scholarship management platform for BPSDM PUPR, rebuilding the Karyasiswa monitoring system with modern full-stack architecture and enhanced capabilities",
    image: newEkaryasiswaImage.src,
    tags: ["Next.js", "Government", "Dashboard", "Monitoring"],
    priority: true,
    result: "Modernized scholarship management for BPSDM PUPR",
  },
  {
    slug: "karyasiswa-pupr",
    urlMissingReason: "Only available for internal use",
    year: 2025,
    title: "Karyasiswa PUPR Monitoring Dashboard",
    description:
      "Dashboard for monitoring and reporting scholarship students (Karyasiswa) at Ministry of Public Works and Housing (PUPR), enabling regular study progress tracking and evaluation",
    image: rekapKaryasiswaImage.src,
    tags: ["Dashboard", "Monitoring", "Data Visualization", "Reporting"],
    priority: true,
    result: "Streamlined scholarship monitoring for PUPR's Karyasiswa program",
  },
  {
    slug: "appa-academy",
    url: "https://appa-academy.com/",
    year: 2025,
    title: "APPA Academy: Soccer School Management System",
    description:
      "Indonesia's leading management platform for soccer schools, trusted by 500+ academies with features including player assessment, training programs, and real-time monitoring",
    image: appaAcademyImage.src,
    tags: ["Next.js", "SaaS", "Cloud", "Dashboard", "Sports Tech"],
    priority: true,
    result: "Trusted by 500+ soccer academies across Indonesia",
  },
  {
    slug: "kompetify",
    urlMissingReason: "Only available for internal use",
    year: 2025,
    title: "Kompetify: Adaptive Managerial Competency Testing",
    description:
      "Adaptive examination platform that assesses 9 managerial competencies for government officials, adopted by Kementerian PUPR and BKD Jawa Timur for ASN competency assessment",
    image: kompetifyImage.src,
    tags: ["Next.js", "Assessment", "Adaptive Testing", "Dashboard", "Government"],
    priority: true,
    result:
      "Adopted by Kementerian PUPR and BKD Jawa Timur for ASN competency assessment",
  },
  {
    slug: "sumwizard",
    url: "https://sumwizard.com/",
    year: 2025,
    title: "Sumwizard: AI-Powered Media Analysis Platform",
    description:
      "AI-powered platform that transforms YouTube videos and audio files into actionable insights with automated summarization, transcription, and intelligent question answering",
    image: sumwizardImage.src,
    tags: ["Next.js", "AI", "NLP", "Media Analysis", "SaaS"],
    priority: true,
    result: "Automated media analysis with AI-driven summarization and Q&A",
  },
  {
    slug: "dishub-nganjuk-pju",
    urlMissingReason: "Only available for internal use",
    year: 2025,
    title: "Dishub Nganjuk PJU Management System",
    description:
      "GIS-powered public street lighting management system for Nganjuk's Department of Transportation, tracking substations, light poles, cable networks, and PLN electricity billing",
    image: dishubNganjukPjuImage.src,
    tags: ["Next.js", "GIS", "PostGIS", "Dashboard", "Government"],
    result:
      "Digitized street lighting infrastructure management for Nganjuk regency",
  },
  {
    slug: "news-sentiment-analysis",
    urlMissingReason: "Closed research project",
    year: 2024,
    title: "News Sentiment Analysis: Scraping and Analyzing News Articles",
    description:
      "Research project on analyzing sentiments of news article and its effect in the bond market's yield, join research by ITS and the Ministry of Finance of Indonesia",
    image: sunScraping.src,
    tags: ["Python", "Scraping", "NLP", "Sentiment Analysis"],
  },
  {
    slug: "klop",
    url: "https://klop.pu.go.id/",
    year: 2024,
    title: "Klop: AI Powered Knowledge Management System",
    description:
      "Knowledge management system with AI-powered features such as text recognition and LLM assisted search, used by Public Works and Housing Ministry of Indonesia",
    image: klop.src,
    tags: ["Next.js", "Supabase", "AI", "LLM"],
    priority: true,
    result: "Centralized knowledge access for 30,000+ ministry employees",
  },
  {
    slug: "financial-agency",
    url: "https://www.triple-a.co.id/",
    year: 2024,
    title: "Landing Page for a Financial Agency",
    description:
      "Landing page for a private investment and corporate finance agency in Indonesia",
    image: aaainvestama.src,
    tags: ["Next.js", "SQLite"],
  },
  {
    slug: "hr-management-system",
    urlMissingReason: "Only available for internal use",
    year: 2024,
    title: "AI Powered HR Management System",
    description:
      "Human resources management system with AI-powered features such as face recognition, location tracking, and attendance monitoring",
    image: sistemPersonalia.src,
    tags: ["Next.js", "Supabase", "Postgres", "Computer Vision", "AI"],
    priority: true,
    result: "AI face recognition attendance with 99%+ accuracy",
  },
  {
    slug: "unilever-pqs",
    urlMissingReason: "Only available for internal use",
    year: 2024,
    title: "Unilever's Product Quality Standard",
    description:
      "Web app for managing product quality standard of Unilever Indonesia for quality checking, product approval, and data analytics",
    image: pqsUnilever.src,
    tags: ["PHP", "MySQL", "Data Analytics"],
    priority: true,
    result: "Streamlined quality checks across multiple production lines",
  },
  {
    slug: "aigle",
    urlMissingReason: "Only available for internal use",
    year: 2024,
    title: "Traffic Detection System AIGLE",
    description:
      "Web app for detection of vehicle and traffic counting, used by Dishub of East Java",
    image: lhrImage.src,
    tags: ["Next.js", "Supabase", "Postgres", "Computer Vision", "AI"],
    priority: true,
    result: "Real-time traffic monitoring across East Java's road network",
  },
  {
    slug: "appa-sport",
    url: "https://appa-sport-web.vercel.app/",
    year: 2024,
    title: "APPA Sport",
    description: "Web app for statistics of football matches",
    image: appaSportImage.src,
    tags: ["Next.js", "Supabase", "Postgres", "Tailwind CSS"],
  },
  {
    slug: "appa-dairy",
    urlMissingReason: "Only available for internal use",
    year: 2024,
    title: "APPA Dairy Management System",
    description: "Web app for managing dairy production data of APPA Dairy",
    image: appaDairyImage.src,
    tags: ["Next.js", "Supabase", "Postgres", "Tailwind CSS"],
  },
  {
    slug: "ekinerja-pupr",
    urlMissingReason: "Only available for internal use",
    year: 2023,
    title: "e-Kinerja PUPR",
    description:
      "Website for managing employee performance of Public Works and Housing Ministry of Indonesia",
    image: ekinImage.src,
    tags: ["PHP", "MySQL"],
    result: "Digital performance tracking for thousands of ministry staff",
  },
  {
    slug: "meiji-weighing",
    urlMissingReason: "Only available for internal use",
    year: 2023,
    title: "Meiji Weighing Monitoring System",
    description:
      "Web app for monitoring weighing data of PT. Meiji Indonesian Pharmaceutical Industries in Bangil, Indonesia",
    image: meijiTimbanganImage.src,
    tags: ["Next.js", "Supabase", "Tailwind CSS", "Docker"],
    result: "Automated weighing data collection with real-time dashboards",
  },
  {
    slug: "panglima-ekspres",
    url: "https://panglimaekspres.com/",
    year: 2023,
    title: "Panglima Ekspres",
    description:
      "Web app for Umroh and Hajj travel agency Panglima Ekspress in Surabaya, Indonesia",
    image: panglimaEkspresImage.src,
    tags: ["Codeigniter", "PHP", "MySQL", "Tailwind CSS"],
  },
  {
    slug: "bpsdm-epelatihan",
    urlMissingReason: "Only available for internal use",
    year: 2023,
    title: "BPSDM e-Pelatihan",
    description:
      "Web app for managing training activities of Public Works and Housing Ministry of Indonesia",
    image: ePelatihanImage.src,
    tags: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    slug: "simantu-pupr",
    url: "https://simantu.pu.go.id/",
    year: 2023,
    title: "SIMANTU - Sistem Manajemen Pengetahuan",
    description:
      "Web app for managing knowledge of Public Works and Housing Ministry of Indonesia",
    image: simantuImage.src,
    tags: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    slug: "traker-kediri",
    url: "https://play.google.com/store/apps/details?id=com.app.trakerkediri&hl=id",
    year: 2023,
    title: "Traker Kediri",
    description:
      "Mobile app for getting public transportation, CCTV, and updates regarding Dishub of Kediri City, Indonesia",
    image: trakerKediriImage.src,
    tags: ["React Native", "GIS"],
    priority: true,
  },
  {
    slug: "exita-tulungagung",
    url: "https://play.google.com/store/apps/details?id=com.exita",
    year: 2023,
    title: "Exita - Explorasi Tulungagung",
    description:
      "Mobile app for accessing public transportation information in Tulungagung City, Indonesia",
    image: exitaImage.src,
    tags: ["React Native", "MobX", "GIS"],
  },
  {
    slug: "puspas-unair",
    url: "https://puspas.unair.ac.id",
    year: 2022,
    title: "PUSPAS UNAIR",
    description:
      "Website for Social Fund Management Department of Airlangga University in Surabaya, Indonesia",
    image: puspasUnairImage.src,
    tags: ["Codeigniter", "PHP", "Banking", "MySQL"],
  },
  {
    slug: "pos-parkir",
    urlMissingReason: "Only available in local network",
    year: 2022,
    title: "Pos Parking Tulungagung",
    description: "Parking management system for Tulungagung City Government",
    image: posParkingTulungagungImage.src,
    tags: ["Codeigniter", "PHP", "Python", "REST API"],
  },
  {
    slug: "lsp-bpsdm-pupr",
    url: "https://bpsdm.pu.go.id/lspbpsdm/",
    year: 2022,
    title: "LSP BPSDM PUPR Website",
    description:
      "Website for Certification Body of Public Works and Housing Ministry of Indonesia",
    image: lspBpsdmImage.src,
    tags: ["Codeigniter", "PHP", "Bootstrap", "MySQL"],
  },
  {
    slug: "bpsdm-pupr",
    url: "https://bpsdm.pu.go.id/",
    year: 2022,
    title: "BPSDM PUPR Website",
    description:
      "Website for Human Resources Department of Public Works and Housing Ministry of Indonesia",
    image: bpsdmPuprImage.src,
    tags: ["Codeigniter", "PHP", "Bootstrap", "MySQL"],
  },
  {
    slug: "bon",
    url: "https://play.google.com/store/apps/details?id=com.retas.bon&hl=en&gl=US",
    year: 2022,
    title: "Bon: Aplikasi Keuangan UMKM",
    description: "Mobile app for managing small businesses finance",
    image: bonImage.src,
    tags: ["Mobile App", "React Native"],
  },
  {
    slug: "kelasly",
    year: 2021,
    title: "Kelasly",
    description: "Mobile app for education startup: Kelasly.id",
    image: kelaslyImage.src,
    tags: ["Mobile App", "React Native", "Firebase"],
  },
];
```

- [ ] **Commit**

```bash
git add src/data/portfolio.ts src/assets/portfolio/
git commit -m "feat: add slug/result fields and new portfolio entries"
```

---

## Task 4: Update work.ts

**Files:** `src/data/work.ts`

- [ ] **Replace the file** with updated work experience matching LinkedIn

```typescript
export type WorkType = {
  yearStart: number;
  monthStart: number;
  yearEnd?: number;
  monthEnd?: number;
  companyName: string;
  companyLogo: string;
  jobTitle: string;
};

import freelancer from "@/assets/work/freelancer.webp";
import mydaxue from "@/assets/work/mydaxue.webp";
import retas from "@/assets/work/retas.png";
import gtmLogo from "@/assets/work/gtm-logo.png";

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Desember",
];

// NOTES: month is 0-based index, 0 = January, 11 = December
export const workData: WorkType[] = [
  {
    yearStart: 2023,
    monthStart: 9,
    companyName: "PT. Graha Teknologi Maju",
    companyLogo: gtmLogo.src,
    jobTitle: "CTO and Co-Founder",
  },
  {
    yearStart: 2021,
    monthStart: 1,
    yearEnd: 2023,
    monthEnd: 9,
    companyName: "Retas.io",
    companyLogo: retas.src,
    jobTitle: "Lead Developer",
  },
  {
    yearStart: 2018,
    monthStart: 3,
    yearEnd: 2019,
    monthEnd: 0,
    companyName: "MyDaxue",
    companyLogo: mydaxue.src,
    jobTitle: "Mobile Application Developer",
  },
  {
    yearStart: 2014,
    monthStart: 10,
    yearEnd: 2019,
    monthEnd: 0,
    companyName: "Freelancer",
    companyLogo: freelancer.src,
    jobTitle: "Freelance Developer",
  },
];
```

- [ ] **Commit**

```bash
git add src/data/work.ts
git commit -m "feat: update work experience to match LinkedIn"
```

---

## Task 5: Create MDX Files — Existing Items (Ported from Otomindo)

**Files:** `content/portfolios/*.mdx` (23 files)

For each file below: open the source path, copy everything **after** the closing `---` of the frontmatter, and write it to the destination path. The MDX files in this project have **no frontmatter** — body only.

- [ ] **Create the content directory**

```bash
mkdir -p /Users/yudis/Codes/Personal/portfolio-web/content/portfolios
```

- [ ] **Port all 23 files** using this pattern (strip lines 1 through the second `---` inclusive):

```bash
OTOMINDO=/Users/yudis/Codes/Works/otomindo/gtm-landing-page/content/portfolios
DEST=/Users/yudis/Codes/Personal/portfolio-web/content/portfolios

for slug in aigle appa-academy appa-dairy appa-sport bon bpsdm-epelatihan bpsdm-pupr \
  ekinerja-pupr exita-tulungagung financial-agency hr-management-system karyasiswa-pupr \
  kelasly klop lsp-bpsdm-pupr meiji-weighing panglima-ekspres pos-parkir puspas-unair \
  simantu-pupr sumwizard traker-kediri unilever-pqs; do
  # Extract body: skip lines until past the second "---"
  awk '/^---/{c++;next} c>=2' "$OTOMINDO/$slug.mdx" > "$DEST/$slug.mdx"
  echo "Ported $slug.mdx"
done
```

- [ ] **Verify a few files have content and no frontmatter**

```bash
head -5 /Users/yudis/Codes/Personal/portfolio-web/content/portfolios/klop.mdx
head -5 /Users/yudis/Codes/Personal/portfolio-web/content/portfolios/aigle.mdx
```

Expected: starts with plain text or a markdown heading (`##`), no `---` lines.

- [ ] **Commit**

```bash
git add content/portfolios/
git commit -m "feat: add MDX article content for existing portfolio items"
```

---

## Task 6: Create MDX for News Sentiment Analysis

**Files:** `content/portfolios/news-sentiment-analysis.mdx`

- [ ] **Create the file**

```markdown
News Sentiment Analysis is a collaborative research project conducted jointly by Institut Teknologi Sepuluh Nopember (ITS) and the Ministry of Finance of Indonesia, investigating the relationship between news sentiment and Indonesian government bond market yields.

## Research Objective

The project examines whether sentiment extracted from Indonesian financial and economic news articles has a measurable impact on bond yield movements. By quantifying the "mood" of news coverage, the research aims to provide a data-driven signal that supplements traditional bond market analysis.

## Key Components

### 1. Automated News Scraping

A Python-based scraper collects articles from major Indonesian financial and economic news sources on a scheduled basis. The pipeline handles pagination, deduplication, and raw HTML extraction, storing structured article data including headline, body, publication date, and source.

### 2. Text Preprocessing

Raw article text is cleaned and normalized for NLP processing: removing stopwords, handling Indonesian-language tokenization, and preparing inputs for sentiment classification models.

### 3. Sentiment Classification

Each article is scored using NLP models adapted for the Indonesian language and financial domain. Sentiment scores are aggregated by day and news source to produce composite sentiment indices.

### 4. Bond Yield Correlation Analysis

Sentiment indices are compared against daily Indonesian government bond yield data across multiple maturities. Statistical analysis — including time-lag correlation and regression modelling — tests whether sentiment leads, lags, or moves concurrently with yield changes.

## Purpose and Benefits

The research contributes to the understanding of how public information and media narrative influence sovereign debt markets in an emerging economy context. Findings support more informed bond market analysis by incorporating textual data alongside traditional macroeconomic indicators.
```

- [ ] **Commit**

```bash
git add content/portfolios/news-sentiment-analysis.mdx
git commit -m "feat: add MDX content for news sentiment analysis"
```

---

## Task 7: Create MDX Files — 4 New Portfolio Items

**Files:** `content/portfolios/kompetify.mdx`, `sahabat-pu.mdx`, `new-ekaryasiswa.mdx`, `dishub-nganjuk-pju.mdx`

- [ ] **Port the 4 new items** from otomindo (same strip-frontmatter pattern as Task 5):

```bash
OTOMINDO=/Users/yudis/Codes/Works/otomindo/gtm-landing-page/content/portfolios
DEST=/Users/yudis/Codes/Personal/portfolio-web/content/portfolios

for slug in kompetify sahabat-pu new-ekaryasiswa dishub-nganjuk-pju; do
  awk '/^---/{c++;next} c>=2' "$OTOMINDO/$slug.mdx" > "$DEST/$slug.mdx"
  echo "Ported $slug.mdx"
done
```

- [ ] **Verify**

```bash
head -3 /Users/yudis/Codes/Personal/portfolio-web/content/portfolios/kompetify.mdx
```

Expected: starts with plain text or `##`, no `---`.

- [ ] **Commit**

```bash
git add content/portfolios/
git commit -m "feat: add MDX content for 4 new portfolio items"
```

---

## Task 8: Create src/lib/portfolios.ts

**Files:** `src/lib/portfolios.ts`

- [ ] **Create the directory and file**

```bash
mkdir -p /Users/yudis/Codes/Personal/portfolio-web/src/lib
```

```typescript
// src/lib/portfolios.ts
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content", "portfolios");

export function getPortfolioArticle(slug: string): string {
  if (!/^[\w-]+$/.test(slug)) return "";
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return "";
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);
  return content.trim();
}
```

- [ ] **Commit**

```bash
git add src/lib/portfolios.ts
git commit -m "feat: add portfolio MDX reader library"
```

---

## Task 9: Configure @tailwindcss/typography

**Files:** `src/app/globals.css`

- [ ] **Add the typography plugin** at the top of `globals.css`, after any existing `@import` or `@tailwind` directives and before `@theme`:

Open `src/app/globals.css` and add this line after the existing `@import "tailwindcss"` (or equivalent top-level import):

```css
@plugin "@tailwindcss/typography";
```

- [ ] **Commit**

```bash
git add src/app/globals.css
git commit -m "feat: enable tailwindcss/typography plugin for MDX prose styles"
```

---

## Task 10: Create Portfolio Detail Page

**Files:** `src/app/portfolio/[slug]/page.tsx`

- [ ] **Create the directory**

```bash
mkdir -p /Users/yudis/Codes/Personal/portfolio-web/src/app/portfolio/\[slug\]
```

- [ ] **Create the page**

```typescript
// src/app/portfolio/[slug]/page.tsx
import { portfolioData } from "@/data/portfolio";
import { getPortfolioArticle } from "@/lib/portfolios";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ExternalLink, TrendingUp } from "lucide-react";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return portfolioData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = portfolioData.find((p) => p.slug === slug);
  if (!portfolio) return { title: "Not Found" };
  return {
    title: `${portfolio.title} | Yudistira Ashadi`,
    description: portfolio.description,
    keywords: portfolio.tags,
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const portfolio = portfolioData.find((p) => p.slug === slug);
  if (!portfolio) notFound();

  const article = getPortfolioArticle(slug);

  return (
    <main className="container mx-auto max-w-4xl px-4 pt-24 pb-16">
      {/* Back link */}
      <Link
        href="/#portfolio"
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
        <Button variant="outline" size="sm" asChild className="mb-6">
          <a href={portfolio.url} target="_blank" rel="noopener noreferrer">
            Visit Project
            <ExternalLink className="ml-1 size-3" />
          </a>
        </Button>
      ) : portfolio.urlMissingReason ? (
        <Button disabled variant="outline" size="sm" className="mb-6">
          {portfolio.urlMissingReason}
        </Button>
      ) : null}

      {/* Result highlight */}
      {portfolio.result && (
        <div className="mb-8 flex items-start gap-2 rounded-md border-l-4 border-primary bg-primary/10 px-4 py-3">
          <TrendingUp className="mt-0.5 size-4 shrink-0 text-primary" />
          <p className="text-sm font-medium text-primary">{portfolio.result}</p>
        </div>
      )}

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
        <Button asChild size="lg">
          <Link href="/#contact">
            Get in Touch
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </main>
  );
}
```

- [ ] **Commit**

```bash
git add src/app/portfolio/
git commit -m "feat: add portfolio detail page with MDX rendering"
```

---

## Task 11: Update PortfolioCard to Link Internally

**Files:** `src/app/portfolio-card.tsx`

- [ ] **Replace the file** — cards always link to `/portfolio/${slug}` now

```typescript
// src/app/portfolio-card.tsx
import Image from "next/image";
import Link from "next/link";
import { Link2, Link2Off } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/cn";
import { type PortfolioType } from "@/data/portfolio";

export function PortfolioCard({
  portfolio,
  className,
}: {
  portfolio: PortfolioType;
  className?: string;
}) {
  return (
    <Link
      href={`/portfolio/${portfolio.slug}`}
      className={cn(
        // min-w-0 overrides grid item's default min-width:auto, preventing the card
        // from forcing its grid track wider than the container (mobile overflow fix).
        "group flex min-w-0 cursor-pointer flex-col rounded-lg border border-border bg-card transition-all duration-200 hover:border-primary hover:shadow-md",
        className,
      )}
    >
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

        <p className="mb-1 font-mono text-[10px] text-muted-foreground">
          {portfolio.year}
        </p>
        <h3 className="mb-2 font-semibold leading-snug">{portfolio.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {portfolio.description}
        </p>

        {portfolio.url && (
          <div className="mt-4 flex min-w-0 items-center gap-1.5">
            <Link2 className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
            <span className="min-w-0 truncate text-xs text-muted-foreground">
              {portfolio.url}
            </span>
          </div>
        )}
        {!portfolio.url && portfolio.urlMissingReason && (
          <div className="mt-4 flex items-center gap-1.5">
            <Link2Off className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {portfolio.urlMissingReason}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
```

- [ ] **Commit**

```bash
git add src/app/portfolio-card.tsx
git commit -m "feat: update portfolio cards to link to internal detail pages"
```

---

## Task 12: Verify Build

- [ ] **Run the production build**

```bash
cd /Users/yudis/Codes/Personal/portfolio-web
pnpm build
```

Expected: build completes with no TypeScript errors. All 28 portfolio detail pages pre-rendered as static output (look for `/portfolio/[slug]` in build output).

- [ ] **If build passes, start dev server and spot-check manually**

```bash
pnpm dev
```

Visit:
- `http://localhost:3000` — homepage cards should now be clickable links to `/portfolio/[slug]`
- `http://localhost:3000/portfolio/klop` — should show thumbnail, tags, result callout, and full MDX article
- `http://localhost:3000/portfolio/kompetify` — new item should render
- `http://localhost:3000/portfolio/news-sentiment-analysis` — hand-written MDX should render
- Work experience section — should show "PT. Graha Teknologi Maju" with GTM logo

- [ ] **If build fails**, check:
  1. TypeScript errors in `portfolio.ts` — ensure all 28 entries have `slug: string`
  2. Missing image imports — verify all 4 new `.webp` files were copied in Task 2
  3. MDX parse errors — run `head -3 content/portfolios/*.mdx` to verify no stray frontmatter
