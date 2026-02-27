import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Platform | The ETC Command Centre',
  description:
    'Explore the ETC platform: PPA Marketplace, Asset Exchange, BESS Exchange, Analytics Engine, 24/7 CFE Matching, Grid Intelligence, Lightning PPA, and full deal lifecycle management.',
  alternates: { canonical: 'https://energytradecentre.com/platform' },
};

const modules = [
  {
    id: 'marketplace',
    tag: 'DISCOVERY',
    title: 'PPA Marketplace',
    lead: 'The deepest liquidity pool for power purchase agreements.',
    description: 'Browse 4,500+ live PPA offers across ERCOT, PJM, MISO, CAISO, Nordpool, EPEX, N2EX, and more. Every offer includes an ETC Confidence Score, counterparty credit rating, and real-time P50 pricing.',
    features: [
      'Filter by technology, market, maturity, price range, and risk profile',
      'ETC Confidence Score (0-100) on every offer — proprietary quality signal',
      'Watchlists with automated price alerts and position tracking',
      'P0/P25/P50/P75/P100 pricing with 8-quarter rolling history',
      'RFP creation with automated response aggregation',
      'Integrated due diligence documentation',
    ],
    metric: { value: '4,523', label: 'live offers' },
  },
  {
    id: 'assets',
    tag: 'EXCHANGE',
    title: 'Asset Exchange',
    lead: 'Trade renewable energy projects. Greenfield to operational.',
    description: 'The only platform where you can buy, sell, and trade renewable projects bundled with PPA offtake agreements. Our Asset+PPA bundles consistently deliver 25-35% premium over asset-only transactions.',
    features: [
      '7-factor proprietary valuation model with Revenue Certainty Scores',
      'Asset+PPA Bundling — unique ETC feature for maximum transaction value',
      'Full pipeline tracking from LOI to financial close',
      'Verified buyer & seller registry with institutional counterparties',
      'Auction and bilateral deal structures',
      'Every development stage: greenfield through secondary sale',
    ],
    metric: { value: '1,425', label: 'MW listed' },
  },
  {
    id: 'bess',
    tag: 'STORAGE',
    title: 'BESS Exchange',
    lead: 'The first institutional marketplace for battery storage.',
    description: 'Trade storage capacity, match asset owners with optimisers, structure contracts, and benchmark performance. Purpose-built for the storage revolution, not retrofitted from a PPA tool.',
    features: [
      'Flexibility Index: live pricing across DC, FFR, BM, arbitrage, CM revenue streams',
      'Algorithmic matching of assets with optimisers and offtakers',
      'Standardised contract templates: optimisation, tolling, revenue share, co-location',
      'Independent performance benchmarking vs market average',
      'Developer pipeline for pre-construction projects seeking partners',
      '300+ MWh of registered capacity with open offtake',
    ],
    metric: { value: '300+', label: 'MWh registered' },
  },
  {
    id: 'analytics',
    tag: 'ANALYTICS',
    title: 'Analytics Engine',
    lead: 'Institutional-grade modelling built for investment committees.',
    description: 'Not a spreadsheet plugin. ETC\'s Analytics Engine is a fully integrated financial modelling suite — Monte Carlo simulation, IFRS 9 credit risk, portfolio cashflow analysis, and price benchmarking — powered by live market data.',
    features: [
      'PPA Deal Modeller with real-time NPV/IRR at P10/P50/P90 confidence bands',
      'Monte Carlo simulation across 40+ price scenarios',
      'Portfolio cashflow projection: actual vs forecast over multi-year horizons',
      'IFRS 9 credit risk: 3-stage classification, expected loss, counterparty exposure',
      'Price benchmarking: contracted rates vs current market P50',
      'Customisable reports with data export for board presentations',
    ],
    metric: { value: '40+', label: 'price scenarios' },
  },
  {
    id: 'cfe',
    tag: 'CFE',
    title: '24/7 CFE Matching',
    lead: 'Beyond annual RECs. Hourly carbon-free energy verification.',
    description: 'The ETC CFE engine matches your portfolio against real load profiles hour-by-hour. See your true carbon-free energy score, identify unmatched hours, quantify the cost to close gaps, and optimise your portfolio to reach 24/7 targets.',
    features: [
      'Hourly matching of generation to consumption profiles',
      'CFE Score calculation (0-100%) with granular breakdown by hour',
      'Gap analysis: identify unmatched hours and cost-to-close',
      'Portfolio optimisation recommendations across solar, wind, and BESS',
      'Aligned with EnergyTag and 24/7 Carbon-Free Energy Compact standards',
      '4 optimal portfolio configurations ranked by cost vs coverage',
    ],
    metric: { value: '24/7', label: 'hourly resolution' },
  },
  {
    id: 'grid',
    tag: 'GRID',
    title: 'Grid Intelligence',
    lead: 'Decisions informed by the grid, not just the market.',
    description: 'Live generation mix, regional DNO capacity, constraint mapping, cannibalization analysis, and inter-regional power flows. The data layer that turns procurement decisions into infrastructure decisions.',
    features: [
      'Live generation mix with real-time renewable share and system frequency',
      'Regional DNO capacity headroom and connection queue data',
      'Cannibalization analysis: capture rate trends and revenue at risk',
      'Inter-regional power flows and interconnector utilisation',
      'Active constraint mapping with associated cost data',
      'Demand vs generation forecasting over 24-hour horizons',
    ],
    metric: { value: '12+', label: 'markets covered' },
  },
];

const execution = [
  { title: 'Lightning PPA', description: 'Standardised templates. 14-day close. Sub-25MW deals executed at the speed of the market.', metric: '14d avg.' },
  { title: 'Deal Room', description: '7-stage pipeline from discovery to signing. Full document management, negotiation tracking, milestone alerts.', metric: '58d avg.' },
  { title: 'Settlements', description: 'Automated payment tracking, reconciliation, and dispute management. Average settlement: 1.2 days.', metric: '1.2d avg.' },
  { title: 'Compliance', description: 'FERC filings, REC reporting, regulatory tracking, audit trails. Complete documentation.', metric: 'Automated' },
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold text-etc-600 uppercase tracking-widest mb-4 mono">
              The Platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
              Your command centre<br />
              for the <span className="etc-gradient">energy transition</span>
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              Six integrated modules. One platform. From PPA discovery and asset exchange
              to BESS trading, financial modelling, and grid analytics — ETC replaces
              spreadsheets, brokers, and fragmented tools with unified market infrastructure.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors"
              >
                Request access <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      {modules.map((mod, idx) => (
        <section
          key={mod.id}
          id={mod.id}
          className={`py-20 lg:py-28 border-t border-subtle ${idx % 2 === 0 ? '' : 'surface-2'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-3 mono">
                  {mod.tag}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">{mod.title}</h2>
                <p className="mt-2 text-lg text-etc-400 font-medium">{mod.lead}</p>
                <p className="mt-4 text-[14px] text-etc-500 leading-relaxed">{mod.description}</p>
                <div className="mt-8 card-elevated inline-flex items-center gap-3 px-5 py-3 rounded-lg">
                  <span className="mono text-2xl font-bold text-signal">{mod.metric.value}</span>
                  <span className="text-[12px] text-etc-500">{mod.metric.label}</span>
                </div>
              </div>
              <div className="card p-8">
                <h3 className="text-[11px] font-semibold text-etc-600 uppercase tracking-widest mb-6">
                  Key Capabilities
                </h3>
                <ul className="space-y-4">
                  {mod.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-signal mt-0.5 shrink-0" />
                      <span className="text-[13px] text-etc-300 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Execution layer */}
      <section className="surface-2 border-t border-subtle py-20 lg:py-28" id="execution">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-3 mono">
              EXECUTION
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Discovery is half the job.
            </h2>
            <p className="mt-4 text-etc-400 max-w-2xl">
              ETC manages the full lifecycle from term sheet through settlement and compliance.
              Time-to-certainty is the metric that matters.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {execution.map((e) => (
              <div key={e.title} className="surface-1 p-7">
                <div className="mono text-lg font-bold text-signal mb-3">{e.metric}</div>
                <h3 className="text-base font-semibold text-white mb-2">{e.title}</h3>
                <p className="text-[12px] text-etc-500 leading-relaxed">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">See the command centre</h2>
          <p className="mt-4 text-etc-400 max-w-xl mx-auto">
            Book a personalised walkthrough and see why the most sophisticated energy
            participants are building on ETC.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors"
            >
              Request access <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
