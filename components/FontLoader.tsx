'use client';

import { useEffect } from 'react';

export default function FontLoader() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Check if fonts are already loaded
    if (document.documentElement.classList.contains('fonts-loaded')) {
      return;
    }

    // Function to check if fonts are loaded
    const checkFontsLoaded = () => {
      if (document.fonts && document.fonts.check) {
        // Check if all required fonts are loaded
        const fontsToCheck = [
          '1em "Onest"',
          '400 1em "Instrument Serif"',
        ];
        
        const allLoaded = fontsToCheck.every(font => {
          try {
            return document.fonts.check(font);
          } catch {
            return false;
          }
        });

        if (allLoaded || document.fonts.status === 'loaded') {
          document.documentElement.classList.add('fonts-loaded');
          return true;
        }
      } else {
        // Fallback: wait a bit and assume fonts are loaded
        setTimeout(() => {
          document.documentElement.classList.add('fonts-loaded');
        }, 100);
        return true;
      }
      return false;
    };

    // Check immediately in case fonts are already loaded
    if (checkFontsLoaded()) {
      return;
    }

    // Wait for fonts to load
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-loaded');
      });
    } else {
      // Fallback: add class after a short delay
      setTimeout(() => {
        document.documentElement.classList.add('fonts-loaded');
      }, 300);
    }
  }, []);

  return null;
}

