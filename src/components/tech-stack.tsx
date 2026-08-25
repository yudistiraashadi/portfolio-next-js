import { Badge } from "@/components/ui/badge";
import { skillsData } from "@/data/skills";

export function TechStack() {
  return (
    <section id="skills" className="border-border scroll-mt-20 border-b py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 max-w-2xl">
          <p className="text-primary mb-3 font-mono text-xs tracking-widest uppercase">
            What I work with
          </p>
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Skills &amp; Technologies
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed">
            A product-minded stack spanning data acquisition, AI orchestration,
            application engineering, infrastructure, and technical leadership.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <p className="text-muted-foreground mb-3 font-mono text-[10px] tracking-widest uppercase">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="font-mono text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
