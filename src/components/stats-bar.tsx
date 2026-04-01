const stats = [
  { value: "10+", label: "yrs_experience" },
  { value: "24+", label: "projects_shipped" },
  { value: "Gov & Enterprise", label: "enterprise_clients" },
] as const;

export function StatsBar() {
  return (
    <div className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-3 divide-x divide-border">
          {stats.map(({ value, label }) => (
            <div key={label} className="px-6 py-6 text-center lg:px-8">
              <div className="text-2xl font-extrabold tracking-tight lg:text-3xl">
                {value}
              </div>
              <div className="font-mono mt-1 text-[10px] tracking-widest text-muted-foreground uppercase">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
