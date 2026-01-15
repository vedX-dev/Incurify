import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import SmoothScroll from '@/components/SmoothScroll';
import FontLoader from '@/components/FontLoader';
import PageTransition from '@/components/PageTransition';

export const metadata = {
  title: 'Incurify - Web3 Marketing Agency',
  description:
    'Incurify is a Web3 growth partner helping projects build and sustain traction from launch to scale.',
  icons: {
    icon: '/icons/icon.png',
    apple: '/icons/apple-touch-icon.png', // Add 180x180 PNG
  },
  
  // Open Graph (Facebook, LinkedIn, WhatsApp, Discord, etc.)
  openGraph: {
    title: 'Incurify - Web3 Marketing Agency',
    description:
      'Incurify is a Web3 growth partner helping projects build and sustain traction from launch to scale.',
    url: 'https://incurify.vercel.app', // Replace with your actual domain
    siteName: 'Incurify',
    images: [
      {
        url: '/images/metadata/opengraph.jpg', // Should be 1200x630px
        width: 1200,
        height: 630,
        alt: 'Incurify – Web3 Marketing Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter/X
  twitter: {
    card: 'summary_large_image',
    title: 'Incurify - Web3 Marketing Agency',
    description:
      'Scale your Web3 project with Incurify — influencer marketing, community building, PR, and blockchain growth strategy.',
    images: ['/images/metadata/twitter.jpg'], // Can be same as OG or 1200x675px
    creator: '@Incurify_Web3', // Add your Twitter handle
    site: '@Incurify_Web3', // Add your Twitter handle
  },

  // Additional meta tags
  metadataBase: new URL('https://incurify.vercel.app'), // Replace with your domain
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add if you have Google Search Console
  },
  other: {
    'font-display': 'swap',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: '#000000' }} suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for faster loading - Critical for preventing FOUC */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Load fonts with font-display: swap to prevent FOUC */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Instrument+Serif:ital@0;1&family=Onest:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        {/* Calendly Widget Script */}
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </head>
      <body className="font-onest bg-black text-[#EEE9FF] antialiased" suppressHydrationWarning>
        {/* Blue Spotlight Background - Fixed at Center for entire website */}
        <div
          className="fixed inset-0 z-[2] pointer-events-none"
          style={{
            background: `
              radial-gradient(
                circle at 50% 50%,
                rgba(59, 130, 246, 0.12) 0%,
                rgba(59, 130, 246, 0.06) 20%,
                rgba(0, 0, 0, 0.0) 60%
              )
            `,
          }}
        />
        <FontLoader />
        <SmoothScroll>
        <Navigation />
          <PageTransition>
        <main className="min-h-screen">{children}</main>
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
