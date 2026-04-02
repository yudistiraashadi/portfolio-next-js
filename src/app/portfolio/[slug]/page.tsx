// src/app/portfolio/[slug]/page.tsx
import { portfolioData } from "@/data/portfolio";
import { getPortfolioArticle } from "@/lib/portfolios";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { ArrowLeft, ArrowRight, ExternalLink, TrendingUp } from "lucide-react";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AuroraBackground } from "@/components/aurora-background";

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
  if (portfolio === undefined) {
    notFound();
    return;  // unreachable at runtime but narrows portfolio to PortfolioType
  }

  const article = getPortfolioArticle(slug);

  return (
    <>
      {/* Header — aurora background */}
      <AuroraBackground className="border-b border-border">
        <div className="mx-auto max-w-4xl px-4 pt-8 pb-10">
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
            <div className="mb-8 flex items-start gap-2 rounded-md border-l-4 border-primary bg-primary/10 px-4 py-3">
              <TrendingUp className="mt-0.5 size-4 shrink-0 text-primary" />
              <p className="text-sm font-medium text-foreground">{portfolio.result}</p>
            </div>
          )}
        </div>
      </AuroraBackground>

      {/* Body */}
      <div className="mx-auto max-w-4xl px-4 pt-10 pb-16">
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
}
