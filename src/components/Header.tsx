"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "STUDIO", href: "#studio" },
    { label: "SERVICES", href: "#services" },
    { label: "WORK", href: "#work" },
    { label: "PROCESS", href: "#process" },
    { label: "STACK", href: "#stack" },
    { label: "FOUNDER", href: "#founder" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 bg-[#080A09]/90 backdrop-blur-xl border-b border-[#1C2A22]" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#" className="group flex items-center gap-3">
          <div className="relative w-9 h-9 flex items-center justify-center border border-[#1C2A22] bg-[#101A15] group-hover:border-[#B89A5A] transition-colors duration-300">
            <span className="font-mono text-xs font-bold tracking-tight text-[#E8E8E3] group-hover:text-[#D4B978]">
              CX
            </span>
            <div className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 bg-[#D4B978] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 bg-[#D4B978] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-sm tracking-[0.25em] font-bold text-[#E8E8E3] group-hover:text-[#D4B978] transition-colors">
              CHAN X STUDIO
            </span>
            <span className="font-mono text-[9px] tracking-widest text-[#858982]">
              CREATIVE TECHNOLOGY
            </span>
          </div>
        </Link>

        {/* Floating Glass Pill Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#101A15]/80 border border-[#1C2A22] px-4 py-1.5 rounded-full backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-mono text-[11px] font-medium text-[#858982] hover:text-[#D4B978] px-4 py-1.5 rounded-full hover:bg-[#1C2A22]/60 transition-all tracking-wider"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action & Live Indicator */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-2 border border-[#1C2A22] bg-[#101A15]/60 px-3.5 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B89A5A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4B978]"></span>
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[#E8E8E3] uppercase">
              STUDIO ACTIVE
            </span>
          </div>

          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2 bg-[#1C2A22] hover:bg-[#B89A5A] hover:text-[#080A09] border border-[#B89A5A] px-5 py-2 font-mono text-xs tracking-widest text-[#E8E8E3] transition-all duration-300"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D4B978] group-hover:text-[#080A09] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#E8E8E3] border border-[#1C2A22] bg-[#101A15] hover:border-[#B89A5A] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-[#080A09]/95 backdrop-blur-2xl border-b border-[#1C2A22] p-6 flex flex-col gap-6 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-xs tracking-widest text-[#858982] hover:text-[#D4B978] transition-colors py-2.5 border-b border-[#1C2A22]/40"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-2">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#1C2A22] border border-[#B89A5A] py-3.5 font-mono text-xs tracking-widest text-[#D4B978] hover:bg-[#B89A5A] hover:text-[#080A09] transition-colors"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
