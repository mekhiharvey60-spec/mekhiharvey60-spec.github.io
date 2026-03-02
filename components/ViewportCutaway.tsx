"use client";

import { useRef } from "react";
import { m, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";

interface ViewportCutawayProps {
  src: string;
  alt: string;
  /** Large headline in lower-third */
  caption: string;
  /** Subtitle / role line */
  role: string;
  /** Optional outlet badge */
  outlet?: string;
}

/**
 * Full-viewport sticky "B-roll" cutaway.
 * Creates a 200vh scroll container so the full-screen image holds for ~100vh
 * of scroll distance before releasing and revealing the next section.
 */
export default function ViewportCutaway({
  src,
  alt,
  caption,
  role,
  outlet,
}: ViewportCutawayProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Fade in → hold → fade out across the 300vh total traversal
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.30, 0.70, 0.88, 1],
    [0, 0, 1, 1, 0, 0]
  );

  // Slow-zoom in as image enters, settle at 1.0
  const scale = useTransform(
    scrollYProgress,
    [0, 0.30, 0.70, 1],
    shouldReduce ? [1, 1, 1, 1] : [1.07, 1.0, 1.0, 1.07]
  );

  // Caption slides up from 28px slightly after the image peaks
  const captionOpacity = useTransform(
    scrollYProgress,
    [0.22, 0.35, 0.65, 0.80],
    [0, 1, 1, 0]
  );
  const captionY = useTransform(
    scrollYProgress,
    [0.22, 0.35],
    shouldReduce ? [0, 0] : [28, 0]
  );

  return (
    // 200vh outer div gives ~100vh of sticky "hold" time
    <div ref={ref} style={{ height: "200vh" }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ── Image + overlays ── */}
        <m.div className="absolute inset-0" style={{ opacity, scale }}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="100vw"
            loading="lazy"
          />
          {/* Dark cinematic wash */}
          <div className="absolute inset-0 bg-black/62" />
          {/* Broadcast noise grain */}
          <div className="absolute inset-0 broadcast-noise opacity-[0.025] pointer-events-none" />
          {/* Edge vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)",
            }}
          />
        </m.div>

        {/* ── B-Roll tag — top left ── */}
        <m.div
          className="absolute top-6 left-6 md:left-12 z-10 flex items-center gap-3"
          style={{ opacity }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C53A32] rec-dot" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C53A32]">
              B-Roll
            </span>
          </div>
          <div className="w-px h-3.5 bg-white/20" />
          <span className="text-[10px] font-mono tracking-widest text-white/25 uppercase">
            Production Still
          </span>
        </m.div>

        {/* ── Gold left accent bar ── */}
        <m.div
          className="absolute left-0 top-0 bottom-0 w-1 gold-border-animate"
          style={{ opacity }}
        />

        {/* ── Animated lower-third ── */}
        <m.div
          className="absolute bottom-10 left-6 md:left-12 z-10 pointer-events-none max-w-2xl"
          style={{ opacity: captionOpacity, y: captionY }}
        >
          <div className="flex items-stretch gap-0">
            <m.div
              className="w-1 bg-[#C28B30] mr-4 shrink-0"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              style={{ originY: 1 }}
            />
            <div>
              <p className="font-display font-bold text-white text-4xl md:text-6xl leading-tight">
                {caption}
              </p>
              <p className="text-[#C28B30] text-sm md:text-base tracking-[0.2em] uppercase mt-2 font-medium">
                {role}
              </p>
              {outlet && (
                <span className="mt-4 inline-block bg-[#C28B30] text-[#0D2235] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5">
                  {outlet}
                </span>
              )}
            </div>
          </div>
        </m.div>

      </div>
    </div>
  );
}
