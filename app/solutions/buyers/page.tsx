import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe,
  LineChart,
  Search,
  Shield,
  Zap,
  Clock,
  Target,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Buyers | Corporate & Institutional Energy Procurement',
  description:
    'Procure renewable energy with full transparency. Compare 4,500+ PPA offers, model financials with Monte Carlo simulation, and execute deals on Energy Trade Centre.',
  alternates: { canonical: 'https://energytradecentre.com/solutions/buyers' },
};

const benefits = [
  {
    icon: Search,
    title: 'Unmatched Market Access',
    description: 'Browse 4,500+ live PPA offers across 28 countries and 12 electricity markets. No other platform comes close.',
  },
  {
    icon: BarChart3,
    title: 'CFO-Ready Analytics',
    description: 'Monte Carlo simulation, NPV/IRR modelling, and IFRS 9 credit risk tools. Present deals to your board with confidence.',
  },
  {
    icon: Clock,
    title: 'Faster Execution',
    description: 'From discovery to signed contract in under 60 days on average. Lightning PPA enables same-day execution on standardised terms.',
  },
  {
    icon: Shield,
    title: 'Risk Transparency',
    description: 'Every offer includes risk scores, counterparty credit ratings, and price benchmarks. No hidden surprises.',
  },
  {
    icon: Zap,
    title: '24/7 CFE Matching',
    description: 'Go beyond annual RECs. Our hourly matching engine verifies your true carbon-free energy coverage against real load profiles.',
  },
  {
    icon: Globe,
    title: 'Multi-Market Strategy',
    description: 'Build a diversified portfolio across geographies, technologies, and vintages — all managed from one dashboard.',
  },
];

const steps = [
  { step: '01', title: 'Discover', description: 'Browse the marketplace or issue an RFP to 4,500+ sellers. Filter by your technology, price, and geography preferences.' },
  { step: '02', title: 'Analyse', description: 'Model deal economics with our built-in financial tools. Run Monte Carlo simulations, benchmark against market P50, and assess credit risk.' },
  { step: '03', title: 'Execute', description: 'Negotiate in the Deal Room or use Lightning PPA for instant execution. Average deal closure: 58 days from first offer to signing.' },
  { step: '04', title: 'Manage', description: 'Track portfolio performance, settlements, compliance, and 24/7 CFE scores — all in real time from your dashboard.' },
];

export default function BuyersPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              For Buyers
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Procure Renewable Energy<br />
              <span className="gradient-text">With Full Transparency</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Stop relying on brokers with limited deal flow. Access the deepest pool of PPA offers,
              model every deal with institutional-grade analytics, and execute on your terms.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-colors"
              >
                Request a Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 text-center mb-16">
            Why Buyers Choose ETC
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6">
                <benefit.icon className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold text-navy-950 mb-2">{benefit.title}</h3>
                <p className="text-gray-500 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 text-center mb-16">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step}>
                <div className="text-5xl font-extrabold text-green-500/20 mb-4">{s.step}</div>
                <h3 className="text-xl font-semibold text-navy-950 mb-2">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Start Procuring Smarter
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join corporate buyers who trust ETC for transparent, data-driven renewable energy procurement.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-colors"
            >
              Request a Demo <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
