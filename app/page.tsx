'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CheckCircle, Drone, Video } from 'lucide-react';
import Header from '@/components/layout/Header';
import ProblemsSection from '@/components/sections/ProblemsSection';
import OfferSection from '@/components/sections/OfferSection';
import BeforeAfterSection from '@/components/sections/BeforeAfterSection';
import ProcessSection from '@/components/sections/ProcessSection';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    "Une équipe d'un grand professionnalisme, à l'écoute de nos besoins et toujours disponible pour ajuster les moindres détails. La qualité est au rendez-vous !",
    "Un investissement qui en valait largement la peine ! Nos clients et partenaires adorent suivre notre évolution grâce à ces vidéos. Merci encore pour ce travail d'orfèvre !",
    "Le suivi en timelapse est d'une précision remarquable, et les reportages intermédiaires sont un vrai plus pour notre communication interne et externe."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-[120px] pb-32 bg-cf-white overflow-hidden relative">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cf-blue-primary to-transparent top-[80%] animate-[slide_25s_linear_infinite] opacity-10" />

        <div className="container max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Column */}
            <div className="mb-12 lg:mb-0">
              <h1 className="relative text-5xl font-bold text-cf-dark mb-6 leading-tight text-center animate-fade-in-up">
                <div className="inline-flex flex-col items-center">
                  <span className="inline-block relative transition-all duration-500 z-10">
                    Immortalisez Votre Chantier
                  </span>
                  <span className="inline-block relative text-cf-blue-primary font-extrabold px-2.5 mt-1.5 bg-gradient-to-r from-transparent via-cf-blue-lightest to-transparent rounded -rotate-1 animate-accent-pulse z-20">
                    en Vidéo
                  </span>
                </div>
              </h1>

              <p className="text-xl text-cf-blue-dark mb-8 leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
                Capturez chaque détail de votre chantier avec un reportage complet, incluant drone et timelapse, et créez une identité visuelle distincte.
              </p>

              <ul className="list-none p-0 mb-8">
                {[
                  'Documentation continue',
                  'Perspectives aériennes spectaculaires',
                  'Suivi détaillé en temps réel'
                ].map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center mb-3 text-cf-dark text-base opacity-0 -translate-x-5 animate-fade-in-right"
                    style={{ animationDelay: `${0.5 + index * 0.2}s`, animationFillMode: 'forwards' }}
                  >
                    <CheckCircle className="text-cf-blue-primary mr-2.5 w-5 h-5" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Testimonial Carousel */}
              <div className="bg-cf-blue-lightest p-5 rounded-lg mb-10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-in-up [animation-delay:0.3s]">
                <div className="text-cf-blue-primary text-2xl mb-1">★★★★★</div>
                <div className="relative overflow-hidden min-h-[80px]">
                  {testimonials.map((text, index) => (
                    <div
                      key={index}
                      className={`absolute w-full transition-all duration-800 ${
                        currentSlide === index
                          ? 'opacity-100 translate-y-0 relative'
                          : 'opacity-0 translate-y-5 absolute'
                      }`}
                    >
                      <p className="text-base italic text-cf-blue-dark mb-0 leading-snug">
                        "{text}"
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-2.5">
                  {testimonials.map((_, index) => (
                    <span
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 w-2 mx-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                        currentSlide === index
                          ? 'bg-cf-blue-primary scale-125'
                          : 'bg-cf-blue-light'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center lg:text-left">
                <Link
                  href="/prise-de-rendez-vous/"
                  className="inline-block bg-cf-blue-primary text-cf-white px-8 py-4 text-xl font-semibold rounded-md border-none transition-all duration-300 no-underline shadow-[0_4px_15px_rgba(0,85,255,0.3)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(0,85,255,0.4)] pulse-animation relative overflow-hidden"
                >
                  Réservez un Rendez-vous
                </Link>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative flex justify-center items-center opacity-0 animate-fade-in-up [animation-delay:0.3s] [animation-fill-mode:forwards]">
              <div className="w-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl">
                <Image
                  src="/asset/01.webp"
                  alt="Suivi de chantier en images – Timelapse et photographie pro"
                  width={600}
                  height={450}
                  className="w-full h-auto transition-transform duration-1500 hover:scale-105"
                  priority
                />
              </div>

              {/* Floating Icons */}
              <div className="hidden lg:block absolute -top-5 right-[20%] bg-cf-blue-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg animate-float">
                <Drone className="w-6 h-6" />
              </div>
              <div className="hidden lg:block absolute bottom-8 left-[10%] bg-cf-blue-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg animate-float [animation-delay:1s]">
                <Video className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <ProblemsSection />
      <OfferSection />
      <BeforeAfterSection />
      <ProcessSection />

      {/* Footer */}
      <footer className="py-12 lg:py-16 bg-cf-dark text-white text-center">
        <div className="container max-w-[1200px] mx-auto px-5">
          {/* LinkedIn Logo */}
          <div className="mb-6">
            <a
              href="https://www.linkedin.com/company/chantier-film"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-cf-blue-primary transition-all duration-300 group">
                <svg
                  className="w-6 h-6 text-[#0077B5] group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </a>
          </div>

          {/* Company Name */}
          <h2 className="text-3xl font-bold mb-6 tracking-wide">
            Chantier Film
          </h2>

          {/* Contact Info */}
          <div className="mb-6">
            <p className="text-gray-400 mb-3">
              26 Boulevard de Dijon, 88000 Épinal
            </p>
            <div className="flex items-center justify-center flex-wrap gap-2">
              <a
                href="tel:+33658774488"
                className="text-white hover:text-cf-blue-primary transition-colors duration-300 font-medium"
              >
                06 58 77 44 88
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="mailto:contact@chantier-film.com"
                className="text-white hover:text-cf-blue-primary transition-colors duration-300 font-medium"
              >
                contact@chantier-film.com
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Chantier Film. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
