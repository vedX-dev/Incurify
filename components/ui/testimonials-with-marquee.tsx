'use client'

import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string | React.ReactNode
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-transparent text-white",
      "py-12 sm:py-24 md:py-32",
      className
    )}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center sm:gap-16 px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <h2
            className="max-w-[720px] text-2xl sm:text-3xl md:text-4xl xl:text-4xl font-akira-expanded tracking-wide"
            style={{ fontWeight: 100, WebkitTextStroke: '0.1px currentColor' } as React.CSSProperties}
          >
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg max-w-[560px] text-white/70">
            {description}
          </p>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-x-hidden overflow-y-visible">
  <div className="group flex py-6 px-2 [--gap:1.5rem] [gap:var(--gap)] [--duration:160s] overflow-visible">
    <div className="flex shrink-0 animate-marquee [gap:var(--gap)] group-hover:[animation-play-state:paused]">
      {[...Array(2)].map((_, setIndex) =>
        testimonials.map((testimonial, i) => (
          <TestimonialCard
            key={`${setIndex}-${i}`}
            {...testimonial}
            isHero={i === Math.floor(testimonials.length / 2)}
          />
        ))
      )}
    </div>
  </div>

  <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-black/80 sm:block" />
  <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-black/80 sm:block" />
</div>

      </div>
    </section>
  )
}
