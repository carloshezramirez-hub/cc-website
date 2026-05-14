"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Inline SVG brand icons (lucide-react v1 removed brand icons)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#050505" />
  </svg>
);

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSectionProps {
  logoSrc?: string;
  brandName?: string;
  tagline?: string;
  navLinks?: FooterLink[];
  serviceLinks?: FooterLink[];
  contactInfo?: {
    location?: string;
    phone?: string;
    email?: string;
  };
  socials?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  copyright?: string;
  className?: string;
}

export function FooterSection({
  logoSrc = "/brand/cc-logo.png",
  brandName = "C&C Construcciones",
  tagline = "Construcciones Carranza y Camarillo",
  navLinks = [],
  serviceLinks = [],
  contactInfo = {},
  socials = {},
  copyright,
  className,
}: FooterSectionProps) {
  const year = new Date().getFullYear();

  const socialItems = [
    { icon: FacebookIcon, href: socials.facebook || "#", label: "Facebook" },
    { icon: InstagramIcon, href: socials.instagram || "#", label: "Instagram" },
    { icon: LinkedinIcon, href: socials.linkedin || "#", label: "LinkedIn" },
    { icon: YoutubeIcon, href: socials.youtube || "#", label: "YouTube" },
  ];

  return (
    <footer className={cn("bg-[#050505] border-t border-[#C99A3B]/20", className)}>
      {/* CTA band */}
      <div className="border-b border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-[family-name:var(--font-cinzel)] text-[#F5F2EA] text-xl lg:text-2xl font-bold">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-[#F5F2EA]/50 text-sm mt-1">
                Hablemos. Nuestro equipo técnico está listo para asesorarte.
              </p>
            </div>
            <a
              href="#contacto"
              className="flex items-center gap-2 bg-[#C99A3B] text-[#050505] px-6 py-3 text-xs uppercase tracking-widest font-medium hover:bg-[#9A6A2F] transition-colors flex-shrink-0"
            >
              Solicitar cotización
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src={logoSrc}
                  alt={`${brandName} logo`}
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div>
                <p className="font-[family-name:var(--font-cinzel)] text-[#F5F2EA] text-sm font-semibold tracking-wide">
                  {brandName}
                </p>
                <p className="text-[#F5F2EA]/40 text-[9px] uppercase tracking-[0.2em]">
                  {tagline}
                </p>
              </div>
            </div>
            <p className="text-[#F5F2EA]/45 text-xs leading-relaxed mt-4 max-w-xs">
              Soluciones de construcción, obra civil e infraestructura con precisión técnica y
              ejecución profesional en Puebla, México.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {socialItems.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 flex items-center justify-center border border-[#2A2A2A] hover:border-[#C99A3B] hover:text-[#C99A3B] text-[#F5F2EA]/40 transition-all duration-200"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-[family-name:var(--font-cinzel)] text-[#F5F2EA] text-xs font-semibold uppercase tracking-widest mb-5">
              Navegación
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#F5F2EA]/45 hover:text-[#C99A3B] text-xs uppercase tracking-wider transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-[family-name:var(--font-cinzel)] text-[#F5F2EA] text-xs font-semibold uppercase tracking-widest mb-5">
              Servicios
            </p>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#F5F2EA]/45 hover:text-[#C99A3B] text-xs uppercase tracking-wider transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-[family-name:var(--font-cinzel)] text-[#F5F2EA] text-xs font-semibold uppercase tracking-widest mb-5">
              Contacto
            </p>
            <ul className="space-y-4">
              {contactInfo.location && (
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C99A3B] mt-0.5 flex-shrink-0" />
                  <span className="text-[#F5F2EA]/45 text-xs leading-relaxed">
                    {contactInfo.location}
                  </span>
                </li>
              )}
              {contactInfo.phone && (
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C99A3B] flex-shrink-0" />
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="text-[#F5F2EA]/45 hover:text-[#C99A3B] text-xs transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
              )}
              {contactInfo.email && (
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#C99A3B] flex-shrink-0" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-[#F5F2EA]/45 hover:text-[#C99A3B] text-xs transition-colors break-all"
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
      <div className="border-t border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#F5F2EA]/25 text-[10px] uppercase tracking-widest">
            {copyright || `© ${year} ${brandName}. Todos los derechos reservados.`}
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 bg-[#C99A3B] rounded-full" />
            <p className="text-[#F5F2EA]/25 text-[10px] uppercase tracking-widest">
              Puebla, México
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
