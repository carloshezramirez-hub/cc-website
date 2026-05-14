"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  LayoutDashboard,
  PenTool,
  Calculator,
  HardHat,
  Eye,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

const steps = [
  {
    number: "01",
    label: "Diagnóstico",
    icon: Search,
    description:
      "Analizamos el terreno, las necesidades del cliente y las condiciones del proyecto para establecer un punto de partida técnico sólido.",
    details: [
      "Visita técnica al sitio",
      "Levantamiento de condiciones existentes",
      "Análisis de requerimientos del cliente",
      "Evaluación de factibilidad",
    ],
  },
  {
    number: "02",
    label: "Planeación",
    icon: LayoutDashboard,
    description:
      "Definimos el alcance, la estrategia constructiva, los recursos necesarios y el cronograma general del proyecto.",
    details: [
      "Definición de alcance y fases",
      "Estrategia de construcción",
      "Identificación de proveedores clave",
      "Programa de trabajo preliminar",
    ],
  },
  {
    number: "03",
    label: "Proyecto",
    icon: PenTool,
    description:
      "Desarrollamos los planos arquitectónicos, estructurales e instalaciones con el nivel de detalle que exige cada etapa de obra.",
    details: [
      "Planos arquitectónicos ejecutivos",
      "Diseño estructural",
      "Instalaciones eléctricas e hidrosanitarias",
      "Especificaciones técnicas detalladas",
    ],
  },
  {
    number: "04",
    label: "Presupuesto",
    icon: Calculator,
    description:
      "Elaboramos un presupuesto transparente y detallado, con análisis de precios unitarios y estimados por etapa de obra.",
    details: [
      "Catálogo de conceptos",
      "Análisis de precios unitarios",
      "Programa de inversión por etapa",
      "Presentación y ajuste con el cliente",
    ],
  },
  {
    number: "05",
    label: "Ejecución",
    icon: HardHat,
    description:
      "Iniciamos la construcción con personal calificado, maquinaria adecuada y materiales de calidad certificada.",
    details: [
      "Apertura de obra",
      "Coordinación de cuadrillas y maquinaria",
      "Control de materiales y rendimientos",
      "Reportes periódicos de avance",
    ],
  },
  {
    number: "06",
    label: "Supervisión",
    icon: Eye,
    description:
      "Supervisamos cada etapa para garantizar calidad, seguridad y cumplimiento de especificaciones. El cliente tiene visibilidad total.",
    details: [
      "Control de calidad en sitio",
      "Verificación de especificaciones",
      "Gestión de cambios y ajustes",
      "Comunicación directa con el cliente",
    ],
  },
  {
    number: "07",
    label: "Entrega",
    icon: CheckCircle2,
    description:
      "Entregamos el proyecto terminado con recorrido final, documentación completa y acompañamiento postventa.",
    details: [
      "Recorrido de verificación final",
      "Documentación de obra (planos as-built)",
      "Garantías de construcción",
      "Acompañamiento postventa",
    ],
  },
];

function ProcessCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      viewport={{ once: true }}
      className="border border-[#2A2A2A] bg-[#111111] overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 text-left cursor-pointer hover:bg-[#1A1A1A] transition-colors"
      >
        <span className="font-[family-name:var(--font-cinzel)] text-[#C99A3B]/40 text-xs font-bold flex-shrink-0 w-8">
          {step.number}
        </span>
        <div className="w-8 h-8 flex items-center justify-center border border-[#C99A3B]/30 flex-shrink-0">
          <Icon className="w-4 h-4 text-[#C99A3B]" />
        </div>
        <span className="font-[family-name:var(--font-cinzel)] text-[#F5F2EA] text-sm font-semibold flex-1">
          {step.label}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#F5F2EA]/30 flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-2 border-t border-[#2A2A2A]">
              <p className="text-[#F5F2EA]/60 text-sm leading-relaxed mb-4">
                {step.description}
              </p>
              <ul className="space-y-2">
                {step.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-xs text-[#F5F2EA]/50">
                    <span className="w-3 h-px bg-[#C99A3B] flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section id="proceso" className="py-20 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C99A3B] text-xs uppercase tracking-[0.4em] font-[family-name:var(--font-cinzel)] mb-4">
            Proceso
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-cinzel)] text-[#F5F2EA] font-bold leading-tight max-w-3xl mx-auto">
            Cómo trabajamos en cada proyecto
          </h2>
          <p className="mt-6 text-[#F5F2EA]/50 text-sm max-w-xl mx-auto leading-relaxed">
            Un proceso estructurado y transparente que garantiza resultados. Desde el primer
            diagnóstico hasta la entrega final.
          </p>
          <div className="w-16 h-px bg-[#C99A3B] mx-auto mt-8" />
        </div>

        {/* Mobile: accordion cards */}
        <div className="lg:hidden space-y-2 max-w-2xl mx-auto">
          {steps.map((step, i) => (
            <ProcessCard key={step.number} step={step} index={i} />
          ))}
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Timeline bar */}
          <div className="relative flex items-start gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex-1 group"
                >
                  {/* Step header */}
                  <div className="relative flex flex-col items-center">
                    {/* Connector line */}
                    {i < steps.length - 1 && (
                      <div className="absolute left-1/2 top-5 w-full h-px bg-[#2A2A2A] z-0" />
                    )}
                    {/* Step circle */}
                    <div className="relative z-10 w-10 h-10 flex items-center justify-center border border-[#C99A3B]/40 bg-[#0A0A0A] group-hover:border-[#C99A3B] group-hover:bg-[#C99A3B]/10 transition-all duration-300">
                      <Icon className="w-4 h-4 text-[#C99A3B]" />
                    </div>
                    <span className="text-[#C99A3B]/50 text-[10px] font-[family-name:var(--font-cinzel)] mt-2">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-4 px-2 text-center">
                    <h3 className="font-[family-name:var(--font-cinzel)] text-[#F5F2EA] text-xs font-semibold mb-2">
                      {step.label}
                    </h3>
                    <p className="text-[#F5F2EA]/40 text-[11px] leading-relaxed">
                      {step.description.split(".")[0]}.
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed cards below */}
          <div className="mt-16 grid grid-cols-4 gap-4">
            {steps.slice(0, 4).map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="bg-[#111111] border border-[#2A2A2A] p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-4 h-4 text-[#C99A3B]" />
                    <span className="font-[family-name:var(--font-cinzel)] text-[#F5F2EA] text-xs font-semibold">
                      {step.label}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-[11px] text-[#F5F2EA]/40">
                        <span className="w-2 h-px bg-[#C99A3B]/60 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {steps.slice(4).map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="bg-[#111111] border border-[#2A2A2A] p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-4 h-4 text-[#C99A3B]" />
                    <span className="font-[family-name:var(--font-cinzel)] text-[#F5F2EA] text-xs font-semibold">
                      {step.label}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-[11px] text-[#F5F2EA]/40">
                        <span className="w-2 h-px bg-[#C99A3B]/60 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
