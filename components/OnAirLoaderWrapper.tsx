"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const OnAirLoader = dynamic(() => import("./OnAirLoader"), { ssr: false });

export default function OnAirLoaderWrapper() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("onair-seen");
    if (!seen) {
      setShow(true);
    }
  }, []);

  const handleDone = () => {
    sessionStorage.setItem("onair-seen", "1");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && <OnAirLoader key="loader" onDone={handleDone} />}
    </AnimatePresence>
  );
}
