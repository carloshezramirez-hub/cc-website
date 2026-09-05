"use client";

import { useState } from "react";
import { MapPin, Maximize2, Minimize2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpandMapProps {
  location?: string;
  address?:  string;
  className?: string;
}

export function ExpandMap({ location = "C&C Contratistas · Vista Alegre, Puebla", address = "Nevada #2, Fracc. Vista Alegre", className }: ExpandMapProps) {
  const [expanded, setExpanded] = useState(false);

  const mapUrl =
    "https://www.google.com/maps?q=Nevada+2,+Fraccionamiento+Vista+Alegre,+Puebla,+Pue.&output=embed";

  return (
    <div className={cn("w-full", className)}>
      {/* Bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{
          background: "#0D1117",
          border: "1px solid rgba(138,172,202,0.12)",
          borderBottom: "none",
        }}
      >
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#8AACCA", opacity: 0.5 }} />
          <div>
            <p className="text-xs" style={{ color: "rgba(215,220,226,0.65)" }}>{location}</p>
            <p
              className="text-[9px] uppercase tracking-widest"
              style={{ color: "rgba(138,172,202,0.35)" }}
            >
              {address}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://maps.google.com/?q=Nevada+2,+Fraccionamiento+Vista+Alegre,+Puebla,+Pue."
            target="_blank" rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 text-[10px] uppercase tracking-widest transition-colors"
            style={{ color: "rgba(138,172,202,0.30)" }}
            aria-label="Abrir en Google Maps"
          >
            <ExternalLink className="w-3 h-3" />
            <span>Maps</span>
          </a>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-[10px] uppercase tracking-widest transition-colors cursor-pointer"
            style={{ color: "rgba(138,172,202,0.30)" }}
            aria-label={expanded ? "Colapsar" : "Expandir mapa"}
          >
            {expanded ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
            <span className="hidden sm:inline">{expanded ? "Colapsar" : "Expandir"}</span>
          </button>
        </div>
      </div>

      {/* Map */}
      <div
        className={cn("relative w-full overflow-hidden transition-all duration-500", expanded ? "h-[460px]" : "h-48 sm:h-64")}
        style={{ border: "1px solid rgba(138,172,202,0.12)" }}
      >
        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="absolute inset-0 z-10 flex items-end justify-center pb-3 cursor-pointer group"
            aria-label="Expandir mapa"
          >
            <span
              className="text-[10px] uppercase tracking-widest px-3 py-1.5 flex items-center gap-1.5 transition-colors"
              style={{
                background: "rgba(11,15,20,0.80)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(138,172,202,0.15)",
                color: "rgba(138,172,202,0.45)",
              }}
            >
              <Maximize2 className="w-3 h-3" /> Click para expandir
            </span>
          </button>
        )}
        <iframe
          src={mapUrl}
          className="w-full h-full"
          style={{ border: 0, filter: "invert(92%) hue-rotate(180deg) grayscale(50%)" }}
          allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación C&C Contratistas — Vista Alegre, Puebla"
        />
      </div>
    </div>
  );
}
