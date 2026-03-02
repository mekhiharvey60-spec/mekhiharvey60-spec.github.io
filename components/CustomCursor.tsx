"use client";

import { useEffect, useRef, useState } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";

type CursorVariant = "default" | "hover-link" | "hover-video" | "hover-card";

export default function CustomCursor() {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { stiffness: 400, damping: 35, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Don't show on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
      return;
    }

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });

      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      const el = target.closest("[data-cursor]") as HTMLElement | null;
      const cur = (el?.dataset.cursor as CursorVariant) ?? "default";
      setVariant(cur);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.body.classList.add("custom-cursor-active");

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.body.classList.remove("custom-cursor-active");
      cancelAnimationFrame(rafRef.current);
    };
  }, [mouseX, mouseY, visible]);

  // Touch devices: render nothing
  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null;
  }

  const variants = {
    default: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "transparent",
      border: "1.5px solid rgba(255,255,255,0.6)",
      x: "-50%",
      y: "-50%",
    },
    "hover-link": {
      width: 36,
      height: 36,
      borderRadius: "50%",
      backgroundColor: "rgba(18,163,180,0.12)",
      border: "1.5px solid rgba(18,163,180,0.75)",
      x: "-50%",
      y: "-50%",
    },
    "hover-video": {
      width: 56,
      height: 56,
      borderRadius: "4px",
      backgroundColor: "rgba(197,58,50,0.12)",
      border: "1.5px solid rgba(197,58,50,0.7)",
      x: "-50%",
      y: "-50%",
    },
    "hover-card": {
      width: 44,
      height: 44,
      borderRadius: "2px",
      backgroundColor: "rgba(255,255,255,0.05)",
      border: "1.5px solid rgba(255,255,255,0.35)",
      x: "-50%",
      y: "-50%",
    },
  };

  return (
    <m.div
      className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference"
      style={{ x, y, translateX: "-50%", translateY: "-50%", opacity: visible ? 1 : 0 }}
      animate={variants[variant]}
      transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.3 }}
    />
  );
}
