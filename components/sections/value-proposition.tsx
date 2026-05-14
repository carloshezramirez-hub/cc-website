"use client";

import { motion } from "framer-motion";
import { Target, Shield, Layers, Gem } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precisión técnica",
    description: "Ingeniería rigurosa, planos detallados y supervisión continua para garantizar resultados exactos.",
  },
  {
    icon: Shield,
    title: "Ejecución confiable",
    description: "Cumplimos tiempos, presupuestos y estándares. Tu inversión respaldada por un equipo comprometido.",
  },
  {
    icon: Layers,
    title: "Diseño funcional",
    description: "Espacios pensados para durar, crecer y generar valor a largo plazo con visión arquitectónica real.",
  },
  {
    icon: Gem,
    title: "Acabados premium",
    description: "Materiales y terminaciones que reflejan el nivel de construcción que merece tu proyecto.",
  },
];

const stats = [
  { value: "10+",    label: "Años" },
  { value: "200+",   label: "Proyectos" },
  { value: "100%",   label: "Compromiso" },
  { value: "Puebla", label: "Operaciones" },
];

export default function ValueProposition() {
  return (
    <section id="valor" className="py-16 sm:py-24" style={{ background: "#0B0F14" }}>
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
            Propuesta de valor
          </p>
          <h2
            className="font-bold leading-tight text-2xl sm:text-3xl lg:text-4xl max-w-2xl"
            style={{ fontFamily: "var(--font-cinzel)", color: "#F5F7FA" }}
          >
            Sólidos desde los cimientos
          </h2>
        </div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "rgba(138,172,202,0.08)" }}
        >
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="p-6 sm:p-7 group transition-colors duration-200"
              style={{ background: "#0D1117" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#161C24")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0D1117")}
            >
              <div
                className="w-8 h-8 flex items-center justify-center mb-5 transition-colors duration-200"
                style={{ border: "1px solid rgba(138,172,202,0.18)" }}
              >
                <v.icon className="w-4 h-4" style={{ color: "#8AACCA", opacity: 0.6 }} />
              </div>
              <h3
                className="text-sm font-semibold mb-2 leading-snug"
                style={{ fontFamily: "var(--font-cinzel)", color: "#D7DCE2" }}
              >
                {v.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(215,220,226,0.40)" }}>
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <div
          className="mt-px grid grid-cols-2 sm:grid-cols-4 gap-px"
          style={{ background: "rgba(138,172,202,0.08)" }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center py-6 sm:py-7"
              style={{ background: "#0D1117" }}
            >
              <p
                className="text-2xl sm:text-3xl font-bold"
                style={{ fontFamily: "var(--font-cinzel)", color: "#8AACCA" }}
              >
                {s.value}
              </p>
              <p
                className="text-[10px] uppercase mt-1"
                style={{ color: "rgba(215,220,226,0.35)", letterSpacing: "0.2em" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
