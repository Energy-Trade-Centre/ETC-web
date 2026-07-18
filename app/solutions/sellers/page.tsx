import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/seo/json-ld';
import { breadcrumbList, service } from '@/lib/seo';
import { ArrowRight, Check, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Renewable Energy Trading & PPA Origination',
  description:
    'Renewable energy trading and PPA origination for GB generators. Access reference pricing, live offtakers, tailored structures and direct execution.',
  alternates: { canonical: 'https://energytradecentre.com/solutions/sellers' },
};

const pillars = [
  {
    title: 'Published PaP reference curves',
    body: 'Offshore, onshore and solar benchmarks for 3, 5 and 10 year tenors — refreshed quarterly. You walk into every negotiation with a defensible anchor, not a blank sheet.',
  },
  {
    title: 'Live buyer network',
    body: 'GB utilities, European majors, independents and corporate offtakers actively pricing PPAs today. No list inflation — only counterparties currently transacting.',
  },
  {
    title: 'Structuring that earns its fee',
    body: 'PaP vs baseload vs shaped vs sleeved. Shape, credit and REGO premia negotiated directly. Term sheet reflects your project economics, not a template.',
  },
  {
    title: 'Founder-led, not pooled',
    body: 'Your project is run by the person structuring your trade, not passed down to a junior desk. Direct line from first call to signed PPA.',
  },
  {
    title: 'GB-native',
    body: 'We are focused on GB and active in Europe. No pretence of global reach — we trade where we know the counterparties, the settlement and the grid.',
  },
  {
    title: 'Honest roadmap',
    body: 'Asset Exchange and BESS Exchange are on the 2026 roadmap. Today: PPA marketplace and brokerage. What we sell is what is live.',
  },
];

const workflow = [
  {
    step: '01',
    title: 'Project intake',
    description: 'Share capacity, technology, COD, location and grid connection status. We come back with an indicative PaP range and a shortlist of counterparties pricing your shape today.',
  },
  {
    step: '02',
    title: 'Counterparty match',
    description: 'We run your project past the live buyer network and confirm who is pricing. You see the universe — utilities, majors, independents, corporates — before any RFP goes out.',
  },
  {
    step: '03',
    title: 'Structure',
    description: 'We structure the shape (PaP/baseload/sleeved), negotiate credit and REGO premia, and align term, indexation and shape risk allocation. Term sheet in hand.',
  },
  {
    step: '04',
    title: 'Execute',
    description: 'Founder-led through signature. Direct line from first call to signed PPA — no handovers, no fragmented accountability.',
  },
];

export default function SellersPage() {
  return (
    // div, not <main> — the root layout already renders the page inside <main>,
    // and nested main elements are invalid HTML.
    <div className="min-h-screen bg-[#0A0E12] text-white">
      <JsonLd
        data={breadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Solutions', path: '/solutions' },
          { name: 'Origination', path: '/solutions/sellers' },
        ])}
      />
      <JsonLd
        data={service({
          name: 'PPA origination for IPPs & asset owners',
          serviceType: 'Power purchase agreement origination',
          description:
            'A direct route to GB offtake counterparties: published PaP reference curves, a live buyer network across utilities, majors and corporates, and founder-led structuring through to signed contract.',
          path: '/solutions/sellers',
        })}
      />
      <section className="relative overflow-hidden border-b border-white/5 pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7B32B]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F7B32B]/20 bg-[#F7B32B]/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#F7B32B]">
            <Zap className="h-3 w-3" /> For IPPs &amp; asset owners
          </div>
          <h1 className="mt-6 text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-[#F7B32B]">Renewable energy trading</span>, from project to GB offtake.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
            ETC is a GB-focused PPA marketplace for independent power producers, developers and asset owners. We publish the reference curves, run the counterparty network, and structure the trade. You get to the price that clears.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#F7B32B] px-6 py-3 text-sm font-medium text-[#0A0E12] transition-all hover:bg-[#F7B32B]/90"
            >
              Book a call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/intelligence"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/30"
            >
              See the reference curves
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-white/40">Why IPPs work with ETC</div>
            <h2 className="mt-2 text-3xl font-light tracking-tight sm:text-4xl">Six reasons we land the trade.</h2>
          </div>
          <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="bg-[#0A0E12] p-8">
                <div className="flex items-center gap-2 text-[#F7B32B]">
                  <Check className="h-4 w-4" />
                  <h3 className="text-base font-medium text-white">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-white/40">How we work</div>
            <h2 className="mt-2 text-3xl font-light tracking-tight sm:text-4xl">From intake to signed PPA.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((w) => (
              <div key={w.step} className="border-l border-[#F7B32B]/30 pl-5">
                <div className="text-xs uppercase tracking-[0.2em] text-[#F7B32B]">{w.step}</div>
                <h3 className="mt-2 text-lg font-medium text-white">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
            Bring the project. We bring the market.
          </h2>
          <p className="mt-4 text-white/60">
            Share the project spec. We will come back with an indicative PaP range, a live counterparty shortlist, and a structuring view — inside the week.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#F7B32B] px-7 py-3.5 text-sm font-medium text-[#0A0E12] transition-all hover:bg-[#F7B32B]/90"
            >
              Book a call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
