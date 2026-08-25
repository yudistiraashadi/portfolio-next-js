import { impactStats } from "@/data/profile";

export function StatsBar() {
  return (
    <div className="border-border bg-background border-b">
      <div className="mx-auto max-w-7xl px-4">
        <div className="sm:divide-border grid grid-cols-2 sm:grid-cols-4 sm:divide-x">
          {impactStats.map(({ value, label }, index) => (
            <div
              key={label}
              className={`px-3 py-5 text-center sm:px-6 sm:py-6 lg:px-8 ${
                index < 2 ? "border-border border-b sm:border-b-0" : ""
              } ${index % 2 === 0 ? "border-border border-r sm:border-r-0" : ""}`}
            >
              <div className="text-lg font-extrabold tracking-tight sm:text-2xl lg:text-3xl">
                {value}
              </div>
              <div className="text-muted-foreground mt-1 font-mono text-[9px] tracking-widest uppercase sm:text-[10px]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
