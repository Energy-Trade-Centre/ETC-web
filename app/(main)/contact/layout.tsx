import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a call — GB PPA pricing & execution',
  description:
    'Tell ETC what you are pricing, selling or underwriting and get an indicative GB PPA range, a read on the live counterparty network, and a time to talk — typically within 24 hours.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
