"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
  dimmed?: boolean;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
  dimmed = false,
}: SkillDataProviderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? (dimmed ? 0.22 : 1) : 0,
        transform: isVisible ? (dimmed ? "scale(0.88)" : "scale(1)") : "scale(0.8)",
        filter: dimmed ? "grayscale(70%) blur(0.5px)" : "none",
        transition: `opacity 0.35s ease ${index * 0.015}s, transform 0.35s ease ${index * 0.015}s, filter 0.35s ease`,
      }}
      className="relative flex items-center justify-center p-0.5 sm:p-1 md:p-1.5 group shrink-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative transition-all duration-200 group-hover:scale-120 group-hover:drop-shadow-[0_0_15px_rgba(192,132,252,0.6)] flex items-center justify-center cursor-pointer">
        <Image
          src={`/skills/${src}`}
          width={width}
          height={height}
          alt={name}
          className="object-contain select-none w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
        />
      </div>

      {/* Floating Tooltip displaying Skill Name */}
      {hovered && (
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black/90 border border-white/20 text-[11px] font-semibold text-white rounded-md whitespace-nowrap shadow-xl pointer-events-none z-30">
          {name}
        </div>
      )}
    </div>
  );
};

export default SkillDataProvider;
