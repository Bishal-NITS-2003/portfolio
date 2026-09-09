"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, BookOpen, CheckCircle2, Heart, Code2 } from "lucide-react";

export default function AboutSection() {
  const { education, personal } = portfolioData;

  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: My Story */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#c084fc] mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>ABOUT ME</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              From Mechanical Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#7c3aed]">
                to Software Development
              </span>
            </h2>

            <p className="text-gray-300 text-base leading-relaxed mb-4">
              I am a final-year undergraduate at <strong className="text-white">NIT Silchar</strong>. I chose Mechanical Engineering when joining college, but after writing my first few programs, I realized that building software was what I genuinely loved doing.
            </p>

            <div className="p-4 rounded-xl bg-[#0e0919]/90 border border-purple-900/30 mb-5 space-y-2">
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Because I wasn&apos;t in the CS branch, I spent my evenings and weekends self-studying computer science fundamentals—reading documentation, learning Data Structures & Algorithms, building web projects, and understanding how databases and servers work behind the scenes.
              </p>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Mechanical engineering taught me math, logic, and how to stay patient while debugging complicated issues. Today, I feel confident building full-stack web applications, writing clean backend APIs, and writing efficient algorithmic code.
            </p>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {education.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0e0919]/80 border border-white/10 hover:border-purple-500/30 transition-colors text-center"
                >
                  <div className="text-lg sm:text-xl font-bold text-[#c084fc] mb-1 font-mono">
                    {item.value}
                  </div>
                  <div className="text-[11px] text-gray-400 leading-tight">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#7c3aed] text-white font-semibold text-xs sm:text-sm shadow-lg shadow-purple-950/40 hover:shadow-purple-700/50 hover:opacity-95 transition-all"
              >
                Get In Touch
              </a>
              <a
                href={personal.resumeUrl}
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-xs sm:text-sm transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Column: College & CS Topics */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Degree Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0e0919]/90 border border-white/10 relative overflow-hidden shadow-xl">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#a855f7]/15 border border-[#a855f7]/30 flex items-center justify-center text-[#c084fc]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-[#c084fc] border border-purple-500/20">
                  Batch of 2025
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {education.degree}
              </h3>
              <p className="text-sm font-semibold text-[#c084fc] mb-1">
                {education.institution}
              </p>
              <p className="text-xs text-gray-400">
                {education.duration}
              </p>
            </div>

            {/* Core Coursework & CS Foundation */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0e0919]/90 border border-white/10 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                <BookOpen className="w-4 h-4 text-[#c084fc]" />
                <span>CS Fundamentals I Have Studied & Practiced</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {education.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs text-gray-300 hover:text-white transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span className="font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal motivation banner */}
            <div className="p-5 rounded-2xl bg-[#0e0919]/90 border border-white/10 flex items-start gap-3.5">
              <Heart className="w-5 h-5 text-[#c084fc] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                  What Drives Me
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  I love building things that people actually use. I am looking for a team where I can work with experienced engineers, write clean code, and keep learning every day.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
