"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export interface CarouselItem {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
}

interface FeatureCarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
  className?: string;
}

export function FeatureCarousel({
  items,
  autoPlayInterval = 4000,
  className,
}: FeatureCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, autoPlayInterval);
    return () => clearInterval(id);
  }, [paused, next, autoPlayInterval]);

  const activeItem = items[active];

  return (
    <div
      className={cn("w-full", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Desktop: side-by-side layout */}
      <div className="hidden md:grid md:grid-cols-2 gap-0 min-h-[520px] border border-[#2A2A2A]">
        {/* Left: service chips */}
        <div className="bg-[#0A0A0A] border-r border-[#2A2A2A] flex flex-col overflow-y-auto">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isActive = i === active;
            return (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-start gap-4 px-6 py-5 text-left transition-all duration-200 cursor-pointer border-b border-[#1A1A1A] last:border-0 group",
                  isActive
                    ? "bg-[#C99A3B]/10 border-l-2 border-l-[#C99A3B]"
                    : "hover:bg-[#111111] border-l-2 border-l-transparent"
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 flex-shrink-0 flex items-center justify-center border mt-0.5 transition-colors",
                    isActive
                      ? "border-[#C99A3B] bg-[#C99A3B]/15"
                      : "border-[#2A2A2A] group-hover:border-[#C99A3B]/40"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-4 h-4 transition-colors",
                      isActive ? "text-[#C99A3B]" : "text-[#F5F2EA]/40 group-hover:text-[#C99A3B]/60"
                    )}
                  />
                </div>
                <div>
                  <p
                    className={cn(
                      "text-sm font-medium font-[family-name:var(--font-cinzel)] transition-colors leading-tight",
                      isActive ? "text-[#C99A3B]" : "text-[#F5F2EA]/70 group-hover:text-[#F5F2EA]"
                    )}
                  >
                    {item.label}
                  </p>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-xs text-[#F5F2EA]/50 mt-1 leading-relaxed"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: active image */}
        <div className="relative overflow-hidden bg-[#111111]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={activeItem.image}
                alt={activeItem.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-px bg-[#C99A3B]" />
                  <p className="text-[#C99A3B] text-[10px] uppercase tracking-widest">
                    C&C Construcciones
                  </p>
                </div>
                <h3 className="font-[family-name:var(--font-cinzel)] text-[#F5F2EA] text-xl font-semibold">
                  {activeItem.label}
                </h3>
                <p className="text-[#F5F2EA]/60 text-sm mt-1 leading-relaxed max-w-sm">
                  {activeItem.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2A2A2A]">
            {!paused && (
              <motion.div
                key={`${active}-progress`}
                className="h-full bg-[#C99A3B]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden space-y-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="border border-[#2A2A2A] overflow-hidden"
            >
              <div className="relative aspect-video">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  loading={i < 3 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <div className="w-7 h-7 flex items-center justify-center bg-[#C99A3B]/20 border border-[#C99A3B]/40">
                    <Icon className="w-3.5 h-3.5 text-[#C99A3B]" />
                  </div>
                  <p className="font-[family-name:var(--font-cinzel)] text-[#F5F2EA] text-sm font-semibold">
                    {item.label}
                  </p>
                </div>
              </div>
              <div className="bg-[#111111] px-4 py-3">
                <p className="text-[#F5F2EA]/55 text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
