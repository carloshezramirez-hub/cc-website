"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ScrollExpansionHeroProps {
  title: string;
  headline: string;
  subheadline: string;
  scrollHint?: string;
  backgroundImage: string;
  expandImage: string;
  children?: React.ReactNode;
  className?: string;
}

export function ScrollExpansionHero({
  title,
  headline,
  subheadline,
  scrollHint = "Desliza para descubrir",
  backgroundImage,
  expandImage,
  children,
  className,
}: ScrollExpansionHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.min(Math.max(scrolled / total, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Interpolated values for desktop
  const mediaScale = isMobile ? 1 : 0.35 + progress * 0.65;
  const mediaOpacity = isMobile ? 1 : 0.6 + progress * 0.4;
  const textOpacity = isMobile ? 1 : 1 - progress * 2;
  const textTranslate = isMobile ? 0 : progress * -60;

  return (
    <div
      ref={containerRef}
      className={cn("relative", isMobile ? "min-h-screen" : "h-[300vh]", className)}
      id="inicio"
    >
      <div
        className={cn(
          "flex flex-col items-center justify-center overflow-hidden bg-[#050505]",
          isMobile ? "relative min-h-screen" : "sticky top-0 h-screen"
        )}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Construcción de edificio — imagen editorial"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505]/90" />
        </div>

        {/* Top title */}
        <div
          className="absolute top-24 left-0 right-0 z-20 text-center px-4"
          style={
            isMobile
              ? {}
              : {
                  opacity: Math.max(0, textOpacity),
                  transform: `translateY(${textTranslate}px)`,
                }
          }
        >
          <p className="text-[#C99A3B] text-xs uppercase tracking-[0.4em] font-[family-name:var(--font-cinzel)] mb-3">
            {title}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-cinzel)] text-[#F5F2EA] font-bold leading-tight max-w-5xl mx-auto px-4">
            {headline}
          </h1>
          <p className="mt-4 text-[#F5F2EA]/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-4">
            {subheadline}
          </p>
        </div>

        {/* Expanding media */}
        <div
          className={cn(
            "relative z-10 overflow-hidden border border-[#C99A3B]/30",
            isMobile
              ? "w-full max-w-sm mx-4 mt-52 mb-8 aspect-video"
              : "w-full"
          )}
          style={
            isMobile
              ? {}
              : {
                  width: `${mediaScale * 100}%`,
                  maxWidth: "100%",
                  aspectRatio: "16/9",
                  opacity: mediaOpacity,
                }
          }
        >
          <Image
            src={expandImage}
            alt="Proyecto de construcción premium — imagen editorial"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div className="bg-[#050505]/80 backdrop-blur-sm border border-[#C99A3B]/30 px-3 py-1.5">
              <p className="text-[#C99A3B] text-[10px] uppercase tracking-widest">
                Construcción Premium
              </p>
            </div>
            <div className="bg-[#050505]/80 backdrop-blur-sm border border-[#2A2A2A] px-3 py-1.5">
              <p className="text-[#F5F2EA]/60 text-[10px] uppercase tracking-widest">
                Puebla · México
              </p>
            </div>
          </div>
        </div>

        {/* Bottom actions */}
        <div
          className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-4 px-4"
          style={
            isMobile
              ? {}
              : {
                  opacity: Math.max(0, textOpacity * 1.5),
                }
          }
        >
          {children}
          {/* Scroll hint */}
          <div className="flex flex-col items-center gap-2 mt-2">
            <p className="text-[#F5F2EA]/40 text-[10px] uppercase tracking-[0.3em]">
              {scrollHint}
            </p>
            <div className="w-px h-8 bg-gradient-to-b from-[#C99A3B]/60 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
