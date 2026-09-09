"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Code2, ExternalLink, Trophy, Flame } from "lucide-react";

export default function CodingStatsSection() {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#c084fc] mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>PROBLEM SOLVING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Coding Profiles & Practice
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            I solve algorithmic problems on LeetCode and participate in contests to get better at writing clean, bug-free code.
          </p>
        </div>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {portfolioData.codingProfiles.map((profile, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#0e0919]/90 border border-purple-900/20 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between shadow-lg hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white"
                      style={{ backgroundColor: `${profile.accentColor}20`, color: profile.accentColor }}
                    >
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {profile.platform}
                      </h3>
                      <span className="text-xs font-mono text-gray-400">
                        @{profile.handle}
                      </span>
                    </div>
                  </div>

                  <a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                    aria-label={`View ${profile.platform} Profile`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Metrics */}
                <div className="space-y-3 my-6">
                  {profile.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/5"
                    >
                      <span className="text-xs text-gray-400">{metric.label}</span>
                      <span className="text-xs font-bold text-white font-mono" style={{ color: profile.accentColor }}>
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={profile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-purple-950/20 hover:bg-purple-900/40 border border-purple-500/20 text-xs font-semibold text-center text-[#c084fc] hover:text-white transition-colors block"
              >
                View Profile on {profile.platform} →
              </a>
            </div>
          ))}
        </div>

        {/* LeetCode Topic Breakdown & DSA Practice Stats */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0e0919]/90 border border-purple-900/20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#c084fc] mb-2">
              <Flame className="w-4 h-4 text-[#a855f7]" />
              <span>PRACTICE BREAKDOWN</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              650+ Problems Solved on LeetCode
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Topics I practice regularly include Arrays, Strings, Two Pointers, Trees, Graphs (BFS/DFS), and Dynamic Programming.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <div className="px-4 py-3 rounded-xl bg-black/40 border border-emerald-500/20 text-center min-w-[100px]">
              <span className="text-lg font-bold text-emerald-400 font-mono">180+</span>
              <span className="text-[11px] text-gray-400 block">Easy</span>
            </div>
            <div className="px-4 py-3 rounded-xl bg-black/40 border border-amber-500/20 text-center min-w-[100px]">
              <span className="text-lg font-bold text-amber-400 font-mono">390+</span>
              <span className="text-[11px] text-gray-400 block">Medium</span>
            </div>
            <div className="px-4 py-3 rounded-xl bg-black/40 border border-rose-500/20 text-center min-w-[100px]">
              <span className="text-lg font-bold text-rose-400 font-mono">80+</span>
              <span className="text-[11px] text-gray-400 block">Hard</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
