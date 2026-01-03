'use client';

export default function ProcessSection() {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description:
        'We start by understanding your goals, challenges, and vision for the project.',
    },
    {
      step: '02',
      title: 'Strategy',
      description:
        'Develop a comprehensive roadmap with clear milestones and deliverables.',
    },
    {
      step: '03',
      title: 'Development',
      description:
        'Build and test your solution using industry best practices and cutting-edge tools.',
    },
    {
      step: '04',
      title: 'Launch & Support',
      description:
        'Deploy your project and provide ongoing maintenance and optimization.',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((phase, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-[#3B1A6E] to-[#0A0612] border border-[#8B6CFF]/20"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-[#8B6CFF] to-[#B7A6FF] bg-clip-text text-transparent opacity-30 mb-4">
                {phase.step}
              </div>
              <h3 className="text-xl font-semibold text-[#EEE9FF] mb-2">
                {phase.title}
              </h3>
              <p className="text-[#B7A6FF] leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

