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
