import { GlobeFeatureSection } from "@/components/ui/globe-feature-section";

const features = [
  "Proyectos residenciales y comerciales en Puebla",
  "Obra civil e infraestructura regional",
  "Coordinación en zona centro-oriente del país",
  "Red de proveedores con materiales certificados",
  "Supervisión presencial en cada proyecto",
];

export default function CoverageGlobe() {
  return (
    <section id="cobertura" className="py-16 sm:py-24" style={{ background: "#030406" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlobeFeatureSection
          title="Cobertura"
          subtitle="Capacidad técnica desde Puebla"
          description="Desde Puebla, C&C desarrolla soluciones de construcción para proyectos residenciales, comerciales e industriales con planeación rigurosa y ejecución profesional en la región centro-oriente de México."
          features={features}
        />
      </div>
    </section>
  );
}
