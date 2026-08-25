import { Badge } from "@/components/ui/badge";
import { skillsData } from "@/data/skills";

export function TechStack() {
  return (
    <section
      id="skills"
      className="border-border scroll-mt-20 border-b py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-primary-readable mb-3 font-mono text-xs font-semibold tracking-widest uppercase">
              What I work with
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-pretty lg:text-4xl">
              Skills &amp; Technologies
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed lg:justify-self-end">
            A product-minded stack spanning data acquisition, AI orchestration,
            application engineering, infrastructure, and technical leadership.
          </p>
        </div>

        <div className="border-border bg-card grid overflow-hidden rounded-xl border sm:grid-cols-2">
          {Object.entries(skillsData).map(([category, skills]) => (
            <article
              key={category}
              className="border-border min-w-0 border-b p-5 last:border-b-0 sm:p-6 sm:odd:border-r sm:nth-last-2:border-b-0"
            >
              <h3 className="mb-4 text-sm font-bold tracking-tight">
                {category}
              </h3>
              <ul
                className="flex flex-wrap gap-2"
                aria-label={`${category} skills`}
              >
                {skills.map((skill) => (
                  <li key={skill}>
                    <Badge
                      variant="outline"
                      className="bg-background/70 h-auto py-1 font-mono text-[11px] whitespace-normal"
                    >
                      {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
