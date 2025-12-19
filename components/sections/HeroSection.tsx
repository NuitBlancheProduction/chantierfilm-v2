'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Aperture, Video, Calendar } from 'lucide-react';

export function HeroSection() {
  const features = [
    'Documentation continue',
    'Perspectives aériennes spectaculaires',
    'Suivi détaillé en temps réel',
  ];

  const testimonials = [
    "Une équipe d'un grand professionnalisme, à l'écoute de nos besoins et toujours disponible pour ajuster les moindres détails. La qualité est au rendez-vous !",
    "Un investissement qui en valait largement la peine ! Nos clients et partenaires adorent suivre notre évolution grâce à ces vidéos. Merci encore pour ce travail d'orfèvre !",
    "Le suivi en timelapse est d'une précision remarquable, et les reportages intermédiaires sont un vrai plus pour notre communication interne et externe.",
  ];

  return (
    <section className="relative bg-gradient-to-br from-chantier-off-white via-white to-chantier-light-grey overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Éléments décoratifs de fond */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-chantier-yellow/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-chantier-safety/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Colonne Gauche - Contenu */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            {/* Titre Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-chantier-asphalt leading-tight mb-6">
              <span className="block">Immortalisez Votre Chantier</span>
              <span className="inline-block mt-2 px-4 py-2 bg-chantier-yellow text-chantier-asphalt rounded-lg transform -rotate-1 shadow-industrial">
                en Vidéo
              </span>
            </h1>

            {/* Sous-titre : Le compromis SEO/Design */}
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

            {/* Testimonials Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-chantier-yellow/10 backdrop-blur-sm p-6 rounded-lg border border-chantier-yellow/20 mb-8 hover:shadow-industrial transition-all"
            >
              <div className="text-chantier-yellow text-2xl mb-3">★★★★★</div>
              <div className="relative h-24 overflow-hidden">
                <p className="text-chantier-concrete italic text-sm leading-relaxed">
                  "{testimonials[0]}"
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Link
                href="/prise-de-rendez-vous/"
                className="inline-flex items-center gap-3 bg-chantier-yellow hover:bg-chantier-yellow-dark text-chantier-asphalt font-bold text-lg px-8 py-4 rounded-lg shadow-industrial-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-yellow"
              >
                <Calendar size={24} />
                <span>Réservez un Rendez-vous</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Colonne Droite - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-industrial-lg hover:shadow-xl transition-all duration-500 group">
              <Image
                src="/images/home/hero/suivi-chantier-drone-vue-aerienne-btp-1.webp"
                alt="Vue panoramique chantier construction gros œuvre - Solution complète suivi audiovisuel et archives vidéo pour entreprises BTP"
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              
              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-chantier-yellow text-chantier-asphalt p-4 rounded-full shadow-industrial-lg"
              >
                <Aperture size={32} />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-chantier-safety text-white p-4 rounded-full shadow-industrial-lg"
              >
                <Video size={32} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <Link
            href="/prise-de-rendez-vous/"
            className="inline-flex items-center gap-2 text-chantier-yellow hover:text-chantier-yellow-dark font-bold text-lg group"
          >
            <span>Voir comment nous travaillons</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-chantier-yellow to-transparent" />
    </section>
  );
}


