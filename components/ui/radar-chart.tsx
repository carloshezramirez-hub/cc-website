// "use client" already implied via parent capabilities-chart.tsx
"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

interface RadarDataPoint {
  area: string;
  tecnica: number;
  premium: number;
}

interface ConstructionRadarChartProps {
  data: RadarDataPoint[];
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#111111] border border-[#2A2A2A] px-4 py-3 text-xs">
        <p className="text-[#C99A3B] font-[family-name:var(--font-cinzel)] font-medium mb-2">
          {label}
        </p>
        {payload.map((entry) => (
          <p key={entry.name} style={{ color: entry.color }} className="flex gap-2 items-center">
            <span className="uppercase tracking-widest">{entry.name}:</span>
            <span className="font-semibold">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function ConstructionRadarChart({ data }: ConstructionRadarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={380}>
      <RadarChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
        <PolarGrid stroke="#2A2A2A" strokeDasharray="3 3" />
        <PolarAngleAxis
          dataKey="area"
          tick={{
            fill: "#F5F2EA",
            fontSize: 10,
            fontFamily: "Josefin Sans, sans-serif",
          }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          formatter={(value) => (
            <span className="text-xs text-[#F5F2EA]/70 uppercase tracking-widest">{value}</span>
          )}
        />
        <Radar
          name="Capacidad técnica"
          dataKey="tecnica"
          stroke="#C99A3B"
          fill="#C99A3B"
          fillOpacity={0.15}
          strokeWidth={2}
        />
        <Radar
          name="Enfoque premium"
          dataKey="premium"
          stroke="#F5F2EA"
          fill="#F5F2EA"
          fillOpacity={0.06}
          strokeWidth={1.5}
          strokeDasharray="4 4"
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
