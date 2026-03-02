import HomePageClient from "@/components/HomePageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mekhi Carter — Television Journalist & Media Producer",
  description:
    "Portfolio of Mekhi Carter, television journalist, media producer, and community storyteller. Production experience at Sherri (Lionsgate/Debmar-Mercury) and The New York Post | Page Six.",
};

export default function HomePage() {
  return <HomePageClient />;
}
