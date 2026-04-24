import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Company | ETC — institutional energy market infrastructure',
  description:
    'ETC is a founder-led platform for institutional energy transactions. Market intelligence, transaction workflows, and direct execution across European energy markets — starting in GB.',
  alternates: { canonical: 'https://energytradecentre.com/about' },
};

// Pillars describe how ETC operates, not the specific product shape of today.
// Deliberately avoids the "published GB PaP curves" framing so the company
// positioning doesn't collapse into one product line.
const pillars = [
  {
    title: 'Founder-led execution',
    description:
      'Every transaction runs through the founder. No sub-brokers, no hand-offs. When you book a call, you speak directly to the person who will structure the trade.',
  },
  {
    title: 'Intelligence before transaction',
    description:
      'Pricing signals, offtaker demand, route-to-market and policy coverage sit under ETC Intel. Participants understand a market before they have to price into it.',
  },
  {
    title: 'Active counterparty network',
    description:
      'Renewable developers and asset owners, BESS operators, corporate and industrial buyers, utilities and suppliers, traders and advisors &mdash; on one active network.',
  },
  {
    title: 'Infrastructure, not brokerage',
    description:
      'We build the layer the market has been missing: transparency, access and efficient execution. A platform that scales across products, not a desk that scales with headcount.',
  },
];

// Company trajectory — product-led, not "fake milestone ladder".
const milestones = [
  {
    year: 'Today',
    event:
      'ETC Intel and the PPA Platform are operational. Active across GB with European participants on the counterparty network.',
  },
  {
    year: '2026',
    event:
      'Asset Exchange, BESS Exchange, Grid Intelligence and 24/7 CFE Matching on the roadmap &mdash; broadening ETC from PPA execution to a full market infrastructure layer.',
  },
  {
    year: 'Ongoing',
    event:
      'Continuous coverage of European energy market signals &mdash; pricing, demand, route-to-market and regulatory developments.',
  },
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
                European energy markets &middot; starting in GB
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
              Founder-led<br />
              market <span className="etc-gradient">infrastructure</span>
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              ETC is the institutional platform for energy transactions. A data-driven layer
              combining market intelligence, structuring and direct execution for renewable
              energy participants across European markets.
            </p>
          </div>
        </div>
      </section>

      {/* Why we built this — broader framing */}
      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">The problem</h2>
              <p className="text-[14px] text-etc-400 leading-relaxed mb-4">
                European energy markets run on fragmented signals: broker-quoted prints for
                pricing, bilateral conversations for demand, informal channels for route-to-market,
                and regulatory updates scattered across jurisdictions. Participants spend more time
                assembling the context than acting on it.
              </p>
              <p className="text-[14px] text-etc-400 leading-relaxed mb-4">
                That wiring was built for annual auctions and opaque broker quotes. A market now
                running on shaped PPAs, co-located BESS, route-to-market diversification, 24/7
                CFE and evolving regulatory frameworks needs a different shape.
              </p>
              <p className="text-[14px] text-etc-400 leading-relaxed">
                The market does not need another broker. It needs infrastructure.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Our answer</h2>
              <p className="text-[14px] text-etc-400 leading-relaxed mb-4">
                An integrated platform for institutional energy transactions &mdash; combining
                market intelligence (pricing, demand, route-to-market, regulatory) with
                transactional workflows (matching, structuring, execution).
              </p>
              <p className="text-[14px] text-etc-400 leading-relaxed mb-4">
                Participants can position and price with context, then act on it in the same
                place. Built for developers and asset owners, BESS operators, corporate buyers,
                utilities, traders and advisors.
              </p>
              <p className="text-[14px] text-etc-400 leading-relaxed">
                A new layer of energy market infrastructure &mdash; focused on transparency,
                access and efficiency. GB is where we start; the network is European and
                growing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we're set up */}
      <section className="surface-2 border-t border-subtle py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-2xl font-bold text-white">How we&apos;re set up</h2>
            <p className="mt-2 text-[13px] text-etc-500">
              Four principles define how ETC operates &mdash; independent of any single product.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {pillars.map((p) => (
              <div key={p.title} className="surface-1 p-8">
                <div className="w-8 h-px bg-signal mb-6" />
                <h3 className="text-base font-semibold text-white mb-3">{p.title}</h3>
                <p
                  className="text-[13px] text-etc-500 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
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
                  auctions and opaque broker quotes. That world is over. Participants want
                  intelligence they can act on, counterparty visibility, and fast structuring
                  across the full energy transaction stack &mdash; not just PPAs. The
                  infrastructure to do that didn&apos;t exist, so we&apos;re building it.
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
            <div className="text-[12px] text-etc-500 mt-1">European energy markets &middot; starting in GB</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Let&apos;s talk.</h2>
          <p className="mt-4 text-etc-400 max-w-xl mx-auto">
            If you&apos;re pricing, originating, buying or investing in European energy
            transactions &mdash; book a call.
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
