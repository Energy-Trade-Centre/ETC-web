'use client';

import { useState, useMemo } from 'react';

// GB H2 2025 indicative PaP ranges by technology × tenor.
// Prices are pay-as-produced (PaP) £/MWh, exclude REGOs unless stated.
// Illustrative only — not a binding offer.
type Tech = 'offshore' | 'onshore' | 'solar';
type Tenor = '3Y' | '5Y' | '10Y';

const techs: Record<Tech, { label: string; hours: number; tenors: Record<Tenor, { low: number; high: number }> }> = {
  offshore: {
    label: 'Offshore Wind',
    hours: 4200,
    tenors: {
      '3Y': { low: 75, high: 78 },
      '5Y': { low: 73, high: 76 },
      '10Y': { low: 70, high: 74 },
    },
  },
  onshore: {
    label: 'Onshore Wind',
    hours: 3200,
    tenors: {
      '3Y': { low: 55, high: 62 },
      '5Y': { low: 52, high: 58 },
      '10Y': { low: 50, high: 55 },
    },
  },
  solar: {
    label: 'Solar PV',
    hours: 1100,
    tenors: {
      '3Y': { low: 48, high: 55 },
      '5Y': { low: 45, high: 52 },
      '10Y': { low: 42, high: 48 },
    },
  },
};

export default function PPAEstimator() {
  const [tech, setTech] = useState<Tech>('onshore');
  const [tenor, setTenor] = useState<Tenor>('5Y');
  const [capacity, setCapacity] = useState(50);

  const result = useMemo(() => {
    const t = techs[tech];
    const band = t.tenors[tenor];
    const annualMWh = capacity * t.hours;
    const annualRevenueLow = annualMWh * band.low;
    const annualRevenueHigh = annualMWh * band.high;
    const years = parseInt(tenor, 10);
    return {
      low: band.low,
      high: band.high,
      annualMWh,
      annualRevenueLow,
      annualRevenueHigh,
      contractValueLow: annualRevenueLow * years,
      contractValueHigh: annualRevenueHigh * years,
      years,
    };
  }, [tech, tenor, capacity]);

  const techKeys = Object.keys(techs) as Tech[];
  const tenorKeys: Tenor[] = ['3Y', '5Y', '10Y'];

  return (
    <div className="card p-8">
      <div className="space-y-6">
        {/* Technology */}
        <div>
          <label className="block text-[11px] font-semibold text-etc-500 uppercase tracking-wider mb-2">
            Technology
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {techKeys.map((k) => (
              <button
                key={k}
                onClick={() => setTech(k)}
                className={`text-[12px] font-medium py-2 rounded-md transition-colors ${
                  tech === k
                    ? 'bg-signal/10 text-signal border border-signal/20'
                    : 'surface-3 text-etc-400 border border-subtle hover:text-white'
                }`}
              >
                {techs[k].label}
              </button>
            ))}
          </div>
        </div>

        {/* Tenor */}
        <div>
          <label className="block text-[11px] font-semibold text-etc-500 uppercase tracking-wider mb-2">
            Tenor
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {tenorKeys.map((t) => (
              <button
                key={t}
                onClick={() => setTenor(t)}
                className={`text-[13px] font-medium py-2.5 rounded-md transition-colors ${
                  tenor === t
                    ? 'bg-signal/10 text-signal border border-signal/20'
                    : 'surface-3 text-etc-400 border border-subtle hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Capacity slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-[11px] font-semibold text-etc-500 uppercase tracking-wider">
              Capacity
            </label>
            <span className="mono text-sm text-white font-medium">{capacity} MW</span>
          </div>
          <input
            type="range"
            min={5}
            max={400}
            step={5}
            value={capacity}
            onChange={(e) => setCapacity(Number(e.target.value))}
            className="w-full h-1 bg-etc-700 rounded-full appearance-none cursor-pointer accent-signal"
          />
          <div className="flex justify-between text-[10px] text-etc-600 mt-1">
            <span>5 MW</span>
            <span>400 MW</span>
          </div>
        </div>

        {/* Results */}
        <div className="border-t border-subtle pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[12px] text-etc-500">Indicative PaP range</span>
            <span className="mono text-lg text-white font-bold">
              &pound;{result.low}&ndash;{result.high}
              <span className="text-etc-500 text-[11px] font-normal">/MWh</span>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[12px] text-etc-500">Est. annual generation</span>
            <span className="mono text-sm text-etc-300">{(result.annualMWh / 1000).toFixed(0)}k MWh</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[12px] text-etc-500">Est. annual revenue</span>
            <span className="mono text-sm text-etc-300">
              &pound;{(result.annualRevenueLow / 1e6).toFixed(1)}&ndash;{(result.annualRevenueHigh / 1e6).toFixed(1)}M
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-subtle pt-4">
            <span className="text-[12px] text-etc-400 font-medium">{result.years}-year contract value</span>
            <span className="mono text-xl text-signal font-bold">
              &pound;{(result.contractValueLow / 1e6).toFixed(0)}&ndash;{(result.contractValueHigh / 1e6).toFixed(0)}M
            </span>
          </div>
        </div>

        <p className="text-[10px] text-etc-600 leading-relaxed">
          ETC indicative prices, H2 2025 ranges. Illustrative only &mdash; not a binding offer. Prices
          exclude REGOs unless stated. Actual pricing subject to curtailment, shape, credit, structure,
          and market conditions at time of quote.
        </p>
      </div>
    </div>
  );
}
