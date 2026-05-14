"use client";

import { useState } from "react";
import { MapPin, Maximize2, Minimize2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpandMapProps {
  location?: string;
  address?: string;
  embedUrl?: string;
  className?: string;
}

export function ExpandMap({
  location = "C&C Construcciones · Puebla",
  address = "Puebla, México",
  embedUrl,
  className,
}: ExpandMapProps) {
  const [expanded, setExpanded] = useState(false);

  const mapUrl =
    embedUrl ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120926.85483994507!2d-98.32282!3d19.04141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0f1e93a6647%3A0xf2a0f6d7cf5e2f08!2sPuebla%2C%20Pue.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx";

  return (
    <div className={cn("w-full", className)}>
      {/* Header bar */}
      <div className="flex items-center justify-between bg-[#111111] border border-[#2A2A2A] border-b-0 px-4 py-3">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#C99A3B] flex-shrink-0" />
          <div>
            <p className="text-[#F5F2EA] text-xs font-medium">{location}</p>
            <p className="text-[#F5F2EA]/40 text-[10px] uppercase tracking-widest">{address}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`https://maps.google.com/?q=Puebla,Mexico`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#C99A3B]/60 hover:text-[#C99A3B] text-[10px] uppercase tracking-widest transition-colors"
            aria-label="Abrir en Google Maps"
          >
            <ExternalLink className="w-3 h-3" />
            <span className="hidden sm:inline">Google Maps</span>
          </a>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-[#F5F2EA]/40 hover:text-[#C99A3B] text-[10px] uppercase tracking-widest transition-colors cursor-pointer ml-2"
            aria-label={expanded ? "Colapsar mapa" : "Click para expandir"}
          >
            {expanded ? (
              <Minimize2 className="w-3.5 h-3.5" />
            ) : (
              <Maximize2 className="w-3.5 h-3.5" />
            )}
            <span className="hidden sm:inline">{expanded ? "Colapsar" : "Click para expandir"}</span>
          </button>
        </div>
      </div>

      {/* Map container */}
      <div
        className={cn(
          "relative w-full overflow-hidden border border-[#2A2A2A] transition-all duration-500",
          expanded ? "h-[500px] sm:h-[600px]" : "h-52 sm:h-72"
        )}
      >
        {/* Gold-tinted overlay that fades when expanded */}
        <div
          className={cn(
            "absolute inset-0 z-10 pointer-events-none border border-[#C99A3B]/10 transition-opacity duration-500",
            expanded ? "opacity-0" : "opacity-100"
          )}
        />

        <iframe
          src={mapUrl}
          className="w-full h-full grayscale opacity-80 hover:opacity-100 transition-opacity duration-300"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(40%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa de ubicación — ${location}`}
        />

        {/* Click hint overlay */}
        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="absolute inset-0 z-20 flex items-end justify-center pb-4 cursor-pointer group"
            aria-label="Click para expandir el mapa"
          >
            <div className="bg-[#050505]/80 backdrop-blur-sm border border-[#C99A3B]/30 px-3 py-1.5 flex items-center gap-2 group-hover:border-[#C99A3B] transition-colors">
              <Maximize2 className="w-3 h-3 text-[#C99A3B]" />
              <span className="text-[#F5F2EA]/70 text-[10px] uppercase tracking-widest">
                Click para expandir
              </span>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
