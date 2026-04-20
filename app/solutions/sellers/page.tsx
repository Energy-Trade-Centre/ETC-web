import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Origination | For Developers & Asset Owners',
  description:
    'Maximise deal flow and transaction value on ETC. List PPA offers and projects to the widest pool of institutional buyers. Asset+PPA bundles deliver 25-35% premium.',
  alternates: { canonical: 'https://energytradecentre.com/solutions/sellers' },
};

const pillars = [
  {
    title: 'Institutional buyer network',
    description: 'Direct access to corporates, utilities, infrastructure funds, and pension funds actively seeking offtake. Not a cold outreach list — a live market.',
  },
  {
    title: 'Asset+PPA bundling',
    description: 'Bundle asset sales with negotiated PPA offtake for 25-35% higher transaction value. A deal structure unique to ETC that maximises your exit multiples.',
  },
  {
    title: 'Fair price discovery',
    description: 'Auction mechanics and transparent market data ensure best execution. No opaque broker margins. Your price is set by the market, not by an intermediary.',
  },
  {
    title: 'FastTrack PPA for speed',
    description: 'Standardised templates close sub-25MW deals in 14 days. Remove the procurement bottleneck from your pipeline and accelerate time-to-revenue.',
  },
  {
    title: 'Global reach',
    description: 'List in any of 28 countries across 12 electricity markets. Access buyer pools in markets your existing broker network can\'t reach.',
  },
  {
    title: 'Every development stage',
    description: 'Greenfield, ready-to-build, NTP, construction, operational, secondary sale. ETC matches you with the right buyers at every stage of your project lifecycle.',
  },
];

export default function SellersPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold text-etc-600 uppercase tracking-widest mb-4 mono">Origination</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
              Maximise your<br />
              <span className="text-etc-500">deal flow and value.</span>
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              Stop relying on three brokers and a Rolodex. ETC gives your development
              team direct access to the widest institutional buyer network in the market —
              with deal structures that maximise your transaction value.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors">
                List your projects <ArrowRight className="w-4 h-4" />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Every stage of development</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Greenfield', 'Ready to Build', 'NTP', 'Construction', 'Operational', 'Secondary Sale'].map((s) => (
              <div key={s} className="card px-5 py-3">
                <span className="text-[13px] font-medium text-etc-300">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to reach more buyers?</h2>
          <p className="mt-4 text-etc-400">Join 1,300+ developers originating on ETC.</p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors">
              Get started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Origination | For Developers & Asset Owners',
  description:
    'Maximise deal flow and transaction value on ETC. List PPA offers and projects to the widest pool of institutional buyers. Asset+PPA bundles deliver 25-35% premium.',
  alternates: { canonical: 'https://energytradecentre.com/solutions/sellers' },
};

const pillars = [
  {
    title: 'Institutional buyer network',
    description: 'Direct access to corporates, utilities, infrastructure funds, and pension funds actively seeking offtake. Not a cold outreach list — a live market.',
  },
  {
    title: 'Asset+PPA bundling',
    description: 'Bundle asset sales with negotiated PPA offtake for 25-35% higher transaction value. A deal structure unique to ETC that maximises your exit multiples.',
  },
  {
    title: 'Fair price discovery',
    description: 'Auction mechanics and transparent market data ensure best execution. No opaque broker margins. Your price is set by the market, not by an intermediary.',
  },
  {
    title: 'FastTrack PPA for speed',
    description: 'Standardised templates close sub-25MW deals in 14 days. Remove the procurement bottleneck from your pipeline and accelerate time-to-revenue.',
  },
  {
    title: 'Global reach',
    description: 'List in any of 28 countries across 12 electricity markets. Access buyer pools in markets your existing broker network can\'t reach.',
  },
  {
    title: 'Every development stage',
    description: 'Greenfield, ready-to-build, NTP, construction, operational, secondary sale. ETC matches you with the right buyers at every stage of your project lifecycle.',
  },
];

export default function SellersPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold text-etc-600 uppercase tracking-widest mb-4 mono">Origination</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
              Maximise your<br />
              <span className="text-etc-500">deal flow and value.</span>
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              Stop relying on three brokers and a Rolodex. ETC gives your development
              team direct access to the widest institutional buyer network in the market —
              with deal structures that maximise your transaction value.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors">
                List your projects <ArrowRight className="w-4 h-4" />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Every stage of development</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Greenfield', 'Ready to Build', 'NTP', 'Construction', 'Operational', 'Secondary Sale'].map((s) => (
              <div key={s} className="card px-5 py-3">
                <span className="text-[13px] font-medium text-etc-300">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to reach more buyers?</h2>
          <p className="mt-4 text-etc-400">Join 1,300+ developers originating on ETC.</p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors">
              Get started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Origination | For Developers & Asset Owners',
  description:
    'Maximise deal flow and transaction value on ETC. List PPA offers and projects to the widest pool of institutional buyers. Asset+PPA bundles deliver 25-35% premium.',
  alternates: { canonical: 'https://energytradecentre.com/solutions/sellers' },
};

const pillars = [
  {
    title: 'Institutional buyer network',
    description: 'Direct access to corporates, utilities, infrastructure funds, and pension funds actively seeking offtake. Not a cold outreach list — a live market.',
  },
  {
    title: 'Asset+PPA bundling',
    description: 'Bundle asset sales with negotiated PPA offtake for 25-35% higher transaction value. A deal structure unique to ETC that maximises your exit multiples.',
  },
  {
    title: 'Fair price discovery',
    description: 'Auction mechanics and transparent market data ensure best execution. No opaque broker margins. Your price is set by the market, not by an intermediary.',
  },
  {
    title: 'Lightning PPA for speed',
    description: 'Standardised templates close sub-25MW deals in 14 days. Remove the procurement bottleneck from your pipeline and accelerate time-to-revenue.',
  },
  {
    title: 'Global reach',
    description: 'List in any of 28 countries across 12 electricity markets. Access buyer pools in markets your existing broker network can\'t reach.',
  },
  {
    title: 'Every development stage',
    description: 'Greenfield, ready-to-build, NTP, construction, operational, secondary sale. ETC matches you with the right buyers at every stage of your project lifecycle.',
  },
];

export default function SellersPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold text-etc-600 uppercase tracking-widest mb-4 mono">Origination</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
              Maximise your<br />
              <span className="text-etc-500">deal flow and value.</span>
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              Stop relying on three brokers and a Rolodex. ETC gives your development
              team direct access to the widest institutional buyer network in the market —
              with deal structures that maximise your transaction value.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors">
                List your projects <ArrowRight className="w-4 h-4" />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Every stage of development</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Greenfield', 'Ready to Build', 'NTP', 'Construction', 'Operational', 'Secondary Sale'].map((s) => (
              <div key={s} className="card px-5 py-3">
                <span className="text-[13px] font-medium text-etc-300">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to reach more buyers?</h2>
          <p className="mt-4 text-etc-400">Join 1,300+ developers originating on ETC.</p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors">
              Get started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
