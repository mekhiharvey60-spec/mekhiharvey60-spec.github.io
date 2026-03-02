"use client";

import { useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import CinematicLightbox from "./CinematicLightbox";

interface EditorialInlineImageProps {
  src: string;
  alt: string;
  /** Large headline in lower-third */
  caption: string;
  /** Subtitle / role line */
  role: string;
  /** Optional outlet badge in lightbox */
  outlet?: string;
  /**
   * Which side the image bleeds past — "right" extends marginRight by
   * `breakout` px (image overflows its column into the section margin).
   * "left" mirrors this.
   */
  align?: "left" | "right";
  /** Pixels the image bleeds past its container edge. Default 64. */
  breakout?: number;
  /** Resting rotation in degrees. Default 0. */
  rotate?: number;
  /** Intrinsic width in px used for sizing */
  width: number;
  /** Intrinsic height in px used for sizing */
  height: number;
  accentColor?: string;
  delay?: number;
}

export default function EditorialInlineImage({
  src,
  alt,
  caption,
  role,
  outlet,
  align = "right",
  breakout = 64,
  rotate = 0,
  width,
  height,
  accentColor = "#C28B30",
  delay = 0,
}: EditorialInlineImageProps) {
  const shouldReduce = useReducedMotion();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Entry: slide in from the breakout side + slight rotation
  const entryRotate = rotate + (align === "right" ? 2.5 : -2.5);

  return (
    <>
      <m.div
        className="relative cursor-pointer group"
        style={{
          width,
          minWidth: width,
          height,
          // Bleed past the column edge
          ...(align === "right"
            ? { marginRight: -breakout }
            : { marginLeft: -breakout }),
        }}
        initial={
          shouldReduce
            ? false
            : { opacity: 0, x: align === "right" ? 36 : -36, rotate: entryRotate }
        }
        whileInView={{ opacity: 1, x: 0, rotate }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
        whileHover={
          shouldReduce
            ? {}
            : {
                scale: 1.03,
                rotate: rotate * 0.25,
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
        {/* Offset accent frame — sits behind the image */}
        <div
          className={`absolute -inset-2.5 z-0 opacity-20 group-hover:opacity-50 transition-opacity duration-300 ${
            align === "right" ? "translate-x-2 translate-y-2" : "-translate-x-2 translate-y-2"
          }`}
          style={{ border: `1px solid ${accentColor}` }}
        />

        {/* Image */}
        <div className="relative w-full h-full overflow-hidden z-10">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            sizes={`${width}px`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/12 transition-colors duration-300" />
          <div className="absolute inset-0 broadcast-noise opacity-[0.03] pointer-events-none" />
        </div>

        {/* Storyboard corner notch */}
        <div
          className={`absolute top-0 ${align === "right" ? "right-0" : "left-0"} z-20 pointer-events-none`}
          style={{
            width: 0,
            height: 0,
            ...(align === "right"
              ? {
                  borderLeft: "16px solid transparent",
                  borderTop: `16px solid ${accentColor}`,
                }
              : {
                  borderRight: "16px solid transparent",
                  borderTop: `16px solid ${accentColor}`,
                }),
          }}
        />

        {/* "Still" chip — top opposite corner */}
        <div
          className={`absolute top-2.5 ${align === "right" ? "left-2.5" : "right-2.5"} z-20 pointer-events-none`}
        >
          <span
            className="text-[8px] font-bold tracking-[0.3em] uppercase px-2 py-0.5"
            style={{ backgroundColor: `${accentColor}28`, color: accentColor }}
          >
            Still
          </span>
        </div>

        {/* Lower-third caption — slides up on hover */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-3 bg-gradient-to-t from-black/88 to-transparent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-1 h-1 rounded-full bg-[#C53A32]" />
            <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-[#C53A32]">
              Live
            </span>
          </div>
          <div className="flex items-stretch gap-0">
            <div className="w-0.5 mr-2 shrink-0" style={{ backgroundColor: accentColor }} />
            <div>
              <p className="text-white font-bold font-display text-sm leading-snug">{caption}</p>
              <p className="text-[10px] tracking-wider mt-0.5" style={{ color: accentColor }}>
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
