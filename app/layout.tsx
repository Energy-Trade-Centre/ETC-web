import type { Metadata } from 'next';
import Navigation from '@/components/layout/navigation';
import Footer from '@/components/layout/footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'ETC | The Operating System for Energy Trading',
    template: '%s | ETC',
  },
  description:
    'ETC is the institutional-grade platform for PPA trading, renewable asset exchange, battery storage, and energy market intelligence. 4,500+ live offers. 12 markets. Full transparency.',
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
    '24/7 CFE matching',
    'PPA pricing',
    'renewable energy platform',
    'energy market intelligence',
    'solar PPA',
    'wind PPA',
    'energy trade centre',
    'ETC platform',
    'PPA revenue estimator',
    'IFRS 9 energy',
    'Monte Carlo PPA',
    'lightning PPA',
    'asset PPA bundle',
    'BESS flexibility index',
  ],
  metadataBase: new URL('https://energytradecentre.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'ETC',
    title: 'ETC | The Operating System for Energy Trading',
    description:
      'Institutional-grade platform for PPA trading, renewable asset exchange, and battery storage. 4,500+ live offers. 12 markets. Full price transparency.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ETC - The Operating System for Energy Trading',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ETC | The Operating System for Energy Trading',
    description:
      'Institutional-grade platform for PPA trading, renewable asset exchange, and battery storage.',
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
              alternateName: 'ETC',
              url: 'https://energytradecentre.com',
              logo: 'https://energytradecentre.com/favicon.svg',
              description:
                'The institutional-grade platform for PPA trading, renewable asset exchange, battery storage, and energy market intelligence.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'London',
                addressCountry: 'GB',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'info@energytradecentre.com',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'ETC',
              url: 'https://energytradecentre.com',
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
