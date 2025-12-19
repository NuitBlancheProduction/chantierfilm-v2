'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection';
import { ProcessSection } from '@/components/sections/ProcessSection';

export default function Home() {
  return (
    <main className="bg-chantier-off-white min-h-screen">
      {/* Hero Section - Premier point de contact */}
      <HeroSection />
      
      {/* Problem Section - Exposition des défis et solutions */}
      <ProblemSection />
      
      {/* Services Section - Notre offre détaillée */}
      <ServicesSection />
      
      {/* - Section Avant/Après (Comparateur visuel) */}
      <BeforeAfterSection />

      {/* - Section Processus (Étapes de collaboration) */}
      <ProcessSection />
      
      {/* - Section CTA/Contact (Formulaire et conversion) */}
    </main>
  );
}