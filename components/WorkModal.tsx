"use client";

import { useEffect } from "react";
import { AnimatePresence, m } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import type { WorkModalContent } from "./WorkCard";

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: WorkModalContent | null;
}

export default function WorkModal({ isOpen, onClose, content }: WorkModalProps) {
  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && content && (
        <>
          {/* Backdrop */}
          <m.div
            className="fixed inset-0 bg-black/80 z-[1000] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Panel */}
          <m.div
            className="fixed bottom-0 left-0 right-0 z-[1001] max-h-[90vh] overflow-y-auto bg-[#08202E] border-t"
            style={{ borderColor: content.accent + "60" }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 32, mass: 1 }}
          >
            {/* Top accent bar */}
            <div className="h-0.5 w-full" style={{ backgroundColor: content.accent }} />

            <div className="max-w-6xl mx-auto px-6 lg:px-12 py-10">
              {/* Header row */}
              <div className="flex items-start justify-between gap-6 mb-8">
                <div>
                  <p
                    className="text-xs font-bold tracking-[0.25em] uppercase mb-2 font-mono"
                    style={{ color: content.accent }}
                  >
                    {content.category}
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                    {content.title}
                  </h2>
                  {content.subtitle && (
                    <p className="text-white/50 text-sm mt-1">{content.subtitle}</p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="mt-1 shrink-0 w-10 h-10 border border-white/20 hover:border-white/50 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  aria-label="Close"
                  data-cursor="hover-link"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Meta row */}
              <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-white/10">
                {[
                  { label: "Role", value: content.role },
                  { label: "Outlet", value: content.outlet },
                  ...(content.period ? [{ label: "Period", value: content.period }] : []),
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs tracking-widest uppercase text-white/30 mb-1">{item.label}</p>
                    <p className="text-white font-semibold text-sm">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                {/* Left: video or image */}
                {content.youtubeId && (
                  <div className="lg:col-span-3">
                    <div
                      className="relative aspect-video border overflow-hidden"
                      style={{ borderColor: content.accent + "40" }}
                      data-cursor="hover-video"
                    >
                      {[
                        "top-0 left-0 border-t border-l",
                        "top-0 right-0 border-t border-r",
                        "bottom-0 left-0 border-b border-l",
                        "bottom-0 right-0 border-b border-r",
                      ].map((cls) => (
                        <div
                          key={cls}
                          className={`absolute w-5 h-5 z-10 pointer-events-none ${cls}`}
                          style={{ borderColor: content.accent + "80" }}
                        />
                      ))}
                      <iframe
                        src={`https://www.youtube.com/embed/${content.youtubeId}?rel=0&modestbranding=1`}
                        title={content.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    {content.externalLink && (
                      <a
                        href={content.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-xs tracking-wider uppercase font-medium transition-colors"
                        style={{ color: content.accent }}
                        data-cursor="hover-link"
                      >
                        Watch on YouTube <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                )}

                {/* Right: details */}
                <div className={content.youtubeId ? "lg:col-span-2" : "lg:col-span-5"}>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">{content.description}</p>

                  {content.highlights.length > 0 && (
                    <div className="mb-6">
                      <p className="text-xs tracking-widest uppercase text-white/30 mb-3">Key Highlights</p>
                      <ul className="space-y-2">
                        {content.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-white/60">
                            <span style={{ color: content.accent }} className="mt-0.5 font-bold">—</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {content.skills.length > 0 && (
                    <div>
                      <p className="text-xs tracking-widest uppercase text-white/30 mb-3">Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {content.skills.map((s) => (
                          <span
                            key={s}
                            className="text-xs px-3 py-1.5 border text-white/60"
                            style={{ borderColor: content.accent + "40" }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
