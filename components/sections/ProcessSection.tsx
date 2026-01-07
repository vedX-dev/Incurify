'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextVerticalSwap } from '@/components/ui/text-vertical-swap';
import { ParallaxElement } from '@/components/ui/parallax-section';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const processSteps = [
    {
      step: '01',
      title: 'Understanding the Project',
      description:
        'We start by deeply understanding your project, your vision, goals, market, and what truly differentiates you. This foundation allows us to identify real growth opportunities and avoid generic, one-size-fits-all approaches.',
      image: '/images/process/Understanding the project.png',
    },
    {
      step: '02',
      title: 'Planning the Strategy',
      description:
        'Once clarity is established, we design a focused, goal-driven strategy tailored to your project and the Web3 landscape. Every decision is intentional, aligned with your objectives, and built to set your project up for sustainable success.',
      image: '/images/process/Planning the Strategy.png',
    },
    {
      step: '03',
      title: 'Execution & Scaling',
      description:
        'With a clear plan in place, we move into execution. Campaigns are launched, optimized, and scaled based on performance, ensuring consistent momentum and measurable growth at every stage.',
      image: '/images/process/Execution and Scaling.png',
    },
  ];

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current) return;

    const timeline = timelineRef.current;
    const cards = sectionRef.current.querySelectorAll('.process-card');
    const timelineLine = timeline.querySelector('.timeline-line') as HTMLElement;
    const flowingGlow = timeline.querySelector('.flowing-glow') as HTMLElement;
    const blinkingCircle = timeline.querySelector('.blinking-circle') as HTMLElement;
    
    // Animate timeline line fill (vertical line) - Fast and responsive
    if (timelineLine) {
      gsap.set(timelineLine, { strokeDashoffset: 1000 });
      
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 0.3,
        animation: gsap.to(timelineLine, {
          strokeDashoffset: 0,
          ease: 'none',
        }),
      });
    }

    // Animate flowing glow along the vertical timeline
    if (flowingGlow) {
      // Create infinite flowing animation - moves the gradient along the vertical line
      gsap.to(flowingGlow, {
        strokeDashoffset: -200,
        duration: 2,
        ease: 'none',
        repeat: -1,
      });
    }

    // Animate blinking circle along the vertical line
    if (blinkingCircle) {
      // Set initial position at the top (starting from the fixed circle)
      blinkingCircle.setAttribute('cx', '100');
      blinkingCircle.setAttribute('cy', '40');
      blinkingCircle.setAttribute('r', '8');
      blinkingCircle.setAttribute('opacity', '1');
      
      // Continuous blinking/pulsing animation
      gsap.to(blinkingCircle, {
        attr: { r: 10 },
        opacity: 1,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      });

      // Move circle along the vertical line based on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 0.3,
        onUpdate: (self) => {
          const progress = self.progress;
          // Calculate position along the vertical line
          // Line starts at y=40 (below the fixed circle) and goes to y=1000
          const lineStart = 40;
          const lineLength = 960; // 1000 - 40
          const yPosition = lineStart + (progress * lineLength);
          
          // Update circle position (x stays constant at 100 for vertical line)
          blinkingCircle.setAttribute('cx', '100');
          blinkingCircle.setAttribute('cy', yPosition.toString());
        },
      });
    }


    
    // Animate cards with smooth reveal
    cards.forEach((card, index) => {
      const cardElement = card as HTMLElement;
      
      // Set initial state
      gsap.set(cardElement, {
        opacity: 0,
        y: 80,
      });

      // Smooth scroll-triggered animation
      ScrollTrigger.create({
        trigger: cardElement,
        start: 'top 80%',
        end: 'top 40%',
        scrub: 1,
        animation: gsap.to(cardElement, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power2.out',
        }),
      });
    });

    // Animate images with smooth scale
    const images = sectionRef.current.querySelectorAll('.process-image');
    images.forEach((img, index) => {
      const imgElement = img as HTMLElement;
      const card = cards[index] as HTMLElement;
      
      if (!card) return;
      
      gsap.set(imgElement, {
        scale: 1.2,
        opacity: 0,
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'top 80%',
        end: 'top 40%',
        scrub: 1,
        animation: gsap.to(imgElement, {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
        }),
      });
    });

    const nodes = sectionRef.current.querySelectorAll('.timeline-node');

    nodes.forEach((node, index) => {
      ScrollTrigger.create({
        trigger: cards[index],
        start: 'top 60%',
        animation: gsap.fromTo(
          node,
          { scale: 0.6, opacity: 0.3 },
          { scale: 1, opacity: 1, ease: 'power2.out' }
        ),
      });
    });

    // Animate text content
    const titles = sectionRef.current.querySelectorAll('.process-title');
    const descriptions = sectionRef.current.querySelectorAll('.process-description');
    
    titles.forEach((title, index) => {
      const titleElement = title as HTMLElement;
      const card = cards[index] as HTMLElement;
      
      if (!card) return;

      gsap.set(titleElement, {
        opacity: 0,
        y: 30,
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'top 75%',
        scrub: 1,
        animation: gsap.to(titleElement, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        }),
      });
    });

    descriptions.forEach((desc, index) => {
      const descElement = desc as HTMLElement;
      const card = cards[index] as HTMLElement;
      
      if (!card) return;

      gsap.set(descElement, {
        opacity: 0,
        y: 20,
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'top 70%',
        scrub: 1,
        animation: gsap.to(descElement, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.2,
        }),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="process" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-transparent relative overflow-visible" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ParallaxElement speed={0.2} direction="up">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-4xl font-medium instrument-serif-regular tracking-wide px-4" style={{ fontWeight: 500, WebkitTextStroke: '1px currentColor' } as React.CSSProperties}>
              <TextVerticalSwap as="span" duration={0.3}>
                <span className="bg-white bg-clip-text text-transparent">
                  Our{' '}
                </span>
                <span className="bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] bg-clip-text text-transparent">
                  Process
                </span>
              </TextVerticalSwap>
            </h1>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto mt-3 sm:mt-4 px-4">
              A proven methodology that delivers results
            </p>
          </div>
        </ParallaxElement>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative overflow-visible pt-8">
          {/* Simple Vertical Timeline Line with Horizontal Extensions - Matching Image Style */}
          <div className="absolute left-4 sm:left-8 md:left-1/2 md:-translate-x-1/2 -top-8 bottom-0 w-1 hidden md:block overflow-visible z-10" style={{ overflow: 'visible' }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 1000" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
              <defs>
                {/* Glow filter for the timeline */}
                <filter id="timelineGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                {/* Circle glow filter */}
                <filter id="circleGlow" x="-200%" y="-200%" width="500%" height="500%">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8B6CFF" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#8B6CFF" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#3B1A6E" stopOpacity="0.5" />
                </linearGradient>

                {/* Flowing glow gradient */}
                <linearGradient id="flowingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8B6CFF" stopOpacity="0" />
                  <stop offset="15%" stopColor="#8B6CFF" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#B7A6FF" stopOpacity="1" />
                  <stop offset="85%" stopColor="#8B6CFF" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8B6CFF" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Main Vertical Line - Starts from the circle */}
              <line
                x1="100"
                y1="40"
                x2="100"
                y2="1000"
                stroke="rgba(139, 108, 255, 0.3)"
                strokeWidth="4"
                vectorEffect="non-scaling-stroke"
              />
              
              {/* Animated Vertical Line with glow - Starts from the circle */}
              <line
                className="timeline-line"
                x1="100"
                y1="40"
                x2="100"
                y2="1000"
                stroke="url(#timelineGradient)"
                strokeWidth="4"
                vectorEffect="non-scaling-stroke"
                filter="url(#timelineGlow)"
                style={{ 
                  strokeDasharray: '1000',
                  strokeDashoffset: '1000',
                  transformOrigin: 'top'
                }}
              />

              {/* Fixed Circle at the top - Starting point of the timeline - Rendered last so it's on top */}
              <circle
                className="top-start-circle"
                cx="100"
                cy="20"
                r="20"
                fill="#8B6CFF"
                stroke="#B7A6FF"
                strokeWidth="3"
                filter="url(#circleGlow)"
                opacity="1"
                style={{
                  transformOrigin: 'center',
                }}
              />

              {/* Moving circle that travels along the vertical line */}
              <circle
                className="blinking-circle"
                cx="100"
                cy="40"
                r="8"
                fill="#8B6CFF"
                filter="url(#circleGlow)"
                opacity="1"
                style={{
                  transformOrigin: 'center',
                }}
              />

              {/* Horizontal Lines extending from vertical line */}
              {/* Step 1: Understanding - Left */}
              <line
                x1="100"
                y1="200"
                x2="0"
                y2="200"
                stroke="#8B6CFF"
                strokeWidth="3"
                strokeOpacity="0.8"
                vectorEffect="non-scaling-stroke"
                filter="url(#timelineGlow)"
              />
              
              {/* Step 2: Planning - Right */}
              <line
                x1="100"
                y1="500"
                x2="200"
                y2="500"
                stroke="#8B6CFF"
                strokeWidth="3"
                strokeOpacity="0.8"
                vectorEffect="non-scaling-stroke"
                filter="url(#timelineGlow)"
              />
              
              {/* Step 3: Execution - Left */}
              <line
                x1="100"
                y1="800"
                x2="0"
                y2="800"
                stroke="#8B6CFF"
                strokeWidth="3"
                strokeOpacity="0.8"
                vectorEffect="non-scaling-stroke"
                filter="url(#timelineGlow)"
              />

              {/* Flowing glow effect on vertical line - Starts from the circle */}
              <line
                className="flowing-glow"
                x1="100"
                y1="40"
                x2="100"
                y2="1000"
                stroke="url(#flowingGradient)"
                strokeWidth="6"
                vectorEffect="non-scaling-stroke"
                filter="url(#flowingGlow)"
                style={{
                  strokeDasharray: '150 50',
                  strokeDashoffset: '0',
                }}
              />
            </svg>
          </div>

          {/* Process Cards */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-32">
            {processSteps.map((phase, index) => (
              <div
                key={index}
                className={`process-card relative ${
                  index % 2 === 0 
                    ? 'md:pr-[50%]' 
                    : 'md:pl-[50%] md:ml-auto'
                }`}
              >
                {/* Glassmorphism Card - Smaller Rectangle */}
                <div className="relative ml-6 sm:ml-8 md:ml-0 max-w-3xl mx-auto p-3 sm:p-4 md:p-5 lg:p-6 bg-black/30 backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5),0_0_0_1px_rgba(139,108,255,0.1)] hover:shadow-[0_12px_48px_0_rgba(139,108,255,0.2),0_0_0_1px_rgba(139,108,255,0.2)]">
                  {/* Enhanced Glassmorphism Layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-[#8B6CFF]/[0.03] pointer-events-none" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(139,108,255,0.05)_0%,transparent_50%,rgba(59,26,110,0.05)_100%)] pointer-events-none" />
                  
                  {/* Gradient Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B6CFF]/10 via-[#3B1A6E]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl" />

                  <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5">
                    {/* Illustration - Smaller, On Top */}
                    <div className="relative h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 w-full overflow-hidden bg-black/20 backdrop-blur-sm border border-white/5">
                      {/* Illustration */}
                      <div className="process-image relative h-full w-full p-2 sm:p-3 lg:p-4">
                        <Image
                          src={phase.image}
                          alt={phase.title}
                          fill
                          className="object-contain"
                          priority={index === 0}
                        />
                      </div>
                    </div>

                    {/* Text Content - Below */}
                    <div className="space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4">
                      <h3 className="process-title text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-bold text-white leading-tight">
                        {phase.title}
                      </h3>
                      <p className="process-description text-xs sm:text-sm md:text-base text-white/70 sm:text-white/80 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

