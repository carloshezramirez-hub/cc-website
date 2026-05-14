import { FooterSection } from "@/components/ui/footer-section";

export default function Footer() {
  return (
    <FooterSection
      navLinks={[
        { label: "Inicio",     href: "#inicio" },
        { label: "Servicios",  href: "#servicios" },
        { label: "Proyectos",  href: "#proyectos" },
        { label: "Proceso",    href: "#proceso" },
        { label: "Contacto",   href: "#contacto" },
      ]}
      serviceLinks={[
        { label: "Obra civil",            href: "#servicios" },
        { label: "Construcción comercial", href: "#servicios" },
        { label: "Remodelación",           href: "#servicios" },
        { label: "Supervisión de obra",    href: "#servicios" },
      ]}
      contactInfo={{
        location: "Puebla, México",
        phone:    "+52 222 000 0000",
        email:    "contacto@ccconstrucciones.com",
      }}
      socials={{ facebook: "#", instagram: "#", linkedin: "#", youtube: "#" }}
    />
  );
}
