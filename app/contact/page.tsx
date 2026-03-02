import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GoLiveForm from "@/components/GoLiveForm";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Mekhi Carter",
  description:
    "Get in touch with Mekhi Carter — television journalist, media producer, and storyteller. Open to job opportunities, collaborations, and media inquiries.",
};

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
);

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="relative bg-[#0D2235] pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D2235] via-[#0E2A3A] to-[#0D2235]" />
        <div className="absolute left-0 top-0 bottom-0 w-1 gold-border-animate" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <p className="section-label">Contact</p>
            <h1 className="font-display text-6xl md:text-7xl font-bold text-white leading-none mt-3">
              Let&apos;s Connect
            </h1>
            <div className="w-12 h-0.5 bg-[#C28B30] mt-8" />
            <p className="text-white/60 text-lg mt-6 max-w-md">
              Whether you&apos;re a news director, executive producer, or potential
              collaborator — reach out. Every message is read personally.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CONTACT BODY ── */}
      <section className="py-24 bg-[#0D2235]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Left — Info */}
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div className="space-y-10">
                <div>
                  <p className="section-label">Direct</p>
                  <h2 className="font-display text-3xl font-bold text-white mt-2 mb-6">
                    Get In Touch
                  </h2>
                  <div className="w-8 h-0.5 bg-[#C28B30]" />
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-1 font-mono">
                      Email
                    </p>
                    <a
                      href="mailto:Mekhic602@gmail.com"
                      className="text-white font-medium hover:text-[#C28B30] transition-colors"
                      data-cursor="hover-link"
                    >
                      Mekhic602@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-1 font-mono">
                      Location
                    </p>
                    <p className="text-white font-medium">New York / New Jersey Area</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3 font-mono">
                      Connect Online
                    </p>
                    <div className="flex flex-col gap-3">
                      <a
                        href="https://www.linkedin.com/in/mekhi-carter/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-white/50 hover:text-[#C28B30] transition-colors"
                        data-cursor="hover-link"
                      >
                        <LinkedInIcon />
                        linkedin.com/in/mekhi-carter
                      </a>
                      <a
                        href="https://www.tiktok.com/@mekhicarterlivenews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-white/50 hover:text-[#C28B30] transition-colors"
                        data-cursor="hover-link"
                      >
                        <TikTokIcon />
                        @mekhicarterlivenews
                      </a>
                    </div>
                  </div>
                </div>

                {/* Resume CTA */}
                <div className="bg-white/5 border border-white/10 p-6">
                  <p className="font-bold text-white text-sm mb-2">Looking for the resume?</p>
                  <p className="text-white/40 text-xs mb-4 leading-relaxed">
                    View and download the full resume — updated February 2026.
                  </p>
                  <Link
                    href="/resume"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#C28B30] hover:text-white transition-colors"
                    data-cursor="hover-link"
                  >
                    View Resume <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — GoLive Form */}
            <ScrollReveal direction="right" delay={0.15} className="lg:col-span-3">
              <GoLiveForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
