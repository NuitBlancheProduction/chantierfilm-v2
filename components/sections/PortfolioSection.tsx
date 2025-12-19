'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Extract YouTube ID from URL - Ultra-robust regex covering all cases
function getYoutubeId(url: string): string {
  const match = url.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  );
  return match ? match[1] : '';
}

// Generate YouTube thumbnail URL with fallback
function getYoutubeThumbnail(url: string): string {
  const videoId = getYoutubeId(url);
  if (!videoId) {
    // Fallback image for invalid URLs
    return '/placeholder-video.jpg';
  }
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

// Generate YouTube embed URL with autoplay
function getYoutubeEmbedUrl(url: string): string {
  const videoId = getYoutubeId(url);
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
}

export function PortfolioSection() {
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  const projects = [
    {
      title: 'Norske Skog Golbey',
      category: 'Industrie',
      badge: 'Timelapse',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      youtubeUrl: 'https://youtu.be/I0pU7wLKetw',
      featured: true, // Projet principal
    },
    {
      title: 'Les hopitaux voient la vie en vosges',
      category: 'Public',
      badge: 'Institutionnel',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      youtubeUrl: 'https://youtu.be/LcbQlzOKlnM',
    },
    {
      title: 'Confiserie des Hautes Vosges',
      category: 'Corporate',
      badge: 'Marque',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      youtubeUrl: 'https://youtu.be/C1gptn3m_Ms',
    },
    {
      title: 'Les Jeux de la Diversité 2024',
      category: 'Évènementiel',
      badge: 'Sport',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      youtubeUrl: 'https://youtu.be/VEjvIBjroRQ',
    },
    {
      title: 'Sicovad',
      category: 'Public',
      badge: 'Timelapse',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      youtubeUrl: 'https://youtu.be/TSf_HKgMpWM',
    },
    {
      title: 'ANLCI',
      category: 'Reportage',
      badge: 'Documentaire',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      youtubeUrl: 'https://youtu.be/xUhE4ijq1j4',
    },
  ];

  // Layout asymétrique pour Bento Grid
  const gridClasses = [
    'md:col-span-2 md:row-span-2', // Featured (0)
    'md:col-span-1', // (1)
    'md:col-span-1', // (2)
    'md:col-span-1', // (3)
    'md:col-span-1', // (4)
    'md:col-span-2', // Large (5)
  ];

  return (
    <section id="portfolio" className="relative py-32 px-4 overflow-hidden">
      {/* Background avec gradient gris subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-zinc-700/20 via-transparent to-transparent" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* En-tête avec gradient de texte */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-100 to-zinc-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Nos Réalisations
          </motion.h2>
          <motion.p 
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Découvrez notre portfolio de créations vidéo qui racontent des histoires uniques
          </motion.p>
        </motion.div>

        {/* Bento Grid asymétrique */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-4 md:gap-6">
          {projects.map((project, index) => (
            <Dialog
              key={index}
              open={openDialog === index}
              onOpenChange={(open) => setOpenDialog(open ? index : null)}
            >
              <DialogTrigger asChild>
                <motion.div
                  variants={fadeInUp}
                  className={`group relative rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 ease-out cursor-pointer ${gridClasses[index]}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Thumbnail avec effet de zoom */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 ease-out">
                      <Image
                        src={getYoutubeThumbnail(project.youtubeUrl)}
                        alt={project.title}
                        fill
                        className="object-cover brightness-75 group-hover:brightness-100 transition-all duration-500"
                      />
                    </div>
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/0 via-zinc-800/0 to-zinc-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Badge catégorie */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                  </div>

                  {/* Play Button avec animation */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl shadow-white/30"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Play className="w-6 h-6 text-black ml-1" fill="black" />
                    </motion.div>
                  </div>

                  {/* Project Info avec animation de slide */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <motion.p 
                      className="text-xs text-zinc-400 font-semibold mb-2 uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.8 }}
                    >
                      {project.category}
                    </motion.p>
                    <motion.h3 
                      className="text-xl md:text-2xl font-bold text-white leading-tight"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                    >
                      {project.title}
                    </motion.h3>
                  </div>

                  {/* Effet de lueur sur hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800/10 via-zinc-700/10 to-zinc-600/10" />
                  </div>
                </motion.div>
              </DialogTrigger>

              <DialogContent className="max-w-7xl w-full p-0 bg-black border-none overflow-hidden">
                {/* Custom Close Button */}
                <button
                  onClick={() => setOpenDialog(null)}
                  className="absolute right-4 top-4 z-50 rounded-full bg-white/10 backdrop-blur-sm p-3 hover:bg-white/20 transition-all duration-200 group"
                >
                  <X className="h-6 w-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Video Container */}
                <div className="aspect-video relative w-full">
                  {openDialog === index && (
                    <iframe
                      src={getYoutubeEmbedUrl(project.youtubeUrl)}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full absolute inset-0"
                    />
                  )}
                </div>

                {/* Video Info */}
                <div className="p-8 bg-gradient-to-b from-zinc-950 to-black border-t border-white/5">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mb-3 ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                  <p className="text-sm text-zinc-400 font-medium mb-2 uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </motion.div>
    </section>
  );
}