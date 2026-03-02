"use client";

interface NewsTickerProps {
  items?: string[];
  speed?: number;
  accentColor?: string;
  className?: string;
}

const DEFAULT_ITEMS = [
  "MEKHI CARTER — TELEVISION JOURNALIST & MEDIA PRODUCER",
  "PRODUCTION ASSISTANT · SHERRI — LIONSGATE | DEBMAR-MERCURY",
  "EDITORIAL ASSISTANT · PAGE SIX — THE NEW YORK POST",
  "RADIO PERSONALITY & PODCASTER · WMCX 88.9 FM",
  "MONMOUTH UNIVERSITY · B.A. COMMUNICATIONS · MAY 2026",
  "CHAPTER PRESIDENT · ALPHA PHI ALPHA — SIGMA XI CHAPTER",
  "OPEN TO REPORTING & PRODUCTION OPPORTUNITIES",
];

export default function NewsTicker({
  items = DEFAULT_ITEMS,
  speed = 40,
  accentColor = "#C28B30",
  className = "",
}: NewsTickerProps) {
  // Duplicate items for seamless loop
  const allItems = [...items, ...items];
  const durationSec = (items.length * 12 * items[0].length) / speed;

  return (
    <div
      className={`overflow-hidden bg-black/80 border-t border-b border-[#C28B30]/20 py-2 ${className}`}
      aria-hidden="true"
    >
      <div
        className="ticker-track"
        style={{ "--ticker-duration": `${durationSec}s` } as React.CSSProperties}
      >
        {allItems.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-0">
            <span
              className="text-xs font-semibold tracking-[0.18em] uppercase text-white/70 px-8"
            >
              {item}
            </span>
            <span
              className="text-xs"
              style={{ color: accentColor }}
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
