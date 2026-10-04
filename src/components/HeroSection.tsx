"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Sparkles, Terminal, Shield, Zap } from "lucide-react";
import HeroCanvas from "./HeroCanvas";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-36 pb-20 lg:pt-44 lg:pb-28 flex flex-col justify-between overflow-hidden bg-[#080A09]">
      {/* Background ambient lighting spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-[#1C2A22]/40 via-[#101A15]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#B89A5A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Studio Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-[#1C2A22] bg-[#101A15]/90 px-4 py-2 w-fit mb-8 shadow-xl"
            >
              <Sparkles className="w-4 h-4 text-[#D4B978]" />
              <span className="font-mono text-xs text-[#E8E8E3] tracking-widest uppercase font-medium">
                INDEPENDENT CREATIVE TECHNOLOGY STUDIO
              </span>
            </motion.div>

            {/* Main Headline with Syne Font */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#E8E8E3] leading-[0.98] uppercase"
            >
              WE BUILD <br />
              WHAT WE <br />
              <span className="text-metallic-gold">IMAGINE.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 text-lg sm:text-xl text-[#858982] max-w-xl leading-relaxed font-light"
            >
              CHAN X Studio is an independent creative technology studio building software, AI experiences, automation and digital products.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link
                href="#work"
                className="group flex items-center justify-center gap-3 bg-[#101A15] border border-[#1C2A22] hover:border-[#B89A5A] px-8 py-4 font-mono text-xs tracking-widest text-[#E8E8E3] hover:text-[#D4B978] transition-all duration-300 shadow-lg"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowDownRight className="w-4 h-4 text-[#D4B978] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="group flex items-center justify-center gap-3 bg-[#1C2A22] hover:bg-[#B89A5A] hover:text-[#080A09] border border-[#B89A5A] px-8 py-4 font-mono text-xs tracking-widest text-[#E8E8E3] transition-all duration-300 shadow-xl"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4B978] group-hover:text-[#080A09] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Hero Right: Interactive 3D Holographic Canvas Matrix */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <HeroCanvas />
          </motion.div>
        </div>
      </div>

      {/* Hero Telemetry Stat Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 relative z-10 w-full">
        <div className="border-t border-[#1C2A22] pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
          <div className="p-4 bg-[#101A15]/40 border border-[#1C2A22]">
            <div className="flex items-center gap-2 text-[#D4B978] mb-1">
              <Terminal className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase font-bold">// POSITIONING</span>
            </div>
            <span className="text-[#E8E8E3] font-medium">Creative Technology</span>
          </div>

          <div className="p-4 bg-[#101A15]/40 border border-[#1C2A22]">
            <div className="flex items-center gap-2 text-[#D4B978] mb-1">
              <Shield className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase font-bold">// FOUNDER</span>
            </div>
            <span className="text-[#E8E8E3] font-medium">Kirunith</span>
          </div>

          <div className="p-4 bg-[#101A15]/40 border border-[#1C2A22]">
            <div className="flex items-center gap-2 text-[#D4B978] mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase font-bold">// DISCIPLINES</span>
            </div>
            <span className="text-[#E8E8E3] font-medium">Software • AI • Automation</span>
          </div>

          <div className="p-4 bg-[#101A15]/40 border border-[#1C2A22]">
            <div className="flex items-center gap-2 text-[#D4B978] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase font-bold">// STATUS</span>
            </div>
            <span className="text-[#D4B978] font-bold">Q2/Q3 Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
