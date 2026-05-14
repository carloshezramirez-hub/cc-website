"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const MARKERS = [
  { location: [19.0414, -98.2063] as [number, number], size: 0.07, label: "Puebla" },
  { location: [19.4326, -99.1332] as [number, number], size: 0.05, label: "CDMX" },
  { location: [19.3167, -98.20]   as [number, number], size: 0.04, label: "Tlaxcala" },
  { location: [19.1738, -96.1342] as [number, number], size: 0.04, label: "Veracruz" },
  { location: [20.5888, -100.389] as [number, number], size: 0.04, label: "Querétaro" },
];

interface Props {
  title:       string;
  subtitle:    string;
  description: string;
  features?:   string[];
  className?:  string;
}

export function GlobeFeatureSection({ title, subtitle, description, features = [], className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let globe: { update: (o: Record<string, unknown>) => void; destroy: () => void } | null = null;
    let animId: number;
    let phi = -1.5;

    (async () => {
      try {
        const createGlobe = (await import("cobe")).default;
        const dpr = Math.min(window.devicePixelRatio, 2);
        const w = canvas.offsetWidth  * dpr;
        const h = canvas.offsetHeight * dpr;

        globe = createGlobe(canvas, {
          devicePixelRatio: dpr,
          width: w, height: h,
          phi, theta: 0.3,
          dark: 1, diffuse: 1.4,
          mapSamples: 16000, mapBrightness: 5,
          baseColor:   [0.05, 0.09, 0.16],   // deep blue-graphite
          markerColor: [0.40, 0.67, 0.79],    // steel blue markers
          glowColor:   [0.11, 0.31, 0.48],    // blue glow
          markers: MARKERS,
        });

        const tick = () => {
          phi += 0.003;
          globe?.update({
            phi,
            width:  canvas.offsetWidth  * dpr,
            height: canvas.offsetHeight * dpr,
          });
          animId = requestAnimationFrame(tick);
        };
        animId = requestAnimationFrame(tick);
        setLoaded(true);
      } catch { /* fallback: !loaded state remains */ }
    })();

    return () => {
      cancelAnimationFrame(animId);
      globe?.destroy();
    };
  }, []);

  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center", className)}>

      {/* Text */}
      <div className="order-2 lg:order-1">
        <p
          className="text-[10px] uppercase mb-3"
          style={{
            fontFamily: "var(--font-cinzel)",
            color: "#8AACCA",
            letterSpacing: "0.4em",
            opacity: 0.6,
          }}
        >
          {title}
        </p>
        <h2
          className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4"
          style={{ fontFamily: "var(--font-cinzel)", color: "#F5F7FA" }}
        >
          {subtitle}
        </h2>
        <div className="w-10 h-px mb-6" style={{ background: "rgba(29,79,122,0.60)" }} />
        <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(215,220,226,0.45)" }}>
          {description}
        </p>

        {features.length > 0 && (
          <ul className="space-y-2.5 mb-8">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2.5 text-xs"
                style={{ color: "rgba(215,220,226,0.50)" }}
              >
                <span
                  className="w-3 h-px flex-shrink-0"
                  style={{ background: "#1D4F7A" }}
                />
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2">
          {MARKERS.map((m) => (
            <span
              key={m.label}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] uppercase tracking-widest"
              style={{
                border: "1px solid rgba(138,172,202,0.18)",
                color: "rgba(138,172,202,0.50)",
              }}
            >
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: "#8AACCA", opacity: 0.6 }}
              />
              {m.label}
            </span>
          ))}
        </div>
      </div>

      {/* Globe */}
      <div className="order-1 lg:order-2 flex justify-center">
        <div className="relative" style={{ width: "min(85vw,380px)", height: "min(85vw,380px)" }}>
          <div
            className="absolute inset-0 rounded-full"
            style={{ border: "1px solid rgba(138,172,202,0.08)" }}
          />
          <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ opacity: loaded ? 1 : 0, transition: "opacity 1.2s ease" }}
          />
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-28 h-28 rounded-full animate-pulse"
                style={{ border: "1px solid rgba(138,172,202,0.12)" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
