"use client";

import { motion } from "framer-motion";

export default function PrinciplesSection() {
  const principles = [
    {
      title: "BUILD",
      text: "Don't just talk about ideas. Build them.",
      num: "01",
    },
    {
      title: "EXPERIMENT",
      text: "Try things. Break things. Learn faster.",
      num: "02",
    },
    {
      title: "SIMPLIFY",
      text: "Technology should solve problems, not create unnecessary complexity.",
      num: "03",
    },
    {
      title: "EVOLVE",
      text: "Every project is another step forward.",
      num: "04",
    },
  ];

  return (
    <section id="principles" className="py-24 lg:py-36 relative bg-[#080A09] border-t border-[#1C2A22]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-[#D4B978] tracking-widest uppercase font-semibold">
            07 / PRINCIPLES
          </span>
          <div className="h-[1px] w-16 bg-[#1C2A22]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#E8E8E3] tracking-tight max-w-2xl">
            Core studio principles that guide <span className="text-metallic-gold">every decision</span>.
          </h2>
          <span className="font-mono text-xs text-[#858982] uppercase tracking-wider">
            OPERATING PHILOSOPHY
          </span>
        </div>

        {/* 4 Minimal Blocks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#101A15]/60 border border-[#1C2A22] p-8 flex flex-col justify-between hover:border-[#B89A5A] transition-all duration-500 relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 p-5 font-mono text-xl font-bold text-[#1C2A22] group-hover:text-[#D4B978] transition-colors">
                {p.num}
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-[#E8E8E3] group-hover:text-[#D4B978] transition-colors tracking-widest mb-4">
                  {p.title}
                </h3>
                <p className="text-sm text-[#858982] group-hover:text-[#E8E8E3] leading-relaxed font-light transition-colors">
                  {p.text}
                </p>
              </div>

              <div className="mt-10 pt-4 border-t border-[#1C2A22] flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#858982] uppercase font-medium">
                  PHILOSOPHY // {p.title}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#1C2A22] group-hover:bg-[#D4B978] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
