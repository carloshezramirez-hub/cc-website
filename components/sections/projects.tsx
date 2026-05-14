"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "residencial",
    category: "Residencial",
    title: "Vivienda de alto estándar",
    description:
      "Casas y conjuntos habitacionales con diseño arquitectónico propio, materiales de primera y acabados que superan expectativas.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Construcción residencial premium — imagen editorial",
    tag: "Residencial",
  },
  {
    id: "comercial",
    category: "Comercial",
    title: "Espacios para negocios de alto impacto",
    description:
      "Locales, naves comerciales, edificios corporativos y desarrollos mixtos con funcionalidad técnica y presencia arquitectónica.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Edificio comercial moderno — imagen editorial",
    tag: "Comercial",
  },
  {
    id: "obra-civil",
    category: "Obra civil",
    title: "Ingeniería al servicio del territorio",
    description:
      "Obras de infraestructura, pavimentación, sistemas hidráulicos y estructuras civiles con rigor técnico y cumplimiento normativo.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Obra de ingeniería civil — imagen editorial",
    tag: "Obra civil",
  },
  {
    id: "remodelacion",
    category: "Remodelación",
    title: "Transformación de espacios existentes",
    description:
      "Ampliaciones, adecuaciones y remodelaciones integrales que renuevan el inmueble manteniendo su esencia y valor patrimonial.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Remodelación de interiores — imagen editorial",
    tag: "Remodelación",
  },
  {
    id: "infraestructura",
    category: "Infraestructura",
    title: "Proyectos que sostienen el desarrollo",
    description:
      "Redes de servicios, vialidades, instalaciones industriales y sistemas de soporte para desarrollos urbanos y privados.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Infraestructura industrial — imagen editorial",
    tag: "Infraestructura",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 lg:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <p className="text-[#C99A3B] text-xs uppercase tracking-[0.4em] font-[family-name:var(--font-cinzel)] mb-4">
              Proyectos
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-cinzel)] text-[#F5F2EA] font-bold leading-tight max-w-xl">
              Tipos de obra que desarrollamos
            </h2>
            <div className="w-16 h-px bg-[#C99A3B] mt-8" />
          </div>
          <p className="text-[#F5F2EA]/50 text-sm max-w-xs leading-relaxed">
            Cada proyecto es único. Adaptamos nuestra capacidad técnica al alcance y visión del cliente.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden border border-[#2A2A2A] hover:border-[#C99A3B]/40 transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#050505]/80 backdrop-blur-sm border border-[#C99A3B]/30 text-[#C99A3B] text-[10px] uppercase tracking-widest px-2.5 py-1">
                    {project.tag}
                  </span>
                </div>
              </div>
              <div className="p-5 bg-[#111111]">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-[family-name:var(--font-cinzel)] text-[#F5F2EA] text-base font-semibold leading-tight">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-[#C99A3B] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-[#F5F2EA]/50 text-xs leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second row: 2 wide cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {projects.slice(3).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden border border-[#2A2A2A] hover:border-[#C99A3B]/40 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row"
            >
              <div className="relative w-full sm:w-48 flex-shrink-0 aspect-video sm:aspect-auto">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 192px"
                />
                <div className="absolute inset-0 bg-[#050505]/30" />
              </div>
              <div className="p-5 bg-[#111111] flex flex-col justify-center">
                <span className="text-[#C99A3B] text-[10px] uppercase tracking-widest mb-2">
                  {project.tag}
                </span>
                <h3 className="font-[family-name:var(--font-cinzel)] text-[#F5F2EA] text-base font-semibold leading-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-[#F5F2EA]/50 text-xs leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 border border-[#C99A3B] text-[#C99A3B] px-8 py-3 text-xs uppercase tracking-widest hover:bg-[#C99A3B] hover:text-[#050505] transition-all duration-300"
          >
            Solicitar información de proyectos
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
