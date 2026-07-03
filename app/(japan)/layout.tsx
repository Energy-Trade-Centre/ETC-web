import type { Metadata } from 'next';
import GoogleAnalytics from '@/components/analytics/google-analytics';
import { GA_MEASUREMENT_ID } from '@/lib/analytics';
import '../globals.css';

// Standalone root layout for the Japanese site (jp.energytradecentre.com).
// Deliberately minimal: no English navigation or footer — the Japanese
// audience gets a self-contained page until the full JP site exists.
export const metadata: Metadata = {
  // No title template — the JP site is a single page for now, and pages set
  // their full title themselves.
  title: 'ETC | 英国・欧州の電力取引プラットフォーム — 日本語市場データ',
  description:
    '英国（GB）のPPA・蓄電池（BESS）市場データを日本語で提供。ETCは英国を拠点とする機関投資家向け電力取引プラットフォームです。',
  metadataBase: new URL('https://jp.energytradecentre.com'),
  robots: {
    index: true,
    follow: true,
  },
};

export default function JapanRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        {children}
        {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
