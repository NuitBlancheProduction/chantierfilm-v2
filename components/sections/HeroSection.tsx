'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Video, Plane, FileSearch, Calendar, Star, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: Video,
      text: 'Documentation continue'
    },
    {
      icon: Plane,
      text: 'Perspectives aériennes spectaculaires'
    },
    {
      icon: FileSearch,
      text: 'Suivi détaillé en temps réel'
    }
  ];

  const testimonials = [
    "Une équipe d'un grand professionnalisme, à l'écoute et toujours disponible. La qualité est au rendez-vous !",
    "Un investissement qui en valait la peine ! Nos clients adorent suivre l'évolution du chantier.",
    "Le suivi en timelapse est d'une précision remarquable, un vrai plus pour notre communication."
  ];

  // Carousel automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative bg-gradient-to-br from-chantier-off-white via-white to-chantier-light-grey overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Éléments décoratifs de fond */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-chantier-yellow/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-chantier-safety/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* LAYOUT MOBILE : Flexbox avec order */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* ORDRE 1 MOBILE : Titre + Sous-titre | DESKTOP : Colonne Gauche Complète */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full order-1 lg:order-1"
          >
            {/* Titre Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-chantier-asphalt leading-tight mb-6">
              <span className="block lg:inline">Immortalisez Votre Chantier </span>
              <span className="inline-block mt-2 lg:mt-0 px-4 py-2 bg-chantier-yellow text-chantier-asphalt rounded-lg transform -rotate-1 shadow-industrial">
                en Vidéo
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="text-lg sm:text-xl text-chantier-concrete mb-8 leading-relaxed">
              La solution de <strong>suivi de chantier</strong>, <strong>timelapse</strong> et <strong>drone</strong> dédiée aux pros du <strong>BTP</strong>. 
              Visualisez l'avancement de vos travaux et valorisez votre savoir-faire technique.
            </p>

            {/* DESKTOP ONLY : Features List */}
            <ul className="hidden lg:flex lg:flex-col space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 text-chantier-asphalt font-semibold"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-chantier-yellow/20 flex items-center justify-center">
                      <Icon className="text-chantier-yellow" size={20} />
                    </div>
                    <span>{feature.text}</span>
                  </motion.li>
                );
              })}
            </ul>

            {/* DESKTOP ONLY : CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hidden lg:block mb-6"
            >
              <Link
                href="/rendez-vous/"
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

            {/* DESKTOP ONLY : Lien Réalisations - CENTRÉ & NOIR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="hidden lg:flex lg:justify-center"
            >
              <Link
                href="/realisations"
                className="inline-flex items-center gap-2 text-chantier-asphalt hover:text-chantier-asphalt/80 font-semibold text-lg underline decoration-2 underline-offset-4 group transition-all duration-300"
              >
                <span>Voir nos réalisations</span>
                <ArrowRight className="text-chantier-yellow group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </Link>
            </motion.div>
          </motion.div>

          {/* ORDRE 2 MOBILE : Image | DESKTOP : Colonne Droite */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full order-2 lg:order-2"
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

          {/* ORDRE 3 MOBILE : Features (sous l'image) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full order-3 lg:hidden"
          >
            <div className="grid grid-cols-1 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-3 bg-chantier-yellow/10 p-4 rounded-lg border border-chantier-yellow/20"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-chantier-yellow flex items-center justify-center">
                      <Icon className="text-chantier-asphalt" size={24} />
                    </div>
                    <span className="text-chantier-asphalt font-semibold">{feature.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ORDRE 4 MOBILE : CTA (Bouton + Lien) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="w-full order-4 lg:hidden space-y-4"
          >
            {/* CTA Button Mobile */}
            <Link
              href="/rendez-vous/"
              className="group relative flex items-center justify-center gap-3 bg-chantier-yellow hover:bg-chantier-yellow-dark text-chantier-asphalt font-bold text-lg px-8 py-4 rounded-lg shadow-industrial-lg transition-all duration-300 hover:shadow-xl overflow-hidden"
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

            {/* Lien Réalisations Mobile - CENTRÉ & NOIR */}
            <div className="text-center">
              <Link
                href="/realisations"
                className="inline-flex items-center gap-2 text-chantier-asphalt hover:text-chantier-asphalt/80 font-semibold text-lg underline decoration-2 underline-offset-4 group transition-all duration-300"
              >
                <span>Voir nos réalisations</span>
                <ArrowRight className="text-chantier-yellow group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </Link>
            </div>
          </motion.div>

          {/* ORDRE 5 MOBILE : Carousel d'avis | DESKTOP : Centré sous le contenu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="w-full order-5 lg:col-span-2 lg:order-5 flex justify-center"
          >
            <div className="w-full max-w-2xl bg-chantier-yellow/10 backdrop-blur-sm p-6 rounded-lg border border-chantier-yellow/20 relative overflow-hidden">
              {/* Étoiles fixes */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-chantier-yellow text-chantier-yellow" />
                ))}
              </div>

              {/* Carousel avec AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <p className="text-base sm:text-lg text-chantier-asphalt italic leading-relaxed px-4">
                    "{testimonials[currentTestimonial]}"
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Indicateurs de carousel */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-chantier-yellow w-8' 
                        : 'bg-chantier-yellow/30 hover:bg-chantier-yellow/50'
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-chantier-yellow to-transparent" />
    </section>
  );
}