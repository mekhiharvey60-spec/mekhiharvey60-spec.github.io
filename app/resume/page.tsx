import type { Metadata } from "next";
import ResumeClient from "@/components/ResumeClient";

export const metadata: Metadata = {
  title: "Resume — Mekhi Carter",
  description:
    "View and download the full resume of Mekhi Carter — television journalist and media producer with experience at Sherri (Lionsgate/Debmar-Mercury) and The New York Post | Page Six.",
};

export default function ResumePage() {
  return <ResumeClient />;
}
