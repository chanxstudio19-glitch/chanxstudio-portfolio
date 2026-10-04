"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Bot, Wrench, Sparkles } from "lucide-react";

export default function TechStack() {
  const [selectedGroup, setSelectedGroup] = useState<string>("ALL");

  const groups = [
    {
      category: "FRONTEND",
      icon: Code,
      items: [
        { name: "React", level: "Core UI Engine", desc: "Component architecture & reactive state" },
        { name: "Next.js", level: "Production App Framework", desc: "App Router, SSR, SSG & Edge rendering" },
        { name: "TypeScript", level: "Type System", desc: "Strict end-to-end type safety" },
      ],
    },
    {
      category: "BACKEND",
      icon: Server,
      items: [
        { name: "Node.js", level: "Async Runtime", desc: "Non-blocking event loop backend services" },
        { name: "Express", level: "REST Microservices", desc: "Lightweight API routing & middleware" },
        { name: "FastAPI", level: "Python AI Backend", desc: "High-performance async Python endpoints" },
      ],
    },
    {
      category: "DATABASE",
      icon: Database,
      items: [
        { name: "PostgreSQL", level: "Relational Storage", desc: "Acid compliant SQL & JSON indexing" },
        { name: "MySQL", level: "Relational Engine", desc: "Structured data tables & queries" },
        { name: "MongoDB", level: "Document Store", desc: "Flexible schema JSON documents" },
      ],
    },
    {
      category: "AI",
      icon: Bot,
      items: [
        { name: "OpenAI", level: "LLM API Integrations", desc: "GPT-4o, embeddings & function calling" },
        { name: "Gemini", level: "Multimodal Intelligence", desc: "Google Gemini Pro API & vision features" },
        { name: "Local Models", level: "On-Premise Privacy", desc: "Ollama, Llama 3 & localized agent tools" },
      ],
    },
    {
      category: "TOOLS",
      icon: Wrench,
      items: [
        { name: "Git", level: "Version Control", desc: "Branching workflows & version history" },
        { name: "GitHub", level: "Collaboration & CI/CD", desc: "Repository management & actions" },
        { name: "Vercel", level: "Edge Hosting", desc: "Global CDN serverless deployment" },
        { name: "Docker", level: "Containerization", desc: "Isolated service containers & orchestration" },
      ],
    },
  ];

  const categories = ["ALL", "FRONTEND", "BACKEND", "DATABASE", "AI", "TOOLS"];

  const filteredGroups = selectedGroup === "ALL" 
    ? groups 
    : groups.filter(g => g.category === selectedGroup);

  return (
    <section id="stack" className="py-24 lg:py-36 relative bg-[#080A09] border-t border-[#1C2A22]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-[#D4B978] tracking-widest uppercase font-semibold">
            05 / THE STACK
          </span>
          <div className="h-[1px] w-16 bg-[#1C2A22]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#E8E8E3] tracking-tight max-w-2xl">
            Selected technology stack for <span className="text-metallic-gold">speed, scale & longevity</span>.
          </h2>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedGroup(cat)}
                className={`font-mono text-xs px-4 py-2 border transition-all duration-300 ${
                  selectedGroup === cat
                    ? "bg-[#101A15] border-[#B89A5A] text-[#D4B978] font-bold"
                    : "bg-[#080A09] border-[#1C2A22] text-[#858982] hover:text-[#E8E8E3]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {filteredGroups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div key={group.category} className="bg-[#101A15]/60 border border-[#1C2A22] p-8 shadow-xl">
                <div className="flex items-center gap-3 pb-6 border-b border-[#1C2A22] mb-6">
                  <div className="p-2.5 bg-[#080A09] border border-[#1C2A22]">
                    <GroupIcon className="w-5 h-5 text-[#D4B978]" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#E8E8E3] tracking-wider uppercase">
                    // {group.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {group.items.map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.02 }}
                      className="group p-5 bg-[#080A09] border border-[#1C2A22] hover:border-[#B89A5A] transition-all duration-300 shadow-md"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-heading font-bold text-xl text-[#E8E8E3] group-hover:text-[#D4B978] transition-colors">
                          {tech.name}
                        </span>
                        <Sparkles className="w-4 h-4 text-[#858982] group-hover:text-[#D4B978] transition-colors" />
                      </div>
                      <p className="font-mono text-xs text-[#D4B978] mb-1 font-bold">
                        {tech.level}
                      </p>
                      <p className="text-xs text-[#858982] leading-relaxed font-light">
                        {tech.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
