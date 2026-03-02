"use client";

import { m, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 28,
  once = true,
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: `-${threshold * 100}px` as never });
  const shouldReduceMotion = useReducedMotion();

  const offset = shouldReduceMotion ? 0 : distance;

  const directionMap: Record<string, { x?: number; y?: number }> = {
    up:    { y: offset },
    down:  { y: -offset },
    left:  { x: offset },
    right: { x: -offset },
    none:  {},
  };

  const variants = {
    hidden: { opacity: 0, ...directionMap[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        delay,
      },
    },
  };

  return (
    <m.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </m.div>
  );
}
