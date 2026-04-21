import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ETC Intel | GB PPA indicative curves & notes',
  description:
    'ETC Intel: indicative GB PPA curves (PaP £/MWh) by technology and tenor, counterparty coverage notes, and deal structuring commentary. H2 2025 ranges. Focused in GB, active in Europe.',
  alternates: { canonical: 'https://energytradecentre.com/intelligence' },
};

// Replaces the fabricated USD table (ERCOT/PJM/MISO/CAISO/Nordpool/EPEX/N2EX/AEMO) with
// deck-verified GB indicative PaP £/MWh ranges by tech × tenor.
const gbCurves: Array<{ tech: string; tenor: string; low: number; high: number }> = [
  { tech: 'Offshore Wind', tenor: '3Y', low: 75, high: 78 },
  { tech: 'Offshore Wind', tenor: '5Y', low: 73, high: 76 },
  { tech: 'Offshore Wind', tenor: '10Y', low: 70, high: 74 },
  { tech: 'Onshore Wind', tenor: '3Y', low: 55, high: 62 },
  { tech: 'Onshore Wind', tenor: '5Y', low: 52, high: 58 },
  { tech: 'Onshore Wind', tenor: '10Y', low: 50, high: 55 },
  { tech: 'Solar PV', tenor: '3Y', low: 48, high: 55 },
  { tech: 'Solar PV', tenor: '5Y', low: 45, high: 52 },
  { tech: 'Solar PV', tenor: '10Y', low: 42, high: 48 },
];

// Replaces the four "downloadable institutional research reports" that don't exist yet
// with four honest coverage notes — areas where ETC Intel will issue commentary and where
// a live conversation is available today.
const notes = [
  {
    tag: 'PaP CURVES · LIVE',
    title: 'GB PaP indicative ranges &mdash; H2 2025',
    description:
      'Published PaP £/MWh ranges across offshore wind, onshore wind and solar PV, over 3Y / 5Y / 10Y tenors. The reference buyers and sellers quote from.',
  },
  {
    tag: 'COUNTERPARTY NOTES',
    title: 'Counterparty coverage &mdash; who&apos;s on the network',
    description:
      'Ongoing commentary on Big 6, European majors, independent traders & originators, IPPs and corporate offtakers. What each side is pricing, where capacity is, and where the willingness-to-transact is sitting.',
  },
  {
    tag: 'STRUCTURING NOTES',
    title: 'PaP vs baseload vs shaped &mdash; how structure is moving',
    description:
      'Deal-structuring commentary: sleeving, shape premium, credit premium, curtailment treatment, REGO handling. Where bids and offers are converging and where they are not.',
  },
  {
    tag: 'ROADMAP',
    title: 'Asset, BESS, Grid and CFE &mdash; 2026 coverage',
    description:
      'When Asset Exchange, BESS Exchange, Grid Intelligence and 24/7 CFE Matching come online in 2026, ETC Intel will cover those sides of the market with the same published cadence.',
  },
];

export default function IntelligencePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold text-etc-600 uppercase tracking-widest mb-4 mono">
              ETC Intel
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
              Published prices.<br />
              <span className="text-etc-500">Not bid/ask theatre.</span>
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              Indicative GB PPA curves by technology and tenor, counterparty coverage notes,
              and deal structuring commentary. Built so buyers and sellers can quote from the
              same reference.
            </p>
          </div>
        </div>
      </section>

      {/* GB PaP curves */}
      <section className="border-t border-subtle py-20 lg:py-28" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-2xl font-bold text-white">GB PPA indicative ranges &mdash; H2 2025</h2>
            <p className="mt-2 text-[13px] text-etc-500">
              Pay-as-produced £/MWh ranges by technology and tenor. Illustrative only &mdash; not
              a binding offer. Prices exclude REGOs unless stated.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-subtle">
                  <th className="text-left py-3 px-4 text-[10px] font-semibold text-etc-600 uppercase tracking-widest">Technology</th>
                  <th className="text-left py-3 px-4 text-[10px] font-semibold text-etc-600 uppercase tracking-widest">Tenor</th>
                  <th className="text-right py-3 px-4 text-[10px] font-semibold text-etc-600 uppercase tracking-widest">PaP £/MWh</th>
                </tr>
              </thead>
              <tbody>
                {gbCurves.map((r) => (
                  <tr key={`${r.tech}-${r.tenor}`} className="border-b border-subtle hover:bg-white/[0.02]">
                    <td className="py-3.5 px-4 text-[13px] font-semibold text-white">{r.tech}</td>
                    <td className="py-3.5 px-4 text-[13px] text-etc-500">{r.tenor}</td>
                    <td className="py-3.5 px-4 text-right mono text-[13px] text-etc-300">&pound;{r.low}&ndash;{r.high}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-[10px] text-etc-600 leading-relaxed">
            ETC indicative prices, H2 2025 ranges. Illustrative only &mdash; not a binding offer.
            Prices exclude REGOs unless stated. Actual pricing subject to curtailment, shape, credit,
            structure, and market conditions at time of quote.
          </p>
        </div>
      </section>

      {/* Coverage notes */}
      <section className="surface-2 border-t border-subtle py-20 lg:py-28" id="research">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-2xl font-bold text-white">Coverage notes</h2>
            <p className="mt-2 text-[13px] text-etc-500">
              What ETC Intel covers today, and where coverage is going in 2026.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {notes.map((n) => (
              <div key={n.title} className="surface-1 p-8">
                <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-3 mono">{n.tag}</div>
                <h3 className="text-base font-semibold text-white mb-2">{n.title}</h3>
                <p className="text-[13px] text-etc-500 leading-relaxed">{n.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Want the full context?</h2>
          <p className="mt-4 text-etc-400">
            Book a call and we&apos;ll walk you through where GB PPA structure is currently
            moving &mdash; and where your position sits inside that.
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
