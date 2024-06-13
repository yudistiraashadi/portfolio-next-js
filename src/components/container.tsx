import { cn } from "@/utils/cn";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className={cn("w-full max-w-7xl px-2", className)}>{children}</div>
    </div>
  );
}
