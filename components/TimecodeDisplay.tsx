"use client";

import { useEffect, useState } from "react";

interface TimecodeDisplayProps {
  className?: string;
}

function pad(n: number, len = 2) {
  return String(n).padStart(len, "0");
}

export default function TimecodeDisplay({ className = "" }: TimecodeDisplayProps) {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0, f: 0 });

  useEffect(() => {
    let frame = 0;
    const id = setInterval(() => {
      const now = new Date();
      frame = (frame + 1) % 30;
      setTime({ h: now.getHours(), m: now.getMinutes(), s: now.getSeconds(), f: frame });
    }, 33);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className={`font-mono text-xs tracking-widest text-white/30 select-none ${className}`}
      aria-hidden="true"
    >
      {pad(time.h)}:{pad(time.m)}:{pad(time.s)}:{pad(time.f)}
    </span>
  );
}
