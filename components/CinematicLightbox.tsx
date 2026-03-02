"use client";

import { useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface CinematicLightboxProps {
  src: string;
  alt: string;
  caption: string;
  role: string;
  outlet?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function CinematicLightbox({
  src,
  alt,
  caption,
  role,
  outlet,
  isOpen,
  onClose,
}: CinematicLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          className="fixed inset-0 z-[300] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/92 backdrop-blur-md" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/30 transition-all"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Timecode — top left */}
          <div className="absolute top-5 left-5 z-20 font-mono text-[10px] tracking-widest text-white/20 uppercase">
            Production Still
          </div>

          {/* Image container */}
          <m.div
            className="relative z-10 w-full max-w-4xl"
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Corner brackets */}
            <div className="absolute -inset-3 z-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C28B30]/50" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C28B30]/50" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C28B30]/50" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C28B30]/50" />
            </div>

            {/* Photo */}
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />

              {/* Scan line overlay */}
              <div className="absolute inset-0 scanline-sweep pointer-events-none opacity-20" />
            </div>

            {/* Animated lower-third caption */}
            <m.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pb-8"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.18, duration: 0.4 }}
            >
              {/* REC indicator */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C53A32] rec-dot" />
                <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C53A32]">
                  Live
                </span>
              </div>

              {/* Lower-third */}
              <div className="flex items-stretch gap-0">
                <div className="w-1 bg-[#C28B30] mr-4 shrink-0" />
                <div>
                  <p className="font-display font-bold text-white text-2xl md:text-3xl leading-tight">
                    {caption}
                  </p>
                  <p className="text-[#C28B30] text-xs md:text-sm tracking-[0.15em] uppercase mt-1.5 font-medium">
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
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
