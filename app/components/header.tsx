"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Teams", href: "/teams" },
  { label: "Merch", href: "/merch" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top announcement bar */}
      <div className="w-full bg-[#1a1a1a] py-2 overflow-hidden">
        <div
          className="flex gap-16 whitespace-nowrap w-max"
          style={{ animation: "marquee 25s linear infinite" }}
        >
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <span
                key={i}
                className="font-display text-[10px] tracking-[0.3em] text-white/60"
              >
                {i % 2 === 0 ? "SPRING 2026 REGISTRATION NOW OPEN" : "★"}
              </span>
            ))}
        </div>
      </div>

      <header
        className={`w-full sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#f5f2ee]/95 backdrop-blur-sm shadow-sm border-b border-[#1a1a1a]/10"
            : "bg-[#f5f2ee] border-b border-[#1a1a1a]/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/home" className="flex items-center">
            <Image
              src="/logo/gritLogo2.webp"
              alt="Grit Logo"
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-xs tracking-widest text-[#1a1a1a]/60 hover:text-[#1a1a1a] px-4 py-2 relative group transition-colors duration-200"
              >
                {link.label.toUpperCase()}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-[#1a1a1a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Vintage stamp-style register button */}
            <Link
              href="/register"
              className="relative font-display text-xs tracking-widest text-white bg-[#DA1D3A] px-6 py-2.5 hover:bg-[#b01730] transition-colors duration-200"
            >
              REGISTER
              {/* Corner accents */}
              <span className="absolute top-0.5 left-0.5 w-2 h-2 border-t border-l border-white/30" />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 border-t border-r border-white/30" />
              <span className="absolute bottom-0.5 left-0.5 w-2 h-2 border-b border-l border-white/30" />
              <span className="absolute bottom-0.5 right-0.5 w-2 h-2 border-b border-r border-white/30" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 border-t border-[#1a1a1a]/10 ${menuOpen ? "max-h-96" : "max-h-0"}`}
        >
          <nav className="flex flex-col px-6 py-4 gap-0 bg-[#f5f2ee]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-xs tracking-widest text-[#1a1a1a]/60 hover:text-[#1a1a1a] py-4 border-b border-[#1a1a1a]/10 transition-colors duration-200"
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
            <Link
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="font-display text-xs tracking-widest text-white bg-[#DA1D3A] px-6 py-3 text-center mt-4 hover:bg-[#b01730] transition-colors duration-200"
            >
              REGISTER
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
