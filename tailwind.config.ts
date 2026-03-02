import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./providers/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-studio="dark"]'],
  theme: {
    extend: {
      colors: {
        "deep-navy": {
          DEFAULT: "#0D2235",
          light: "#0E2A3A",
          subtle: "#F0F5F8",
        },
        "rich-red": {
          DEFAULT: "#C53A32",
          light: "#D45850",
          dark: "#A02D27",
        },
        "warm-orange": {
          DEFAULT: "#B87D28",
          light: "#CA9232",
          dark: "#8F6018",
        },
        "golden-yellow": {
          DEFAULT: "#C28B30",
          light: "#D9A040",
          dark: "#A0721F",
        },
        "studio-cyan": {
          DEFAULT: "#12A3B4",
          light: "#1FC0D4",
          dark: "#0C7A87",
        },
        "soft-cream": {
          DEFAULT: "#E9E2BC",
          light: "#F3EDD4",
          dark: "#D4CDAA",
        },
        ink: "#0A0A0A",
        // Studio Mode tokens — reference CSS custom properties
        "studio-bg":      "var(--studio-bg)",
        "studio-surface": "var(--studio-surface)",
        "studio-panel":   "var(--studio-panel)",
        "studio-text":    "var(--studio-text)",
        "studio-border":  "var(--studio-border)",
        "studio-accent":  "var(--studio-accent)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
