'use client';

import { useEffect, useState } from 'react';
import { LogoMarquee } from '@/components/ui/logo-marquee';

export function ProofSection() {
  const [logos, setLogos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/clients')
      .then(res => res.json())
      .then(data => {
        setLogos(data.logos || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching logos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-12 bg-zinc-200 overflow-hidden border-y border-zinc-300">
      <div className="mb-8 text-center">
        <h2 className="text-zinc-900 uppercase tracking-[0.25em] text-2xl md:text-3xl font-black relative inline-block overflow-hidden">
          <span className="relative z-10 bg-gradient-to-r from-zinc-700 via-zinc-900 to-zinc-700 bg-clip-text text-transparent animate-shine bg-[length:200%_100%]">
            Ils nous font confiance
          </span>
        </h2>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-shine {
          animation: shine 4s linear infinite;
        }
      `}</style>

      {loading ? (
        <div className="text-center text-zinc-400 py-8">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-500" />
        </div>
      ) : (
        <LogoMarquee files={logos} />
      )}
    </section>
  );
}