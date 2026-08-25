import { Award, GraduationCap, Languages } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { certifications, education, languages } from "@/data/profile";

export function Credentials() {
  return (
    <section
      id="credentials"
      className="border-border scroll-mt-20 border-b py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10">
          <p className="text-primary mb-3 font-mono text-xs tracking-widest uppercase">
            Beyond the build
          </p>
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Education &amp; Credentials
          </h2>
        </div>

        <div className="grid min-w-0 gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="min-w-0 space-y-4">
            {education.map((item) => (
              <article
                key={item.degree}
                className="border-border bg-card min-w-0 rounded-xl border p-6"
              >
                <div className="mb-4 flex items-start gap-3">
                  <div className="bg-primary/10 text-primary rounded-lg p-2">
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-muted-foreground font-mono text-xs">
                      {item.period}
                    </p>
                    <h3 className="mt-1 text-lg font-bold">{item.degree}</h3>
                    <p className="text-primary text-sm font-medium">
                      {item.focus} · {item.institution}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="grid min-w-0 gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div className="border-border bg-card min-w-0 rounded-xl border p-6">
              <div className="mb-4 flex items-center gap-2">
                <Award className="text-primary h-5 w-5" aria-hidden="true" />
                <h3 className="font-bold">Certifications</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((certification) => (
                  <Badge
                    key={certification}
                    variant="outline"
                    className="h-auto max-w-full py-1 text-left leading-relaxed whitespace-normal"
                  >
                    {certification}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="border-border bg-card min-w-0 rounded-xl border p-6">
              <div className="mb-4 flex items-center gap-2">
                <Languages
                  className="text-primary h-5 w-5"
                  aria-hidden="true"
                />
                <h3 className="font-bold">Languages</h3>
              </div>
              <ul className="text-muted-foreground space-y-2 text-sm">
                {languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
