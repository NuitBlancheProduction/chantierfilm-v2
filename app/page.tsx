import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { SectionSeparator } from '@/components/ui/SectionSeparator';

// Note: Metadata ne peut être exportée que depuis les Server Components
// Si ce fichier doit rester 'use client', déplacez les metadata dans un layout.tsx parent
// ou créez un fichier page.tsx sans 'use client' qui wrappe ce composant

export const metadata: Metadata = {
  title: 'Suivi de Chantier Vidéo, Drone & Timelapse BTP | Chantier Film',
  description:
    'Documentation vidéo de chantier et suivi drone pour le BTP. Timelapse box 4K, reportages industriels et valorisation de projets de construction. Devis gratuit.',
  keywords: [
    'suivi chantier',
    'timelapse btp',
    'drone construction',
    'vidéo suivi travaux',
    'reportage industriel',
    'grand est',
    'documentation chantier',
    'captation aérienne',
    'film corporate btp',
    'timelapse box',
    'drone vosges',
    'suivi travaux vidéo',
  ],
  openGraph: {
    title: 'Suivi de Chantier Vidéo, Drone & Timelapse BTP | Chantier Film',
    description:
      'Documentation vidéo de chantier et suivi drone pour le BTP. Timelapse box 4K, reportages industriels et valorisation de projets. Devis gratuit.',
    url: 'https://www.chantierfilm.com',
    type: 'website',
    images: [
      {
        url: '/images/home/hero/suivi-chantier-drone-vue-aerienne-btp-1.webp',
        width: 1200,
        height: 630,
        alt: 'Vue aérienne par drone de chantier BTP - Chantier Film',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suivi de Chantier Vidéo, Drone & Timelapse BTP',
    description:
      'Documentation vidéo de chantier et suivi drone pour le BTP. Timelapse box 4K et reportages industriels.',
    images: ['/images/home/hero/suivi-chantier-drone-vue-aerienne-btp-1.webp'],
  },
  alternates: {
    canonical: 'https://www.chantierfilm.com',
  },
};

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