export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-full max-w-7xl px-2">{children}</div>
    </div>
  );
}
