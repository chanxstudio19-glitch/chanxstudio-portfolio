"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Tag, Cpu, Server, Check } from "lucide-react";

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  features: string[];
  architecture: string;
  visualType: "draco" | "aerolytix" | "sports" | "skillforge";
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080A09]/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 250 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#101A15] border border-[#1C2A22] p-6 sm:p-10 overflow-y-auto z-10 shadow-2xl"
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-[#1C2A22]">
            <div>
              <span className="font-mono text-xs text-[#B89A5A] tracking-widest uppercase">
                {project.number} // PROJECT CASE STUDY
              </span>
              <h3 className="text-3xl font-bold text-[#E8E8E3] tracking-tight mt-1">
                {project.title}
              </h3>
              <p className="font-mono text-sm text-[#D4B978] mt-0.5">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close project modal"
              className="p-2 border border-[#1C2A22] text-[#858982] hover:text-[#E8E8E3] hover:border-[#B89A5A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="mt-8 space-y-8">
            {/* Description */}
            <div>
              <h4 className="font-mono text-xs text-[#858982] uppercase tracking-widest mb-2">
                // PROJECT DESCRIPTION
              </h4>
              <p className="text-base text-[#E8E8E3] leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Tech Tags */}
            <div>
              <h4 className="font-mono text-xs text-[#858982] uppercase tracking-widest mb-3 flex items-center gap-2">
                <Tag className="w-3.5 h-3.5 text-[#B89A5A]" />
                // APPLIED TECHNOLOGIES & TAGS
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-3 py-1.5 bg-[#080A09] border border-[#1C2A22] text-[#D4B978]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights / Features */}
            <div>
              <h4 className="font-mono text-xs text-[#858982] uppercase tracking-widest mb-3 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-[#B89A5A]" />
                // ARCHITECTURAL HIGHLIGHTS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="p-3 bg-[#080A09]/70 border border-[#1C2A22] flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D4B978] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#E8E8E3]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Blueprint Spec */}
            <div className="p-5 bg-[#080A09] border border-[#1C2A22]">
              <div className="flex items-center gap-2 mb-2">
                <Server className="w-4 h-4 text-[#B89A5A]" />
                <span className="font-mono text-xs text-[#E8E8E3] font-bold tracking-wider">
                  SYSTEM OVERVIEW
                </span>
              </div>
              <p className="font-mono text-xs text-[#858982] leading-relaxed">
                {project.architecture}
              </p>
            </div>
          </div>

          {/* Footer Action */}
          <div className="mt-8 pt-6 border-t border-[#1C2A22] flex items-center justify-between">
            <span className="font-mono text-xs text-[#858982]">
              STUDIO CASE STUDY // CONFIDENTIAL ARCHITECTURE
            </span>
            <button
              onClick={onClose}
              className="flex items-center gap-2 bg-[#1C2A22] hover:bg-[#B89A5A] hover:text-[#080A09] text-[#E8E8E3] font-mono text-xs px-5 py-2.5 border border-[#B89A5A] transition-colors"
            >
              <span>CLOSE VIEW</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
