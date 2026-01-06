'use client';

import * as React from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

export interface TextStaggerHoverProps
  extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  staggerEach?: number;
  staggerFrom?: 'start' | 'center' | 'end';
  yOffset?: number;
  fade?: boolean;
}

export const TextStaggerHover = React.forwardRef<
  HTMLElement,
  TextStaggerHoverProps
>(
  (
    {
      as: Component = 'span',
      children,
      className,
      staggerEach = 0.03,
      staggerFrom = 'start',
      yOffset = 8,
      fade = false,
      ...props
    },
    ref
  ) => {
    const containerRef = React.useRef<HTMLElement>(null);
    const timelineRef = React.useRef<gsap.core.Timeline | null>(null);
    const charsRef = React.useRef<HTMLSpanElement[]>([]);

    React.useImperativeHandle(ref, () => containerRef.current!);

    React.useEffect(() => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      
      // Wait for DOM to render children
      const text = container.textContent || '';
      
      if (!text.trim()) return;

      // Split text into characters, preserving spaces
      const chars: HTMLSpanElement[] = [];
      const fragment = document.createDocumentFragment();
      
      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.verticalAlign = 'baseline';
        fragment.appendChild(span);
        chars.push(span);
      });

      // Clear container and append character spans
      container.textContent = '';
      container.appendChild(fragment);
      charsRef.current = chars;

      // Create paused timeline
      const tl = gsap.timeline({ paused: true });

      // Set initial state
      gsap.set(chars, {
        y: 0,
        opacity: fade ? 0 : 1,
      });

      // Create animation
      tl.to(chars, {
        y: yOffset,
        opacity: fade ? 1 : undefined,
        duration: 0.6,
        ease: 'power2.out',
        stagger: {
          each: staggerEach,
          from: staggerFrom,
        },
      });

      timelineRef.current = tl;

      // Cleanup
      return () => {
        if (timelineRef.current) {
          timelineRef.current.kill();
        }
        charsRef.current = [];
      };
    }, [children, staggerEach, staggerFrom, yOffset, fade]);

    const handleMouseEnter = React.useCallback(() => {
      if (timelineRef.current) {
        timelineRef.current.play();
      }
    }, []);

    const handleMouseLeave = React.useCallback(() => {
      if (timelineRef.current) {
        timelineRef.current.reverse();
      }
    }, []);

    const ComponentType = Component as any;

    return (
      <ComponentType
        ref={containerRef}
        className={cn('inline-block cursor-default', className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </ComponentType>
    );
  }
);

TextStaggerHover.displayName = 'TextStaggerHover';

