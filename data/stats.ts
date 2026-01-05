export interface Stat {
  id: string;
  value: string;
  label: string;
}

export const stats: Stat[] = [
  {
    id: '1',
    value: '100+',
    label: 'Projects Delivered',
  },
  {
    id: '2',
    value: '$10000+',
    label: 'Total Value Locked',
  },
  {
    id: '3',
    value: '50+',
    label: 'Team Members',
  },
  {
    id: '4',
    value: '25+',
    label: 'Client Served',
  },
];

export interface Feature {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: '1',
    number: '01',
    title: 'Web3 Expertise',
    description:
      'Deep knowledge of blockchain technology, smart contracts, and decentralized systems.',
  },
  {
    id: '2',
    number: '02',
    title: 'Proven Track Record',
    description:
      'Successfully delivered 100+ projects with a combined TVL exceeding $500M.',
  },
  {
    id: '3',
    number: '03',
    title: 'End-to-End Solutions',
    description:
      'From strategy to deployment, we provide comprehensive Web3 services.',
  },
  {
    id: '4',
    number: '04',
    title: 'Security First',
    description:
      'All smart contracts are thoroughly audited and tested for maximum security.',
  },
];
