"use client";

import { FeatureCarousel, type CarouselItem } from "@/components/ui/feature-carousel";
import { Building2, Store, Home, Wrench, ClipboardCheck, Network, Gem, PenTool } from "lucide-react";

const services: CarouselItem[] = [
  {
    id: "obra-civil",
    label: "Obra civil",
    description: "Estructuras, cimentaciones y proyectos de ingeniería civil con estándares técnicos rigurosos.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Obra civil en construcción",
  },
  {
    id: "comercial",
    label: "Construcción comercial",
    description: "Naves industriales, locales y edificios corporativos con diseño funcional y acabados de alto nivel.",
    icon: Store,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Construcción comercial moderna",
  },
  {
    id: "residencial",
    label: "Construcción residencial",
    description: "Casas y desarrollos habitacionales con planeación arquitectónica y materiales de calidad.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Construcción residencial premium",
  },
  {
    id: "remodelacion",
    label: "Remodelación",
    description: "Transformamos espacios existentes con soluciones estructurales y acabados que respetan la identidad del inmueble.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Remodelación de espacio",
  },
  {
    id: "supervision",
    label: "Supervisión de obra",
    description: "Gestión técnica y administrativa: control de calidad, avances, costos y comunicación directa.",
    icon: ClipboardCheck,
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Supervisión de obra profesional",
  },
  {
    id: "infraestructura",
    label: "Infraestructura",
    description: "Vialidades, redes hidrosanitarias e instalaciones para desarrollos urbanos e industriales.",
    icon: Network,
    image: "https://images.unsplash.com/photo-1610642372651-fe6e4712df16?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Infraestructura urbana",
  },
  {
    id: "acabados",
    label: "Acabados premium",
    description: "Materiales de alta gama: pisos, muros, carpintería y sistemas de instalación para resultados de lujo.",
    icon: Gem,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Acabados de interiores premium",
  },
  {
    id: "arquitectonico",
    label: "Proyecto arquitectónico",
    description: "Diseño integral: anteproyecto, planos ejecutivos, renders y especificaciones técnicas.",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Planos arquitectónicos profesionales",
  },
];

export default function ServicesCarousel() {
  return (
    <section id="servicios" className="py-16 sm:py-24" style={{ background: "#030406" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <p
            className="text-[10px] uppercase mb-3"
            style={{
              fontFamily: "var(--font-cinzel)",
              color: "#8AACCA",
              letterSpacing: "0.4em",
              opacity: 0.6,
            }}
          >
            Servicios
          </p>
          <h2
            className="font-bold text-2xl sm:text-3xl lg:text-4xl max-w-xl leading-tight"
            style={{ fontFamily: "var(--font-cinzel)", color: "#F5F7FA" }}
          >
            Capacidades de construcción integral
          </h2>
        </div>
        <FeatureCarousel items={services} autoPlayInterval={4500} />
      </div>
    </section>
  );
}
