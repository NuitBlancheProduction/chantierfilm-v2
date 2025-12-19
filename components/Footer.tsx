'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Complet - Centré sur mobile et desktop */}
          <div className="md:col-span-2 flex flex-col items-center text-center">
            <Link href="/" className="inline-block mb-4 group">
              <Image
                src="/logos/logo-nuit-blanche-production.webp"
                alt="Nuit Blanche Production"
                width={384}
                height={128}
                className="h-32 w-auto object-contain group-hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-zinc-400 max-w-md">
              Agence de production audiovisuelle premium. Capturer l'essence.
              Amplifier l'image.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://www.facebook.com/NuitBlancheProduction"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/50366441/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@nuitblancheproduction.com"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#services"
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  Corporate
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  Événementiel
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  Publicité
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  Drone & Technique
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#fondateurs"
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  Le Casting
                </Link>
              </li>
              <li>
                <Link
                  href="/#portfolio"
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-500 text-sm">
            © {currentYear} Nuit Blanche Production. Tous droits réservés.
          </div>
          <div>
            <Link
              href="/conditions-generales"
              className="text-zinc-500 hover:text-white transition-colors text-sm"
            >
              Conditions Générales de Vente
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}