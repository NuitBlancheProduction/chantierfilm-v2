'use client';

import Link from 'next/link';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-chantier-asphalt text-white border-t-4 border-chantier-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-chantier-yellow mb-4">
              CHANTIER FILM
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Documentation professionnelle de chantiers par drone et timelapse. 
              Valorisez vos projets de construction.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.linkedin.com/company/chantier-film"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-chantier-yellow transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-chantier-asphalt group-hover:text-white transition-colors" size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-chantier-yellow mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="flex-shrink-0 text-chantier-yellow mt-1" size={20} />
                <div className="text-sm">
                  <p>39 rue Jean Mermoz</p>
                  <p>88190 Golbey, France</p>
                </div>
              </div>
              
              <a
                href="tel:+33651301893"
                className="flex items-center gap-3 hover:text-chantier-yellow transition-colors justify-center md:justify-start"
              >
                <Phone className="flex-shrink-0" size={20} />
                <span className="text-sm">+33 6 51 30 18 93</span>
              </a>
              
              <a
                href="mailto:contact@chantierfilm.com"
                className="flex items-center gap-3 hover:text-chantier-yellow transition-colors justify-center md:justify-start"
              >
                <Mail className="flex-shrink-0" size={20} />
                <span className="text-sm">contact@chantierfilm.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-chantier-yellow mb-4">
              Liens Rapides
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-chantier-yellow transition-colors inline-block"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/prise-de-rendez-vous/"
                  className="hover:text-chantier-yellow transition-colors inline-block"
                >
                  Planifier un rendez-vous
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/"
                  className="hover:text-chantier-yellow transition-colors inline-block"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © {currentYear} Chantier Film - Marque déposée et exploitée par Nuit Blanche Production
          </p>
        </div>
      </div>
    </footer>
  );
}