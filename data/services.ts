export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  number: string;
}

export const services: Service[] = [
  {
    id: '1',
    number: '01',
    title: 'Go-to-market strategies',
    description: 'Launch planning and execution built around positioning, timing, and narrative clarity - so projects ship with direction not noise.',
    image: '/images/services/go_to_market_strategy.png',
  },
  {
    id: '2',
    number: '02',
    title: 'Founding Creator',
    description: 'We help founders become the first credible voice of the project - shaping narrative, presence on X and early trust before scaling creators.',
    image: '/images/services/data_driven_marketing_campaigns.png',
  },
  {
    id: '3',
    number: '03',
    title: 'Creator and KOLs Campaign',
    description: 'Creator and KOLs campaigns focused on education, exploration and discussion - not forced promotion or one-off posts.',
    image: '/images/services/kols_marketing.png',
  },
  {
    id: '4',
    number: '04',
    title: 'Strategic Advisory & Consulting',
    description: 'Hands-on guidance for founders navigating positioning, growth decisions and execution trade-offs over time.',
    image: '/images/services/strategic_advisory_and_consulting.png',
  },
  {
    id: '5',
    number: '05',
    title: 'Social Media Management',
    description: 'Content and account management focused on narrative consistency, founder voice and ongoing relevance on X.',
    image: '/images/services/social_media_management.png',
  },
  {
    id: '6',
    number: '06',
    title: 'Community Building',
    description: 'Community systems built for participation and continuity not short-term engagement spikes or giveaway culture.',
    image: '/images/services/community_building.png',
  },
  {
    id: '7',
    number: '07',
    title: 'Brand Building',
    description: 'Brand positioning, messaging, and identity built to be clear, recognizable and credible inside Web3 culture.',
    image: '/images/services/brand_marketing.png',
  },
  {
    id: '8',
    number: '08',
    title: 'Strategic Partnerships',
    description: 'Partnerships built through AMAs, whitelist collaborations, creator-led spaces and aligned project relationships at the right moments.',
    image: '/images/services/public_relations.png',
  },
];
