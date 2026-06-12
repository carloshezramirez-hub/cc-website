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
        location: "C. 11 Sur 14502-3ra, San Ramón\nHeroica Puebla de Zaragoza, Pue. · C.P. 72490",
        phone:    "222 813 9825",
        email:    "Javierhrdirector@gmail.com",
      }}
      socials={{ facebook: "#", instagram: "#", linkedin: "#", youtube: "#" }}
    />
  );
}
