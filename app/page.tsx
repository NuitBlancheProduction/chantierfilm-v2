'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProofSection } from '@/components/sections/ProofSection';
import { FoundersSection } from '@/components/sections/FoundersSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { SEOSection } from '@/components/sections/SEOSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white">
      <HeroSection />
      <ServicesSection />
      <ProofSection />
      <FoundersSection />
      <PortfolioSection />
      <SEOSection />
      <ContactSection />
    </main>
  );
}