import { Badge } from "@/components/ui/badge";
import { skillsData } from "@/data/skills";

export function TechStack() {
  return (
    <section className="border-b border-border py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-2xl font-bold tracking-tight lg:text-3xl">
          Skills &amp; Technologies
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <p className="font-mono mb-3 text-[10px] tracking-widest text-muted-foreground uppercase">
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
