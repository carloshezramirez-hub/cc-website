"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

const MountainScene = dynamic(
  () => import("@/components/ui/mountain-scene").then((m) => m.GenerativeMountainScene),
  { ssr: false, loading: () => null }
);

const tags = [
  "Obra civil",
  "Mano de obra especializada",
  "Remodelación",
  "Puebla, México",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{
        minHeight: "100svh",
        background: "#030406",
      }}
    >
      {/* ── Layer 0: Three.js terrain shader ── */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <MountainScene />
      </div>

      {/* ── Layer 1: Gradient vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(3,4,6,0.95) 0%, rgba(3,4,6,0.55) 60%, rgba(3,4,6,0.20) 100%), " +
            "linear-gradient(to bottom, rgba(3,4,6,0.60) 0%, rgba(3,4,6,0.15) 40%, rgba(3,4,6,0.15) 60%, rgba(3,4,6,0.85) 100%)",
        }}
      />

      {/* ── Layer 2: Subtle blue glow behind content ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          zIndex: 2,
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          maxWidth: "90vw",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(29,79,122,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── Layer 3: Content ── */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-5 sm:px-8"
        style={{
          zIndex: 10,
          minHeight: "100svh",
          paddingTop: "80px",
          paddingBottom: "60px",
        }}
      >
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">

          {/* Logo — large, centered */}
          <div
            className="relative mb-6 sm:mb-8 w-[280px] sm:w-[360px] md:w-[520px] lg:w-[680px] xl:w-[760px] max-w-[90vw]"
            style={{ aspectRatio: "3 / 1" }}
          >
            <Image
              src="/brand/cc-metal-logo.png"
              alt="C&C Contratistas y Mano de Obra Especializada"
              fill
              className="object-contain"
              sizes="(max-width:640px) 280px, (max-width:768px) 360px, (max-width:1024px) 520px, (max-width:1280px) 680px, 760px"
              priority
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                if (img.src.includes("cc-metal-logo.png")) {
                  img.src = "/brand/cc-metal-logo.jpg";
                } else if (img.src.includes("cc-metal-logo.jpg")) {
                  img.src = "/brand/cc-logo.png";
                }
              }}
            />
          </div>

          {/* Headline — single word */}
          <h1
            className="font-bold uppercase mb-5 sm:mb-6"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(1.6rem, 5vw, 3.5rem)",
              color: "#D7DCE2",
              letterSpacing: "0.18em",
            }}
          >
            Contratistas
          </h1>

          {/* Description */}
          <p
            className="leading-relaxed mb-8 sm:mb-10 max-w-2xl"
            style={{
              color: "#D7DCE2",
              opacity: 0.60,
              fontSize: "clamp(0.88rem, 2vw, 1.1rem)",
            }}
          >
            Construcción, obra civil y ejecución técnica con precisión, control y visión
            moderna. Mano de obra especializada.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs sm:max-w-none sm:justify-center mb-9 sm:mb-11">
            {/* Primary — silver/white */}
            <a
              href="#contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold uppercase transition-all hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #D7DCE2 0%, #F5F7FA 50%, #D7DCE2 100%)",
                color: "#030406",
                padding: "12px 28px",
                fontSize: 11,
                letterSpacing: "0.16em",
              }}
            >
              Cotizar proyecto
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            {/* Secondary — glass */}
            <a
              href="#servicios"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 uppercase transition-all"
              style={{
                border: "1px solid rgba(138,172,202,0.35)",
                color: "#8AACCA",
                padding: "12px 28px",
                fontSize: 11,
                letterSpacing: "0.16em",
                backdropFilter: "blur(8px)",
              }}
            >
              Ver servicios
            </a>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((t) => (
              <span
                key={t}
                style={{
                  border: "1px solid rgba(255,255,255,0.09)",
                  color: "rgba(215,220,226,0.40)",
                  padding: "4px 12px",
                  fontSize: 9,
                  letterSpacing: "0.20em",
                  textTransform: "uppercase",
                  backdropFilter: "blur(4px)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce"
        style={{ zIndex: 10 }}
      >
        <div
          style={{
            width: 1,
            height: 28,
            background: "linear-gradient(to bottom, rgba(138,172,202,0.6), transparent)",
          }}
        />
        <ChevronDown className="w-3.5 h-3.5" style={{ color: "rgba(138,172,202,0.40)" }} />
      </div>
    </section>
  );
}
