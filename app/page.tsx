import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Zap,
  Globe,
  BarChart3,
  Shield,
  ArrowRight,
  TrendingUp,
  Battery,
  Sun,
  Wind,
  Building2,
  Users,
  FileCheck,
  Clock,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Energy Trade Centre | The Global Renewable Energy Trading Platform',
  description:
    'Trade PPAs, renewable assets, and battery storage on the world\'s most comprehensive energy platform. 4,500+ live offers across 28 countries. Institutional-grade analytics.',
  alternates: { canonical: 'https://energytradecentre.com' },
};

const stats = [
  { value: '4,500+', label: 'Live PPA Offers', icon: FileCheck },
  { value: '28', label: 'Countries Covered', icon: Globe },
  { value: '1,400+', label: 'MW in Assets', icon: TrendingUp },
  { value: '<2 days', label: 'Avg. Settlement', icon: Clock },
];

const features = [
  {
    icon: BarChart3,
    title: 'PPA Marketplace',
    description:
      'Browse, compare, and execute PPAs from 4,500+ live offers across 12 major electricity markets. Filter by technology, risk score, maturity, and price.',
    href: '/platform#marketplace',
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    icon: Building2,
    title: 'Asset Exchange',
    description:
      'Buy, sell, and trade renewable energy projects at every development stage. Our unique Asset+PPA bundles command 25-35% premium over asset-only transactions.',
    href: '/platform#assets',
    color: 'bg-green-500/10 text-green-500',
  },
  {
    icon: Battery,
    title: 'BESS Marketplace',
    description:
      'The first integrated marketplace for battery energy storage — from asset registry and demand matching to contract structuring and performance benchmarking.',
    href: '/platform#bess',
    color: 'bg-teal-500/10 text-teal-500',
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Modelling',
    description:
      'Institutional-grade financial tools: Monte Carlo simulation, NPV/IRR modelling, IFRS 9 credit risk, and portfolio cashflow analysis across your entire book.',
    href: '/platform#analytics',
    color: 'bg-orange-500/10 text-orange-500',
  },
  {
    icon: Zap,
    title: '24/7 CFE Matching',
    description:
      'Go beyond annual RECs. Our hourly matching engine scores your portfolio against real load profiles to verify true carbon-free energy coverage.',
    href: '/platform#cfe',
    color: 'bg-green-500/10 text-green-500',
  },
  {
    icon: Globe,
    title: 'Grid Intelligence',
    description:
      'Real-time generation mix, regional capacity, constraint mapping, cannibalization analysis, and power flow data for smarter procurement decisions.',
    href: '/platform#grid',
    color: 'bg-blue-500/10 text-blue-500',
  },
];

const differentiators = [
  {
    title: 'Beyond Brokerage',
    description:
      'Unlike traditional brokers, ETC provides transparent pricing, direct market access, and self-service execution — no hidden commissions, no intermediaries.',
  },
  {
    title: 'Beyond PPAs',
    description:
      'The only platform combining PPA trading, asset exchange, BESS marketplace, and 24/7 CFE matching under one roof. Trade the full energy transition stack.',
  },
  {
    title: 'Beyond Regional',
    description:
      'While others focus on single markets, ETC spans ERCOT, PJM, MISO, CAISO, Nordpool, EPEX, and more — giving you truly global coverage from day one.',
  },
];

const audiences = [
  {
    icon: Building2,
    title: 'Corporate Buyers',
    description: 'Procure renewable energy with confidence. Compare offers, model financials, and execute PPAs — all on one platform.',
    href: '/solutions/buyers',
  },
  {
    icon: Sun,
    title: 'Developers & Sellers',
    description: 'List your projects and PPA offers to the largest pool of qualified buyers. From greenfield to operational.',
    href: '/solutions/sellers',
  },
  {
    icon: TrendingUp,
    title: 'Investors & Funds',
    description: 'Institutional-grade portfolio management, valuation tools, and deal pipeline tracking built for energy infrastructure investors.',
    href: '/solutions/investors',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-36">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-green-400 text-sm font-medium mb-8 border border-white/10">
              <Zap className="w-4 h-4" />
              Now live across 28 countries
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Trade the Global<br />
              <span className="gradient-text">Energy Transition</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              The world&apos;s most comprehensive platform for PPA trading, renewable asset exchange,
              battery storage, and energy analytics. One platform. Every market. Full transparency.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-colors"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border border-white/20 hover:bg-white/10 rounded-xl transition-colors"
              >
                Explore Platform
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                <stat.icon className="w-5 h-5 text-green-400 mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950">
              Everything You Need to Trade Energy
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              From discovery to execution, analytics to settlement — ETC is the operating system for
              professional energy trading.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group bg-white border border-gray-200 rounded-2xl p-8 card-hover"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.color} mb-5`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-navy-950 group-hover:text-green-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-3 text-gray-500 leading-relaxed">{feature.description}</p>
                <div className="mt-5 inline-flex items-center text-sm font-medium text-green-600 gap-1">
                  Learn more <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why ETC */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950">
              Why Energy Trade Centre
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Built for the way energy is traded today — not how it was traded a decade ago.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-navy-950 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Segments */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950">
              Built for Every Participant
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Whether you&apos;re buying, selling, or investing in renewable energy — ETC gives you the tools
              to move faster and trade smarter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-navy-950 rounded-2xl p-8 card-hover"
              >
                <item.icon className="w-8 h-8 text-green-400 mb-5" />
                <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">{item.description}</p>
                <div className="mt-6 inline-flex items-center text-sm font-medium text-green-400 gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Social Proof */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950">
              Trusted by Market Leaders
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Corporate buyers, developers, infrastructure funds, and utilities rely on ETC
              to source, execute, and manage their energy positions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: 'Institutional Grade', desc: 'IFRS 9 compliant analytics, audit trails, and enterprise security' },
              { icon: Users, label: '50+ Counterparties', desc: 'Active network of corporates, developers, funds, and utilities' },
              { icon: Globe, label: '12+ Markets', desc: 'ERCOT, PJM, MISO, CAISO, Nordpool, EPEX, and more' },
              { icon: Wind, label: 'All Technologies', desc: 'Solar, onshore & offshore wind, hybrid, and battery storage' },
            ].map((item) => (
              <div key={item.label} className="text-center p-6">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-semibold text-navy-950">{item.label}</h3>
                <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Transform Your Energy Trading?
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Join the platform that&apos;s powering the global energy transition. Request a demo and see
            how ETC can accelerate your renewable energy strategy.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-colors"
            >
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/market-data"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border border-white/20 hover:bg-white/10 rounded-xl transition-colors"
            >
              View Market Data
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
