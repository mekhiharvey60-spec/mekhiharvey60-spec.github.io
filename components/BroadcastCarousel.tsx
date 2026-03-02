"use client";

import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: string;
  src: string;
  alt: string;
  title: string;
  role: string;
  category: string;
  objectPosition?: string;
}

const SLIDES: Slide[] = [
  {
    id: "1",
    src: "/IMG_0307.jpg",
    alt: "Mekhi Carter with Sherri Shepherd on the Sherri set",
    title: "The Production Floor",
    role: "Sherri · Lionsgate | Debmar-Mercury",
    category: "PRODUCTION",
    objectPosition: "top",
  },
  {
    id: "2",
    src: "/IMG_0957.jpg",
    alt: "Mekhi Carter at the New York Post holding Page Six mic",
    title: "Page Six",
    role: "Field Reporting · The New York Post",
    category: "FIELD",
    objectPosition: "top",
  },
  {
    id: "3",
    src: "/IMG_1561.jpg",
    alt: "Mekhi Carter holding an Emmy Award at Sherri studio",
    title: "Emmy Award",
    role: "Sherri · New York, NY",
    category: "STUDIO",
    objectPosition: "top",
  },
  {
    id: "4",
    src: "/abc-news-photo.jpg",
    alt: "Mekhi Carter at the ABC News Philadelphia anchor desk",
    title: "ABC News Philadelphia",
    role: "Field Training · Age 15 — The Spark",
    category: "BREAKING",
  },
  {
    id: "5",
    src: "/dsc01422.jpg",
    alt: "Mekhi Carter — production still",
    title: "Behind The Lens",
    role: "Production Still · NYC",
    category: "BEHIND THE SCENES",
    objectPosition: "top",
  },
];

const AUTO_MS = 5500;

// Easing for broadcast snap
const SNAP_EASE = [0.16, 1, 0.3, 1] as const;

export default function BroadcastCarousel() {
  const shouldReduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1); // 1 = forward, -1 = backward
  const [progress, setProgress] = useState(0);
  const frameRef = useRef<number>(0);
  const startRef = useRef<number>(Date.now());

  // ── Auto-advance with raf progress bar ──────────────────────────────────────
  const advance = useCallback(() => {
    setDir(1);
    setActive((i) => (i + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (shouldReduce) return;
    startRef.current = Date.now();
    setProgress(0);

    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const p = Math.min(elapsed / AUTO_MS, 1);
      setProgress(p);
      if (p < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        advance();
      }
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [active, advance, shouldReduce]);

  // ── Manual navigation ────────────────────────────────────────────────────────
  const goTo = useCallback((index: number) => {
    setDir(index > active ? 1 : -1);
    setActive(index);
  }, [active]);

  const prev = useCallback(() => {
    if (active === 0) return;
    setDir(-1);
    setActive((i) => i - 1);
  }, [active]);

  const next = useCallback(() => {
    if (active === SLIDES.length - 1) return;
    setDir(1);
    setActive((i) => i + 1);
  }, [active]);

  // ── Drag handling ────────────────────────────────────────────────────────────
  const handleDragEnd = useCallback(
    (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
      const swipe = info.offset.x + info.velocity.x * 0.3;
      if (swipe < -50 && active < SLIDES.length - 1) {
        setDir(1);
        setActive((i) => i + 1);
      } else if (swipe > 50 && active > 0) {
        setDir(-1);
        setActive((i) => i - 1);
      }
    },
    [active]
  );

  const slide = SLIDES[active];

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: "0%", opacity: 1 },
    exit: (d: number) => ({
      x: d > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative select-none" style={{ width: "100%", maxWidth: 320 }}>

      {/* ── Broadcast frame corner accents ── */}
      <div className="absolute -inset-3 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#C28B30]/70" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#C28B30]/70" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#C28B30]/70" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#C28B30]/70" />
      </div>

      {/* ── Slide frame — 3:4 portrait ── */}
      <m.div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "3/4" }}
        drag={shouldReduce ? false : "x"}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.05}
        onDragEnd={handleDragEnd}
      >
        {/* Active bronze ring */}
        <div
          className="absolute inset-0 z-20 pointer-events-none transition-all duration-500"
          style={{ boxShadow: "inset 0 0 0 1.5px rgba(194,139,48,0.55)" }}
        />

        {/* Scan-line overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none broadcast-noise opacity-[0.03]" />

        {/* Slides */}
        <AnimatePresence initial={false} custom={dir} mode="wait">
          <m.div
            key={slide.id}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: SNAP_EASE }}
            className="absolute inset-0"
          >
            {/* Photo */}
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              style={{ objectPosition: slide.objectPosition ?? "center" }}
              sizes="320px"
              priority={slide.id === "1"}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

            {/* ── LIVE badge — top left ── */}
            <m.div
              className="absolute top-3 left-3 z-10 flex items-center gap-1.5"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.22 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C53A32] rec-dot" />
              <span className="text-[9px] font-bold tracking-[0.35em] uppercase text-[#C53A32]">
                Live
              </span>
            </m.div>

            {/* ── Category badge — top right ── */}
            <m.div
              className="absolute top-3 right-3 z-10"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.22 }}
            >
              <span
                className="text-[8px] font-bold tracking-[0.25em] uppercase px-2 py-0.5"
                style={{ backgroundColor: "rgba(194,139,48,0.18)", color: "#C28B30" }}
              >
                {slide.category}
              </span>
            </m.div>

            {/* ── Lower-third caption ── */}
            <m.div
              className="absolute bottom-0 left-0 right-0 z-10 p-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.28, ease: SNAP_EASE }}
            >
              <div className="flex items-stretch gap-0">
                <div className="w-0.5 bg-[#C28B30] mr-3 shrink-0" />
                <div>
                  <p className="font-display font-bold text-white text-base leading-snug">
                    {slide.title}
                  </p>
                  <p className="text-[#C28B30] text-[10px] tracking-[0.18em] uppercase mt-0.5 font-medium">
                    {slide.role}
                  </p>
                </div>
              </div>
            </m.div>
          </m.div>
        </AnimatePresence>
      </m.div>

      {/* ── Progress bar ── */}
      <div className="h-[2px] w-full bg-white/10 mt-2">
        <m.div
          className="h-full bg-[#C28B30]"
          style={{ width: `${progress * 100}%` }}
          transition={{ duration: 0 }}
        />
      </div>

      {/* ── Controls row — dots + arrows ── */}
      <div className="flex items-center justify-between mt-3 px-0.5">
        {/* Prev arrow */}
        <button
          onClick={prev}
          disabled={active === 0}
          className="text-white/25 hover:text-[#C28B30] transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Previous"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-1.5">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: i === active ? 20 : 6,
                backgroundColor: i === active ? "#C28B30" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={next}
          disabled={active === SLIDES.length - 1}
          className="text-white/25 hover:text-[#C28B30] transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Next"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* ── Slide counter — broadcast style ── */}
      <div className="flex items-center justify-center gap-2 mt-2">
        <span className="font-mono text-[9px] tracking-widest text-white/20 uppercase">
          {String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
