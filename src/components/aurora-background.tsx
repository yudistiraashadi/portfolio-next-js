"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";

// Dark mode: higher opacity so the glow reads against a dark background.
// Light mode: warmer amber tint at moderate opacity — yellow on white needs
// more saturation to avoid disappearing.
const blobs = [
  {
    className: "absolute -top-20 -left-20 h-96 w-96",
    darkColor: "rgba(255, 229, 0, 0.28)",
    lightColor: "rgba(245, 158, 11, 0.18)",
    animate: {
      x: [0, 40, -20, 0],
      y: [0, -20, 30, 0],
      scale: [1, 1.1, 0.95, 1],
    },
    duration: 10,
  },
  {
    className: "absolute top-10 -right-10 h-80 w-80",
    darkColor: "rgba(255, 200, 0, 0.22)",
    lightColor: "rgba(251, 191, 36, 0.16)",
    animate: {
      x: [0, -25, 20, 0],
      y: [0, 20, -10, 0],
      scale: [1, 1.05, 1.1, 1],
    },
    duration: 13,
  },
  {
    className: "absolute -bottom-20 left-1/3 h-80 w-80",
    darkColor: "rgba(255, 229, 0, 0.20)",
    lightColor: "rgba(245, 158, 11, 0.14)",
    animate: {
      x: [0, 15, -25, 0],
      y: [0, -25, 15, 0],
      scale: [1.05, 0.95, 1.05, 1],
    },
    duration: 9,
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

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
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
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="relative">{children}</div>
    </div>
  );
}
