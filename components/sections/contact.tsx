"use client";

import { useState } from "react";
import { ExpandMap } from "@/components/ui/expand-map";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const projectTypes = [
  "Construcción residencial",
  "Construcción comercial",
  "Obra civil",
  "Remodelación y ampliaciones",
  "Supervisión de obra",
  "Proyecto arquitectónico",
  "Infraestructura",
  "Acabados premium",
  "Otro",
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    tipo: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C99A3B] text-xs uppercase tracking-[0.4em] font-[family-name:var(--font-cinzel)] mb-4">
            Contacto
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-cinzel)] text-[#F5F2EA] font-bold leading-tight max-w-3xl mx-auto">
            Inicia tu proyecto con C&C
          </h2>
          <p className="mt-6 text-[#F5F2EA]/50 text-sm max-w-xl mx-auto leading-relaxed">
            Cuéntanos sobre tu proyecto. Nuestro equipo técnico te contactará en menos de 24 horas
            para iniciar la evaluación sin compromiso.
          </p>
          <div className="w-16 h-px bg-[#C99A3B] mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: contact info + map */}
          <div className="space-y-8">
            {/* Contact data */}
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Ubicación", value: "Puebla, México" },
                { icon: Phone, label: "Teléfono", value: "+52 222 000 0000" },
                { icon: Mail, label: "Email", value: "contacto@ccconstrucciones.com" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-[#C99A3B]/30 flex-shrink-0">
                    <item.icon className="w-4 h-4 text-[#C99A3B]" />
                  </div>
                  <div>
                    <p className="text-[#F5F2EA]/40 text-[10px] uppercase tracking-widest">
                      {item.label}
                    </p>
                    <p className="text-[#F5F2EA] text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <ExpandMap
              location="C&C Construcciones · Puebla"
              address="Puebla, México"
            />
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full min-h-80 text-center border border-[#C99A3B]/30 bg-[#111111] p-8">
                <CheckCircle className="w-12 h-12 text-[#C99A3B] mb-4" />
                <h3 className="font-[family-name:var(--font-cinzel)] text-[#F5F2EA] text-xl font-semibold mb-3">
                  Solicitud recibida
                </h3>
                <p className="text-[#F5F2EA]/60 text-sm leading-relaxed max-w-sm">
                  Gracias por contactarnos. Nuestro equipo revisará tu información y te contactará en
                  menos de 24 horas hábiles.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-[#C99A3B] text-xs uppercase tracking-widest hover:underline cursor-pointer"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-[#F5F2EA]/50 text-[10px] uppercase tracking-widest mb-1.5"
                  >
                    Nombre completo *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full bg-[#111111] border border-[#2A2A2A] text-[#F5F2EA] text-sm px-4 py-3 placeholder-[#F5F2EA]/25 focus:outline-none focus:border-[#C99A3B] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-[#F5F2EA]/50 text-[10px] uppercase tracking-widest mb-1.5"
                    >
                      Teléfono *
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+52 222 000 0000"
                      className="w-full bg-[#111111] border border-[#2A2A2A] text-[#F5F2EA] text-sm px-4 py-3 placeholder-[#F5F2EA]/25 focus:outline-none focus:border-[#C99A3B] transition-colors"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#F5F2EA]/50 text-[10px] uppercase tracking-widest mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full bg-[#111111] border border-[#2A2A2A] text-[#F5F2EA] text-sm px-4 py-3 placeholder-[#F5F2EA]/25 focus:outline-none focus:border-[#C99A3B] transition-colors"
                    />
                  </div>
                </div>

                {/* Project type */}
                <div>
                  <label
                    htmlFor="tipo"
                    className="block text-[#F5F2EA]/50 text-[10px] uppercase tracking-widest mb-1.5"
                  >
                    Tipo de proyecto
                  </label>
                  <select
                    id="tipo"
                    name="tipo"
                    value={form.tipo}
                    onChange={handleChange}
                    className="w-full bg-[#111111] border border-[#2A2A2A] text-[#F5F2EA] text-sm px-4 py-3 focus:outline-none focus:border-[#C99A3B] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#111111]">
                      Selecciona una opción
                    </option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-[#111111]">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-[#F5F2EA]/50 text-[10px] uppercase tracking-widest mb-1.5"
                  >
                    Cuéntanos sobre tu proyecto
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Describe el tipo de proyecto, ubicación aproximada, dimensiones, plazos o cualquier detalle relevante..."
                    className="w-full bg-[#111111] border border-[#2A2A2A] text-[#F5F2EA] text-sm px-4 py-3 placeholder-[#F5F2EA]/25 focus:outline-none focus:border-[#C99A3B] transition-colors resize-none"
                  />
                </div>

                <Button type="submit" variant="default" size="lg" className="w-full">
                  <Send className="w-4 h-4" />
                  Enviar solicitud
                </Button>

                <p className="text-[#F5F2EA]/30 text-[10px] uppercase tracking-widest text-center">
                  Tu información es confidencial · Sin compromiso
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
