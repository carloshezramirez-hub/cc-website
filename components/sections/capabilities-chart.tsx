"use client";

import { motion } from "framer-motion";
import { ConstructionRadarChart } from "@/components/ui/radar-chart";

const data = [
  { area: "Obra civil",     tecnica: 95, premium: 85 },
  { area: "Supervisión",    tecnica: 90, premium: 88 },
  { area: "Planeación",     tecnica: 88, premium: 84 },
  { area: "Acabados",       tecnica: 82, premium: 95 },
  { area: "Infraestructura",tecnica: 86, premium: 78 },
  { area: "Remodelación",   tecnica: 84, premium: 92 },
];

const bars = [
  { label: "Obra civil",      value: 95 },
  { label: "Supervisión",     value: 90 },
  { label: "Planeación",      value: 88 },
  { label: "Infraestructura", value: 86 },
  { label: "Remodelación",    value: 84 },
  { label: "Acabados",        value: 82 },
];

export default function CapabilitiesChart() {
  return (
    <section id="capacidades" className="py-16 sm:py-24" style={{ background: "#030406" }}>
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
            Capacidades
          </p>
          <h2
            className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight max-w-xl"
            style={{ fontFamily: "var(--font-cinzel)", color: "#F5F7FA" }}
          >
            Perfil técnico y capacidad de ejecución
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Radar — hidden mobile, shown md+ */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="hidden md:flex flex-col p-5 sm:p-7"
            style={{
              background: "#0D1117",
              border: "1px solid rgba(138,172,202,0.10)",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-cinzel)", color: "#D7DCE2" }}
              >
                Radar de capacidades
              </h3>
              <div className="flex gap-4 text-[10px]" style={{ color: "rgba(215,220,226,0.35)" }}>
                <span className="flex items-center gap-1.5">
                  <span className="w-5 h-px inline-block" style={{ background: "#8AACCA" }} />
                  Técnica
                </span>
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-5 h-px inline-block"
                    style={{
                      background: "repeating-linear-gradient(90deg,#1D4F7A 0,#1D4F7A 3px,transparent 3px,transparent 7px)",
                    }}
                  />
                  Premium
                </span>
              </div>
            </div>
            <ConstructionRadarChart data={data} />
          </motion.div>

          {/* Mobile: progress bars */}
          <div className="md:hidden space-y-2.5">
            {bars.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                className="px-4 py-3"
                style={{
                  background: "#0D1117",
                  border: "1px solid rgba(138,172,202,0.10)",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium" style={{ color: "#D7DCE2", opacity: 0.8 }}>
                    {b.label}
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-widest"
                    style={{ color: "rgba(138,172,202,0.40)" }}
                  >
                    {b.value}%
                  </span>
                </div>
                <div
                  className="h-0.5 overflow-hidden"
                  style={{ background: "rgba(138,172,202,0.10)" }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.value}%` }}
                    transition={{ duration: 0.8, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="h-full"
                    style={{ background: "linear-gradient(90deg, #1D4F7A, #8AACCA)" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3
              className="text-xl sm:text-2xl font-bold mb-4 leading-snug"
              style={{ fontFamily: "var(--font-cinzel)", color: "#F5F7FA" }}
            >
              Fortaleza técnica con visión premium
            </h3>
            <p className="text-sm leading-relaxed mb-7" style={{ color: "rgba(215,220,226,0.45)" }}>
              C&C combina capacidad técnica de alto nivel con un enfoque de calidad en cada
              área de especialización. Nuestro equipo garantiza que cada proyecto alcance los
              estándares más exigentes del sector.
            </p>

            {/* Bar list — desktop */}
            <div className="hidden md:grid grid-cols-2 gap-x-6 gap-y-4">
              {bars.map((b) => (
                <div key={b.label} className="flex items-center gap-2.5">
                  <div
                    className="w-1.5 h-1.5 flex-shrink-0"
                    style={{ background: "#1D4F7A" }}
                  />
                  <div>
                    <p className="text-[11px]" style={{ color: "rgba(215,220,226,0.60)" }}>
                      {b.label}
                    </p>
                    <p
                      className="text-[10px] uppercase tracking-widest"
                      style={{ color: "rgba(138,172,202,0.35)" }}
                    >
                      {b.value}%
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-7 p-4"
              style={{
                border: "1px solid rgba(138,172,202,0.10)",
                background: "rgba(29,79,122,0.06)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-widest mb-1"
                style={{ fontFamily: "var(--font-cinzel)", color: "#8AACCA", opacity: 0.6 }}
              >
                Estándar C&C
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(215,220,226,0.45)" }}>
                Supervisión directa, materiales certificados y protocolos de calidad documentados en cada proyecto.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
