"use client";

import React, { useState } from "react";
import SkillDataProvider from "@/components/SkillDataProvider";
import { 
  Terminal, 
  Cpu, 
  Layout, 
  Server, 
  Layers, 
  Code2 
} from "lucide-react";

export const SKILL_DATA = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Redux", image: "redux.png", width: 80, height: 80 },
  { skill_name: "React Query", image: "reactquery.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "Next.js", image: "next.png", width: 80, height: 80 },
  { skill_name: "Framer Motion", image: "framer.png", width: 80, height: 80 },
  { skill_name: "Stripe", image: "stripe.png", width: 80, height: 80 },
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
] as const;

export const FRONTEND_SKILL = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "Material UI", image: "mui.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Redux", image: "redux.png", width: 80, height: 80 },
  { skill_name: "React Query", image: "reactquery.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "Next.js", image: "next.png", width: 80, height: 80 },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "Firebase", image: "firebase.png", width: 55, height: 55 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 70, height: 70 },
  { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },
  { skill_name: "Prisma", image: "prisma.png", width: 70, height: 70 },
  { skill_name: "GraphQL", image: "graphql.png", width: 80, height: 80 },
] as const;

export const FULLSTACK_SKILL = [
  { skill_name: "React Native", image: "reactnative.png", width: 70, height: 70 },
  { skill_name: "Tauri", image: "tauri.png", width: 70, height: 70 },
  { skill_name: "Docker", image: "docker.png", width: 70, height: 70 },
  { skill_name: "Figma", image: "figma.png", width: 50, height: 50 },
] as const;

export const OTHER_SKILL = [
  { skill_name: "Go", image: "go.png", width: 60, height: 60 },
] as const;

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Skills", icon: Cpu },
    { id: "frontend", label: "Frontend", icon: Layout },
    { id: "backend", label: "Backend", icon: Server },
    { id: "fullstack", label: "Full Stack & DevOps", icon: Layers },
    { id: "languages", label: "Languages & Tools", icon: Code2 },
  ];

  return (
    <section id="skills" className="py-24 bg-transparent relative overflow-hidden">
      
      {/* Subtle cosmic background depth behind the skills pyramid matching reference */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center -z-10">
        <div className="w-[700px] h-[400px] bg-gradient-to-r from-purple-800/25 via-violet-600/20 to-indigo-800/20 blur-[130px] rounded-full transform -translate-y-12" />
        
        {/* Soft glowing moon orb on lower right flank (Matching Image 3) */}
        <div className="absolute top-2/3 right-1/4 translate-x-12 w-20 h-20 rounded-full bg-gradient-to-br from-[#ffffff] via-[#e9d5ff] to-[#a855f7] opacity-50 blur-md shadow-[0_0_45px_rgba(192,132,252,0.6)]" />

        {/* Subtle decorative radial rays echoing the space portfolio */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] opacity-20 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.25)_0%,_transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#a855f7]/25 text-xs font-semibold text-[#c084fc] mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>TECH STACK & TOOLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#a855f7]">
              Technologies
            </span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Languages, libraries, frameworks, and developer tooling I use to craft fast, scalable web applications.
          </p>
        </div>

        {/* Existing Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#a855f7] to-[#7c3aed] text-white shadow-lg shadow-[#a855f7]/35 scale-105"
                    : "bg-[#0e0919]/80 text-gray-400 hover:text-white border border-white/10 hover:border-[#a855f7]/30 backdrop-blur-sm"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 
          ========================================================================
          SKILLS DISPLAY - PURE INVERTED TRIANGLE (V-SHAPED PYRAMID)
          Tier 1 (13) -> Tier 2 (10) -> Tier 3 (8) -> Tier 4 (4) -> Tier 5 (1)
          ========================================================================
        */}
        <div className="flex flex-col items-center gap-5 sm:gap-6 md:gap-7 lg:gap-8 min-h-[380px] w-full max-w-6xl mx-auto py-4 overflow-x-auto sm:overflow-visible">
          
          {/* Tier 1: Top Base (13 icons strictly on 1 line) */}
          {(activeFilter === "all" || activeFilter === "frontend") && (
            <div className="flex flex-row flex-nowrap justify-center items-center gap-1.5 sm:gap-2.5 md:gap-3.5 lg:gap-4.5 w-full">
              {SKILL_DATA.map((image, index) => (
                <SkillDataProvider
                  key={`r1-${image.skill_name}-${index}`}
                  src={image.image}
                  name={image.skill_name}
                  width={image.width}
                  height={image.height}
                  index={index}
                />
              ))}
            </div>
          )}

          {/* Tier 2: (10 icons strictly on 1 line) */}
          {(activeFilter === "all" || activeFilter === "frontend") && (
            <div className="flex flex-row flex-nowrap justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5.5 w-full">
              {FRONTEND_SKILL.map((image, index) => (
                <SkillDataProvider
                  key={`r2-${image.skill_name}-${index}`}
                  src={image.image}
                  name={image.skill_name}
                  width={image.width}
                  height={image.height}
                  index={index}
                />
              ))}
            </div>
          )}

          {/* Tier 3: (8 icons strictly on 1 line) */}
          {(activeFilter === "all" || activeFilter === "backend") && (
            <div className="flex flex-row flex-nowrap justify-center items-center gap-2.5 sm:gap-4 md:gap-5.5 lg:gap-7 w-full">
              {BACKEND_SKILL.map((image, index) => (
                <SkillDataProvider
                  key={`r3-${image.skill_name}-${index}`}
                  src={image.image}
                  name={image.skill_name}
                  width={image.width}
                  height={image.height}
                  index={index}
                />
              ))}
            </div>
          )}

          {/* Tier 4: (4 icons strictly on 1 line) */}
          {(activeFilter === "all" || activeFilter === "fullstack") && (
            <div className="flex flex-row flex-nowrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
              {FULLSTACK_SKILL.map((image, index) => (
                <SkillDataProvider
                  key={`r4-${image.skill_name}-${index}`}
                  src={image.image}
                  name={image.skill_name}
                  width={image.width}
                  height={image.height}
                  index={index}
                />
              ))}
            </div>
          )}

          {/* Tier 5: Bottom Tip (1 icon: Go) */}
          {(activeFilter === "all" || activeFilter === "languages" || activeFilter === "backend") && (
            <div className="flex flex-row flex-nowrap justify-center items-center w-full">
              {OTHER_SKILL.map((image, index) => (
                <SkillDataProvider
                  key={`r5-${image.skill_name}-${index}`}
                  src={image.image}
                  name={image.skill_name}
                  width={image.width}
                  height={image.height}
                  index={index}
                />
              ))}
            </div>
          )}

        </div>

        {/* Bottom banner
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#141520]/80 border border-white/10 backdrop-blur-md text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              Always Learning & Improving
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl">
              I am comfortable picking up new languages and tools as needed for a project. Currently exploring distributed systems, low-latency microservices, and backend performance tuning.
            </p>
          </div>

          <a
            href="#projects"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-white shrink-0 transition-colors"
          >
            Check Out My Projects
          </a>
        </div> */}

      </div>
    </section>
  );
}
