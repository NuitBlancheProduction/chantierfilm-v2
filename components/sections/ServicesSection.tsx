'use client';

import { motion } from 'framer-motion';
import { Film, Video, Cloud } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
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
    delay: 0.2
  },
  {
    icon: Cloud,
    title: "Accès à Distance en Temps Réel",
    description: "Surveillez l'évolution de votre chantier où que vous soyez ! Nos systèmes de caméras connectées transmettent en temps réel des images sécurisées accessibles via une plateforme dédiée. Un moyen efficace d'optimiser le suivi du projet et de partager les avancées avec vos partenaires.",
    delay: 0.4
  }
];

export function ServicesSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-chantier-asphalt to-chantier-concrete/20 overflow-hidden">
      {/* Background decorative dots */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-chantier-yellow rounded-full" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-chantier-yellow rounded-full" />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-chantier-yellow rounded-full" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-chantier-yellow rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          {...fadeInUp}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-chantier-off-white mb-6">
            Notre <span className="text-chantier-yellow">Offre</span>
          </h2>
          <p className="text-lg text-chantier-steel/90 max-w-3xl mx-auto leading-relaxed">
            En choisissant Chantier Film, vous optez pour un partenaire qui valorise chaque détail de votre projet, transformant votre chantier en une histoire visuelle captivante et professionnelle.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: service.delay }}
              className="group bg-chantier-concrete/40 backdrop-blur-sm border border-chantier-steel/30 rounded-lg p-8 hover:border-chantier-yellow transition-all duration-300 hover:shadow-industrial-lg"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-lg bg-chantier-yellow/10 flex items-center justify-center group-hover:bg-chantier-yellow/20 transition-colors">
                  <service.icon className="w-8 h-8 text-chantier-yellow" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-chantier-off-white mb-4 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-chantier-steel/90 leading-relaxed">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-6 pt-4 border-t border-chantier-steel/20 group-hover:border-chantier-yellow/30 transition-colors">
                <div className="w-12 h-1 bg-chantier-yellow/50 group-hover:w-20 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: Bottom CTA or additional info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-chantier-steel/70 text-sm">
            <div className="w-12 h-px bg-chantier-yellow/30" />
            <span>Service clé en main</span>
            <div className="w-12 h-px bg-chantier-yellow/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}