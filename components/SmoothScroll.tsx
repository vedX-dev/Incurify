'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis with optimized settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 2,
      infinite: false,
    });

    // Get scroll container
    const scrollContainer = document.querySelector('html');

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle hash links for smooth scrolling
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (link && link.getAttribute('href') !== '#') {
        const href = link.getAttribute('href');
        if (href) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            lenis.scrollTo(targetElement, {
              offset: -80, // Account for fixed navigation
              duration: 1.5,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
            
            // Update URL hash
            window.history.pushState(null, '', href);
          }
        }
      }
    };

    // Listen for hash link clicks
    document.addEventListener('click', handleHashClick, true);

    // Handle initial hash on page load
    const handleInitialHash = () => {
      if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          setTimeout(() => {
            lenis.scrollTo(targetElement, {
              offset: -80,
              duration: 1.5,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }, 500);
        }
      }
    };

    // Handle hash changes (browser back/forward)
    const handleHashChange = () => {
      if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          lenis.scrollTo(targetElement, {
            offset: -80,
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Handle initial hash after a short delay to ensure DOM is ready
    setTimeout(handleInitialHash, 100);

    // Cleanup
    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleHashClick, true);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return <>{children}</>;
}
