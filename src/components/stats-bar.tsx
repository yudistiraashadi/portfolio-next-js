const stats = [
  { value: "10+", label: "yrs_experience" },
  { value: "24+", label: "projects_shipped" },
  { value: "Gov & Enterprise", label: "enterprise_clients" },
] as const;

export function StatsBar() {
  return (
    <div className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-3 divide-x divide-border">
          {stats.map(({ value, label }) => (
            <div key={label} className="px-3 py-5 text-center sm:px-6 sm:py-6 lg:px-8">
              <div className="text-lg font-extrabold tracking-tight sm:text-2xl lg:text-3xl">
                {value}
              </div>
              <div className="font-mono mt-1 text-[9px] tracking-widest text-muted-foreground uppercase sm:text-[10px]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
