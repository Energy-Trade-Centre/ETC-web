import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Globe,
  Lightbulb,
  Shield,
  Target,
  Users,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Energy Trade Centre is accelerating the global energy transition by making renewable energy trading transparent, efficient, and accessible to every market participant.',
  alternates: { canonical: 'https://energytradecentre.com/about' },
};

const values = [
  {
    icon: Shield,
    title: 'Transparency',
    description: 'Every price, every risk score, every data point is visible. We believe hidden information has no place in energy markets.',
  },
  {
    icon: Zap,
    title: 'Speed',
    description: 'From Lightning PPA to automated settlements, we obsess over removing friction from every step of the energy trading lifecycle.',
  },
  {
    icon: Globe,
    title: 'Global Access',
    description: 'Energy markets are global. Our platform spans 28 countries and 12 electricity markets so our users can trade wherever the opportunity is.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'From 24/7 CFE matching to Asset+PPA bundling to integrated BESS exchange — we build what the market needs next, not what it already has.',
  },
];

const milestones = [
  { year: '2022', event: 'Founded with a mission to digitise global energy trading' },
  { year: '2023', event: 'Launched PPA Marketplace covering North America and Europe' },
  { year: '2024', event: 'Introduced Asset Exchange, BESS Marketplace, and 24/7 CFE engine' },
  { year: '2025', event: 'Expanded to 28 countries with 4,500+ live PPA offers' },
  { year: '2026', event: 'Continuing to build the operating system for the energy transition' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Powering the Global<br />
              <span className="gradient-text">Energy Transition</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Energy Trade Centre exists to make renewable energy trading transparent, efficient, and
              accessible to every market participant — from corporate buyers to infrastructure investors.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The energy transition is the defining challenge of our time. Yet the infrastructure
                for trading renewable energy remains fragmented, opaque, and inaccessible.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We built Energy Trade Centre to change that. Our platform brings together PPA trading,
                asset exchange, battery storage, financial analytics, and grid intelligence into one
                unified system — giving every participant the tools they need to trade with confidence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that when energy trading is transparent, efficient, and data-driven,
                the transition to clean energy accelerates for everyone.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: '28', label: 'Countries' },
                  { value: '4,500+', label: 'Live PPA offers' },
                  { value: '12+', label: 'Electricity markets' },
                  { value: '50+', label: 'Active counterparties' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-navy-950">{stat.value}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 text-center mb-16">
            What Drives Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-950 mb-2">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 text-center mb-16">
            Our Journey
          </h2>
          <div className="space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-6">
                <div className="text-2xl font-bold text-green-500 w-16 shrink-0">{m.year}</div>
                <div className="text-gray-600 pt-1">{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 mb-4">Global Presence</h2>
          <p className="text-lg text-gray-500 mb-12">
            Headquartered in London with teams across Europe and North America.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {['London', 'Amsterdam', 'Houston'].map((city) => (
              <div key={city} className="bg-white border border-gray-200 rounded-xl px-8 py-5">
                <span className="text-lg font-semibold text-navy-950">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Join the Energy Transition
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Whether you&apos;re buying, selling, or investing — Energy Trade Centre gives you the
            tools to participate in the world&apos;s largest market transformation.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-colors"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
