'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TimelineContentProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  animationNum?: number;
  customVariants?: {
    visible: (i: number) => gsap.TweenVars;
    hidden: gsap.TweenVars;
  };
  timelineRef?: React.RefObject<HTMLElement>;
}

export function TimelineContent({
  children,
  as: Component = 'div',
  className = '',
  animationNum = 0,
  customVariants,
  timelineRef,
}: TimelineContentProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || !customVariants) return;

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
    const scrollTrigger = {
      trigger: timelineRef?.current || element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    };

    const delay = transition?.delay || animationNum * 0.2;
    const duration = transition?.duration || 0.8;
    const ease = transition?.ease || 'power2.out';

    gsap.to(element, {
      ...gsapProps,
      filter: 'blur(0px)',
      duration,
      delay,
      ease,
      scrollTrigger,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === scrollTrigger.trigger) {
          trigger.kill();
        }
      });
    };
  }, [animationNum, customVariants, timelineRef]);

  const ComponentType = Component as any;

  return (
    <ComponentType ref={ref} className={className}>
      {children}
    </ComponentType>
  );
}

