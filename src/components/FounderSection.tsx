"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, User } from "lucide-react";
import Link from "next/link";

export default function FounderSection() {
  return (
    <section id="founder" className="py-24 lg:py-36 relative bg-[#080A09] border-t border-[#1C2A22]">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1C2A22]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-[#D4B978] tracking-widest uppercase font-semibold">
            06 / THE PERSON BEHIND IT
          </span>
          <div className="h-[1px] w-16 bg-[#1C2A22]" />
        </div>

        <div className="bg-[#101A15]/80 border border-[#1C2A22] p-8 lg:p-14 relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between pb-6 border-b border-[#1C2A22] mb-8">
            <div className="flex items-center gap-3">
              <User className="w-4 h-4 text-[#D4B978]" />
              <span className="font-mono text-xs text-[#E8E8E3] tracking-widest uppercase font-bold">
                FOUNDER & CREATIVE TECHNOLOGIST // KIRUNITH
              </span>
            </div>
            <span className="font-mono text-xs text-[#D4B978] hidden sm:block font-bold">
              STUDIO FOUNDATION // 2026
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#E8E8E3] tracking-tight leading-tight">
                Built by one. <br />
                <span className="text-metallic-gold">Designed to grow.</span>
              </h2>

              <p className="text-lg text-[#E8E8E3] leading-relaxed font-light">
                I'm Kirunith — a student, developer and builder interested in software, artificial intelligence, automation and digital products.
              </p>

              <p className="text-base text-[#858982] leading-relaxed font-light">
                CHAN X Studio started as a space to turn my ideas into real products and eventually grow into a studio where different people and ideas can come together.
              </p>

              <div className="pt-4">
                <Link
                  href="https://portfolio-kirunith.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#080A09] border border-[#1C2A22] hover:border-[#B89A5A] px-7 py-4 font-mono text-xs tracking-widest text-[#E8E8E3] hover:text-[#D4B978] transition-all duration-300 group shadow-lg"
                >
                  <span>VISIT PERSONAL PORTFOLIO</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D4B978] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Telemetry Card */}
            <div className="lg:col-span-4 bg-[#080A09] border border-[#1C2A22] p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between font-mono text-xs text-[#858982] border-b border-[#1C2A22] pb-3">
                <span className="text-[#D4B978] font-bold">// FOUNDER PROFILE</span>
                <span>KIRUNITH</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#1C2A22]/50">
                  <span className="text-[#858982]">ROLE</span>
                  <span className="text-[#E8E8E3]">Founder & Lead Dev</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#1C2A22]/50">
                  <span className="text-[#858982]">FOCUS</span>
                  <span className="text-[#D4B978] font-bold">AI & Software</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#1C2A22]/50">
                  <span className="text-[#858982]">MODEL</span>
                  <span className="text-[#E8E8E3]">Collaborative</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-[#858982]">SITE</span>
                  <span className="text-[#D4B978]">PORTFOLIO-KIRUNITH</span>
                </div>
              </div>

              <div className="pt-2 text-[10px] font-mono text-[#D4B978] flex items-center gap-2 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#D4B978] animate-pulse" />
                OPEN FOR COLLABORATION
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
