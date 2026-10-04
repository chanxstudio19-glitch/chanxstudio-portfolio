"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ArrowRight, Code, Bot, Workflow, Layout } from "lucide-react";

export interface ServiceDetail {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  useCases: string[];
}

interface ServiceModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function ServiceModal({ service, onClose, onOpenContact }: ServiceModalProps) {
  if (!service) return null;

  const getIcon = (name: string) => {
    switch (name) {
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

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end bg-[#080A09]/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="relative w-full max-w-2xl h-full bg-[#101A15] border-l border-[#1C2A22] p-8 lg:p-12 overflow-y-auto z-10 flex flex-col justify-between shadow-2xl"
        >
          <div>
            {/* Header bar */}
            <div className="flex items-center justify-between pb-6 border-b border-[#1C2A22]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#080A09] border border-[#1C2A22]">
                  {getIcon(service.iconName)}
                </div>
                <span className="font-mono text-xs text-[#B89A5A] tracking-widest uppercase">
                  DISCIPLINE // {service.id.toUpperCase()}
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 border border-[#1C2A22] text-[#858982] hover:text-[#E8E8E3] hover:border-[#B89A5A] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Title & Tagline */}
            <div className="mt-8">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#E8E8E3] tracking-tight">
                {service.title}
              </h3>
              <p className="text-base text-[#D4B978] font-mono mt-2">{service.tagline}</p>
              <p className="text-base text-[#858982] leading-relaxed mt-4">
                {service.description}
              </p>
            </div>

            {/* Deliverables */}
            <div className="mt-8">
              <h4 className="font-mono text-xs text-[#E8E8E3] uppercase tracking-widest mb-4">
                // CORE DELIVERABLES
              </h4>
              <div className="space-y-3">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-[#080A09]/60 border border-[#1C2A22]">
                    <CheckCircle className="w-4 h-4 text-[#B89A5A] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#E8E8E3]/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className="mt-8">
              <h4 className="font-mono text-xs text-[#E8E8E3] uppercase tracking-widest mb-4">
                // FEATURED TECHNOLOGIES
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-3 py-1 bg-[#080A09] border border-[#1C2A22] text-[#D4B978]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Ideal Use Cases */}
            <div className="mt-8">
              <h4 className="font-mono text-xs text-[#E8E8E3] uppercase tracking-widest mb-4">
                // TYPICAL APPLICATION
              </h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-[#858982]">
                {service.useCases.map((useCase, idx) => (
                  <li key={idx}>{useCase}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="mt-12 pt-6 border-t border-[#1C2A22] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-mono text-xs text-[#858982]">
              READY TO DISCUSS THIS DISCIPLINE?
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1C2A22] hover:bg-[#B89A5A] hover:text-[#080A09] text-[#E8E8E3] font-mono text-xs px-6 py-3 border border-[#B89A5A] transition-all duration-300"
            >
              <span>INITIATE PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
