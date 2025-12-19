'use client';

import { EyeOff, MessageSquare, Search, Archive, Clock } from 'lucide-react';
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
      icon: <EyeOff className="w-6 h-6" />,
      title: 'Manque de visibilité sur l\'avancement',
      description: 'Difficile d\'évaluer précisément l\'état du chantier et de suivre son évolution sans un historique détaillé.'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Communication complexe entre équipes',
      description: 'Un partage d\'informations incomplet entraîne des malentendus, des pertes de temps et un manque de coordination.'
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Absence de preuves concrètes',
      description: 'Impossible de démontrer l\'avancement des travaux de manière fiable sans support visuel clair et structuré.'
    },
    {
      icon: <Archive className="w-6 h-6" />,
      title: 'Données mal organisées et peu accessibles',
      description: 'Les documents et archives du projet sont dispersés, rendant leur consultation lente et peu efficace.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Retards difficiles à anticiper',
      description: 'Sans outil de suivi adapté, détecter les écarts au planning et réagir rapidement devient très compliqué.'
    }
  ];

  const solutions: Solution[] = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
      </svg>,
      title: 'Un suivi visuel immersif',
      description: 'Accédez en un clic à un timelapse détaillé et suivez l\'évolution du projet avec une vue globale et précise.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>,
      title: 'Une communication simplifiée',
      description: 'Partagez des mises à jour engageantes avec des vidéos claires qui améliorent l\'échange entre toutes les parties.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
      </svg>,
      title: 'Des preuves visuelles impactantes',
      description: 'Documentez chaque phase du chantier avec des images et vidéos valorisant l\'expertise et le travail réalisé.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>,
      title: 'Un archivage structuré et sécurisé',
      description: 'Regroupez tous vos fichiers dans un espace centralisé pour retrouver facilement chaque étape du projet.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
      </svg>,
      title: 'Un contrôle précis des délais',
      description: 'Analysez chaque phase avec des outils visuels performants pour détecter et corriger les écarts immédiatement.'
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
            Pourquoi une meilleure documentation est essentielle ?
            <span className="absolute w-[60px] h-1 bg-cf-blue-primary bottom-[-10px] left-1/2 -translate-x-1/2 rounded-full" />
          </h2>
          <p className="text-lg lg:text-xl text-cf-blue-dark max-w-[700px] mx-auto mt-6">
            Les défis rencontrés sur vos chantiers
          </p>
        </div>

        {/* Introduction Box */}
        <div className={`bg-cf-blue-lightest p-6 lg:p-8 rounded-lg text-center shadow-md mb-12 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <p className="text-base lg:text-lg text-cf-blue-dark mb-0 leading-relaxed">
            Les chantiers de construction présentent de nombreux défis. Sans une documentation visuelle adéquate, la gestion du projet peut devenir complexe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Challenges Column */}
          <div className={`lg:border-r lg:border-dashed lg:border-cf-blue-primary/20 lg:pr-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
          }`}>
            <h3 className="text-2xl lg:text-3xl font-bold text-cf-dark mb-6 pl-4 border-l-4 border-cf-blue-primary">
              Les défis quotidiens
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
              Notre solution
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