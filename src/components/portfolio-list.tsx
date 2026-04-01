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
