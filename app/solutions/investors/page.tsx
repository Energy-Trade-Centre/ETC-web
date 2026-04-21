import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For investors & lenders | ETC',
  description:
    'Independent PPA reference pricing for GB renewables. Use ETC curves and counterparty intelligence to underwrite, mark and stress-test offtake exposure.',
};

const pillars = [
  {
    title: 'Independent reference pricing',
    body: 'Published PaP £/MWh ranges for offshore, onshore and solar across 3, 5 and 10 year tenors — sourced from live GB brokerage flow, not a modelled curve.',
  },
  {
    title: 'Counterparty visibility',
    body: 'Who is actually pricing which shape, tenor and credit today. Useful for bankability reviews, covenant stress tests and refinancing mark-to-market.',
  },
  {
    title: 'Shape, credit and REGO premia',
    body: 'We see where the premia are landing in current transactions. If you are underwriting a project, you can anchor assumptions to observable clearing levels.',
  },
  {
    title: 'Founder-led deal access',
    body: 'When you need a structured view on a specific project or counterparty, you get it direct from the principal — not filtered through a sell-side deck.',
  },
  {
    title: 'GB-native',
    body: 'We are focused on GB and active in Europe. Every data point in our curves comes from GB transaction flow. No mixed-market averaging.',
  },
  {
    title: 'Honest about limits',
    body: 'Reference curves and counterparty intelligence are live today. Portfolio analytics and structured advisory are on the 2026 roadmap — we will tell you what we have and what is coming.',
  },
];

const useCases = [
  {
    step: '01',
    title: 'Underwriting',
    description: 'Use ETC reference curves as an independent anchor for project-finance base-case revenue. Cross-check sponsor assumptions against observed clearing levels.',
  },
  {
    step: '02',
    title: 'Mark-to-market',
    description: 'Refresh quarterly marks on portfolio PPAs against published PaP curves. Spot which contracts are in-the-money and which are drifting.',
  },
  {
    step: '03',
    title: 'Refinancing & exits',
    description: 'Before a refinance or asset sale, stress-test the residual offtake economics. We provide a view of what the market would pay today for the same shape.',
  },
  {
    step: '04',
    title: 'New-build screening',
    description: 'Screen pipeline opportunities against the counterparty network. Which buyers are pricing your tenor? What does the premium look like today?',
  },
];

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-[#0A0E12] text-white">
      <section className="relative overflow-hidden border-b border-white/5 pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7B32B]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F7B32B]/20 bg-[#F7B32B]/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#F7B32B]">
            <TrendingUp className="h-3 w-3" /> For investors &amp; lenders
          </div>
          <h1 className="mt-6 text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Independent reference pricing for <span className="text-[#F7B32B]">GB renewables</span>.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
            ETC publishes PaP £/MWh reference curves sourced from live GB brokerage flow. Use them to underwrite new projects, mark portfolio PPAs and stress-test offtake exposure — with a direct line to the desk if you need a structured view on a specific shape or counterparty.
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
              View reference curves
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-white/40">Why investors use ETC</div>
            <h2 className="mt-2 text-3xl font-light tracking-tight sm:text-4xl">Pricing you can defend in committee.</h2>
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
            <div className="text-xs uppercase tracking-[0.2em] text-white/40">Where it plugs in</div>
            <h2 className="mt-2 text-3xl font-light tracking-tight sm:text-4xl">From underwriting to exit.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u) => (
              <div key={u.step} className="border-l border-[#F7B32B]/30 pl-5">
                <div className="text-xs uppercase tracking-[0.2em] text-[#F7B32B]">{u.step}</div>
                <h3 className="mt-2 text-lg font-medium text-white">{u.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
            Want a structured view on a live deal or portfolio?
          </h2>
          <p className="mt-4 text-white/60">
            Tell us the project, tenor or counterparty. We will come back with a reference range, a read on the current clearing level and the counterparties pricing it today.
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
    </main>
  );
}
