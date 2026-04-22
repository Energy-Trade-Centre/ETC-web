'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { events } from '@/lib/analytics';

const markets: Record<string, { solar: number; wind: number }> = {
  'ERCOT': { solar: 24.50, wind: 22.80 },
  'PJM': { solar: 31.20, wind: 28.90 },
  'MISO': { solar: 26.80, wind: 25.10 },
  'CAISO': { solar: 28.40, wind: 32.50 },
  'Nordpool': { solar: 38.60, wind: 34.20 },
  'EPEX': { solar: 42.10, wind: 36.80 },
  'N2EX': { solar: 48.90, wind: 42.30 },
  'AEMO': { solar: 32.70, wind: 38.40 },
};

export default function PPAEstimator() {
  const [capacity, setCapacity] = useState(50);
  const [market, setMarket] = useState('ERCOT');
  const [tech, setTech] = useState<'solar' | 'wind'>('solar');

  const interacted = useRef(false);
  const capacityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!interacted.current) return;
    if (capacityTimer.current) clearTimeout(capacityTimer.current);
    capacityTimer.current = setTimeout(() => {
      events.estimatorInteraction('capacity', capacity);
    }, 750);
    return () => {
      if (capacityTimer.current) clearTimeout(capacityTimer.current);
    };
  }, [capacity]);

  const result = useMemo(() => {
    const basePrice = markets[market]?.[tech] ?? 30;
    const hours = tech === 'solar' ? 2100 : 3200;
    const annualMWh = capacity * hours;
    const annualRevenue = annualMWh * basePrice;
    const tenYearRevenue = annualRevenue * 10;
    return {
      price: basePrice,
      annualMWh,
      annualRevenue,
      tenYearRevenue,
    };
  }, [capacity, market, tech]);

  return (
    <div className="card p-8">
      <div className="space-y-6">
        {/* Market */}
        <div>
          <label className="block text-[11px] font-semibold text-etc-500 uppercase tracking-wider mb-2">
            Market
          </label>
          <div className="grid grid-cols-4 gap-1.5">
            {Object.keys(markets).map((m) => (
              <button
                key={m}
                onClick={() => {
                  interacted.current = true;
                  setMarket(m);
                  events.estimatorInteraction('market', m);
                }}
                className={`text-[12px] font-medium py-2 rounded-md transition-colors ${
                  market === m
                    ? 'bg-signal/10 text-signal border border-signal/20'
                    : 'surface-3 text-etc-400 border border-subtle hover:text-white'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Technology */}
        <div>
          <label className="block text-[11px] font-semibold text-etc-500 uppercase tracking-wider mb-2">
            Technology
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {(['solar', 'wind'] as const).map((t) => (
              <button
                key={t}
                onClick={() => {
                  interacted.current = true;
                  setTech(t);
                  events.estimatorInteraction('tech', t);
                }}
                className={`text-[13px] font-medium py-2.5 rounded-md capitalize transition-colors ${
                  tech === t
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
            max={500}
            step={5}
            value={capacity}
            onChange={(e) => {
              interacted.current = true;
              setCapacity(Number(e.target.value));
            }}
            className="w-full h-1 bg-etc-700 rounded-full appearance-none cursor-pointer accent-signal"
          />
          <div className="flex justify-between text-[10px] text-etc-600 mt-1">
            <span>5 MW</span>
            <span>500 MW</span>
          </div>
        </div>

        {/* Results */}
        <div className="border-t border-subtle pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[12px] text-etc-500">Indicative P50 price</span>
            <span className="mono text-lg text-white font-bold">${result.price.toFixed(2)}<span className="text-etc-500 text-[11px] font-normal">/MWh</span></span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[12px] text-etc-500">Est. annual generation</span>
            <span className="mono text-sm text-etc-300">{(result.annualMWh / 1000).toFixed(0)}k MWh</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[12px] text-etc-500">Est. annual revenue</span>
            <span className="mono text-sm text-etc-300">${(result.annualRevenue / 1e6).toFixed(1)}M</span>
          </div>
          <div className="flex items-center justify-between border-t border-subtle pt-4">
            <span className="text-[12px] text-etc-400 font-medium">10-year contract value</span>
            <span className="mono text-xl text-signal font-bold">${(result.tenYearRevenue / 1e6).toFixed(1)}M</span>
          </div>
        </div>

        <p className="text-[10px] text-etc-600 leading-relaxed">
          Indicative only. Based on current P50 market data. Actual pricing subject to counterparty,
          tenor, and deal structure. Full pricing available on the platform.
        </p>
      </div>
    </div>
  );
}
