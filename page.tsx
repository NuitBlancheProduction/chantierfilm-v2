'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, Drone, Video, Calendar } from 'lucide-react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
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
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 w-full bg-cf-white shadow-md z-50 py-5 transition-all duration-300">
        <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between">
          <button
            onClick={() => setMenuOpen(true)}
            className="bg-transparent border-none text-cf-dark text-2xl cursor-pointer p-2.5 rounded-md transition-all duration-300 hover:bg-cf-blue-lightest hover:text-cf-blue-primary"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex-1 flex justify-center">
            <Link href="/">
              <Image
                src="/asset/title.webp"
                alt="Chantier Film - Logo"
                width={280}
                height={70}
                priority
                className="h-[70px] w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          <div className="w-[50px]" />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999] transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 left-0 w-[300px] h-screen bg-cf-white shadow-2xl z-[1001] pt-20 transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 bg-transparent border-none text-cf-dark text-2xl cursor-pointer p-2.5 rounded-md transition-all duration-300 hover:bg-cf-blue-lightest hover:text-cf-blue-primary"
        >
          <X className="w-6 h-6" />
        </button>

        <ul className="list-none p-0 m-0">
          <li className="border-b border-cf-blue-lightest">
            <Link
              href="/"
              className="flex items-center px-7 py-5 text-cf-dark no-underline text-lg font-medium transition-all duration-300 hover:bg-cf-blue-lightest hover:text-cf-blue-primary hover:translate-x-2.5"
            >
              <span className="mr-4 w-5 text-center">🏠</span>
              Accueil
            </Link>
          </li>
          <li className="border-b border-cf-blue-lightest">
            <Link
              href="/prise-de-rendez-vous/"
              className="flex items-center px-7 py-5 text-cf-dark no-underline text-lg font-medium transition-all duration-300 hover:bg-cf-blue-lightest hover:text-cf-blue-primary hover:translate-x-2.5"
            >
              <Calendar className="w-5 h-5 mr-4" />
              Planifier un rendez-vous
            </Link>
          </li>
          <li className="border-b border-cf-blue-lightest">
            <Link
              href="/blog/"
              className="flex items-center px-7 py-5 text-cf-dark no-underline text-lg font-medium transition-all duration-300 hover:bg-cf-blue-lightest hover:text-cf-blue-primary hover:translate-x-2.5"
            >
              <span className="mr-4 w-5 text-center">📝</span>
              Blog
            </Link>
          </li>
        </ul>
      </nav>

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
              <div className="absolute -top-5 right-[20%] bg-cf-blue-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg animate-float">
                <Drone className="w-6 h-6" />
              </div>
              <div className="absolute bottom-8 left-[10%] bg-cf-blue-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg animate-float [animation-delay:1s]">
                <Video className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center">
            <Link
              href="/prise-de-rendez-vous/"
              className="inline-block bg-cf-blue-primary text-cf-white px-8 py-4 text-xl font-semibold rounded-md border-none transition-all duration-300 no-underline shadow-[0_4px_15px_rgba(0,85,255,0.3)] hover:translate-y-[-3px] hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(0,85,255,0.4)] pulse-animation relative overflow-hidden"
            >
              Réservez un Rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}