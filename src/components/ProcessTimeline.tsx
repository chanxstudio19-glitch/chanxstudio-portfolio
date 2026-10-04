"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, PenTool, Code2, Rocket, TrendingUp, CheckCircle2 } from "lucide-react";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "DISCOVER",
      summary: "Understand the idea, problem and users.",
      details:
        "We dissect core goals, technical constraints, user requirements, and market realities to establish a clear architectural roadmap before writing code.",
      icon: Compass,
      deliverables: ["Product Specification", "Technical Feasibility Analysis", "System Architecture Blueprint"],
    },
    {
      number: "02",
      title: "DESIGN",
      summary: "Shape the experience, architecture and interface.",
      details:
        "Formulating low-latency data schemas, UI design systems, component hierarchies, and interactive prototypes with dark visual direction.",
      icon: PenTool,
      deliverables: ["Interactive UI Prototypes", "Database Schemas", "API Specs"],
    },
    {
      number: "03",
      title: "BUILD",
      summary: "Develop the product with the right technology.",
      details:
        "Writing modular TypeScript, modern web frameworks, AI integrations, or custom automation backends with continuous testing.",
      icon: Code2,
      deliverables: ["Production Codebase", "AI/Automation Connectors", "Automated Test Coverage"],
    },
    {
      number: "04",
      title: "LAUNCH",
      summary: "Deploy, test and deliver the product.",
      details:
        "Deploying to cloud edge infrastructures (Vercel, Docker, AWS), conducting real-world load tests, domain setup, and production handoff.",
      icon: Rocket,
      deliverables: ["Production Edge Deployment", "Performance Audit", "Documentation & Handoff"],
    },
    {
      number: "05",
      title: "EVOLVE",
      summary: "Improve, maintain and scale.",
      details:
        "Continuous monitoring, feature iteration, model fine-tuning, and infrastructure scaling to keep products ahead of requirements.",
      icon: TrendingUp,
      deliverables: ["Telemetry & Error Logs", "Iterative Feature Updates", "Scale Infrastructure"],
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-36 relative bg-[#080A09] border-t border-[#1C2A22]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-[#D4B978] tracking-widest uppercase font-semibold">
            04 / HOW WE BUILD
          </span>
          <div className="h-[1px] w-16 bg-[#1C2A22]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#E8E8E3] tracking-tight max-w-2xl">
            A disciplined 5-step methodology from <span className="text-metallic-gold">concept to code</span>.
          </h2>
          <p className="font-mono text-xs text-[#858982]">
            SELECT A STEP TO INSPECT SPECIFICATIONS
          </p>
        </div>

        {/* Timeline Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Step Selector List (Left) */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 border transition-all duration-300 cursor-pointer flex items-center justify-between shadow-lg ${
                    isActive
                      ? "bg-[#101A15] border-[#B89A5A]"
                      : "bg-[#101A15]/40 border-[#1C2A22] hover:border-[#1C2A22]/80 hover:bg-[#101A15]/70"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-sm font-bold ${
                        isActive ? "text-[#D4B978]" : "text-[#858982]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h3
                        className={`font-heading text-lg font-bold tracking-tight ${
                          isActive ? "text-[#E8E8E3]" : "text-[#858982]"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#858982] mt-0.5 line-clamp-1 font-light">
                        {step.summary}
                      </p>
                    </div>
                  </div>
                  <Icon
                    className={`w-5 h-5 shrink-0 ${
                      isActive ? "text-[#D4B978]" : "text-[#858982]/50"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Active Step Spec Card (Right) */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#101A15] border border-[#1C2A22] p-8 lg:p-12 relative overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#1C2A22] pb-6 mb-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#D4B978] tracking-widest font-bold">
                    STEP {steps[activeStep].number} OF 05
                  </span>
                  <span className="font-mono text-xs text-[#858982]">
                    // METHODOLOGY SPEC
                  </span>
                </div>
                <div className="px-3 py-1 bg-[#080A09] border border-[#1C2A22] font-mono text-[10px] text-[#D4B978] font-bold">
                  STATUS: STANDARDIZED
                </div>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#E8E8E3] tracking-tight mb-3">
                0{activeStep + 1} // {steps[activeStep].title}
              </h3>
              <p className="text-lg text-[#D4B978] font-mono mb-4">
                "{steps[activeStep].summary}"
              </p>
              <p className="text-base text-[#858982] leading-relaxed mb-8 font-light">
                {steps[activeStep].details}
              </p>

              <div>
                <h4 className="font-mono text-xs text-[#E8E8E3] uppercase tracking-widest mb-4">
                  // EXPECTED DELIVERABLES & MILESTONES
                </h4>
                <div className="space-y-3">
                  {steps[activeStep].deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="p-3.5 bg-[#080A09] border border-[#1C2A22] flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D4B978] shrink-0" />
                      <span className="text-xs font-mono text-[#E8E8E3]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-[#1C2A22] flex items-center gap-2">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full transition-colors duration-300 ${
                      i <= activeStep ? "bg-[#D4B978]" : "bg-[#1C2A22]"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
