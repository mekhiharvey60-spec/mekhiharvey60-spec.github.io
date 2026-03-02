"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import TimecodeDisplay from "./TimecodeDisplay";
import StudioModeToggle from "./StudioModeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "My Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-[#0D2235]/95 backdrop-blur-sm shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-bold tracking-wide text-white hover:text-studio-cyan transition-colors"
          >
            MEKHI CARTER
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-cursor="hover-link"
                className={`nav-link text-sm font-medium tracking-wider transition-colors ${
                  pathname === link.href
                    ? "text-studio-cyan active"
                    : "text-white/70 hover:text-studio-cyan"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Timecode — decorative, desktop only */}
            <TimecodeDisplay className="text-white/25 text-[10px] font-mono tracking-widest hidden lg:block" />

            <StudioModeToggle />

            <Link
              href="/resume"
              data-cursor="hover-link"
              className="self-start bg-warm-orange text-deep-navy text-sm font-bold tracking-widest uppercase px-5 py-2.5 transition-colors hover:bg-rich-red"
            >
              Resume
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0D2235] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-widest uppercase transition-colors ${
                pathname === link.href
                  ? "text-studio-cyan"
                  : "text-white/70 hover:text-studio-cyan"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/resume"
            className="self-start bg-warm-orange text-deep-navy text-sm font-bold tracking-widest uppercase px-5 py-2.5 transition-colors hover:bg-rich-red"
          >
            Resume
          </Link>
        </div>
      )}
    </header>
  );
}
