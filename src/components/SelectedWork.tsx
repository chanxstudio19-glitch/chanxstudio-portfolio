"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, LineChart, Database, GraduationCap } from "lucide-react";
import ProjectModal, { ProjectData } from "./ProjectModal";

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      id: "draco",
      number: "PROJECT 01",
      title: "DRACO",
      subtitle: "AI Personal Assistant",
      description:
        "A local-first AI agent designed to interact with applications, tools, files and workflows while maintaining a personalized assistant experience.",
      tags: ["AI", "Automation", "Local AI", "TypeScript"],
      features: [
        "Local-first execution model ensuring data privacy",
        "Tool-augmented agent architecture for file & app control",
        "Personalized assistant context & memory persistence",
        "Modular TypeScript plugin engine for custom integrations",
      ],
      architecture:
        "Built with TypeScript and local LLM runtime connectors. Features an asynchronous execution loop, vector memory store, and zero-trust local RPC interface.",
      visualType: "draco",
    },
    {
      id: "aerolytix",
      number: "PROJECT 02",
      title: "AerolytiX",
      subtitle: "Airfare Analytics Platform",
      description:
        "A data-driven platform designed to collect, normalize and analyze domestic airfare data to generate a representative airfare price index.",
      tags: ["Data", "Analytics", "Web", "Automation"],
      features: [
        "Automated flight data ingestion & price polling engine",
        "Data normalization pipelines across multiple airlines",
        "Representative airfare index calculation algorithm",
        "Interactive analytics dashboard with historic trend charts",
      ],
      architecture:
        "Full-stack data processing pipeline utilizing automated scrapers, relational time-series database storage, and a responsive analytics frontend.",
      visualType: "aerolytix",
    },
    {
      id: "sports-archive",
      number: "PROJECT 03",
      title: "Sports Archive",
      subtitle: "Sports Database Platform",
      description:
        "A sports-focused database application built as a full-stack academic project with structured data management and user-facing interfaces.",
      tags: ["Web", "Database", "PHP", "MySQL"],
      features: [
        "Relational MySQL schema for team & player telemetry",
        "CRUD interfaces for structured data entry & filtering",
        "Optimized relational query performance for multi-season stats",
        "Clean server-rendered PHP web interface",
      ],
      architecture:
        "Structured PHP/MySQL architecture emphasizing relational integrity, parameterized database queries, and modular view templates.",
      visualType: "sports",
    },
    {
      id: "skillforge-ai",
      number: "PROJECT 04",
      title: "SkillForge-AI",
      subtitle: "AI Learning Platform",
      description:
        "An AI-powered learning platform focused on helping users develop skills through personalized digital experiences.",
      tags: ["AI", "Web", "JavaScript"],
      features: [
        "Adaptive AI module generation tailored to user pace",
        "Interactive skill assessment & progress tracking",
        "Clean digital experience with real-time feedback loops",
        "Client-side JavaScript state management",
      ],
      architecture:
        "Client-centric web application powered by JavaScript and generative AI API hooks, offering interactive learning modules and skill roadmaps.",
      visualType: "skillforge",
    },
  ];

  const renderProjectVisual = (type: string) => {
    switch (type) {
      case "draco":
        return (
          <div className="relative w-full h-64 sm:h-72 lg:h-80 bg-[#080A09] border border-[#1C2A22] p-6 flex flex-col justify-between overflow-hidden group-hover:border-[#B89A5A]/60 transition-colors">
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#1C2A22]/50 rounded-full blur-2xl" />

            <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-[#858982]">
              <span className="flex items-center gap-2 text-[#D4B978]">
                <Cpu className="w-3.5 h-3.5" />
                LOCAL AI RUNTIME
              </span>
              <span>CONFIDENTIAL // AGENT_01</span>
            </div>

            <div className="relative z-10 my-auto flex items-center justify-center">
              <div className="relative w-28 h-28 border border-[#1C2A22] rounded-full flex items-center justify-center bg-[#101A15]/80 group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-2 border border-dashed border-[#B89A5A]/50 rounded-full animate-spin-slow" />
                <span className="font-mono text-xl font-bold text-[#E8E8E3] group-hover:text-[#D4B978]">
                  DRACO
                </span>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-[#858982] border-t border-[#1C2A22]/50 pt-2">
              <span>MODEL: LOCAL_LLM_V2</span>
              <span className="text-[#D4B978]">PRIVACY: 100% ISOLATED</span>
            </div>
          </div>
        );

      case "aerolytix":
        return (
          <div className="relative w-full h-64 sm:h-72 lg:h-80 bg-[#080A09] border border-[#1C2A22] p-6 flex flex-col justify-between overflow-hidden group-hover:border-[#B89A5A]/60 transition-colors">
            <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#1C2A22]/50 rounded-full blur-2xl" />

            <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-[#858982]">
              <span className="flex items-center gap-2 text-[#D4B978]">
                <LineChart className="w-3.5 h-3.5" />
                AIRFARE INDEX TELEMETRY
              </span>
              <span>NORMALIZED_DATA</span>
            </div>

            <div className="relative z-10 my-auto w-full px-4 flex items-end justify-between gap-1.5 h-24">
              {[40, 65, 35, 80, 55, 90, 45, 70, 85, 60, 95, 50].map((h, i) => (
                <div
                  key={i}
                  className="w-full bg-[#1C2A22] group-hover:bg-[#B89A5A] transition-colors duration-300 rounded-t-xs"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-[#858982] border-t border-[#1C2A22]/50 pt-2">
              <span>INGESTION: AUTOMATED SCRAPE</span>
              <span className="text-[#D4B978]">INDEX: AGGREGATED</span>
            </div>
          </div>
        );

      case "sports":
        return (
          <div className="relative w-full h-64 sm:h-72 lg:h-80 bg-[#080A09] border border-[#1C2A22] p-6 flex flex-col justify-between overflow-hidden group-hover:border-[#B89A5A]/60 transition-colors">
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-[#858982]">
              <span className="flex items-center gap-2 text-[#D4B978]">
                <Database className="w-3.5 h-3.5" />
                RELATIONAL DATABASE SCHEMA
              </span>
              <span>PHP // MYSQL</span>
            </div>

            <div className="relative z-10 my-auto grid grid-cols-3 gap-3 w-full max-w-sm mx-auto">
              {["PLAYERS", "TEAMS", "MATCHES", "SCORES", "LEAGUES", "STATS"].map((label, idx) => (
                <div
                  key={idx}
                  className="p-2.5 bg-[#101A15] border border-[#1C2A22] group-hover:border-[#B89A5A]/50 text-center font-mono text-[11px] text-[#E8E8E3]"
                >
                  {label}
                </div>
              ))}
            </div>

            <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-[#858982] border-t border-[#1C2A22]/50 pt-2">
              <span>QUERY OPTIMIZED</span>
              <span className="text-[#D4B978]">STRUCTURED DATA</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-64 sm:h-72 lg:h-80 bg-[#080A09] border border-[#1C2A22] p-6 flex flex-col justify-between overflow-hidden group-hover:border-[#B89A5A]/60 transition-colors">
            <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-[#858982]">
              <span className="flex items-center gap-2 text-[#D4B978]">
                <GraduationCap className="w-3.5 h-3.5" />
                AI LEARNING PLATFORM
              </span>
              <span>ADAPTIVE_ENGINE</span>
            </div>

            <div className="relative z-10 my-auto flex flex-col items-center gap-3">
              <div className="px-4 py-2 bg-[#101A15] border border-[#B89A5A] font-mono text-xs text-[#D4B978]">
                PERSONALIZED SKILL ROADMAP
              </div>
              <div className="w-[1px] h-6 bg-[#1C2A22]" />
              <div className="flex gap-4">
                <div className="px-3 py-1 bg-[#101A15] border border-[#1C2A22] font-mono text-[10px] text-[#E8E8E3]">
                  MODULE 01
                </div>
                <div className="px-3 py-1 bg-[#101A15] border border-[#1C2A22] font-mono text-[10px] text-[#E8E8E3]">
                  MODULE 02
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-[#858982] border-t border-[#1C2A22]/50 pt-2">
              <span>FEEDBACK: REAL-TIME</span>
              <span className="text-[#D4B978]">INTERACTIVE UI</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="work" className="py-24 lg:py-36 relative bg-[#080A09] border-t border-[#1C2A22]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-[#B89A5A] tracking-widest uppercase">
            03 / SELECTED WORK
          </span>
          <div className="h-[1px] w-12 bg-[#1C2A22]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8E8E3] tracking-tight max-w-2xl">
            Selected products built with <span className="text-metallic-gold">precision & performance</span>.
          </h2>
          <span className="font-mono text-xs text-[#858982]">
            SHOWCASING 04 FEATURED PROJECTS
          </span>
        </div>

        {/* 4 Large Project Cards */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#101A15]/40 border border-[#1C2A22] p-6 lg:p-10 hover:border-[#B89A5A]/50 transition-all duration-300"
            >
              {/* Project Visual Area */}
              <div className="lg:col-span-6 cursor-pointer" onClick={() => setSelectedProject(project)}>
                {renderProjectVisual(project.visualType)}
              </div>

              {/* Project Content Area */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#B89A5A] tracking-widest font-bold">
                      {project.number}
                    </span>
                    <span className="font-mono text-xs text-[#858982]">
                      {project.subtitle}
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-[#E8E8E3] group-hover:text-[#D4B978] transition-colors tracking-tight mb-4">
                    {project.title}
                  </h3>

                  <p className="text-base text-[#858982] leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="font-mono text-xs px-3 py-1 bg-[#080A09] border border-[#1C2A22] text-[#E8E8E3]/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 bg-[#101A15] border border-[#1C2A22] group-hover:border-[#B89A5A] px-6 py-3 font-mono text-xs tracking-widest text-[#E8E8E3] group-hover:text-[#D4B978] group-hover:bg-[#1C2A22] transition-all duration-300"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B89A5A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
