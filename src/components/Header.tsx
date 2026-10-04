"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

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
    { label: "01 / STUDIO", href: "#studio" },
    { label: "02 / SERVICES", href: "#services" },
    { label: "03 / WORK", href: "#work" },
    { label: "04 / PROCESS", href: "#process" },
    { label: "05 / STACK", href: "#stack" },
    { label: "06 / FOUNDER", href: "#founder" },
    { label: "07 / PRINCIPLES", href: "#principles" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#080A09]/85 backdrop-blur-md border-b border-[#1C2A22]/60 py-3.5 shadow-2xl shadow-black/60"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#" className="group flex items-center gap-3">
          <div className="relative w-8 h-8 flex items-center justify-center border border-[#1C2A22] bg-[#101A15]/90 group-hover:border-[#B89A5A] transition-colors duration-300">
            <span className="font-mono text-xs font-bold tracking-tighter text-[#E8E8E3] group-hover:text-[#D4B978]">
              CX
            </span>
            <div className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 bg-[#B89A5A] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 bg-[#B89A5A] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm tracking-[0.25em] font-bold text-[#E8E8E3] group-hover:text-[#D4B978] transition-colors">
              CHAN X STUDIO
            </span>
            <span className="font-mono text-[9px] tracking-wider text-[#858982]">
              INDEPENDENT CREATIVE TECH
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-mono text-[11px] text-[#858982] hover:text-[#E8E8E3] transition-colors tracking-widest relative group py-1"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B89A5A] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Action & Status */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-2 border border-[#1C2A22] bg-[#101A15]/70 px-3 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B89A5A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4B978]"></span>
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[#E8E8E3]/80 uppercase flex items-center gap-1.5">
              <span>AVAILABLE FOR PROJECTS</span>
            </span>
          </div>

          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2 bg-[#101A15] border border-[#1C2A22] hover:border-[#B89A5A] px-4 py-2 font-mono text-xs tracking-widest text-[#E8E8E3] hover:text-[#D4B978] transition-all duration-300 shadow-md hover:shadow-[#B89A5A]/10"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B89A5A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-[#E8E8E3] border border-[#1C2A22] bg-[#101A15] hover:border-[#B89A5A] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-[#080A09]/98 backdrop-blur-2xl border-b border-[#1C2A22] p-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-4 duration-300 z-50">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-xs tracking-widest text-[#858982] hover:text-[#D4B978] transition-colors py-2.5 border-b border-[#1C2A22]/40 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-center gap-2 border border-[#1C2A22] bg-[#101A15] px-3 py-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B89A5A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4B978]"></span>
              </span>
              <span className="font-mono text-xs tracking-wider text-[#E8E8E3]/80">
                STATUS: ACCEPTING INQUIRIES
              </span>
            </div>

            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#101A15] border border-[#B89A5A] py-3 font-mono text-xs tracking-widest text-[#D4B978] hover:bg-[#1C2A22] transition-colors"
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
