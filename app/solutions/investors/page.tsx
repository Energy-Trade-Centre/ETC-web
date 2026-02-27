import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Investment | For Infrastructure Funds & Portfolio Managers',
  description:
    'Institutional-grade deal pipeline, Monte Carlo modelling, IFRS 9 compliance, and portfolio analytics for energy infrastructure investors. Built for investment committees.',
  alternates: { canonical: 'https://energytradecentre.com/solutions/investors' },
};

const pillars = [
  {
    title: 'Deal pipeline visibility',
    description: 'Track every opportunity from sourcing through due diligence, term sheet, and close. Full 7-stage pipeline management with milestone alerts and document tracking.',
  },
  {
    title: 'Monte Carlo at the core',
    description: 'NPV sensitivity analysis across 40+ price scenarios. Present P10/P50/P90 bands to your IC with full model transparency. No black-box assumptions.',
  },
  {
    title: 'IFRS 9 credit risk',
    description: 'Counterparty exposure tracking, 3-stage classification, expected loss calculations, probability of default. Built for the reporting requirements institutional LPs demand.',
  },
  {
    title: '7-factor asset valuations',
    description: 'Proprietary valuation model scoring assets across revenue certainty, grid access, technology risk, and four more factors. Revenue Certainty Scores from 0-100.',
  },
  {
    title: 'Portfolio analytics',
    description: 'Technology mix, market distribution, actual vs forecast generation, revenue projections, and RE100 progress — all at a glance across your entire book.',
  },
  {
    title: 'Performance benchmarking',
    description: 'Compare actual generation against forecasts and market averages. Identify underperformers early. Optimise your portfolio mix with real performance data.',
  },
];

export default function InvestorsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold text-etc-600 uppercase tracking-widest mb-4 mono">Investment</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
              Built for<br />
              <span className="text-etc-500">investment committees.</span>
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              From deal sourcing and due diligence to portfolio management and IFRS 9
              compliance — ETC is the platform energy infrastructure investors actually
              need, not the one that was built for someone else and rebranded.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors">
                Request access <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {pillars.map((p) => (
              <div key={p.title} className="surface-1 p-8">
                <h3 className="text-base font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-[13px] text-etc-500 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-2 border-t border-subtle py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">See the platform in action</h2>
          <p className="mt-4 text-etc-400">Schedule a walkthrough tailored to your investment workflow.</p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors">
              Request access <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
