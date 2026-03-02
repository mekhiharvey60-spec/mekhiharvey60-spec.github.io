"use client";

import { useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import CinematicLightbox from "./CinematicLightbox";

interface FloatingProductionImageProps {
  src: string;
  alt: string;
  /** Large display name shown in lower-third */
  caption: string;
  /** Subtitle / role line */
  role: string;
  /** Optional outlet badge in lightbox */
  outlet?: string;
  /** Resting rotation in degrees — negative tilts left, positive tilts right */
  rotate?: number;
  /** Intrinsic width in px (used for sizing) */
  width: number;
  /** Intrinsic height in px (used for sizing) */
  height: number;
  className?: string;
  accentColor?: string;
  delay?: number;
}

export default function FloatingProductionImage({
  src,
  alt,
  caption,
  role,
  outlet,
  rotate = -2,
  width,
  height,
  className = "",
  accentColor = "#C28B30",
  delay = 0,
}: FloatingProductionImageProps) {
  const shouldReduce = useReducedMotion();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <m.div
        className={`relative cursor-pointer group ${className}`}
        style={{ width, height, minWidth: width }}
        // Entry: fade + slide up from slightly below
        initial={
          shouldReduce
            ? false
            : { opacity: 0, y: 24, rotate: rotate * 0.6 }
        }
        whileInView={{ opacity: 1, y: 0, rotate }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
        // Hover: straightens slightly and scales up
        whileHover={
          shouldReduce
            ? {}
            : {
                scale: 1.04,
                rotate: rotate * 0.15,
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              }
        }
        onClick={() => setLightboxOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setLightboxOpen(true)}
        aria-label={`Expand photo: ${caption}`}
        data-cursor="hover-card"
      >
        {/* Accent border frame — offset behind image */}
        <div
          className="absolute -inset-2 z-0 transition-opacity duration-300 opacity-25 group-hover:opacity-55"
          style={{ border: `1px solid ${accentColor}` }}
        />

        {/* Image */}
        <div className="relative w-full h-full overflow-hidden z-10">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.05]"
            sizes={`${Math.max(width, 320)}px`}
            loading="lazy"
          />

          {/* Subtle dark vignette on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />

          {/* Scan-line noise texture */}
          <div className="absolute inset-0 broadcast-noise opacity-[0.035] pointer-events-none" />
        </div>

        {/* Storyboard corner notch — top right */}
        <div
          className="absolute top-0 right-0 z-20 pointer-events-none"
          style={{
            width: 0,
            height: 0,
            borderLeft: "14px solid transparent",
            borderTop: `14px solid ${accentColor}`,
          }}
        />

        {/* Lower-third caption — slides up on hover via CSS group */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 p-3 bg-gradient-to-t from-black/85 to-transparent
                     opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                     transition-all duration-300 pointer-events-none"
        >
          {/* REC dot */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-1 h-1 rounded-full bg-[#C53A32]" />
            <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-[#C53A32]">
              Live
            </span>
          </div>
          {/* Gold bar + text */}
          <div className="flex items-stretch gap-0">
            <div
              className="w-0.5 mr-2 shrink-0"
              style={{ backgroundColor: accentColor }}
            />
            <div>
              <p className="text-white font-bold font-display text-sm leading-snug">
                {caption}
              </p>
              <p
                className="text-[10px] tracking-wider mt-0.5"
                style={{ color: accentColor }}
              >
                {role}
              </p>
            </div>
          </div>
        </div>
      </m.div>

      <CinematicLightbox
        src={src}
        alt={alt}
        caption={caption}
        role={role}
        outlet={outlet}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
