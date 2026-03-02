import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Play } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import WorkGridClient from "@/components/WorkGridClient";
import SectionTransition from "@/components/SectionTransition";

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Work — Mekhi Carter",
  description:
    "Video clips, production experience, and writing samples from Mekhi Carter — television journalist and media producer.",
};

const videoClips: {
  title: string;
  category: string;
  role: string;
  outlet: string;
  description: string;
  youtubeId: string | null;
  wixLink: string | null;
  placeholder: boolean;
}[] = [
  // Additional clips can be added here once uploaded to YouTube
  // { title: "...", category: "Stand-Up", role: "Reporter", outlet: "...", description: "...", youtubeId: "ID_HERE", wixLink: null, placeholder: false }
];

const productionWork = [
  {
    id: "sherri",
    org: "Lionsgate | Debmar-Mercury",
    show: "Sherri",
    badge: "Nationally Syndicated",
    role: "Production Assistant Intern",
    period: "January 2026 – Present",
    location: "New York, NY",
    description:
      "Supports daily production operations for a nationally syndicated talk show, collaborating with producers, stage managers, and cross-functional teams to execute live and taped segments.",
    highlights: [
      "Guest logistics & talent relations",
      "Green room management & on-air participation cues",
      "Segment idea pitching & editorial fact-checking",
      "Show rundown contributions",
      "Live & taped segment execution",
    ],
    skills: ["Live Production", "Talent Coordination", "Show Rundowns", "Segment Pitching"],
  },
  {
    id: "pagesix",
    org: "The New York Post",
    show: "Page Six",
    badge: "National Outlet",
    role: "Editorial Assistant",
    period: "March 2024 – April 2024",
    location: "New York, NY",
    description:
      "On-site field reporting support alongside a senior reporter, covering high-profile entertainment stories for one of the most-read celebrity news outlets in the country.",
    highlights: [
      "On-site coverage of Uncle Luke / Freaknik (Hulu) interview",
      "Pre-interview research & question development",
      "Field logistics & talent coordination",
      "Multi-platform asset gathering (video, soundbites, photos)",
      "Real-time editorial decision-making",
    ],
    skills: ["Field Production", "Editorial Reporting", "Research", "Asset Gathering"],
  },
];

const writingCategories = [
  {
    type: "Scripts",
    description:
      "Broadcast scripts written for on-air delivery — structured for pacing, clarity, and visual storytelling.",
    items: [
      {
        title: "HawkTV Podcasting Story",
        summary: "Broadcast script covering the rise of podcasting and its impact on campus media, featuring student perspectives and industry insights.",
        link: "/hawktv-podcasting-script.pdf",
      },
    ],
    placeholder: false,
  },
  {
    type: "News Articles",
    description:
      "Reported and written pieces covering campus, community, and national issues.",
    items: [
      {
        title: "Ask the Expert",
        summary: "Feature article highlighting expert perspectives and analysis on contemporary issues affecting communities.",
        link: "/ask-the-expert.pdf",
      },
    ],
    placeholder: false,
  },
  {
    type: "Show Rundowns",
    description:
      "Segment timing and content rundowns developed during production internships.",
    items: [] as { title: string; summary: string; link: string | null }[],
    placeholder: true,
  },
];

export default function WorkPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="relative bg-[#0D2235] pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D2235] via-[#0E2A3A] to-[#0D2235]" />
        <div className="absolute left-0 top-0 bottom-0 w-1 gold-border-animate" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <p className="section-label">Portfolio</p>
          <h1 className="font-display text-6xl md:text-7xl font-bold text-white leading-none mt-3">
            My Work
          </h1>
          <div className="w-12 h-0.5 bg-[#C28B30] mt-8" />
          <p className="text-white/60 text-lg mt-6 max-w-md">
            Journalism. Production. Storytelling. Every piece built around one
            purpose — amplifying the communities that deserve to be heard.
          </p>
        </div>
      </section>

      {/* ── WORK GRID ── */}
      <section className="py-20 bg-[#08202E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="section-label mb-2">All Work</p>
            <h2 className="font-display text-4xl font-bold text-white mb-10">
              Browse the Portfolio
            </h2>
          </ScrollReveal>
          <WorkGridClient />
        </div>
      </section>

      <SectionTransition variant="gold" label="Featured Videos" />

      {/* ── DOCUMENTARY SPOTLIGHT ── */}
      <section id="video" className="py-20 bg-[#0E2A3A] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 gold-border-animate" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 60% 50%, #C28B30 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Featured badge */}
          <div className="inline-flex items-center gap-2 bg-[#C28B30] text-[#0D2235] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#0D2235] rounded-full animate-pulse" />
            Featured · Documentary Work
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Video */}
            <div className="lg:col-span-3">
              <div className="relative aspect-video bg-[#0D2235] border border-[#C28B30]/30 overflow-hidden shadow-2xl shadow-black/50" data-cursor="hover-video">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#C28B30] z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#C28B30] z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#C28B30] z-10 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#C28B30] z-10 pointer-events-none" />

                <iframe
                  src="https://www.youtube.com/embed/8Wij-Gz292A?rel=0&modestbranding=1&color=white"
                  title="Diddy Documentary — Mekhi Carter"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Video meta bar */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#C28B30]"><YoutubeIcon /></span>
                  <span className="text-white/40 text-xs tracking-widest uppercase">
                    YouTube · Mekhi Carter
                  </span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=8Wij-Gz292A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#C28B30]/60 hover:text-[#C28B30] text-xs font-medium tracking-wider uppercase transition-colors"
                >
                  Watch on YouTube <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 flex flex-col justify-center gap-6">
              <div>
                <p className="text-[#C28B30] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                  Documentary Journalism · Investigative
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                  Diddy Documentary
                </h2>
                <div className="w-8 h-0.5 bg-[#C28B30] mt-4 mb-5" />
                <p className="text-white/70 text-sm leading-relaxed">
                  An independent documentary investigation into the Sean &quot;Diddy&quot; Combs
                  legal controversy — researched, produced, and presented by Mekhi Carter.
                </p>
                <p className="text-white/50 text-sm leading-relaxed mt-3">
                  Demonstrates long-form investigative storytelling, independent research
                  methodology, on-camera presentation, and end-to-end documentary production.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Documentary", "Investigative Journalism", "On-Camera", "Self-Produced", "Research"].map((tag, i) => {
                  const accents = ["golden-yellow", "warm-orange", "rich-red"];
                  const color = accents[i % accents.length];
                  return (
                    <span
                      key={tag}
                      className={`text-xs text-white/70 border border-${color}/25 px-3 py-1.5 hover:border-${color} hover:text-${color} transition-colors`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>

              <div className="bg-[#0D2235]/60 border border-white/10 p-5 space-y-3">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-1">Role</p>
                  <p className="text-white font-semibold text-sm">Journalist &amp; Producer</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-1">Format</p>
                  <p className="text-white/70 text-sm">Documentary · YouTube</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-1">Coverage</p>
                  <p className="text-white/70 text-sm">Sean &quot;Diddy&quot; Combs Legal Controversy</p>
                </div>
              </div>

              <a
                href="https://www.youtube.com/watch?v=8Wij-Gz292A"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary self-start"
              >
                Watch Full Documentary <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER DOCUMENTARY WORK ── */}
      <section id="documentary" className="py-20 bg-white border-b-2 border-[#C53A32]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="section-label">Documentary</p>
              <h2 className="font-display text-4xl font-bold text-ink mt-2 mb-4">
                Autism Advocacy Documentary
              </h2>
              <div className="divider-burgundy" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Video */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video bg-[#0D2235] border border-[#C28B30]/30 overflow-hidden shadow-2xl shadow-black/50">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#C28B30] z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#C28B30] z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#C28B30] z-10 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#C28B30] z-10 pointer-events-none" />

                <iframe
                  src="https://www.youtube.com/embed/yp1e0P42cJ4?rel=0&modestbranding=1&color=white"
                  title="Autism Advocacy Documentary — Mekhi Carter"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Video meta bar */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#C28B30]"><YoutubeIcon /></span>
                  <span className="text-gray-600 text-xs tracking-widest uppercase">
                    YouTube · Mekhi Carter
                  </span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=yp1e0P42cJ4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#C28B30]/60 hover:text-[#C28B30] text-xs font-medium tracking-wider uppercase transition-colors"
                >
                  Watch on YouTube <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-start gap-6">
              <div>
                <p className="text-[#C28B30] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                  Documentary · Advocacy
                </p>
                <h3 className="font-display text-2xl font-bold text-ink leading-tight">
                  Understanding Autism in Public Schools
                </h3>
                <div className="w-8 h-0.5 bg-[#C28B30] mt-4 mb-5" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  A solo-produced documentary exploring how autism is understood and addressed within the public school system. Featuring personal interviews with my aunt and cousin, this film provides an intimate look at lived experiences and systemic challenges.
                </p>
                <p className="text-gray-600 text-xs leading-relaxed mt-3 italic border-t border-gray-200 pt-3">
                  Note: This documentary was created strictly for educational and portfolio purposes. I do not own the rights to the music featured; it is utilized here to support the narrative and emotional depth of the storytelling.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Documentary", "Advocacy", "Education", "Solo-Produced", "Interviewing"].map((tag, i) => {
                  const accents = ["golden-yellow", "warm-orange", "rich-red"];
                  const color = accents[i % accents.length];
                  return (
                    <span
                      key={tag}
                      className={`text-xs text-white/70 border border-${color}/25 px-3 py-1.5 hover:border-${color} hover:text-${color} transition-colors`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>

              <div className="bg-cream border border-gray-200 p-5 space-y-3">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">Role</p>
                  <p className="text-ink font-semibold text-sm">Producer &amp; Director</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">Format</p>
                  <p className="text-gray-700 text-sm">Documentary · YouTube</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">Subject</p>
                  <p className="text-gray-700 text-sm">Autism Advocacy &amp; Education</p>
                </div>
              </div>

              <a
                href="https://www.youtube.com/watch?v=yp1e0P42cJ4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary self-start"
              >
                Watch Documentary <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE MEKHI CARTER SHOW ── */}
      <section id="show" className="py-24 bg-[#0D2235] border-b-2 border-[#C53A32]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Broadcasting</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
                The Mekhi Carter Show
              </h2>
              <div className="divider-burgundy mb-8" />
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                A live radio and podcast platform hosted and produced by Mekhi Carter
                at WMCX 88.9 FM — Monmouth University&apos;s radio station. Research-driven
                segments on student life, culture, campus voices, and national issues.
              </p>
              <p className="text-white/50 text-base leading-relaxed mb-8">
                From end-to-end: show rundown creation, topic research, script
                outlining, live recording, editing, and digital promotion. Every
                episode built from scratch with journalistic intent.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Live Broadcasting",
                  "Podcast Production",
                  "Guest Interviews",
                  "Audio Editing",
                  "Show Rundowns",
                  "Digital Promotion",
                ].map((tag, i) => {
                  const accents = ["golden-yellow", "warm-orange", "rich-red"];
                  const color = accents[i % accents.length];
                  return (
                    <span
                      key={tag}
                      className={`text-xs text-white/60 border border-${color}/20 px-3 py-1.5 hover:border-${color} hover:text-${color} transition-colors`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-72 h-72 bg-white/5 border border-[#C28B30]/20 flex items-center justify-center p-8">
                <Image
                  src="/show-graphic.png"
                  alt="The Mekhi Carter Show"
                  fill
                  className="object-contain p-6"
                  sizes="288px"
                />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 gold-border-animate" />
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/10 pt-12">
            {[
              { label: "Format", value: "Live Radio + Podcast" },
              { label: "Station", value: "WMCX 88.9 FM" },
              { label: "Period", value: "Feb 2022 – Jan 2024" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-bold text-white text-xl">{item.value}</p>
                <p className="text-white/40 text-xs tracking-widest uppercase mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUDIO & SOUNDSCAPING ── */}
      <section id="audio" className="py-24 bg-[#0E2A3A] border-b-2 border-[#E9E2BC]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="section-label">Audio · Soundscaping</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Spatial Audio & Dolby Atmos
          </h2>
          <div className="divider-cream mb-14" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
            {/* Audio Player Card */}
            <div className="bg-[#0D2235] border border-[#C28B30]/30 overflow-hidden shadow-2xl shadow-black/50 p-8 hover:border-[#C28B30]/60 transition-colors">
              <div className="flex flex-col gap-6">
                {/* Cover Art */}
                <div className="aspect-square bg-white/5 border border-[#C28B30]/20 overflow-hidden relative">
                  <Image
                    src="/mekhis-big-break-cover.png"
                    alt="Mekhi's Big Break - Audio Project Cover"
                    fill
                    className="object-cover"
                    sizes="100%"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2235]/60 to-transparent" />
                </div>

                {/* Audio Player */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Mekhi&apos;s Big Break
                  </h3>
                  <p className="text-[#C28B30] text-sm font-medium mb-6">
                    Spatial Audio · Dolby Atmos Exercise
                  </p>

                  <audio
                    controls
                    className="w-full mb-6 focus:outline-none"
                    style={{
                      filter: "brightness(1.1)",
                    }}
                  >
                    <source src="/mekhis-big-break.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>

                  <div className="text-xs text-white/50 tracking-widest uppercase">
                    Audio Length · 2:14
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[#C28B30] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                  Audio Production · Sound Design
                </p>
                <h3 className="font-display text-3xl font-bold text-white mb-6">
                  Advanced Soundscaping Exercise
                </h3>

                <div className="space-y-4 text-white/70 text-base leading-relaxed">
                  <p>
                    I developed this project as a specialized exercise in advanced soundscaping and Dolby Atmos spatial mixing. The goal was to build a fully immersive audio environment—from the subtle atmosphere of a D.C. neighborhood to the localized textures of a steaming soul food dinner—that brings these animated characters to life solely through sound.
                  </p>

                  <div className="bg-[#0D2235]/60 border border-white/10 p-5 rounded text-sm text-white/60 italic">
                    Note: This project was created strictly for educational and portfolio purposes. I do not own the rights to the music featured in this clip; it is utilized here to demonstrate sound placement, leveling, and environmental integration within a complex audio soundstage.
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Spatial Audio Design", "Dolby Atmos", "Immersive Mix", "Sound Design", "Educational"].map((tag, i) => {
                  const accents = ["golden-yellow", "warm-orange", "rich-red"];
                  const color = accents[i % accents.length];
                  return (
                    <span
                      key={tag}
                      className={`text-xs text-white/70 border border-${color}/25 px-3 py-1.5 hover:border-${color} hover:text-${color} transition-colors`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>

              <div className="bg-[#0D2235]/60 border border-white/10 p-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-2">Skills Demonstrated</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['Sound Placement', 'Spatial Mixing', 'Foley Design', 'Level Balancing', 'Environmental Design', 'Audio Integration'].map((skill, i) => {
                      const accents = ['golden-yellow','warm-orange','rich-red'];
                      const color = accents[i % accents.length];
                      return (
                        <span key={skill} className="text-xs text-white/60 flex items-center gap-2">
                          <span className={`w-1 h-1 bg-${color} rounded-full`} />
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Audio Tracks */}
          <div>
            <p className="text-golden-yellow text-xs font-semibold tracking-[0.2em] uppercase mb-8">
              Other Audio Projects
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Conversations with Carter */}
              <div className="bg-[#0D2235] border border-[#C28B30]/30 overflow-hidden p-6 hover:border-[#C28B30]/60 transition-colors">
                <div className="flex gap-5">
                  <div className="w-24 h-24 flex-shrink-0 bg-white/5 border border-[#C28B30]/20 overflow-hidden relative">
                    <Image
                      src="/conversations-with-carter-cover.jpg"
                      alt="Conversations with Carter"
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-white mb-1">Conversations with Carter</h3>
                    <p className="text-[#C28B30] text-xs font-medium mb-4">Interview Series</p>
                    <audio controls className="w-full text-xs" style={{ filter: "brightness(1.1)" }}>
                      <source src="/carter-conversations.wav" type="audio/wav" />
                    </audio>
                  </div>
                </div>
              </div>

              {/* Drake Review */}
              <div className="bg-[#0D2235] border border-[#B87D28]/30 overflow-hidden p-6 hover:border-[#B87D28]/60 transition-colors">
                <div className="flex gap-5">
                  <div className="w-24 h-24 flex-shrink-0 bg-white/5 border border-[#B87D28]/20 overflow-hidden relative">
                    <Image
                      src="/show-graphic.png"
                      alt="Drake Review"
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-white mb-1">Drake Review</h3>
                    <p className="text-[#B87D28] text-xs font-medium mb-4">Music Commentary</p>
                    <audio controls className="w-full text-xs" style={{ filter: "brightness(1.1)" }}>
                      <source src="/drakereview.wav" type="audio/wav" />
                    </audio>
                  </div>
                </div>
              </div>

              {/* Radio News Ad */}
              <div className="bg-[#0D2235] border border-[#C53A32]/30 overflow-hidden p-6 hover:border-[#C53A32]/60 transition-colors">
                <div className="flex gap-5">
                  <div className="w-24 h-24 flex-shrink-0 bg-white/5 border border-[#C53A32]/20 overflow-hidden relative">
                    <Image
                      src="/show-graphic.png"
                      alt="Radio News Ad"
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-white mb-1">Radio News Ad</h3>
                    <p className="text-[#C53A32] text-xs font-medium mb-4">Broadcast Production</p>
                    <audio controls className="w-full text-xs" style={{ filter: "brightness(1.1)" }}>
                      <source src="/radionewsad.mp3" type="audio/mpeg" />
                    </audio>
                  </div>
                </div>
              </div>

              {/* College PSA */}
              <div className="bg-[#0D2235] border border-[#E9E2BC]/30 overflow-hidden p-6 hover:border-[#E9E2BC]/60 transition-colors">
                <div className="flex gap-5">
                  <div className="w-24 h-24 flex-shrink-0 bg-white/5 border border-[#E9E2BC]/20 overflow-hidden flex items-center justify-center">
                    <span className="text-[#E9E2BC]/50 text-3xl font-bold font-display">PSA</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-white mb-1">College PSA</h3>
                    <p className="text-[#E9E2BC] text-xs font-medium mb-4">Public Service Announcement</p>
                    <audio controls className="w-full text-xs" style={{ filter: "brightness(1.1)" }}>
                      <source src="/college-psa.m4a" type="audio/mp4" />
                    </audio>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTION WORK ── */}
      <section id="production" className="py-24 bg-cream border-b-2 border-[#B87D28]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="section-label">Production</p>
          <h2 className="font-display text-4xl font-bold text-ink mt-2 mb-4">
            Production &amp; Show Work
          </h2>
          <div className="divider-orange mb-14" />

          <div className="space-y-8">
            {productionWork.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-100 hover:border-[#C28B30]/30 hover:shadow-lg transition-all p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold tracking-widest uppercase text-[#C28B30] bg-[#C28B30]/10 px-3 py-1">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-ink">{item.show}</h3>
                    <p className="text-gray-500 text-sm mt-1">{item.org}</p>
                    <p className="text-[#C28B30] text-sm font-medium">{item.role}</p>
                    <p className="text-gray-400 text-xs mt-2">{item.period} · {item.location}</p>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed md:max-w-sm">{item.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-100">
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
                      Key Responsibilities
                    </p>
                    <ul className="space-y-2">
                      {item.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-[#C28B30] font-bold mt-0.5">—</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
                      Skills Applied
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => {
                        const accents = ["#C28B30", "#B87D28", "#C53A32"];
                        const color = accents[i % accents.length];
                        return (
                          <span
                            key={skill}
                            className="text-xs text-ink border border-gray-200 px-3 py-1.5 transition-colors"
                            style={{ borderLeftColor: color, borderLeftWidth: "2px" }}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WRITING PORTFOLIO ── */}
      <section id="writing" className="py-24 bg-white border-b-2 border-[#C53A32]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="section-label">Writing</p>
          <h2 className="font-display text-4xl font-bold text-ink mt-2 mb-4">
            Writing Portfolio
          </h2>
          <div className="divider-burgundy mb-8" />
          <p className="text-gray-500 text-base mb-14 max-w-xl">
            Scripts, news articles, rundowns, and editorial work — each piece
            written with broadcast clarity and journalistic rigor.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {writingCategories.map((cat) => (
              <div
                key={cat.type}
                className="bg-cream border border-gray-100 p-8 hover:border-[#C28B30]/30 transition-colors"
              >
                <h3 className="font-display text-xl font-bold text-ink mb-2">{cat.type}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{cat.description}</p>
                {cat.placeholder ? (
                  <div className="border border-dashed border-gray-200 p-6 flex flex-col items-center text-center gap-2">
                    <p className="text-gray-400 text-xs">Samples coming soon</p>
                    <p className="text-gray-300 text-xs">PDF links will appear here</p>
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {cat.items.map((item) => (
                      <li key={item.title} className="border-b border-gray-100 pb-3 last:border-0">
                        <p className="font-medium text-ink text-sm">{item.title}</p>
                        <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.summary}</p>
                        {item.link && (
                          <a href={item.link} target="_blank" rel="noopener noreferrer"
                            className="text-[#C28B30] text-xs font-medium mt-2 inline-flex items-center gap-1 hover:underline">
                            View <ExternalLink size={10} />
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#0D2235]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Want to work together?
            </h2>
            <p className="text-white/50 mt-2">
              Open to reporting, production, and storytelling opportunities.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link href="/contact" className="btn-primary">
              Get In Touch <ArrowRight size={16} />
            </Link>
            <Link href="/resume" className="btn-outline">
              View Resume <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
