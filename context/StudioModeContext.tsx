"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface StudioModeContextValue {
  isDark: boolean;
  toggle: () => void;
}

const StudioModeContext = createContext<StudioModeContextValue>({
  isDark: true,
  toggle: () => {},
});

export function StudioModeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("studio-mode");
    const dark = stored !== "light";
    setIsDark(dark);
    document.documentElement.setAttribute("data-studio", dark ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("studio-mode", next ? "dark" : "light");
    document.documentElement.setAttribute("data-studio", next ? "dark" : "light");
  };

  return (
    <StudioModeContext.Provider value={{ isDark, toggle }}>
      {children}
    </StudioModeContext.Provider>
  );
}

export function useStudioMode() {
  return useContext(StudioModeContext);
}
