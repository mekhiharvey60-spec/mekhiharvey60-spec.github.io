"use client";

import { useRef } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";

interface SkillMeter {
  label: string;
  bars: number; // 1–5
  accent: string;
}

const skillGroups: { heading: string; skills: SkillMeter[] }[] = [
  {
    heading: "Production",
    skills: [
      { label: "Live Broadcast & Studio Production", bars: 5, accent: "#C28B30" },
      { label: "Show Rundown Creation", bars: 5, accent: "#C28B30" },
      { label: "Segment Development & Pitching", bars: 4, accent: "#B87D28" },
      { label: "Talent & Guest Coordination", bars: 5, accent: "#C28B30" },
    ],
  },
  {
    heading: "Journalism",
    skills: [
      { label: "Field Production & Logistics", bars: 4, accent: "#C53A32" },
      { label: "Pre-Interview Research", bars: 5, accent: "#C28B30" },
      { label: "Editorial Fact-Checking", bars: 4, accent: "#B87D28" },
      { label: "Multi-Platform Asset Gathering", bars: 4, accent: "#B87D28" },
    ],
  },
  {
    heading: "Technical",
    skills: [
      { label: "Avid News Cutter Editing", bars: 3, accent: "#C53A32" },
      { label: "DV Camera Operation", bars: 4, accent: "#B87D28" },
      { label: "Audio Board Operation", bars: 4, accent: "#B87D28" },
      { label: "Digital Content Strategy", bars: 4, accent: "#C28B30" },
    ],
  },
];

function SignalBars({ bars, accent, animate }: { bars: number; accent: string; animate: boolean }) {
  const shouldReduce = useReducedMotion();
  return (
    <div className="flex items-end gap-1 h-5">
      {[1, 2, 3, 4, 5].map((n) => {
        const active = n <= bars;
        const height = 8 + n * 3; // 11px → 23px stepping
        return (
          <m.div
            key={n}
            className="w-1.5 rounded-sm"
            style={{
              height,
              backgroundColor: active ? accent : "rgba(255,255,255,0.1)",
            }}
            initial={shouldReduce ? false : { scaleY: 0 }}
            animate={animate ? { scaleY: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: n * 0.06,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
}

function SkillRow({ skill, animate }: { skill: SkillMeter; animate: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5 border-b border-white/5 last:border-0">
      <p className="text-white/60 text-xs flex-1 min-w-0 truncate">{skill.label}</p>
      <SignalBars bars={skill.bars} accent={skill.accent} animate={animate} />
    </div>
  );
}

function GroupPanel({ group, delay }: { group: (typeof skillGroups)[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const shouldReduce = useReducedMotion();
  const animate = shouldReduce || inView;

  return (
    <m.div
      ref={ref}
      className="bg-[#08202E] border border-white/10 p-6"
      initial={shouldReduce ? false : { opacity: 0, y: 24 }}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {/* Panel header */}
      <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/10">
        <div className="w-1.5 h-1.5 rounded-full bg-[#C28B30] animate-pulse" />
        <p className="text-[#C28B30] text-xs font-bold tracking-[0.25em] uppercase font-mono">
          {group.heading}
        </p>
      </div>

      {group.skills.map((skill) => (
        <SkillRow key={skill.label} skill={skill} animate={animate} />
      ))}
    </m.div>
  );
}

export default function SkillsDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skillGroups.map((group, i) => (
        <GroupPanel key={group.heading} group={group} delay={i * 0.15} />
      ))}
    </div>
  );
}
