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
