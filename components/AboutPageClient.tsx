"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, GraduationCap, Mic2, Users } from "lucide-react";
import { m } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import AboutTimeline from "./AboutTimeline";
import SkillsDashboard from "./SkillsDashboard";
import FloatingProductionImage from "./FloatingProductionImage";
import CinematicImageDivider from "./CinematicImageDivider";
import ViewportCutaway from "./ViewportCutaway";
import EditorialInlineImage from "./EditorialInlineImage";

const experience = [
  {
    org: "Lionsgate | Debmar-Mercury",
    role: "Production Assistant Intern",
    show: "Sherri — Nationally Syndicated Talk Show",
    period: "January 2026 – Present",
    location: "New York, NY",
    accent: "#C28B30",
    bullets: [
      "Support daily production operations, collaborating with producers, stage managers, and cross-functional teams to execute live and taped segments.",
      "Coordinate guest logistics and talent relations, overseeing green room management, on-air participation cues, and real-time fulfillment of host and production needs during show tapings.",
      "Research, fact-check, and pitch segment ideas for human-interest and lifestyle content, contributing to show rundowns while maintaining editorial accuracy under tight production deadlines.",
    ],
  },
  {
    org: "The New York Post",
    role: "Editorial Assistant",
    show: "Page Six",
    period: "March 2024 – April 2024",
    location: "New York, NY",
    accent: "#B87D28",
    bullets: [
      "Supported on-site reporting for Page Six alongside a senior reporter, covering high-profile entertainment features including an interview with Uncle Luke during the Freaknik (Hulu) promotional campaign.",
      "Assisted with pre-interview research, question development, and field logistics while gaining hands-on experience in real-time editorial decision-making.",
      "Contributed to field production operations by assisting with talent coordination, release confirmations, and asset gathering (video, soundbites, photos) for multi-platform distribution.",
    ],
  },
  {
    org: "WMCX 88.9 FM",
    role: "Radio Personality & Podcaster",
    show: "Monmouth University Station",
    period: "February 2022 – January 2024",
    location: "West Long Branch, NJ",
    accent: "#C53A32",
    bullets: [
      "Hosted live weekly radio broadcasts and podcast episodes, operating professional studio equipment (audio boards, mics, editing software) while delivering engaging, unscripted on-air content.",
      "Produced and conducted interviews with campus leaders and community voices, developing research-driven segments on student life, culture, and national issues.",
      "Led end-to-end content production including show rundown creation, topic research, script outlining, recording, editing, and digital promotion.",
    ],
  },
];

const leadership = [
  {
    org: "Alpha Phi Alpha Fraternity, Inc.",
    chapter: "Sigma Xi Chapter",
    role: "Chapter President",
    period: "March 2025 – Present",
    location: "West Long Branch, NJ",
    bullets: [
      "Lead chapter operations and strategic planning, overseeing programming, member development, and organizational governance.",
      "Coordinate campus and community initiatives including mentorship programs, service projects, and external partnerships to strengthen chapter impact and visibility.",
    ],
  },
  {
    org: "Model United Nations Team",
    chapter: "Monmouth University",
    role: "Delegate",
    period: "September 2023 – August 2024",
    location: "West Long Branch, NJ",
    bullets: [
      "Selected member of the university Model United Nations team, representing the institution at the Harvard National Model United Nations Conference.",
      "Conducted policy research, drafted position papers, and engaged in formal debate, demonstrating leadership, diplomacy, and public speaking skills in a competitive international setting.",
    ],
  },
];

const fastFacts = [
  { icon: MapPin, label: "Hometown", value: "Millville, NJ", color: "#B87D28", border: "#B87D28" },
  { icon: GraduationCap, label: "University", value: "Monmouth University", color: "#C28B30", border: "#C28B30" },
  { icon: Users, label: "Chapter President", value: "Alpha Phi Alpha", color: "#C53A32", border: "#C53A32" },
  { icon: Mic2, label: "On-Air Since", value: "2022", color: "#B87D28", border: "#B87D28" },
];

export default function AboutPageClient() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="relative bg-[#0D2235] pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D2235] via-[#0E2A3A] to-[#0D2235]" />
        <div className="absolute left-0 top-0 bottom-0 w-1 gold-border-animate" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <ScrollReveal direction="left">
              <p className="section-label">About Mekhi</p>
              <h1 className="font-display text-6xl md:text-7xl font-bold text-white leading-none mt-3">
                The Story
                <br />
                <span className="text-[#C28B30]">Behind The Work</span>
              </h1>
              <div className="w-12 h-0.5 bg-[#C28B30] mt-8 mb-6" />
              <p className="text-white/60 text-lg leading-relaxed max-w-md">
                First-generation college student. Community journalist. Born in
                Millville, NJ. Built for the national stage.
              </p>
            </ScrollReveal>

            {/* Profile photo */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 md:w-80 md:h-80" data-cursor="hover-card">
                  <div className="absolute -inset-2 border border-[#C28B30]/30" />
                  <Image
                    src="/profile-picture.png"
                    alt="Mekhi Carter"
                    fill
                    className="object-cover object-top rounded-full"
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FAST FACTS ── */}
      <section className="py-16 bg-cream border-y-2 border-[#B87D28]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {fastFacts.map((fact, i) => (
              <ScrollReveal key={fact.label} direction="up" delay={i * 0.08}>
                <m.div
                  className="bg-white p-6 border border-gray-100 flex flex-col items-center text-center gap-3 transition-colors"
                  whileHover={{ borderColor: fact.border + "66", y: -2 }}
                  transition={{ duration: 0.2 }}
                  data-cursor="hover-card"
                >
                  <fact.icon size={22} style={{ color: fact.color }} />
                  <p className="font-bold text-ink text-sm">{fact.value}</p>
                  <p className="text-gray-400 text-xs tracking-wider uppercase">{fact.label}</p>
                </m.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIEWPORT CUTAWAY — Emmy award B-roll ── */}
      <ViewportCutaway
        src="/IMG_1561.jpg"
        alt="Mekhi Carter holding an Emmy Award at the Sherri studio"
        caption="Emmy Award"
        role="From Field Trip to Production Floor"
        outlet="Sherri · Lionsgate | Debmar-Mercury"
      />

      {/* ── ORIGIN STORY ── */}
      <section className="py-24 bg-white overflow-visible">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Desktop: 3-col text + 2-col editorial image stack */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-10 items-start">

            <ScrollReveal direction="left" className="lg:col-span-3">
              <p className="section-label">The Beginning</p>
              <h2 className="font-display text-4xl font-bold text-ink mt-2 mb-6">
                It Started at 15
              </h2>
              <div className="divider-gold mb-8" />

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  A field trip to ABC News Philadelphia at age 15 lit the spark. Standing
                  in a real newsroom — seeing anchors, cameras, and the machinery of
                  storytelling — made everything clear. This was what he was meant to do.
                </p>
                <p>
                  Growing up in Millville, NJ, a city often overlooked by the media it
                  deserves, Mekhi developed an early understanding of what it means for a
                  community to go unheard. That experience didn&apos;t become a chip on his
                  shoulder — it became his mission.
                </p>

                <blockquote className="pl-6 border-l-4 border-[#C28B30] italic text-2xl font-display text-ink leading-snug my-10">
                  &ldquo;I report stories that amplify communities often unheard.&rdquo;
                </blockquote>

                <p>
                  As a first-generation college student, Mekhi was accepted to 22 colleges
                  before choosing Monmouth University to pursue a B.A. in Communications
                  (Media Studies &amp; Production). Since arriving, he&apos;s turned
                  academic opportunity into real-world experience — from the production
                  floor of a nationally syndicated talk show to the streets of New York
                  City covering celebrity news for Page Six.
                </p>
              </div>
            </ScrollReveal>

            {/* Desktop: storyboard-wall of two editorial stills, bleeding right */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-start gap-10 pt-2">
              {/* ABC News — the origin */}
              <EditorialInlineImage
                src="/abc-news-photo.jpg"
                alt="Mekhi Carter at the ABC News Philadelphia anchor desk"
                caption="ABC News Philadelphia"
                role="Field Training · Age 15"
                outlet="The Spark That Started It All"
                align="right"
                breakout={80}
                rotate={2}
                width={290}
                height={370}
                delay={0.2}
              />
              {/* NY Post — the destination */}
              <EditorialInlineImage
                src="/IMG_0957.jpg"
                alt="Mekhi Carter at the New York Post holding a Page Six microphone"
                caption="Page Six"
                role="Field Reporting · New York Post"
                outlet="Uncle Luke / Freaknik (Hulu)"
                align="right"
                breakout={48}
                rotate={-1.5}
                width={260}
                height={338}
                accentColor="#C53A32"
                delay={0.42}
              />
            </div>

            {/* Mobile: single floating image below text */}
            <div className="lg:hidden flex justify-center mt-8">
              <FloatingProductionImage
                src="/abc-news-photo.jpg"
                alt="Mekhi Carter at the ABC News Philadelphia anchor desk"
                caption="ABC News Philadelphia"
                role="Field Training · Age 15"
                outlet="The Spark That Started It All"
                rotate={2}
                width={280}
                height={360}
                delay={0.2}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── EXPERIENCE TIMELINE ── */}
      <section className="py-24 bg-[#0D2235]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="section-label">Media Experience</p>
            <h2 className="font-display text-4xl font-bold text-white mt-2 mb-14">
              Where I&apos;ve Worked
            </h2>
          </ScrollReveal>

          <AboutTimeline items={experience} />
        </div>
      </section>

      {/* ── CINEMATIC DIVIDER — Sherri production floor ── */}
      <CinematicImageDivider
        src="/IMG_0307.jpg"
        alt="Mekhi Carter with Sherri Shepherd on the set of Sherri"
        caption="On Set — Sherri"
        role="Production Assistant Intern · Lionsgate | Debmar-Mercury"
        outlet="Nationally Syndicated · New York, NY"
        height="52vh"
        objectPosition="top"
      />

      {/* ── LEADERSHIP ── */}
      <section className="py-24 bg-cream border-b-2 border-[#C53A32]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start mb-14">
            <ScrollReveal direction="left" className="lg:col-span-2">
              <p className="section-label">Leadership</p>
              <h2 className="font-display text-4xl font-bold text-ink mt-2 mb-4">
                Beyond The Newsroom
              </h2>
              <div className="divider-burgundy" />
            </ScrollReveal>

            {/* Leadership photo — cinematic floating image */}
            <div className="flex justify-center lg:justify-end">
              <FloatingProductionImage
                src="/dsc01422.jpg"
                alt="Mekhi Carter — Alpha Phi Alpha Chapter President"
                caption="Chapter President"
                role="Alpha Phi Alpha · Sigma Xi Chapter"
                outlet="West Long Branch, NJ"
                rotate={3}
                width={224}
                height={292}
                accentColor="#C53A32"
                delay={0.2}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((item, i) => (
              <ScrollReveal key={item.org} direction="up" delay={i * 0.15}>
                <m.div
                  className="bg-white p-8 border border-gray-100 hover:shadow-md transition-all"
                  whileHover={{ borderColor: "#C53A3240", y: -2 }}
                  data-cursor="hover-card"
                >
                  <p className="font-bold text-ink text-lg">{item.org}</p>
                  <p className="text-[#C53A32] text-sm font-medium mt-1">{item.chapter}</p>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                  <p className="text-gray-400 text-xs mt-2 mb-5">
                    {item.period} · {item.location}
                  </p>
                  <ul className="space-y-3">
                    {item.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                        <span className="text-[#C53A32] font-bold mt-0.5 shrink-0">—</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </m.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS DASHBOARD ── */}
      <section className="py-24 bg-[#0D2235] border-b-2 border-[#C53A32]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="section-label">Skills</p>
            <h2 className="font-display text-4xl font-bold text-white mt-2 mb-4">
              What I Bring to the Table
            </h2>
            <div className="divider-burgundy mb-12" />
          </ScrollReveal>

          <SkillsDashboard />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-white border-t-2 border-[#C53A32]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <ScrollReveal direction="left">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
              Ready to see the work?
            </h2>
            <p className="text-gray-500 mt-2">
              Browse clips, production experience, and writing samples.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.1}>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link href="/work" className="btn-primary" data-cursor="hover-link">
                My Work <ArrowRight size={16} />
              </Link>
              <Link href="/resume" className="btn-outline-dark" data-cursor="hover-link">
                View Resume <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
