"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#05030a]/90 backdrop-blur-sm border-t border-purple-900/20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-signature text-3xl text-white">
              {portfolioData.personal.signature}
            </span>
            <p className="text-xs text-gray-400 mt-1 max-w-sm">
              NIT Silchar • Aspiring Software Engineer
            </p>
          </div>

          {/* Center Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-medium">
            <a href="#projects" className="hover:text-white transition-colors">Work</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-white transition-colors">Certificates</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-[#c084fc] transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-white/5 hover:bg-purple-950/40 border border-white/10 hover:border-purple-500/30 text-gray-300 hover:text-white transition-all duration-200 group flex items-center gap-2 text-xs"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#c084fc]" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-4">
          <p>
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>Crafted with Next.js, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
