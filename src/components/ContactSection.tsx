"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, ArrowUpRight, Sparkles, Terminal, Mail, User, DollarSign, Briefcase } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Software Development",
    budget: "$2k - $5k",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#B89A5A", "#D4B978", "#1C2A22", "#E8E8E3"],
        });
      } catch (err) {
        console.log("Confetti trigger:", err);
      }
    }, 1000);
  };

  return (
    <section id="contact" className="py-28 lg:py-36 relative border-t border-[#1C2A22]/60 bg-[#0A0D0B]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#1C2A22]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#B89A5A] tracking-widest uppercase">
                INQUIRIES & COLLABORATION
              </span>
              <div className="h-[1px] w-16 bg-[#1C2A22]" />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#E8E8E3] uppercase leading-[1.08] font-sans"
            >
              HAVE SOMETHING <br />
              <span className="text-metallic-gold">TO BUILD?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-xl text-[#E8E8E3]/90 leading-relaxed font-light"
            >
              Tell us what you&apos;re working on. <br />
              We&apos;ll figure out the rest.
            </motion.p>

            {/* Quick Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 p-6 bg-[#101A15] border border-[#1C2A22] w-full space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#1C2A22] pb-3">
                <span className="font-mono text-xs text-[#858982]">DIRECT EMAIL</span>
                <span className="font-mono text-xs text-[#D4B978]">studio@chanx.dev</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1C2A22] pb-3">
                <span className="font-mono text-xs text-[#858982]">LOCATION</span>
                <span className="font-mono text-xs text-[#E8E8E3]">Global / Remote First</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#858982]">RESPONSE TIME</span>
                <span className="font-mono text-xs text-[#E8E8E3]">&lt; 24 Hours</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#101A15] border border-[#1C2A22] p-8 sm:p-10 relative shadow-2xl"
            >
              {/* Form Title Header */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#1C2A22]">
                <div className="flex items-center gap-3">
                  <Terminal className="w-4 h-4 text-[#B89A5A]" />
                  <span className="font-mono text-xs text-[#E8E8E3] tracking-widest uppercase font-bold">
                    [ START A PROJECT ]
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#858982]">PROJECT INQUIRY FORM</span>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in duration-500">
                  <div className="w-16 h-16 border border-[#B89A5A] bg-[#1C2A22]/40 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#D4B978]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#E8E8E3]">INQUIRY RECEIVED</h3>
                  <p className="text-sm text-[#858982] max-w-md">
                    Thank you, <span className="text-[#E8E8E3] font-bold">{formData.name}</span>. Your project message has been dispatched to Kirunith. We will review your requirements and reach out within 24 hours.
                  </p>
                  <div className="font-mono text-xs text-[#B89A5A] bg-[#080A09] border border-[#1C2A22] px-4 py-2 mt-4">
                    REF.ID // CX-INQ-{(Math.random() * 10000).toFixed(0)}
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        projectType: "Software Development",
                        budget: "$2k - $5k",
                        message: "",
                      });
                    }}
                    className="font-mono text-xs text-[#858982] hover:text-[#E8E8E3] underline mt-4"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs text-[#858982] mb-2 uppercase tracking-wider">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-[#080A09] border border-[#1C2A22] focus:border-[#B89A5A] px-4 py-3 font-sans text-sm text-[#E8E8E3] placeholder-[#858982]/40 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-[#858982] mb-2 uppercase tracking-wider">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full bg-[#080A09] border border-[#1C2A22] focus:border-[#B89A5A] px-4 py-3 font-sans text-sm text-[#E8E8E3] placeholder-[#858982]/40 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs text-[#858982] mb-2 uppercase tracking-wider">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-[#080A09] border border-[#1C2A22] focus:border-[#B89A5A] px-4 py-3 font-sans text-sm text-[#E8E8E3] outline-none transition-colors cursor-pointer"
                      >
                        <option value="Software Development">Software Development</option>
                        <option value="AI Application">AI Application</option>
                        <option value="Automation Pipeline">Automation Pipeline</option>
                        <option value="Digital Experience">Digital Experience</option>
                        <option value="Other / Custom">Other / Custom</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-[#858982] mb-2 uppercase tracking-wider">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#080A09] border border-[#1C2A22] focus:border-[#B89A5A] px-4 py-3 font-sans text-sm text-[#E8E8E3] outline-none transition-colors cursor-pointer"
                      >
                        <option value="< $2k">&lt; $2,000</option>
                        <option value="$2k - $5k">$2,000 - $5,000</option>
                        <option value="$5k - $10k">$5,000 - $10,000</option>
                        <option value="$10k+">$10,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-xs text-[#858982] mb-2 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timeline, and goals..."
                      className="w-full bg-[#080A09] border border-[#1C2A22] focus:border-[#B89A5A] px-4 py-3 font-sans text-sm text-[#E8E8E3] placeholder-[#858982]/40 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full group relative inline-flex items-center justify-center gap-3 bg-[#080A09] border border-[#B89A5A] hover:bg-[#1C2A22] px-8 py-4 font-mono text-xs tracking-[0.2em] text-[#D4B978] hover:text-[#E8E8E3] transition-all duration-300 disabled:opacity-50"
                  >
                    <span>{loading ? "TRANSMITTING..." : "[ SEND INQUIRY ]"}</span>
                    <Send className="w-4 h-4 text-[#B89A5A] group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}

              {/* Sci-fi accents */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#B89A5A]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#B89A5A]" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
