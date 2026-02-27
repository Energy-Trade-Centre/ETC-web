import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Company',
  description:
    'ETC is building the operating system for the energy transition. Headquartered in London with teams across Europe and North America.',
  alternates: { canonical: 'https://energytradecentre.com/about' },
};

const team = [
  {
    role: 'Renewable Energy Advisory',
    description: 'Former utility procurement leads, PPA structurers, and energy traders with 15+ years of deal-making experience across European and US markets.',
  },
  {
    role: 'Quantitative Analytics',
    description: 'Financial engineers from investment banking and commodity trading houses, building the Monte Carlo, IFRS 9, and valuation models that power the platform.',
  },
  {
    role: 'Grid & Infrastructure',
    description: 'Power systems engineers with deep expertise in grid constraints, DNO capacity, generation forecasting, and the physics that underpin energy markets.',
  },
  {
    role: 'Platform Engineering',
    description: 'Engineers from Bloomberg, Refinitiv, and fintech, building institutional-grade infrastructure designed for the speed and reliability that energy trading demands.',
  },
];

const milestones = [
  { year: '2022', event: 'Founded with the thesis that energy trading infrastructure was a decade behind financial markets' },
  { year: '2023', event: 'Launched PPA Marketplace covering North American and European markets' },
  { year: '2024', event: 'Shipped Asset Exchange, BESS Exchange, Analytics Engine, and 24/7 CFE matching' },
  { year: '2025', event: 'Expanded to 12+ markets, 4,500+ live offers, and 50+ institutional counterparties' },
  { year: '2026', event: 'Continuing to build the operating system the energy transition runs on' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
              Building the rails<br />
              for the <span className="etc-gradient">energy transition</span>
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              The energy transition is constrained not by technology, but by transaction
              infrastructure. We built ETC to fix that.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">The problem</h2>
              <p className="text-[14px] text-etc-400 leading-relaxed mb-4">
                Energy markets trade $2 trillion annually, yet the infrastructure for
                renewable energy transactions remains fragmented across brokers, spreadsheets,
                email chains, and phone calls.
              </p>
              <p className="text-[14px] text-etc-400 leading-relaxed mb-4">
                A corporate buyer seeking a PPA has no transparent way to see the full market.
                A developer listing an asset has no efficient way to reach institutional buyers.
                An investor modelling a portfolio has no integrated tool for IFRS 9 compliance.
              </p>
              <p className="text-[14px] text-etc-400 leading-relaxed">
                The result: slower deals, higher costs, and less capital flowing into clean
                energy than the market demands.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Our thesis</h2>
              <p className="text-[14px] text-etc-400 leading-relaxed mb-4">
                Energy trading infrastructure is a decade behind financial markets. When we
                built ETC, we didn&apos;t start with what energy trading looks like today — we
                started with what it needs to look like to support a net-zero grid.
              </p>
              <p className="text-[14px] text-etc-400 leading-relaxed">
                That means transparent pricing, integrated analytics, real-time market data,
                and execution speed that matches the pace of the transition. Not a marketplace.
                Not a broker. An operating system.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {[
              { value: '12+', label: 'Electricity markets' },
              { value: '28', label: 'Countries' },
              { value: '4,500+', label: 'Live PPA offers' },
              { value: '50+', label: 'Institutional counterparties' },
            ].map((s) => (
              <div key={s.label} className="surface-2 p-6">
                <div className="mono text-2xl font-bold text-white">{s.value}</div>
                <div className="text-[12px] text-etc-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - humanized, showing expertise domains */}
      <section className="surface-2 border-t border-subtle py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white">The team behind ETC</h2>
            <p className="mt-2 text-[13px] text-etc-500">
              Energy professionals, quantitative analysts, and infrastructure engineers building
              the platform the industry needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {team.map((t) => (
              <div key={t.role} className="surface-1 p-8">
                <h3 className="text-base font-semibold text-white mb-3">{t.role}</h3>
                <p className="text-[13px] text-etc-500 leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-12">Timeline</h2>
          <div className="space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-8">
                <div className="mono text-xl font-bold text-signal w-16 shrink-0">{m.year}</div>
                <div className="text-[14px] text-etc-400 pt-0.5 leading-relaxed">{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="surface-2 border-t border-subtle py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Global presence</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { city: 'London', role: 'Headquarters' },
              { city: 'Amsterdam', role: 'European Operations' },
              { city: 'Houston', role: 'North American Markets' },
            ].map((office) => (
              <div key={office.city} className="card px-8 py-5 text-center">
                <div className="text-base font-semibold text-white">{office.city}</div>
                <div className="text-[11px] text-etc-600 mt-1">{office.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Join the transition</h2>
          <p className="mt-4 text-etc-400">
            Whether you&apos;re buying, selling, or investing — ETC gives you the infrastructure
            to participate in the world&apos;s largest market transformation.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors">
              Get in touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
