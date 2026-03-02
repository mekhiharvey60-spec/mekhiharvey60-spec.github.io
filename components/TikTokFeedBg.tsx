"use client";

import { useEffect, useRef } from "react";

// Injects TikTok's official creator embed widget as a full-bleed hero background.
// TikTok's embed.js auto-pulls the latest videos from @mekhicarterlivenews.
export default function TikTokFeedBg() {
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cols = [col1Ref.current, col2Ref.current, col3Ref.current];

    // Build a TikTok creator embed blockquote in each column
    cols.forEach((col) => {
      if (!col || col.querySelector(".tiktok-embed")) return;

      const bq = document.createElement("blockquote");
      bq.className = "tiktok-embed";
      bq.setAttribute("cite", "https://www.tiktok.com/@mekhicarterlivenews");
      bq.setAttribute("data-unique-id", "mekhicarterlivenews");
      bq.setAttribute("data-embed-type", "creator");
      bq.style.cssText =
        "max-width: 100%; min-width: 288px; margin: 0; border: none;";

      const section = document.createElement("section");
      const a = document.createElement("a");
      a.href = "https://www.tiktok.com/@mekhicarterlivenews";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = "@mekhicarterlivenews";
      section.appendChild(a);
      bq.appendChild(section);
      col.appendChild(bq);
    });

    // Load TikTok embed.js once — it will transform all blockquotes it finds
    if (!document.querySelector('script[data-tiktok-embed]')) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      script.setAttribute("data-tiktok-embed", "true");
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      {/* ── Three TikTok creator columns ── */}
      <div className="absolute inset-0 flex items-start justify-end gap-0 opacity-70">
        {/* Col A — partially visible on left edge */}
        <div
          ref={col1Ref}
          className="hidden lg:block w-[340px] shrink-0 -translate-x-8 scale-[1.15] origin-top-left overflow-hidden opacity-50"
          style={{ height: "100%" }}
        />

        {/* Col B — center-right, most visible */}
        <div
          ref={col2Ref}
          className="w-[340px] shrink-0 scale-[1.08] origin-top overflow-hidden"
          style={{ height: "100%" }}
        />

        {/* Col C — far right */}
        <div
          ref={col3Ref}
          className="hidden md:block w-[340px] shrink-0 translate-x-4 scale-105 origin-top-right overflow-hidden opacity-60"
          style={{ height: "100%" }}
        />
      </div>

      {/* ── Gradient overlays ── */}
      {/* Left fade: strong navy toward text content */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D2235] from-50% via-[#0D2235]/80 to-[#0D2235]/10" />
      {/* Top fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D2235]/70 via-transparent to-[#0D2235]/90" />
      {/* Overall darkness so text stays readable */}
      <div className="absolute inset-0 bg-[#0D2235]/30" />
    </div>
  );
}
