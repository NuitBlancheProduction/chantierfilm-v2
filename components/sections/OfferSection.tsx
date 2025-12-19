'use client';

import { Film, Video, Cloud } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function OfferSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = Array.from(entry.target.querySelectorAll('[data-card-index]'));
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services: Service[] = [
    {
      icon: <Film className="w-8 h-8" />,
      title: 'Reportage Complet de Chantier',
      description: 'Nous réalisons une captation complète de votre projet, du premier coup de pelle jusqu\'à la livraison finale. Grâce à une combinaison de prises de vue au sol, aériennes et en timelapse, nous créons un récit visuel impactant qui met en valeur votre savoir-faire et l\'évolution du chantier.'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Timelapse Professionnel',
      description: 'Nos caméras timelapse enregistrent l\'évolution de votre chantier en continu, offrant une vision accélérée et détaillée des travaux. Un outil puissant pour suivre les progrès, valoriser votre projet et communiquer efficacement avec vos équipes et clients.'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Accès à Distance en Temps Réel',
      description: 'Surveillez l\'évolution de votre chantier où que vous soyez ! Nos systèmes de caméras connectées transmettent en temps réel des images sécurisées accessibles via une plateforme dédiée. Un moyen efficace d\'optimiser le suivi du projet et de partager les avancées avec vos partenaires.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="notre_offre"
      className="py-20 lg:py-24 bg-cf-white relative overflow-hidden"
    >
      {/* Background decorative dots */}
      <div className="absolute bottom-[5%] left-[5%] w-[200px] h-[200px] opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(#4E6D88 2px, transparent 2px)',
          backgroundSize: '15px 15px'
        }} />
      </div>

      <div className="container max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 inline-block relative">
            <span className="relative z-10 bg-gradient-to-r from-cf-dark from-0% via-cf-dark via-50% to-cf-blue-primary to-50% bg-clip-text text-transparent">
              Notre Offre
            </span>
            <span className="absolute top-0 bottom-0 right-0 w-1/2 bg-cf-blue-lightest -rotate-1 rounded -z-10" />
            <span className="absolute w-[60px] h-1 bg-cf-blue-primary bottom-[-10px] left-1/2 -translate-x-1/2 rounded-full" />
          </h2>
          <p className="text-lg lg:text-xl text-cf-blue-dark max-w-[800px] mx-auto leading-relaxed">
            En choisissant Chantier Film, vous optez pour un partenaire qui valorise chaque détail de votre projet, transformant votre chantier en une histoire visuelle captivante et professionnelle.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-card-index={index}
              className={`bg-white rounded-2xl p-8 lg:p-10 shadow-md border border-cf-blue-lightest relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,85,255,0.15)] hover:border-cf-blue-light group ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cf-blue-lightest to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 -z-10" />

              {/* Icon */}
              <div className="mb-6">
                <div className="w-[70px] h-[70px] rounded-[20px] bg-cf-blue-lightest flex items-center justify-center text-cf-blue-primary shadow-[0_10px_20px_rgba(0,85,255,0.1)] transition-all duration-300 group-hover:rotate-[10deg] group-hover:bg-cf-blue-primary group-hover:text-white">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-cf-dark mb-4 pb-4 relative">
                {service.title}
                <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-cf-blue-primary transition-all duration-300 group-hover:w-20" />
              </h3>

              {/* Description */}
              <p className="text-base text-cf-blue-dark leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}