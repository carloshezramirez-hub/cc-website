"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLink = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#050505]/95 backdrop-blur-md border-b border-[#C99A3B]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleLink("#inicio")}
              className="flex items-center gap-3 cursor-pointer group"
              aria-label="C&C Construcciones - Inicio"
            >
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/brand/cc-logo.png"
                  alt="C&C Construcciones logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-[#F5F2EA] font-[family-name:var(--font-cinzel)] text-sm font-semibold leading-tight tracking-wider group-hover:text-[#C99A3B] transition-colors">
                  C&C
                </p>
                <p className="text-[#F5F2EA]/50 text-[9px] uppercase tracking-[0.2em] leading-none">
                  Construcciones
                </p>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLink(link.href)}
                  className="text-[#F5F2EA]/70 hover:text-[#C99A3B] text-xs uppercase tracking-widest font-medium transition-colors duration-200 cursor-pointer relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C99A3B] group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="hidden lg:inline-flex"
                onClick={() => handleLink("#contacto")}
              >
                Cotizar proyecto
                <ChevronRight className="w-3.5 h-3.5" />
              </Button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-[#F5F2EA]/70 hover:text-[#C99A3B] transition-colors cursor-pointer"
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-[#111111] border-l border-[#C99A3B]/20 flex flex-col pt-20 pb-8 px-6 transition-transform duration-300",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col gap-1" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className="text-left text-[#F5F2EA]/80 hover:text-[#C99A3B] text-sm uppercase tracking-widest font-medium transition-colors duration-200 cursor-pointer py-3 border-b border-[#2A2A2A] last:border-0"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="mt-auto">
            <Button
              variant="default"
              size="lg"
              className="w-full"
              onClick={() => handleLink("#contacto")}
            >
              Cotizar proyecto
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
