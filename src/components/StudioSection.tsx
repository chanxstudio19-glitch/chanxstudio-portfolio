"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Cpu, Sparkles, Layers } from "lucide-react";

export default function StudioSection() {
  return (
    <section id="studio" className="py-24 lg:py-36 relative border-t border-[#1C2A22] bg-[#080A09]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#1C2A22]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-[#D4B978] tracking-widest uppercase font-semibold">
            01 / THE STUDIO
          </span>
          <div className="h-[1px] w-16 bg-[#1C2A22]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Headline */}
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#E8E8E3] leading-[1.05]"
            >
              Small studio. <br />
              <span className="text-metallic-gold">Big ideas.</span>
            </motion.h2>

            <div className="mt-10 pt-8 border-t border-[#1C2A22] grid grid-cols-2 gap-6">
              <div className="p-5 bg-[#101A15]/60 border border-[#1C2A22]">
                <span className="font-heading text-3xl font-bold text-[#E8E8E3]">100%</span>
                <p className="font-mono text-xs text-[#858982] mt-1 uppercase tracking-wider">
                  Independent & Founder-Led
                </p>
              </div>
              <div className="p-5 bg-[#101A15]/60 border border-[#1C2A22]">
                <span className="font-heading text-3xl font-bold text-[#D4B978]">4+</span>
                <p className="font-mono text-xs text-[#858982] mt-1 uppercase tracking-wider">
                  Core Disciplines
                </p>
              </div>
            </div>
          </div>

          {/* Narrative & Capabilities */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-2xl text-[#E8E8E3] leading-relaxed font-light"
            >
              CHAN X Studio is an independent technology studio founded by Kirunith, focused on turning ideas into functional digital products.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-[#858982] leading-relaxed font-light"
            >
              We work across software development, artificial intelligence, automation and digital experiences — from early concepts to deployed products.
            </motion.p>

            {/* Capability Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 grid grid-cols-2 gap-4"
            >
              <div className="p-4 bg-[#101A15] border border-[#1C2A22] flex items-start gap-3 hover:border-[#B89A5A] transition-colors group">
                <Terminal className="w-4 h-4 text-[#D4B978] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#E8E8E3] tracking-wide uppercase">ARCHITECTURE</h4>
                  <p className="font-mono text-[11px] text-[#858982] mt-0.5">Resilient backend systems</p>
                </div>
              </div>

              <div className="p-4 bg-[#101A15] border border-[#1C2A22] flex items-start gap-3 hover:border-[#B89A5A] transition-colors group">
                <Cpu className="w-4 h-4 text-[#D4B978] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#E8E8E3] tracking-wide uppercase">INTELLIGENCE</h4>
                  <p className="font-mono text-[11px] text-[#858982] mt-0.5">Practical AI & agent workflows</p>
                </div>
              </div>

              <div className="p-4 bg-[#101A15] border border-[#1C2A22] flex items-start gap-3 hover:border-[#B89A5A] transition-colors group">
                <Shield className="w-4 h-4 text-[#D4B978] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#E8E8E3] tracking-wide uppercase">CRAFT</h4>
                  <p className="font-mono text-[11px] text-[#858982] mt-0.5">Obsessive aesthetic finish</p>
                </div>
              </div>

              <div className="p-4 bg-[#101A15] border border-[#1C2A22] flex items-start gap-3 hover:border-[#B89A5A] transition-colors group">
                <Layers className="w-4 h-4 text-[#D4B978] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#E8E8E3] tracking-wide uppercase">AUTOMATION</h4>
                  <p className="font-mono text-[11px] text-[#858982] mt-0.5">Streamlined business logic</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
