"use client";

import { useState } from "react";
import WorkCard, { type WorkModalContent } from "./WorkCard";
import WorkModal from "./WorkModal";
import ScrollReveal from "./ScrollReveal";

const workItems: (Omit<Parameters<typeof WorkCard>[0], "onOpen"> & { modalContent: WorkModalContent })[] = [
  {
    category: "Investigative · Documentary",
    title: "Diddy Documentary",
    role: "Journalist & Producer",
    outlet: "Independent / YouTube",
    accent: "#C28B30",
    thumbnailBg: "linear-gradient(135deg, #0D2235 0%, #1A2840 100%)",
    modalContent: {
      category: "Investigative Documentary",
      title: "Diddy Documentary",
      role: "Journalist & Producer",
      outlet: "Independent / YouTube",
      accent: "#C28B30",
      description:
        "An independent documentary investigation into the Sean \"Diddy\" Combs legal controversy — researched, produced, and presented by Mekhi Carter. Demonstrates long-form investigative storytelling, independent research methodology, on-camera presentation, and end-to-end documentary production.",
      highlights: [
        "Solo-produced from concept to final cut",
        "Independent research into legal filings and public record",
        "On-camera presentation and journalistic commentary",
        "Video editing, pacing, and narrative structure",
        "Published and distributed via YouTube",
      ],
      skills: ["Documentary", "Investigative Journalism", "On-Camera", "Self-Produced", "Research", "Video Editing"],
      youtubeId: "8Wij-Gz292A",
      externalLink: "https://www.youtube.com/watch?v=8Wij-Gz292A",
    },
  },
  {
    category: "Documentary · Advocacy",
    title: "Understanding Autism in Public Schools",
    role: "Producer & Director",
    outlet: "Independent / YouTube",
    accent: "#B87D28",
    thumbnailBg: "linear-gradient(135deg, #1A2A1A 0%, #0F2510 100%)",
    modalContent: {
      category: "Documentary · Advocacy",
      title: "Understanding Autism in Public Schools",
      role: "Producer & Director",
      outlet: "Independent / YouTube",
      accent: "#B87D28",
      description:
        "A solo-produced documentary exploring how autism is understood and addressed within the public school system. Featuring personal interviews with family members, this film provides an intimate look at lived experiences and systemic challenges.",
      highlights: [
        "Personal interviews with family affected by autism",
        "Research into public school support systems",
        "Intimate, first-person narrative approach",
        "End-to-end production and post-production",
        "Community advocacy through storytelling",
      ],
      skills: ["Documentary", "Advocacy", "Education", "Solo-Produced", "Interviewing", "Community Storytelling"],
      youtubeId: "yp1e0P42cJ4",
      externalLink: "https://www.youtube.com/watch?v=yp1e0P42cJ4",
    },
  },
  {
    category: "Live Broadcasting · Podcast",
    title: "The Mekhi Carter Show",
    role: "Host & Producer",
    outlet: "WMCX 88.9 FM",
    accent: "#C53A32",
    thumbnailBg: "linear-gradient(135deg, #1A0A0A 0%, #2A0F0F 100%)",
    thumbnailImg: "/show-graphic.png",
    modalContent: {
      category: "Live Broadcasting",
      title: "The Mekhi Carter Show",
      role: "Host & Producer",
      outlet: "WMCX 88.9 FM — Monmouth University",
      period: "Feb 2022 – Jan 2024",
      accent: "#C53A32",
      description:
        "A live radio and podcast platform hosted and produced at WMCX 88.9 FM — Monmouth University's radio station. Research-driven segments on student life, culture, campus voices, and national issues. Built from scratch every episode with journalistic intent and end-to-end production.",
      highlights: [
        "Show rundown creation and editorial planning",
        "Topic research and script outlining",
        "Live recording, editing, and digital promotion",
        "Guest interviews and segment coordination",
        "Digital distribution and audience building",
      ],
      skills: ["Live Broadcasting", "Podcast Production", "Guest Interviews", "Audio Editing", "Show Rundowns", "Digital Promotion"],
    },
  },
  {
    category: "Production · Nationally Syndicated",
    title: "Sherri",
    role: "Production Assistant Intern",
    outlet: "Lionsgate | Debmar-Mercury",
    accent: "#C28B30",
    thumbnailBg: "linear-gradient(135deg, #1A1500 0%, #2A2000 100%)",
    modalContent: {
      category: "Production Internship",
      title: "Sherri",
      subtitle: "Nationally Syndicated Talk Show",
      role: "Production Assistant Intern",
      outlet: "Lionsgate | Debmar-Mercury",
      period: "January 2026 – Present",
      accent: "#C28B30",
      description:
        "Supports daily production operations for a nationally syndicated talk show, collaborating with producers, stage managers, and cross-functional teams to execute live and taped segments.",
      highlights: [
        "Guest logistics & talent relations",
        "Green room management & on-air participation cues",
        "Segment idea pitching & editorial fact-checking",
        "Show rundown contributions",
        "Live & taped segment execution",
      ],
      skills: ["Live Production", "Talent Coordination", "Show Rundowns", "Segment Pitching", "Editorial"],
    },
  },
  {
    category: "Field Reporting · National Outlet",
    title: "Page Six / New York Post",
    role: "Editorial Assistant",
    outlet: "The New York Post",
    accent: "#C53A32",
    thumbnailBg: "linear-gradient(135deg, #1A0A0A 0%, #200808 100%)",
    modalContent: {
      category: "Field Reporting",
      title: "Page Six — New York Post",
      subtitle: "On-site field reporting support for national entertainment coverage",
      role: "Editorial Assistant",
      outlet: "The New York Post / Page Six",
      period: "March 2024 – April 2024",
      accent: "#C53A32",
      description:
        "On-site field reporting support alongside a senior reporter, covering high-profile entertainment stories for one of the most-read celebrity news outlets in the country.",
      highlights: [
        "On-site coverage of Uncle Luke / Freaknik (Hulu) interview",
        "Pre-interview research & question development",
        "Field logistics & talent coordination",
        "Multi-platform asset gathering (video, soundbites, photos)",
        "Real-time editorial decision-making",
      ],
      skills: ["Field Production", "Editorial Reporting", "Research", "Asset Gathering", "Talent Coordination"],
    },
  },
];

export default function WorkGridClient() {
  const [openContent, setOpenContent] = useState<WorkModalContent | null>(null);

  return (
    <>
      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workItems.map((item, i) => (
            <WorkCard
              key={item.title}
              {...item}
              index={i}
              onOpen={setOpenContent}
            />
          ))}
        </div>
      </ScrollReveal>

      <WorkModal
        isOpen={!!openContent}
        onClose={() => setOpenContent(null)}
        content={openContent}
      />
    </>
  );
}
