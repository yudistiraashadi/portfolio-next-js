import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { profile } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yudis.dev"),
  title: {
    template: "%s — Yudistira Ashadi",
    default: `${profile.name} — ${profile.headline}`,
  },
  description:
    "Senior Full-Stack & AI Engineer and Co-Founder & CTO building production AI, data, and SaaS systems for financial services, government, and enterprise teams.",
  applicationName: "Yudistira Ashadi Portfolio",
  keywords: [
    "Senior Full-Stack Engineer",
    "AI Engineer",
    "Next.js",
    "TypeScript",
    "Python",
    "LLM Applications",
    "Software Architect",
    "CTO",
    "Indonesia",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: `${profile.name} — ${profile.headline}`,
    description:
      "Production AI, data, and SaaS systems—from ambiguous workflows to measurable impact.",
    siteName: "Yudistira Ashadi Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Providers>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
