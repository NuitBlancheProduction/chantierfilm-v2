'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

export default function RendezVousPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'meeting' });
      cal('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#FACC15' },
          dark: { 'cal-brand': '#212125' }
        },
        hideEventTypeDetails: false,
        layout: 'month_view'
      });
    })();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Espaceur pour la navbar fixe */}
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête de la page */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              Réservez votre Appel Découverte
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Choisissez un créneau qui vous convient pour discuter de votre projet vidéo
            </p>
          </div>

          {/* Container du calendrier Cal.com */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="min-h-[700px] md:min-h-[800px]">
              <Cal
                namespace="meeting"
                calLink="chantierfilm/meeting"
                style={{
                  width: '100%',
                  height: '100%',
                  overflow: 'scroll'
                }}
                config={{ layout: 'month_view' }}
              />
            </div>
          </div>

          {/* Section informative optionnelle */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Questions ? Contactez-nous à{' '}
              <a
                href="mailto:contact@chantierfilm.com"
                className="text-yellow-400 hover:text-yellow-500 font-medium transition-colors"
              >
                contact@chantierfilm.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}