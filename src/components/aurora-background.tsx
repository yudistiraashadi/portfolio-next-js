"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";

// Each blob sweeps side-to-side with repeatType:"mirror" so it glides to its
// target then reverses smoothly — no snap-back to origin. Offset durations so
// the three blobs are never in sync, keeping the aurora feeling organic.
const blobs = [
  {
    // Starts top-left, sweeps far right across the hero then back.
    className: "absolute -top-20 -left-20 h-[500px] w-[500px]",
    darkColor: "rgba(255, 229, 0, 0.26)",
    lightColor: "rgba(245, 158, 11, 0.18)",
    animate: { x: [0, 480], y: [0, 100], scale: [1, 1.15] },
    duration: 14,
  },
  {
    // Starts top-right, sweeps far left then back.
    className: "absolute -top-10 -right-20 h-[420px] w-[420px]",
    darkColor: "rgba(255, 210, 0, 0.20)",
    lightColor: "rgba(251, 191, 36, 0.16)",
    animate: { x: [0, -460], y: [0, 140], scale: [1, 0.88] },
    duration: 19,
  },
  {
    // Starts bottom-center, drifts left then right — counters the top blobs.
    className: "absolute -bottom-24 left-1/4 h-[380px] w-[380px]",
    darkColor: "rgba(255, 229, 0, 0.18)",
    lightColor: "rgba(245, 158, 11, 0.13)",
    animate: { x: [-120, 320], y: [0, -80], scale: [0.95, 1.12] },
    duration: 16,
  },
];

export function AuroraBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Grid line color: nearly invisible on the base background, but gains
  // contrast where an aurora blob passes underneath — the "illumination" effect.
  const gridColor = isDark ? "rgba(255,255,255,0.055)" : "rgba(0,0,0,0.07)";

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {/* Aurora blobs — rendered first so the grid overlay sits on top */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={blob.className}
          style={{
            borderRadius: "50%",
            background: isDark ? blob.darkColor : blob.lightColor,
            filter: "blur(72px)",
            willChange: "transform",
          }}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid overlay — semi-transparent lines on top of blobs.
          Where a blob glows underneath, the line contrast increases
          and the grid visually "lights up". */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative">{children}</div>
    </div>
  );
}
