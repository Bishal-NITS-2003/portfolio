"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, ChevronDown, Sparkles, UserCheck } from "lucide-react";

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);
  const [showSamplePreview, setShowSamplePreview] = useState(false);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-transparent">
      
      {/* 
      {/* 
        ========================================================================
        RIGHT-SIDE FULL-HEIGHT ATMOSPHERIC GRADIENT (MATCHING REFERENCE THEME)
        Spans the entire right side, blending seamlessly into obsidian black
        ========================================================================
      */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[58%] pointer-events-none overflow-hidden z-0">
        
        {/* Layer 1: Atmospheric Deep Violet Ambient Web */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#190a32]/60 via-[#0e051c]/30 to-transparent" />

        {/* Layer 2: Radiant Center-Right Luminous Nebula (positioned behind developer silhouette) */}
        <div className="absolute top-1/2 -translate-y-1/2 right-[12%] sm:right-[16%] w-[620px] h-[620px] bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.40)_0%,_rgba(147,51,234,0.22)_35%,_rgba(91,33,182,0.10)_60%,_transparent_75%)] blur-2xl animate-pulse-glow" />

        {/* Layer 3: Soft Luminous Lilac Glow Bloom on Upper-Right */}
        <div className="absolute top-[10%] right-[6%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(192,132,252,0.30)_0%,_rgba(168,85,247,0.15)_40%,_transparent_70%)] blur-3xl" />

        {/* Layer 4: Vertical Atmospheric Edge Beam (Far-Right Flank matching reference screenshot 1) */}
        <div className="absolute -top-12 -right-8 w-72 h-[125%] bg-gradient-to-b from-[#c084fc]/20 via-[#a855f7]/30 to-[#7c3aed]/15 blur-[90px]" />

        {/* Layer 5: Deep Velvet Cosmic Pool on Lower-Right */}
        <div className="absolute -bottom-16 right-[10%] w-[520px] h-[420px] bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.35)_0%,_rgba(76,29,149,0.18)_45%,_transparent_72%)] blur-3xl" />

        {/* Layer 6: Silky Smooth Multi-Stage Horizontal Mask -> Dissolves into obsidian space */}
        <div className="absolute inset-y-0 left-0 w-64 sm:w-80 lg:w-[420px] bg-gradient-to-r from-[#05030a] via-[#05030a]/90 via-35% to-transparent z-10" />

        {/* Layer 7: Subtle Top & Bottom Viewport Vignettes */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#05030a] to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#05030a] to-transparent z-10" />
      </div>

      {/* 
        ========================================================================
        HERO CONTENT CONTAINER (Split Grid)
        ========================================================================
      */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full min-h-screen flex items-center pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center w-full">
          
          {/* ================================================================== */}
          {/* LEFT COLUMN: Text, Bio, CTAs, Tech Badges */}
          {/* ================================================================== */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center z-20 py-8">
            
            {/* NIT Silchar & Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-[#a855f7]/30 text-xs text-gray-300 w-fit mb-6 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#c084fc] animate-ping" />
              <span className="font-semibold text-white">NIT Silchar</span>
              <span className="text-gray-500">•</span>
              <span className="text-[#c084fc] font-medium">Looking for Software Engineer Roles (2025 Batch)</span>
            </div>

            {/* Main Greeting / Title matching reference */}
            <div className="mb-2">
              <span className="text-xl sm:text-2xl font-medium text-[#c084fc] tracking-wide">
                Hello! I&apos;m
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.15]">
              <span className="relative inline-block">
                {portfolioData.personal.name}
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-transparent rounded-full" />
              </span>
            </h1>

            {/* Simple, honest description */}
            <p className="text-base sm:text-lg text-gray-300 max-w-xl font-normal leading-relaxed mb-3">
              I am a final-year Mechanical Engineering student at <span className="text-white font-semibold">NIT Silchar</span>. Even though my branch is mechanical, I fell in love with coding and spend most of my time writing software.
            </p>

            <p className="text-xs sm:text-sm text-gray-400 max-w-lg leading-relaxed mb-8">
              I enjoy solving DSA problems in C++, building web apps with Next.js and Go, and understanding how backend systems handle real traffic.
            </p>

            {/* CTAs: Contact Me & View Projects */}
            <div className="flex flex-wrap items-center gap-5 mb-10">
              <a
                href="#contact"
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#7c3aed] text-white font-semibold text-sm shadow-lg shadow-[#a855f7]/35 hover:shadow-[#a855f7]/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
              >
                Get In Touch
              </a>

              <a
                href="#projects"
                className="group px-6 py-3 rounded-xl text-sm font-semibold text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors duration-200"
              >
                <span>See My Projects</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Tech stack badges */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3 flex items-center gap-2">
                <span>I have expertise in</span>
                <div className="h-[1px] w-12 bg-white/10" />
              </div>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {portfolioData.heroTechBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0e0919]/90 border border-white/10 hover:border-[#c084fc]/60 hover:bg-[#a855f7]/15 hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] transition-all duration-200 flex items-center justify-center p-2 cursor-pointer hover:-translate-y-1"
                    title={badge.name}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={badge.icon}
                      alt={badge.name}
                      className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-200"
                    />

                    {/* Minimal Tooltip on Hover */}
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-black/95 border border-purple-500/30 text-[10px] font-semibold text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-30 shadow-lg">
                      {badge.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom-left floating glass card */}
            <div className="mt-10 sm:mt-14">
              <a
                href="#about"
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#12131b]/80 border border-white/10 text-xs font-medium text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200 shadow-md animate-float backdrop-blur-md"
              >
                <span>Scroll down to see my story & projects</span>
                <ChevronDown className="w-4 h-4 text-[#c084fc] animate-bounce" />
              </a>
            </div>
          </div>

          {/* ================================================================== */}
          {/* RIGHT COLUMN: FULL-HEIGHT NO-BOX DEVELOPER IMAGE STANDING TALL     */}
          {/* Directly positioned above the right background. Zero box/card!     */}
          {/* ================================================================== */}
          <div className="lg:col-span-6 xl:col-span-5 relative min-h-[520px] sm:min-h-[620px] lg:min-h-[82vh] flex items-end justify-center lg:justify-center">
            
            {/* THE NO-BACKGROUND IMAGE (Standing tall, extending full height of hero section) */}
            <div className="relative w-full h-full flex items-end justify-center">
              
              {!imageError && !showSamplePreview ? (
                <>
                  {/* Concentrated Rim Light / Backlight Halo hugging the developer silhouette */}
                  <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[340px] sm:w-[440px] h-[460px] bg-[radial-gradient(ellipse_at_center,_rgba(192,132,252,0.48)_0%,_rgba(168,85,247,0.32)_35%,_rgba(124,58,237,0.15)_60%,_transparent_75%)] blur-2xl pointer-events-none z-0" />

                  {/* Lateral Shoulder Glow Flares for Realistic Rim Lighting */}
                  <div className="absolute top-[26%] left-2 sm:left-8 w-48 h-64 bg-gradient-to-r from-[#a855f7]/40 to-transparent rounded-full blur-2xl pointer-events-none z-0" />
                  <div className="absolute top-[26%] right-2 sm:right-8 w-48 h-64 bg-gradient-to-l from-[#c084fc]/45 to-transparent rounded-full blur-2xl pointer-events-none z-0" />

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/hero-portrait-nobg.png"
                    alt={portfolioData.personal.name}
                    onError={() => setImageError(true)}
                    className="relative z-10 max-h-[80vh] sm:max-h-[90vh] lg:max-h-[100vh] w-auto object-contain object-bottom select-none"
                    style={{
                      WebkitMaskImage: "linear-gradient(to bottom, black 84%, transparent 100%)",
                      maskImage: "linear-gradient(to bottom, black 84%, transparent 100%)"
                    }}
                  />
                </>
              ) : showSamplePreview ? (
                /* Sample Cutout Preview Demonstration */
                <div className="relative z-10 flex flex-col items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/hero-portrait.jpg"
                    alt={portfolioData.personal.name}
                    className="relative z-10 max-h-[72vh] sm:max-h-[80vh] lg:max-h-[85vh] w-auto object-contain object-bottom select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
                    style={{
                      WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 99%)",
                      maskImage: "linear-gradient(to bottom, black 80%, transparent 99%)"
                    }}
                  />

                  {/* Subtle floating helper pill */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1.5 rounded-full bg-black/70 border border-white/20 backdrop-blur-md text-[11px] text-gray-200 flex items-center gap-2 shadow-xl whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Cutout Preview Mode</span>
                    <button
                      onClick={() => setShowSamplePreview(false)}
                      className="text-[#c084fc] hover:underline ml-1 font-semibold"
                    >
                      (Switch to your no-bg image)
                    </button>
                  </div>
                </div>
              ) : (
                /* If hero-portrait-nobg.png is not found yet, show elegant full-height silhouette guide */
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 mb-16 max-w-sm">
                  <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-dashed border-white/30 flex items-center justify-center mb-4 text-white shadow-2xl backdrop-blur-md">
                    <UserCheck className="w-10 h-10 text-[#c084fc]" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    No-Background Image Slot
                  </h3>
                  <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                    Place your transparent PNG (cutout with no background) of full hero height at:
                  </p>
                  <div className="px-3 py-2 rounded-xl bg-black/60 border border-white/20 text-xs font-mono text-[#c084fc] shadow-xl backdrop-blur-md mb-4">
                    /public/images/hero-portrait-nobg.png
                  </div>
                  <button
                    onClick={() => setShowSamplePreview(true)}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-white font-medium flex items-center gap-1.5 transition-colors border border-white/15"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#c084fc]" />
                    <span>Show Cutout Demonstration</span>
                  </button>
                </div>
              )}

            </div>

            {/* Floating Role Typography matching reference screenshot 1 */}
            {/* <div className="hidden xl:block absolute -right-6 top-[34%] z-20 pointer-events-none text-right select-none">
              <span className="text-sm font-semibold tracking-wider text-[#c084fc] block mb-0.5">
                An
              </span>
              <span className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#7c3aed] block drop-shadow-[0_0_20px_rgba(168,85,247,0.55)]">
                AI & SWE ENGINEER
              </span>
              <span className="text-xl font-black tracking-wide text-white block mt-0.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                FULL-STACK DEVELOPER
              </span>
            </div> */}

            {/* ROTATING CIRCULAR BADGE (Bottom right corner, matching reference) */}
            <div className="absolute bottom-2 right-0 sm:bottom-6 sm:right-2 z-30">
              <a
                href="#contact"
                className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#05030a]/90 border border-[#a855f7]/30 flex items-center justify-center group shadow-[0_0_30px_rgba(168,85,247,0.25)] hover:border-[#c084fc]/60 hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                title="Contact Now"
              >
                {/* Rotating Circular Text SVG */}
                <svg
                  className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none"
                  viewBox="0 0 120 120"
                >
                  <defs>
                    <path
                      id="circleTextPathHero"
                      d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                    />
                  </defs>
                  <text className="text-[8.5px] font-bold tracking-[0.22em] uppercase fill-gray-300 group-hover:fill-white transition-colors">
                    <textPath href="#circleTextPathHero" startOffset="0%">
                      • CONTACT ME • NIT SILCHAR • OPEN TO WORK •
                    </textPath>
                  </text>
                </svg>

                {/* Center Circle with Purple Arrow */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#a855f7] to-[#7c3aed] text-white flex items-center justify-center shadow-lg shadow-[#a855f7]/40 group-hover:rotate-45 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
