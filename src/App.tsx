import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PositioningSection } from "./components/PositioningSection";
import { AboutSection } from "./components/AboutSection";
import { ContentAuthoritySection } from "./components/ContentAuthoritySection";
import { DifferentialsSection } from "./components/DifferentialsSection";
import { IntermediateCtaSection } from "./components/IntermediateCtaSection";
import { HowContactWorksSection } from "./components/HowContactWorksSection";
import { LocationSection } from "./components/LocationSection";
import { InstagramFeedSection } from "./components/InstagramFeedSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Bloco de Posicionamento */}
        <PositioningSection />

        {/* 3. Quem é Luciano */}
        <AboutSection />

        {/* 4. Autoridade Através do Conteúdo */}
        <ContentAuthoritySection />

        {/* 5. Diferenciais */}
        <DifferentialsSection />

        {/* 6. CTA Intermediário */}
        <IntermediateCtaSection />

        {/* 7. Como Funciona o Primeiro Contato */}
        <HowContactWorksSection />

        {/* 8. Onde Estamos (Localização) */}
        <LocationSection />

        {/* 9. Instagram */}
        <InstagramFeedSection />

        {/* 10. CTA Final */}
        <FinalCtaSection />
      </main>

      {/* 11. Rodapé */}
      <Footer />

      {/* WhatsApp Flutuante Mobile/Desktop */}
      <FloatingWhatsApp />
    </div>
  );
}
