'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-16 md:py-24 bg-chantier-off-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-chantier-asphalt mb-4">
            <span className="block">Visualisez la</span>
            <span className="text-chantier-yellow">Transformation</span>
          </h2>
          <p className="text-lg md:text-xl text-chantier-steel max-w-2xl mx-auto">
            Découvrez l'évolution spectaculaire de vos projets de construction
          </p>
        </div>

        {/* Comparison Container */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-lg shadow-industrial-lg cursor-ew-resize select-none"
            onClick={handleClick}
          >
            {/* Image AFTER (Background - Full width) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/home/comparison/after.webp"
                alt="État final du chantier - Après travaux"
                fill
                className="object-cover"
                priority
                draggable={false}
              />
            </div>

            {/* Image BEFORE (Foreground - Clipped) */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <Image
                src="/images/home/comparison/before.webp"
                alt="État initial du chantier - Avant travaux"
                fill
                className="object-cover"
                priority
                draggable={false}
              />
            </div>

            {/* Labels AVANT/APRÈS */}
            <div className="absolute top-4 left-4 z-20">
              <div
                className="bg-chantier-asphalt text-white px-4 py-2 rounded font-bold text-sm md:text-base transition-opacity duration-300"
                style={{
                  opacity: sliderPosition > 15 ? 1 : 0.3,
                }}
              >
                AVANT
              </div>
            </div>

            <div className="absolute top-4 right-4 z-20">
              <div
                className="bg-chantier-yellow text-chantier-asphalt px-4 py-2 rounded font-bold text-sm md:text-base transition-opacity duration-300"
                style={{
                  opacity: sliderPosition < 85 ? 1 : 0.3,
                }}
              >
                APRÈS
              </div>
            </div>

            {/* Slider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Slider Handle */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-chantier-yellow rounded-full shadow-industrial-lg flex items-center justify-center cursor-ew-resize pointer-events-auto"
                onMouseDown={handleMouseDown}
                onTouchStart={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
              >
                {/* Chevrons */}
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-chantier-asphalt"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-chantier-asphalt"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Vertical line extensions (top & bottom) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 md:h-12 bg-chantier-yellow"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-8 md:h-12 bg-chantier-yellow"></div>
            </div>
          </div>

          {/* Instructions (Optional) */}
          <div className="mt-6 text-center">
            <p className="text-chantier-steel text-sm md:text-base">
              <span className="hidden md:inline">Déplacez le curseur pour comparer • </span>
              <span className="md:hidden">Glissez pour comparer • </span>
              <span className="font-semibold text-chantier-asphalt">Documentation complète de votre projet</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}