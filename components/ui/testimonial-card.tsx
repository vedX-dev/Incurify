import { cn } from "@/lib/utils"

export interface TestimonialAuthor {
  name: string // company / client name
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
  isHero?: boolean
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className,
  isHero = false
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'

  return (
    <Card
      {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        "relative flex flex-col justify-between rounded-xl border-t",
        "bg-gradient-to-b from-[#3B1A6E]/50 to-[#0A0612]/50",
        "border-[#8B6CFF]/20",
        "p-6 sm:p-8",
        "max-w-[360px] sm:max-w-[380px]",
        "min-h-[260px]",
        "backdrop-blur-sm",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-[#8B6CFF]/40",
        isHero && [
          "scale-[1.03]",
          "border-[#8B6CFF]/40",
          "from-[#4C2A85]/70 to-[#0A0612]/60"
        ],
        className
      )}
    >
      {/* Quote watermark */}
      <span className="pointer-events-none absolute top-4 left-4 text-5xl font-serif text-white/5">
        “
      </span>

      {/* Testimonial text */}
      <p className=" z-10 text-sm sm:text-base text-white/90 leading-relaxed">
        {text}
      </p>

      {/* Company / Client name */}
      <div className="relative z-10 mt-4 pt-3 border-t border-white/10">
        <p className="text-sm font-medium text-white/70 tracking-wide">
          — {author.name}
        </p>
      </div>
    </Card>
  )
}
