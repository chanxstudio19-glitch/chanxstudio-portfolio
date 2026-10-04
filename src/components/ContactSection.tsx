"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, ArrowUpRight, Instagram, Github, Linkedin } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Software",
    budget: "$5k-$15k",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#b89a5a", "#d4b978", "#1c2a22", "#e8e8e3"],
      });
    }, 700);
  };

  const projectTypes = [
    "Software",
    "AI",
    "Automation",
    "Digital Experience",
    "Other",
  ];

  const budgets = ["< $5k", "$5k - $15k", "$15k - $30k", "$30k+"];

  return (
    <section id="contact" className="py-24 lg:py-36 relative bg-[#080A09] border-t border-[#1C2A22]">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#1C2A22]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-[#D4B978] tracking-widest uppercase font-semibold">
            08 / INITIATE PROJECT
          </span>
          <div className="h-[1px] w-16 bg-[#1C2A22]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#E8E8E3] tracking-tight leading-[1.05] mb-6">
                HAVE SOMETHING TO <br />
                <span className="text-metallic-gold">BUILD?</span>
              </h2>

              <p className="text-lg text-[#858982] leading-relaxed mb-8 font-light">
                Tell us what you're working on. <br />
                We'll figure out the rest.
              </p>

              <div className="p-6 bg-[#101A15]/80 border border-[#1C2A22] mb-8 space-y-3 font-mono text-xs shadow-xl">
                <div className="flex justify-between border-b border-[#1C2A22] pb-2.5">
                  <span className="text-[#858982]">STUDIO</span>
                  <span className="text-[#E8E8E3] font-bold">CHAN X STUDIO</span>
                </div>
                <div className="flex justify-between border-b border-[#1C2A22] pb-2.5">
                  <span className="text-[#858982]">FOUNDER</span>
                  <span className="text-[#D4B978] font-bold">Kirunith</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#858982]">RESPONSE TIME</span>
                  <span className="text-[#E8E8E3]">Within 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div>
              <h4 className="font-mono text-xs text-[#E8E8E3] uppercase tracking-widest mb-4 font-bold">
                // CONNECT DIRECTLY
              </h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="flex items-center gap-2 bg-[#1C2A22] border border-[#B89A5A] px-4 py-2.5 font-mono text-xs text-[#D4B978] hover:bg-[#B89A5A] hover:text-[#080A09] transition-all duration-300 font-bold"
                >
                  <span>START A PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#080A09] border border-[#1C2A22] hover:border-[#B89A5A] px-4 py-2.5 font-mono text-xs text-[#858982] hover:text-[#E8E8E3] transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>INSTAGRAM</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#080A09] border border-[#1C2A22] hover:border-[#B89A5A] px-4 py-2.5 font-mono text-xs text-[#858982] hover:text-[#E8E8E3] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#080A09] border border-[#1C2A22] hover:border-[#B89A5A] px-4 py-2.5 font-mono text-xs text-[#858982] hover:text-[#E8E8E3] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#101A15] border border-[#1C2A22] p-8 lg:p-12 shadow-2xl relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1C2A22] border border-[#B89A5A] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#D4B978]" />
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-[#E8E8E3] tracking-tight mb-2">
                    INQUIRY TRANSMITTED
                  </h3>
                  <p className="text-sm text-[#858982] max-w-md mb-6 leading-relaxed font-light">
                    Thank you, <span className="text-[#E8E8E3] font-medium">{formData.name}</span>. Your project details have been recorded. Kirunith will review your inquiry and reach out shortly.
                  </p>
                  <div className="p-4 bg-[#080A09] border border-[#1C2A22] font-mono text-xs text-[#D4B978] font-bold">
                    REF // {Math.random().toString(36).substring(2, 9).toUpperCase()}
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        projectType: "Software",
                        budget: "$5k-$15k",
                        message: "",
                      });
                    }}
                    className="mt-8 font-mono text-xs text-[#858982] underline hover:text-[#E8E8E3]"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[#1C2A22] pb-4 mb-2">
                    <span className="font-mono text-xs text-[#D4B978] uppercase tracking-widest font-bold">
                      PROJECT INQUIRY FORM
                    </span>
                    <span className="font-mono text-[10px] text-[#858982]">
                      SECURE SUBMISSION
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs text-[#E8E8E3] uppercase tracking-wider mb-2 font-bold">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Vance"
                        className="w-full bg-[#080A09] border border-[#1C2A22] focus:border-[#B89A5A] px-4 py-3.5 text-sm text-[#E8E8E3] placeholder-[#858982]/50 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-[#E8E8E3] uppercase tracking-wider mb-2 font-bold">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full bg-[#080A09] border border-[#1C2A22] focus:border-[#B89A5A] px-4 py-3.5 text-sm text-[#E8E8E3] placeholder-[#858982]/50 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#E8E8E3] uppercase tracking-wider mb-2 font-bold">
                      PROJECT TYPE
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`font-mono text-xs px-4 py-2 border transition-all ${
                            formData.projectType === type
                              ? "bg-[#1C2A22] border-[#B89A5A] text-[#D4B978] font-bold"
                              : "bg-[#080A09] border-[#1C2A22] text-[#858982] hover:text-[#E8E8E3]"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#E8E8E3] uppercase tracking-wider mb-2 font-bold">
                      ESTIMATED BUDGET RANGE
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`font-mono text-xs py-2 border text-center transition-all ${
                            formData.budget === b
                              ? "bg-[#1C2A22] border-[#B89A5A] text-[#D4B978] font-bold"
                              : "bg-[#080A09] border-[#1C2A22] text-[#858982] hover:text-[#E8E8E3]"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#E8E8E3] uppercase tracking-wider mb-2 font-bold">
                      PROJECT DETAILS & OBJECTIVES *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your idea, requirements, timeline, or key objectives..."
                      className="w-full bg-[#080A09] border border-[#1C2A22] focus:border-[#B89A5A] px-4 py-3.5 text-sm text-[#E8E8E3] placeholder-[#858982]/50 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#1C2A22] hover:bg-[#B89A5A] hover:text-[#080A09] text-[#E8E8E3] font-mono text-xs px-8 py-4 border border-[#B89A5A] transition-all duration-300 group font-bold shadow-xl"
                  >
                    <span>{loading ? "TRANSMITTING..." : "SUBMIT INQUIRY"}</span>
                    <Send className="w-4 h-4 text-[#D4B978] group-hover:text-[#080A09] group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
