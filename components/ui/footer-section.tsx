"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

interface FooterSectionProps {
  logoSrc?:    string;
  brandName?:  string;
  tagline?:    string;
  navLinks?:   { label: string; href: string }[];
  serviceLinks?: { label: string; href: string }[];
  contactInfo?: { location?: string; phone?: string; email?: string };
  socials?: { facebook?: string; instagram?: string; linkedin?: string; youtube?: string };
}

export function FooterSection({
  logoSrc    = "/brand/cc-metal-logo.png",
  brandName  = "C&C Construcciones",
  tagline    = "Contratistas · Puebla",
  navLinks   = [],
  serviceLinks = [],
  contactInfo  = {},
  socials      = {},
}: FooterSectionProps) {
  const year = new Date().getFullYear();

  const socialItems = [
    { Icon: FacebookIcon,  href: socials.facebook  || "#", label: "Facebook" },
    { Icon: InstagramIcon, href: socials.instagram || "#", label: "Instagram" },
    { Icon: LinkedinIcon,  href: socials.linkedin  || "#", label: "LinkedIn" },
    { Icon: YoutubeIcon,   href: socials.youtube   || "#", label: "YouTube" },
  ];

  return (
    <footer style={{ background: "#030406", borderTop: "1px solid rgba(138,172,202,0.08)" }}>

      {/* CTA band */}
      <div style={{ borderBottom: "1px solid rgba(138,172,202,0.08)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <h3
                className="text-xl sm:text-2xl font-bold"
                style={{ fontFamily: "var(--font-cinzel)", color: "#F5F7FA" }}
              >
                ¿Tienes un proyecto?
              </h3>
              <p className="text-sm mt-1" style={{ color: "rgba(215,220,226,0.35)" }}>
                Hablemos. Nuestro equipo técnico está listo para asesorarte.
              </p>
            </div>
            <a
              href="#contacto"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 text-[11px] uppercase tracking-widest transition-all"
              style={{
                border: "1px solid rgba(138,172,202,0.22)",
                color: "rgba(138,172,202,0.55)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(138,172,202,0.50)";
                e.currentTarget.style.color = "#D7DCE2";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(138,172,202,0.22)";
                e.currentTarget.style.color = "rgba(138,172,202,0.55)";
              }}
            >
              Solicitar cotización <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src={logoSrc}
                  alt={`${brandName} logo`}
                  fill
                  className="object-contain"
                  sizes="36px"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    if (!img.src.includes("cc-logo.png")) img.src = "/brand/cc-logo.png";
                  }}
                />
              </div>
              <div className="leading-none">
                <p
                  className="text-xs font-semibold tracking-wider"
                  style={{ fontFamily: "var(--font-cinzel)", color: "#D7DCE2" }}
                >
                  {brandName}
                </p>
                <p
                  className="text-[9px] uppercase tracking-[0.18em]"
                  style={{ color: "rgba(138,172,202,0.30)" }}
                >
                  {tagline}
                </p>
              </div>
            </div>
            <p
              className="text-xs leading-relaxed max-w-[220px]"
              style={{ color: "rgba(215,220,226,0.28)" }}
            >
              Construcción, obra civil e infraestructura con precisión técnica en Puebla, México.
            </p>
            <div className="flex gap-2.5 mt-5">
              {socialItems.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-7 h-7 flex items-center justify-center transition-all duration-200"
                  style={{
                    border: "1px solid rgba(138,172,202,0.10)",
                    color: "rgba(138,172,202,0.28)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(138,172,202,0.40)";
                    e.currentTarget.style.color = "rgba(138,172,202,0.70)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(138,172,202,0.10)";
                    e.currentTarget.style.color = "rgba(138,172,202,0.28)";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p
              className="text-[10px] font-semibold uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-cinzel)", color: "rgba(138,172,202,0.35)" }}
            >
              Navegación
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-xs uppercase tracking-wider transition-colors"
                    style={{ color: "rgba(215,220,226,0.28)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#D7DCE2")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(215,220,226,0.28)")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p
              className="text-[10px] font-semibold uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-cinzel)", color: "rgba(138,172,202,0.35)" }}
            >
              Servicios
            </p>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-xs uppercase tracking-wider transition-colors"
                    style={{ color: "rgba(215,220,226,0.28)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#D7DCE2")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(215,220,226,0.28)")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[10px] font-semibold uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-cinzel)", color: "rgba(138,172,202,0.35)" }}
            >
              Contacto
            </p>
            <ul className="space-y-3">
              {contactInfo.location && (
                <li className="flex items-start gap-2">
                  <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: "rgba(138,172,202,0.28)" }} />
                  <span className="text-xs leading-relaxed" style={{ color: "rgba(215,220,226,0.28)" }}>
                    {contactInfo.location}
                  </span>
                </li>
              )}
              {contactInfo.phone && (
                <li className="flex items-center gap-2">
                  <Phone className="w-3 h-3 flex-shrink-0" style={{ color: "rgba(138,172,202,0.28)" }} />
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g,"")}`}
                    className="text-xs transition-colors"
                    style={{ color: "rgba(215,220,226,0.28)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#D7DCE2")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(215,220,226,0.28)")}
                  >
                    {contactInfo.phone}
                  </a>
                </li>
              )}
              {contactInfo.email && (
                <li className="flex items-center gap-2">
                  <Mail className="w-3 h-3 flex-shrink-0" style={{ color: "rgba(138,172,202,0.28)" }} />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-xs transition-colors break-all"
                    style={{ color: "rgba(215,220,226,0.28)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#D7DCE2")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(215,220,226,0.28)")}
                  >
                    {contactInfo.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(138,172,202,0.06)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-[10px] uppercase tracking-widest"
            style={{ color: "rgba(138,172,202,0.18)" }}
          >
            © {year} {brandName}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1.5">
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: "rgba(138,172,202,0.18)" }}
            />
            <p
              className="text-[10px] uppercase tracking-widest"
              style={{ color: "rgba(138,172,202,0.18)" }}
            >
              Puebla · México
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
