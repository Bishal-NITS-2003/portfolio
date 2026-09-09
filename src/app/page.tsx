import React from "react";
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ExperienceSection from "@/components/ExperienceSection";
// import CodingStatsSection from "@/components/CodingStatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#05030a] text-[#f8fafc] selection:bg-[#a855f7] selection:text-white overflow-hidden">
      {/* Ambient glowing lilac moon and deep purple side bloom matching reference */}
      <div className="fixed -top-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-[#ffffff] via-[#e9d5ff] to-[#a855f7] opacity-70 blur-md pointer-events-none z-10 shadow-[0_0_50px_rgba(192,132,252,0.7)]" />
      <div className="fixed top-1/4 -right-20 w-80 h-96 bg-[#7c3aed]/15 rounded-full blur-[110px] pointer-events-none z-0" />

      {/* 3D Rotating Spherical Starfield Canvas */}
      <StarBackground />

      {/* Top Glass Navigation Bar */}
      <Navbar />

      {/* Hero Section inspired by attached reference */}
      <HeroSection />

      {/* About & Academic Education Section */}
      <AboutSection />

      {/* Skills & Technical Competencies */}
      <SkillsSection />

      {/* Featured Projects with Animated GIF Previews */}
      <ProjectsSection />

      {/* Verified Licenses & Certifications (Solitaire Card Deck Gallery) */}
      <CertificationsSection />

      {/* Experience, Internships & Leadership Timeline */}
      <ExperienceSection />

      {/* Problem Solving & Algorithmic Coding Profiles (LeetCode, GitHub) */}
      {/* <CodingStatsSection /> */}

      {/* Contact Section & One-Click Copy */}
      <ContactSection />

      {/* Modern Footer */}
      <Footer />
    </main>
  );
}
