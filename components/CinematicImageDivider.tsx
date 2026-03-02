"use client";

import { useRef, useState } from "react";
import { m, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Expand } from "lucide-react";
import CinematicLightbox from "./CinematicLightbox";

interface CinematicImageDividerProps {
  src: string;
  alt: string;
  /** Large display name shown in lower-third */
  caption: string;
  /** Subtitle line (role / context) */
  role: string;
  /** Optional outlet badge */
  outlet?: string;
  /** CSS height value, default "55vh" */
  height?: string;
  /** CSS object-position value for the image, default "center" */
  objectPosition?: string;
}

export default function CinematicImageDivider({
  src,
  alt,
  caption,
  role,
  outlet,
  height = "55vh",
  objectPosition = "center",
}: CinematicImageDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax: image moves slower than scroll (creates depth)
  const imgY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduce ? ["0%", "0%"] : ["-12%", "12%"]
  );

  // Caption fades in once section is 30% visible, fades out near end
  const captionOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.42, 0.72, 0.92],
    [0, 1, 1, 0]
  );
  const captionY = useTransform(
    scrollYProgress,
    [0.25, 0.42],
    [28, 0]
  );

  // Dark overlay lightens slightly at center of scroll (image "breathes")
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.72, 0.50, 0.72]
  );

  return (
    <>
      <div
        ref={ref}
        className="relative w-full overflow-hidden"
        style={{ height }}
      >
        {/* Parallax image layer */}
        <m.div
          style={{ y: imgY }}
          className="absolute inset-0"
          // Scale up slightly so parallax edges don't show
          // We use a wrapper div scaled via style to avoid Tailwind conflict
        >
          <div className="absolute inset-0 scale-[1.15] origin-center">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              style={{ objectPosition }}
              sizes="100vw"
              loading="lazy"
            />
          </div>
        </m.div>

        {/* Dynamic dark overlay */}
        <m.div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />

        {/* Top scan line accent */}
        <div className="absolute top-0 left-0 right-0 h-px gold-border-animate opacity-50" />

        {/* Bottom scan line accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px gold-border-animate opacity-30" />

        {/* Expand hint — top right */}
        <button
          className="absolute top-4 right-4 z-10 flex items-center gap-2 text-white/30 hover:text-white/70 transition-colors group"
          onClick={() => setLightboxOpen(true)}
          aria-label={`Expand photo: ${caption}`}
        >
          <span className="text-[9px] font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            View
          </span>
          <Expand size={16} />
        </button>

        {/* Animated lower-third caption */}
        <m.div
          className="absolute bottom-6 left-6 md:left-12 z-10 pointer-events-none"
          style={{ opacity: captionOpacity, y: captionY }}
        >
          {/* REC dot */}
          <div className="flex items-center gap-2 mb-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C53A32] rec-dot" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C53A32]">
              Live
            </span>
          </div>

          {/* Gold bar + text */}
          <div className="flex items-stretch gap-0">
            <m.div
              className="w-1 bg-[#C28B30] mr-4 shrink-0"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
              style={{ originY: 1 }}
            />
            <div>
              <p className="font-display font-bold text-white text-2xl md:text-4xl leading-tight">
                {caption}
              </p>
              <p className="text-[#C28B30] text-xs md:text-sm tracking-[0.18em] uppercase mt-1.5 font-medium">
                {role}
              </p>
              {outlet && (
                <span className="mt-3 inline-block bg-[#C28B30] text-[#0D2235] text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                  {outlet}
                </span>
              )}
            </div>
          </div>
        </m.div>

        {/* Click-to-expand invisible overlay */}
        <button
          className="absolute inset-0 w-full h-full cursor-pointer z-0"
          onClick={() => setLightboxOpen(true)}
          aria-label={`View full photo: ${caption}`}
          tabIndex={-1}
        />
      </div>

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
