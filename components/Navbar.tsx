'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { BookingButton } from '@/components/ui/BookingButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/#portfolio', label: 'Portfolio' },
    { href: '/#fondateurs', label: 'Le Casting' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800'
            : 'bg-transparent'
        } h-24`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo - Icône permanente */}
            <Link href="/" className="relative group flex items-center">
              <Image
                src="/logos/logo-nuit-blanche-production-icone.webp"
                alt="Nuit Blanche Production"
                width={80}
                height={80}
                className="h-16 md:h-20 w-auto object-contain group-hover:opacity-90 transition-opacity"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-zinc-300 hover:text-white transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <BookingButton variant="compact" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Plein écran */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 h-screen w-screen z-50 bg-zinc-950/98 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            {/* Bouton Fermer en haut à droite */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              aria-label="Fermer le menu"
            >
              <X size={28} />
            </button>

            {/* Navigation centrée */}
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-zinc-300 hover:text-white transition-colors font-medium text-2xl"
                >
                  {link.label}
                </Link>
              ))}
              <div onClick={() => setIsMobileMenuOpen(false)} className="pt-4">
                <BookingButton variant="default" className="px-8 py-3 text-lg" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}