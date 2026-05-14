"use client";

import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis,
  ResponsiveContainer, Tooltip,
} from "recharts";

interface DataPoint { area: string; tecnica: number; premium: number; }

const CustomTooltip = ({
  active, payload, label,
}: { active?: boolean; payload?: { name: string; value: number; color: string }[]; label?: string }) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="px-3 py-2 text-[11px]"
      style={{ background: "#0D1117", border: "1px solid rgba(138,172,202,0.15)" }}
    >
      <p
        className="mb-1.5"
        style={{ fontFamily: "var(--font-cinzel)", color: "rgba(215,220,226,0.55)" }}
      >
        {label}
      </p>
      {payload.map((e) => (
        <p key={e.name} className="flex gap-2" style={{ color: e.color }}>
          <span
            className="uppercase tracking-widest"
            style={{ color: "rgba(215,220,226,0.35)" }}
          >
            {e.name}:
          </span>
          <span className="font-semibold" style={{ color: "#D7DCE2" }}>{e.value}</span>
        </p>
      ))}
    </div>
  );
};

export function ConstructionRadarChart({ data }: { data: DataPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={340}>
      <RadarChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 16 }}>
        <PolarGrid stroke="rgba(138,172,202,0.10)" strokeDasharray="3 3" />
        <PolarAngleAxis
          dataKey="area"
          tick={{ fill: "rgba(215,220,226,0.40)", fontSize: 10, fontFamily: "Josefin Sans, sans-serif" }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Radar
          name="Capacidad técnica"
          dataKey="tecnica"
          stroke="#8AACCA"
          fill="#1D4F7A"
          fillOpacity={0.18}
          strokeWidth={1.5}
        />
        <Radar
          name="Enfoque premium"
          dataKey="premium"
          stroke="#1D4F7A"
          fill="#0D2742"
          fillOpacity={0.12}
          strokeWidth={1}
          strokeDasharray="4 4"
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
