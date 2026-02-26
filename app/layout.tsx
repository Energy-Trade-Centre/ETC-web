import type { Metadata } from 'next';
import Navigation from '@/components/layout/navigation';
import Footer from '@/components/layout/footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Energy Trade Centre | The Global Renewable Energy Trading Platform',
    template: '%s | Energy Trade Centre',
  },
  description:
    'The world\'s most comprehensive platform for PPA trading, renewable asset exchange, battery storage, and energy analytics. 4,500+ live offers across 28 countries.',
  keywords: [
    'PPA marketplace',
    'power purchase agreement',
    'renewable energy trading',
    'energy asset exchange',
    'battery storage marketplace',
    'BESS trading',
    'corporate PPA',
    'renewable energy procurement',
    'energy analytics',
    'grid intelligence',
    'carbon free energy',
    '24/7 CFE',
    'renewable energy platform',
    'green energy trading',
    'solar PPA',
    'wind PPA',
    'energy trade centre',
  ],
  metadataBase: new URL('https://energytradecentre.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Energy Trade Centre',
    title: 'Energy Trade Centre | The Global Renewable Energy Trading Platform',
    description:
      'Trade PPAs, renewable assets, and battery storage on the world\'s most comprehensive energy platform. 4,500+ live offers. 28 countries. One platform.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Energy Trade Centre - Global Renewable Energy Trading Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Energy Trade Centre | Global Renewable Energy Trading',
    description:
      'Trade PPAs, renewable assets, and battery storage on the world\'s most comprehensive energy platform.',
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
  alternates: {
    canonical: 'https://energytradecentre.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Energy Trade Centre',
              url: 'https://energytradecentre.com',
              logo: 'https://energytradecentre.com/favicon.svg',
              description:
                'The world\'s most comprehensive platform for PPA trading, renewable asset exchange, battery storage, and energy analytics.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'London',
                addressCountry: 'GB',
              },
              sameAs: [],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'info@energytradecentre.com',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <Navigation />
        <main className="pt-16 lg:pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
