"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#c084fc] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            My career &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#a855f7]">
              experience
            </span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Internships I have done, open source work, and activities I am involved with at NIT Silchar.
          </p>
        </div>

        {/* Timeline with radiant glowing beam */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-gradient-to-b before:from-[#c084fc] before:via-[#a855f7] before:to-transparent">
          {portfolioData.experience.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? "sm:flex-row-reverse" : ""
                } gap-6 sm:gap-12 group`}
              >
                {/* Center Glowing Purple Node (Matching Image 2) */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0e0919] border-2 border-[#a855f7] flex items-center justify-center text-xs font-mono text-white shadow-[0_0_18px_rgba(168,85,247,0.7)] group-hover:scale-125 transition-transform duration-300 z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c084fc] shadow-[0_0_8px_#c084fc]" />
                </div>

                {/* Content Box */}
                <div
                  className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${
                    isEven ? "sm:text-left" : "sm:text-left"
                  }`}
                >
                  <div className="p-6 sm:p-7 rounded-2xl bg-[#0e0919]/90 border border-white/10 hover:border-[#a855f7]/40 transition-all duration-300 shadow-xl hover:-translate-y-1 backdrop-blur-md">
                    {/* Role & Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#a855f7]/15 text-[#c084fc] border border-[#a855f7]/30">
                        {item.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-0.5">
                      {item.role}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-300 mb-4">
                      <span className="text-white font-semibold">{item.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2 mb-4">
                      {item.description.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-gray-300 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#c084fc] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Pills */}
                    <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                      {item.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
