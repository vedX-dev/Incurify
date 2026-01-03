'use client';

import { useEffect } from 'react';

export default function FontLoader() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Check if fonts are already loaded
    if (document.querySelector('link[href*="fonts.googleapis.com"]')) {
      return;
    }

    // Create preconnect links
    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnect1);

    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://fonts.gstatic.com';
    preconnect2.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(preconnect2);

    // Create font stylesheet link
    const fontLink = document.createElement('link');
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Instrument+Serif:ital@0;1&family=Onest:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  }, []);

  return null;
}

