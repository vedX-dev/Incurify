'use client';

import * as React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { cn } from '@/lib/utils';

interface ParallaxElementProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
}

/**
 * ParallaxElement - For individual elements with parallax effect
 * Uses window scroll for smooth parallax scrolling
 */
export function ParallaxElement({
  children,
  className,
  speed = 0.3,
  direction = 'up',
}: ParallaxElementProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);
  
  const [{ y }, api] = useSpring(() => ({
    y: 0,
    config: { tension: 280, friction: 60 },
  }));

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate progress based on element position in viewport
      const elementProgress = Math.max(
        0,
        Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight))
      );
      
      const multiplier = direction === 'up' ? 1 : -1;
      const parallaxY = (elementProgress - 0.5) * multiplier * speed * 100;
      
      api.start({
        y: parallaxY,
        immediate: false,
      });
    };

    // Initial calculation
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [mounted, speed, direction, api]);

  // During SSR or before mount, render without animation
  if (!mounted) {
    return (
      <div ref={ref} className={cn('relative', className)}>
        {children}
      </div>
    );
  }

  return (
    <animated.div
      ref={ref}
      className={cn('relative', className)}
      style={{
        y,
      }}
    >
      {children}
    </animated.div>
  );
}
