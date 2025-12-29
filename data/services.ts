import { Rocket, Code, Palette, Shield, TrendingUp, Users } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: typeof Rocket;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Web3 Strategy',
    description: 'Comprehensive blockchain strategy and roadmap planning for your Web3 journey.',
    icon: Rocket,
  },
  {
    id: '2',
    title: 'Smart Contract Development',
    description: 'Secure and audited smart contracts built with industry best practices.',
    icon: Code,
  },
  {
    id: '3',
    title: 'Brand Design',
    description: 'Cutting-edge brand identity and visual design for Web3 projects.',
    icon: Palette,
  },
  {
    id: '4',
    title: 'Security Audits',
    description: 'Thorough security assessments and penetration testing for your protocols.',
    icon: Shield,
  },
  {
    id: '5',
    title: 'Token Economics',
    description: 'Sustainable tokenomics design and economic modeling for your ecosystem.',
    icon: TrendingUp,
  },
  {
    id: '6',
    title: 'Community Building',
    description: 'Strategic community growth and engagement for lasting project success.',
    icon: Users,
  },
];
