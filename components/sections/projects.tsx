"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "residencial",
    tag: "Residencial",
    title: "Vivienda de alto estándar",
    description: "Casas y conjuntos habitacionales con diseño propio, materiales de primera y acabados que superan expectativas.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Construcción residencial — imagen editorial",
  },
  {
    id: "comercial",
    tag: "Comercial",
    title: "Espacios para negocios de alto impacto",
    description: "Locales, naves comerciales y edificios corporativos con funcionalidad técnica y presencia arquitectónica.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Edificio comercial — imagen editorial",
  },
  {
    id: "obra-civil",
    tag: "Obra civil",
    title: "Ingeniería al servicio del territorio",
    description: "Obras de infraestructura, sistemas hidráulicos y estructuras civiles con rigor técnico y normativa.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Obra de ingeniería civil — imagen editorial",
  },
  {
    id: "remodelacion",
    tag: "Remodelación",
    title: "Transformación de espacios existentes",
    description: "Ampliaciones y remodelaciones que renuevan el inmueble manteniendo su esencia y valor.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Remodelación de interiores — imagen editorial",
  },
  {
    id: "infraestructura",
    tag: "Infraestructura",
    title: "Proyectos que sostienen el desarrollo",
    description: "Redes de servicios, vialidades e instalaciones industriales para desarrollos urbanos y privados.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Infraestructura industrial — imagen editorial",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-16 sm:py-24" style={{ background: "#0B0F14" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <p
              className="text-[10px] uppercase mb-3"
              style={{
                fontFamily: "var(--font-cinzel)",
                color: "#8AACCA",
                letterSpacing: "0.4em",
                opacity: 0.6,
              }}
            >
              Proyectos
            </p>
            <h2
              className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight max-w-sm"
              style={{ fontFamily: "var(--font-cinzel)", color: "#F5F7FA" }}
            >
              Tipos de obra que desarrollamos
            </h2>
          </div>
          <a
            href="#contacto"
            className="self-start sm:self-auto inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest transition-colors"
            style={{ color: "rgba(138,172,202,0.40)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#D7DCE2")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(138,172,202,0.40)")}
          >
            Hablar con el equipo <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Top 3 */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-px"
          style={{ background: "rgba(138,172,202,0.08)" }}
        >
          {projects.slice(0, 3).map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden"
              style={{ background: "#0D1117" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image} alt={p.imageAlt} fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(11,15,20,0.92) 0%, rgba(11,15,20,0.20) 60%, transparent 100%)" }}
                />
                <span
                  className="absolute top-3 left-3 text-[9px] uppercase px-2 py-0.5"
                  style={{
                    color: "#8AACCA",
                    letterSpacing: "0.18em",
                    border: "1px solid rgba(138,172,202,0.22)",
                    background: "rgba(13,39,66,0.55)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {p.tag}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h3
                  className="text-sm font-semibold leading-snug mb-1.5"
                  style={{ fontFamily: "var(--font-cinzel)", color: "#D7DCE2" }}
                >
                  {p.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(215,220,226,0.38)" }}>
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom 2 */}
        <div
          className="mt-px grid grid-cols-1 sm:grid-cols-2 gap-px"
          style={{ background: "rgba(138,172,202,0.08)" }}
        >
          {projects.slice(3).map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group flex overflow-hidden"
              style={{ background: "#0D1117" }}
            >
              <div className="relative w-28 sm:w-36 flex-shrink-0">
                <Image
                  src={p.image} alt={p.imageAlt} fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="144px"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(11,15,20,0.35)" }}
                />
              </div>
              <div className="p-4 flex flex-col justify-center">
                <span
                  className="text-[9px] uppercase mb-1"
                  style={{ color: "#8AACCA", letterSpacing: "0.18em", opacity: 0.7 }}
                >
                  {p.tag}
                </span>
                <h3
                  className="text-sm font-semibold leading-snug mb-1"
                  style={{ fontFamily: "var(--font-cinzel)", color: "#D7DCE2" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-xs leading-relaxed line-clamp-2"
                  style={{ color: "rgba(215,220,226,0.38)" }}
                >
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
