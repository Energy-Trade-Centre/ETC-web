import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Platform | PPA, Asset, BESS, Grid and CFE',
  description:
    'The ETC platform across GB — PPA Marketplace and ETC Intel live today; Asset Exchange, BESS Exchange, Grid Intelligence and 24/7 CFE Matching on the 2026 roadmap.',
  alternates: { canonical: 'https://energytradecentre.com/platform' },
};

// Live modules carry real capability copy. Roadmap modules are labelled honestly
// and describe what they will do in 2026 — not what they do today.
const modules = [
  {
    id: 'marketplace',
    tag: 'LIVE NOW',
    status: 'live' as const,
    title: 'PPA Marketplace & Brokerage',
    lead: 'Live pricing, structuring and execution for PPAs across GB.',
    description:
      'Pay-as-produced, baseload and shaped products across offshore wind, onshore wind and solar PV. Indicative curves you can quote from, counterparty matching from the network, and founder-led structuring through to signed contract.',
    features: [
      'Indicative PaP ranges by technology and tenor (3Y / 5Y / 10Y)',
      'Counterparty matching across Big 6, European majors, independent traders, IPPs and corporate offtakers',
      'Structuring across PaP, baseload, shaped, sleeved and virtual variants',
      'Direct execution — no sub-brokerage, no hand-offs',
      'Indicative pricing refreshed on a published cadence (H2 2025 live)',
    ],
  },
  {
    id: 'analytics',
    tag: 'LIVE NOW',
    status: 'live' as const,
    title: 'ETC Intel',
    lead: 'Indicative curves, counterparty coverage and deal notes.',
    description:
      'Built for procurement, origination and investment teams that need to quote from a published reference, understand who is on the other side, and see how GB PPA structure is actually moving.',
    features: [
      'Indicative GB PPA curves by technology and tenor',
      'Counterparty coverage notes across utilities, majors, traders, IPPs and corporates',
      'Deal structuring notes — PaP vs baseload vs shaped, sleeving, credit and shape premia',
      'Cadence-based refresh — half-yearly indicative ranges, intra-period where the market moves',
    ],
  },
  {
    id: 'assets',
    tag: '2026 ROADMAP',
    status: 'roadmap' as const,
    title: 'Asset Exchange',
    lead: 'Trade renewable projects — and Asset + PPA bundles — across the GB pipeline.',
    description:
      'In scope for 2026: a structured venue to move projects through development, construction and operating stages, with Asset + PPA bundling where it adds value. Not live today.',
    features: [
      'Project listings across development, NTP, construction and operational stages',
      'Asset + PPA bundles where bundling improves execution',
      'Auction and bilateral structures',
      'Buyer-side diligence pack alignment across developers and IPPs',
    ],
  },
  {
    id: 'bess',
    tag: '2026 ROADMAP',
    status: 'roadmap' as const,
    title: 'BESS Exchange',
    lead: 'Battery storage origination and optimisation marketplace.',
    description:
      'In scope for 2026: revenue-stack-aware origination — DC, FFR, BM, wholesale arbitrage, Capacity Market — with standardised contract templates for optimisation, tolling and revenue share. Not live today.',
    features: [
      'Revenue stack modelling across DC, FFR, BM, arbitrage and CM',
      'Asset owner ↔ optimiser matching',
      'Contract templates: optimisation, tolling, revenue share, co-location',
      'Pre-construction developer pipeline for partnership sourcing',
    ],
  },
  {
    id: 'grid',
    tag: '2026 ROADMAP',
    status: 'roadmap' as const,
    title: 'Grid Intelligence',
    lead: 'Constraint, queue and regional capacity visibility for GB.',
    description:
      'In scope for 2026: a structured view of the TO and DNO layer that origination and investment teams actually act on — queue positions, constraint exposure and regional headroom. Not live today.',
    features: [
      'Connection queue visibility by region and DNO',
      'Constraint and curtailment mapping',
      'Regional capacity headroom',
      'Co-location (solar+BESS, wind+BESS) structuring context',
    ],
  },
  {
    id: 'cfe',
    tag: '2026 ROADMAP',
    status: 'roadmap' as const,
    title: '24/7 CFE Matching',
    lead: 'Hourly carbon-free energy matching — beyond annual REGOs.',
    description:
      'In scope for 2026: match your portfolio against real load profiles hour by hour, quantify the gap, and price the cost to close it. Aligned with EnergyTag and 24/7 CFE Compact. Not live today.',
    features: [
      'Hourly generation ↔ load matching',
      'CFE score with gap-hour breakdown',
      'Gap-closing cost modelling across wind, solar and BESS',
      'Standards-aligned reporting (EnergyTag / 24/7 CFE Compact)',
    ],
  },
];

// Replaces the fabricated "Lightning PPA 14d / 200+ deals / Deal Room 58d / Settlements 1.2d"
// execution strip with how ETC actually works end-to-end today.
const execution = [
  {
    title: 'Counterparty matching',
    description: 'Match against the live counterparty network: Big 6, European majors, independent traders, IPPs and corporate offtakers.',
  },
  {
    title: 'Structuring',
    description: 'Pay-as-produced, baseload, shaped, sleeved and virtual PPA variants. Credit, shape and curtailment premia negotiated transparently.',
  },
  {
    title: 'Execution',
    description: 'Founder-led through term sheet to signed contract. Direct execution — no sub-brokerage, no hand-offs.',
  },
  {
    title: 'Post-trade',
    description: 'Counterparty documentation, REGO treatment and settlement hand-off tracked through close.',
  },
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold text-etc-600 uppercase tracking-widest mb-4 mono">
              The Platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
              What&apos;s live now &mdash;<br />
              and what&apos;s <span className="etc-gradient">next</span>
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              PPA Marketplace and ETC Intel are operational today across GB. Asset Exchange,
              BESS Exchange, Grid Intelligence and 24/7 CFE Matching are on the 2026 roadmap.
              Everything on this page is labelled honestly: LIVE or ROADMAP.
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
        </div>
      </section>

      {/* Modules */}
      {modules.map((mod, idx) => (
        <section
          key={mod.id}
          id={mod.id}
          className={`py-20 lg:py-28 border-t border-subtle ${idx % 2 === 0 ? '' : 'surface-2'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <div
                  className={`text-[10px] font-semibold uppercase tracking-widest mb-3 mono ${
                    mod.status === 'roadmap' ? 'text-amber' : 'text-signal'
                  }`}
                >
                  {mod.tag}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">{mod.title}</h2>
                <p className="mt-2 text-lg text-etc-400 font-medium">{mod.lead}</p>
                <p className="mt-4 text-[14px] text-etc-500 leading-relaxed">{mod.description}</p>
              </div>
              <div className="card p-8">
                <h3 className="text-[11px] font-semibold text-etc-600 uppercase tracking-widest mb-6">
                  {mod.status === 'roadmap' ? 'Planned capabilities' : 'Capabilities live today'}
                </h3>
                <ul className="space-y-4">
                  {mod.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-signal mt-0.5 shrink-0" />
                      <span className="text-[13px] text-etc-300 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* How execution actually works — honest replacement for the Lightning PPA strip */}
      <section className="surface-2 border-t border-subtle py-20 lg:py-28" id="execution">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-3 mono">
              EXECUTION
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              How a PPA actually moves through ETC.
            </h2>
            <p className="mt-4 text-etc-400 max-w-2xl">
              Matching, structuring, execution and post-trade &mdash; handled directly.
              Founder-led, no sub-brokers, no hand-offs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {execution.map((e) => (
              <div key={e.title} className="surface-1 p-7">
                <div className="w-8 h-px bg-signal mb-5" />
                <h3 className="text-base font-semibold text-white mb-2">{e.title}</h3>
                <p className="text-[12px] text-etc-500 leading-relaxed">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">See the platform in context</h2>
          <p className="mt-4 text-etc-400 max-w-xl mx-auto">
            A 30-minute walkthrough of what&apos;s live, what&apos;s on the 2026 roadmap,
            and how a deal moves from indicative quote to signed contract.
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
