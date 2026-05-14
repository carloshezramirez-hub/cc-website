"use client";

import { ConstructionRadarChart } from "@/components/ui/radar-chart";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const data = [
  { area: "Obra civil", tecnica: 95, premium: 85 },
  { area: "Supervisión", tecnica: 90, premium: 88 },
  { area: "Planeación", tecnica: 88, premium: 84 },
  { area: "Acabados", tecnica: 82, premium: 95 },
  { area: "Infraestructura", tecnica: 86, premium: 78 },
  { area: "Remodelación", tecnica: 84, premium: 92 },
];

const capacities = [
  { label: "Obra civil", value: 95 },
  { label: "Supervisión", value: 90 },
  { label: "Planeación", value: 88 },
  { label: "Infraestructura", value: 86 },
  { label: "Remodelación", value: 84 },
  { label: "Acabados", value: 82 },
];

export default function CapabilitiesChart() {
  return (
    <section id="capacidades" className="py-20 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C99A3B] text-xs uppercase tracking-[0.4em] font-[family-name:var(--font-cinzel)] mb-4">
            Capacidades
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-cinzel)] text-[#F5F2EA] font-bold leading-tight max-w-3xl mx-auto">
            Perfil técnico y capacidad de ejecución
          </h2>
          <div className="w-16 h-px bg-[#C99A3B] mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart — hidden on mobile, visible md+ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="hidden md:block bg-[#111111] border border-[#2A2A2A] p-6 lg:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-[family-name:var(--font-cinzel)] text-[#F5F2EA] text-base font-semibold">
                Radar de capacidades C&C
              </h3>
              <div className="flex items-center gap-3 text-xs text-[#F5F2EA]/40">
                <span className="flex items-center gap-1.5">
                  <span className="w-6 h-0.5 bg-[#C99A3B] inline-block" /> Técnica
                </span>
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-6 h-0.5 inline-block"
                    style={{
                      background:
                        "repeating-linear-gradient(90deg,#F5F2EA 0,#F5F2EA 4px,transparent 4px,transparent 8px)",
                    }}
                  />{" "}
                  Premium
                </span>
              </div>
            </div>
            <ConstructionRadarChart data={data} />
          </motion.div>

          {/* Capacity list — visible on mobile, hidden md+ */}
          <div className="md:hidden space-y-3">
            {capacities.map((cap, i) => (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-[#111111] border border-[#2A2A2A] px-4 py-3"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#F5F2EA]/80 font-medium">{cap.label}</span>
                  <Badge variant="default">{cap.value}%</Badge>
                </div>
                <div className="h-1 bg-[#2A2A2A] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${cap.value}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-[#C99A3B] rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side: text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-[family-name:var(--font-cinzel)] text-[#F5F2EA] text-2xl lg:text-3xl font-bold mb-6">
              Fortaleza técnica con visión premium
            </h3>
            <p className="text-[#F5F2EA]/60 text-sm leading-relaxed mb-8">
              C&C combina capacidad técnica de alto nivel con un enfoque de calidad premium en cada
              área de especialización. Nuestro equipo garantiza que cada proyecto alcance los
              estándares más exigentes del sector.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {capacities.map((cap) => (
                <div key={cap.label} className="hidden md:flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#C99A3B] flex-shrink-0" />
                  <div>
                    <p className="text-[#F5F2EA]/80 text-xs font-medium">{cap.label}</p>
                    <p className="text-[#C99A3B] text-xs font-[family-name:var(--font-cinzel)] font-bold">
                      {cap.value}%
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 border border-[#C99A3B]/20 bg-[#C99A3B]/5">
              <p className="text-[#C99A3B] text-xs uppercase tracking-widest mb-1 font-[family-name:var(--font-cinzel)]">
                Estándar C&C
              </p>
              <p className="text-[#F5F2EA]/70 text-sm leading-relaxed">
                Cada proyecto se ejecuta con supervisión directa, materiales certificados y
                protocolos de calidad documentados.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
