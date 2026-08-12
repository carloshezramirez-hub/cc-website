"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CarouselProject {
  id: string;
  tag: string;
  title: string;
  location: string;
  year?: string;
  image: string;
  imageAlt: string;
}

interface ProjectCarouselProps {
  projects: CarouselProject[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = (container.children[0] as HTMLElement)?.offsetWidth ?? 0;
    if (cardWidth === 0) return;
    const index = Math.round(container.scrollLeft / (cardWidth + 16));
    setCurrent(Math.min(Math.max(index, 0), projects.length - 1));
  }, [projects.length]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    if (!card) return;
    container.scrollTo({ left: card.offsetLeft - 20, behavior: "smooth" });
    setCurrent(index);
  }, []);

  const prev = () => scrollTo(Math.max(0, current - 1));
  const next = () => scrollTo(Math.min(projects.length - 1, current + 1));

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Scroll container — full bleed */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {projects.map((p, i) => (
          <div
            key={p.id}
            className={cn(
              "snap-start shrink-0 relative overflow-hidden cursor-pointer transition-all duration-300",
              "w-[82vw] sm:w-[50vw] md:w-[36vw] lg:w-[27vw]",
              "h-[280px] sm:h-[340px] md:h-[380px] lg:h-[420px]"
            )}
            style={{
              border: i === current ? "1px solid rgba(138,172,202,0.45)" : "1px solid rgba(138,172,202,0.10)",
            }}
            onClick={() => scrollTo(i)}
          >
            <Image
              src={p.image}
              alt={p.imageAlt}
              fill
              sizes="(max-width: 640px) 82vw, (max-width: 768px) 50vw, (max-width: 1024px) 36vw, 27vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority={i === 0}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(3,4,6,0.90) 0%, rgba(3,4,6,0.10) 55%, transparent 100%)" }}
            />
            <div
              className={cn(
                "absolute inset-x-0 top-0 h-px transition-opacity duration-300",
                i === current ? "opacity-100" : "opacity-0"
              )}
              style={{ background: "#8AACCA" }}
            />
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
              <span
                className="inline-block text-[9px] font-semibold uppercase mb-1.5"
                style={{ color: "#8AACCA", letterSpacing: "0.18em" }}
              >
                {p.tag}
              </span>
              <p
                className="text-sm sm:text-base font-semibold leading-snug"
                style={{ fontFamily: "var(--font-cinzel)", color: "#F5F7FA" }}
              >
                {p.title}
              </p>
              <p className="mt-1 text-[10px] uppercase" style={{ color: "rgba(215,220,226,0.40)", letterSpacing: "0.08em" }}>
                {p.location}{p.year ? ` · ${p.year}` : ""}
              </p>
            </div>
          </div>
        ))}
        <div className="shrink-0 w-4 sm:w-6 lg:w-8" />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        {/* Progress bar */}
        <div className="flex-1 h-px mr-6" style={{ background: "rgba(138,172,202,0.12)" }}>
          <div
            className="h-full transition-all duration-300"
            style={{
              width: `${((current + 1) / projects.length) * 100}%`,
              background: "#8AACCA",
            }}
          />
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-xs tabular-nums w-12 text-center" style={{ color: "rgba(215,220,226,0.35)" }}>
            {current + 1} / {projects.length}
          </span>
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Proyecto anterior"
            className="flex h-9 w-9 items-center justify-center transition-all"
            style={{
              border: "1px solid rgba(138,172,202,0.18)",
              color: current === 0 ? "rgba(138,172,202,0.20)" : "rgba(138,172,202,0.60)",
              cursor: current === 0 ? "not-allowed" : "pointer",
            }}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            disabled={current === projects.length - 1}
            aria-label="Siguiente proyecto"
            className="flex h-9 w-9 items-center justify-center transition-all"
            style={{
              border: "1px solid rgba(138,172,202,0.18)",
              color: current === projects.length - 1 ? "rgba(138,172,202,0.20)" : "rgba(138,172,202,0.60)",
              cursor: current === projects.length - 1 ? "not-allowed" : "pointer",
            }}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
