import type { Metadata } from 'next';
import Link from 'next/link';
import TrackedCTA from '@/components/analytics/tracked-cta';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ETC Intel | Real signals from real energy markets',
  description:
    'ETC Intel: forward pricing signals, offtaker demand, route-to-market and policy & framework coverage for European energy markets. Built for procurement, origination and investment teams.',
  alternates: { canonical: 'https://energytradecentre.com/intelligence' },
};

// Slide 06 — four signal blocks that structure the ETC Intel product.
// Pricing content is intentionally narrative (not indicative numbers) until live prices are re-published.
const signalBlocks = [
  {
    tag: '01 · PRICING',
    title: 'Forward pricing & trends',
    description:
      'Forward price curves (power and GoOs), indicative PPA ranges by country and tenor, and historical deal benchmarks. The reference buyers and sellers quote from.',
  },
  {
    tag: '02 · DEMAND',
    title: 'Offtaker demand',
    description:
      'Active procurement mandates. Sector-specific demand trends. Volume by geography. Preferred contract structures.',
  },
  {
    tag: '03 · ROUTE',
    title: 'Route-to-market',
    description:
      'PPA vs merchant exposure. Hybrid structures. Aggregation strategies. Utility PPA, CfD, BESS, timing.',
  },
  {
    tag: '04 · REGULATORY',
    title: 'Policy & frameworks',
    description:
      'Subsidies & incentives. Market design evolution. Cross-border trading. ReGO and GoO.',
  },
];

// "How intelligence is generated" — the trust section anchoring the page.
const howIntelIsGenerated = [
  'Aggregated transaction data',
  'Platform activity and counterparty signals',
  'Direct market engagement',
  'Continuous monitoring of regulatory and pricing developments',
];

export default function IntelligencePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold text-signal uppercase tracking-widest mb-4 mono">
              ETC Intel &middot; Market intelligence
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
              Real signals from<br />
              real <span className="etc-gradient">energy markets</span>.
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              We track, structure and surface transaction-level data and market signals across
              European energy markets &mdash; helping you understand pricing, demand and timing
              before you enter a deal.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <TrackedCTA
                href="/contact"
                ctaLabel="Request access"
                ctaLocation="intel_hero"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors"
              >
                Request access
                <ArrowRight className="w-4 h-4" />
              </TrackedCTA>
              <TrackedCTA
                href="/contact"
                ctaLabel="Book a call"
                ctaLocation="intel_hero"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-etc-300 border border-subtle hover:border-etc-600 hover:bg-white/[0.03] rounded-lg transition-colors"
              >
                Book a call
              </TrackedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* Four signal blocks */}
      <section className="surface-2 border-y border-subtle py-20 lg:py-28" id="signals">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-3 mono">
              ETC INTEL &middot; PROPOSED PAGE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Four signal blocks.
            </h2>
            <p className="mt-3 text-[14px] text-etc-500 leading-relaxed">
              Each block is a distinct lens on the market. Paired, they give you enough context
              to price, position and transact with conviction.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {signalBlocks.map((s) => (
              <div key={s.title} className="surface-1 p-7">
                <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-3 mono">
                  {s.tag}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-[12px] text-etc-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How intelligence is generated — trust footer */}
      <section className="py-20 lg:py-28" id="how">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <div className="text-[10px] font-semibold text-signal uppercase tracking-widest mb-3 mono">
              HOW INTELLIGENCE IS GENERATED
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              The data behind the signals.
            </h2>
          </div>

          <div className="card p-8 lg:p-10">
            <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
              {howIntelIsGenerated.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-signal mt-2 shrink-0" />
                  <span className="text-[14px] text-etc-300 leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="surface-2 border-t border-subtle py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Want the full context?</h2>
          <p className="mt-4 text-etc-400">
            Book a call and we&apos;ll walk you through where GB PPA structure is currently
            moving &mdash; and where your position sits inside that.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/contact"
              ctaLabel="Book a call"
              ctaLocation="intel_closing_cta"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors"
            >
              Book a call <ArrowRight className="w-4 h-4" />
            </TrackedCTA>
          </div>
        </div>
      </section>
    </>
  );
}
