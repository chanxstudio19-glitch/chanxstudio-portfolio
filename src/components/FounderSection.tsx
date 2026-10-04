"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, User, Terminal, Sparkles, GraduationCap, Code2 } from "lucide-react";

export default function FounderSection() {
  return (
    <section id="founder" className="py-28 lg:py-36 relative border-t border-[#1C2A22]/60 bg-[#0A0D0B]">
      {/* Subtle backdrop grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#1C2A22]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-[#B89A5A] tracking-widest uppercase">
            06 / THE PERSON BEHIND IT
          </span>
          <div className="h-[1px] w-16 bg-[#1C2A22]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Founder Persona Badge & Visual Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-[#101A15] border border-[#1C2A22] p-8 lg:p-10 shadow-2xl group hover:border-[#B89A5A] transition-all"
            >
              {/* Founder Cyber Card Header */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#1C2A22]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-[#B89A5A] bg-[#080A09] flex items-center justify-center font-mono font-bold text-lg text-[#D4B978]">
                    K
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-bold text-[#E8E8E3] tracking-wide">
                      KIRUNITH
                    </h3>
                    <span className="font-mono text-xs text-[#858982]">
                      FOUNDER & LEAD ENGINEER
                    </span>
                  </div>
                </div>

                <div className="w-2.5 h-2.5 rounded-full bg-[#B89A5A] animate-pulse" />
              </div>

              {/* Founder Stats */}
              <div className="space-y-4 font-mono text-xs text-[#858982] mb-8">
                <div className="flex items-center justify-between p-3 bg-[#080A09]/80 border border-[#1C2A22]">
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-[#B89A5A]" />
                    <span>ROLE</span>
                  </span>
                  <span className="text-[#E8E8E3]">Student & Software Developer</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#080A09]/80 border border-[#1C2A22]">
                  <span className="flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-[#B89A5A]" />
                    <span>FOCUS</span>
                  </span>
                  <span className="text-[#E8E8E3]">Full-Stack, AI & Automation</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#080A09]/80 border border-[#1C2A22]">
                  <span className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#B89A5A]" />
                    <span>STUDIO STATUS</span>
                  </span>
                  <span className="text-[#D4B978]">Active Operations</span>
                </div>
              </div>

              <div className="font-mono text-[10px] text-[#858982] tracking-widest text-center uppercase border-t border-[#1C2A22]/60 pt-4">
                SYS.AUTHOR // KIRUNITH // CHAN X STUDIO
              </div>

              {/* Sci-Fi reticles */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#B89A5A]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#B89A5A]" />
            </motion.div>
          </div>

          {/* Right Column: Founder Narrative & Portfolio CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#E8E8E3] uppercase leading-[1.08] font-sans"
            >
              BUILT BY ONE. <br />
              <span className="text-metallic-gold">DESIGNED TO GROW.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 text-xl sm:text-2xl text-[#E8E8E3]/90 leading-relaxed font-light"
            >
              I&apos;m Kirunith — a student, developer and builder interested in software, artificial intelligence, automation and digital products.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base text-[#858982] leading-relaxed"
            >
              CHAN X Studio started as a space to turn my ideas into real products and eventually grow into a studio where different people and ideas can come together.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10"
            >
              <a
                href="https://github.com/kirunith"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-[#101A15] border border-[#B89A5A] hover:border-[#D4B978] px-7 py-4 font-mono text-xs tracking-[0.2em] text-[#D4B978] hover:text-[#E8E8E3] transition-all duration-300 shadow-xl"
              >
                <span>[ VISIT MY PERSONAL PORTFOLIO ]</span>
                <ArrowUpRight className="w-4 h-4 text-[#B89A5A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
