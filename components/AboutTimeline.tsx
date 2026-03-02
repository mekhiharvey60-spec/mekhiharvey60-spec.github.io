"use client";

import { useRef } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";

interface TimelineItem {
  org: string;
  role: string;
  show: string;
  period: string;
  location: string;
  accent: string;
  bullets: string[];
}

interface AboutTimelineProps {
  items: TimelineItem[];
}

function TimelineEntry({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const shouldReduce = useReducedMotion();

  const animate = shouldReduce ? true : inView;

  return (
    <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-8 pb-14">
      {/* Timeline dot */}
      <m.div
        className="absolute left-[-1.75rem] lg:left-[calc(25%_-_1.75rem)] top-1 w-3.5 h-3.5 rounded-full border-2 bg-[#08202E] z-10"
        style={{ borderColor: item.accent }}
        initial={shouldReduce ? false : { scale: 0, opacity: 0 }}
        animate={animate ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.1 }}
      />

      {/* Left: meta */}
      <m.div
        className="pl-6 lg:pl-0"
        style={{ borderLeft: `3px solid ${item.accent}` }}
        initial={shouldReduce ? false : { opacity: 0, x: -20 }}
        animate={animate ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <p className="font-bold text-white text-base">{item.org}</p>
        <p className="text-sm font-medium mt-1" style={{ color: item.accent }}>{item.show}</p>
        <p className="text-white/50 text-sm mt-1">{item.role}</p>
        <p className="text-white/30 text-xs mt-3 tracking-wider">{item.period}</p>
        <p className="text-white/30 text-xs">{item.location}</p>
      </m.div>

      {/* Right: bullets */}
      <m.ul
        className="space-y-3 pl-6 lg:pl-0"
        initial={shouldReduce ? false : { opacity: 0, y: 16 }}
        animate={animate ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.15 }}
      >
        {item.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-white/60 text-sm leading-relaxed">
            <span className="font-bold mt-0.5 shrink-0" style={{ color: item.accent }}>—</span>
            {bullet}
          </li>
        ))}
      </m.ul>
    </div>
  );
}

export default function AboutTimeline({ items }: AboutTimelineProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true });
  const shouldReduce = useReducedMotion();

  return (
    <div className="relative ml-7 lg:ml-0">
      {/* Vertical line */}
      <div
        ref={lineRef}
        className="absolute left-[-1rem] lg:left-[calc(25%_-_1rem)] top-0 bottom-0 w-px bg-white/10"
      >
        <m.div
          className="absolute inset-0 origin-top"
          style={{ backgroundColor: "rgba(244,192,95,0.25)" }}
          initial={shouldReduce ? false : { scaleY: 0 }}
          animate={lineInView || shouldReduce ? { scaleY: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      {items.map((item, i) => (
        <TimelineEntry key={item.org} item={item} index={i} />
      ))}
    </div>
  );
}
