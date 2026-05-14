"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlobeMarker {
  location: [number, number];
  size: number;
  label: string;
}

const MARKERS: GlobeMarker[] = [
  { location: [19.0414, -98.2063], size: 0.07, label: "Puebla" },
  { location: [19.4326, -99.1332], size: 0.05, label: "CDMX" },
  { location: [19.3167, -98.2],    size: 0.04, label: "Tlaxcala" },
  { location: [19.1738, -96.1342], size: 0.04, label: "Veracruz" },
  { location: [20.5888, -100.3899], size: 0.04, label: "Querétaro" },
];

interface GlobeFeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
  className?: string;
}

export function GlobeFeatureSection({
  title,
  subtitle,
  description,
  features = [],
  className,
}: GlobeFeatureSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let globe: { update: (opts: Record<string, unknown>) => void; destroy: () => void } | null = null;
    let animId: number;
    let phi = -1.5;

    const init = async () => {
      try {
        const createGlobe = (await import("cobe")).default;
        const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 2);
        const w = canvas.offsetWidth * dpr;
        const h = canvas.offsetHeight * dpr;

        globe = createGlobe(canvas, {
          devicePixelRatio: dpr,
          width: w,
          height: h,
          phi,
          theta: 0.3,
          dark: 1,
          diffuse: 1.2,
          mapSamples: 16000,
          mapBrightness: 6,
          baseColor: [0.15, 0.15, 0.15],
          markerColor: [0.79, 0.60, 0.23],
          glowColor: [0.25, 0.20, 0.10],
          markers: MARKERS,
        });

        const animate = () => {
          phi += 0.003;
          globe?.update({
            phi,
            width: canvas.offsetWidth * dpr,
            height: canvas.offsetHeight * dpr,
          });
          animId = requestAnimationFrame(animate);
        };

        animId = requestAnimationFrame(animate);
        setLoaded(true);
      } catch {
        // Globe failed — fallback visible via !loaded state
      }
    };

    init();

    return () => {
      cancelAnimationFrame(animId);
      globe?.destroy();
    };
  }, []);

  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center", className)}>
      {/* Text side */}
      <div className="order-2 lg:order-1">
        <p className="text-[#C99A3B] text-xs uppercase tracking-[0.4em] font-[family-name:var(--font-cinzel)] mb-4">
          {title}
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-cinzel)] text-[#F5F2EA] font-bold leading-tight mb-6">
          {subtitle}
        </h2>
        <div className="w-12 h-px bg-[#C99A3B] mb-8" />
        <p className="text-[#F5F2EA]/60 leading-relaxed text-sm lg:text-base mb-10">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-[#F5F2EA]/70">
                <span className="w-4 h-px bg-[#C99A3B] flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        )}

        {/* Location badges */}
        <div className="mt-10 flex flex-wrap gap-2">
          {MARKERS.map((m) => (
            <span
              key={m.label}
              className="inline-flex items-center gap-1.5 bg-[#111111] border border-[#2A2A2A] px-3 py-1.5 text-xs text-[#F5F2EA]/60 uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99A3B]" />
              {m.label}
            </span>
          ))}
        </div>
      </div>

      {/* Globe side */}
      <div className="order-1 lg:order-2 flex items-center justify-center">
        <div
          className="relative"
          style={{ width: "min(90vw, 420px)", height: "min(90vw, 420px)" }}
        >
          {/* Ring decoration */}
          <div className="absolute inset-0 rounded-full border border-[#C99A3B]/10" />
          <div className="absolute inset-4 rounded-full border border-[#C99A3B]/5" />

          <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s ease" }}
          />

          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border border-[#C99A3B]/20 animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
