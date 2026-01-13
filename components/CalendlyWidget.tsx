'use client';

import { useEffect, useState, useRef } from 'react';

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export default function CalendlyWidget() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const widgetRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    // Only render on client side to avoid hydration issues
    setIsMounted(true);

    if (initializedRef.current) return;
    
    const initCalendly = () => {
      if (!widgetRef.current || initializedRef.current) return;

      // Check if Calendly is already available
      if (window.Calendly && window.Calendly.initInlineWidget) {
        try {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/rougeincurify/consultation?background_color=000000',
            parentElement: widgetRef.current,
          });
          initializedRef.current = true;
          setIsLoading(false);
          return;
        } catch (error) {
          console.error('Error initializing Calendly:', error);
        }
      }

      // Check if script is already loaded
      const existingScript = document.querySelector('script[src*="calendly.com"]');
      
      if (!existingScript) {
        // Load the script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.type = 'text/javascript';
        
        script.onload = () => {
          // Wait for Calendly to be available
          const checkInterval = setInterval(() => {
            if (window.Calendly && window.Calendly.initInlineWidget && widgetRef.current && !initializedRef.current) {
              clearInterval(checkInterval);
              try {
                window.Calendly.initInlineWidget({
                  url: 'https://calendly.com/rougeincurify/consultation?background_color=000000',
                  parentElement: widgetRef.current,
                });
                initializedRef.current = true;
                setIsLoading(false);
              } catch (error) {
                console.error('Error initializing Calendly after load:', error);
                setIsLoading(false);
              }
            }
          }, 100);

          // Timeout after 10 seconds
          setTimeout(() => {
            clearInterval(checkInterval);
            if (isLoading) {
              setIsLoading(false);
            }
          }, 10000);
        };

        script.onerror = () => {
          console.error('Failed to load Calendly script');
          setIsLoading(false);
        };

        document.body.appendChild(script);
      } else {
        // Script exists, wait for Calendly to be available
        const checkInterval = setInterval(() => {
          if (window.Calendly && window.Calendly.initInlineWidget && widgetRef.current && !initializedRef.current) {
            clearInterval(checkInterval);
            try {
              window.Calendly.initInlineWidget({
                url: 'https://calendly.com/rougeincurify/consultation?background_color=000000',
                parentElement: widgetRef.current,
              });
              initializedRef.current = true;
              setIsLoading(false);
            } catch (error) {
              console.error('Error initializing Calendly:', error);
              setIsLoading(false);
            }
          }
        }, 100);

        // Timeout after 10 seconds
        setTimeout(() => {
          clearInterval(checkInterval);
          if (isLoading) {
            setIsLoading(false);
          }
        }, 10000);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initCalendly();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!isMounted) {
    return (
      <div 
        className="bg-black/20 border border-white/10 rounded-lg flex items-center justify-center"
        style={{ minWidth: '320px', height: '700px' }}
      >
        <p className="text-white/50 text-sm">Loading calendar...</p>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full bg-black rounded-lg border border-[#8B6CFF]/20 overflow-hidden"
      style={{ minWidth: '320px', minHeight: '500px' }}
    >
      {isLoading && (
        <div 
          className="absolute inset-0 bg-black/20 border border-white/10 rounded-lg flex items-center justify-center z-10"
        >
          <p className="text-white/50 text-sm">Loading calendar...</p>
        </div>
      )}
      <div 
        ref={widgetRef}
        className="calendly-widget-container w-full h-full"
        style={{ 
          minWidth: '320px', 
          width: '100%',
          minHeight: '500px',
        }}
      />
      <style jsx global>{`
        .calendly-widget-container iframe {
          background-color: #000000 !important;
        }
        .calendly-inline-widget {
          background-color: #000000 !important;
        }
        .calendly-inline-widget iframe {
          background-color: #000000 !important;
        }
        .calendly-badge-widget {
          background-color: #000000 !important;
        }
      `}</style>
    </div>
  );
}
