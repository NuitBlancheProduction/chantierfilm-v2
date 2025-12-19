'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Calendar, Star } from 'lucide-react';

export function HeroSection() {
  const features = [
    'Documentation continue',
    'Perspectives aériennes spectaculaires',
    'Suivi détaillé en temps réel',
  ];

  const testimonials = [
    {
      text: "Une équipe d'un grand professionnalisme, à l'écoute de nos besoins et toujours disponible pour ajuster les moindres détails. La qualité est au rendez-vous !",
      author: "Client BTP"
    },
    {
      text: "Un investissement qui en valait largement la peine ! Nos clients et partenaires adorent suivre notre évolution grâce à ces vidéos. Merci encore pour ce travail d'orfèvre !",
      author: "Promoteur"
    },
    {
      text: "Le suivi en timelapse est d'une précision remarquable, et les reportages intermédiaires sont un vrai plus pour notre communication interne et externe.",
      author: "Chef de Projet"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-chantier-off-white via-white to-chantier-light-grey overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Éléments décoratifs de fond */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-chantier-yellow/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-chantier-safety/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* MOBILE: Ordre 1 - Titre + Sous-titre | DESKTOP: Colonne Gauche */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 order-1"
          >
            {/* Titre Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-chantier-asphalt leading-tight mb-6">
              <span className="block">Immortalisez Votre Chantier</span>
              <span className="inline-block mt-2 px-4 py-2 bg-chantier-yellow text-chantier-asphalt rounded-lg transform -rotate-1 shadow-industrial">
                en Vidéo
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="text-lg sm:text-xl text-chantier-concrete mb-8 leading-relaxed">
              La solution de <strong>suivi de chantier</strong>, <strong>timelapse</strong> et <strong>drone</strong> dédiée aux pros du <strong>BTP</strong>. 
              Visualisez l'avancement de vos travaux et valorisez votre savoir-faire technique.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-chantier-asphalt font-semibold"
                >
                  <CheckCircle className="text-chantier-yellow flex-shrink-0" size={24} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* MOBILE: Ordre 2 - Image | DESKTOP: Colonne Droite */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 order-2"
          >
            <div className="relative rounded-xl overflow-hidden shadow-industrial-lg border-2 border-chantier-yellow/20 hover:border-chantier-yellow/40 transition-all duration-500">
              <Image
                src="/images/home/hero/suivi-chantier-drone-vue-aerienne-btp-1.webp"
                alt="Vue panoramique chantier construction gros œuvre - Solution complète suivi audiovisuel et archives vidéo pour entreprises BTP"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Effet grain subtil */}
              <div className="absolute inset-0 bg-gradient-to-t from-chantier-asphalt/5 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* MOBILE: Ordre 3 - CTA + Avis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-full lg:hidden order-3 space-y-6"
          >
            {/* CTA Button Mobile */}
            <Link
              href="/prise-de-rendez-vous/"
              className="group relative inline-flex w-full items-center justify-center gap-3 bg-chantier-yellow hover:bg-chantier-yellow-dark text-chantier-asphalt font-bold text-lg px-8 py-4 rounded-lg shadow-industrial-lg transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              {/* Effet Shimmer */}
              <motion.div
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatDelay: 2,
                }}
              />
              <Calendar size={24} className="relative z-10" />
              <span className="relative z-10">Réservez un Rendez-vous</span>
            </Link>

            {/* Avis Clients - Version Compacte Mobile */}
            <div className="bg-chantier-yellow/10 backdrop-blur-sm p-4 rounded-lg border border-chantier-yellow/20">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-chantier-yellow text-chantier-yellow" />
                ))}
              </div>
              <div className="space-y-3">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="text-xs text-chantier-concrete leading-relaxed border-l-2 border-chantier-yellow/40 pl-3">
                    <p className="italic">"{testimonial.text}"</p>
                    <p className="text-chantier-steel mt-1 font-semibold">— {testimonial.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop: CTA + Avis en bas */}
        <div className="hidden lg:block mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* CTA Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Link
                href="/prise-de-rendez-vous/"
                className="group relative inline-flex items-center justify-center gap-3 bg-chantier-yellow hover:bg-chantier-yellow-dark text-chantier-asphalt font-bold text-lg px-8 py-4 rounded-lg shadow-industrial-lg transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                {/* Effet Shimmer */}
                <motion.div
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatDelay: 2,
                  }}
                />
                <Calendar size={24} className="relative z-10" />
                <span className="relative z-10">Réservez un Rendez-vous</span>
              </Link>
            </motion.div>

            {/* Avis Clients Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-chantier-yellow/10 backdrop-blur-sm p-5 rounded-lg border border-chantier-yellow/20"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-chantier-yellow text-chantier-yellow" />
                ))}
              </div>
              <div className="space-y-3">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="text-sm text-chantier-concrete leading-relaxed border-l-2 border-chantier-yellow/40 pl-3">
                    <p className="italic">"{testimonial.text}"</p>
                    <p className="text-chantier-steel mt-1 font-semibold">— {testimonial.author}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Lien Secondaire - Voir nos réalisations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 text-chantier-yellow hover:text-chantier-yellow-dark font-semibold text-lg underline decoration-2 underline-offset-4 group transition-colors"
          >
            <span>Voir nos réalisations</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-chantier-yellow to-transparent" />
    </section>
  );
}