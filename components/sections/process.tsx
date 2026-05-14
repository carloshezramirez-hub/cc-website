"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, LayoutDashboard, PenTool, Calculator, HardHat, Eye, CheckCircle2, ChevronDown } from "lucide-react";

const steps = [
  { n: "01", label: "Diagnóstico",  icon: Search,          body: "Analizamos el terreno, condiciones existentes y requerimientos para establecer un punto de partida técnico sólido." },
  { n: "02", label: "Planeación",   icon: LayoutDashboard, body: "Definimos alcance, estrategia constructiva, recursos y cronograma general del proyecto." },
  { n: "03", label: "Proyecto",     icon: PenTool,         body: "Desarrollamos planos arquitectónicos, estructurales e instalaciones con el nivel de detalle que exige la obra." },
  { n: "04", label: "Presupuesto",  icon: Calculator,      body: "Elaboramos un presupuesto transparente con análisis de precios unitarios y estimados por etapa." },
  { n: "05", label: "Ejecución",    icon: HardHat,         body: "Iniciamos la construcción con personal calificado, maquinaria adecuada y materiales de calidad certificada." },
  { n: "06", label: "Supervisión",  icon: Eye,             body: "Supervisamos cada etapa para garantizar calidad, seguridad y cumplimiento. El cliente tiene visibilidad total." },
  { n: "07", label: "Entrega",      icon: CheckCircle2,    body: "Recorrido final, documentación de obra, garantías y acompañamiento postventa." },
];

function StepCard({ step, i }: { step: typeof steps[0]; i: number }) {
  const [open, setOpen] = useState(false);
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: i * 0.05 }}
      viewport={{ once: true }}
      style={{
        border: "1px solid rgba(138,172,202,0.09)",
        background: "#0D1117",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-4 text-left cursor-pointer transition-colors"
        style={{ background: open ? "rgba(29,79,122,0.06)" : "transparent" }}
      >
        <span
          className="text-[10px] w-7 flex-shrink-0"
          style={{ fontFamily: "var(--font-cinzel)", color: "#1D4F7A" }}
        >
          {step.n}
        </span>
        <div
          className="w-7 h-7 flex items-center justify-center flex-shrink-0"
          style={{ border: "1px solid rgba(138,172,202,0.14)" }}
        >
          <Icon className="w-3.5 h-3.5" style={{ color: "#8AACCA", opacity: 0.55 }} />
        </div>
        <span
          className="text-xs font-semibold flex-1"
          style={{ fontFamily: "var(--font-cinzel)", color: "#D7DCE2", opacity: 0.85 }}
        >
          {step.label}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          style={{ color: "rgba(138,172,202,0.25)" }}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p
              className="px-4 pb-4 text-xs leading-relaxed pt-3 ml-10"
              style={{
                color: "rgba(215,220,226,0.42)",
                borderTop: "1px solid rgba(138,172,202,0.07)",
              }}
            >
              {step.body}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section id="proceso" className="py-16 sm:py-24" style={{ background: "#0B0F14" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <p
            className="text-[10px] uppercase mb-3"
            style={{
              fontFamily: "var(--font-cinzel)",
              color: "#8AACCA",
              letterSpacing: "0.4em",
              opacity: 0.6,
            }}
          >
            Proceso
          </p>
          <h2
            className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight max-w-xl"
            style={{ fontFamily: "var(--font-cinzel)", color: "#F5F7FA" }}
          >
            Cómo trabajamos en cada proyecto
          </h2>
        </div>

        {/* Mobile: accordion */}
        <div className="lg:hidden max-w-lg space-y-1.5">
          {steps.map((s, i) => <StepCard key={s.n} step={s} i={i} />)}
        </div>

        {/* Desktop: two columns */}
        <div className="hidden lg:grid grid-cols-2 gap-8 items-start">
          {/* Left: steps list */}
          <div className="space-y-1.5">
            {steps.map((s, i) => <StepCard key={s.n} step={s} i={i} />)}
          </div>
          {/* Right: visual accent */}
          <div className="sticky top-24 space-y-6">
            <div
              className="p-7"
              style={{
                background: "#0D1117",
                border: "1px solid rgba(138,172,202,0.10)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-widest mb-4"
                style={{
                  fontFamily: "var(--font-cinzel)",
                  color: "#8AACCA",
                  opacity: 0.6,
                }}
              >
                Nuestro proceso
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(215,220,226,0.50)" }}>
                Un proceso estructurado y transparente que garantiza resultados. Desde el primer
                diagnóstico hasta la entrega final con documentación completa.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "7", l: "Etapas" },
                  { v: "100%", l: "Documentado" },
                  { v: "Directo", l: "Contacto cliente" },
                  { v: "Garantía", l: "En entrega" },
                ].map((x) => (
                  <div
                    key={x.l}
                    className="p-3 text-center"
                    style={{ border: "1px solid rgba(138,172,202,0.08)" }}
                  >
                    <p
                      className="text-lg font-bold"
                      style={{ fontFamily: "var(--font-cinzel)", color: "#8AACCA" }}
                    >
                      {x.v}
                    </p>
                    <p
                      className="text-[10px] uppercase tracking-widest mt-0.5"
                      style={{ color: "rgba(215,220,226,0.30)" }}
                    >
                      {x.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="#contacto"
              className="block w-full text-center py-3.5 text-[11px] font-semibold uppercase tracking-widest transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #D7DCE2 0%, #F5F7FA 50%, #D7DCE2 100%)",
                color: "#030406",
              }}
            >
              Iniciar proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
