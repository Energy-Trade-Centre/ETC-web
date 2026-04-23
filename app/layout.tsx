import type { Metadata } from 'next';
import Navigation from '@/components/layout/navigation';
import Footer from '@/components/layout/footer';
import GoogleAnalytics from '@/components/analytics/google-analytics';
import { GA_MEASUREMENT_ID } from '@/lib/analytics';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'ETC | Institutional PPA platform — GB',
    template: '%s | ETC',
  },
  description:
    'ETC is the institutional platform for energy transactions. Pricing, structuring and execution for PPAs across GB — with asset, storage and grid modules on the 2026 roadmap. Focused in GB, active in Europe.',
  keywords: [
    'PPA marketplace',
    'power purchase agreement',
    'GB PPA',
    'UK PPA',
    'corporate PPA',
    'renewable energy procurement',
    'offshore wind PPA',
    'onshore wind PPA',
    'solar PPA',
    'PPA pricing',
    'PPA revenue estimator',
    'energy trade centre',
    'ETC platform',
    'energy market intelligence',
    'renewable energy trading',
  ],
  metadataBase: new URL('https://energytradecentre.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'ETC',
    title: 'ETC | Institutional PPA platform — GB',
    description:
      'The institutional platform for energy transactions. PPA pricing, structuring and execution across GB. Focused in GB, active in Europe.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ETC — the institutional platform for energy transactions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ETC | Institutional PPA platform — GB',
    description:
      'The institutional platform for energy transactions. PPA pricing, structuring and execution across GB.',
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
                'The institutional platform for energy transactions. PPA pricing, structuring and execution across GB — with asset, storage and grid intelligence modules on the 2026 roadmap.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'London',
                addressCountry: 'GB',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'jsouthall@atomenergygroup.com',
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
        {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
