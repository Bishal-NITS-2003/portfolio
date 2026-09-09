"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  Code2
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Time SWE Role / Interview Opportunity",
    message: ""
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-900/20 to-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#c084fc] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            I am actively looking for full-time Software Engineer (SDE) roles. If you have an opportunity or want to chat, I would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Quick Contact Info & Fast Copy */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0e0919]/90 border border-purple-900/20 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-[#a855f7]/15 border border-[#a855f7]/30 flex items-center justify-center text-[#c084fc] mb-4">
                <Mail className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                My Email
              </h3>
              <p className="text-xs text-gray-400 mb-4">
                Feel free to email me directly anytime.
              </p>

              <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-mono text-gray-200 truncate">
                  {personal.email}
                </span>

                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium flex items-center gap-1.5 transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="p-6 rounded-2xl bg-[#0e0919]/90 border border-purple-900/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300">
                  <MapPin className="w-5 h-5 text-[#c084fc]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Location & Availability</h4>
                  <p className="text-xs text-gray-400">{personal.location}</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 text-purple-300 text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-ping" />
                <span>Available to start full-time in 2025 (open to remote or on-site).</span>
              </div>
            </div>

            {/* Social Connect */}
            <div className="p-6 rounded-2xl bg-[#0e0919]/90 border border-purple-900/20">
              <h4 className="text-sm font-semibold text-white mb-3">Find Me Online</h4>
              <div className="flex items-center gap-3">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-purple-900/30 border border-white/10 hover:border-purple-500/30 text-gray-300 hover:text-white transition-colors"
                  title="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-purple-900/30 border border-white/10 hover:border-purple-500/30 text-gray-300 hover:text-white transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={personal.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-purple-900/30 border border-white/10 hover:border-purple-500/30 text-gray-300 hover:text-white transition-colors"
                  title="LeetCode"
                >
                  <Code2 className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e0919]/90 border border-purple-900/20 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Send Me a Message
              </h3>
              <p className="text-xs text-gray-400 mb-6">
                You can leave a quick message below and I will get back to you as soon as possible.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 text-[#c084fc] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Received!</h4>
                  <p className="text-xs text-gray-300 max-w-sm mx-auto">
                    Thank you for reaching out! I will review your note and respond back within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-[#c084fc] hover:underline pt-2 inline-block"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Connor / Recruiter"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7]/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7]/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Subject / Role
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. SDE 1 Role at Tech Corp"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7]/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi David, we came across your projects and would love to invite you for an SWE technical interview..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7]/40 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#7c3aed] text-white font-semibold text-sm shadow-lg shadow-purple-950/50 hover:shadow-purple-700/60 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
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
