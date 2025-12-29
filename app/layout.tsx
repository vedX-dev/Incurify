import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Web3Agency - Premium Web3 Marketing & Development',
  description:
    'Building the future of Web3 with innovative solutions, smart contracts, and cutting-edge technology. Your trusted partner for blockchain development.',
  keywords: ['Web3', 'Blockchain', 'Smart Contracts', 'DeFi', 'NFT', 'DAO'],
  openGraph: {
    title: 'Web3Agency - Premium Web3 Marketing & Development',
    description:
      'Building the future of Web3 with innovative solutions and cutting-edge technology.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web3Agency - Premium Web3 Marketing & Development',
    description:
      'Building the future of Web3 with innovative solutions and cutting-edge technology.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0A0A0A] text-white antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
