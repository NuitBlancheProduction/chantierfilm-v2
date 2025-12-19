'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/prise-de-rendez-vous/', label: 'Planifier un rendez-vous' },
    { href: '/blog/', label: 'Blog' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-industrial'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Hamburger Menu - Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-chantier-light-grey transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-chantier-asphalt" />
              ) : (
                <Menu size={24} className="text-chantier-asphalt" />
              )}
            </button>

            {/* Logo - Centre */}
            <Link href="/" className="flex-1 flex justify-center md:justify-start">
              <Image
                src="/logos/chantier-film-logo-suivi-video-btp.webp"
                alt="Logo Chantier Film - Expert en suivi de chantier vidéo, timelapse et drone pour le BTP"
                width={180}
                height={60}
                className="h-14 md:h-16 w-auto object-contain hover:opacity-90 transition-opacity"
                priority
              />
            </Link>

            {/* Spacer - Mobile */}
            <div className="md:hidden w-10" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-chantier-asphalt hover:text-chantier-yellow font-semibold text-base transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              
              {/* CTA Button */}
              <Link
                href="/rendez-vous/"
                className="inline-flex items-center gap-2 bg-chantier-yellow hover:bg-chantier-yellow-dark text-chantier-asphalt font-bold px-6 py-3 rounded-lg shadow-industrial hover:shadow-industrial-lg transition-all duration-300 hover:scale-105"
              >
                <Calendar size={18} />
                <span>Demander un Devis</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            
            {/* Menu Sidebar */}
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-industrial-lg z-50 md:hidden"
            >
              <div className="p-6">
                {/* Close Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-6 right-6 p-2 rounded-lg hover:bg-chantier-light-grey transition-colors"
                  aria-label="Fermer le menu"
                >
                  <X size={24} className="text-chantier-asphalt" />
                </button>

                {/* Menu Items */}
                <nav className="mt-16 space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-chantier-asphalt hover:text-chantier-yellow hover:bg-chantier-light-grey font-semibold text-lg py-3 px-4 rounded-lg transition-all"
                    >
                      {link.label}
                    </Link>
                  ))}
                  
                  {/* CTA Button Mobile */}
                  <Link
                    href="/rendez-vous/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 bg-chantier-yellow hover:bg-chantier-yellow-dark text-chantier-asphalt font-bold px-6 py-4 rounded-lg shadow-industrial mt-6 transition-all"
                  >
                    <Calendar size={20} />
                    <span>Réservez un Rendez-vous</span>
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}