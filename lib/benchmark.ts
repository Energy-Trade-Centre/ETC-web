/**
 * ETC GB PPA Index — the named benchmark data source.
 *
 * Editions are append-only: when a new edition is published, add it to the
 * front of `editions` and move the previous one to status 'archived'. Never
 * restate a published edition (see /ppa-prices/methodology — corrections are
 * footnoted via `notes`, not silently edited).
 *
 * Values are indicative pay-as-produced (PaP) ranges in £/MWh, GB delivery,
 * REGOs excluded, by technology and tenor bucket.
 */

export type TenorKey = '3Y' | '5Y' | '10Y';
export const tenorKeys: TenorKey[] = ['3Y', '5Y', '10Y'];

export type PriceRange = { low: number; high: number };

export type TechnologyRow = {
  technology: string;
  slug: string;
  tenors: Record<TenorKey, PriceRange>;
};

export type IndexEdition = {
  /** Edition label, e.g. 'H2 2025'. */
  edition: string;
  /** Human-readable publication label shown on the page. */
  publishedLabel: string;
  status: 'current' | 'archived';
  /** Optional footnote (e.g. corrections, intra-period republication note). */
  notes?: string;
  rows: TechnologyRow[];
};

export const INDEX_NAME = 'ETC GB PPA Index';

/** Chart domain for the range visualisation (£/MWh). */
export const CHART_DOMAIN = { min: 40, max: 80 };

export const editions: IndexEdition[] = [
  {
    edition: 'H2 2025',
    publishedLabel: 'H2 2025 edition',
    status: 'current',
    rows: [
      {
        technology: 'Offshore wind',
        slug: 'offshore-wind',
        tenors: {
          '3Y': { low: 75, high: 78 },
          '5Y': { low: 73, high: 76 },
          '10Y': { low: 70, high: 74 },
        },
      },
      {
        technology: 'Onshore wind',
        slug: 'onshore-wind',
        tenors: {
          '3Y': { low: 55, high: 62 },
          '5Y': { low: 52, high: 58 },
          '10Y': { low: 50, high: 55 },
        },
      },
      {
        technology: 'Solar PV',
        slug: 'solar-pv',
        tenors: {
          '3Y': { low: 48, high: 55 },
          '5Y': { low: 45, high: 52 },
          '10Y': { low: 42, high: 48 },
        },
      },
    ],
  },
];

export const currentEdition = editions.find((e) => e.status === 'current') ?? editions[0];

export function midpoint(r: PriceRange): number {
  return (r.low + r.high) / 2;
}
