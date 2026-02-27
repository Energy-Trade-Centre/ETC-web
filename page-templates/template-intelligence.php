<?php
/**
 * Template Name: Intelligence
 *
 * @package ETC
 */

get_header();

$markets = array(
	array( 'name' => 'ERCOT', 'region' => 'US — Texas', 'solar' => 24.50, 'wind' => 22.80, 'change' => 2.3 ),
	array( 'name' => 'PJM', 'region' => 'US — Mid-Atlantic', 'solar' => 31.20, 'wind' => 28.90, 'change' => -1.1 ),
	array( 'name' => 'MISO', 'region' => 'US — Midwest', 'solar' => 26.80, 'wind' => 25.10, 'change' => 0.8 ),
	array( 'name' => 'CAISO', 'region' => 'US — California', 'solar' => 28.40, 'wind' => 32.50, 'change' => -0.4 ),
	array( 'name' => 'Nordpool', 'region' => 'Northern Europe', 'solar' => 38.60, 'wind' => 34.20, 'change' => 3.1 ),
	array( 'name' => 'EPEX', 'region' => 'Central Europe', 'solar' => 42.10, 'wind' => 36.80, 'change' => 1.7 ),
	array( 'name' => 'N2EX', 'region' => 'United Kingdom', 'solar' => 48.90, 'wind' => 42.30, 'change' => -2.0 ),
	array( 'name' => 'AEMO', 'region' => 'Australia', 'solar' => 32.70, 'wind' => 38.40, 'change' => 4.2 ),
);

$reports = array(
	array( 'tag' => 'QUARTERLY REPORT', 'title' => 'Q4 2025 Global PPA Pricing Review', 'desc' => 'Quarterly analysis of PPA pricing trends across all ETC-covered markets. P0-P100 breakdowns, technology splits, and QoQ movements.' ),
	array( 'tag' => 'BESS RESEARCH', 'title' => 'BESS Revenue Stack: 2025 Performance Analysis', 'desc' => 'How battery storage assets performed across DC, FFR, BM, and arbitrage revenue streams. Benchmarks and optimiser comparison.' ),
	array( 'tag' => 'GRID ANALYSIS', 'title' => 'Cannibalization Risk in European Markets', 'desc' => 'Quantifying the capture rate decline for solar and wind assets as renewable penetration increases. Market-by-market analysis.' ),
	array( 'tag' => 'MARKET TRENDS', 'title' => 'Corporate PPA Procurement Trends', 'desc' => 'How data centres, industrials, and corporates are structuring PPA portfolios. 24/7 CFE adoption rates and multi-market strategies.' ),
);
?>

<section class="hero">
	<div class="absolute inset-0 grid-bg"></div>
	<div class="container">
		<div class="hero-content">
			<div class="hero-tag">Market Intelligence</div>
			<h1>Signal from<br><span class="text-etc-500">the noise.</span></h1>
			<p class="hero-lead">
				Live PPA pricing, BESS revenue benchmarks, cannibalization data, and
				quarterly research — sourced from the largest renewable energy transaction
				dataset in the market.
			</p>
		</div>
	</div>
</section>

<!-- Price Table -->
<section class="section section--border" id="pricing">
	<div class="container">
		<div class="mb-12">
			<h2 class="text-2xl font-bold">PPA Price Snapshot</h2>
			<p class="mt-2 text-13 text-etc-500">
				Indicative P50 prices. Full P0-P100 range with 8-quarter history available on the platform.
			</p>
		</div>

		<div class="overflow-x-auto">
			<table class="data-table">
				<thead>
					<tr>
						<th>Market</th>
						<th>Region</th>
						<th class="text-right">Solar P50</th>
						<th class="text-right">Wind P50</th>
						<th class="text-right">QoQ</th>
					</tr>
				</thead>
				<tbody>
					<?php foreach ( $markets as $m ) : ?>
					<tr>
						<td class="td-name"><?php echo esc_html( $m['name'] ); ?></td>
						<td class="td-region"><?php echo esc_html( $m['region'] ); ?></td>
						<td class="td-mono">$<?php echo number_format( $m['solar'], 2 ); ?></td>
						<td class="td-mono">$<?php echo number_format( $m['wind'], 2 ); ?></td>
						<td class="td-change <?php echo $m['change'] > 0 ? 'td-up' : 'td-down'; ?>">
							<?php echo $m['change'] > 0 ? '+' : ''; ?><?php echo number_format( $m['change'], 1 ); ?>%
						</td>
					</tr>
					<?php endforeach; ?>
				</tbody>
			</table>
		</div>

		<p class="mt-6 text-10 text-etc-600">
			Indicative P50 values for illustration. Live pricing with full percentile ranges updated continuously for platform users.
		</p>
	</div>
</section>

<!-- Research -->
<section class="section section--alt section--border" id="research">
	<div class="container">
		<div class="mb-12">
			<h2 class="text-2xl font-bold">Research &amp; Reports</h2>
			<p class="mt-2 text-13 text-etc-500">
				Institutional-quality research produced by the ETC intelligence team. Available to platform users.
			</p>
		</div>

		<div class="grid grid-2 grid-px grid-rounded grid-bg-subtle">
			<?php foreach ( $reports as $r ) : ?>
			<div class="surface-1 p-8">
				<div class="cap-tag mb-3"><?php echo esc_html( $r['tag'] ); ?></div>
				<h3 class="text-base font-semibold text-white mb-2"><?php echo esc_html( $r['title'] ); ?></h3>
				<p class="text-13 text-etc-500 leading-relaxed"><?php echo esc_html( $r['desc'] ); ?></p>
			</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="section section--border">
	<div class="container-md text-center">
		<h2 class="text-3xl font-bold">Access the full dataset</h2>
		<p class="mt-4 text-etc-400" style="max-width:36rem;margin:1rem auto 0">
			Complete P0-P100 pricing, historical trends, deal-level data, and downloadable
			research reports — available on the ETC platform.
		</p>
		<div class="mt-8">
			<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-primary">Request access <?php echo etc_icon_arrow_right(); ?></a>
		</div>
	</div>
</section>

<?php get_footer(); ?>
