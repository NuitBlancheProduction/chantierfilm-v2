'use client';

import { motion } from 'framer-motion';
import { Film, Video, Cloud } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any }
};

const services = [
  {
    icon: Film,
    title: "Reportage Complet de Chantier",
    description: "Nous réalisons une captation complète de votre projet, du premier coup de pelle jusqu'à la livraison finale. Grâce à une combinaison de prises de vue au sol, aériennes et en timelapse, nous créons un récit visuel impactant qui met en valeur votre savoir-faire et l'évolution du chantier.",
    delay: 0
  },
  {
    icon: Video,
    title: "Timelapse Professionnel",
    description: "Nos caméras timelapse enregistrent l'évolution de votre chantier en continu, offrant une vision accélérée et détaillée des travaux. Un outil puissant pour suivre les progrès, valoriser votre projet et communiquer efficacement avec vos équipes et clients.",
    delay: 0.15
  },
  {
    icon: Cloud,
    title: "Accès à Distance en Temps Réel",
    description: "Surveillez l'évolution de votre chantier où que vous soyez ! Nos systèmes de caméras connectées transmettent en temps réel des images sécurisées accessibles via une plateforme dédiée. Un moyen efficace d'optimiser le suivi du projet et de partager les avancées avec vos partenaires.",
    delay: 0.3
  }
];

export function ServicesSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Éléments décoratifs subtils */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-40 left-[10%] w-3 h-3 bg-chantier-yellow rounded-full" />
        <div className="absolute top-[30%] right-[15%] w-2 h-2 bg-chantier-yellow rounded-full" />
        <div className="absolute bottom-[25%] left-[20%] w-2 h-2 bg-chantier-yellow rounded-full" />
        <div className="absolute bottom-40 right-[25%] w-3 h-3 bg-chantier-yellow rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20 lg:py-32">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-24"
          {...fadeInUp}
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-chantier-asphalt mb-6 leading-tight">
            Notre <span className="text-chantier-yellow">Offre</span>
          </h2>
          <p className="text-lg lg:text-xl text-chantier-concrete max-w-4xl mx-auto leading-relaxed">
            En choisissant Chantier Film, vous optez pour un partenaire qui valorise chaque détail de votre projet, transformant votre chantier en une histoire visuelle captivante et professionnelle.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ 
                duration: 0.7, 
                delay: service.delay,
                ease: [0.22, 1, 0.36, 1] as any
              }}
              className="group relative bg-gray-50 border border-gray-200 rounded-xl p-8 hover:border-chantier-yellow hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Barre d'accent au survol */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-chantier-yellow to-chantier-yellow-dark rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon Container */}
              <div className="mb-6">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl bg-chantier-yellow/10 flex items-center justify-center group-hover:bg-chantier-yellow/20 group-hover:scale-110 transition-all duration-500">
                  <service.icon className="w-8 h-8 lg:w-10 lg:h-10 text-chantier-yellow stroke-[1.5]" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-chantier-asphalt mb-4 leading-tight group-hover:text-chantier-yellow-dark transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-chantier-concrete leading-relaxed text-base">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-8 pt-6 border-t border-gray-200 group-hover:border-chantier-yellow/30 transition-colors duration-300">
                <div className="w-12 h-1 bg-chantier-yellow/40 group-hover:w-24 group-hover:bg-chantier-yellow transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 text-chantier-steel text-sm font-medium">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-chantier-yellow/40" />
            <span className="uppercase tracking-wider">Service clé en main</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-chantier-yellow/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}