import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Globe,
  TrendingUp,
  Activity,
  Sun,
  Wind,
  Battery,
  LineChart,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Market Data | PPA Prices, Trends & Energy Market Intelligence',
  description:
    'Live PPA pricing data, market trends, and energy intelligence across 28 countries. Track solar, wind, and storage PPA prices with P0-P100 benchmarks on Energy Trade Centre.',
  alternates: { canonical: 'https://energytradecentre.com/market-data' },
};

const markets = [
  { name: 'ERCOT', region: 'US - Texas', solar: '$24.50', wind: '$22.80', trend: '+2.3%' },
  { name: 'PJM', region: 'US - Mid-Atlantic', solar: '$31.20', wind: '$28.90', trend: '-1.1%' },
  { name: 'MISO', region: 'US - Midwest', solar: '$26.80', wind: '$25.10', trend: '+0.8%' },
  { name: 'CAISO', region: 'US - California', solar: '$28.40', wind: '$32.50', trend: '-0.4%' },
  { name: 'Nordpool', region: 'Northern Europe', solar: '€38.60', wind: '€34.20', trend: '+3.1%' },
  { name: 'EPEX', region: 'Central Europe', solar: '€42.10', wind: '€36.80', trend: '+1.7%' },
  { name: 'N2EX', region: 'UK', solar: '£48.90', wind: '£42.30', trend: '-2.0%' },
  { name: 'AEMO', region: 'Australia', solar: 'A$32.70', wind: 'A$38.40', trend: '+4.2%' },
];

const insights = [
  {
    icon: Sun,
    title: 'Solar PPA Trends',
    description: 'Global solar PPA prices continue to compress as manufacturing capacity expands. US markets lead with sub-$30/MWh offers in ERCOT and MISO.',
  },
  {
    icon: Wind,
    title: 'Wind Market Outlook',
    description: 'Offshore wind PPAs in European markets command premium pricing but deliver superior capacity factors. Onshore remains the most cost-competitive technology.',
  },
  {
    icon: Battery,
    title: 'Storage Integration',
    description: 'Hybrid solar+storage PPAs are growing fastest, with co-located BESS enabling dispatchable clean energy at competitive prices.',
  },
  {
    icon: Activity,
    title: 'Market Liquidity',
    description: 'PPA market liquidity has increased 40% year-over-year, driven by corporate sustainability targets and data centre expansion.',
  },
];

export default function MarketDataPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" />
              Market Intelligence
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              PPA Market Data<br />
              <span className="gradient-text">& Price Intelligence</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Real-time PPA pricing across global markets. Track trends, benchmark your portfolio,
              and make procurement decisions backed by the deepest market dataset available.
            </p>
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
            PPA Price Snapshot
          </h2>
          <p className="text-lg text-gray-500 mb-12">
            Indicative P50 prices by market. Full P0-P100 range, historical trends, and deal-level data available on the platform.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Market</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Region</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Solar P50</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Wind P50</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">QoQ Change</th>
                </tr>
              </thead>
              <tbody>
                {markets.map((market) => (
                  <tr key={market.name} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-semibold text-navy-950">{market.name}</td>
                    <td className="py-4 px-4 text-gray-500">{market.region}</td>
                    <td className="py-4 px-4 text-right font-mono text-navy-950">{market.solar}/MWh</td>
                    <td className="py-4 px-4 text-right font-mono text-navy-950">{market.wind}/MWh</td>
                    <td className={`py-4 px-4 text-right font-mono font-medium ${market.trend.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                      {market.trend}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Prices shown are indicative P50 values for illustration purposes. Live pricing with full P0-P100 ranges
            available to platform users. Updated quarterly.
          </p>
        </div>
      </section>

      {/* Insights */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 text-center mb-16">
            Market Insights
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {insights.map((insight) => (
              <div key={insight.title} className="bg-white border border-gray-200 rounded-2xl p-8">
                <insight.icon className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-navy-950 mb-3">{insight.title}</h3>
                <p className="text-gray-500 leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Access the Full Dataset
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Get complete P0-P100 pricing, 8-quarter historical trends, and deal-level data across all
            markets. Request access to the Energy Trade Centre platform.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-colors"
            >
              Request Access <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
