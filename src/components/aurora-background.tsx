"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    className: "absolute -top-20 -left-20 h-72 w-72",
    color: "rgba(255, 229, 0, 0.09)",
    animate: {
      x: [0, 40, -20, 0],
      y: [0, -20, 30, 0],
      scale: [1, 1.1, 0.95, 1],
    },
    duration: 10,
  },
  {
    className: "absolute top-10 -right-10 h-60 w-60",
    color: "rgba(255, 180, 0, 0.07)",
    animate: {
      x: [0, -25, 20, 0],
      y: [0, 20, -10, 0],
      scale: [1, 1.05, 1.1, 1],
    },
    duration: 13,
  },
  {
    className: "absolute -bottom-20 left-1/3 h-64 w-64",
    color: "rgba(255, 229, 0, 0.06)",
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
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={blob.className}
          style={{
            borderRadius: "50%",
            background: blob.color,
            filter: "blur(60px)",
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
