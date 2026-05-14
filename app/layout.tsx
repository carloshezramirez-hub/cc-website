import type { Metadata } from "next";
import { Cinzel, Josefin_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "C&C Construcciones | Obra civil, construcción y proyectos premium",
  description:
    "Construcción, obra civil, remodelación e infraestructura en Puebla. Proyectos residenciales, comerciales y técnicos con ejecución profesional.",
  keywords: [
    "construcción Puebla",
    "obra civil",
    "remodelación",
    "infraestructura",
    "construcción comercial",
    "construcción residencial",
    "C&C Construcciones",
    "Carranza Camarillo",
  ],
  openGraph: {
    title: "C&C Construcciones | Obra civil, construcción y proyectos premium",
    description:
      "Construcción, obra civil, remodelación e infraestructura en Puebla. Proyectos residenciales, comerciales y técnicos con ejecución profesional.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cinzel.variable} ${josefinSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-[#F5F2EA] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
