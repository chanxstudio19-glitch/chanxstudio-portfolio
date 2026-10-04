"use client";

import Link from "next/link";
import { ArrowUp, Github, Instagram, Linkedin, Terminal, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080A09] border-t border-[#1C2A22] text-[#858982] relative z-10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#1C2A22]/60">
          
          {/* Brand Identity */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center border border-[#1C2A22] bg-[#101A15] text-[#E8E8E3] font-mono font-bold text-xs">
                  CX
                </div>
                <span className="font-mono text-base font-bold text-[#E8E8E3] tracking-[0.25em]">
                  CHAN X STUDIO
                </span>
              </div>
              <p className="font-mono text-xs text-[#858982] max-w-sm leading-relaxed uppercase">
                Independent Creative Technology Studio
              </p>
              <p className="font-mono text-[11px] text-[#858982]/70 mt-2 max-w-xs">
                Building software, AI experiences, automation and digital products.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 border border-[#1C2A22] bg-[#101A15]/60 px-3 py-1.5 w-max">
              <span className="w-2 h-2 rounded-full bg-[#B89A5A] animate-pulse" />
              <span className="font-mono text-[10px] tracking-wider text-[#E8E8E3]/80 uppercase">
                SYSTEM ONLINE // 2026 EDITION
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-bold text-[#E8E8E3] tracking-widest uppercase mb-6">
              // NAVIGATION
            </h4>
            <ul className="space-y-3 font-mono text-xs">
              <li>
                <Link href="#work" className="hover:text-[#D4B978] transition-colors tracking-widest">
                  WORK
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#D4B978] transition-colors tracking-widest">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="#studio" className="hover:text-[#D4B978] transition-colors tracking-widest">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#D4B978] transition-colors tracking-widest">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Connections */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-bold text-[#E8E8E3] tracking-widest uppercase mb-6">
              // SOCIAL MATRIX
            </h4>
            <ul className="space-y-3 font-mono text-xs">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4B978] transition-colors tracking-widest flex items-center gap-2"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#B89A5A]" />
                  <span>INSTAGRAM</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kirunith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4B978] transition-colors tracking-widest flex items-center gap-2"
                >
                  <Github className="w-3.5 h-3.5 text-[#B89A5A]" />
                  <span>GITHUB</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4B978] transition-colors tracking-widest flex items-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#B89A5A]" />
                  <span>LINKEDIN</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#858982]">
          <p>© 2026 CHAN X Studio. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[#E8E8E3] hover:text-[#D4B978] transition-colors bg-[#101A15] border border-[#1C2A22] px-4 py-2"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B89A5A] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
