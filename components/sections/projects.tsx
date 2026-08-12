"use client";

import { ArrowUpRight } from "lucide-react";
import { ProjectCarousel, type CarouselProject } from "@/components/ui/project-carousel";

const projects: CarouselProject[] = [
  { id: "hotel-tru-hilton", tag: "Infraestructura hotelera", title: "Hotel TRU by Hilton", location: "Angelópolis, Atlixcáyotl, Puebla", year: "2025", image: "/proyectos/hotel-tru-hilton.jpg", imageAlt: "Hotel TRU by Hilton — interior" },
  { id: "planta-tratadora-tepeaca", tag: "Infraestructura ambiental", title: "Planta Tratadora", location: "Tepeaca, Puebla", year: "2026", image: "/proyectos/planta-tratadora-tepeaca.jpg", imageAlt: "Planta tratadora en construcción, Tepeaca" },
  { id: "palenque-recinto-ferial-tlaxcala", tag: "Institucional / Gobierno", title: "Palenque y Recinto Ferial Tlaxcala", location: "Tlaxcala de Xicohténcatl, Tlaxcala", year: "2026", image: "/proyectos/palenque-recinto-ferial-tlaxcala.jpg", imageAlt: "Obra del Palenque y Recinto Ferial de Tlaxcala" },
  { id: "centro-ensamble-semiconductores", tag: "Institucional / Gobierno", title: "Centro de Ensamble Semiconductores Puebla", location: "Momoxpan, Puebla", year: "2025", image: "/proyectos/centro-ensamble-semiconductores.jpg", imageAlt: "Centro de Ensamble de Semiconductores Puebla" },
  { id: "cae-aguascalientes", tag: "Institucional / Gobierno", title: "CAE Aguascalientes", location: "Aguascalientes, Aguascalientes", year: "2026", image: "/proyectos/cae-aguascalientes.jpg", imageAlt: "CAE Aguascalientes — interior" },
  { id: "planta-tratamiento-amozoc", tag: "Infraestructura hidráulica", title: "Planta de tratamiento", location: "Amozoc, Puebla", year: "2011", image: "/proyectos/planta-tratamiento-amozoc.jpg", imageAlt: "Planta de tratamiento en Amozoc, Puebla" },
  { id: "parque-victoria", tag: "Residencial vertical", title: "Parque Victoria", location: "Lomas de Angelópolis, Puebla", year: "2013", image: "/proyectos/parque-victoria.jpg", imageAlt: "Edificio residencial Parque Victoria" },
  { id: "locales-comerciales-arcangeles", tag: "Comercial", title: "Locales comerciales Arcángeles", location: "Lomas de Angelópolis, Puebla", image: "/proyectos/locales-comerciales-arcangeles.jpg", imageAlt: "Locales comerciales Arcángeles" },
  { id: "oficinas-corregidora", tag: "Corporativo", title: "Oficinas Corregidora", location: "Corregidora, Querétaro", year: "2016", image: "/proyectos/oficinas-corregidora.jpg", imageAlt: "Oficinas corporativas en Corregidora, Querétaro" },
  { id: "puente-vehicular-31-poniente", tag: "Infraestructura vial", title: "Puente vehicular 31 Poniente", location: "Blvd. Atlixco, Puebla", image: "/proyectos/puente-vehicular-31-poniente.jpg", imageAlt: "Puente vehicular 31 Poniente" },
  { id: "residencia-la-calera", tag: "Residencial premium", title: "Residencia La Calera", location: "Lomas de Angelópolis, Puebla", image: "/proyectos/residencia-la-calera.jpg", imageAlt: "Residencia La Calera" },
  { id: "lago-artificial-san-pablo", tag: "Obra exterior", title: "Lago artificial", location: "San Pablo del Monte, Tlaxcala", image: "/proyectos/lago-artificial-san-pablo.jpg", imageAlt: "Lago artificial en San Pablo del Monte" },
  { id: "corredores-ciclopista", tag: "Urbanismo", title: "Corredores y ciclopista", location: "Parque Ecológico y Centro de Puebla", image: "/proyectos/corredores-ciclopista.jpg", imageAlt: "Corredores y ciclopista urbana" },
  { id: "paraderos-catedral-puebla", tag: "Infraestructura urbana", title: "Paraderos y Catedral de Puebla", location: "Metrobús Línea 1 / Centro Histórico", image: "/proyectos/paraderos-catedral-puebla.jpg", imageAlt: "Paraderos de Metrobús junto a Catedral de Puebla" },
  { id: "cabana-descanso-jilotepec", tag: "Residencial campestre", title: "Cabaña de descanso", location: "Jilotepec, Zacapoaxtla, Puebla", year: "2016", image: "/proyectos/cabana-descanso-jilotepec.jpg", imageAlt: "Cabaña de descanso en Jilotepec" },
  { id: "nucleo-banos-oficinas-chachapa", tag: "Particular / Servicios", title: "Núcleo de baños y oficinas", location: "Chachapa, Puebla", year: "2016", image: "/proyectos/nucleo-banos-oficinas-chachapa.jpg", imageAlt: "Núcleo de baños y oficinas en Chachapa" },
  { id: "paseo-rio-atoyac", tag: "Infraestructura urbana", title: "Paseo Río Atoyac", location: "Puebla", image: "/proyectos/paseo-rio-atoyac.jpg", imageAlt: "Paseo Río Atoyac" },
  { id: "colegio-americano", tag: "Educativo", title: "Colegio Americano", location: "Las Ánimas, Puebla", image: "/proyectos/colegio-americano.jpg", imageAlt: "Colegio Americano, Las Ánimas" },
  { id: "nave-industrial-chachapa", tag: "Industrial", title: "Nave industrial", location: "Chachapa, Puebla", image: "/proyectos/nave-industrial-chachapa.jpg", imageAlt: "Nave industrial en Chachapa" },
  { id: "residencia-zavaleta", tag: "Residencial premium", title: "Residencia Zavaleta", location: "Calzada Zavaleta, Puebla", image: "/proyectos/residencia-zavaleta.jpg", imageAlt: "Residencia Zavaleta" },
  { id: "conjunto-habitacional-salina-cruz", tag: "Urbanización", title: "Conjunto habitacional", location: "Salina Cruz, Oaxaca", image: "/proyectos/conjunto-habitacional-salina-cruz.jpg", imageAlt: "Conjunto habitacional en Salina Cruz" },
  { id: "museo-tlaxco", tag: "Cultural", title: "Museo Tlaxco", location: "Tlaxco, Tlaxcala", image: "/proyectos/museo-tlaxco.jpg", imageAlt: "Museo Tlaxco" },
  { id: "drenaje-pavimentacion-quecholac", tag: "Infraestructura hidráulica", title: "Drenaje y pavimentación", location: "Quecholac, Puebla", image: "/proyectos/drenaje-pavimentacion-quecholac.jpg", imageAlt: "Obra de drenaje y pavimentación en Quecholac" },
  { id: "edificio-departamentos-la-paz", tag: "Residencial vertical", title: "Edificio de departamentos", location: "La Paz, Puebla", year: "2016", image: "/proyectos/edificio-departamentos-la-paz.jpg", imageAlt: "Edificio de departamentos en La Paz, Puebla" },
  { id: "casa-jovenes-progreso", tag: "Institucional", title: "Casa de Jóvenes en Progreso", location: "Zacatlán, Puebla", image: "/proyectos/casa-jovenes-progreso.jpg", imageAlt: "Casa de Jóvenes en Progreso, Zacatlán" },
  { id: "tutelar-menores-puebla", tag: "Institucional", title: "Tutelar para menores", location: "Puebla, Puebla", image: "/proyectos/tutelar-menores-puebla.jpg", imageAlt: "Tutelar para menores, Puebla" },
  { id: "club-golf-cola-lagarto", tag: "Club deportivo", title: "Club de Golf Cola de Lagarto", location: "Atlixco, Puebla", image: "/proyectos/club-golf-cola-lagarto.jpg", imageAlt: "Club de Golf Cola de Lagarto, Atlixco" },
  { id: "aulas-escolares-puebla", tag: "Educativo", title: "Aulas escolares", location: "Puebla, Puebla", image: "/proyectos/aulas-escolares-puebla.jpg", imageAlt: "Aulas escolares en Puebla" },
  { id: "centro-escolar-lazaro-cardenas", tag: "Educativo", title: "Centro Escolar Lázaro Cárdenas", location: "Izúcar de Matamoros, Puebla", image: "/proyectos/centro-escolar-lazaro-cardenas.jpg", imageAlt: "Centro Escolar Lázaro Cárdenas" },
  { id: "centro-comercial-amalucan", tag: "Comercial", title: "Centro comercial", location: "Amalucan, Puebla", image: "/proyectos/centro-comercial-amalucan.jpg", imageAlt: "Centro comercial en Amalucan" },
  { id: "issstep-san-baltazar", tag: "Institucional / Salud", title: "ISSSTEP San Baltazar", location: "San Baltazar, Puebla", year: "2007", image: "/proyectos/issstep-san-baltazar.jpg", imageAlt: "ISSSTEP San Baltazar" },
  { id: "oficinas-edificio-lite", tag: "Corporativo / Sustentable", title: "Oficinas comerciales Edificio Lite", location: "Lomas de Angelópolis, Puebla", image: "/proyectos/oficinas-edificio-lite.jpg", imageAlt: "Oficinas comerciales Edificio Lite" },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-16 sm:py-24 overflow-hidden" style={{ background: "#0B0F14" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <p
              className="text-[10px] uppercase mb-3"
              style={{
                fontFamily: "var(--font-cinzel)",
                color: "#8AACCA",
                letterSpacing: "0.4em",
                opacity: 0.6,
              }}
            >
              Proyectos
            </p>
            <h2
              className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight max-w-sm"
              style={{ fontFamily: "var(--font-cinzel)", color: "#F5F7FA" }}
            >
              Obra ejecutada en México
            </h2>
            <p className="mt-3 text-sm max-w-md leading-relaxed" style={{ color: "rgba(215,220,226,0.45)" }}>
              {projects.length} proyectos reales en obra civil, infraestructura, vivienda, comercio e institucional a lo largo de Puebla, Tlaxcala, Querétaro, Oaxaca y Aguascalientes.
            </p>
          </div>
          <a
            href="#contacto"
            className="self-start sm:self-auto inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest transition-colors"
            style={{ color: "rgba(138,172,202,0.40)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#D7DCE2")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(138,172,202,0.40)")}
          >
            Hablar con el equipo <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <ProjectCarousel projects={projects} />
      </div>
    </section>
  );
}
