"use client";

import { motion } from "framer-motion";
import { Hammer, FlaskConical, Sparkles, TrendingUp } from "lucide-react";

export default function PrinciplesSection() {
  const principles = [
    {
      number: "01",
      title: "BUILD",
      icon: Hammer,
      statement: "Don't just talk about ideas. Build them.",
      description:
        "Execution converts raw concepts into tangible software. We prioritize working code and deployed products over idle deliberation.",
    },
    {
      number: "02",
      title: "EXPERIMENT",
      icon: FlaskConical,
      statement: "Try things. Break things. Learn faster.",
      description:
        "Innovation requires risk and rapid iteration. We test new paradigms, adopt emerging AI frameworks, and continuously push boundary limits.",
    },
    {
      number: "03",
      title: "SIMPLIFY",
      icon: Sparkles,
      statement: "Technology should solve problems, not create unnecessary complexity.",
      description:
        "We strip away feature bloat and intricate overhead. Every component, database query, and UI element must serve an explicit purpose.",
    },
    {
      number: "04",
      title: "EVOLVE",
      icon: TrendingUp,
      statement: "Every project is another step forward.",
      description:
        "Software is never static. We continuously refine systems, optimize latency, and evolve features to stay ahead of changing needs.",
    },
  ];

  return (
    <section id="principles" className="py-28 lg:py-36 relative border-t border-[#1C2A22]/60 bg-[#080A09]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#B89A5A] tracking-widest uppercase">
                07 / PRINCIPLES
              </span>
              <div className="h-[1px] w-16 bg-[#1C2A22]" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#E8E8E3] uppercase font-sans">
              GUIDING PHILOSOPHY & <br />
              <span className="text-metallic-gold">CORE VALUES.</span>
            </h2>
          </div>

          <p className="font-mono text-xs text-[#858982] max-w-xs leading-relaxed">
            // OPERATIONAL STANDARDS DRIVING EVERY LINE OF CODE
          </p>
        </div>

        {/* Grid of Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-[#101A15]/80 border border-[#1C2A22] hover:border-[#B89A5A] p-8 lg:p-10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#B89A5A] bg-[#1C2A22]/60 border border-[#1C2A22] px-3 py-1">
                      PRINCIPLE {p.number}
                    </span>
                    <Icon className="w-5 h-5 text-[#858982] group-hover:text-[#D4B978] transition-colors" />
                  </div>

                  <h3 className="text-3xl font-bold text-[#E8E8E3] tracking-tight mb-3 group-hover:text-[#D4B978] transition-colors font-sans">
                    {p.title}
                  </h3>

                  <p className="font-mono text-sm text-[#D4B978] font-semibold mb-4 leading-snug">
                    &ldquo;{p.statement}&rdquo;
                  </p>

                  <p className="text-base text-[#858982] leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1C2A22]/60 flex items-center justify-between font-mono text-[10px] text-[#858982]">
                  <span>CODE OF CONDUCT</span>
                  <span className="text-[#B89A5A]">ACTIVE RULE</span>
                </div>

                {/* Reticles */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#B89A5A] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
