"use client";

import { motion } from "framer-motion";

// Each blob sweeps side-to-side with repeatType:"mirror" so it glides to its
// target then reverses smoothly — no snap-back to origin. Offset durations so
// the three blobs are never in sync, keeping the aurora feeling organic.
//
// Colors are CSS custom properties defined in globals.css under :root and .dark
// so the server and client render identical HTML — no hydration mismatch.
const blobs = [
  {
    // Starts top-left, sweeps far right across the hero then back.
    className: "absolute -top-20 -left-20 h-[500px] w-[500px]",
    color: "var(--aurora-blob-1)",
    animate: { x: [0, 480], y: [0, 100], scale: [1, 1.15] },
    duration: 14,
  },
  {
    // Starts top-right, sweeps far left then back.
    className: "absolute -top-10 -right-20 h-[420px] w-[420px]",
    color: "var(--aurora-blob-2)",
    animate: { x: [0, -460], y: [0, 140], scale: [1, 0.88] },
    duration: 19,
  },
  {
    // Starts bottom-center, drifts left then right — counters the top blobs.
    className: "absolute -bottom-24 left-1/4 h-[380px] w-[380px]",
    color: "var(--aurora-blob-3)",
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
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {/* Aurora blobs — rendered first so the grid overlay sits on top */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={blob.className}
          style={{
            borderRadius: "50%",
            background: blob.color,
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
            linear-gradient(to right, var(--aurora-grid) 1px, transparent 1px),
            linear-gradient(to bottom, var(--aurora-grid) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative">{children}</div>
    </div>
  );
}
