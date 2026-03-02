import Link from "next/link";
import { LinkedinIcon } from "lucide-react";

const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0D2235] text-white">
      {/* Gold top border */}
      <div className="h-0.5 gold-border-animate" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-bold tracking-wide mb-3">
              MEKHI CARTER
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Television Journalist · Media Producer · Community Storyteller
            </p>
            <div className="w-10 h-0.5 bg-[#C28B30] mt-4" />
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "My Work", href: "/work" },
                { label: "Contact", href: "/contact" },
                { label: "Resume", href: "/resume" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-[#C28B30] transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-5">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/mekhi-carter/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <LinkedinIcon size={18} className="group-hover:text-[#C28B30] transition-colors" />
                LinkedIn
              </a>
              <a
                href="https://www.tiktok.com/@mekhicarterlivenews"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <span className="group-hover:text-[#C28B30] transition-colors">
                  <TikTokIcon />
                </span>
                TikTok · Digital Journalism &amp; Media Commentary
              </a>
              <a
                href="mailto:Mekhic602@gmail.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <span className="text-[#C28B30] font-bold text-lg leading-none">@</span>
                Mekhic602@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Mekhi A. Carter. All rights reserved.
          </p>
          <p className="text-white/20 text-xs italic">
            &ldquo;I report stories that amplify communities often unheard.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
