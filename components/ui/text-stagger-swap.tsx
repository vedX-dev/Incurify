'use client';

import * as React from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

export interface TextStaggerSwapProps
  extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  staggerEach?: number;
  staggerFrom?: 'start' | 'center' | 'end';
}

export const TextStaggerSwap = React.forwardRef<
  HTMLElement,
  TextStaggerSwapProps
>(
  (
    {
      as: Component = 'span',
      children,
      className,
      staggerEach = 0.03,
      staggerFrom = 'start',
      ...props
    },
    ref
  ) => {
    const wrapperRef = React.useRef<HTMLElement>(null);
    const defaultLayerRef = React.useRef<HTMLSpanElement>(null);
    const hoverLayerRef = React.useRef<HTMLSpanElement>(null);
    const timelineRef = React.useRef<gsap.core.Timeline | null>(null);
    const defaultCharsRef = React.useRef<HTMLSpanElement[]>([]);
    const hoverCharsRef = React.useRef<HTMLSpanElement[]>([]);

    React.useImperativeHandle(ref, () => wrapperRef.current!);

    React.useEffect(() => {
      if (!wrapperRef.current || !defaultLayerRef.current || !hoverLayerRef.current) return;

      const defaultLayer = defaultLayerRef.current;
      const hoverLayer = hoverLayerRef.current;
      const text = defaultLayer.textContent || '';
      
      if (!text.trim()) return;

      // Split text into characters for default layer
      const defaultChars: HTMLSpanElement[] = [];
      const defaultFragment = document.createDocumentFragment();
      
      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.verticalAlign = 'baseline';
        defaultFragment.appendChild(span);
        defaultChars.push(span);
      });

      defaultLayer.textContent = '';
      defaultLayer.appendChild(defaultFragment);
      defaultCharsRef.current = defaultChars;

      // Split text into characters for hover layer
      const hoverChars: HTMLSpanElement[] = [];
      const hoverFragment = document.createDocumentFragment();
      
      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.verticalAlign = 'baseline';
        hoverFragment.appendChild(span);
        hoverChars.push(span);
      });

      hoverLayer.textContent = '';
      hoverLayer.appendChild(hoverFragment);
      hoverCharsRef.current = hoverChars;

      // Set initial states
      gsap.set(defaultChars, {
        yPercent: 0,
        opacity: 1,
      });

      gsap.set(hoverChars, {
        yPercent: 100,
        opacity: 1,
      });

      // Create paused timeline
      const tl = gsap.timeline({ paused: true });

      // On hover: default moves up and fades out, hover moves up from below
      tl.to(
        defaultChars,
        {
          yPercent: -100,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in',
          stagger: {
            each: staggerEach,
            from: staggerFrom,
          },
        },
        0
      )
        .to(
          hoverChars,
          {
            yPercent: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: {
              each: staggerEach,
              from: staggerFrom,
            },
          },
          0
        );

      timelineRef.current = tl;

      // Cleanup
      return () => {
        if (timelineRef.current) {
          timelineRef.current.kill();
        }
        defaultCharsRef.current = [];
        hoverCharsRef.current = [];
      };
    }, [children, staggerEach, staggerFrom]);

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
        ref={wrapperRef}
        className={cn('relative inline-block overflow-hidden cursor-default', className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <span ref={defaultLayerRef} className="inline-block">
          {children}
        </span>
        <span
          ref={hoverLayerRef}
          className="absolute top-0 left-0 w-full h-full inline-block"
          aria-hidden="true"
        >
          {children}
        </span>
      </ComponentType>
    );
  }
);

TextStaggerSwap.displayName = 'TextStaggerSwap';

