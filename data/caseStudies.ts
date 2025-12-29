export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  description: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
  category: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    client: 'DeFi Protocol',
    title: 'Building a Cross-Chain DeFi Platform',
    description:
      'Launched a multi-chain DeFi protocol with advanced yield farming mechanisms and seamless cross-chain bridging.',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
    metrics: [
      { label: 'TVL', value: '$50M+' },
      { label: 'Users', value: '25K+' },
      { label: 'Chains', value: '5' },
    ],
    category: 'DeFi',
  },
  {
    id: '2',
    client: 'NFT Marketplace',
    title: 'Next-Gen NFT Trading Platform',
    description:
      'Created a gasless NFT marketplace with innovative royalty mechanisms and advanced creator tools.',
    image: 'https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg',
    metrics: [
      { label: 'Volume', value: '$120M+' },
      { label: 'Collections', value: '1,200+' },
      { label: 'Growth', value: '300%' },
    ],
    category: 'NFT',
  },
  {
    id: '3',
    client: 'DAO Infrastructure',
    title: 'Decentralized Governance Platform',
    description:
      'Developed a comprehensive DAO tooling suite with on-chain voting, treasury management, and proposal systems.',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg',
    metrics: [
      { label: 'DAOs', value: '150+' },
      { label: 'Proposals', value: '5,000+' },
      { label: 'Members', value: '50K+' },
    ],
    category: 'Infrastructure',
  },
];
