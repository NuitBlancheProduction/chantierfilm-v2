'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 w-full bg-cf-white shadow-md z-50 py-5 transition-all duration-300">
        <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between">
          <button
            onClick={() => setMenuOpen(true)}
            className="bg-transparent border-none text-cf-dark text-2xl cursor-pointer p-2.5 rounded-md transition-all duration-300 hover:bg-cf-blue-lightest hover:text-cf-blue-primary"
            aria-label="Ouvrir le menu"
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
          aria-label="Fermer le menu"
        >
          <X className="w-6 h-6" />
        </button>

        <ul className="list-none p-0 m-0">
          <li className="border-b border-cf-blue-lightest">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-7 py-5 text-cf-dark no-underline text-lg font-medium transition-all duration-300 hover:bg-cf-blue-lightest hover:text-cf-blue-primary hover:translate-x-2.5"
            >
              <span className="mr-4 w-5 text-center">🏠</span>
              Accueil
            </Link>
          </li>
          <li className="border-b border-cf-blue-lightest">
            <Link
              href="/prise-de-rendez-vous/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-7 py-5 text-cf-dark no-underline text-lg font-medium transition-all duration-300 hover:bg-cf-blue-lightest hover:text-cf-blue-primary hover:translate-x-2.5"
            >
              <Calendar className="w-5 h-5 mr-4" />
              Planifier un rendez-vous
            </Link>
          </li>
          <li className="border-b border-cf-blue-lightest">
            <Link
              href="/blog/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-7 py-5 text-cf-dark no-underline text-lg font-medium transition-all duration-300 hover:bg-cf-blue-lightest hover:text-cf-blue-primary hover:translate-x-2.5"
            >
              <span className="mr-4 w-5 text-center">📝</span>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
