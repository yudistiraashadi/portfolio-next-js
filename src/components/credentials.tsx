import { Award, GraduationCap, Languages } from "lucide-react";

import { certifications, education, languages } from "@/data/profile";

export function Credentials() {
  return (
    <section
      id="credentials"
      className="border-border scroll-mt-20 border-b py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8">
          <p className="text-primary-readable mb-3 font-mono text-xs font-semibold tracking-widest uppercase">
            Beyond the build
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-pretty lg:text-4xl">
            Education &amp; Credentials
          </h2>
        </div>

        <div className="grid min-w-0 gap-6 lg:grid-cols-[1.45fr_1fr]">
          <div className="border-border bg-card min-w-0 overflow-hidden rounded-xl border">
            {education.map((item) => (
              <article
                key={item.degree}
                className="border-border min-w-0 border-b p-5 last:border-b-0 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/15 text-primary-readable shrink-0 rounded-lg p-2.5">
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-muted-foreground font-mono text-xs tabular-nums">
                      {item.period}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-pretty">
                      {item.degree}
                    </h3>
                    <p className="text-primary-readable mt-1 text-sm font-semibold">
                      {item.focus} · {item.institution}
                    </p>
                    <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="border-border bg-card grid min-w-0 overflow-hidden rounded-xl border sm:grid-cols-2 lg:grid-cols-1">
            <div className="border-border min-w-0 border-b p-5 sm:border-r sm:border-b-0 sm:p-6 lg:border-r-0 lg:border-b">
              <div className="mb-4 flex items-center gap-2">
                <Award
                  className="text-primary-readable h-5 w-5"
                  aria-hidden="true"
                />
                <h3 className="font-bold">Certifications</h3>
              </div>
              <ul className="divide-border divide-y">
                {certifications.map((certification) => (
                  <li
                    key={certification}
                    className="text-muted-foreground py-2.5 text-sm leading-relaxed first:pt-0 last:pb-0"
                  >
                    {certification}
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0 p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-2">
                <Languages
                  className="text-primary-readable h-5 w-5"
                  aria-hidden="true"
                />
                <h3 className="font-bold">Languages</h3>
              </div>
              <ul className="text-muted-foreground divide-border divide-y text-sm">
                {languages.map((language) => (
                  <li
                    key={language}
                    className="py-2.5 leading-relaxed first:pt-0 last:pb-0"
                  >
                    {language}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
