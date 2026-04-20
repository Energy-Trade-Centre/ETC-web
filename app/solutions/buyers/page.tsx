import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Procurement | For Corporate Buyers & Utilities',
  description:
    'Reduce PPA procurement risk with transparent pricing, Monte Carlo modelling, and access to 4,500+ offers. ETC gives your CFO certainty, not complexity.',
  alternates: { canonical: 'https://energytradecentre.com/solutions/buyers' },
};

const pillars = [
  {
    title: 'Market access, not broker access',
    description: 'See 4,500+ offers across 12 markets. Not a curated shortlist from a single broker — the full market with transparent P50 pricing and ETC Confidence Scores.',
  },
  {
    title: 'CFO-ready risk modelling',
    description: 'Every deal comes with Monte Carlo NPV bands, IFRS 9 credit classification, and counterparty exposure analysis. Present to your board with confidence, not caveats.',
  },
  {
    title: 'Accelerated execution via FastTrack PPA',
    description: 'Standardised terms on sub-25MW deals mean you can move from discovery to signed contract in under two weeks. No more 11-week procurement cycles.',
  },
  {
    title: '24/7 CFE verification',
    description: 'Go beyond annual RECs. Track your true hourly carbon-free energy score, identify gap hours, and model the cost to reach your 24/7 targets.',
  },
  {
    title: 'Portfolio-level intelligence',
    description: 'Monitor generation vs forecast, settlements, compliance deadlines, and RE100 progress across your entire PPA book from a single dashboard.',
  },
  {
    title: 'Counterparty transparency',
    description: 'Credit ratings, risk scores, deal history, and NDA tracking on every counterparty. Know who you\'re trading with before you start negotiating.',
  },
];

const workflow = [
  { step: '01', title: 'Discover', description: 'Browse the marketplace or publish an RFP to 4,500+ sellers. Filter by technology, geography, risk, and price.' },
  { step: '02', title: 'Model', description: 'Run Monte Carlo simulations, benchmark against market P50, and stress-test your downside. Build your investment case.' },
  { step: '03', title: 'Execute', description: 'Negotiate in the Deal Room or close instantly via FastTrack PPA. Average time from first offer to signing: 58 days.' },
  { step: '04', title: 'Manage', description: 'Track portfolio performance, settlements, 24/7 CFE scores, and compliance — all in real time from your command centre.' },
];

export default function BuyersPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold text-etc-600 uppercase tracking-widest mb-4 mono">Procurement</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
              Buy certainty.<br />
              <span className="text-etc-500">Not complexity.</span>
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              Your CFO doesn&apos;t want a PPA. They want a risk-adjusted position with
              transparent downside. ETC gives your procurement team the liquidity,
              analytics, and execution speed to deliver exactly that.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors">
                Get access <ArrowRight className="w-4 h-4" />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-16">How it works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((s) => (
              <div key={s.step}>
                <div className="mono text-4xl font-extrabold text-etc-750 mb-4">{s.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-[13px] text-etc-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Start procuring on ETC</h2>
          <p className="mt-4 text-etc-400">Join the corporate procurement teams that have moved beyond brokerage.</p>
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
