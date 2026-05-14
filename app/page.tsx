import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import ValueProposition from "@/components/sections/value-proposition";
import ServicesCarousel from "@/components/sections/services-carousel";
import CoverageGlobe from "@/components/sections/coverage-globe";
import CapabilitiesChart from "@/components/sections/capabilities-chart";
import Projects from "@/components/sections/projects";
import Process from "@/components/sections/process";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <ServicesCarousel />
        <Projects />
        <CapabilitiesChart />
        <CoverageGlobe />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
