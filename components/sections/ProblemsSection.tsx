'use client';

import { Clock, Users, FileText, Target, Zap, Shield } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Challenge {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Solution {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ProblemsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const challenges: Challenge[] = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Suivi chronophage',
      description: 'Documenter manuellement chaque étape demande un temps précieux que vous n\'avez pas.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Communication complexe',
      description: 'Tenir toutes les parties prenantes informées devient un défi logistique quotidien.'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Mémoire imprécise',
      description: 'Sans documentation visuelle continue, difficile de retracer précisément l\'évolution du chantier.'
    }
  ];

  const solutions: Solution[] = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Automatisation complète',
      description: 'Notre système capture automatiquement chaque phase sans intervention de votre part.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Communication instantanée',
      description: 'Partagez des visuels professionnels avec tous vos interlocuteurs en un clic.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Archive visuelle fiable',
      description: 'Conservez une trace horodatée et exhaustive pour référence future et valorisation.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-24 bg-cf-white relative overflow-hidden"
    >
      {/* Background decorative dots */}
      <div className="absolute top-[10%] right-[5%] w-[150px] h-[150px] opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(#0055FF 2px, transparent 2px)',
          backgroundSize: '15px 15px'
        }} />
      </div>

      <div className="container max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-cf-dark mb-4 relative inline-block">
            Vos Défis, Nos Solutions
            <span className="absolute w-[60px] h-1 bg-cf-blue-primary bottom-[-10px] left-1/2 -translate-x-1/2 rounded-full" />
          </h2>
          <p className="text-lg lg:text-xl text-cf-blue-dark max-w-[700px] mx-auto mt-6">
            Nous comprenons les enjeux de la documentation de chantier moderne
          </p>
        </div>

        {/* Introduction Box */}
        <div className={`bg-cf-blue-lightest p-6 lg:p-8 rounded-lg text-center shadow-md mb-12 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <p className="text-base lg:text-lg text-cf-blue-dark mb-0 leading-relaxed">
            Chaque chantier mérite une documentation à la hauteur de son ambition. 
            Découvrez comment nous transformons vos contraintes en atouts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Challenges Column */}
          <div className={`lg:border-r lg:border-dashed lg:border-cf-blue-primary/20 lg:pr-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
          }`}>
            <h3 className="text-2xl lg:text-3xl font-bold text-cf-dark mb-6 pl-4 border-l-4 border-cf-blue-primary">
              Les Défis
            </h3>
            <div className="space-y-5">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white p-5 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className="min-w-[50px] h-[50px] rounded-lg bg-cf-blue-lightest flex items-center justify-center mr-4 text-cf-blue-primary transition-all duration-300 hover:bg-cf-blue-primary hover:text-white hover:rotate-[10deg]">
                    {challenge.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-cf-dark mb-1">
                      {challenge.title}
                    </h4>
                    <p className="text-sm text-cf-blue-dark mb-0">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div className={`lg:pl-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
          }`}>
            <h3 className="text-2xl lg:text-3xl font-bold text-cf-dark mb-6 pl-4 border-l-4 border-cf-blue-primary">
              Nos Solutions
            </h3>
            <div className="space-y-5">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white p-5 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className="min-w-[50px] h-[50px] rounded-lg bg-cf-blue-primary flex items-center justify-center mr-4 text-white shadow-[0_5px_15px_rgba(0,85,255,0.3)] transition-all duration-300 hover:rotate-[10deg]">
                    {solution.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-cf-dark mb-1">
                      {solution.title}
                    </h4>
                    <p className="text-sm text-cf-blue-dark mb-0">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
