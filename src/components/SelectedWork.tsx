"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, LineChart, Database, GraduationCap, ShieldCheck } from "lucide-react";
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
          <div className="relative w-full h-72 sm:h-80 lg:h-96 bg-[#080A09] border border-[#1C2A22] p-8 flex flex-col justify-between overflow-hidden group-hover:border-[#B89A5A] transition-all duration-500 shadow-2xl">
            <div className="absolute inset-0 bg-grid-cyber opacity-50 pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#1C2A22]/60 rounded-full blur-3xl" />

            <div className="relative z-10 flex items-center justify-between font-mono text-xs text-[#858982]">
              <span className="flex items-center gap-2 text-[#D4B978] font-bold">
                <Cpu className="w-4 h-4" />
                LOCAL AI RUNTIME
              </span>
              <span className="bg-[#101A15] border border-[#1C2A22] px-2.5 py-1">CONFIDENTIAL // AGENT_01</span>
            </div>

            <div className="relative z-10 my-auto flex items-center justify-center">
              <div className="relative w-36 h-36 border border-[#1C2A22] rounded-full flex items-center justify-center bg-[#101A15]/90 group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                <div className="absolute inset-2 border border-dashed border-[#D4B978]/60 rounded-full animate-spin-slow" />
                <span className="font-heading text-2xl font-extrabold text-[#E8E8E3] group-hover:text-[#D4B978]">
                  DRACO
                </span>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-[#858982] border-t border-[#1C2A22] pt-3">
              <span>MODEL: LOCAL_LLM_V2</span>
              <span className="text-[#D4B978] font-bold">PRIVACY: 100% ISOLATED</span>
            </div>
          </div>
        );

      case "aerolytix":
        return (
          <div className="relative w-full h-72 sm:h-80 lg:h-96 bg-[#080A09] border border-[#1C2A22] p-8 flex flex-col justify-between overflow-hidden group-hover:border-[#B89A5A] transition-all duration-500 shadow-2xl">
            <div className="absolute inset-0 bg-dots-cyber opacity-40 pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#1C2A22]/60 rounded-full blur-3xl" />

            <div className="relative z-10 flex items-center justify-between font-mono text-xs text-[#858982]">
              <span className="flex items-center gap-2 text-[#D4B978] font-bold">
                <LineChart className="w-4 h-4" />
                AIRFARE INDEX TELEMETRY
              </span>
              <span className="bg-[#101A15] border border-[#1C2A22] px-2.5 py-1">NORMALIZED_DATA</span>
            </div>

            <div className="relative z-10 my-auto w-full px-4 flex items-end justify-between gap-2 h-32">
              {[45, 70, 40, 85, 60, 95, 50, 75, 90, 65, 100, 55].map((h, i) => (
                <div
                  key={i}
                  className="w-full bg-[#1C2A22] group-hover:bg-[#B89A5A] transition-all duration-500 rounded-t-xs"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-[#858982] border-t border-[#1C2A22] pt-3">
              <span>INGESTION: AUTOMATED SCRAPE</span>
              <span className="text-[#D4B978] font-bold">INDEX: AGGREGATED</span>
            </div>
          </div>
        );

      case "sports":
        return (
          <div className="relative w-full h-72 sm:h-80 lg:h-96 bg-[#080A09] border border-[#1C2A22] p-8 flex flex-col justify-between overflow-hidden group-hover:border-[#B89A5A] transition-all duration-500 shadow-2xl">
            <div className="absolute inset-0 bg-grid-cyber opacity-50 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between font-mono text-xs text-[#858982]">
              <span className="flex items-center gap-2 text-[#D4B978] font-bold">
                <Database className="w-4 h-4" />
                RELATIONAL DATABASE SCHEMA
              </span>
              <span className="bg-[#101A15] border border-[#1C2A22] px-2.5 py-1">PHP // MYSQL</span>
            </div>

            <div className="relative z-10 my-auto grid grid-cols-3 gap-3 w-full max-w-md mx-auto">
              {["PLAYERS", "TEAMS", "MATCHES", "SCORES", "LEAGUES", "STATS"].map((label, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#101A15] border border-[#1C2A22] group-hover:border-[#B89A5A]/60 text-center font-mono text-xs text-[#E8E8E3] font-bold shadow-md"
                >
                  {label}
                </div>
              ))}
            </div>

            <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-[#858982] border-t border-[#1C2A22] pt-3">
              <span>QUERY OPTIMIZED</span>
              <span className="text-[#D4B978] font-bold">STRUCTURED DATA</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-72 sm:h-80 lg:h-96 bg-[#080A09] border border-[#1C2A22] p-8 flex flex-col justify-between overflow-hidden group-hover:border-[#B89A5A] transition-all duration-500 shadow-2xl">
            <div className="absolute inset-0 bg-dots-cyber opacity-40 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between font-mono text-xs text-[#858982]">
              <span className="flex items-center gap-2 text-[#D4B978] font-bold">
                <GraduationCap className="w-4 h-4" />
                AI LEARNING PLATFORM
              </span>
              <span className="bg-[#101A15] border border-[#1C2A22] px-2.5 py-1">ADAPTIVE_ENGINE</span>
            </div>

            <div className="relative z-10 my-auto flex flex-col items-center gap-4">
              <div className="px-5 py-2.5 bg-[#101A15] border border-[#B89A5A] font-mono text-xs text-[#D4B978] font-bold shadow-lg">
                PERSONALIZED SKILL ROADMAP
              </div>
              <div className="w-[1px] h-8 bg-[#1C2A22]" />
              <div className="flex gap-4">
                <div className="px-4 py-1.5 bg-[#101A15] border border-[#1C2A22] font-mono text-xs text-[#E8E8E3]">
                  MODULE 01
                </div>
                <div className="px-4 py-1.5 bg-[#101A15] border border-[#1C2A22] font-mono text-xs text-[#E8E8E3]">
                  MODULE 02
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-[#858982] border-t border-[#1C2A22] pt-3">
              <span>FEEDBACK: REAL-TIME</span>
              <span className="text-[#D4B978] font-bold">INTERACTIVE UI</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="work" className="py-24 lg:py-36 relative bg-[#080A09] border-t border-[#1C2A22]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-[#D4B978] tracking-widest uppercase font-semibold">
            03 / SELECTED WORK
          </span>
          <div className="h-[1px] w-16 bg-[#1C2A22]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#E8E8E3] tracking-tight max-w-2xl">
            Selected products built with <span className="text-metallic-gold">precision & performance</span>.
          </h2>
          <span className="font-mono text-xs text-[#858982] uppercase tracking-wider">
            SHOWCASING 04 FEATURED PROJECTS
          </span>
        </div>

        {/* 4 Large Project Cards */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#101A15]/70 border border-[#1C2A22] p-6 lg:p-10 hover:border-[#B89A5A] transition-all duration-500 shadow-2xl"
            >
              {/* Visual Area */}
              <div className="lg:col-span-6 cursor-pointer" onClick={() => setSelectedProject(project)}>
                {renderProjectVisual(project.visualType)}
              </div>

              {/* Content Area */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#D4B978] tracking-widest font-bold">
                      {project.number}
                    </span>
                    <span className="font-mono text-xs text-[#858982]">
                      {project.subtitle}
                    </span>
                  </div>

                  <h3 className="font-heading text-3xl lg:text-5xl font-bold text-[#E8E8E3] group-hover:text-[#D4B978] transition-colors tracking-tight mb-4">
                    {project.title}
                  </h3>

                  <p className="text-base text-[#858982] leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="font-mono text-xs px-3 py-1 bg-[#080A09] border border-[#1C2A22] text-[#D4B978]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 bg-[#101A15] border border-[#1C2A22] group-hover:border-[#B89A5A] px-6 py-3.5 font-mono text-xs tracking-widest text-[#E8E8E3] group-hover:text-[#D4B978] group-hover:bg-[#1C2A22] transition-all duration-300 shadow-lg"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D4B978] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
