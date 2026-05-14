"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export interface CarouselItem {
  id:          string;
  label:       string;
  description: string;
  icon:        LucideIcon;
  image:       string;
  imageAlt:    string;
}

interface FeatureCarouselProps {
  items:            CarouselItem[];
  autoPlayInterval?: number;
}

export function FeatureCarousel({ items, autoPlayInterval = 4500 }: FeatureCarouselProps) {
  const [active,  setActive]  = useState(0);
  const [paused,  setPaused]  = useState(false);

  const next = useCallback(() => setActive((p) => (p + 1) % items.length), [items.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, autoPlayInterval);
    return () => clearInterval(id);
  }, [paused, next, autoPlayInterval]);

  const item = items[active];

  return (
    <div className="w-full" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>

      {/* ── Desktop: two-column ── */}
      <div
        className="hidden md:grid md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] min-h-[480px]"
        style={{ border: "1px solid rgba(138,172,202,0.10)" }}
      >
        {/* Left: list */}
        <div
          className="overflow-y-auto scrollbar-none"
          style={{
            background: "#0D1117",
            borderRight: "1px solid rgba(138,172,202,0.08)",
          }}
        >
          {items.map((it, i) => {
            const Icon = it.icon;
            const isActive = i === active;
            return (
              <button
                key={it.id}
                onClick={() => setActive(i)}
                className={cn(
                  "w-full flex items-start gap-3 px-5 py-4 text-left cursor-pointer transition-colors duration-150",
                  isActive ? "border-l-2" : "border-l-2 border-l-transparent"
                )}
                style={{
                  borderBottom: "1px solid rgba(138,172,202,0.06)",
                  borderLeftColor: isActive ? "#1D4F7A" : "transparent",
                  background: isActive ? "rgba(29,79,122,0.08)" : "transparent",
                }}
              >
                <div
                  className="w-7 h-7 flex-shrink-0 flex items-center justify-center mt-0.5 transition-colors"
                  style={{
                    border: `1px solid ${isActive ? "rgba(138,172,202,0.40)" : "rgba(138,172,202,0.14)"}`,
                  }}
                >
                  <Icon
                    className="w-3.5 h-3.5 transition-colors"
                    style={{ color: isActive ? "#8AACCA" : "rgba(138,172,202,0.35)" }}
                  />
                </div>
                <span
                  className="text-xs font-medium leading-snug transition-colors"
                  style={{
                    fontFamily: "var(--font-cinzel)",
                    color: isActive ? "#D7DCE2" : "rgba(215,220,226,0.40)",
                  }}
                >
                  {it.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: active image */}
        <div className="relative overflow-hidden" style={{ background: "#030406" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              <Image src={item.image} alt={item.imageAlt} fill className="object-cover" sizes="(min-width:768px) 60vw,100vw" />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(3,4,6,0.85) 0%, rgba(3,4,6,0.20) 60%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-5 left-6 right-6">
                <p
                  className="text-[10px] uppercase tracking-widest mb-1"
                  style={{ color: "#8AACCA", opacity: 0.6 }}
                >
                  C&C · {item.label}
                </p>
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: "var(--font-cinzel)", color: "#D7DCE2" }}
                >
                  {item.label}
                </h3>
                <p
                  className="text-xs mt-1 leading-relaxed max-w-sm"
                  style={{ color: "rgba(215,220,226,0.50)" }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Progress bar */}
          <div
            className="absolute bottom-0 inset-x-0 h-0.5"
            style={{ background: "rgba(138,172,202,0.10)" }}
          >
            {!paused && (
              <motion.div
                key={`${active}-bar`}
                className="h-full"
                style={{ background: "linear-gradient(90deg, #1D4F7A, #8AACCA)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
              />
            )}
          </div>
        </div>
      </div>

      {/* ── Mobile: vertical stack ── */}
      <div className="md:hidden space-y-3">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <div
              key={it.id}
              className="overflow-hidden"
              style={{ border: "1px solid rgba(138,172,202,0.10)", background: "#0D1117" }}
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={it.image}
                  alt={it.imageAlt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  loading={i < 3 ? "eager" : "lazy"}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(3,4,6,0.45)" }}
                />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <div
                    className="w-6 h-6 flex items-center justify-center"
                    style={{ background: "rgba(29,79,122,0.40)", border: "1px solid rgba(138,172,202,0.30)" }}
                  >
                    <Icon className="w-3 h-3" style={{ color: "#8AACCA" }} />
                  </div>
                  <p
                    className="text-xs font-semibold"
                    style={{ fontFamily: "var(--font-cinzel)", color: "#D7DCE2" }}
                  >
                    {it.label}
                  </p>
                </div>
              </div>
              <p
                className="text-xs px-4 py-3 leading-relaxed"
                style={{ color: "rgba(215,220,226,0.40)" }}
              >
                {it.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
