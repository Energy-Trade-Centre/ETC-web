import type { Metadata } from 'next';
import Link from 'next/link';
import TrackedCTA from '@/components/analytics/tracked-cta';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ETC | Institutional PPA platform — GB',
  description:
    'ETC is the institutional platform for energy transactions. Pricing, structuring and execution for PPAs across GB — with asset, storage and grid modules on the 2026 roadmap. Focused in GB, active in Europe.',
  alternates: { canonical: 'https://energytradecentre.com' },
};

// Section 1 — Built for energy market participants.
// Replaces the prior headline metrics / counterparty block (Slide 03 feedback: audience segmentation wins).
const audiences = [
  {
    label: 'Renewable energy developers and asset owners',
    detail: 'Wind, solar and hybrid developers, and operating owners looking for offtake and visibility.',
  },
  {
    label: 'BESS operators',
    detail: 'Battery owners and optimisers sizing revenue stack exposure and offtake structure.',
  },
  {
    label: 'Corporate and industrial energy buyers',
    detail: 'FTSE 250, Fortune 500 and industrial buyers pricing long-dated GB power.',
  },
  {
    label: 'Utilities and suppliers',
    detail: 'Retail supply, integrated generation, and structuring desks across GB and Europe.',
  },
  {
    label: 'Energy traders and advisors',
    detail: 'Merchant traders, route-to-market providers, aggregators and deal advisors.',
  },
];

// Section 1b — A new layer of energy market infrastructure.
// Replaces the earlier "Not just a broker. Not just a middleman." negative framing (Slide 04 feedback).
const infrastructurePoints = [
  'Combines intelligence, strategy, and execution in one platform',
  'Moves beyond single-transaction brokerage',
  'Designed for a rapidly evolving energy landscape',
  'Focused on transparency, access, and efficiency',
];

// Section 2 — Platforms & services + roadmap.
// Homepage teaser grid. Live modules link directly to their product pages; roadmap modules anchor
// into /platform for planned capability detail.
const platforms = [
  {
    title: 'PPA Platform',
    description:
      'Counterparty matching, structuring, and direct execution for corporate, utility and asset-backed PPAs across GB.',
    href: '/ppa',
    tag: 'LIVE NOW',
    status: 'live' as const,
  },
  {
    title: 'ETC Intel',
    description:
      'Forward pricing signals, offtaker demand, route-to-market and policy & framework coverage — built for procurement, origination and investment teams.',
    href: '/intelligence',
    tag: 'LIVE NOW',
    status: 'live' as const,
  },
  {
    title: 'Asset Exchange',
    description:
      'Trade renewable projects through development, construction and operating stages. Asset + PPA bundles where bundling adds value.',
    href: '/platform#assets',
    tag: '2026 ROADMAP',
    status: 'roadmap' as const,
  },
  {
    title: 'BESS Exchange',
    description:
      'Battery storage origination and optimisation marketplace. Revenue-stack-aware pricing across DC, FFR, BM, arbitrage and CM.',
    href: '/platform#bess',
    tag: '2026 ROADMAP',
    status: 'roadmap' as const,
  },
  {
    title: 'Grid Intelligence',
    description:
      'Constraint mapping, connection queue visibility, and regional capacity data for origination and investment decisions.',
    href: '/platform#grid',
    tag: '2026 ROADMAP',
    status: 'roadmap' as const,
  },
  {
    title: '24/7 CFE Matching',
    description:
      'Hourly carbon-free energy matching against real load profiles. Going beyond annual REGOs to true 24/7 coverage.',
    href: '/platform#cfe',
    tag: '2026 ROADMAP',
    status: 'roadmap' as const,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — kept as-is pending the user's revised hero structure */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-signal/[0.03] rounded-full blur-[200px]" />
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-36 lg:pb-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-signal signal-pulse" />
              <span className="text-[11px] font-medium text-etc-500 uppercase tracking-wider">
                Focused in GB · Active in Europe
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
              The institutional<br />
              platform for<br />
              <span className="etc-gradient">energy transactions</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-etc-400 leading-relaxed max-w-2xl">
              A data-driven approach to energy market access. ETC provides the intelligence and
              execution layer for renewable energy transactions &mdash; combining market data,
              pricing signals, and transaction workflows so participants can price, position,
              and access energy markets beyond traditional PPAs.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <TrackedCTA
                href="/intelligence"
                ctaLabel="Explore ETC Intel"
                ctaLocation="homepage_hero"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors"
              >
                Explore ETC Intel
                <ArrowRight className="w-4 h-4" />
              </TrackedCTA>
              <TrackedCTA
                href="/contact"
                ctaLabel="Request access"
                ctaLocation="homepage_hero"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-etc-300 border border-subtle hover:border-etc-600 hover:bg-white/[0.03] rounded-lg transition-colors"
              >
                Request access
              </TrackedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 — Built for energy market participants (audience segmentation). */}
      <section className="surface-2 border-y border-subtle py-20 lg:py-28" id="audience">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <div className="text-[11px] font-medium text-etc-600 uppercase tracking-wider mb-4 mono">
              Who it&apos;s for
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Built for energy market participants.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle mb-10">
            {audiences.map((a) => (
              <div key={a.label} className="surface-1 p-6">
                <h3 className="text-[13px] font-semibold text-white mb-2">{a.label}</h3>
                <p className="text-[12px] text-etc-500 leading-relaxed">{a.detail}</p>
              </div>
            ))}
          </div>

          {/* Platform coverage — UK current, network growing. */}
          <div className="grid sm:grid-cols-2 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle max-w-2xl">
            <div className="surface-1 p-6">
              <div className="text-[10px] font-semibold text-signal uppercase tracking-widest mb-2 mono">UK</div>
              <div className="text-[13px] text-etc-400">Current coverage</div>
            </div>
            <div className="surface-1 p-6">
              <div className="text-[10px] font-semibold text-signal uppercase tracking-widest mb-2 mono">Growing</div>
              <div className="text-[13px] text-etc-400">Participant network</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1c — A new layer of energy market infrastructure. */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              A new layer of energy market <span className="etc-gradient">infrastructure</span>.
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl">
            {infrastructurePoints.map((p) => (
              <div key={p} className="flex items-start gap-4 card p-6">
                <div className="w-1.5 h-1.5 rounded-full bg-signal mt-2 shrink-0" />
                <p className="text-[14px] text-etc-300 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Platforms & services + roadmap. */}
      <section className="surface-2 border-y border-subtle py-20 lg:py-28" id="platforms">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <div className="text-[11px] font-medium text-etc-600 uppercase tracking-wider mb-4 mono">
              Platforms &amp; services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What&apos;s live now &mdash; and what&apos;s next.
            </h2>
            <p className="mt-4 text-etc-400">
              The PPA Platform and ETC Intel are live today. Asset Exchange, BESS Exchange,
              Grid Intelligence and 24/7 CFE Matching are on the 2026 roadmap.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {platforms.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group surface-1 p-8 hover:bg-etc-850 transition-colors"
              >
                <div
                  className={`text-[10px] font-semibold uppercase tracking-widest mb-4 mono ${
                    p.status === 'roadmap' ? 'text-amber' : 'text-signal'
                  }`}
                >
                  {p.tag}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-signal transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-[13px] text-etc-500 leading-relaxed">{p.description}</p>
                <div className="mt-5 inline-flex items-center text-[12px] font-medium text-etc-600 group-hover:text-signal gap-1 transition-colors">
                  {p.status === 'roadmap' ? 'On the roadmap' : 'Explore'} <ArrowUpRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — ETC Intel teaser. */}
      <section className="py-20 lg:py-28" id="intel-teaser">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="text-[11px] font-medium text-signal uppercase tracking-wider mb-4 mono">
                ETC Intel &middot; Market intelligence
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Real signals from real energy markets.
              </h2>
              <p className="mt-4 text-etc-400 leading-relaxed">
                We track, structure and surface transaction-level data and market signals across
                European energy markets &mdash; helping you understand pricing, demand and timing
                before you enter a deal.
              </p>
              <div className="mt-8">
                <TrackedCTA
                  href="/intelligence"
                  ctaLabel="Explore ETC Intel"
                  ctaLocation="homepage_intel_teaser"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-signal hover:text-signal-dim transition-colors"
                >
                  Explore ETC Intel <ArrowRight className="w-4 h-4" />
                </TrackedCTA>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
              <div className="surface-1 p-6">
                <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-2 mono">01 &middot; Pricing</div>
                <h3 className="text-[13px] font-semibold text-white">Forward pricing &amp; trends</h3>
              </div>
              <div className="surface-1 p-6">
                <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-2 mono">02 &middot; Demand</div>
                <h3 className="text-[13px] font-semibold text-white">Offtaker demand</h3>
              </div>
              <div className="surface-1 p-6">
                <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-2 mono">03 &middot; Route</div>
                <h3 className="text-[13px] font-semibold text-white">Route-to-market</h3>
              </div>
              <div className="surface-1 p-6">
                <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-2 mono">04 &middot; Regulatory</div>
                <h3 className="text-[13px] font-semibold text-white">Policy &amp; frameworks</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — PPA Platform teaser. */}
      <section className="surface-2 border-y border-subtle py-20 lg:py-28" id="ppa-teaser">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-4 max-w-md">
                <div className="card p-5">
                  <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-2 mono">01</div>
                  <h3 className="text-[13px] font-semibold text-white mb-1">Counterparty matching</h3>
                  <p className="text-[12px] text-etc-500">Match against the active network.</p>
                </div>
                <div className="card p-5">
                  <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-2 mono">02</div>
                  <h3 className="text-[13px] font-semibold text-white mb-1">Structuring</h3>
                  <p className="text-[12px] text-etc-500">Pay-as-produced, baseload, shaped, sleeved and virtual variants.</p>
                </div>
                <div className="card p-5">
                  <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-2 mono">03</div>
                  <h3 className="text-[13px] font-semibold text-white mb-1">Execution</h3>
                  <p className="text-[12px] text-etc-500">Founder-led through term sheet to signed contract.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-[11px] font-medium text-signal uppercase tracking-wider mb-4 mono">
                PPA Platform &middot; Transactions
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                From indicative quote to signed contract.
              </h2>
              <p className="mt-4 text-etc-400 leading-relaxed">
                The transactional layer for PPAs across GB. Counterparty matching, structuring
                and direct execution &mdash; with pricing-widget and live-offer workflows added
                as the transactional stack matures.
              </p>
              <div className="mt-8">
                <TrackedCTA
                  href="/ppa"
                  ctaLabel="Explore PPA Platform"
                  ctaLocation="homepage_ppa_teaser"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-signal hover:text-signal-dim transition-colors"
                >
                  Explore the PPA Platform <ArrowRight className="w-4 h-4" />
                </TrackedCTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Founder (unchanged, per feedback). */}
      <section className="py-20 lg:py-28" id="founder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <div className="text-[11px] font-medium text-etc-600 uppercase tracking-wider mb-4 mono">
              Founder-led
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Built and run by people who&apos;ve actually traded this market.
            </h2>
          </div>

          <div className="card p-8 lg:p-12 max-w-4xl">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-lg bg-etc-750 flex items-center justify-center shrink-0">
                <span className="text-[14px] font-bold text-etc-300 mono">DZ</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Daniel Zemmour</h3>
                <div className="text-[13px] text-etc-500 mt-1">Founder &amp; CEO</div>
                <p className="mt-6 text-etc-400 leading-relaxed">
                  ETC exists because the market&apos;s wiring was built for a world of annual auctions
                  and opaque broker quotes. That world is over. Buyers want published prices they can
                  quote from. Sellers want counterparty visibility and fast structuring. The
                  infrastructure to do that didn&apos;t exist &mdash; so we built it, starting in GB.
                </p>
                <ul className="mt-6 space-y-2 text-[13px] text-etc-500">
                  <li>&bull; PPA origination and structuring across utility, corporate and asset-backed deals</li>
                  <li>&bull; GB market coverage with European majors on the counterparty network</li>
                  <li>&bull; Direct execution &mdash; no hand-offs, no sub-brokers</li>
                  <li>&bull; Transparent indicative pricing refreshed on the published cadence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA. */}
      <section className="surface-2 border-t border-subtle py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Let&apos;s talk.
          </h2>
          <p className="mt-4 text-etc-400 max-w-xl mx-auto">
            If you&apos;re pricing, buying, originating or investing in GB energy transactions &mdash;
            book a call. No deck-flipping. No pitch theatre. Just a conversation about what
            you&apos;re working on and whether ETC is useful to you.
          </p>
          <div className="mt-8 flex justify-center">
            <TrackedCTA
              href="/contact"
              ctaLabel="Book a call"
              ctaLocation="homepage_closing_cta"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors"
            >
              Book a call
              <ArrowRight className="w-4 h-4" />
            </TrackedCTA>
          </div>
        </div>
      </section>
    </>
  );
}
