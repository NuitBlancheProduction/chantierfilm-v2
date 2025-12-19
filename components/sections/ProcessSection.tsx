'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { MessageSquare, HardHat, Camera, Clapperboard, CheckCircle2 } from 'lucide-react';

interface ProcessStep {
  number: number;
  title: string;
  description: string[];
  icon: React.ElementType;
  align: 'left' | 'right';
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Consultation Initiale',
    description: [
      "Nous débutons par un échange afin de comprendre vos besoins, les spécificités de votre chantier et vos objectifs. Cette première étape permet d'adapter notre prestation à vos contraintes techniques et à l'image que vous souhaitez transmettre."
    ],
    icon: MessageSquare,
    align: 'left'
  },
  {
    number: 2,
    title: 'Installation rapide et optimisée',
    description: [
      "Notre équipe planifie l'installation des caméras de timelapse, et les premières prises d'images avec nos drones et caméras au sol. Nous obtenons toutes les autorisations nécessaires pour le survol des drones et plaçons les équipements de manière stratégique pour une couverture optimale.",
      "Installation rapide et efficace, souvent en moins de 48 heures, avec des caméras solaires autonomes pour minimiser les besoins en maintenance."
    ],
    icon: HardHat,
    align: 'right'
  },
  {
    number: 3,
    title: 'Captation et suivi en temps réel',
    description: [
      "Nous capturons en continu les images et vidéos de votre chantier. Nos caméras de timelapse prennent des photos à intervalles réguliers, les drones fournissent des vues aériennes spectaculaires, et les caméras au sol documentent les détails critiques.",
      "Les données sont transmises en temps réel à un cloud sécurisé, vous permettant de suivre l'avancement des travaux à distance via notre portail en ligne."
    ],
    icon: Camera,
    align: 'left'
  },
  {
    number: 4,
    title: 'Montage et Post-Production',
    description: [
      "Nous assemblons les séquences capturées pour créer des vidéos de haute qualité qui illustrent clairement l'évolution de votre chantier. Nous intégrons des éléments graphiques et des annotations selon vos besoins.",
      "Vous avez un accès illimité aux images capturées et pouvez demander un nombre illimité de modifications de montage pour que le résultat final reflète parfaitement votre vision."
    ],
    icon: Clapperboard,
    align: 'right'
  },
  {
    number: 5,
    title: 'Livraison et Suivi',
    description: [
      "Nous vous remettons un reportage complet, prêt à être utilisé pour vos présentations, votre communication interne et externe, ou encore votre marketing.",
      "Vous n'avez à vous soucier de rien : nous gérons tout pour vous. De la planification initiale à la livraison finale, notre équipe s'occupe de chaque détail, vous permettant de vous concentrer sur la réalisation de votre projet."
    ],
    icon: CheckCircle2,
    align: 'left'
  }
];

const StepCard = ({ step, index }: { step: ProcessStep; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: step.align === 'left' ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: step.align === 'left' ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative flex items-start gap-6 lg:gap-12 ${
        step.align === 'right' ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Content Card */}
      <div className={`flex-1 ${step.align === 'right' ? 'lg:text-right' : ''}`}>
        <div className="bg-chantier-concrete/30 backdrop-blur-sm border border-chantier-steel/30 rounded-lg p-6 lg:p-8 hover:border-chantier-yellow/50 transition-all duration-300 group">
          {/* Number Badge */}
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-chantier-yellow/10 border-2 border-chantier-yellow mb-4 ${
            step.align === 'right' ? 'lg:ml-auto' : ''
          }`}>
            <span className="text-2xl font-bold text-chantier-yellow">{step.number}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-chantier-yellow transition-colors">
            {step.title}
          </h3>

          {/* Descriptions */}
          <div className="space-y-4">
            {step.description.map((paragraph, idx) => (
              <p
                key={idx}
                className={`text-chantier-light-grey leading-relaxed ${
                  paragraph.includes('Vous n\'avez à vous soucier de rien') ? 'font-semibold text-chantier-yellow/90' : ''
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Icon Circle - Central Timeline */}
      <div className="relative flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
          className="relative z-10 flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-chantier-yellow shadow-industrial-lg"
        >
          <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-chantier-asphalt" strokeWidth={2.5} />
        </motion.div>

        {/* Vertical Line */}
        {index < processSteps.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
            className="absolute top-16 lg:top-20 left-1/2 -translate-x-1/2 w-1 h-24 lg:h-32 bg-gradient-to-b from-chantier-yellow to-chantier-steel origin-top"
          />
        )}
      </div>

      {/* Spacer for alignment on desktop */}
      <div className="hidden lg:block flex-1" />
    </motion.div>
  );
};

export const ProcessSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const titleVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-chantier-asphalt py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #FACC15 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            <span className="text-white">Processus de </span>
            <span className="text-chantier-yellow">Collaboration</span>
          </h2>
          <p className="text-lg lg:text-xl text-chantier-light-grey max-w-4xl mx-auto leading-relaxed">
            Chez Chantier Film, nous simplifions la gestion de votre projet de construction en prenant en charge l'intégralité du processus de documentation visuelle. Voici comment nous travaillons ensemble :
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="max-w-7xl mx-auto space-y-12 lg:space-y-20">
          {processSteps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 lg:mt-24 text-center"
        >
          <div className="max-w-4xl mx-auto bg-chantier-concrete/20 backdrop-blur-sm border border-chantier-yellow/30 rounded-lg p-8 lg:p-10">
            <p className="text-lg lg:text-xl text-chantier-light-grey leading-relaxed">
              En collaborant avec <span className="font-bold text-chantier-yellow">Chantier Film</span>, vous bénéficiez d'un service clé en main qui garantit une documentation visuelle précise et professionnelle de votre chantier, renforçant ainsi votre image de marque et facilitant la gestion de votre projet.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};