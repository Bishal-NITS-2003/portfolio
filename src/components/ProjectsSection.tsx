"use client";

import React, { useEffect, useRef } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import { ExternalLink, Sparkles, ArrowRight, Code2 } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface WorkImageProps {
  project: Project;
  index: number;
}

const WorkImage: React.FC<WorkImageProps> = ({ project, index }) => {
  const isGif = Boolean(project.gifUrl);
  const isImage = Boolean(project.image);

  return (
    <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] rounded-2xl overflow-hidden border border-white/10 bg-[#0c0816] group-hover:border-[#a855f7]/50 transition-all duration-300 shadow-xl flex items-center justify-center shrink-0">
      {/* Ambient background bloom matching card theme */}
      <div 
        className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity pointer-events-none"
        style={{
          background: index % 2 === 0 
            ? "radial-gradient(circle at 30% 30%, rgba(168,85,247,0.5) 0%, transparent 70%)"
            : "radial-gradient(circle at 70% 70%, rgba(192,132,252,0.4) 0%, transparent 70%)"
        }}
      />

      {isGif ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={project.gifUrl}
          alt={project.title}
          className="w-full h-full object-cover select-none"
        />
      ) : isImage ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        /* Dynamic aesthetic architecture card if no file uploaded */
        <div className="w-full h-full p-4 flex flex-col justify-between relative bg-gradient-to-br from-[#100b1e] via-[#140e26] to-[#0a0614]">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 rounded-full bg-[#ff5f56]/80 aspect-square" />
              <span className="w-2 rounded-full bg-[#ffbd2e]/80 aspect-square" />
              <span className="w-2 rounded-full bg-[#27c93f]/80 aspect-square" />
              <span className="text-[10px] font-mono text-gray-500 ml-1.5">
                {project.title.toLowerCase().replace(/\s+/g, "-")}.sh
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/10">
              Architecture
            </span>
          </div>

          <div className="my-auto text-center z-10 py-1">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#a855f7]/10 border border-[#a855f7]/25 text-[#c084fc] mb-1.5 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <Code2 className="w-5 h-5" />
            </div>
            <h5 className="text-white font-semibold text-sm tracking-tight">
              {project.title}
            </h5>
            <p className="text-gray-400 text-[11px] mt-0.5 max-w-[240px] mx-auto line-clamp-2">
              {project.tagline}
            </p>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 border-t border-white/5 pt-1.5 z-10">
            <span className="text-[#c084fc] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc] animate-pulse" />
              Active Repo
            </span>
            <span className="text-gray-500">v1.0.0</span>
          </div>
        </div>
      )}

      {/* Floating subtle overlay gradient for bottom blend */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const workFlexRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Disable GSAP pinning on mobile screens to allow smooth native scrolling
      if (window.innerWidth <= 768) return;

      const workFlex = workFlexRef.current;
      const section = sectionRef.current;
      if (!workFlex || !section) return;

      const getTranslateX = () => {
        const totalWidth = workFlex.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Ensure the entire track including CTA card scrolls fully into view with padding
        return Math.max(0, totalWidth - viewportWidth + (window.innerWidth < 1024 ? 80 : 140));
      };

      gsap.to(workFlex, {
        x: () => -getTranslateX(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getTranslateX()}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          id: "work-scroll",
          invalidateOnRefresh: true,
        },
      });

      // Refresh ScrollTrigger after layout settles
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);

      return () => clearTimeout(timer);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full min-h-screen bg-transparent py-8 sm:py-12 flex flex-col justify-center overflow-hidden border-t border-white/5"
    >
      {/* Soft background ambient gradient glow */}
      <div className="absolute top-10 left-12 w-32 h-32 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-44 h-44 bg-[#a855f7]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[96vw] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header - Compact and neatly positioned */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#a855f7]/25 text-xs font-semibold text-[#c084fc] mb-2">
            <Code2 className="w-3.5 h-3.5" />
            <span>PROJECT SHOWCASE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#a855f7]">
              Work
            </span>
          </h2>
          <p className="text-gray-400 mt-1.5 text-xs sm:text-sm">
            Here are some of my favorite projects that I have worked on.
          </p>
        </div>

        {/* 
          ========================================================================
          HORIZONTAL PROJECT CARDS TRACK (Pinned GSAP on Desktop, Swipe on Mobile)
          ========================================================================
        */}
        <div className="overflow-x-auto md:overflow-visible scrollbar-none snap-x snap-mandatory">
          <div
            ref={workFlexRef}
            className="flex flex-row items-stretch gap-6 sm:gap-8 w-max py-2 pr-12 sm:pr-24"
          >
            {portfolioData.projects.map((project, index) => {
              const formattedIndex = index < 9 ? `0${index + 1}` : `${index + 1}`;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={project.id}
                  className="work-box group w-[85vw] sm:w-[420px] md:w-[450px] lg:w-[480px] shrink-0 snap-center rounded-3xl bg-[#0e0919]/90 border border-white/10 hover:border-[#a855f7]/40 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between shadow-2xl backdrop-blur-md"
                >
                  {isEven ? (
                    /* ========================================================== */
                    /* EVEN CARD: Text Block on Top, Image on Bottom               */
                    /* ========================================================== */
                    <>
                      {/* Top Info */}
                      <div className="flex flex-col mb-4">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none select-none">
                            {formattedIndex}
                          </span>
                          <div className="text-right">
                            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#c084fc] transition-colors leading-tight">
                              {project.title}
                            </h3>
                            <p className="text-xs text-gray-400 font-medium mt-0.5">
                              {project.category || project.tagline}
                            </p>
                          </div>
                        </div>

                        <div className="mt-1">
                          <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-300 mb-0.5">
                            Tools and features
                          </h4>
                          <p className="text-xs text-gray-400 font-normal leading-relaxed line-clamp-2">
                            {project.technologies || project.tags.join(", ")}
                          </p>
                        </div>

                        {/* Action Links */}
                        <div className="flex items-center gap-2.5 mt-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#a855f7]/40 hover:bg-[#a855f7]/10 text-gray-300 hover:text-white transition-all hover:scale-110"
                              title="View GitHub Repository"
                            >
                              <GithubIcon className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#a855f7]/40 hover:bg-[#a855f7]/10 text-gray-300 hover:text-white transition-all hover:scale-110"
                              title="View Live Demo"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                          <span className="text-[10px] font-mono text-gray-500 ml-auto">
                            {project.tags[0] || "Code"}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Image */}
                      <WorkImage project={project} index={index} />
                    </>
                  ) : (
                    /* ========================================================== */
                    /* ODD CARD: Image on Top, Text Block on Bottom                */
                    /* ========================================================== */
                    <>
                      {/* Top Image */}
                      <WorkImage project={project} index={index} />

                      {/* Bottom Info */}
                      <div className="flex flex-col mt-4">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none select-none">
                            {formattedIndex}
                          </span>
                          <div className="text-right">
                            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#c084fc] transition-colors leading-tight">
                              {project.title}
                            </h3>
                            <p className="text-xs text-gray-400 font-medium mt-0.5">
                              {project.category || project.tagline}
                            </p>
                          </div>
                        </div>

                        <div className="mt-1">
                          <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-300 mb-0.5">
                            Tools and features
                          </h4>
                          <p className="text-xs text-gray-400 font-normal leading-relaxed line-clamp-2">
                            {project.technologies || project.tags.join(", ")}
                          </p>
                        </div>

                        {/* Action Links */}
                        <div className="flex items-center gap-2.5 mt-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#a855f7]/40 hover:bg-[#a855f7]/10 text-gray-300 hover:text-white transition-all hover:scale-110"
                              title="View GitHub Repository"
                            >
                              <GithubIcon className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#a855f7]/40 hover:bg-[#a855f7]/10 text-gray-300 hover:text-white transition-all hover:scale-110"
                              title="View Live Demo"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                          <span className="text-[10px] font-mono text-gray-500 ml-auto">
                            {project.tags[0] || "Code"}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}

            {/* 
              ====================================================================
              CTA CARD: "Want to see more?" (Matching reference snippet)
              ====================================================================
            */}
            <div className="work-box work-box-cta w-[85vw] sm:w-[380px] md:w-[420px] shrink-0 snap-center rounded-3xl bg-gradient-to-br from-[#120c24] via-[#0e0919] to-[#06030c] border border-white/10 hover:border-[#a855f7]/60 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden group">
              {/* Background ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#a855f7]/15 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#a855f7] to-[#7c3aed] flex items-center justify-center text-white shadow-lg shadow-[#a855f7]/40 mb-5 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7" />
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
                  Want to see more?
                </h3>
                
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs mb-6">
                  Explore all of my repositories, system design experiments, and algorithmic code on GitHub.
                </p>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#7c3aed] text-white font-semibold text-xs sm:text-sm shadow-lg shadow-[#a855f7]/35 hover:shadow-[#a855f7]/60 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>See All Works</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
