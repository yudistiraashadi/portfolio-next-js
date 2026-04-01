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
  const start = `${monthNames[monthStart] ?? ""} ${yearStart}`;
  if (!yearEnd) return `${start} — Present`;
  const end =
    monthEnd !== undefined
      ? `${monthNames[monthEnd] ?? ""} ${yearEnd}`
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
