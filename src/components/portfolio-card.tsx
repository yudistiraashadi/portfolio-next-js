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
