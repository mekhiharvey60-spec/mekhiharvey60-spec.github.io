"use client";

import { m } from "framer-motion";
import { useStudioMode } from "@/context/StudioModeContext";

const options = [
  { value: "dark" as const, label: "CTRL RM" },
  { value: "light" as const, label: "DAY" },
];

export default function StudioModeToggle() {
  const { isDark, toggle } = useStudioMode();

  return (
    <div
      className="relative flex items-center border border-white/15 p-0.5 bg-white/5"
      aria-label="Studio mode toggle"
      data-cursor="hover-link"
    >
      {/* Sliding indicator */}
      <m.div
        className="absolute top-0.5 bottom-0.5 bg-white/15"
        layout
        layoutId="studio-indicator"
        style={{
          left: isDark ? "0.125rem" : "50%",
          right: !isDark ? "0.125rem" : "50%",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      {options.map((opt) => {
        const isActive = (opt.value === "dark") === isDark;
        return (
          <button
            key={opt.value}
            onClick={toggle}
            className={`relative z-10 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase font-mono transition-colors ${
              isActive ? "text-white" : "text-white/30 hover:text-white/60"
            }`}
            aria-pressed={isActive}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
