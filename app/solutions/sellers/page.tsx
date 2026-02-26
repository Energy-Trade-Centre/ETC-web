import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Users,
  TrendingUp,
  Layers,
  Clock,
  Globe,
  Zap,
  Target,
  Megaphone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Sellers | Developers & Asset Owners',
  description:
    'List your PPA offers and renewable energy projects to the largest pool of qualified buyers. From greenfield to operational — maximise your deal flow on Energy Trade Centre.',
  alternates: { canonical: 'https://energytradecentre.com/solutions/sellers' },
};

const benefits = [
  {
    icon: Users,
    title: 'Access Qualified Buyers',
    description: 'Connect directly with corporates, utilities, infrastructure funds, and pension funds actively seeking renewable energy offtake.',
  },
  {
    icon: Megaphone,
    title: 'Maximum Visibility',
    description: 'Your offers are seen by the widest pool of energy buyers on any platform. No more relying on a single broker\'s limited Rolodex.',
  },
  {
    icon: Layers,
    title: 'Asset+PPA Bundles',
    description: 'Bundle asset sales with PPA offtake agreements for 25-35% higher transaction values. A feature unique to Energy Trade Centre.',
  },
  {
    icon: TrendingUp,
    title: 'Fair Price Discovery',
    description: 'Transparent market data and auction mechanics ensure you achieve the best price — not the best price for the broker.',
  },
  {
    icon: Clock,
    title: 'Faster Time to Close',
    description: 'Standardised workflows, integrated deal rooms, and Lightning PPA mean faster execution and fewer stalled negotiations.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'List in any of 28 countries across 12 major electricity markets. Reach buyers in markets you couldn\'t access before.',
  },
];

export default function SellersPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              For Sellers
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Maximise Your<br />
              <span className="gradient-text">Deal Flow & Value</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              List your PPA offers and renewable energy projects to the largest pool of verified buyers.
              From greenfield development to operational assets — reach the right counterparties faster.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-colors"
              >
                List Your Projects <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 text-center mb-16">
            Why Developers & Asset Owners Choose ETC
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 bg-white border border-gray-200 rounded-2xl card-hover">
                <benefit.icon className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold text-navy-950 mb-2">{benefit.title}</h3>
                <p className="text-gray-500 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Stages */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 text-center mb-4">
            Every Stage of Development
          </h2>
          <p className="text-lg text-gray-500 text-center mb-16 max-w-2xl mx-auto">
            Whether your project is at concept stage or fully operational, ETC matches you with the right buyers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Greenfield', 'Ready to Build', 'Notice to Proceed', 'Under Construction', 'Operational', 'Secondary Sale'].map((stage) => (
              <div key={stage} className="bg-white border border-gray-200 rounded-xl px-6 py-4 text-center">
                <span className="font-medium text-navy-950">{stage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Reach More Buyers?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join 1,300+ developers listing on Energy Trade Centre. Get your projects in front of the
            most active buyers in the market.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-colors"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
