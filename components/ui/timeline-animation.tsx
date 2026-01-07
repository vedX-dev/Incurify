'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface CustomTweenVars extends Omit<gsap.TweenVars, 'transition'> {
  transition?: {
    delay?: number;
    duration?: number;
    ease?: string;
  };
}

interface TimelineContentProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  animationNum?: number;
  customVariants?: {
    visible: (i: number) => CustomTweenVars;
    hidden: gsap.TweenVars;
  };
  timelineRef?: React.RefObject<HTMLElement>;
}

export function TimelineContent({
  children,
  as: Component = 'div',
  className = '',
  style,
  animationNum = 0,
  customVariants,
  timelineRef,
}: TimelineContentProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || !customVariants || typeof window === 'undefined') return;

    const element = ref.current;
    const { hidden, visible } = customVariants;

    // Extract transition properties if they exist
    const visibleProps = visible(animationNum);
    const { transition, ...gsapProps } = visibleProps as any;
    
    // Set initial state
    gsap.set(element, {
      ...hidden,
      filter: hidden.filter || 'blur(10px)',
    });

    // Create scroll trigger animation with smooth blur effect
    const triggerElement = timelineRef?.current || element;
    const scrollTrigger = {
      trigger: triggerElement,
      start: 'top 80%',
      toggleActions: 'play none none none',
      once: true, // Only animate once to prevent flickering
    };

    const delay = transition?.delay || animationNum * 0.2;
    const duration = transition?.duration || 0.8;
    const ease = transition?.ease || 'power2.out';

    // Create the animation
    const animation = gsap.to(element, {
      ...gsapProps,
      filter: 'blur(0px)',
      duration,
      delay,
      ease,
      scrollTrigger,
    });

    // Cleanup function
    return () => {
      if (animation && animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      // Also clean up any orphaned triggers
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === triggerElement) {
          trigger.kill();
        }
      });
    };
  }, [animationNum, customVariants, timelineRef]);

  const ComponentType = Component as any;

  return (
    <ComponentType ref={ref} className={className} style={style}>
      {children}
    </ComponentType>
  );
}

