import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";

import { buttonVariants } from "@/components/ui/button-variants";
import { workData, monthNames } from "@/data/work";
import { profile } from "@/data/profile";

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

function selectFeaturedHighlights(
  companyName: string,
  highlights: readonly string[],
): string[] {
  if (companyName === "PT. Graha Teknologi Maju") {
    return highlights
      .filter(
        (highlight) => highlight.includes("30K+") || highlight.includes("500+"),
      )
      .slice(0, 2);
  }

  return highlights.slice(0, 2);
}

export function WorkExperience() {
  const featuredWork = workData.slice(0, 3);
  const earlierWork = workData.slice(3);

  return (
    <section
      id="experience"
      className="border-border scroll-mt-20 border-b py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 grid gap-4 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="text-primary-readable mb-3 font-mono text-xs tracking-widest uppercase">
              Career
            </p>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Work Experience
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed lg:justify-self-end">
            A decade of hands-on product engineering, from independent delivery
            to leading teams—always close to the architecture, code, and people
            using the product.
          </p>
        </div>

        <div className="before:bg-border relative mb-10 space-y-6 before:absolute before:top-4 before:bottom-4 before:left-5 before:w-px lg:before:left-[15.75rem]">
          {featuredWork.map((work) => (
            <article
              key={`${work.companyName}-${work.jobTitle}`}
              className="relative grid min-w-0 gap-4 pl-14 lg:grid-cols-[14rem_1fr] lg:gap-8 lg:pl-0"
            >
              <div className="lg:text-right">
                <p className="text-foreground font-mono text-xs font-medium">
                  {formatDateRange(
                    work.monthStart,
                    work.yearStart,
                    work.monthEnd,
                    work.yearEnd,
                  )}
                </p>
                <p className="text-muted-foreground mt-1 text-xs">
                  {work.location}
                  {work.employmentType ? ` · ${work.employmentType}` : ""}
                </p>
              </div>

              <div className="border-border bg-card absolute top-0 left-0 flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border shadow-sm lg:left-[14.5rem]">
                {work.companyLogo ? (
                  <Image
                    src={work.companyLogo}
                    alt=""
                    width={40}
                    height={40}
                    className="h-full w-full bg-white object-contain"
                  />
                ) : (
                  <BriefcaseBusiness
                    className="text-primary-readable h-4 w-4"
                    aria-hidden="true"
                  />
                )}
              </div>

              <div className="border-border bg-card hover:border-primary/60 min-w-0 rounded-xl border p-6 transition-colors lg:p-8">
                <div className="mb-5">
                  <h3 className="text-xl font-bold tracking-tight">
                    {work.jobTitle}
                  </h3>
                  <p className="text-primary-readable mt-1 text-sm font-semibold">
                    {work.companyName}
                  </p>
                </div>

                <p className="text-muted-foreground mb-5 max-w-3xl text-sm leading-relaxed sm:text-base">
                  {work.summary}
                </p>

                <ul className="mb-6 space-y-3">
                  {selectFeaturedHighlights(
                    work.companyName,
                    work.highlights,
                  ).map((highlight) => (
                    <li
                      key={highlight}
                      className="text-muted-foreground before:bg-primary relative pl-5 text-sm leading-relaxed before:absolute before:top-[0.65rem] before:left-0 before:h-1.5 before:w-1.5 before:rounded-full"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          {earlierWork.map((work) => (
            <article
              key={`${work.companyName}-${work.jobTitle}`}
              className="relative grid min-w-0 gap-3 pl-14 lg:grid-cols-[14rem_1fr] lg:gap-8 lg:pl-0"
            >
              <p className="text-foreground font-mono text-xs font-medium lg:text-right">
                {formatDateRange(
                  work.monthStart,
                  work.yearStart,
                  work.monthEnd,
                  work.yearEnd,
                )}
              </p>

              <div
                className="border-primary bg-card absolute top-1 left-4 h-3 w-3 rounded-full border-2 lg:left-[15.375rem]"
                aria-hidden="true"
              />

              <div className="border-border min-w-0 border-b pb-5 lg:pb-6">
                <h3 className="font-semibold tracking-tight">
                  {work.jobTitle}
                </h3>
                <p className="mt-1 text-sm">
                  <span className="text-primary-readable font-semibold">
                    {work.companyName}
                  </span>
                  <span className="text-muted-foreground">
                    {` · ${work.location}`}
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 lg:ml-[16.5rem]">
          <Link
            href={profile.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants()}
          >
            Read the full CV
            <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yudistiraashadi/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            Full history on LinkedIn ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
