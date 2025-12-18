'use client';

import { Phone, FileCheck, Camera, Video, Gift } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ProcessStep {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isRight?: boolean;
}

export default function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = Array.from(entry.target.querySelectorAll('[data-step-index]'));
            steps.forEach((step, index) => {
              setTimeout(() => {
                setVisibleSteps(prev => [...prev, index]);
              }, index * 200);
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

  const steps: ProcessStep[] = [
    {
      number: 1,
      icon: <Phone className="w-9 h-9" />,
      title: 'Prise de Contact',
      description: 'Échangeons sur votre projet, vos besoins spécifiques et vos objectifs de communication visuelle.',
      isRight: false
    },
    {
      number: 2,
      icon: <FileCheck className="w-9 h-9" />,
      title: 'Validation du Devis',
      description: 'Nous établissons une proposition détaillée et personnalisée adaptée à votre budget et planning.',
      isRight: true
    },
    {
      number: 3,
      icon: <Camera className="w-9 h-9" />,
      title: 'Installation du Matériel',
      description: 'Mise en place discrète de nos équipements pour un suivi continu sans perturber vos opérations.',
      isRight: false
    },
    {
      number: 4,
      icon: <Video className="w-9 h-9" />,
      title: 'Reportages Réguliers',
      description: 'Captations programmées par drone et au sol selon le rythme défini ensemble pour documenter l\'avancement.',
      isRight: true
    },
    {
      number: 5,
      icon: <Gift className="w-9 h-9" />,
      title: 'Livraison Finale',
      description: 'Vous recevez l\'ensemble des médias en haute qualité : timelapse, photos, vidéos montées et fichiers bruts.',
      isRight: false
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-24 bg-cf-white relative overflow-hidden"
    >
      <div className="container max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-cf-dark mb-6 leading-tight">
            <span className="inline-block relative transition-all duration-500">
              Notre
            </span>{' '}
            <span className="inline-block relative text-cf-blue-primary font-extrabold px-2.5 ml-2 bg-gradient-to-r from-transparent via-cf-blue-lightest to-transparent rounded -rotate-1 animate-accent-pulse">
              Processus
            </span>
            <span className="block w-[60px] h-1 bg-cf-blue-primary mx-auto mt-2 rounded-full" />
          </h2>
          <p className="text-lg lg:text-xl text-cf-blue-dark max-w-[900px] mx-auto leading-relaxed">
            Un accompagnement sur-mesure en 5 étapes claires pour une collaboration sereine
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-[1000px] mx-auto py-8">
          {/* Central Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-cf-blue-lightest -translate-x-1/2 z-0" />
          <div className="hidden lg:block absolute top-5 bottom-5 left-1/2 w-0.5 bg-cf-blue-primary -translate-x-1/2 z-10" />

          {/* Steps */}
          <div className="space-y-0 lg:-space-y-32">
            {steps.map((step, index) => (
              <div
                key={index}
                data-step-index={index}
                className={`relative flex flex-col lg:flex-row items-center lg:items-center mb-8 lg:mb-0 pb-8 lg:pb-2.5 z-20 transition-all duration-700 ${
                  step.isRight ? 'lg:flex-row-reverse' : ''
                } ${
                  visibleSteps.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-[42%] bg-white p-6 rounded-2xl shadow-md border border-cf-blue-lightest relative transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-cf-blue-light z-30 ${
                  step.isRight ? 'lg:ml-0 lg:mr-auto' : 'lg:mr-0 lg:ml-auto'
                }`}>
                  {/* Step Number Badge */}
                  <div className="absolute -top-5 left-4 lg:left-auto lg:-right-4 w-10 h-10 bg-cf-blue-primary text-white text-lg font-bold rounded-full flex items-center justify-center shadow-[0_5px_15px_rgba(0,85,255,0.3)]">
                    {step.number}
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-cf-dark mb-4 pt-2">
                    {step.title}
                  </h3>
                  <p className="text-base text-cf-blue-dark leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Icon Circle */}
                <div className="my-4 lg:my-0 lg:mx-4 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,85,255,0.15)] z-30 relative transition-all duration-400 hover:-translate-y-1 hover:scale-105 group">
                  <div className="absolute inset-[-4px] bg-gradient-to-br from-cf-blue-primary to-cf-blue-dark rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400 -z-10" />
                  <div className="text-cf-blue-primary bg-gradient-to-br from-cf-blue-primary to-cf-blue-dark bg-clip-text group-hover:scale-110 transition-transform duration-400">
                    {step.icon}
                  </div>
                </div>

                {/* Connector Line - Hidden on mobile */}
                <div className={`hidden lg:block absolute h-0.5 w-[calc(50%-40px)] bg-cf-blue-primary top-10 z-10 ${
                  step.isRight ? 'left-1/2' : 'right-1/2'
                }`} />
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className={`max-w-[800px] mx-auto mt-12 p-6 bg-cf-blue-lightest rounded-lg border-l-4 border-cf-blue-primary transition-all duration-700 delay-1000 ${
          visibleSteps.length >= steps.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <h3 className="text-xl lg:text-2xl font-bold text-cf-dark mb-4 relative inline-block">
            Un Investissement Durable
            <span className="absolute bottom-[-5px] left-0 w-10 h-[3px] bg-cf-blue-primary rounded transition-all duration-300" />
          </h3>
          <p className="text-base lg:text-lg text-cf-blue-dark leading-relaxed font-medium">
            Au-delà de la simple documentation, vous obtenez un outil de communication puissant 
            pour valoriser votre savoir-faire et fidéliser vos clients.
          </p>
        </div>
      </div>
    </section>
  );
}
