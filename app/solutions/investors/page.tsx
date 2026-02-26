import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  LineChart,
  PieChart,
  Shield,
  TrendingUp,
  Target,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Investors | Infrastructure Funds & Portfolio Managers',
  description:
    'Institutional-grade portfolio management, deal pipeline tracking, IFRS 9 analytics, and asset valuation for renewable energy infrastructure investors on Energy Trade Centre.',
  alternates: { canonical: 'https://energytradecentre.com/solutions/investors' },
};

const benefits = [
  {
    icon: Briefcase,
    title: 'Deal Pipeline Visibility',
    description: 'Track every opportunity from discovery through due diligence, term sheet, and closing. Full 7-stage pipeline management.',
  },
  {
    icon: BarChart3,
    title: 'Monte Carlo Modelling',
    description: 'Run NPV sensitivity analysis across 40+ price scenarios. Present P10/P50/P90 bands to your investment committee with full transparency.',
  },
  {
    icon: PieChart,
    title: 'Portfolio Analytics',
    description: 'Technology mix, market distribution, performance vs benchmark, and revenue projections — all at a glance across your entire book.',
  },
  {
    icon: Shield,
    title: 'IFRS 9 Credit Risk',
    description: 'Counterparty exposure tracking, expected loss calculations, and 3-stage classification. Built for institutional reporting requirements.',
  },
  {
    icon: TrendingUp,
    title: '7-Factor Valuations',
    description: 'Our proprietary valuation module scores assets across revenue certainty, grid access, technology risk, and more. Make informed decisions faster.',
  },
  {
    icon: LineChart,
    title: 'Performance Benchmarking',
    description: 'Compare actual generation against forecasts and market averages. Identify underperformers early and optimise your portfolio mix.',
  },
];

export default function InvestorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              For Investors
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Institutional-Grade<br />
              <span className="gradient-text">Energy Investment Tools</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              From deal sourcing and due diligence to portfolio management and IFRS 9 compliance — ETC
              is built for the way infrastructure investors actually work.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-colors"
              >
                Request a Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 text-center mb-16">
            Built for Energy Infrastructure Investors
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

      {/* CTA */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            See the Platform in Action
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Schedule a personalised walkthrough with our team and see how ETC supports your investment workflow.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-colors"
            >
              Request a Demo <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
