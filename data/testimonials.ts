import { TestimonialAuthor } from '@/components/ui/testimonial-card'

export interface Testimonial {
  author: TestimonialAuthor
  text: string
  href?: string
}

export const testimonials: Testimonial[] = [
  {
    author: {
      name: 'Portal of Truth',
    },
    text: 'Incurify and RouGe managed everything end-to-end from KOL coordination and AMA spaces to community management and campaign planning. The rollout felt structured, transparent, and aligned with our goals throughout the mint.',
  },
  {
    author: {
      name: 'Metaland Wolfpack',
    },
    text: "What stood out was how coordinated the entire campaign was. Creator pushes, whitelist collabs, and community events all synced perfectly. Communication was clear, and execution stayed consistent till the final phase.",
  },
  {
    author: {
      name: 'OMM Pvt Ltd',
    },
    text: 'The team handled our campaign from start to finish with real attention to detail. AMAs, creator pushes, and post-launch engagement were all managed smoothly. Their structured approach helped us stay on track and keep momentum.',
  },
  {
    author: {
      name: 'Eden Layer',
    },
    text: "The creator-led campaign was well-planned and executed. The messaging across creators stayed consistent, and the engagement felt organic — not forced or repetitive. It helped us reach new users effectively.",
  },
  {
    author: {
      name: 'Love Terminal',
    },
    text: 'Incurify’s creator outreach was on point. The content didn’t feel like ads — creators spoke in their own tone, which made engagement feel natural. The process was smooth from start to finish.',
  },
  {
    author: {
      name: 'Johannes',
    },
    text: 'A reliable team that understands how Web3 attention actually works. Execution was clean, communication was sharp, and results were steady.',
  },
];

