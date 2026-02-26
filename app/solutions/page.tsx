import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Sun,
  TrendingUp,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solutions | For Buyers, Sellers & Investors',
  description:
    'Energy Trade Centre serves corporate buyers, renewable energy developers, and infrastructure investors with tailored tools for PPA trading, asset exchange, and portfolio management.',
  alternates: { canonical: 'https://energytradecentre.com/solutions' },
};

const solutions = [
  {
    icon: Building2,
    title: 'For Corporate Buyers',
    description:
      'Procure renewable energy with full transparency. Compare 4,500+ PPA offers, model financials with Monte Carlo simulation, and execute deals — all on one platform. No hidden broker commissions.',
    href: '/solutions/buyers',
    features: ['4,500+ live PPA offers', 'CFO-ready financial modelling', '24/7 CFE matching', 'Lightning PPA execution'],
  },
  {
    icon: Sun,
    title: 'For Developers & Sellers',
    description:
      'List your PPA offers and renewable energy projects to the largest pool of qualified buyers. From greenfield to operational, reach the right counterparties faster and maximise transaction value.',
    href: '/solutions/sellers',
    features: ['Global buyer reach', 'Asset+PPA bundling', 'Auction & bilateral structures', 'Every development stage'],
  },
  {
    icon: TrendingUp,
    title: 'For Investors & Funds',
    description:
      'Institutional-grade portfolio management, deal pipeline tracking, IFRS 9 analytics, and asset valuation tools built for the way energy infrastructure investors actually work.',
    href: '/solutions/investors',
    features: ['Monte Carlo NPV modelling', 'IFRS 9 credit risk', '7-factor asset valuations', 'Portfolio benchmarking'],
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Solutions for Every<br />
              <span className="gradient-text">Market Participant</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Whether you&apos;re buying, selling, or investing in renewable energy — Energy Trade Centre gives
              you the tools to move faster and trade smarter.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {solutions.map((solution) => (
            <Link
              key={solution.title}
              href={solution.href}
              className="group grid lg:grid-cols-2 gap-8 bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 card-hover"
            >
              <div>
                <solution.icon className="w-10 h-10 text-green-500 mb-4" />
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 group-hover:text-green-600 transition-colors">
                  {solution.title}
                </h2>
                <p className="mt-4 text-gray-500 leading-relaxed">{solution.description}</p>
                <div className="mt-6 inline-flex items-center text-base font-medium text-green-600 gap-2">
                  Learn more <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center">
                <ul className="space-y-3">
                  {solution.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
