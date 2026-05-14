"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollExpansionHero } from "@/components/ui/scroll-expansion-hero";
import { ChevronRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <ScrollExpansionHero
      title="C&C Construcciones"
      headline="Construcción premium para proyectos de alto impacto"
      subheadline="Obra civil, infraestructura y espacios comerciales con visión técnica y ejecución profesional."
      scrollHint="Desliza para descubrir"
      backgroundImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80&auto=format&fit=crop"
      expandImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&auto=format&fit=crop"
    >
      {/* Logo visible in hero */}
      <div className="flex items-center gap-3 mb-2">
        <div className="relative w-8 h-8">
          <Image
            src="/brand/cc-logo.png"
            alt="C&C Construcciones"
            fill
            className="object-contain"
            sizes="32px"
          />
        </div>
        <span className="text-[#F5F2EA]/60 text-[10px] uppercase tracking-[0.3em]">
          Construcciones Carranza y Camarillo
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-sm sm:max-w-none sm:justify-center">
        <Button
          variant="default"
          size="lg"
          asChild
          className="w-full sm:w-auto"
        >
          <a href="#contacto">
            Solicitar cotización
            <ChevronRight className="w-4 h-4" />
          </a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          asChild
          className="w-full sm:w-auto"
        >
          <a href="#proyectos">Ver proyectos</a>
        </Button>
        <Button
          variant="ghost"
          size="lg"
          asChild
          className="w-full sm:w-auto hidden md:inline-flex"
        >
          <a href="tel:+522220000000">
            <Phone className="w-4 h-4 mr-2" />
            Contactar ahora
          </a>
        </Button>
      </div>
    </ScrollExpansionHero>
  );
}
