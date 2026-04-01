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
