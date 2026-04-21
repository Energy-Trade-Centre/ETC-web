import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Procurement | For utilities & corporate offtakers',
  description:
    'Quote GB PPAs from published indicative PaP curves. Counterparty matching across utilities, European majors, independent traders and IPPs. Founder-led structuring and execution.',
  alternates: { canonical: 'https://energytradecentre.com/solutions/buyers' },
};

const pillars = [
  {
    title: 'Published reference curves',
    description:
      'Indicative GB PaP ranges by technology and tenor, refreshed on the published cadence. Quote from a reference both sides can see, instead of chasing broker prints.',
  },
  {
    title: 'Counterparty network, not broker access',
    description:
      'Match against the active network: Big 6 utilities, European energy majors, independent traders & originators, IPPs and corporate offtakers. Not a curated shortlist from one broker.',
  },
  {
    title: 'Structuring, not just matching',
    description:
      'PaP, baseload, shaped, sleeved and virtual PPA structures. Shape premium, credit premium, curtailment treatment and REGO handling negotiated transparently.',
  },
  {
    title: 'Founder-led execution',
    description:
      'One line of accountability from first conversation to signed contract. No sub-brokers, no hand-offs, no &quot;I need to check with the desk&quot;.',
  },
  {
    title: 'GB-native, Europe-connected',
    description:
      'GB is the focus. European majors are on the network. We cover the market we know properly, and we are honest about where our coverage stops.',
  },
  {
    title: 'Honest about the roadmap',
    description:
      'Asset Exchange, BESS Exchange, Grid Intelligence and 24/7 CFE Matching are on the 2026 roadmap. We will not sell you a product that does not exist yet.',
  },
];

const workflow = [
  {
    step: '01',
    title: 'Indicative quote',
    description:
      'Tell us technology, tenor and shape. We come back with an indicative PaP range from the published curves, plus any relevant structuring notes.',
  },
  {
    step: '02',
    title: 'Counterparty match',
    description:
      'We match against the active network &mdash; utilities, majors, independents, IPPs &mdash; and surface the counterparties actually pricing your shape.',
  },
  {
    step: '03',
    title: 'Structure',
    description:
      'PaP vs baseload vs shaped vs sleeved. Shape, credit and REGO premia negotiated directly. Term sheet in hand.',
  },
  {
    step: '04',
    title: 'Execute',
    description:
      'Founder-led through contract. Direct line to the person structuring your trade, from first call to signed PPA.',
  },
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
              Quote from a<br />
              <span className="text-etc-500">published curve.</span>
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              Your board doesn&apos;t want a broker print. They want a defensible number they
              can quote against. ETC gives procurement and origination teams a published
              GB reference, a real counterparty network and founder-led execution.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors">
                Book a call <ArrowRight className="w-4 h-4" />
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
          <h2 className="text-3xl font-bold text-white">Let&apos;s talk.</h2>
          <p className="mt-4 text-etc-400">
            Tell us what you&apos;re pricing and we&apos;ll come back with an indicative range
            and the counterparties actually transacting in that shape today.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors">
              Book a call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
