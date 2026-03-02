"use client";

import { m, useReducedMotion } from "framer-motion";

interface BroadcastLowerThirdProps {
  name: string;
  title: string;
  outlet?: string;
  delay?: number;
}

export default function BroadcastLowerThird({
  name,
  title,
  outlet,
  delay = 0.3,
}: BroadcastLowerThirdProps) {
  const shouldReduce = useReducedMotion();

  return (
    <m.div
      className="inline-block"
      initial={shouldReduce ? false : { x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-stretch gap-0">
        {/* Animated gold left bar */}
        <m.div
          className="w-1 bg-[#C28B30] mr-4 shrink-0"
          initial={shouldReduce ? false : { scaleY: 0, originY: 1 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.35, delay: delay + 0.15, ease: "easeOut" }}
          style={{ originY: 1 }}
        />

        <div>
          {/* ON AIR indicator */}
          <m.div
            className="flex items-center gap-2 mb-2"
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: delay + 0.1 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C53A32] rec-dot" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C53A32]">
              Live
            </span>
          </m.div>

          {/* Name — character by character */}
          <m.div
            className="overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: shouldReduce ? 0 : 0.04,
                  delayChildren: delay + 0.2,
                },
              },
            }}
          >
            <div className="flex flex-wrap">
              {name.split("").map((char, i) => (
                <m.span
                  key={i}
                  className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none"
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: shouldReduce ? 0 : 0.28, ease: "easeOut" },
                    },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </m.span>
              ))}
            </div>
          </m.div>

          {/* Title line */}
          <m.p
            className="text-[#C28B30] text-sm md:text-base font-medium tracking-[0.12em] mt-2"
            initial={shouldReduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: delay + 0.75 }}
          >
            {title}
          </m.p>

          {/* Outlet badge */}
          {outlet && (
            <m.div
              className="mt-3 inline-block bg-[#C28B30] text-[#0D2235] text-xs font-bold tracking-widest uppercase px-3 py-1"
              initial={shouldReduce ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: delay + 0.9 }}
            >
              {outlet}
            </m.div>
          )}
        </div>
      </div>
    </m.div>
  );
}
