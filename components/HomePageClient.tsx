"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import TikTokFeedBg from "@/components/TikTokFeedBg";
import BroadcastLowerThird from "@/components/BroadcastLowerThird";
import ScrollReveal from "@/components/ScrollReveal";
import NewsTicker from "@/components/NewsTicker";
import CinematicImageDivider from "@/components/CinematicImageDivider";
import FloatingProductionImage from "@/components/FloatingProductionImage";
import ViewportCutaway from "@/components/ViewportCutaway";

/* ── Icons ── */
const LinkedinIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
);

/* ── Data ── */
const credentials = [
  { outlet: "Lionsgate | Debmar-Mercury", role: "Production Assistant Intern", show: "Sherri", accent: "#C28B30" },
  { outlet: "The New York Post", role: "Editorial Assistant", show: "Page Six", accent: "#C53A32" },
  { outlet: "Alpha Phi Alpha", role: "Chapter President", show: "Sigma Xi Chapter", accent: "#B87D28" },
  { outlet: "Monmouth University", role: "B.A. Communications", show: "May 2026", accent: "#C28B30" },
  { outlet: "WMCX 88.9 FM", role: "Radio Personality & Podcaster", show: "Monmouth University Station", accent: "#C53A32" },
];

const workPreviews = [
  {
    category: "Documentary",
    title: "Diddy Documentary",
    role: "Journalist & Producer",
    description: "An independent documentary investigation into the Sean 'Diddy' Combs legal controversy — researched, produced, and presented by Mekhi Carter.",
    outlet: "YouTube",
    href: "/work#video",
    featured: true,
    accent: "#C28B30",
  },
  {
    category: "Production",
    title: "Sherri — Live Talk Show",
    role: "Production Assistant Intern",
    description: "Day-to-day production operations for a nationally syndicated talk show. Guest logistics, segment pitching, and live show execution.",
    outlet: "Lionsgate | Debmar-Mercury",
    href: "/work#production",
    featured: false,
    accent: "#B87D28",
  },
  {
    category: "Field Reporting",
    title: "Page Six — High-Profile Entertainment",
    role: "Editorial Assistant",
    description: "On-site field reporting for Page Six, including coverage of the Uncle Luke / Freaknik (Hulu) promotional campaign.",
    outlet: "The New York Post",
    href: "/work#production",
    featured: false,
    accent: "#C53A32",
  },
];

const stats = [
  { number: "2+", label: "Years in Production", color: "#C28B30" },
  { number: "NYC", label: "Newsroom Experience", color: "#C53A32" },
  { number: "88.9", label: "FM — Live Radio Host", color: "#B87D28" },
  { number: "22", label: "Colleges Accepted", color: "#C28B30" },
];

export default function HomePageClient() {
  const shouldReduce = useReducedMotion();

  return (
    <>
      {/* ── HERO "YOU'RE LIVE" ── */}
      <section className="relative min-h-screen bg-[#0D2235] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0D2235] to-[#07111B]" />

        {/* Blurred production still — subtle newsroom texture at very low opacity */}
        <div className="absolute inset-0 scale-110 overflow-hidden opacity-[0.055]">
          <Image
            src="/dsc01422.jpg"
            alt=""
            fill
            className="object-cover object-top blur-[18px]"
            aria-hidden
            priority={false}
          />
        </div>

        {/* TikTok feed background */}
        <TikTokFeedBg />

        {/* Noise overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025] broadcast-noise"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Gold left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 gold-border-animate" />

        {/* CHANNEL indicator — top left corner */}
        <m.div
          className="absolute top-24 left-6 lg:left-12 z-10"
          initial={shouldReduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C53A32] rec-dot" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase">CH-01</span>
          </div>
        </m.div>

        {/* Corner brackets — top right */}
        <m.div
          className="absolute top-24 right-6 lg:right-12 z-10 hidden md:block"
          initial={shouldReduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-center gap-3 text-white/20">
            <span className="text-[10px] font-mono tracking-widest uppercase">SIGNAL LOCK</span>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#C28B30]/60">HD</span>
          </div>
        </m.div>

        {/* Main content grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — Lower Third + CTAs */}
            <div className="order-2 lg:order-1">
              <ScrollReveal delay={0.05}>
                <p className="section-label mb-6">Television Journalist · Media Producer</p>
              </ScrollReveal>

              <BroadcastLowerThird
                name="MEKHI"
                title="CARTER — Community Storyteller"
                outlet="Sherri · Page Six"
                delay={0.2}
              />

              {/* Divider */}
              <m.div
                className="w-12 h-0.5 bg-[#C28B30] my-8"
                initial={shouldReduce ? false : { scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              />

              <ScrollReveal delay={0.9}>
                <p className="text-white/60 text-lg leading-relaxed max-w-md">
                  I&apos;m a television journalist and media producer from Millville, NJ
                  — driven by a commitment to telling the stories that matter most to
                  underrepresented communities.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={1.1} className="flex flex-wrap gap-4 mt-10">
                <Link href="/work" className="btn-primary" data-cursor="hover-link">
                  View My Work <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-outline" data-cursor="hover-link">
                  Get In Touch <ArrowRight size={16} />
                </Link>
              </ScrollReveal>

              {/* Social links */}
              <ScrollReveal delay={1.2} className="flex items-center gap-6 mt-10">
                <a
                  href="https://www.linkedin.com/in/mekhi-carter/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-[#C28B30] transition-colors"
                  aria-label="LinkedIn"
                  data-cursor="hover-link"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href="https://www.tiktok.com/@mekhicarterlivenews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-[#C28B30] transition-colors"
                  aria-label="TikTok"
                  data-cursor="hover-link"
                >
                  <TikTokIcon />
                </a>
                <span className="text-white/20 text-xs tracking-widest uppercase">Community Storyteller</span>
              </ScrollReveal>
            </div>

            {/* Right — Photo with broadcast frame */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <ScrollReveal delay={0.4} direction="none">
                <div className="relative">
                  {/* Broadcast frame corner accents */}
                  <div className="absolute -inset-6 z-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C28B30]/60" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C28B30]/60" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C28B30]/60" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C28B30]/60" />
                  </div>

                  {/* Animated rings */}
                  <m.div
                    className="absolute -inset-3 rounded-full border border-[#C28B30]/30"
                    animate={shouldReduce ? {} : { rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute -inset-7 rounded-full border border-[#C28B30]/10" />

                  {/* Photo */}
                  <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-[#C28B30]/50 shadow-2xl shadow-black/60">
                    <Image
                      src="/profile-picture.png"
                      alt="Mekhi Carter — Television Journalist & Media Producer"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 768px) 288px, 384px"
                    />
                    {/* Subtle vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D2235]/30 to-transparent" />
                  </div>

                  {/* Floating badge */}
                  <m.div
                    className="absolute -bottom-4 -left-4 bg-[#C28B30] text-[#0D2235] px-4 py-2 text-xs font-bold tracking-widest uppercase shadow-lg"
                    initial={shouldReduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.4 }}
                  >
                    Sherri · Page Six
                  </m.div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <m.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
          animate={shouldReduce ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-0.5 h-8 bg-white/20" />
        </m.div>
      </section>

      {/* ── NEWS TICKER ── */}
      <NewsTicker />

      {/* ── CREDENTIAL STRIP ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <ScrollReveal>
            <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-8">
              Experience &amp; Credentials
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {credentials.map((cred, i) => (
              <ScrollReveal key={cred.outlet} delay={i * 0.08}>
                <m.div
                  className="flex flex-col items-center text-center gap-1 p-4 hover:bg-[#EEF2F8] transition-colors border-t-2"
                  style={{ borderTopColor: cred.accent }}
                  whileHover={shouldReduce ? {} : { y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="font-semibold text-ink text-sm leading-tight">{cred.outlet}</p>
                  <p className="text-xs font-medium" style={{ color: cred.accent }}>{cred.show}</p>
                  <p className="text-gray-400 text-xs">{cred.role}</p>
                </m.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CINEMATIC DIVIDER — ABC News field trip ── */}
      <CinematicImageDivider
        src="/abc-news-photo.jpg"
        alt="Mekhi Carter at the ABC News Philadelphia anchor desk"
        caption="ABC News Philadelphia"
        role="Field Training · The Spark That Started It All"
        outlet="Age 15 → Now"
        height="52vh"
      />

      {/* ── DOCUMENTARY SPOTLIGHT ── */}
      <section className="py-0 bg-[#0E2A3A] relative overflow-hidden border-b-2 border-[#C53A32]/20">
        <div className="absolute top-0 left-0 right-0 h-0.5 gold-border-animate" />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 gold-border-animate" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #C28B30 0%, transparent 60%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 bg-[#C28B30] text-[#0D2235] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 mb-5">
                  <span className="w-1.5 h-1.5 bg-[#0D2235] rounded-full animate-pulse" />
                  Featured Work · Spotlight
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">Diddy Documentary</h2>
                <p className="text-[#C28B30] text-sm font-medium tracking-widest uppercase mt-2">Documentary Journalism · Investigative Reporting</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Link href="/work#video" className="text-sm font-semibold tracking-widest uppercase text-[#C28B30]/70 hover:text-[#C28B30] flex items-center gap-2 transition-colors shrink-0" data-cursor="hover-link">
                All Work <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <ScrollReveal className="lg:col-span-3" direction="left">
              <div className="relative aspect-video bg-[#0D2235] border border-[#C28B30]/30 overflow-hidden group shadow-2xl shadow-black/40" data-cursor="hover-video">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#C28B30] z-10" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#C28B30] z-10" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#C28B30] z-10" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#C28B30] z-10" />
                <iframe
                  src="https://www.youtube.com/embed/8Wij-Gz292A?rel=0&modestbranding=1"
                  title="Diddy Documentary — Mekhi Carter"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-2 flex flex-col justify-center gap-6" direction="right" delay={0.15}>
              <div>
                <div className="w-8 h-0.5 bg-[#C28B30] mb-5" />
                <p className="text-white/80 text-base leading-relaxed">An independent documentary investigation into the Sean &quot;Diddy&quot; Combs legal controversy — researched, produced, and presented by Mekhi Carter.</p>
                <p className="text-white/50 text-sm leading-relaxed mt-4">Demonstrates long-form investigative storytelling, research methodology, on-camera delivery, and end-to-end documentary production.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Documentary", "Investigative", "On-Camera", "Self-Produced"].map((tag) => (
                  <m.span
                    key={tag}
                    className="text-xs text-[#C28B30]/80 border border-[#C28B30]/30 px-3 py-1.5 transition-colors"
                    whileHover={{ borderColor: "#C28B30", color: "#C28B30" }}
                  >
                    {tag}
                  </m.span>
                ))}
              </div>
              <div className="bg-[#0D2235]/60 border border-white/10 p-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">Role</p>
                <p className="text-white font-semibold">Journalist &amp; Producer</p>
                <p className="text-white/40 text-xs mt-1">Research · Script · On-Camera · Production</p>
              </div>
              <a href="https://www.youtube.com/watch?v=8Wij-Gz292A" target="_blank" rel="noopener noreferrer" className="btn-primary self-start" data-cursor="hover-link">
                Watch on YouTube <ArrowRight size={16} />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── VIEWPORT CUTAWAY — Sherri production floor B-roll ── */}
      <ViewportCutaway
        src="/IMG_0307.jpg"
        alt="Mekhi Carter with Sherri Shepherd on the set of Sherri"
        caption="The Production Floor"
        role="Sherri · Nationally Syndicated · New York, NY"
        outlet="Lionsgate | Debmar-Mercury"
      />

      {/* ── ABOUT TEASER ── */}
      <section className="py-24 bg-cream border-b-2 border-[#C53A32]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Text — 5 of 12 cols */}
            <div className="lg:col-span-5">
              <ScrollReveal><p className="section-label">About</p></ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight mt-2">
                  Built for the<br />
                  <em className="text-[#C28B30] not-italic">national stage.</em>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.15}><div className="divider-burgundy my-6" /></ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-gray-600 text-lg leading-relaxed">
                  From a field trip to ABC News Philadelphia at age 15 to a newsroom floor in New York City — every step has been intentional. As a first-generation college student from Millville, NJ, I bring a perspective forged by real community, not just the classroom.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <blockquote className="mt-8 pl-5 border-l-2 border-[#C28B30] italic text-gray-500 text-base">
                  &ldquo;I report stories that amplify communities often unheard.&rdquo;
                </blockquote>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <Link href="/about" className="btn-outline-dark mt-8 inline-flex" data-cursor="hover-link">
                  My Full Story <ArrowRight size={16} />
                </Link>
              </ScrollReveal>
            </div>

            {/* Stats — 4 of 12 cols */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 0.1}>
                  <m.div
                    className="bg-white p-7 border border-gray-100 group"
                    whileHover={shouldReduce ? {} : { borderColor: stat.color + "66", y: -4, transition: { duration: 0.2 } }}
                  >
                    <p className="font-display text-4xl font-bold group-hover:scale-105 transition-transform origin-left" style={{ color: stat.color }}>
                      {stat.number}
                    </p>
                    <p className="text-gray-500 text-sm mt-2 leading-snug">{stat.label}</p>
                  </m.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Floating production image — 3 of 12 cols, desktop only */}
            <div className="hidden lg:flex lg:col-span-3 items-end justify-center pb-2">
              <FloatingProductionImage
                src="/IMG_1561.jpg"
                alt="Mekhi Carter holding an Emmy Award at the Sherri studio"
                caption="Emmy Award"
                role="Sherri · Lionsgate | Debmar-Mercury"
                outlet="New York, NY"
                rotate={-3}
                width={210}
                height={270}
                accentColor="#C28B30"
                delay={0.35}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── WORK PREVIEW ── */}
      <section className="py-24 bg-white border-b-2 border-[#C53A32]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <ScrollReveal>
              <div>
                <p className="section-label">Featured Work</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mt-2">My Work</h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Link href="/work" className="text-sm font-semibold tracking-widest uppercase text-[#C53A32] hover:text-[#A02D27] flex items-center gap-2 transition-colors" data-cursor="hover-link">
                See All Work <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workPreviews.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <m.div
                  className={`group border p-0 transition-all duration-300 block overflow-hidden ${item.featured ? "bg-[#0D2235] border-[#C28B30]/40" : "bg-cream border-gray-100"}`}
                  whileHover={shouldReduce ? {} : { y: -6, boxShadow: `0 20px 40px -10px ${item.accent}30` }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  data-cursor="hover-card"
                >
                  {/* Accent top bar */}
                  <div className="h-0.5 w-full" style={{ backgroundColor: item.accent }} />

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1" style={{ color: item.featured ? "#0D2235" : item.accent, backgroundColor: item.featured ? "#C28B30" : item.accent + "18" }}>
                        {item.category}
                      </span>
                      <m.div whileHover={shouldReduce ? {} : { scale: 1.3, rotate: 15 }} transition={{ duration: 0.2 }}>
                        <Play size={16} className={item.featured ? "text-[#C28B30]/50" : "text-gray-300"} />
                      </m.div>
                    </div>
                    <h3 className={`font-display text-xl font-bold mb-1 transition-colors ${item.featured ? "text-white" : "text-ink"}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs font-medium mb-4 ${item.featured ? "text-white/40" : "text-gray-400"}`}>
                      {item.role} · {item.outlet}
                    </p>
                    <p className={`text-sm leading-relaxed ${item.featured ? "text-white/60" : "text-gray-600"}`}>
                      {item.description}
                    </p>
                    <Link href={item.href} className="flex items-center gap-2 mt-6 text-xs font-semibold tracking-wider uppercase transition-colors" style={{ color: item.featured ? item.accent + "80" : "#9ca3af" }} data-cursor="hover-link">
                      View Details <ArrowRight size={12} />
                    </Link>
                  </div>
                </m.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CINEMATIC DIVIDER — Page Six field reporting ── */}
      <CinematicImageDivider
        src="/IMG_0957.jpg"
        alt="Mekhi Carter at the New York Post holding a Page Six microphone"
        caption="Page Six"
        role="Field Reporting · The New York Post"
        outlet="Uncle Luke / Freaknik (Hulu)"
        height="56vh"
        objectPosition="top"
      />

      {/* ── REEL PLACEHOLDER ── */}
      <section className="py-24 bg-[#0D2235]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal><p className="section-label">Media Reel</p></ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-6">Reel Coming Soon</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}><div className="divider-gold mx-auto mb-8" /></ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/50 max-w-lg mx-auto text-base leading-relaxed mb-10">
              A 60–90 second highlight reel featuring on-camera reporting, production work, and studio segments is currently in production.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25} direction="none">
            <div className="relative max-w-3xl mx-auto aspect-video bg-[#0E2A3A] border border-[#C28B30]/20 flex items-center justify-center" data-cursor="hover-video">
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#C28B30]/30" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#C28B30]/30" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#C28B30]/30" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#C28B30]/30" />
              <div className="flex flex-col items-center gap-4 text-white/30">
                <m.div
                  className="w-16 h-16 rounded-full border-2 border-[#C28B30]/30 flex items-center justify-center"
                  animate={shouldReduce ? {} : { scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Play size={24} className="ml-1 text-[#C28B30]/40" />
                </m.div>
                <p className="text-sm tracking-widest uppercase">Reel in Production</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Link href="/work" className="btn-primary mt-10 inline-flex" data-cursor="hover-link">
              View My Work <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CONNECT ── */}
      <section className="py-24 bg-cream border-t-2 border-[#B87D28]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal><p className="section-label">Connect</p></ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mt-2 leading-tight">
                  Let&apos;s build<br />something together.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.15}><div className="divider-orange my-6" /></ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                  Whether you&apos;re a news director, producer, or collaborator — I&apos;d love to connect.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <Link href="/contact" className="btn-primary mt-8 inline-flex" data-cursor="hover-link">
                  Get In Touch <ArrowRight size={16} />
                </Link>
              </ScrollReveal>
            </div>

            <div className="flex flex-col gap-5">
              {[
                { href: "https://www.linkedin.com/in/mekhi-carter/", label: "LinkedIn", sub: "linkedin.com/in/mekhi-carter", icon: <LinkedinIcon size={24} className="text-[#C28B30]" /> },
                { href: "https://www.tiktok.com/@mekhicarterlivenews", label: "TikTok", sub: "Digital Journalism & Media Commentary", icon: <span className="text-[#C28B30]"><TikTokIcon /></span> },
                { href: "mailto:Mekhic602@gmail.com", label: "Email", sub: "Mekhic602@gmail.com", icon: <span className="text-[#C28B30] text-2xl font-bold leading-none">@</span> },
              ].map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.1}>
                  <m.a
                    href={item.href}
                    target={item.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-5 p-6 bg-white border border-gray-100 transition-all group"
                    whileHover={shouldReduce ? {} : { x: 6, borderColor: "#C28B3066" }}
                    transition={{ duration: 0.2 }}
                    data-cursor="hover-link"
                  >
                    {item.icon}
                    <div>
                      <p className="font-semibold text-ink text-sm">{item.label}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto text-gray-300 group-hover:text-[#C28B30] transition-colors" />
                  </m.a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
