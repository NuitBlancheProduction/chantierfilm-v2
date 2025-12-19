'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface Video {
  id: string;
  title: string;
}

const videos: Video[] = [
  { id: 'I0pU7wLKetw', title: 'Projet BOX - Norske Skog Golbey' },
  { id: 'C1gptn3m_Ms', title: 'Extension Confiserie CDHV 2025' },
  { id: 'TSf_HKgMpWM', title: 'Travaux Épinal-Razimont Phase 1' },
  { id: 'deSZ5dylbCc', title: 'Stade d\'Eaux Vives Épinal' },
  { id: 'qePdTq0vbWY', title: 'Déconstruction préservante à Ubexy' },
  { id: 'biJu-rBZ6v4', title: 'Vue Aérienne Norske Skog (Fév 2024)' }
];

export default function RealisationsPage() {
  const [currentVideo, setCurrentVideo] = useState<Video>(videos[0]);

  return (
    <div className="min-h-screen bg-[#2A2A2A]">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1A1A1A] border-b-4 border-[#FFD700] py-12 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            NOS RÉALISATIONS
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            Immersion au cœur des chantiers
          </p>
        </div>
      </motion.header>

      {/* Main Video Player */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-7xl mx-auto px-6 py-8 md:py-12"
      >
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border-2 border-[#FFD700]">
          <iframe
            key={currentVideo.id}
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&rel=0&modestbranding=1`}
            title={currentVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        {/* Current Video Title */}
        <motion.div 
          key={currentVideo.id}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 flex items-center gap-3"
        >
          <Play className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            {currentVideo.title}
          </h2>
        </motion.div>
      </motion.section>

      {/* Video Carousel */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="max-w-7xl mx-auto px-6 pb-16"
      >
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-[#FFD700]"></span>
          Playlist Complète
        </h3>
        
        <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#FFD700] scrollbar-track-[#1A1A1A]">
          <div className="flex gap-4 min-w-min">
            {videos.map((video, index) => {
              const isActive = video.id === currentVideo.id;
              
              return (
                <motion.button
                  key={video.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  onClick={() => setCurrentVideo(video)}
                  className={`flex-shrink-0 w-80 group relative rounded-lg overflow-hidden transition-all duration-300 ${
                    isActive 
                      ? 'ring-4 ring-[#FFD700] scale-105 shadow-2xl' 
                      : 'ring-2 ring-transparent hover:ring-[#FFD700] hover:scale-102 opacity-60 hover:opacity-100'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-black">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#FFD700]/20' 
                        : 'bg-black/40 group-hover:bg-black/20'
                    }`}>
                      {/* Play Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive 
                            ? 'bg-[#FFD700] scale-110' 
                            : 'bg-white/90 group-hover:bg-[#FFD700] group-hover:scale-110'
                        }`}>
                          <Play className={`w-8 h-8 ml-1 ${
                            isActive ? 'text-black' : 'text-[#2A2A2A] group-hover:text-black'
                          }`} fill="currentColor" />
                        </div>
                      </div>
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="absolute top-3 right-3 px-3 py-1 bg-[#FFD700] text-black text-xs font-bold rounded-full"
                      >
                        EN LECTURE
                      </motion.div>
                    )}
                  </div>

                  {/* Title */}
                  <div className={`p-4 transition-colors duration-300 ${
                    isActive 
                      ? 'bg-[#FFD700] text-black' 
                      : 'bg-[#1A1A1A] text-white group-hover:bg-[#FFD700] group-hover:text-black'
                  }`}>
                    <p className={`font-semibold text-sm line-clamp-2 ${
                      isActive ? 'text-black' : 'group-hover:text-black'
                    }`}>
                      {video.title}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Scroll Hint */}
        <p className="text-gray-500 text-sm mt-4 text-center md:text-left">
          ← Faites défiler pour voir toutes les réalisations →
        </p>
      </motion.section>

      {/* Footer CTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="bg-[#1A1A1A] border-t-2 border-[#FFD700] py-12 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Un projet en tête ?
          </h3>
          <p className="text-gray-400 mb-8 text-lg">
            Découvrez comment nous pouvons capturer l'essence de vos chantiers
          </p>
          <button className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFC700] transition-all duration-300 hover:scale-105 shadow-lg">
            Demander un devis
          </button>
        </div>
      </motion.section>
    </div>
  );
}