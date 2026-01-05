'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial page load animation - More noticeable
      if (containerRef.current) {
        // Set initial state
        gsap.set(containerRef.current, {
          opacity: 0,
          y: 50,
          scale: 0.95,
        });

        // Animate in with more dramatic effect
        gsap.to(containerRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.3,
        });
      }

      // Overlay animation on mount - More visible and smooth
      if (overlayRef.current) {
        gsap.set(overlayRef.current, {
          opacity: 1,
          scaleX: 0,
          transformOrigin: 'left center',
        });

        // Slide in from left
        gsap.to(overlayRef.current, {
          scaleX: 1,
          duration: 0.8,
          ease: 'power2.inOut',
        });

        // Slide out to right
        gsap.to(overlayRef.current, {
          scaleX: 0,
          transformOrigin: 'right center',
          duration: 0.8,
          ease: 'power2.inOut',
          delay: 0.8,
        });

        // Fade out
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.4,
          delay: 1.5,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Overlay for page transition */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9999] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #8B6CFF 0%, #3B1A6E 50%, #0A0612 100%)',
        }}
      />
      
      {/* Content container */}
      <div ref={containerRef} className="w-full">
        {children}
      </div>
    </>
  );
}

