'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { ServicesSection } from '@/components/sections/ServicesSection';

export default function Home() {
  return (
    <main className="bg-chantier-off-white min-h-screen">
      {/* Hero Section - Premier point de contact */}
      <HeroSection />
      
      {/* Problem Section - Exposition des défis et solutions */}
      <ProblemSection />
      
      {/* Services Section - Notre offre détaillée */}
      <ServicesSection />
      
      {/* Les sections suivantes seront ajoutées dans les prochaines étapes */}
      {/* - Section Avant/Après (Comparateur visuel) */}
      {/* - Section Processus (Étapes de collaboration) */}
      {/* - Section CTA/Contact (Formulaire et conversion) */}
    </main>
  );
}