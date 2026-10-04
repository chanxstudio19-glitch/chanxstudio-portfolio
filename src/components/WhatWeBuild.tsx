"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Bot, Workflow, Layout, ArrowUpRight } from "lucide-react";
import ServiceModal, { ServiceDetail } from "./ServiceModal";

export default function WhatWeBuild() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const services: ServiceDetail[] = [
    {
      id: "software",
      title: "SOFTWARE",
      iconName: "software",
      tagline: "Custom web applications, platforms, and resilient system architecture.",
      description:
        "Web applications, platforms and custom software built around real-world requirements. We focus on clean data modeling, responsive client applications, and resilient backends.",
      deliverables: [
        "Full-stack Web Applications & SaaS Platforms",
        "High-performance REST & GraphQL APIs",
        "Database Architecture & Data Normalization",
        "Authentication & Security Infrastructure",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "FastAPI", "PostgreSQL", "MySQL"],
      useCases: [
        "SaaS product platforms needing rapid market launch",
        "Enterprise analytics and workflow portals",
        "Custom APIs and service integrations",
      ],
    },
    {
      id: "ai",
      title: "AI",
      iconName: "ai",
      tagline: "AI-powered applications, local models, and practical workflow intelligence.",
      description:
        "AI-powered applications, intelligent assistants and practical AI integrations. Moving beyond hype to implement intelligent workflows that automate complex tasks.",
      deliverables: [
        "Local-First & Cloud AI Agent Engineering",
        "RAG (Retrieval-Augmented Generation) Knowledge Pipelines",
        "LLM API Integrations (OpenAI, Gemini, Ollama)",
        "Intelligent Document & Data Extraction",
      ],
      technologies: ["OpenAI API", "Gemini Pro", "Local LLMs", "Python / FastAPI", "LangChain", "Vector DBs"],
      useCases: [
        "Automated internal document summary & search",
        "Personalized AI copilots for specific industry tools",
        "Automated customer support & triage workflows",
      ],
    },
    {
      id: "automation",
      title: "AUTOMATION",
      iconName: "automation",
      tagline: "Background engines, web data extraction, and interconnected systems.",
      description:
        "Systems that reduce repetitive work and connect workflows. We engineer robust automated scrapers, web data collection pipelines, and scheduled sync jobs.",
      deliverables: [
        "Custom Web Scraping & Data Extraction Engines",
        "Cross-platform Webhook & API Synchronization",
        "Automated ETL Pipelines & Report Generation",
        "Headless Browser Automation (Playwright / Puppeteer)",
      ],
      technologies: ["Node.js", "Python", "Docker", "Cron / Queue Workers", "Selenium / Playwright"],
      useCases: [
        "Competitor price tracking & market analytics",
        "Automated multi-system sync without manual data entry",
        "Scheduled intelligence digests & alerting systems",
      ],
    },
    {
      id: "digital-experiences",
      title: "DIGITAL EXPERIENCES",
      iconName: "digital-experiences",
      tagline: "Cinematic, responsive UI/UX interfaces built with obsessive attention to detail.",
      description:
        "Modern interfaces, dashboards and product experiences designed around users. Combining editorial visual direction with fluid dynamic interactions.",
      deliverables: [
        "High-end Interactive Web Design & Frontend Engineering",
        "Complex Data Visualization & Dashboard UI",
        "Design System Development & Component Libraries",
        "Mobile-first Responsive Architecture",
      ],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "HTML5 Canvas", "Lucide Icons", "TypeScript"],
      useCases: [
        "Studio portfolio sites and digital brand flagship experiences",
        "Executive dashboards requiring high visual polish",
        "Interactive product walk-throughs & demos",
      ],
    },
  ];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "software":
        return <Code className="w-6 h-6 text-[#D4B978]" />;
      case "ai":
        return <Bot className="w-6 h-6 text-[#D4B978]" />;
      case "automation":
        return <Workflow className="w-6 h-6 text-[#D4B978]" />;
      default:
        return <Layout className="w-6 h-6 text-[#D4B978]" />;
    }
  };

  const handleOpenContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 lg:py-36 relative bg-[#080A09] border-t border-[#1C2A22]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-[#B89A5A] tracking-widest uppercase">
            02 / WHAT WE BUILD
          </span>
          <div className="h-[1px] w-12 bg-[#1C2A22]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8E8E3] tracking-tight max-w-2xl">
            Core technical disciplines designed for <span className="text-metallic-gold">real-world impact</span>.
          </h2>
          <p className="font-mono text-xs text-[#858982] max-w-xs leading-relaxed">
            Click any discipline to examine detailed technical capabilities and deliverables.
          </p>
        </div>

        {/* 4 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="group relative bg-[#101A15]/70 border border-[#1C2A22] p-8 lg:p-10 flex flex-col justify-between hover:border-[#B89A5A] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Subtle top glow bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B89A5A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-[#080A09] border border-[#1C2A22] group-hover:border-[#B89A5A] transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="font-mono text-xs text-[#858982] group-hover:text-[#D4B978] transition-colors">
                    0{index + 1} // DISCIPLINE
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-[#E8E8E3] group-hover:text-[#D4B978] transition-colors tracking-tight mb-4">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#858982] leading-relaxed group-hover:text-[#E8E8E3]/80 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="mt-10 pt-6 border-t border-[#1C2A22]/60 flex items-center justify-between">
                <span className="font-mono text-xs text-[#B89A5A] group-hover:underline">
                  EXPLORE SPECIFICATIONS
                </span>
                <div className="w-8 h-8 rounded-full border border-[#1C2A22] group-hover:border-[#B89A5A] group-hover:bg-[#1C2A22] flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-[#E8E8E3] group-hover:text-[#D4B978] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Drawer */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenContact={handleOpenContact}
      />
    </section>
  );
}
