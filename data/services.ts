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
    title: 'Go-to-Market & Launch Strategy',
    description: 'We work with you to define your positioning, messaging, narrative, and launch roadmap. You\'ll get a clear strategy for what you\'re shipping, who it\'s for, and how to execute ~ so you\'re not improvising your way through launch week.',
    image: '/images/services/go_to_market_strategy.png',
  },
  {
    id: '2',
    number: '02',
    title: 'Founder Positioning & Voice Development',
    description: 'Your founder needs credibility before you scale your project. We handle content creation, social strategy, and community engagement so your founder builds trust and following organically ~ before you ask people to care about the product.',
    image: '/images/services/data_driven_marketing_campaigns.png',
  },
  {
    id: '3',
    number: '03',
    title: 'Creator & KOL Campaigns',
    description: 'We coordinate creators to post within the same tight window, creating concentrated awareness and social proof. Not random influencer deals that trickle out over weeks. Coordinated momentum that actually moves the needle.',
    image: '/images/services/kols_marketing.png',
  },
  {
    id: '4',
    number: '04',
    title: 'Community & Strategic Partnerships',
    description: 'We set up your community infrastructure (Discord, Telegram) and build systems for real engagement. Plus we source and execute strategic partnerships ~ AMAs, whitelist collabs, co-marketing with projects that make sense for your ecosystem.',
    image: '/images/services/strategic_advisory_and_consulting.png',
  },
];
