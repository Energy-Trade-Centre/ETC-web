import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Battery,
  Building2,
  CheckCircle2,
  FileCheck,
  Globe,
  Layers,
  LineChart,
  Network,
  Search,
  Shield,
  Zap,
  Activity,
  Target,
  Gauge,
  Scale,
  Clock,
  Handshake,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Platform',
  description:
    'Explore the Energy Trade Centre platform: PPA Marketplace, Asset Exchange, BESS Marketplace, Analytics, 24/7 CFE Matching, and Grid Intelligence. One platform for the entire energy trading lifecycle.',
  alternates: { canonical: 'https://energytradecentre.com/platform' },
};

const sections = [
  {
    id: 'marketplace',
    badge: 'Discovery',
    title: 'PPA Marketplace',
    subtitle: 'The world\'s largest PPA marketplace with 4,500+ live offers across 28 countries.',
    description:
      'Browse, compare, and execute Power Purchase Agreements from the deepest pool of renewable energy offers globally. Our marketplace spans ERCOT, PJM, MISO, CAISO, Nordpool, EPEX, N2EX, and emerging markets.',
    icon: Search,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    features: [
      'Filter by technology, market, maturity stage, and price range',
      'Risk scores and counterparty credit ratings on every offer',
      'Watchlists and price alerts for your target offers',
      'P0/P25/P50/P75/P100 pricing across 8 historical quarters',
      'RFP creation and automated response aggregation',
      'Lightning PPA for instant, standardised execution',
    ],
  },
  {
    id: 'assets',
    badge: 'Exchange',
    title: 'Asset Exchange',
    subtitle: '1,400+ MW of renewable energy projects across every development stage.',
    description:
      'The only platform where you can buy, sell, and trade renewable energy projects bundled with PPA offtake agreements. Our Asset+PPA bundles consistently command 25-35% premiums over asset-only transactions.',
    icon: Building2,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    features: [
      'Projects from greenfield through to operational and secondary sale',
      '7-factor asset valuation with Revenue Certainty Scores',
      'Unique Asset+PPA bundling for maximum transaction value',
      'Integrated buyer & seller registry with verified counterparties',
      'Full pipeline tracking from LOI to financial close',
      'Auction and bilateral transaction structures',
    ],
  },
  {
    id: 'bess',
    badge: 'Storage',
    title: 'BESS Marketplace',
    subtitle: 'The first integrated marketplace for battery energy storage systems.',
    description:
      'Trade battery storage capacity, match asset owners with optimisers, structure contracts, and benchmark performance — all in a single platform purpose-built for the storage revolution.',
    icon: Battery,
    color: 'text-teal-500',
    bg: 'bg-teal-500/10',
    features: [
      '300+ MWh of open capacity in the asset registry',
      'Algorithmic matching of assets with optimisers and offtakers',
      'Flexibility Index: DC, FFR, BM spreads, arbitrage, CM auctions',
      'Standardised contract templates: optimisation, tolling, revenue share',
      'Independent performance benchmarking vs market averages',
      'Developer pipeline for pre-construction projects seeking partners',
    ],
  },
  {
    id: 'analytics',
    badge: 'Intelligence',
    title: 'Analytics & Financial Modelling',
    subtitle: 'Institutional-grade tools that go far beyond simple price comparison.',
    description:
      'Model deals with Monte Carlo simulation, track portfolio cashflows, assess counterparty credit risk under IFRS 9, and benchmark prices — all within the platform, powered by real market data.',
    icon: BarChart3,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    features: [
      'PPA Deal Modeller with real-time NPV/IRR at P10/P50/P90 bands',
      'Monte Carlo simulation across 40+ price scenarios',
      'Portfolio cashflow: actual vs projected over multi-year horizons',
      'IFRS 9 credit risk classification and expected loss calculations',
      'Price benchmarking: your portfolio vs current market P50',
      'Customisable reports and data export',
    ],
  },
  {
    id: 'cfe',
    badge: 'Sustainability',
    title: '24/7 CFE Matching',
    subtitle: 'Go beyond annual RECs with hourly carbon-free energy verification.',
    description:
      'Our CFE engine matches your solar, wind, and storage portfolio against real load profiles hour-by-hour. See your true carbon-free energy score, identify gaps, and optimise your portfolio to reach your 24/7 targets.',
    icon: Zap,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    features: [
      'Hourly matching of generation to consumption profiles',
      'CFE score calculation (0-100%) with granular breakdown',
      'Identify unmatched hours and quantify cost to close gaps',
      'Portfolio optimisation recommendations',
      'Support for solar, wind, BESS, and hybrid assets',
      'Aligned with EnergyTag and 24/7 Carbon-Free Energy Compact standards',
    ],
  },
  {
    id: 'grid',
    badge: 'Network',
    title: 'Grid Intelligence',
    subtitle: 'Real-time grid data for smarter procurement and investment decisions.',
    description:
      'Live generation mix, regional DNO capacity headroom, constraint mapping, cannibalization analysis, and inter-regional power flows. Make decisions informed by the grid — not just the market.',
    icon: Network,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    features: [
      'Live generation mix with real-time renewable share',
      'System frequency, demand, and constraint monitoring',
      'Regional DNO capacity and connection headroom',
      'Cannibalization analysis: capture rate trends and revenue at risk',
      'Inter-regional power flows and interconnector utilisation',
      'Active constraint mapping with associated cost data',
    ],
  },
];

const executionFeatures = [
  { icon: Handshake, title: 'Deal Room', description: '7-stage deal pipeline from discovery to signing. Average closure: 58 days.' },
  { icon: FileCheck, title: 'Contract Management', description: 'Track all PPA agreements, performance, and revenue forecasts in one place.' },
  { icon: Scale, title: 'Settlements', description: 'Automated payment tracking, reconciliation, and dispute management. Avg: 1.2 days.' },
  { icon: Shield, title: 'Compliance', description: 'Regulatory tracking, audit trails, and full compliance documentation.' },
  { icon: Target, title: 'CRM & Relationships', description: '50+ counterparties with NDA tracking, relationship scoring, and activity logs.' },
  { icon: Gauge, title: 'Performance Monitoring', description: 'Track portfolio generation vs forecast with real-time variance analysis.' },
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              One Platform.<br />
              <span className="gradient-text">Every Market.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              From PPA discovery and asset exchange to battery storage, financial modelling, and grid
              analytics — Energy Trade Centre is the operating system for professional energy trading.
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

      {/* Platform Sections */}
      {sections.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-20 lg:py-28 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${section.bg} ${section.color} mb-4`}>
                  <section.icon className="w-4 h-4" />
                  {section.badge}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-950">{section.title}</h2>
                <p className="mt-2 text-lg text-gray-500 font-medium">{section.subtitle}</p>
                <p className="mt-4 text-gray-600 leading-relaxed">{section.description}</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Key Capabilities</h3>
                <ul className="space-y-4">
                  {section.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Execution & Operations */}
      <section className="py-20 lg:py-28 bg-navy-950" id="execution">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Execution & Operations</h2>
            <p className="mt-4 text-lg text-gray-400">
              Discovery is only half the job. ETC manages the full lifecycle from deal negotiation through
              settlement and compliance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {executionFeatures.map((feat) => (
              <div key={feat.title} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <feat.icon className="w-7 h-7 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950">See It in Action</h2>
          <p className="mt-4 text-lg text-gray-500">
            Book a personalised demo and discover how Energy Trade Centre can transform your energy
            trading operations.
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
