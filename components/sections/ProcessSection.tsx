'use client';

import Image from 'next/image';

export default function ProcessSection() {
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

  return (
    <section id="process" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-12">
          <h2 className="xl:text-4xl text-3xl font-medium instrument-serif-regular tracking-wide"style={{ fontWeight: 500, WebkitTextStroke: '0.2px currentColor' } as React.CSSProperties}>
            <span className="bg-white to-gray-400 bg-clip-text text-transparent">
              Our{' '}
            </span>
            <span className="bg-gradient-to-r from-[#8B6CFF] to-[#3B1A6E] bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A proven methodology that delivers results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {processSteps.map((phase, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20"
            >
              {/* Number Badge in top right of icon area */}
              <div className="absolute top-6 right-6 z-10">
                <div className="w-8 h-8 flex items-center justify-center bg-white text-[#0A0612] text-sm font-bold rounded border border-[#8B6CFF]/30">
                  {phase.step}
                </div>
              </div>
              
              {/* Illustration/Icon Area */}
              <div className="relative mb-6 h-48 w-full rounded-lg overflow-hidden bg-[#0A0612]">
                <Image
                  src={phase.image}
                  alt={phase.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {phase.title}
              </h3>
              
              {/* Description */}
              <p className="text-white/70 leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

