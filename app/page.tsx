'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { SectionSeparator } from '@/components/ui/SectionSeparator';

export default function Home() {
  return (
    <main className="bg-chantier-off-white min-h-screen">
      {/* Hero Section - Premier point de contact */}
      <HeroSection />
      
      <SectionSeparator />
      
      {/* Problem Section - Exposition des défis et solutions */}
      <ProblemSection />
      
      <SectionSeparator />
      
      {/* Services Section - Notre offre détaillée */}
      <ServicesSection />
      
      <SectionSeparator />
      
      {/* Section Avant/Après (Comparateur visuel) */}
      <BeforeAfterSection />

      <SectionSeparator />

      {/* Section Processus (Étapes de collaboration) */}
      <ProcessSection />
      
      <SectionSeparator />
      
      {/* Section CTA/Contact (Formulaire et conversion) - LE GRAND FINAL */}
      <ContactSection />
    </main>
  );
}