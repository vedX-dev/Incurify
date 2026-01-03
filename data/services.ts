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
    description: 'End-to-end launch strategies built around product-market fit, timing, and distribution - designed to drive early traction, adoption, and scalable growth.',
    image: '/images/services/go_to_market_strategy.png',
  },
  {
    id: '2',
    number: '02',
    title: 'Data-Driven Marketing Campaigns',
    description: 'Performance-driven campaigns powered by insights, analytics, and continuous experimentation - optimizing reach, conversion, and ROI at every stage of the funnel.',
    image: '/images/services/data_driven_marketing_campaigns.png',
  },
  {
    id: '3',
    number: '03',
    title: 'KOLs Marketing',
    description: 'Strategic KOL partnerships crafted for credibility and influence - aligning creators, narratives, and platforms to drive awareness, trust, and real engagement.',
    image: '/images/services/kols_marketing.png',
  },
  {
    id: '4',
    number: '04',
    title: 'Strategic Advisory & Consulting',
    description: 'High-impact guidance on positioning, growth strategy, and market decisions - helping brands move with clarity, confidence, and long-term vision.',
    image: '/images/services/strategic_advisory_and_consulting.png',
  },
  {
    id: '5',
    number: '05',
    title: 'Social Media Management',
    description: 'Platform-native content and growth strategies designed to build presence, consistency, and engagement - turning attention into brand equity.',
    image: '/images/services/social_media_management.png',
  },
  {
    id: '6',
    number: '06',
    title: 'Community Building',
    description: 'Purpose-driven communities focused on participation, loyalty, and retention - creating sustainable ecosystems that grow with your brand.',
    image: '/images/services/community_building.png',
  },
  {
    id: '7',
    number: '07',
    title: 'Brand Building',
    description: 'Distinct brand identities shaped by clarity, consistency, and storytelling - strengthening recognition, authority, and long-term market relevance.',
    image: '/images/services/brand_marketing.png',
  },
  {
    id: '8',
    number: '08',
    title: 'Public Relations (PR)',
    description: 'Narrative-led PR strategies that amplify credibility and visibility - positioning brands through media, announcements, and reputation management.',
    image: '/images/services/public_relations.png',
  },
];
