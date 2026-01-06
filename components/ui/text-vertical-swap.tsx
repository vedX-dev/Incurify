'use client';

import * as React from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

export interface TextVerticalSwapProps
  extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  duration?: number;
}

export const TextVerticalSwap = React.forwardRef<
  HTMLElement,
  TextVerticalSwapProps
>(
  (
    {
      as: Component = 'span',
      children,
      className,
      duration = 0.3,
      ...props
    },
    ref
  ) => {
    const wrapperRef = React.useRef<HTMLElement>(null);
    const defaultLayerRef = React.useRef<HTMLSpanElement>(null);
    const hoverLayerRef = React.useRef<HTMLSpanElement>(null);
    const timelineRef = React.useRef<gsap.core.Timeline | null>(null);

    React.useImperativeHandle(ref, () => wrapperRef.current!);

    React.useEffect(() => {
      if (!wrapperRef.current || !defaultLayerRef.current || !hoverLayerRef.current) return;

      const defaultLayer = defaultLayerRef.current;
      const hoverLayer = hoverLayerRef.current;

      // Set initial states
      gsap.set(defaultLayer, {
        yPercent: 0,
        opacity: 1,
      });

      gsap.set(hoverLayer, {
        yPercent: 100,
        opacity: 0,
      });

      // Create paused timeline
      const tl = gsap.timeline({ paused: true });

      // On hover: default moves up and fades out, hover moves up from below
      tl.to(
        defaultLayer,
        {
          yPercent: -100,
          opacity: 0,
          duration,
          ease: 'power3.out',
        },
        0
      )
        .to(
          hoverLayer,
          {
            yPercent: 0,
            opacity: 1,
            duration,
            ease: 'power3.out',
          },
          0
        );

      timelineRef.current = tl;

      // Cleanup
      return () => {
        if (timelineRef.current) {
          timelineRef.current.kill();
        }
      };
    }, [children, duration]);

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
        className={cn('relative overflow-hidden inline-block cursor-default align-middle', className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <span ref={defaultLayerRef} className="relative inline-block align-middle">
          {children}
        </span>
        <span
          ref={hoverLayerRef}
          className="absolute top-0 left-0 w-full h-full inline-block align-middle"
          aria-hidden="true"
        >
          {children}
        </span>
      </ComponentType>
    );
  }
);

TextVerticalSwap.displayName = 'TextVerticalSwap';

