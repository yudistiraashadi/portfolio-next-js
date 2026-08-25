import Link from "next/link";

import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { TechStack } from "@/components/tech-stack";
import { WorkExperience } from "@/components/work-experience";
import { PortfolioCard } from "@/components/portfolio-card";
import { FadeIn } from "@/components/fade-in";
import { Credentials } from "@/components/credentials";

import { portfolioData } from "@/data/portfolio";

const featured = portfolioData.filter((p) => p.priority).slice(0, 8);

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />

      <FadeIn>
        <WorkExperience />
      </FadeIn>

      {/* Featured Projects */}
      <FadeIn>
        <section
          id="projects"
          className="border-border scroll-mt-20 border-b py-20"
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-primary-readable mb-3 font-mono text-xs font-semibold tracking-widest uppercase">
                  Selected impact
                </p>
                <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
                  Featured Projects
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="text-muted-foreground hover:text-primary-readable shrink-0 text-sm font-medium"
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
        <TechStack />
      </FadeIn>

      <FadeIn>
        <Credentials />
      </FadeIn>
    </>
  );
}
