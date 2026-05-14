import { FooterSection } from "@/components/ui/footer-section";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

const serviceLinks = [
  { label: "Obra civil", href: "#servicios" },
  { label: "Construcción comercial", href: "#servicios" },
  { label: "Remodelación", href: "#servicios" },
  { label: "Supervisión de obra", href: "#servicios" },
];

export default function Footer() {
  return (
    <FooterSection
      logoSrc="/brand/cc-logo.png"
      brandName="C&C Construcciones"
      tagline="Construcciones Carranza y Camarillo"
      navLinks={navLinks}
      serviceLinks={serviceLinks}
      contactInfo={{
        location: "Puebla, México",
        phone: "+52 222 000 0000",
        email: "contacto@ccconstrucciones.com",
      }}
      socials={{
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        youtube: "#",
      }}
    />
  );
}
