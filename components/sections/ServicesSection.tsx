'use client';

import { motion } from 'framer-motion';
import { Briefcase, Megaphone, Radio, Plane } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function ServicesSection() {
  const services = [
    {
      icon: Briefcase,
      title: 'CORPORATE & MARQUE EMPLOYEUR',
      description: 'Valoriser votre ADN. Nous transformons vos messages internes et externes en récits visuels engageants.',
      tags: [
        'Film Manifeste',
        'Interview Dirigeant',
        'Onboarding',
        'Communication Interne',
        'CV Vidéo Inversé'
      ],
      gradient: 'from-blue-500/10 via-cyan-500/5 to-transparent'
    },
    {
      icon: Megaphone,
      title: 'PUBLICITÉ & BRAND CONTENT',
      description: 'De l\'idée au spot TV. Création de campagnes percutantes pour la télévision et les réseaux sociaux.',
      tags: [
        'Spot TV',
        'Campagne Digitale (Reels/TikTok)',
        'Shooting Mode & Packshot',
        'Storytelling',
        'Casting'
      ],
      gradient: 'from-purple-500/10 via-pink-500/5 to-transparent'
    },
    {
      icon: Radio,
      title: 'ÉVÉNEMENTIEL & LIVE STREAMING',
      description: 'Capturer l\'instant, diffuser l\'émotion. Couverture complète de vos événements majeurs.',
      tags: [
        'Aftermovie Festival',
        'Retransmission Direct (Live)',
        'Reportage Photo',
        'Conférences',
        'Salon Pro'
      ],
      gradient: 'from-orange-500/10 via-red-500/5 to-transparent'
    },
    {
      icon: Plane,
      title: 'DRONE CINÉMA & INSPECTION',
      description: 'La hauteur au service de l\'image et de la donnée technique. Double expertise créative et industrielle.',
      tags: [
        'Photo Aérienne HD',
        'Photogrammétrie',
        'Orthophotographie',
        'Inspection Technique',
        'Cartographie'
      ],
      gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent'
    },
  ];

  return (
    <section id="services" className="py-32 px-4 bg-zinc-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 border border-zinc-700 rounded-full">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Expertise Audiovisuelle</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Notre Arsenal Créatif
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Quatre piliers d'excellence pour transformer vos ambitions en productions d'exception
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 md:p-10 min-h-[380px] hover:border-zinc-600 transition-all duration-500 overflow-hidden"
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Large icon watermark */}
              <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <service.icon className="w-64 h-64 text-white" strokeWidth={0.5} />
              </div>

              <div className="relative z-10">
                {/* Icon container */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-zinc-300 p-3.5 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                  <service.icon className="w-full h-full text-zinc-900" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white leading-tight tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-300 leading-relaxed mb-6 text-base">
                  {service.description}
                </p>

                {/* Separator */}
                <div className="w-16 h-px bg-gradient-to-r from-zinc-600 to-transparent mb-6" />

                {/* Tags */}
                <div className="space-y-2">
                  {service.tags.map((tag, tagIndex) => (
                    <div 
                      key={tagIndex}
                      className="flex items-center gap-2 text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300"
                      style={{ transitionDelay: `${tagIndex * 50}ms` }}
                    >
                      <div className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-zinc-400 transition-colors" />
                      <span className="text-sm font-mono tracking-wide">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_60px_rgba(255,255,255,0.03)]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <motion.div 
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <p className="text-zinc-600 font-mono text-sm tracking-wider uppercase">
            Équipements Pro • Équipes Passionnées • Résultats Garantis
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}