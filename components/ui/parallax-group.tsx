'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxGroupProps {
  children: ReactNode;
  className?: string;
}

/**
 * ParallaxGroup - Groups sections together and applies parallax effect with purple background overlay
 * This component wraps About, Contact, FAQ, and Footer sections
 * to create a smooth "pop-up" transition effect when scrolling from Testimonial
 * 
 * Effect: As user scrolls, the grouped section (About + Contact + Footer) 
 * scrolls faster (1.35x) than normal, creating a parallax "overtaking" effect
 * where it appears to pop up and slide over the departing Testimonial section.
 * 
 * Critical Visual Detail: The purple background of the About section smoothly
 * transitions and overlays over the Testimonial section as it's ending, creating
 * a seamless color/background transition.
 */
export function ParallaxGroup({ children, className = '' }: ParallaxGroupProps) {
  const groupRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const secondaryOverlayRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!groupRef.current || isInitialized.current) return;
    if (typeof window === 'undefined') return;

    const group = groupRef.current;
    const overlay = overlayRef.current;
    const secondaryOverlay = secondaryOverlayRef.current;
    const testimonialSection = document.querySelector('#testimonials')?.closest('section') as HTMLElement;
    const aboutSection = document.querySelector('#about')?.closest('section') as HTMLElement;
    
    if (!testimonialSection || !aboutSection) {
      console.warn('Testimonial or About section not found, parallax effect will not work');
      return;
    }

    // Get the purple background from About section (first absolute div with gradient)
    const aboutBackground = aboutSection.querySelector('.absolute.inset-0') as HTMLElement;

    // Set initial states
    gsap.set(group, {
      willChange: 'transform',
      force3D: true,
      zIndex: 10, // Ensure About section overlays Testimonial
    });

    // Set initial overlay state (hidden, positioned below viewport)
    if (overlay) {
      gsap.set(overlay, {
        opacity: 0,
        y: '100%', // Start below viewport (translateY(100%) moves down)
        willChange: 'transform, opacity',
        force3D: true,
        zIndex: 5, // Below About content but above Testimonial
      });
    }
    if (secondaryOverlay) {
      gsap.set(secondaryOverlay, {
        opacity: 0,
        y: '100%', // Start below viewport, matching main overlay
        willChange: 'transform, opacity',
        force3D: true,
        zIndex: 5,
      });
    }

    // Get viewport height for calculations
    const viewportHeight = window.innerHeight;
    
    // Create ScrollTrigger for parallax effect and purple background overlay
    // The effect triggers when the Testimonial section is ending
    const scrollTrigger = ScrollTrigger.create({
      trigger: testimonialSection,
      start: 'bottom 100%', // Start earlier - when testimonial bottom is at viewport top
      end: 'bottom top', // End when testimonial bottom reaches viewport top (fully scrolled past)
      scrub: 0.3, // Smooth scrubbing for buttery smooth 60fps feel
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Parallax speed: 1.35x (between 1.2-1.5x as requested)
        // This creates the "pop-up" effect where About section overtakes Testimonial
        const parallaxSpeed = 1.35;
        
        // Calculate translateY: negative value moves group up faster
        // This creates the illusion that the grouped section is scrolling faster (1.35x)
        // than the normal scroll speed, making it "pop up" and overtake Testimonial
        const maxDistance = viewportHeight * 0.3; // Maximum parallax distance
        const translateY = progress * -maxDistance * (parallaxSpeed - 1);
        
        // Apply parallax transform to the group
        gsap.set(group, {
          y: translateY,
          force3D: true,
        });

        // Animate purple background overlay
        // The overlay should start appearing and sliding up as testimonial is ending
        // This creates the smooth purple background transition over the Testimonial section
        if (overlay) {
          // Opacity: starts fading in early (at 10% progress), fully visible at 50%
          // This ensures the purple background appears before About section is fully visible
          const opacityProgress = Math.max(0, Math.min(1, (progress - 0.1) / 0.4));
          // Position: slides up from below viewport (y: 100%) to covering viewport (y: 0%)
          // Fully in place at 40% progress
          const positionProgress = Math.max(0, Math.min(1, progress / 0.4));
          
          // Calculate Y transform: starts at 100% (below viewport), ends at 0% (covering viewport)
          // Negative Y values move up, so we go from 100% to 0%
          const translateY = (1 - positionProgress) * 100;
          
          gsap.set(overlay, {
            opacity: opacityProgress,
            y: `${translateY}%`, // Slides up from 100% (below) to 0% (covering)
            force3D: true,
          });
        }
        
        // Animate secondary overlay to match main overlay
        if (secondaryOverlay) {
          const secondaryOpacity = opacityProgress * 0.6; // 60% of main overlay opacity
          gsap.set(secondaryOverlay, {
            opacity: secondaryOpacity,
            y: `${translateY}%`, // Same position as main overlay
            force3D: true,
          });
        }

        // Also animate the About section's background opacity to coordinate with overlay
        // This ensures seamless transition between overlay and actual About background
        if (aboutBackground) {
          // Background opacity starts later and reaches full opacity as overlay fades in
          const bgOpacity = Math.max(0, Math.min(1, (progress - 0.2) / 0.5));
          gsap.set(aboutBackground, {
            opacity: bgOpacity,
            force3D: true,
          });
        }
      },
      onLeave: () => {
        // When transition is complete (About is fully visible), 
        // smoothly reset to normal scroll behavior
        gsap.to(group, {
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
          force3D: true,
        });

        // Ensure overlays are fully visible and in place
        if (overlay) {
          gsap.set(overlay, {
            opacity: 1,
            y: '0%',
            force3D: true,
          });
        }
        if (secondaryOverlay) {
          gsap.set(secondaryOverlay, {
            opacity: 0.6,
            y: '0%',
            force3D: true,
          });
        }

        if (aboutBackground) {
          gsap.set(aboutBackground, {
            opacity: 1,
            force3D: true,
          });
        }
      },
      onEnterBack: () => {
        // When scrolling back up past the transition zone, reset immediately
        gsap.set(group, {
          y: 0,
          force3D: true,
        });

        if (overlay) {
          gsap.set(overlay, {
            opacity: 0,
            y: '100%',
            force3D: true,
          });
        }
        if (secondaryOverlay) {
          gsap.set(secondaryOverlay, {
            opacity: 0,
            y: '100%',
            force3D: true,
          });
        }

        if (aboutBackground) {
          gsap.set(aboutBackground, {
            opacity: 0,
            force3D: true,
          });
        }
      },
    });

    isInitialized.current = true;

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize, { passive: true });

      return () => {
      scrollTrigger?.kill();
      window.removeEventListener('resize', handleResize);
      gsap.set(group, { clearProps: 'all' });
      if (overlay) gsap.set(overlay, { clearProps: 'all' });
      if (secondaryOverlay) gsap.set(secondaryOverlay, { clearProps: 'all' });
      if (aboutBackground) gsap.set(aboutBackground, { clearProps: 'opacity' });
    };
  }, []);

  return (
    <div 
      ref={groupRef} 
      className={`relative ${className}`}
      style={{ 
        willChange: 'transform',
        transform: 'translateZ(0)', // Force GPU acceleration
        zIndex: 10, // Ensure About section overlays Testimonial
      }}
    >
      {/* Purple Background Overlay - Slides up and over Testimonial section */}
      {/* This overlay creates the smooth purple background transition */}
      {/* Fixed positioning ensures it overlays the Testimonial section properly */}
      <div
        ref={overlayRef}
        className="fixed inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: '100vh', // Full viewport height
          background: `
            radial-gradient(
              120% 100% at 50% 0%,
              #4B2A8E 0%,
              #2A0A4E 45%,
              #14081F 75%,
              #000000 100%
            )
          `,
          zIndex: 5, // Above testimonial (z-index: 1) but below About content (z-index: 10)
          willChange: 'transform, opacity',
          transform: 'translateZ(0)',
        }}
      />
      {/* Additional gradient overlay for depth matching About section */}
      <div
        ref={secondaryOverlayRef}
        className="fixed inset-x-0 bottom-0 pointer-events-none opacity-60"
        style={{
          height: '100vh',
          background: `
            radial-gradient(
              ellipse 150% 120% at 20% 40%,
              rgba(139, 108, 255, 0.3) 0%,
              rgba(59, 26, 110, 0.2) 40%,
              transparent 70%
            )
          `,
          zIndex: 5,
          willChange: 'opacity, transform',
          transform: 'translateZ(0)',
        }}
      />
      {children}
    </div>
  );
}

