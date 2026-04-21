import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Company | Founder-led, GB-focused',
  description:
    'ETC is a founder-led platform for institutional energy transactions, focused in GB and active in Europe. Built to replace broker quotes and spreadsheets with published indicative curves and direct execution.',
  alternates: { canonical: 'https://energytradecentre.com/about' },
};

// Honest four-pillar positioning — replaces the four fabricated
// "Renewable Energy Advisory / Quantitative Analytics / Grid & Infrastructure / Platform Engineering"
// domain cards with what we're actually structured to do.
const pillars = [
  {
    title: 'Founder-led execution',
    description:
      'Every deal runs through the founder. No sub-brokers, no hand-offs. If you book a call, you speak to the person who will structure the trade.',
  },
  {
    title: 'Published indicative curves',
    description:
      'We publish PaP ranges by technology and tenor on a cadence. Buyers and sellers quote from the same reference instead of chasing brokers for prints.',
  },
  {
    title: 'Counterparty network',
    description:
      'Big 6 utilities, European energy majors, independent traders & originators, IPPs & asset owners, and corporate offtakers &mdash; on the active network.',
  },
  {
    title: 'GB-native, Europe-connected',
    description:
      'GB is the focus. European majors are on the counterparty network. We do not pretend to cover every market — we cover the one we know properly.',
  },
];

// Replaces the "2022 … 2025 expanded to 12+ markets / 4,500+ live offers / 50+ counterparties"
// fabricated milestone ladder. Honest about what exists today and what is on the roadmap.
const milestones = [
  { year: 'Today', event: 'PPA Marketplace & Brokerage and ETC Intel operational across GB.' },
  { year: '2026', event: 'Asset Exchange, BESS Exchange, Grid Intelligence and 24/7 CFE Matching on the roadmap.' },
  { year: 'Ongoing', event: 'Indicative GB PPA curves refreshed on the published cadence.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-signal signal-pulse" />
              <span className="text-[11px] font-medium text-etc-500 uppercase tracking-wider">
                Focused in GB · Active in Europe
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
              Founder-led<br />
              market <span className="etc-gradient">infrastructure</span>
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              ETC is the institutional platform for energy transactions. Focused in GB, active in
              Europe, built to replace broker quotes and spreadsheets with published indicative
              curves and direct execution.
            </p>
          </div>
        </div>
      </section>

      {/* Why we built this */}
      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">The problem</h2>
              <p className="text-[14px] text-etc-400 leading-relaxed mb-4">
                GB PPA structure still runs on broker-quoted prints, email chains and
                fragmented spreadsheets. Buyers have no transparent reference, sellers have
                no efficient way to reach the full counterparty set, and every deal repeats
                the same discovery work from scratch.
              </p>
              <p className="text-[14px] text-etc-400 leading-relaxed mb-4">
                That wiring was built for annual auctions and opaque broker quotes. For a
                market that now needs PaP curves, shaped products, sleeved structures,
                REGO handling and 24/7 CFE on the horizon, it is the wrong shape.
              </p>
              <p className="text-[14px] text-etc-400 leading-relaxed">
                The market does not need another broker. It needs infrastructure.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Our answer</h2>
              <p className="text-[14px] text-etc-400 leading-relaxed mb-4">
                A published set of indicative GB PPA curves that both sides can quote from.
                An active counterparty network spanning the Big 6, European majors,
                independent traders, IPPs and corporate offtakers. Founder-led structuring
                through to signed contract.
              </p>
              <p className="text-[14px] text-etc-400 leading-relaxed">
                Not a broker. Not a matchmaker. Infrastructure &mdash; starting in GB, with
                asset, storage, grid and CFE modules on the 2026 roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we're structured — replaces the fake domain-team grid */}
      <section className="surface-2 border-t border-subtle py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-2xl font-bold text-white">How we&apos;re set up</h2>
            <p className="mt-2 text-[13px] text-etc-500">
              Not a team-page theatre. The four things that actually define how ETC operates.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {pillars.map((p) => (
              <div key={p.title} className="surface-1 p-8">
                <div className="w-8 h-px bg-signal mb-6" />
                <h3 className="text-base font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-[13px] text-etc-500 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder — carried over from homepage, shortened */}
      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="text-[11px] font-medium text-etc-600 uppercase tracking-wider mb-4 mono">
              Founder
            </div>
          </div>
          <div className="card p-8 lg:p-12">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-lg bg-etc-750 flex items-center justify-center shrink-0">
                <span className="text-[14px] font-bold text-etc-300 mono">DZ</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Daniel Zemmour</h3>
                <div className="text-[13px] text-etc-500 mt-1">Founder &amp; CEO</div>
                <p className="mt-6 text-etc-400 leading-relaxed">
                  ETC exists because the market&apos;s wiring was built for a world of annual
                  auctions and opaque broker quotes. That world is over. Buyers want published
                  prices they can quote from. Sellers want counterparty visibility and fast
                  structuring. The infrastructure to do that didn&apos;t exist &mdash; so we
                  built it, starting in GB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where we are */}
      <section className="surface-2 border-t border-subtle py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-12">Where we are</h2>
          <div className="space-y-6">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-8">
                <div className="mono text-base font-bold text-signal w-20 shrink-0 pt-1">{m.year}</div>
                <div className="text-[14px] text-etc-400 leading-relaxed">{m.event}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 card px-8 py-5 inline-block">
            <div className="text-[11px] font-medium text-etc-600 uppercase tracking-widest mb-1">Based</div>
            <div className="text-base font-semibold text-white">London, United Kingdom</div>
            <div className="text-[12px] text-etc-500 mt-1">Focused in GB · active in Europe</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Let&apos;s talk.</h2>
          <p className="mt-4 text-etc-400 max-w-xl mx-auto">
            If you&apos;re pricing, buying, originating or investing in GB energy transactions
            &mdash; book a call.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors"
            >
              Book a call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
