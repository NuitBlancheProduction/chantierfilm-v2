import HeroSection from '@/components/sections/HeroSection';
import ProblemsSection from '@/components/sections/ProblemsSection';
import OfferSection from '@/components/sections/OfferSection';
import BeforeAfterSection from '@/components/sections/BeforeAfterSection';
import ProcessSection from '@/components/sections/ProcessSection';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      <ProblemsSection />
      <OfferSection />
      <BeforeAfterSection />
      <ProcessSection />
    </div>
  );
}