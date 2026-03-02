import AboutPageClient from "@/components/AboutPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Mekhi Carter",
  description:
    "The story of Mekhi Carter — television journalist, media producer, and first-generation college student from Millville, NJ.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
