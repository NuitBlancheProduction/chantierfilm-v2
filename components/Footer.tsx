import Link from 'next/link';
import { Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 lg:py-16 bg-cf-dark text-cf-white">
      <div className="container max-w-[1200px] mx-auto px-5">
        <div className="text-center">
          {/* LinkedIn Logo */}
          <div className="mb-5">
            <a
              href="https://www.linkedin.com/company/chantier-film"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-all duration-300 hover:-translate-y-1 no-underline"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center mx-auto shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)] hover:bg-[#0077B5] transition-all duration-300 group">
                <Linkedin className="w-6 h-6 lg:w-7 lg:h-7 text-[#0077B5] group-hover:text-white transition-colors duration-300" />
              </div>
            </a>
          </div>

          {/* Company Name */}
          <h3 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-7 tracking-wide">
            CHANTIER FILM
          </h3>

          {/* Contact Info */}
          <div className="mb-6 lg:mb-7">
            <p className="text-[#B8B8B8] mb-2.5 text-base lg:text-lg leading-snug flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>39 rue Jean Mermoz • 88190 Golbey • France</span>
            </p>
            <div className="flex items-center justify-center flex-wrap gap-2">
              <a
                href="tel:+33651301893"
                className="text-white hover:text-cf-blue-primary transition-colors duration-300 font-medium text-base lg:text-lg no-underline flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                +33 6 51 30 18 93
              </a>
              <span className="text-[#B8B8B8] text-base lg:text-lg">•</span>
              <a
                href="mailto:contact@chantierfilm.com"
                className="text-white hover:text-cf-blue-primary transition-colors duration-300 font-medium text-base lg:text-lg no-underline flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                contact@chantierfilm.com
              </a>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-[#888888] text-sm lg:text-base m-0 leading-snug border-t border-[#404040] pt-5">
            Copyright © Chantier Film - Marque déposée et exploitée par Nuit Blanche Production
          </p>
        </div>
      </div>
    </footer>
  );
}