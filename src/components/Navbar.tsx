"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./BrandIcons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#05030a]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Signature Brand Name */}
        <a
          href="#"
          className="group flex items-center gap-2 focus:outline-none"
          aria-label="Home"
        >
          <span className="font-signature text-3xl sm:text-4xl text-white tracking-wide transition-transform group-hover:scale-105 duration-200">
            {portfolioData.personal.signature}
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#a855f7] animate-pulse shadow-[0_0_8px_#a855f7]"></span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a
            href="#projects"
            className="hover:text-white transition-colors duration-200 relative group py-1"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#c084fc] to-[#a855f7] transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a
            href="#skills"
            className="hover:text-white transition-colors duration-200 relative group py-1"
          >
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#c084fc] to-[#a855f7] transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a
            href="#experience"
            className="hover:text-white transition-colors duration-200 relative group py-1"
          >
            Experience
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#c084fc] to-[#a855f7] transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="hover:text-white transition-colors duration-200 relative group py-1"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#c084fc] to-[#a855f7] transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors duration-200 relative group py-1"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#c084fc] to-[#a855f7] transition-all duration-200 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Right: Outlined Circular Social Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={portfolioData.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#a855f7] hover:bg-[#a855f7]/10 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-all duration-200"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#a855f7] hover:bg-[#a855f7]/10 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-all duration-200"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#a855f7] hover:bg-[#a855f7]/10 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-all duration-200"
            title="LeetCode Profile"
          >
            <LeetcodeIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.resumeUrl}
            className="ml-2 px-4 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-[#a855f7] border border-white/20 hover:border-[#a855f7] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-[#0f1017]/95 backdrop-blur-xl border-b border-white/10 flex flex-col gap-4 text-base font-medium">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-white py-2"
          >
            Work & Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-white py-2"
          >
            Skills & Tech Stack
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-white py-2"
          >
            Experience
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-white py-2"
          >
            About & Education
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#c084fc] font-semibold py-2"
          >
            Contact
          </a>

          <div className="pt-3 border-t border-white/10 flex items-center gap-4">
            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-300"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-300"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-300"
            >
              <LeetcodeIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.resumeUrl}
              className="flex-1 py-2 text-center text-xs font-semibold text-white bg-gradient-to-r from-[#a855f7] to-[#7c3aed] rounded-full shadow-lg shadow-[#a855f7]/30"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
