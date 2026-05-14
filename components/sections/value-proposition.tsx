"use client";

import { motion } from "framer-motion";
import { Target, Shield, Layers, Gem } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precisión técnica",
    description:
      "Cada proyecto se ejecuta con ingeniería rigurosa, planos detallados y supervisión continua para garantizar resultados exactos.",
    accent: "border-t-[#C99A3B]",
  },
  {
    icon: Shield,
    title: "Ejecución confiable",
    description:
      "Cumplimos tiempos, presupuestos y estándares de calidad. Tu inversión está respaldada por un equipo profesional comprometido.",
    accent: "border-t-[#9A6A2F]",
  },
  {
    icon: Layers,
    title: "Diseño funcional",
    description:
      "Integramos visión arquitectónica con funcionalidad real. Espacios pensados para durar, crecer y generar valor a largo plazo.",
    accent: "border-t-[#C99A3B]",
  },
  {
    icon: Gem,
    title: "Acabados premium",
    description:
      "Los detalles definen la calidad. Seleccionamos materiales y terminaciones que reflejan el nivel de construcción que merece tu proyecto.",
    accent: "border-t-[#9A6A2F]",
  },
];

export default function ValueProposition() {
  return (
    <section
      id="valor"
      className="py-20 lg:py-32 bg-[#050505] relative overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#C99A3B 1px, transparent 1px), linear-gradient(90deg, #C99A3B 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-[#C99A3B] text-xs uppercase tracking-[0.4em] font-[family-name:var(--font-cinzel)] mb-4">
            Propuesta de valor
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-cinzel)] text-[#F5F2EA] font-bold leading-tight max-w-3xl mx-auto">
            Construimos espacios sólidos, funcionales y preparados para crecer
          </h2>
          <div className="w-16 h-px bg-[#C99A3B] mx-auto mt-8" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group bg-[#111111] border border-[#2A2A2A] border-t-2 ${value.accent} p-6 lg:p-8 hover:border-[#C99A3B]/40 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="w-10 h-10 flex items-center justify-center border border-[#C99A3B]/30 mb-6 group-hover:border-[#C99A3B] transition-colors">
                <value.icon className="w-5 h-5 text-[#C99A3B]" />
              </div>
              <h3 className="font-[family-name:var(--font-cinzel)] text-[#F5F2EA] text-base font-semibold mb-3 leading-tight">
                {value.title}
              </h3>
              <p className="text-[#F5F2EA]/55 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 border-t border-b border-[#2A2A2A] py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "10+", label: "Años de experiencia" },
            { value: "200+", label: "Proyectos entregados" },
            { value: "100%", label: "Compromiso técnico" },
            { value: "Puebla", label: "Centro de operaciones" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-[family-name:var(--font-cinzel)] text-2xl lg:text-3xl font-bold text-[#C99A3B]">
                {stat.value}
              </p>
              <p className="text-[#F5F2EA]/50 text-xs uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
