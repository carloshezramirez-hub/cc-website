import { GlobeFeatureSection } from "@/components/ui/globe-feature-section";

const features = [
  "Proyectos residenciales y comerciales en Puebla",
  "Obra civil e infraestructura regional",
  "Coordinación técnica en zona centro-oriente del país",
  "Red de proveedores y materiales de alta calidad",
  "Supervisión presencial en todo el proyecto",
];

export default function CoverageGlobe() {
  return (
    <section id="cobertura" className="py-20 lg:py-32 bg-[#050505] relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C99A3B]/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <GlobeFeatureSection
          title="Cobertura"
          subtitle="Cobertura y capacidad técnica"
          description="Desde Puebla, C&C desarrolla soluciones de construcción para proyectos residenciales, comerciales e industriales con enfoque técnico, planeación rigurosa y ejecución profesional. Operamos en la región centro-oriente de México con presencia directa en cada proyecto."
          features={features}
        />
      </div>
    </section>
  );
}
