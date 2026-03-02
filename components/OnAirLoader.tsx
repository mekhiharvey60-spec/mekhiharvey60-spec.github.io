"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Phase = "black" | "live" | "text" | "graphics" | "wipe" | "done";

export default function OnAirLoader({ onDone }: { onDone: () => void }) {
  const shouldReduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("black");

  useEffect(() => {
    if (shouldReduce) {
      const t = setTimeout(() => { setPhase("done"); onDone(); }, 400);
      return () => clearTimeout(t);
    }
    const t1 = setTimeout(() => setPhase("live"),     120);
    const t2 = setTimeout(() => setPhase("text"),     500);
    const t3 = setTimeout(() => setPhase("graphics"), 1200);
    const t4 = setTimeout(() => setPhase("wipe"),     2400);
    const t5 = setTimeout(() => { setPhase("done"); onDone(); }, 3000);
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, [onDone, shouldReduce]);

  const textVisible     = ["text", "graphics", "wipe"].includes(phase);
  const graphicsVisible = ["graphics", "wipe"].includes(phase);

  return (
    <m.div
      className="fixed inset-0 z-[9999] bg-black overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0 } }}
    >
      {/* Broadcast noise */}
      <div className="absolute inset-0 broadcast-noise opacity-[0.04] pointer-events-none" />

      {/* ── LIVE indicator — top left ── */}
      <AnimatePresence>
        {["live", "text", "graphics"].includes(phase) && (
          <m.div
            key="live"
            className="absolute top-5 left-6 z-20 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.12 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#C53A32] rec-dot" />
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#C53A32]">
              Live
            </span>
          </m.div>
        )}
      </AnimatePresence>

      {/* ── Station ID — top right ── */}
      <AnimatePresence>
        {phase !== "black" && (
          <m.div
            key="station"
            className="absolute top-5 right-6 z-20 font-mono text-[10px] tracking-widest text-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            MC-01 · HD
          </m.div>
        )}
      </AnimatePresence>

      {/* ── Corner brackets ── */}
      <AnimatePresence>
        {phase !== "black" && (
          <m.div
            key="brackets"
            className="absolute inset-8 pointer-events-none z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10" />
          </m.div>
        )}
      </AnimatePresence>

      {/* ── Main text — slides from left ── */}
      <AnimatePresence>
        {textVisible && (
          <m.div
            key="text-block"
            className="absolute inset-0 flex flex-col justify-center px-10 md:px-20"
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Gold left bar */}
            <m.div
              className="absolute left-10 md:left-20 w-[3px] bg-[#C28B30]"
              style={{ top: "28%", bottom: "28%", originY: 0 }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />

            <div className="pl-8">
              {/* MEKHI CARTER — bold display */}
              <div
                className="font-display font-bold text-white leading-[0.9] tracking-tight select-none"
                style={{ fontSize: "clamp(52px, 9vw, 112px)" }}
              >
                <div>MEKHI</div>
                <div>CARTER</div>
              </div>

              {/* Tagline — slides in 160ms after name */}
              <m.div
                className="flex items-center gap-3 mt-5"
                initial={{ x: -24, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.16, duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="h-px w-10 bg-[#C28B30] shrink-0" />
                <span className="text-[#C28B30] text-sm md:text-base font-bold tracking-[0.32em] uppercase">
                  Live. In Motion.
                </span>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* ── Broadcast graphics — lines + edge glow + progress bar ── */}
      <AnimatePresence>
        {graphicsVisible && (
          <m.div
            key="graphics"
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.18 }}
          >
            {/* Upper horizontal rule */}
            <m.div
              className="absolute left-0 right-0 h-px"
              style={{
                top: "28%",
                background: "linear-gradient(to right, transparent, rgba(194,139,48,0.25), transparent)",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />
            {/* Lower horizontal rule */}
            <m.div
              className="absolute left-0 right-0 h-px"
              style={{
                top: "72%",
                background: "linear-gradient(to right, transparent, rgba(194,139,48,0.12), transparent)",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
            />
            {/* Left vertical glow bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-0.5"
              style={{
                background: "linear-gradient(to bottom, transparent, rgba(194,139,48,0.45), transparent)",
              }}
            />
            {/* Subtle edge vignette glow */}
            <div
              className="absolute inset-0"
              style={{ boxShadow: "inset 0 0 120px rgba(194,139,48,0.06)" }}
            />
            {/* Bottom progress bar — sweeps left to right over ~1.2s */}
            <m.div
              className="absolute bottom-0 left-0 h-[2px] bg-[#C28B30]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "linear" }}
            />
          </m.div>
        )}
      </AnimatePresence>

      {/* ── Wipe exit — deep navy panel sweeps from left ── */}
      <AnimatePresence>
        {(phase === "wipe" || phase === "done") && (
          <m.div
            key="wipe-panel"
            className="absolute inset-0 bg-[#0D2235] z-30"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          />
        )}
      </AnimatePresence>
    </m.div>
  );
}
