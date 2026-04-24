import type { Metadata } from 'next';
import TrackedCTA from '@/components/analytics/tracked-cta';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PPA Platform | ETC — GB',
  description:
    'ETC&#39;s PPA Platform: counterparty matching, structuring and direct execution for corporate, utility and asset-backed PPAs across GB. Founder-led, no sub-brokers, no hand-offs.',
  alternates: { canonical: 'https://energytradecentre.com/ppa' },
};

// Execution flow — how a PPA moves through ETC end-to-end.
const executionFlow = [
  {
    step: '01',
    title: 'Counterparty matching',
    description:
      'Match against the active counterparty network: utilities, European majors, independent traders, IPPs and corporate offtakers.',
  },
  {
    step: '02',
    title: 'Structuring',
    description:
      'Pay-as-produced, baseload, shaped, sleeved and virtual PPA variants. Credit, shape and curtailment premia negotiated transparently.',
  },
  {
    step: '03',
    title: 'Execution',
    description:
      'Founder-led through term sheet to signed contract. Direct execution &mdash; no sub-brokerage, no hand-offs.',
  },
  {
    step: '04',
    title: 'Post-trade',
    description:
      'Counterparty documentation, REGO treatment and settlement hand-off tracked through close.',
  },
];

// What's included today.
const capabilities = [
  'Counterparty matching across utilities, European majors, independent traders, IPPs and corporate offtakers',
  'Structuring across pay-as-produced, baseload, shaped, sleeved and virtual variants',
  'Direct execution &mdash; no sub-brokerage, no hand-offs',
  'Transparent credit, shape and curtailment premia negotiation',
  'Counterparty documentation and settlement hand-off through close',
];

export default function PPAPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold text-signal uppercase tracking-widest mb-4 mono">
              PPA Platform &middot; Transactions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
              From indicative quote<br />
              to <span className="etc-gradient">signed contract</span>.
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              The transactional layer for PPAs across GB. Counterparty matching, structuring and
              direct execution &mdash; all founder-led, with no sub-brokers and no hand-offs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <TrackedCTA
                href="/contact"
                ctaLabel="Book a call"
                ctaLocation="ppa_hero"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors"
              >
                Book a call
                <ArrowRight className="w-4 h-4" />
              </TrackedCTA>
              <TrackedCTA
                href="/intelligence"
                ctaLabel="Explore ETC Intel"
                ctaLocation="ppa_hero"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-etc-300 border border-subtle hover:border-etc-600 hover:bg-white/[0.03] rounded-lg transition-colors"
              >
                Explore ETC Intel
              </TrackedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* Execution flow */}
      <section className="surface-2 border-y border-subtle py-20 lg:py-28" id="execution">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-3 mono">
              EXECUTION FLOW
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              How a PPA moves through ETC.
            </h2>
            <p className="mt-4 text-etc-400">
              Matching, structuring, execution and post-trade &mdash; all handled directly.
              Founder-led, no sub-brokers, no hand-offs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {executionFlow.map((e) => (
              <div key={e.step} className="surface-1 p-7">
                <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-3 mono">
                  {e.step}
                </div>
                <div className="w-8 h-px bg-signal mb-5" />
                <h3 className="text-base font-semibold text-white mb-2">{e.title}</h3>
                <p
                  className="text-[12px] text-etc-500 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: e.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities live today */}
      <section className="py-20 lg:py-28" id="capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="text-[10px] font-semibold text-signal uppercase tracking-widest mb-3 mono">
                CAPABILITIES LIVE TODAY
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                What the PPA Platform does.
              </h2>
              <p className="mt-4 text-etc-400 leading-relaxed">
                Focused in GB. Covers the full lifecycle from matching to signed contract.
                Live pricing and open-offer workflows will be added as the transactional stack
                matures &mdash; we don&apos;t publish stale numbers.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-[11px] font-semibold text-etc-600 uppercase tracking-widest mb-6">
                Platform capabilities
              </h3>
              <ul className="space-y-4">
                {capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-signal mt-0.5 shrink-0" />
                    <span
                      className="text-[13px] text-etc-300 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: c }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="surface-2 border-t border-subtle py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to transact?</h2>
          <p className="mt-4 text-etc-400 max-w-xl mx-auto">
            Tell us what you&apos;re pricing or originating and we&apos;ll come back with a
            structured path to execution.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/contact"
              ctaLabel="Book a call"
              ctaLocation="ppa_closing_cta"
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
