"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExpandMap } from "@/components/ui/expand-map";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

const types = [
  "Construcción residencial", "Construcción comercial", "Obra civil",
  "Remodelación", "Supervisión de obra", "Proyecto arquitectónico",
  "Infraestructura", "Otro",
];

const inputStyle = {
  background: "#0D1117",
  border: "1px solid rgba(138,172,202,0.15)",
  color: "#D7DCE2",
  fontSize: 14,
  padding: "12px 16px",
  outline: "none",
  width: "100%",
  transition: "border-color 0.15s",
} as React.CSSProperties;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", tipo: "", mensaje: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const focusStyle = { borderColor: "rgba(138,172,202,0.45)" };
  const blurStyle  = { borderColor: "rgba(138,172,202,0.15)" };

  return (
    <section id="contacto" className="py-16 sm:py-24" style={{ background: "#030406" }}>
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
            Contacto
          </p>
          <h2
            className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight max-w-xl"
            style={{ fontFamily: "var(--font-cinzel)", color: "#F5F7FA" }}
          >
            Inicia tu proyecto con C&C
          </h2>
          <p className="mt-3 text-sm max-w-md leading-relaxed" style={{ color: "rgba(215,220,226,0.45)" }}>
            Cuéntanos sobre tu proyecto. Te contactamos en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left */}
          <div className="space-y-7">
            {/* Dirección */}
            <div className="flex items-start gap-3">
              <div
                className="w-9 h-9 flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ border: "1px solid rgba(138,172,202,0.15)" }}
              >
                <MapPin className="w-3.5 h-3.5" style={{ color: "#8AACCA", opacity: 0.6 }} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "rgba(138,172,202,0.45)" }}>
                  Ubicación
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#D7DCE2" }}>
                  Av. 7 Poniente núm. 101, Col. Centro
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#D7DCE2" }}>
                  Palmar de Bravo, Puebla
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(215,220,226,0.55)" }}>
                  C.P. 75500
                </p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                style={{ border: "1px solid rgba(138,172,202,0.15)" }}
              >
                <Phone className="w-3.5 h-3.5" style={{ color: "#8AACCA", opacity: 0.6 }} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "rgba(138,172,202,0.45)" }}>
                  Teléfono
                </p>
                <a
                  href="tel:+522491084431"
                  className="text-sm transition-colors"
                  style={{ color: "#D7DCE2" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#8AACCA")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#D7DCE2")}
                >
                  249 108 4431
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                style={{ border: "1px solid rgba(138,172,202,0.15)" }}
              >
                <Mail className="w-3.5 h-3.5" style={{ color: "#8AACCA", opacity: 0.6 }} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "rgba(138,172,202,0.45)" }}>
                  Email
                </p>
                <a
                  href="mailto:psd_ezequiel23@hotmail.com"
                  className="text-sm break-all transition-colors"
                  style={{ color: "#D7DCE2" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#8AACCA")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#D7DCE2")}
                >
                  psd_ezequiel23@hotmail.com
                </a>
              </div>
            </div>

            <ExpandMap />
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {sent ? (
              <div
                className="flex flex-col items-center justify-center min-h-72 text-center p-8"
                style={{ border: "1px solid rgba(138,172,202,0.12)", background: "#0D1117" }}
              >
                <CheckCircle className="w-10 h-10 mb-4" style={{ color: "#8AACCA" }} />
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-cinzel)", color: "#D7DCE2" }}
                >
                  Solicitud recibida
                </h3>
                <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(215,220,226,0.45)" }}>
                  Gracias. Nuestro equipo te contactará en menos de 24 horas hábiles.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-5 text-[11px] uppercase tracking-widest cursor-pointer transition-colors"
                  style={{ color: "rgba(138,172,202,0.45)" }}
                >
                  Nueva solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                {[
                  { id: "nombre",   label: "Nombre completo *", type: "text",  req: true,  placeholder: "Tu nombre" },
                  { id: "telefono", label: "Teléfono *",         type: "tel",   req: true,  placeholder: "249 108 4431" },
                  { id: "email",    label: "Email *",             type: "email", req: true,  placeholder: "tu@email.com" },
                ].map((f) => (
                  <div key={f.id}>
                    <label
                      htmlFor={f.id}
                      className="block text-[10px] uppercase tracking-widest mb-1.5"
                      style={{ color: "rgba(138,172,202,0.50)" }}
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id} name={f.id} type={f.type} required={f.req}
                      value={(form as Record<string, string>)[f.id]}
                      onChange={onChange}
                      placeholder={f.placeholder}
                      style={inputStyle}
                      onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.currentTarget.style, blurStyle)}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="tipo"
                    className="block text-[10px] uppercase tracking-widest mb-1.5"
                    style={{ color: "rgba(138,172,202,0.50)" }}
                  >
                    Tipo de proyecto
                  </label>
                  <select
                    id="tipo" name="tipo" value={form.tipo} onChange={onChange}
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                    onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.currentTarget.style, blurStyle)}
                  >
                    <option value="" style={{ background: "#0D1117" }}>Selecciona una opción</option>
                    {types.map((t) => (
                      <option key={t} value={t} style={{ background: "#0D1117" }}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-[10px] uppercase tracking-widest mb-1.5"
                    style={{ color: "rgba(138,172,202,0.50)" }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje" name="mensaje" rows={4} value={form.mensaje} onChange={onChange}
                    placeholder="Describe tu proyecto: tipo de obra, dimensiones, ubicación aproximada..."
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.currentTarget.style, blurStyle)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 text-[11px] font-semibold uppercase tracking-widest cursor-pointer transition-opacity hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #D7DCE2 0%, #F5F7FA 50%, #D7DCE2 100%)",
                    color: "#030406",
                  }}
                >
                  <Send className="w-3.5 h-3.5" /> Enviar solicitud
                </button>
                <p
                  className="text-[10px] uppercase tracking-widest text-center"
                  style={{ color: "rgba(138,172,202,0.25)" }}
                >
                  Información confidencial · Sin compromiso
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
