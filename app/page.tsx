import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import PPAEstimator from '@/components/ppa-estimator';

export const metadata: Metadata = {
  title: 'ETC | Institutional PPA platform — GB',
  description:
    'ETC is the institutional platform for energy transactions. Pricing, structuring and execution for PPAs across GB — with asset, storage and grid modules on the 2026 roadmap. Focused in GB, active in Europe.',
  alternates: { canonical: 'https://energytradecentre.com' },
};

// GB H2 2025 indicative PaP ranges — server-rendered, deck-verified.
// Ticker replaces the old fabricated live-price feed.
const indicativeRanges = [
  { tech: 'Offshore Wind', tenor: '3Y', low: 75, high: 78 },
  { tech: 'Offshore Wind', tenor: '5Y', low: 73, high: 76 },
  { tech: 'Onshore Wind', tenor: '3Y', low: 55, high: 62 },
  { tech: 'Onshore Wind', tenor: '5Y', low: 52, high: 58 },
  { tech: 'Solar PV', tenor: '3Y', low: 48, high: 55 },
  { tech: 'Solar PV', tenor: '5Y', low: 45, high: 52 },
];

// Honest stat strip — replaces the "4,523 live offers / 1,425 MW / 14d Lightning PPA / Confidence Score 92" fabrications.
const scaleStats = [
  { value: '1,500MW+', label: 'GB pipeline', sub: 'deals in-flight or under review' },
  { value: 'Big 6', label: '+ European majors', sub: 'on the counterparty network' },
  { value: '80%+', label: 'investment-grade', sub: 'offtaker credit quality' },
  { value: 'Founder-led', label: 'execution', sub: 'not a broker front' },
];

const capabilities = [
  {
    title: 'PPA Marketplace & Brokerage',
    description:
      'Live pricing, structuring and execution for corporate, utility and asset-backed PPAs across GB. Pay-as-produced, baseload, and shaped products.',
    href: '/platform#marketplace',
    tag: 'LIVE NOW',
    status: 'live' as const,
  },
  {
    title: 'ETC Intel',
    description:
      'Indicative curves, counterparty coverage and deal structuring notes. Built for procurement, origination and investment teams.',
    href: '/intelligence',
    tag: 'LIVE NOW',
    status: 'live' as const,
  },
  {
    title: 'Asset Exchange',
    description:
      'Trade renewable projects through development, construction and operating stages. Asset + PPA bundles where it adds value.',
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

// Counterparty network categories — replaces the fake partner-logos line
// (Nordpool / EPEX SPOT / National Grid ESO / Elexon / S&P Global).
const counterpartyNetwork = [
  { type: 'Big 6 utilities', detail: 'GB supply and generation incumbents' },
  { type: 'European energy majors', detail: 'Integrated utilities and oil & gas majors' },
  { type: 'Independent traders & originators', detail: 'Merchant and route-to-market specialists' },
  { type: 'IPPs & asset owners', detail: 'Developers and operating asset owners across GB' },
  { type: 'Corporate offtakers', detail: 'Industrial, data centre, and FTSE/Fortune 500 buyers' },
];

// Three-pillar value prop — deck slide 3 headline, deck slide 8 pillars.
const pillars = [
  {
    title: 'Full market visibility',
    description:
      'We see the whole GB PPA market — every major utility, every European energy major, every active independent trader. That breadth is the product.',
  },
  {
    title: 'Published market prices',
    description:
      'Indicative curves you can quote from, not bid/ask theatre. Pay-as-produced ranges by technology and tenor, refreshed on the published cadence.',
  },
  {
    title: 'Faster execution',
    description:
      'Founder-led structuring, pre-qualified counterparties, and a platform bias to close. Speed comes from removing friction, not from cutting corners.',
  },
  {
    title: 'GB-native, Europe-connected',
    description:
      'GB is our focus. European majors are on the network. No pretence of being everywhere at once.',
  },
];

const segments = [
  { type: 'Utilities', detail: 'Retail supply, integrated generation, and structuring desks' },
  { type: 'Independent traders & originators', detail: 'Merchant traders, route-to-market providers, aggregators' },
  { type: 'IPPs & asset owners', detail: 'Developers and operating owners in wind, solar and BESS' },
  { type: 'Corporate offtakers', detail: 'Industrial, data centre, and FTSE/Fortune 500 buyers' },
];

export default function HomePage() {
  return (
    <>
      {/* Indicative Ranges Ticker — GB H2 2025, server-rendered.
          Replaces the old fake live-price feed. */}
      <div className="surface-2 border-b border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8 py-2 overflow-x-auto text-[11px]">
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-signal signal-pulse" />
              <span className="text-etc-600 uppercase tracking-wider font-medium">GB Indicative PPA Ranges · H2 2025 · PaP £/MWh</span>
            </div>
            {indicativeRanges.map((r) => (
              <div key={`${r.tech}-${r.tenor}`} className="flex items-center gap-2 shrink-0">
                <span className="text-etc-400 font-medium">{r.tech}</span>
                <span className="text-etc-500">{r.tenor}</span>
                <span className="mono text-white font-medium">&pound;{r.low}&ndash;{r.high}</span>
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
                Focused in GB · Active in Europe
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
              The institutional<br />
              platform for<br />
              <span className="etc-gradient">energy transactions</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-etc-400 leading-relaxed max-w-2xl">
              Pricing, structuring and execution for PPAs across GB &mdash; and the rails for assets,
              storage and grid to follow. Built for utilities, independent traders, IPPs and
              corporate offtakers.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors"
              >
                Book a call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/intelligence"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-etc-300 border border-subtle hover:border-etc-600 hover:bg-white/[0.03] rounded-lg transition-colors"
              >
                View market intelligence
              </Link>
            </div>
          </div>

          {/* Scale strip — deck-verified, replaces fabricated 4,523/1,425MW/14d/92 metrics */}
          <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {scaleStats.map((m) => (
              <div key={m.label} className="surface-2 p-6">
                <div className="text-3xl sm:text-4xl font-bold text-white mono">{m.value}</div>
                <div className="text-sm text-etc-300 mt-1 font-medium">{m.label}</div>
                <div className="text-[11px] text-etc-600 mt-0.5">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PPA Revenue Estimator — give value first */}
      <section className="py-20 lg:py-28" id="estimator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="text-[11px] font-medium text-signal uppercase tracking-wider mb-4 mono">
                Indicative Pricing · GB · H2 2025
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                What&apos;s your energy worth?
              </h2>
              <p className="mt-4 text-etc-400 leading-relaxed">
                Published GB indicative PaP ranges by technology and tenor. Move the sliders,
                see the number. No form. No sales call first.
              </p>
              <p className="mt-6 text-[13px] text-etc-600 leading-relaxed">
                Quoted pricing, counterparty matching and execution handled directly &mdash;
                book a call when you&apos;re ready to transact.
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
              What&apos;s live now &mdash; and what&apos;s next
            </h2>
            <p className="mt-4 text-etc-400 max-w-2xl">
              PPAs and ETC Intel are operational today. Asset Exchange, BESS Exchange,
              Grid Intelligence and 24/7 CFE Matching are on the 2026 roadmap.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {capabilities.map((cap) => (
              <Link
                key={cap.title}
                href={cap.href}
                className={`group surface-1 p-8 hover:bg-etc-850 transition-colors ${
                  cap.status === 'roadmap' ? 'relative' : ''
                }`}
              >
                <div
                  className={`text-[10px] font-semibold uppercase tracking-widest mb-4 mono ${
                    cap.status === 'roadmap' ? 'text-amber' : 'text-signal'
                  }`}
                >
                  {cap.tag}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-signal transition-colors">
                  {cap.title}
                </h3>
                <p className="mt-3 text-[13px] text-etc-500 leading-relaxed">{cap.description}</p>
                <div className="mt-5 inline-flex items-center text-[12px] font-medium text-etc-600 group-hover:text-signal gap-1 transition-colors">
                  {cap.status === 'roadmap' ? 'On the roadmap' : 'Explore'} <ArrowUpRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The ETC difference — deck slide 3 headline + slide 8 pillars. */}
      <section className="surface-2 border-y border-subtle py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Not just a broker. Not just a middleman.<br />
              <span className="text-etc-500">Infrastructure.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((item) => (
              <div key={item.title} className="card p-8">
                <div className="w-8 h-px bg-signal mb-6" />
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-[13px] text-etc-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder — single block replaces the 4 unverifiable advisors. */}
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

      {/* Counterparty network + segments — replaces fake partner logos. */}
      <section className="surface-2 border-y border-subtle py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-[11px] font-medium text-etc-600 uppercase tracking-wider mb-4 mono">
              Counterparty network
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              The counterparties institutional<br />energy already transacts with.
            </h2>
            <p className="mt-4 text-etc-400 max-w-2xl">
              80%+ investment-grade counterparty credit quality. Corporate offtakers
              include FTSE 250 and Fortune 500 companies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle mb-12">
            {counterpartyNetwork.map((c) => (
              <div key={c.type} className="surface-1 p-6">
                <h3 className="text-[13px] font-semibold text-white mb-2">{c.type}</h3>
                <p className="text-[12px] text-etc-500 leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>

          <div className="mb-10">
            <div className="text-[11px] font-medium text-etc-600 uppercase tracking-wider mb-4 mono">
              Who we work with
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {segments.map((p) => (
              <div key={p.type} className="surface-1 p-8">
                <h3 className="text-base font-semibold text-white mb-2">{p.type}</h3>
                <p className="text-[13px] text-etc-500 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — deck slide 10. */}
      <section className="py-20 lg:py-28">
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
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors"
            >
              Book a call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
