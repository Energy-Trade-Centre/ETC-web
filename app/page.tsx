import type { Metadata } from 'next';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import PPAEstimator from '@/components/ppa-estimator';
import TrackedLink from '@/components/analytics/tracked-link';

export const metadata: Metadata = {
  title: 'ETC | The Operating System for Energy Trading',
  description:
    'ETC is the institutional-grade platform for PPA trading, renewable asset exchange, battery storage, and energy market intelligence. 4,500+ live offers. 12 markets. Full transparency.',
  alternates: { canonical: 'https://energytradecentre.com' },
};

const livePrices = [
  { market: 'ERCOT', tech: 'Solar', price: 24.50, change: +2.3 },
  { market: 'PJM', tech: 'Wind', price: 28.90, change: -1.1 },
  { market: 'Nordpool', tech: 'Solar', price: 38.60, change: +3.1 },
  { market: 'EPEX', tech: 'Wind', price: 36.80, change: +1.7 },
  { market: 'N2EX', tech: 'Solar', price: 48.90, change: -2.0 },
  { market: 'CAISO', tech: 'Wind', price: 32.50, change: -0.4 },
];


const capabilities = [
  {
    title: 'PPA Marketplace',
    description: 'Browse, price, and execute power purchase agreements from the deepest liquidity pool in the market. Risk-scored. Real-time.',
    href: '/platform#marketplace',
    tag: 'DISCOVERY',
  },
  {
    title: 'Asset Exchange',
    description: 'Trade renewable energy projects at every stage. Our Asset+PPA bundles deliver 25-35% premium over asset-only transactions.',
    href: '/platform#assets',
    tag: 'EXCHANGE',
  },
  {
    title: 'BESS Exchange',
    description: 'The first integrated marketplace for battery storage — Flexibility Index pricing, revenue stack optimisation, and performance benchmarking.',
    href: '/platform#bess',
    tag: 'STORAGE',
  },
  {
    title: 'Analytics Engine',
    description: 'Monte Carlo simulation, IFRS 9 credit risk, portfolio cashflow modelling. Built for investment committees, not spreadsheets.',
    href: '/platform#analytics',
    tag: 'ANALYTICS',
  },
  {
    title: 'Grid Intelligence',
    description: 'Live generation mix, constraint mapping, cannibalization analysis, revenue stack modelling, and regional capacity data.',
    href: '/platform#grid',
    tag: 'GRID',
  },
  {
    title: '24/7 CFE Matching',
    description: 'Hourly carbon-free energy verification against real load profiles. Go beyond annual RECs to true 24/7 coverage.',
    href: '/platform#cfe',
    tag: 'CFE',
  },
];

const proofPoints = [
  { type: 'Data Centre Operators', detail: 'Hyperscale procurement teams using ETC for multi-market PPA sourcing' },
  { type: 'Infrastructure Funds', detail: 'Top-tier energy funds managing deal pipelines and portfolio analytics on ETC' },
  { type: 'Utility-Scale Developers', detail: 'Developers listing 500MW+ of projects across North America and Europe' },
  { type: 'Corporate Sustainability', detail: 'FTSE 250 & Fortune 500 companies tracking 24/7 CFE goals on ETC' },
];

const advisors = [
  {
    domain: 'PPA & Offtake Strategy',
    initials: 'JC',
    description: 'Former utility procurement lead. 15+ years structuring PPAs across UK, Nordics, and Iberian markets. Your direct line to deal execution.',
  },
  {
    domain: 'Asset Transactions & M&A',
    initials: 'KR',
    description: 'Ex-investment banking, energy infrastructure. Led £2B+ of renewable asset transactions. Covers valuation, due diligence, and deal structuring.',
  },
  {
    domain: 'BESS & Storage Markets',
    initials: 'SP',
    description: 'Battery storage specialist. Former optimiser at a top-3 trading house. Covers revenue stacks, flexibility markets, and contract structuring.',
  },
  {
    domain: 'Grid & Regulatory',
    initials: 'MW',
    description: 'Power systems engineer turned market analyst. DNO connections, constraint modelling, and regulatory compliance across UK and European grids.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Live Price Ticker */}
      <div className="surface-2 border-b border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8 py-2 overflow-x-auto text-[11px]">
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-signal signal-pulse" />
              <span className="text-etc-600 uppercase tracking-wider font-medium">PPA P50</span>
              <span className="text-etc-700">Updated 4m ago</span>
            </div>
            {livePrices.map((p) => (
              <div key={`${p.market}-${p.tech}`} className="flex items-center gap-2 shrink-0">
                <span className="text-etc-400 font-medium">{p.market}</span>
                <span className="text-etc-500">{p.tech}</span>
                <span className="mono text-white font-medium">${p.price.toFixed(2)}</span>
                <span className={`mono font-medium ${p.change > 0 ? 'text-signal' : 'text-red'}`}>
                  {p.change > 0 ? '+' : ''}{p.change.toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-signal/[0.03] rounded-full blur-[200px]" />
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-36 lg:pb-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-signal signal-pulse" />
              <span className="text-[11px] font-medium text-etc-500 uppercase tracking-wider">
                Live across 12 markets
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
              The infrastructure<br />
              for energy<br />
              <span className="etc-gradient">liquidity</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-etc-400 leading-relaxed max-w-2xl">
              ETC is the institutional-grade platform where corporates, developers, and investors
              trade PPAs, renewable assets, and storage capacity with full price transparency
              and real-time market intelligence.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <TrackedLink
                href="/contact"
                trackLabel="Request access"
                trackLocation="home_hero"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors"
              >
                Request access
                <ArrowRight className="w-4 h-4" />
              </TrackedLink>
              <TrackedLink
                href="/intelligence"
                trackLabel="View market intelligence"
                trackLocation="home_hero"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-etc-300 border border-subtle hover:border-etc-600 hover:bg-white/[0.03] rounded-lg transition-colors"
              >
                View market intelligence
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      {/* PPA Revenue Estimator - Give value first */}
      <section className="py-20 lg:py-28" id="estimator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="text-[11px] font-medium text-signal uppercase tracking-wider mb-4 mono">
                Indicative Pricing
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                What&apos;s your energy worth?
              </h2>
              <p className="mt-4 text-etc-400 leading-relaxed">
                See indicative PPA revenue for your project based on live market data.
                No forms. No sales calls. Just the numbers.
              </p>
              <p className="mt-6 text-[13px] text-etc-600 leading-relaxed">
                Full P0-P100 pricing, counterparty matching, and deal execution available
                on the platform.
              </p>
            </div>
            <PPAEstimator />
          </div>
        </div>
      </section>
      {/* Capabilities */}
      <section className="py-20 lg:py-28" id="capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Full-stack energy trading
            </h2>
            <p className="mt-4 text-etc-400 max-w-2xl">
              Discovery to execution. Analytics to settlement. ETC isn&apos;t a marketplace — it&apos;s the
              operating system the market runs on.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {capabilities.map((cap) => (
              <TrackedLink
                key={cap.title}
                href={cap.href}
                trackLabel={cap.title}
                trackLocation="home_capabilities"
                className="group surface-1 p-8 hover:bg-etc-850 transition-colors"
              >
                <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-4 mono">
                  {cap.tag}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-signal transition-colors">
                  {cap.title}
                </h3>
                <p className="mt-3 text-[13px] text-etc-500 leading-relaxed">{cap.description}</p>
                <div className="mt-5 inline-flex items-center text-[12px] font-medium text-etc-600 group-hover:text-signal gap-1 transition-colors">
                  Explore <ArrowUpRight className="w-3 h-3" />
                </div>
              </TrackedLink>
            ))}
          </div>
        </div>
      </section>

      {/* The ETC difference - positioning against competitors */}
      <section className="surface-2 border-y border-subtle py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Not a broker. Not a matchmaker.<br />
              <span className="text-etc-500">The market itself.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Liquidity, not listings',
                description: 'Brokers show you their book. ETC shows you the market. Transparent pricing, risk scores, and real-time benchmarks across 12+ electricity markets.',
              },
              {
                title: 'Certainty, not complexity',
                description: 'Monte Carlo models your downside. IFRS 9 classifies your risk. Every tool built to reduce time-to-certainty.',
              },
              {
                title: 'Intelligence, not information',
                description: 'Cannibalization analysis. Flexibility Index. Confidence Scores. ETC doesn\'t just aggregate data — it synthesizes the signal from the noise.',
              },
            ].map((item) => (
              <div key={item.title} className="card p-8">
                <div className="w-8 h-px bg-signal mb-6" />
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-[13px] text-etc-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Intelligence - the human layer */}
      <section className="py-20 lg:py-28" id="advisory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-[11px] font-medium text-etc-600 uppercase tracking-wider mb-4 mono">
              Advisory Intelligence
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              The platform provides the data.<br />
              <span className="text-etc-500">Our sector leads provide the strategy.</span>
            </h2>
            <p className="mt-4 text-etc-400 max-w-2xl">
              Every ETC client has access to sector-specific advisors who know the markets,
              the counterparties, and the deal structures. Technology handles scale. Humans
              handle nuance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {advisors.map((a) => (
              <div key={a.domain} className="surface-1 p-6">
                <div className="w-10 h-10 rounded-lg bg-etc-750 flex items-center justify-center mb-4">
                  <span className="text-[12px] font-bold text-etc-300 mono">{a.initials}</span>
                </div>
                <h3 className="text-[13px] font-semibold text-white mb-2">{a.domain}</h3>
                <p className="text-[12px] text-etc-500 leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - institutional logos and industry types */}
      <section className="surface-2 border-y border-subtle py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-[11px] font-medium text-etc-600 uppercase tracking-wider mb-4 mono">
              Trusted by
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              The platform institutional<br />energy runs on
            </h2>
          </div>

          {/* Partner / data logos */}
          <div className="mb-12 flex flex-wrap items-center gap-x-10 gap-y-4">
            {[
              { name: 'Nordpool', role: 'Market data' },
              { name: 'EPEX SPOT', role: 'Market data' },
              { name: 'National Grid ESO', role: 'Grid data' },
              { name: 'Elexon', role: 'Settlement data' },
              { name: 'S&P Global', role: 'Credit ratings' },
            ].map((partner) => (
              <div key={partner.name} className="flex items-center gap-2">
                <div className="w-1 h-3 rounded-sm bg-etc-700" />
                <div>
                  <span className="text-[13px] font-medium text-etc-300">{partner.name}</span>
                  <span className="text-[11px] text-etc-600 ml-2">{partner.role}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {proofPoints.map((p) => (
              <div key={p.type} className="surface-1 p-8">
                <h3 className="text-base font-semibold text-white mb-2">{p.type}</h3>
                <p className="text-[13px] text-etc-500 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-6 items-center">
            {['12+ electricity markets', '28 countries', '50+ active counterparties', 'IFRS 9 compliant'].map((s) => (
              <div key={s} className="flex items-center gap-2 text-[12px] text-etc-500">
                <div className="w-1 h-1 rounded-full bg-signal" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            The energy transition needs<br />better infrastructure.
          </h2>
          <p className="mt-4 text-etc-400 max-w-xl mx-auto">
            Request access to ETC and see why the most sophisticated energy
            participants are moving their operations onto our platform.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              href="/contact"
              trackLabel="Request access"
              trackLocation="home_footer_cta"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors"
            >
              Request access
              <ArrowRight className="w-4 h-4" />
            </TrackedLink>
            <TrackedLink
              href="/platform"
              trackLabel="Explore the platform"
              trackLocation="home_footer_cta"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-etc-300 border border-subtle hover:border-etc-600 rounded-lg transition-colors"
            >
              Explore the platform
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}
