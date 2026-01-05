'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const growthNodes = [
  {
    id: '01',
    title: 'User Acquisition',
    description:
      'We attract the right users through targeted strategies that turn attention into real adoption.',
  },
  {
    id: '02',
    title: 'Audience Retention',
    description:
      'We help you build communities that stay, engage, and grow — not just show up once.',
  },
  {
    id: '03',
    title: 'Maximized Exposure',
    description:
      'We position your project in front of the right audiences using creators, partnerships, and strategic distribution.',
  },
  {
    id: '04',
    title: 'Revenue Growth',
    description:
      'We align marketing with business goals to drive conversions, monetization, and long-term value.',
  },
  {
    id: '05',
    title: 'Proven Results',
    description:
      'We operate with data, benchmarks, and experience backed by measurable outcomes and real case studies.',
  },
  {
    id: '06',
    title: 'Web3-Native Strategies',
    description:
      'We build custom strategies rooted in Web3 culture, behavior, and market dynamics — never generic playbooks.',
  },
];

export default function GrowthEngineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tooltipRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const nodes = nodeRefs.current.filter(Boolean) as HTMLDivElement[];
    const tooltips = tooltipRefs.current.filter(Boolean) as HTMLDivElement[];

    // Initialize floating animations for each node
    nodes.forEach((node, index) => {
      // Unique floating pattern for each node
      const yOffset = index % 2 === 0 ? 6 : -6;
      const xOffset = index % 3 === 0 ? 4 : -4;
      const duration = 6 + (index % 3) * 1.5; // 6, 7.5, 9 seconds

      gsap.to(node, {
        y: `+=${yOffset}`,
        x: `+=${xOffset}`,
        duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.3, // Stagger start times
      });
    });

    // Cleanup
    return () => {
      nodes.forEach((node) => {
        gsap.killTweensOf(node);
      });
    };
  }, []);

  const handleNodeHover = (index: number) => {
    if (isMobile) return;

    const nodes = nodeRefs.current.filter(Boolean) as HTMLDivElement[];
    const tooltip = tooltipRefs.current[index];
    const nodeElement = nodes[index];

    if (!nodeElement) return;

    // Scale and glow active node
    gsap.to(nodeElement, {
      scale: 1.05,
      duration: 0.4,
      ease: 'power2.out',
    });

    // Increase glow intensity
    const glowElement = nodeElement.querySelector('.absolute.inset-0.rounded-full') as HTMLElement;
    if (glowElement) {
      gsap.to(glowElement, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    }

    // Dim other nodes
    nodes.forEach((node, i) => {
      if (i !== index && node) {
        gsap.to(node, {
          opacity: 0.4,
          duration: 0.4,
          ease: 'power2.out',
        });
      }
    });

    // Show tooltip
    if (tooltip) {
      gsap.fromTo(
        tooltip,
        { opacity: 0, y: 8 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        }
      );
    }
  };

  const handleNodeLeave = (index: number) => {
    if (isMobile) return;

    const nodes = nodeRefs.current.filter(Boolean) as HTMLDivElement[];
    const tooltip = tooltipRefs.current[index];
    const nodeElement = nodes[index];

    if (!nodeElement) return;

    // Reset active node
    gsap.to(nodeElement, {
      scale: 1,
      duration: 0.4,
      ease: 'power2.out',
    });

    // Reset glow
    const glowElement = nodeElement.querySelector('.absolute.inset-0.rounded-full') as HTMLElement;
    if (glowElement) {
      gsap.to(glowElement, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    }

    // Restore all nodes
    nodes.forEach((node) => {
      if (node) {
        gsap.to(node, {
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
      }
    });

    // Hide tooltip
    if (tooltip) {
      gsap.to(tooltip, {
        opacity: 0,
        y: 8,
        duration: 0.3,
        ease: 'power2.in',
      });
    }
  };

  const handleNodeTap = (index: number) => {
    if (!isMobile) return;

    if (activeNode === index) {
      // Close panel
      setActiveNode(null);
      if (mobilePanelRef.current) {
        gsap.to(mobilePanelRef.current, {
          y: '100%',
          duration: 0.4,
          ease: 'power2.inOut',
        });
      }
    } else {
      // Open panel
      setActiveNode(index);
      if (mobilePanelRef.current) {
        gsap.fromTo(
          mobilePanelRef.current,
          { y: '100%' },
          {
            y: 0,
            duration: 0.4,
            ease: 'power2.inOut',
          }
        );
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle purple gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(
              ellipse 120% 100% at 50% 50%,
              rgba(59, 26, 110, 0.3) 0%,
              rgba(20, 8, 31, 0.2) 40%,
              transparent 70%
            )
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Center Content */}
        <div className="text-center mb-24 md:mb-32">
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-black instrument-serif-regular tracking-tight mb-6"
            style={{ fontWeight: 500, WebkitTextStroke: '0.5px currentColor' } as React.CSSProperties}
          >
            <span className="text-white">Growth</span>{' '}
            <span className="bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] bg-clip-text text-transparent">
              Engine
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-4">
            Strategy • Exposure • Revenue
          </p>
          <p className="text-sm text-white/50 max-w-md mx-auto">
            A connected system built for scalable Web3 adoption.
          </p>
        </div>

        {/* Node Container */}
        <div className="relative min-h-[600px] md:min-h-[700px] flex flex-col justify-center">
          {/* Top Row: Nodes 01, 02, 03 */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-16 mb-12 md:mb-20">
            {growthNodes.slice(0, 3).map((node, index) => (
              <div
                key={node.id}
                ref={(el) => (nodeRefs.current[index] = el)}
                className="relative group"
                onMouseEnter={() => handleNodeHover(index)}
                onMouseLeave={() => handleNodeLeave(index)}
                onClick={() => handleNodeTap(index)}
              >
                {/* Node */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center cursor-pointer transition-all duration-300">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8B6CFF]/30 via-[#3B1A6E]/15 to-transparent opacity-0 blur-xl" />

                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#8B6CFF] to-[#3B1A6E] flex items-center justify-center text-xs font-bold text-white z-10 shadow-lg shadow-[#8B6CFF]/20">
                    {node.id}
                  </div>

                  {/* Title */}
                  <p className="text-xs sm:text-sm md:text-base font-medium text-white/90 text-center px-3 sm:px-4 relative z-10 leading-tight">
                    {node.title}
                  </p>
                </div>

                {/* Desktop Tooltip */}
                {!isMobile && (
                  <div
                    ref={(el) => (tooltipRefs.current[index] = el)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-72 p-5 rounded-xl bg-black/90 backdrop-blur-xl border border-white/10 opacity-0 pointer-events-none z-20 shadow-2xl"
                  >
                    <p className="text-base font-semibold text-white mb-2">{node.title}</p>
                    <p className="text-sm text-white/70 leading-relaxed">{node.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Row: Nodes 04, 05, 06 */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-16">
            {growthNodes.slice(3, 6).map((node, index) => {
              const actualIndex = index + 3;
              return (
                <div
                  key={node.id}
                  ref={(el) => (nodeRefs.current[actualIndex] = el)}
                  className="relative group"
                  onMouseEnter={() => handleNodeHover(actualIndex)}
                  onMouseLeave={() => handleNodeLeave(actualIndex)}
                  onClick={() => handleNodeTap(actualIndex)}
                >
                  {/* Node */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center cursor-pointer transition-all duration-300">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8B6CFF]/20 via-[#3B1A6E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#8B6CFF] to-[#3B1A6E] flex items-center justify-center text-xs font-bold text-white z-10 shadow-lg shadow-[#8B6CFF]/20">
                      {node.id}
                    </div>

                    {/* Title */}
                    <p className="text-xs sm:text-sm md:text-base font-medium text-white/90 text-center px-3 sm:px-4 relative z-10 leading-tight">
                      {node.title}
                    </p>
                  </div>

                  {/* Desktop Tooltip */}
                  {!isMobile && (
                    <div
                      ref={(el) => (tooltipRefs.current[actualIndex] = el)}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-72 p-5 rounded-xl bg-black/90 backdrop-blur-xl border border-white/10 opacity-0 pointer-events-none z-20 shadow-2xl"
                    >
                      <p className="text-base font-semibold text-white mb-2">{node.title}</p>
                      <p className="text-sm text-white/70 leading-relaxed">{node.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Bottom Panel */}
        {isMobile && activeNode !== null && (
          <div
            ref={mobilePanelRef}
            className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 z-50"
            style={{ transform: 'translateY(100%)' }}
          >
            <div className="max-w-md mx-auto">
              <p className="text-lg font-medium text-white mb-3">
                {growthNodes[activeNode].title}
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                {growthNodes[activeNode].description}
              </p>
              <button
                onClick={() => handleNodeTap(activeNode)}
                className="mt-4 text-sm text-[#8B6CFF] hover:text-[#B7A6FF] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

