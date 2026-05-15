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
        location: "Av. 7 Poniente núm. 101, Col. Centro\nPalmar de Bravo, Puebla · C.P. 75500",
        phone:    "249 108 4431",
        email:    "psd_ezequiel23@hotmail.com",
      }}
      socials={{ facebook: "#", instagram: "#", linkedin: "#", youtube: "#" }}
    />
  );
}
