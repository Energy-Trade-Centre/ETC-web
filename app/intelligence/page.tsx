import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import TrackedLink from '@/components/analytics/tracked-link';

export const metadata: Metadata = {
  title: 'Market Intelligence | PPA Pricing, Trends & Research',
  description:
    'ETC Market Intelligence: live PPA pricing across 12 markets, quarterly trend analysis, BESS Flexibility Index, cannibalization data, and downloadable research reports.',
  alternates: { canonical: 'https://energytradecentre.com/intelligence' },
};

const markets = [
  { name: 'ERCOT', region: 'US — Texas', solar: 24.50, wind: 22.80, change: +2.3 },
  { name: 'PJM', region: 'US — Mid-Atlantic', solar: 31.20, wind: 28.90, change: -1.1 },
  { name: 'MISO', region: 'US — Midwest', solar: 26.80, wind: 25.10, change: +0.8 },
  { name: 'CAISO', region: 'US — California', solar: 28.40, wind: 32.50, change: -0.4 },
  { name: 'Nordpool', region: 'Northern Europe', solar: 38.60, wind: 34.20, change: +3.1 },
  { name: 'EPEX', region: 'Central Europe', solar: 42.10, wind: 36.80, change: +1.7 },
  { name: 'N2EX', region: 'United Kingdom', solar: 48.90, wind: 42.30, change: -2.0 },
  { name: 'AEMO', region: 'Australia', solar: 32.70, wind: 38.40, change: +4.2 },
];

const reports = [
  {
    title: 'Q4 2025 Global PPA Pricing Review',
    description: 'Quarterly analysis of PPA pricing trends across all ETC-covered markets. P0-P100 breakdowns, technology splits, and QoQ movements.',
    tag: 'QUARTERLY REPORT',
  },
  {
    title: 'BESS Revenue Stack: 2025 Performance Analysis',
    description: 'How battery storage assets performed across DC, FFR, BM, and arbitrage revenue streams. Benchmarks and optimiser comparison.',
    tag: 'BESS RESEARCH',
  },
  {
    title: 'Cannibalization Risk in European Markets',
    description: 'Quantifying the capture rate decline for solar and wind assets as renewable penetration increases. Market-by-market analysis.',
    tag: 'GRID ANALYSIS',
  },
  {
    title: 'Corporate PPA Procurement Trends',
    description: 'How data centres, industrials, and corporates are structuring PPA portfolios. 24/7 CFE adoption rates and multi-market strategies.',
    tag: 'MARKET TRENDS',
  },
];

export default function IntelligencePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold text-etc-600 uppercase tracking-widest mb-4 mono">
              Market Intelligence
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
              Signal from<br />
              <span className="text-etc-500">the noise.</span>
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              Live PPA pricing, BESS revenue benchmarks, cannibalization data, and
              quarterly research — sourced from the largest renewable energy transaction
              dataset in the market.
            </p>
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="border-t border-subtle py-20 lg:py-28" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white">PPA Price Snapshot</h2>
            <p className="mt-2 text-[13px] text-etc-500">
              Indicative P50 prices. Full P0-P100 range with 8-quarter history available on the platform.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-subtle">
                  <th className="text-left py-3 px-4 text-[10px] font-semibold text-etc-600 uppercase tracking-widest">Market</th>
                  <th className="text-left py-3 px-4 text-[10px] font-semibold text-etc-600 uppercase tracking-widest">Region</th>
                  <th className="text-right py-3 px-4 text-[10px] font-semibold text-etc-600 uppercase tracking-widest">Solar P50</th>
                  <th className="text-right py-3 px-4 text-[10px] font-semibold text-etc-600 uppercase tracking-widest">Wind P50</th>
                  <th className="text-right py-3 px-4 text-[10px] font-semibold text-etc-600 uppercase tracking-widest">QoQ</th>
                </tr>
              </thead>
              <tbody>
                {markets.map((m) => (
                  <tr key={m.name} className="border-b border-subtle hover:bg-white/[0.02]">
                    <td className="py-3.5 px-4 text-[13px] font-semibold text-white">{m.name}</td>
                    <td className="py-3.5 px-4 text-[13px] text-etc-500">{m.region}</td>
                    <td className="py-3.5 px-4 text-right mono text-[13px] text-etc-300">${m.solar.toFixed(2)}</td>
                    <td className="py-3.5 px-4 text-right mono text-[13px] text-etc-300">${m.wind.toFixed(2)}</td>
                    <td className={`py-3.5 px-4 text-right mono text-[13px] font-medium ${m.change > 0 ? 'text-signal' : 'text-red'}`}>
                      {m.change > 0 ? '+' : ''}{m.change.toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-[10px] text-etc-600">
            Indicative P50 values for illustration. Live pricing with full percentile ranges updated continuously for platform users.
          </p>
        </div>
      </section>

      {/* Research */}
      <section className="surface-2 border-t border-subtle py-20 lg:py-28" id="research">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white">Research & Reports</h2>
            <p className="mt-2 text-[13px] text-etc-500">
              Institutional-quality research produced by the ETC intelligence team. Available to platform users.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {reports.map((r) => (
              <div key={r.title} className="surface-1 p-8">
                <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-3 mono">{r.tag}</div>
                <h3 className="text-base font-semibold text-white mb-2">{r.title}</h3>
                <p className="text-[13px] text-etc-500 leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Access the full dataset</h2>
          <p className="mt-4 text-etc-400">
            Complete P0-P100 pricing, historical trends, deal-level data, and downloadable
            research reports — available on the ETC platform.
          </p>
          <div className="mt-8">
            <TrackedLink
              href="/contact"
              trackLabel="Request access"
              trackLocation="intelligence_cta"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors"
            >
              Request access <ArrowRight className="w-4 h-4" />
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}
