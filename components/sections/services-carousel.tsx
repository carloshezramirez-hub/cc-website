"use client";

import { FeatureCarousel, type CarouselItem } from "@/components/ui/feature-carousel";
import {
  Building2,
  Store,
  Home,
  Wrench,
  ClipboardCheck,
  Network,
  Gem,
  PenTool,
} from "lucide-react";

const services: CarouselItem[] = [
  {
    id: "obra-civil",
    label: "Obra civil",
    description:
      "Ejecución de obras de infraestructura urbana, estructuras, cimentaciones y proyectos de ingeniería civil con estándares técnicos rigurosos.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Obra civil en construcción — imagen editorial",
  },
  {
    id: "construccion-comercial",
    label: "Construcción comercial",
    description:
      "Desarrollo de naves industriales, locales, centros comerciales y edificios corporativos con diseño funcional y acabados de alto nivel.",
    icon: Store,
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Construcción comercial moderna — imagen editorial",
  },
  {
    id: "construccion-residencial",
    label: "Construcción residencial",
    description:
      "Casas y desarrollos habitacionales con planeación arquitectónica, materiales de calidad y entrega en tiempos comprometidos.",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Construcción residencial premium — imagen editorial",
  },
  {
    id: "remodelacion",
    label: "Remodelación y ampliaciones",
    description:
      "Transformamos espacios existentes con soluciones estructurales, acabados y ampliaciones que respetan la identidad del inmueble.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Remodelación de espacio — imagen editorial",
  },
  {
    id: "supervision",
    label: "Supervisión de obra",
    description:
      "Gestión técnica y administrativa del proyecto: control de calidad, avances, costos y comunicación directa con el cliente.",
    icon: ClipboardCheck,
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Supervisión de obra profesional — imagen editorial",
  },
  {
    id: "infraestructura",
    label: "Infraestructura",
    description:
      "Proyectos de vialidades, redes hidrosanitarias, instalaciones eléctricas y obras complementarias para desarrollos urbanos e industriales.",
    icon: Network,
    image:
      "https://images.unsplash.com/photo-1610642372651-fe6e4712df16?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Infraestructura urbana — imagen editorial",
  },
  {
    id: "acabados-premium",
    label: "Acabados premium",
    description:
      "Selección y aplicación de materiales de alta gama: pisos, muros, carpintería y sistemas de instalación para resultados de lujo.",
    icon: Gem,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Acabados de interiores premium — imagen editorial",
  },
  {
    id: "proyecto-arquitectonico",
    label: "Proyecto arquitectónico",
    description:
      "Diseño arquitectónico integral: anteproyecto, planos ejecutivos, renders y especificaciones técnicas para cualquier tipo de inmueble.",
    icon: PenTool,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Planos arquitectónicos profesionales — imagen editorial",
  },
];

export default function ServicesCarousel() {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-[#C99A3B] text-xs uppercase tracking-[0.4em] font-[family-name:var(--font-cinzel)] mb-4">
            Servicios
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-cinzel)] text-[#F5F2EA] font-bold leading-tight max-w-xl">
              Capacidades de construcción integral
            </h2>
            <p className="text-[#F5F2EA]/50 text-sm max-w-xs leading-relaxed">
              Desde el proyecto hasta la entrega. Soluciones completas para cada etapa de tu obra.
            </p>
          </div>
          <div className="w-16 h-px bg-[#C99A3B] mt-8" />
        </div>

        <FeatureCarousel items={services} autoPlayInterval={4500} />
      </div>
    </section>
  );
}
