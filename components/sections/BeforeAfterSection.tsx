'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';

export default function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(45);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
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
    <section className="py-16 lg:py-20 bg-cf-white relative overflow-hidden">
      {/* Animated line decoration */}
      <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cf-blue-primary to-transparent bottom-[-20px] animate-[slide_30s_linear_infinite_reverse]" />

      <div className="container max-w-[1200px] mx-auto px-5">
        {/* Comparison Container */}
        <div
          ref={containerRef}
          className="relative w-full pb-[36%] rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none"
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* Before Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/asset/1-BEFORE.webp"
              alt="Avant - Début du chantier"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* After Image (clipped) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
            }}
          >
            <Image
              src="/asset/2-AFTER.webp"
              alt="Après - Fin du chantier"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Labels */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <div className="absolute top-5 left-5 bg-cf-blue-primary text-white text-sm font-semibold px-4 py-1.5 rounded shadow-[0_3px_10px_rgba(0,85,255,0.3)] transition-transform duration-300 hover:-translate-y-1">
              Avant
            </div>
            <div className="absolute top-5 right-5 bg-cf-blue-primary text-white text-sm font-semibold px-4 py-1.5 rounded shadow-[0_3px_10px_rgba(0,85,255,0.3)] transition-transform duration-300 hover:-translate-y-1">
              Après
            </div>
          </div>

          {/* Slider Line and Handle */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white z-20 cursor-col-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-cf-blue-primary rounded-full shadow-[0_5px_15px_rgba(0,85,255,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_7px_20px_rgba(0,85,255,0.5)]">
              <ArrowLeftRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
