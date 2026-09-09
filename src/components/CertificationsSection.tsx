"use client";

import React, { useState, useEffect, useCallback } from "react";
import { portfolioData, Certificate } from "@/data/portfolioData";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ExternalLink,
  X,
  FileCheck2
} from "lucide-react";

export default function CertificationsSection() {
  const { certificates } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedCertModal, setSelectedCertModal] = useState<Certificate | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const totalCards = certificates.length;

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % totalCards);
    setTimeout(() => setIsAnimating(false), 380);
  }, [isAnimating, totalCards]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
    setTimeout(() => setIsAnimating(false), 380);
  }, [isAnimating, totalCards]);

  const handleCardClick = (idx: number) => {
    if (idx === activeIndex) {
      // Front card click opens high-res modal preview
      setSelectedCertModal(certificates[idx]);
    } else {
      // Bring clicked card in the stack to the front
      setActiveIndex(idx);
    }
  };

  // Keyboard navigation support (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedCertModal) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, selectedCertModal]);

  const activeCert = certificates[activeIndex];

  // Helper to render realistic diploma certificate artwork if user hasn't dropped image yet
  const renderCertificateGraphic = (cert: Certificate) => {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#120a22] via-[#0b0616] to-[#180d2e] p-6 sm:p-9 flex flex-col justify-between border-4 border-[#2b1947] rounded-xl relative overflow-hidden select-none">
        
        {/* Subtle Watermark Guilloche Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c084fc_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        {/* Top Gold Corner Accents */}
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#c084fc]/60" />
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#c084fc]/60" />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#c084fc]/60" />
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#c084fc]/60" />

        {/* Certificate Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-extrabold text-xs shadow-md border"
              style={{
                backgroundColor: `${cert.accentColor}20`,
                borderColor: `${cert.accentColor}60`,
                color: cert.accentColor
              }}
            >
              {cert.issuerBadge}
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-gray-400 uppercase block">
                Certificate of Completion
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white">
                {cert.issuer}
              </span>
            </div>
          </div>

          <div className="w-9 h-9 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-[#c084fc]">
            <Award className="w-5 h-5" />
          </div>
        </div>

        {/* Center Title & Recipient */}
        <div className="text-center my-auto py-4 relative z-10">
          <span className="text-[11px] sm:text-xs text-gray-400 tracking-wider uppercase block mb-1">
            This is to certify that
          </span>
          <h4 className="text-lg sm:text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-gray-300 mb-2">
            {portfolioData.personal.name}
          </h4>
          <span className="text-[11px] text-purple-300/80 block mb-3">
            NIT Silchar
          </span>
          <h3 className="text-sm sm:text-lg font-bold text-white max-w-md mx-auto line-clamp-2 px-2">
            {cert.title}
          </h3>
        </div>

        {/* Bottom Verification Seal & Watermark */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[10px] sm:text-[11px] text-gray-400 relative z-10">
          <div className="flex items-center gap-1.5 text-emerald-400 font-mono">
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>AUTHENTICATED CREDENTIAL</span>
          </div>

          <div className="flex items-center gap-1 font-mono text-gray-400">
            <span>OFFICIAL REGISTRY</span>
          </div>
        </div>

      </div>
    );
  };

  return (
    <section id="certifications" className="py-24 bg-transparent relative overflow-hidden border-t border-purple-900/20">
      
      {/* Ambient Violet Nebula Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[550px] bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.18)_0%,_rgba(124,58,237,0.08)_45%,_transparent_75%)] blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-purple-500/30 text-xs font-semibold text-[#c084fc] mb-3 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Award className="w-3.5 h-3.5 text-[#a855f7]" />
            <span>CREDENTIALS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Licenses &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#7c3aed]">
              Certifications
            </span>
          </h2>
          
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Click on any certificate to view or shuffle through the deck.
          </p>
        </div>

        {/* ================================================================== */}
        {/* SOLITAIRE CARD DECK GALLERY (JUST THE CERTIFICATE IMAGE)            */}
        {/* ================================================================== */}
        <div className="relative max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Deck Viewport Container */}
          <div className="relative w-full h-[320px] sm:h-[400px] md:h-[440px] flex items-center justify-center perspective-[1200px]">
            
            {certificates.map((cert, idx) => {
              const offset = (idx - activeIndex + totalCards) % totalCards;
              const isFront = offset === 0;
              const isVisibleInDeck = offset <= 3 || offset === totalCards - 1;

              if (!isVisibleInDeck && !isFront) return null;

              // Solitaire cascading stack transforms
              let translateX = 0;
              let translateY = 0;
              let scale = 1;
              let rotate = 0;
              let opacity = 1;
              let zIndex = 10;

              if (isFront) {
                translateX = 0;
                translateY = 0;
                scale = 1;
                rotate = 0;
                opacity = 1;
                zIndex = 30;
              } else if (offset === 1) {
                translateX = 30;
                translateY = -16;
                scale = 0.94;
                rotate = 3.5;
                opacity = 0.85;
                zIndex = 25;
              } else if (offset === 2) {
                translateX = 58;
                translateY = -30;
                scale = 0.88;
                rotate = 7;
                opacity = 0.65;
                zIndex = 20;
              } else if (offset === 3) {
                translateX = 82;
                translateY = -42;
                scale = 0.82;
                rotate = 10;
                opacity = 0.40;
                zIndex = 15;
              } else if (offset === totalCards - 1) {
                // Card shuffling back to the deck
                translateX = -26;
                translateY = -10;
                scale = 0.94;
                rotate = -3;
                opacity = 0.35;
                zIndex = 12;
              }

              const hasImage = cert.image && !imageErrors[cert.id];

              return (
                <div
                  key={cert.id}
                  onClick={() => handleCardClick(idx)}
                  className={`absolute w-[92%] sm:w-[560px] md:w-[640px] aspect-[16/10] sm:aspect-[16/10.5] rounded-2xl sm:rounded-3xl transition-all duration-500 ease-out cursor-pointer select-none overflow-hidden ${
                    isFront
                      ? "shadow-[0_25px_60px_-15px_rgba(168,85,247,0.40),0_0_35px_rgba(192,132,252,0.18)] ring-1 ring-[#c084fc]/50"
                      : "hover:brightness-125"
                  }`}
                  style={{
                    transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale}) rotate(${rotate}deg)`,
                    opacity,
                    zIndex,
                    border: isFront ? "1px solid rgba(192, 132, 252, 0.4)" : "1px solid rgba(168, 85, 247, 0.2)",
                    background: "#0d081a"
                  }}
                  title={isFront ? "Click to view full certificate" : `Switch to ${cert.title}`}
                >
                  
                  {/* The Certificate Image */}
                  {hasImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cert.image}
                      alt={cert.title}
                      onError={() => setImageErrors((prev) => ({ ...prev, [cert.id]: true }))}
                      className="w-full h-full object-cover sm:object-contain bg-[#090514]"
                    />
                  ) : (
                    renderCertificateGraphic(cert)
                  )}

                  {/* Corner Expand Button (Only on front card) */}
                  {isFront && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCertModal(cert);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all duration-200 border border-white/20 shadow-lg"
                      title="Expand Certificate"
                      aria-label="Expand Certificate"
                    >
                      <Maximize2 className="w-4 h-4 text-[#c084fc]" />
                    </button>
                  )}

                </div>
              );
            })}

          </div>

          {/* ================================================================== */}
          {/* LITTLE TITLE & ISSUER DISPLAY                                     */}
          {/* ================================================================== */}
          <div className="mt-8 text-center px-4 max-w-xl">
            <span className="text-xs font-semibold tracking-wider text-[#c084fc] uppercase block mb-1">
              {activeCert.issuer}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight line-clamp-1">
              {activeCert.title}
            </h3>
          </div>

          {/* ================================================================== */}
          {/* BUTTONS TO SCROLL THROUGH ALL CERTIFICATES                         */}
          {/* ================================================================== */}
          <div className="w-full flex items-center justify-between max-w-md mt-6 px-4">
            
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              aria-label="Previous Certificate"
              className="p-3 sm:p-3.5 rounded-2xl bg-[#0e0919]/90 border border-purple-500/25 text-gray-300 hover:text-white hover:border-[#a855f7] hover:bg-purple-950/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-200 active:scale-95 disabled:opacity-50 group flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden sm:inline text-xs font-semibold">Prev</span>
            </button>

            {/* Deck Counter & Progress Dots */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-mono font-bold text-gray-300 mb-2">
                {String(activeIndex + 1).padStart(2, "0")}{" "}
                <span className="text-gray-600">/</span>{" "}
                {String(totalCards).padStart(2, "0")}
              </span>

              {/* Indicator Dots */}
              <div className="flex items-center gap-1.5">
                {certificates.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveIndex(dotIdx)}
                    aria-label={`Jump to certificate ${dotIdx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      dotIdx === activeIndex
                        ? "w-6 bg-gradient-to-r from-[#c084fc] to-[#a855f7] shadow-[0_0_8px_#a855f7]"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={isAnimating}
              aria-label="Next Certificate"
              className="p-3 sm:p-3.5 rounded-2xl bg-[#0e0919]/90 border border-purple-500/25 text-gray-300 hover:text-white hover:border-[#a855f7] hover:bg-purple-950/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-200 active:scale-95 disabled:opacity-50 group flex items-center gap-2"
            >
              <span className="hidden sm:inline text-xs font-semibold">Next</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>

          </div>

        </div>

      </div>

      {/* ================================================================== */}
      {/* EXPANDED FULL CERTIFICATE IMAGE LIGHTBOX MODAL                     */}
      {/* ================================================================== */}
      {selectedCertModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedCertModal(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl bg-[#0e0919] border border-purple-500/40 p-4 sm:p-6 shadow-2xl shadow-purple-950/90 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-gray-300 hover:text-white transition-colors border border-white/10 z-20"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Title Banner */}
            <div className="mb-4 pr-12">
              <span className="text-xs font-semibold text-[#c084fc] uppercase tracking-wider block">
                {selectedCertModal.issuer}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {selectedCertModal.title}
              </h3>
            </div>

            {/* Full High-Resolution Certificate Image */}
            <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              {selectedCertModal.image && !imageErrors[selectedCertModal.id] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selectedCertModal.image}
                  alt={selectedCertModal.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                renderCertificateGraphic(selectedCertModal)
              )}
            </div>

            {/* Modal Bottom Actions */}
            {selectedCertModal.credentialUrl && (
              <div className="flex items-center justify-between pt-4 mt-2">
                <span className="text-xs text-gray-400">
                  Click below to verify credential on official registry
                </span>
                <a
                  href={selectedCertModal.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#7c3aed] text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-purple-950/60 hover:scale-[1.02] transition-transform"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
