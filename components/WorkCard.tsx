"use client";

import { m } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

export interface WorkModalContent {
  category: string;
  title: string;
  subtitle?: string;
  role: string;
  outlet: string;
  period?: string;
  description: string;
  highlights: string[];
  skills: string[];
  youtubeId?: string;
  externalLink?: string;
  accent: string;
}

interface WorkCardProps {
  category: string;
  title: string;
  role: string;
  outlet: string;
  accent: string;
  thumbnailBg?: string;
  /** Optional real photo/graphic for the card thumbnail */
  thumbnailImg?: string;
  index?: number;
  modalContent: WorkModalContent;
  onOpen: (content: WorkModalContent) => void;
}

export default function WorkCard({
  category,
  title,
  role,
  outlet,
  accent,
  thumbnailBg,
  thumbnailImg,
  index = 0,
  modalContent,
  onOpen,
}: WorkCardProps) {
  return (
    <m.div
      className="relative overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover="hovered"
      onClick={() => onOpen(modalContent)}
      data-cursor="hover-card"
    >
      {/* Thumbnail area */}
      <div
        className="relative aspect-video overflow-hidden"
        style={{ background: thumbnailBg ?? "linear-gradient(135deg, #0D2235 0%, #0E2A3A 100%)" }}
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundColor: accent }} />

        {/* Real image thumbnail — lazy-loaded, dimmed for UI legibility */}
        {thumbnailImg && (
          <div className="absolute inset-0 z-0">
            <Image
              src={thumbnailImg}
              alt={`${title} thumbnail`}
              fill
              className="object-contain p-6 opacity-60 transition-opacity duration-300 group-hover:opacity-80"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
        )}

        {/* Corner brackets */}
        {[
          "top-3 left-3 border-t border-l",
          "top-3 right-3 border-t border-r",
          "bottom-3 left-3 border-b border-l",
          "bottom-3 right-3 border-b border-r",
        ].map((cls) => (
          <div key={cls} className={`absolute w-5 h-5 border-white/20 ${cls} z-10`} />
        ))}

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-20">
          <span
            className="text-[10px] font-bold tracking-[0.25em] uppercase px-2.5 py-1"
            style={{ backgroundColor: accent + "22", color: accent, border: `1px solid ${accent}50` }}
          >
            {category}
          </span>
        </div>

        {/* Noise overlay */}
        <div className="absolute inset-0 broadcast-noise opacity-[0.04] pointer-events-none" />

        {/* Center play icon */}
        <m.div
          className="absolute inset-0 flex items-center justify-center"
          variants={{ hovered: { scale: 1.1 } }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <div
            className="w-14 h-14 rounded-full border-2 flex items-center justify-center"
            style={{ borderColor: accent + "60", backgroundColor: accent + "15" }}
          >
            <Play size={20} style={{ color: accent }} className="ml-0.5" />
          </div>
        </m.div>

        {/* Hover overlay */}
        <m.div
          className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4"
          variants={{
            hovered: { opacity: 1, y: 0 },
          }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-white/70 text-xs tracking-wider uppercase font-mono">
            Click to view case study
          </p>
        </m.div>
      </div>

      {/* Card info */}
      <div
        className="bg-[#0D2235] border border-white/10 group-hover:border-white/20 transition-colors p-5"
        style={{ borderTop: `1px solid ${accent}30` }}
      >
        <p className="text-xs tracking-[0.2em] uppercase font-mono mb-2" style={{ color: accent + "aa" }}>
          {outlet}
        </p>
        <h3 className="font-display text-lg font-bold text-white leading-tight mb-1">{title}</h3>
        <p className="text-white/40 text-xs">{role}</p>
      </div>
    </m.div>
  );
}
