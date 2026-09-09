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

type SkillCategory = "frontend" | "backend" | "fullstack" | "languages";

interface SkillItem {
  skill_name: string;
  image: string;
  width: number;
  height: number;
  categories: SkillCategory[];
  bgWhite?: boolean;
}

// Tier 1: 9 unique skills (Core Languages & Web Fundamentals)
export const TIER_1_SKILLS: SkillItem[] = [
  { skill_name: "HTML5", image: "html.png", width: 80, height: 80, categories: ["frontend", "languages"] },
  { skill_name: "CSS3", image: "css.png", width: 80, height: 80, categories: ["frontend", "languages"] },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65, categories: ["frontend", "languages"] },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80, categories: ["frontend", "languages"] },
  { skill_name: "Python", image: "python.svg", width: 75, height: 75, categories: ["backend", "languages"] },
  { skill_name: "C++", image: "cpp.svg", width: 75, height: 75, categories: ["languages"] },
  { skill_name: "React", image: "react.png", width: 80, height: 80, categories: ["frontend"] },
  { skill_name: "Next.js", image: "next.png", width: 80, height: 80, categories: ["frontend", "fullstack"] },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80, categories: ["frontend"] },
];

// Tier 2: 7 unique skills (UI Frameworks & State Management)
export const TIER_2_SKILLS: SkillItem[] = [
  { skill_name: "Redux", image: "redux.png", width: 80, height: 80, categories: ["frontend"] },
  { skill_name: "React Query", image: "reactquery.png", width: 80, height: 80, categories: ["frontend"] },
  { skill_name: "Framer Motion", image: "framer.png", width: 80, height: 80, categories: ["frontend"] },
  { skill_name: "Material UI", image: "mui.png", width: 80, height: 80, categories: ["frontend"] },
  { skill_name: "React Native", image: "reactnative.png", width: 70, height: 70, categories: ["frontend", "fullstack"] },
  { skill_name: "GSAP", image: "gsap.jpg", width: 70, height: 70, categories: ["frontend"] },
  { skill_name: "Figma", image: "figma.png", width: 50, height: 50, categories: ["frontend"] },
];

// Tier 3: 5 unique skills (Databases & DevOps)
export const TIER_3_SKILLS: SkillItem[] = [
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 70, height: 70, categories: ["backend", "fullstack"] },
  { skill_name: "MongoDB", image: "mongodb.png", width: 45, height: 45, categories: ["backend", "fullstack"] },
  { skill_name: "Firebase", image: "firebase.png", width: 70, height: 70, categories: ["fullstack", "backend"] },
  { skill_name: "GitHub", image: "github.png", width: 70, height: 70, categories: ["fullstack"], bgWhite: true },
  { skill_name: "Git", image: "git.webp", width: 70, height: 70, categories: ["fullstack"] },
];

// Tier 4: 3 unique skills (Backend & APIs)
export const TIER_4_SKILLS: SkillItem[] = [
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80, categories: ["backend", "fullstack"] },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80, categories: ["backend"] },
  { skill_name: "Prisma ORM", image: "prisma.png", width: 70, height: 70, categories: ["backend"] },
];

// Tier 5: 1 unique skill (High-Performance Backend / Systems)
export const TIER_5_SKILLS: SkillItem[] = [
  { skill_name: "VS Code", image: "vs.png", width: 60, height: 60, categories: ["languages"] },
];

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Skills", icon: Cpu },
    { id: "frontend", label: "Frontend", icon: Layout },
    { id: "backend", label: "Backend", icon: Server },
    { id: "fullstack", label: "Full Stack & DevOps", icon: Layers },
    { id: "languages", label: "Languages & Tools", icon: Code2 },
  ];

  const isDimmed = (item: SkillItem) => {
    if (activeFilter === "all") return false;
    return !item.categories.includes(activeFilter as SkillCategory);
  };

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

        {/* Filter Tabs */}
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
          Tier 1 (9) -> Tier 2 (7) -> Tier 3 (5) -> Tier 4 (3) -> Tier 5 (1)
          Zero duplicates: Every single skill is 100% unique across all rows!
          ========================================================================
        */}
        <div className="flex flex-col items-center gap-5 sm:gap-6 md:gap-7 lg:gap-8 min-h-[380px] w-full max-w-6xl mx-auto py-4 overflow-x-auto sm:overflow-visible">
          
          {/* Tier 1: Top Base (9 unique skills strictly on 1 line) */}
          <div className="flex flex-row flex-nowrap justify-center items-center gap-2 sm:gap-3.5 md:gap-5 lg:gap-6 w-full">
            {TIER_1_SKILLS.map((image, index) => (
              <SkillDataProvider
                key={`t1-${image.skill_name}`}
                src={image.image}
                name={image.skill_name}
                width={image.width}
                height={image.height}
                index={index}
                dimmed={isDimmed(image)}
                bgWhite={image.bgWhite}
              />
            ))}
          </div>

          {/* Tier 2: (7 unique skills strictly on 1 line) */}
          <div className="flex flex-row flex-nowrap justify-center items-center gap-2.5 sm:gap-4 md:gap-6 lg:gap-7.5 w-full">
            {TIER_2_SKILLS.map((image, index) => (
              <SkillDataProvider
                key={`t2-${image.skill_name}`}
                src={image.image}
                name={image.skill_name}
                width={image.width}
                height={image.height}
                index={index + 9}
                dimmed={isDimmed(image)}
                bgWhite={image.bgWhite}
              />
            ))}
          </div>

          {/* Tier 3: (5 unique skills strictly on 1 line) */}
          <div className="flex flex-row flex-nowrap justify-center items-center gap-3.5 sm:gap-5 md:gap-7 lg:gap-9 w-full">
            {TIER_3_SKILLS.map((image, index) => (
              <SkillDataProvider
                key={`t3-${image.skill_name}`}
                src={image.image}
                name={image.skill_name}
                width={image.width}
                height={image.height}
                index={index + 16}
                dimmed={isDimmed(image)}
                bgWhite={image.bgWhite}
              />
            ))}
          </div>

          {/* Tier 4: (3 unique skills strictly on 1 line) */}
          <div className="flex flex-row flex-nowrap justify-center items-center gap-5 sm:gap-7 md:gap-10 lg:gap-12 w-full">
            {TIER_4_SKILLS.map((image, index) => (
              <SkillDataProvider
                key={`t4-${image.skill_name}`}
                src={image.image}
                name={image.skill_name}
                width={image.width}
                height={image.height}
                index={index + 21}
                dimmed={isDimmed(image)}
                bgWhite={image.bgWhite}
              />
            ))}
          </div>

          {/* Tier 5: Bottom Tip (1 unique skill: Go) */}
          <div className="flex flex-row flex-nowrap justify-center items-center w-full">
            {TIER_5_SKILLS.map((image, index) => (
              <SkillDataProvider
                key={`t5-${image.skill_name}`}
                src={image.image}
                name={image.skill_name}
                width={image.width}
                height={image.height}
                index={index + 24}
                dimmed={isDimmed(image)}
                bgWhite={image.bgWhite}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
