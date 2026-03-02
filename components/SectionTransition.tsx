"use client";

import { useRef } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";

interface SectionTransitionProps {
  variant?: "gold" | "red" | "orange";
  label?: string;
}

export default function SectionTransition({ variant = "gold", label }: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();

  const color =
    variant === "gold" ? "#C28B30" : variant === "red" ? "#C53A32" : "#B87D28";

  return (
    <div ref={ref} className="relative py-8 flex items-center gap-6 max-w-7xl mx-auto px-6 lg:px-12">
      {/* Left sweep line */}
      <m.div
        className="h-px flex-1 origin-left"
        style={{ backgroundColor: color + "40" }}
        initial={shouldReduce ? false : { scaleX: 0 }}
        animate={inView || shouldReduce ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {label && (
        <span
          className="text-[10px] font-bold tracking-[0.3em] uppercase font-mono shrink-0"
          style={{ color: color + "80" }}
        >
          {label}
        </span>
      )}

      {/* Right sweep line */}
      <m.div
        className="h-px flex-1 origin-right"
        style={{ backgroundColor: color + "40" }}
        initial={shouldReduce ? false : { scaleX: 0 }}
        animate={inView || shouldReduce ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
      />
    </div>
  );
}
