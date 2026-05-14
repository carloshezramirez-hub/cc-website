"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Servicios",  href: "#servicios" },
  { label: "Proyectos",  href: "#proyectos" },
  { label: "Proceso",    href: "#proceso" },
  { label: "Contacto",   href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-400",
          scrolled
            ? "border-b"
            : "bg-transparent"
        )}
        style={scrolled ? {
          background: "rgba(3,4,6,0.88)",
          backdropFilter: "blur(16px)",
          borderColor: "rgba(138,172,202,0.12)",
        } : undefined}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">

            {/* Brand */}
            <button onClick={() => go("#inicio")} className="flex items-center gap-2.5 cursor-pointer group" aria-label="Inicio">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/brand/cc-metal-logo.png"
                  alt="C&C"
                  fill
                  className="object-contain"
                  sizes="32px"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    if (!img.src.includes("cc-logo.png")) img.src = "/brand/cc-logo.png";
                  }}
                />
              </div>
              <div className="hidden sm:block leading-none">
                <p
                  className="text-[#D7DCE2] text-xs font-semibold tracking-wider group-hover:text-[#8AACCA] transition-colors"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  C&C
                </p>
                <p className="text-[#8AACCA]/40 text-[9px] uppercase tracking-[0.18em]">
                  Contratistas
                </p>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className="text-[11px] uppercase tracking-widest transition-colors duration-200 cursor-pointer relative group"
                  style={{ color: "rgba(138,172,202,0.50)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D7DCE2")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(138,172,202,0.50)")}
                >
                  {l.label}
                  <span
                    className="absolute -bottom-px left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ background: "#1D4F7A" }}
                  />
                </button>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => go("#contacto")}
                className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2 text-[11px] uppercase tracking-widest transition-all duration-200 cursor-pointer"
                style={{
                  border: "1px solid rgba(138,172,202,0.25)",
                  color: "#8AACCA",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(138,172,202,0.60)";
                  e.currentTarget.style.color = "#D7DCE2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(138,172,202,0.25)";
                  e.currentTarget.style.color = "#8AACCA";
                }}
              >
                Cotizar
              </button>
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden p-2 transition-colors cursor-pointer"
                style={{ color: "rgba(138,172,202,0.50)" }}
                aria-label={open ? "Cerrar menú" : "Menú"}
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(3,4,6,0.75)", backdropFilter: "blur(4px)" }}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-64 flex flex-col pt-16 pb-8 px-6 transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
          style={{
            background: "#0B0F14",
            borderLeft: "1px solid rgba(138,172,202,0.10)",
          }}
        >
          <nav className="flex flex-col gap-0.5">
            {[{ label: "Inicio", href: "#inicio" }, ...links].map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="text-left text-xs uppercase tracking-widest py-3.5 transition-colors cursor-pointer"
                style={{
                  color: "rgba(215,220,226,0.50)",
                  borderBottom: "1px solid rgba(138,172,202,0.07)",
                }}
              >
                {l.label}
              </button>
            ))}
          </nav>
          <div className="mt-auto">
            <button
              onClick={() => go("#contacto")}
              className="w-full py-3 text-[11px] font-semibold uppercase tracking-widest cursor-pointer transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #D7DCE2 0%, #F5F7FA 50%, #D7DCE2 100%)",
                color: "#030406",
              }}
            >
              Cotizar proyecto
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
