"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Download, ArrowLeft, Mail, MapPin, ArrowRight } from "lucide-react";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const experiences = [
  {
    id: "sherri",
    org: "Lionsgate | Debmar-Mercury",
    show: "Sherri",
    role: "Production Assistant Intern",
    period: "January 2026 – Present",
    location: "New York, NY",
    current: true,
    bullets: [
      "Support daily production operations for nationally syndicated talk show Sherri, collaborating with producers, stage managers, and cross-functional teams to execute live and taped segments.",
      "Coordinate guest logistics and talent relations, overseeing green room management, on-air participation cues, and real-time fulfillment of host and production needs during show tapings.",
      "Research, fact-check, and pitch segment ideas for human-interest and lifestyle content, contributing to show rundowns while maintaining editorial accuracy under tight production deadlines.",
    ],
  },
  {
    id: "pagesix",
    org: "The New York Post",
    show: "Page Six",
    role: "Editorial Assistant",
    period: "March 2024 – April 2024",
    location: "New York, NY",
    current: false,
    bullets: [
      "Supported on-site reporting for Page Six alongside senior reporter, contributing to coverage of high-profile entertainment features, including an interview with Uncle Luke during promotion for Freaknik (Hulu).",
      "Assisted with pre-interview research, question development, and field logistics while gaining hands-on experience in real-time editorial decision-making within a fast-paced celebrity news environment.",
      "Contributed to field production operations by assisting with talent coordination, release confirmations, and asset gathering (video, soundbites, photos) for multi-platform distribution under tight editorial deadlines.",
    ],
  },
  {
    id: "wmcx",
    org: "WMCX 88.9 FM",
    show: "Monmouth University Station",
    role: "Radio Personality / Podcaster",
    period: "February 2022 – January 2024",
    location: "West Long Branch, NJ",
    current: false,
    bullets: [
      "Hosted live weekly radio broadcasts and podcast episodes, operating professional studio equipment (audio boards, mics, editing software) while delivering engaging, unscripted on-air content.",
      "Produced and conducted interviews with campus leaders and community voices, developing research-driven segments on student life, culture, and national issues.",
      "Led end-to-end content production, including show rundown creation, topic research, script outlining, recording, editing, and digital promotion to grow listener engagement.",
    ],
  },
];

const leadership = [
  {
    org: "Alpha Phi Alpha Fraternity, Inc., Sigma Xi Chapter",
    role: "Chapter President",
    period: "March 2025 – Present",
    location: "West Long Branch, NJ",
    bullets: [
      "Lead chapter operations and strategic planning, overseeing programming, member development, and organizational governance.",
      "Coordinate campus and community initiatives, including mentorship, service projects, and external partnerships to strengthen chapter impact and visibility.",
    ],
  },
  {
    org: "Model United Nations Team",
    role: "Delegate",
    period: "September 2023 – August 2024",
    location: "West Long Branch, NJ",
    bullets: [
      "Selected member of the university Model United Nations team, representing the institution at the Harvard National Model United Nations Conference.",
      "Conducted policy research, drafted position papers, and engaged in formal debate, demonstrating leadership, diplomacy, and public speaking skills in a competitive international setting.",
    ],
  },
];

const skills = [
  "Talent & Guest Coordination",
  "Segment Development & Pitching",
  "Live Broadcast & Studio Production",
  "Rundown Creation & Show Formatting",
  "Avid News Cutter Editing",
  "Script Coverage & Editorial Analysis",
  "DV Camera Operation",
  "Digital Content Strategy",
  "Real-Time Production Problem Solving",
  "Field Production & Logistics",
  "Pre-Interview Research",
  "Multi-Platform Asset Gathering",
];

const navSections = [
  { id: "experience", label: "Experience" },
  { id: "leadership", label: "Leadership" },
  { id: "skills", label: "Skills" },
];

// Hook: reveal element when it enters the viewport
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal-card ${className}`}
    >
      {children}
    </div>
  );
}

export default function ResumeClient() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("experience");
  const [showPDF, setShowPDF] = useState(false);

  // Reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ── Reading Progress Bar ── */}
      <div
        className="fixed top-0 left-0 z-[100] h-0.5 bg-[#C28B30] transition-all duration-75 shadow-[0_0_8px_#C28B3080]"
        style={{ width: `${progress}%` }}
      />

      {/* ── Sticky Top Bar ── */}
      <div className="sticky top-0 z-50 bg-[#0D2235]/95 backdrop-blur-sm border-b border-white/10 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/about"
              className="flex items-center gap-1.5 text-white/40 hover:text-[#C28B30] text-xs tracking-widest uppercase transition-colors"
            >
              <ArrowLeft size={12} /> Back
            </Link>
            <span className="text-white/20">|</span>
            <span className="font-display font-bold text-white text-sm tracking-wide">
              MEKHI A. CARTER
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowPDF((v) => !v)}
              className="text-xs text-white/50 hover:text-white border border-white/20 hover:border-white/40 px-3 py-1.5 tracking-wider uppercase transition-all hidden sm:block"
            >
              {showPDF ? "View Styled" : "View PDF"}
            </button>
            <a
              href="/resume.pdf"
              download="Mekhi_Carter_Resume_2026.pdf"
              className="btn-primary py-2 text-xs"
            >
              <Download size={13} /> Download PDF
            </a>
          </div>
        </div>
      </div>

      {showPDF ? (
        /* ── PDF Iframe View ── */
        <div className="bg-[#0E2A3A] min-h-screen py-6">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-white shadow-2xl shadow-black/40">
              <iframe
                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
                className="w-full"
                style={{ height: "88vh", minHeight: "800px" }}
                title="Mekhi Carter Resume PDF"
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* ── Hero ── */}
          <section className="bg-[#0D2235] pt-12 pb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D2235] via-[#0E2A3A] to-[#0D2235]" />
            <div className="absolute bottom-0 left-0 right-0 h-px gold-border-animate" />
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent, transparent 79px, #C28B30 79px, #C28B30 80px)",
              }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
              <div className="max-w-3xl">
                <p className="text-[#C28B30] text-xs font-semibold tracking-[0.25em] uppercase mb-5 flex items-center gap-3">
                  <span className="w-8 h-0.5 bg-[#C28B30]" />
                  Curriculum Vitae
                </p>
                <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-none mb-4">
                  MEKHI A.<br />
                  <span className="text-[#C28B30]">CARTER</span>
                </h1>
                <p className="text-white/60 text-lg mb-8 tracking-wide">
                  Television Journalist · Media Producer · Community Storyteller
                </p>

                {/* Contact row */}
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                  <a
                    href="mailto:Mekhic602@gmail.com"
                    className="flex items-center gap-2 text-white/50 hover:text-[#C28B30] text-sm transition-colors group"
                  >
                    <Mail size={14} className="group-hover:text-[#C28B30]" />
                    Mekhic602@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mekhi-carter/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/50 hover:text-[#C28B30] text-sm transition-colors group"
                  >
                    <LinkedInIcon />
                    linkedin.com/in/mekhi-carter
                  </a>
                  <span className="flex items-center gap-2 text-white/50 text-sm">
                    <MapPin size={14} />
                    New York / New Jersey Area
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ── Main Content ── */}
          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-12 py-16">

                {/* ── Sidebar ── */}
                <aside className="lg:col-span-1 mb-12 lg:mb-0">
                  <div className="lg:sticky lg:top-24 space-y-8">

                    {/* Section Nav */}
                    <div>
                      <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
                        Sections
                      </p>
                      <nav className="flex flex-row lg:flex-col gap-2">
                        {navSections.map(({ id, label }) => (
                          <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className={`text-left text-sm font-medium px-3 py-2 transition-all border-l-2 ${
                              activeSection === id
                                ? "text-[#C28B30] border-[#C28B30] bg-[#C28B30]/5 font-semibold"
                                : "text-gray-500 border-transparent hover:text-ink hover:border-gray-300"
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </nav>
                    </div>

                    {/* Education */}
                    <div className="bg-[#EEF2F8] p-5 border-l-2 border-[#C28B30]">
                      <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
                        Education
                      </p>
                      <p className="font-bold text-ink text-sm leading-snug">
                        Monmouth University
                      </p>
                      <p className="text-[#C28B30] text-xs font-medium mt-1">
                        B.A. Communications
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        Media Studies &amp; Production
                      </p>
                      <p className="text-gray-400 text-xs mt-2 tracking-wider">
                        Sep 2022 – May 2026
                      </p>
                      <p className="text-gray-400 text-xs">West Long Branch, NJ</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                      <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
                        Quick Links
                      </p>
                      <div className="flex flex-col gap-2">
                        <Link href="/work" className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#C28B30] transition-colors group">
                          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                          My Work
                        </Link>
                        <Link href="/contact" className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#C28B30] transition-colors group">
                          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                          Contact Me
                        </Link>
                        <a
                          href="/resume.pdf"
                          download="Mekhi_Carter_Resume_2026.pdf"
                          className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#C28B30] transition-colors group"
                        >
                          <Download size={12} className="group-hover:translate-y-0.5 transition-transform" />
                          Download PDF
                        </a>
                      </div>
                    </div>
                  </div>
                </aside>

                {/* ── Main ── */}
                <main className="lg:col-span-3 space-y-16">

                  {/* MEDIA EXPERIENCE */}
                  <section id="experience">
                    <div className="flex items-center gap-4 mb-8">
                      <h2 className="font-display text-2xl font-bold text-ink tracking-wide uppercase">
                        Media Experience
                      </h2>
                      <div className="flex-1 h-px bg-gray-100" />
                    </div>

                    <div className="space-y-6">
                      {experiences.map((exp, i) => (
                        <RevealCard key={exp.id}>
                          <div
                            className={`group relative border rounded-none p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${
                              exp.current
                                ? "border-[#C28B30]/60 bg-[#FAF8F0] hover:border-[#C28B30] hover:shadow-[#C28B30]/10"
                                : "border-gray-100 bg-white hover:border-[#C28B30]/30 hover:shadow-gray-100"
                            }`}
                            style={{ animationDelay: `${i * 100}ms` }}
                          >
                            {/* Gold left accent */}
                            <div
                              className={`absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 ${
                                exp.current
                                  ? "bg-[#C28B30]"
                                  : "bg-transparent group-hover:bg-[#C28B30]/50"
                              }`}
                            />

                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                              <div>
                                <div className="flex items-center gap-3 flex-wrap">
                                  <h3 className="font-display text-xl font-bold text-ink">
                                    {exp.org}
                                  </h3>
                                  {exp.current && (
                                    <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase bg-[#C28B30] text-[#0D2235] px-2.5 py-1">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D2235] animate-pulse" />
                                      Current
                                    </span>
                                  )}
                                </div>
                                <p className="text-[#C28B30] font-semibold text-sm mt-1">{exp.show}</p>
                                <p className="text-gray-500 text-sm">{exp.role}</p>
                              </div>
                              <div className="text-right shrink-0">
                                <p className="text-xs font-semibold text-gray-500 tracking-wider">
                                  {exp.period}
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5">{exp.location}</p>
                              </div>
                            </div>

                            <ul className="space-y-2.5">
                              {exp.bullets.map((bullet, j) => (
                                <li
                                  key={j}
                                  className="flex gap-3 text-gray-600 text-sm leading-relaxed"
                                >
                                  <span className="text-[#C28B30] font-bold mt-0.5 shrink-0 text-xs">▸</span>
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </RevealCard>
                      ))}
                    </div>
                  </section>

                  {/* LEADERSHIP */}
                  <section id="leadership">
                    <div className="flex items-center gap-4 mb-8">
                      <h2 className="font-display text-2xl font-bold text-ink tracking-wide uppercase">
                        Leadership &amp; Projects
                      </h2>
                      <div className="flex-1 h-px bg-gray-100" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {leadership.map((item, i) => (
                        <RevealCard key={item.org}>
                          <div
                            className="group border border-gray-100 bg-white p-6 hover:border-[#C28B30]/40 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 h-full"
                            style={{ animationDelay: `${i * 120}ms` }}
                          >
                            <div className="w-5 h-0.5 bg-[#C28B30] mb-4 group-hover:w-8 transition-all duration-300" />
                            <h3 className="font-display font-bold text-ink text-base leading-snug">
                              {item.org}
                            </h3>
                            <p className="text-[#C28B30] text-sm font-semibold mt-1">{item.role}</p>
                            <p className="text-gray-400 text-xs mt-1 mb-4 tracking-wider">
                              {item.period} · {item.location}
                            </p>
                            <ul className="space-y-2">
                              {item.bullets.map((bullet, j) => (
                                <li key={j} className="flex gap-2.5 text-gray-600 text-xs leading-relaxed">
                                  <span className="text-[#C28B30] font-bold mt-0.5 shrink-0">▸</span>
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </RevealCard>
                      ))}
                    </div>
                  </section>

                  {/* SKILLS */}
                  <section id="skills">
                    <div className="flex items-center gap-4 mb-8">
                      <h2 className="font-display text-2xl font-bold text-ink tracking-wide uppercase">
                        Skills
                      </h2>
                      <div className="flex-1 h-px bg-gray-100" />
                    </div>

                    <RevealCard>
                      <div className="flex flex-wrap gap-3">
                        {skills.map((skill, i) => (
                          <span
                            key={skill}
                            className="skill-pill group relative overflow-hidden border border-gray-200 px-4 py-2 text-sm text-gray-600 cursor-default transition-all duration-300 hover:border-[#C28B30] hover:text-[#0D2235] hover:shadow-md"
                            style={{ animationDelay: `${i * 40}ms` }}
                          >
                            <span
                              className="absolute inset-0 bg-[#C28B30] translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                            />
                            <span className="relative z-10 font-medium">{skill}</span>
                          </span>
                        ))}
                      </div>
                    </RevealCard>
                  </section>

                  {/* Bottom CTA */}
                  <RevealCard>
                    <div className="border-t border-gray-100 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                      <div>
                        <p className="font-display text-xl font-bold text-ink">
                          Ready to connect?
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                          Open to reporting, production, and storytelling opportunities.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3 shrink-0">
                        <Link href="/contact" className="btn-primary text-xs py-2.5">
                          Contact Me <ArrowRight size={13} />
                        </Link>
                        <a
                          href="/resume.pdf"
                          download="Mekhi_Carter_Resume_2026.pdf"
                          className="btn-outline-dark text-xs py-2.5"
                        >
                          <Download size={13} /> Download PDF
                        </a>
                      </div>
                    </div>
                  </RevealCard>
                </main>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        .reveal-card {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .reveal-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}
