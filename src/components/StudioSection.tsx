"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Zap, Layers, Sparkles, Terminal } from "lucide-react";

export default function StudioSection() {
  return (
    <section id="studio" className="py-28 lg:py-36 relative border-t border-[#1C2A22]/60 bg-[#080A09]">
      {/* Subtle lighting glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#1C2A22]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-[#B89A5A] tracking-widest uppercase">
            01 / THE STUDIO
          </span>
          <div className="h-[1px] w-16 bg-[#1C2A22]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Headline & Metrics */}
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#E8E8E3] leading-[1.1] font-sans uppercase"
            >
              SMALL STUDIO. <br />
              <span className="text-metallic-gold">BIG IDEAS.</span>
            </motion.h2>

            {/* Quick Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 pt-8 border-t border-[#1C2A22]/60 grid grid-cols-3 gap-4"
            >
              <div className="border-l-2 border-[#B89A5A] pl-4">
                <span className="font-mono text-2xl font-bold text-[#E8E8E3]">100%</span>
                <p className="font-mono text-[10px] text-[#858982] mt-1 uppercase tracking-wider">
                  Independent Studio
                </p>
              </div>
              <div className="border-l-2 border-[#1C2A22] pl-4">
                <span className="font-mono text-2xl font-bold text-[#D4B978]">04</span>
                <p className="font-mono text-[10px] text-[#858982] mt-1 uppercase tracking-wider">
                  Core Disciplines
                </p>
              </div>
              <div className="border-l-2 border-[#1C2A22] pl-4">
                <span className="font-mono text-2xl font-bold text-[#E8E8E3]">05</span>
                <p className="font-mono text-[10px] text-[#858982] mt-1 uppercase tracking-wider">
                  Phase Process
                </p>
              </div>
            </motion.div>
          </div>

          {/* Narrative & Capabilities */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl sm:text-2xl text-[#E8E8E3]/95 leading-relaxed font-light"
            >
              CHAN X Studio is an independent technology studio founded by Kirunith, focused on turning ideas into functional digital products.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-[#858982] leading-relaxed"
            >
              We work across software development, artificial intelligence, automation and digital experiences — from early concepts to deployed products.
            </motion.p>

            {/* Matrix Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="p-4 bg-[#101A15]/70 border border-[#1C2A22] hover:border-[#B89A5A]/60 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-2">
                  <Code2 className="w-4 h-4 text-[#D4B978]" />
                  <h4 className="font-mono text-xs font-bold text-[#E8E8E3] tracking-wider">SOFTWARE</h4>
                </div>
                <p className="font-mono text-xs text-[#858982]">Architecting resilient web systems & platforms.</p>
              </div>

              <div className="p-4 bg-[#101A15]/70 border border-[#1C2A22] hover:border-[#B89A5A]/60 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-2">
                  <Cpu className="w-4 h-4 text-[#D4B978]" />
                  <h4 className="font-mono text-xs font-bold text-[#E8E8E3] tracking-wider">ARTIFICIAL INTELLIGENCE</h4>
                </div>
                <p className="font-mono text-xs text-[#858982]">Local-first LLMs & practical AI workflows.</p>
              </div>

              <div className="p-4 bg-[#101A15]/70 border border-[#1C2A22] hover:border-[#B89A5A]/60 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-4 h-4 text-[#D4B978]" />
                  <h4 className="font-mono text-xs font-bold text-[#E8E8E3] tracking-wider">AUTOMATION</h4>
                </div>
                <p className="font-mono text-xs text-[#858982]">Connecting data pipelines & removing friction.</p>
              </div>

              <div className="p-4 bg-[#101A15]/70 border border-[#1C2A22] hover:border-[#B89A5A]/60 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-2">
                  <Layers className="w-4 h-4 text-[#D4B978]" />
                  <h4 className="font-mono text-xs font-bold text-[#E8E8E3] tracking-wider">DIGITAL EXPERIENCES</h4>
                </div>
                <p className="font-mono text-xs text-[#858982]">Intentional, user-first interface design.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
