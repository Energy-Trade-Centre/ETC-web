<?php
/**
 * Template Name: Investors / Investment
 *
 * @package ETC
 */

get_header();

$pillars = array(
	array( 'title' => 'Deal pipeline visibility', 'desc' => 'Track every opportunity from sourcing through due diligence, term sheet, and close. Full 7-stage pipeline management with milestone alerts and document tracking.' ),
	array( 'title' => 'Monte Carlo at the core', 'desc' => 'NPV sensitivity analysis across 40+ price scenarios. Present P10/P50/P90 bands to your IC with full model transparency. No black-box assumptions.' ),
	array( 'title' => 'IFRS 9 credit risk', 'desc' => 'Counterparty exposure tracking, 3-stage classification, expected loss calculations, probability of default. Built for the reporting requirements institutional LPs demand.' ),
	array( 'title' => '7-factor asset valuations', 'desc' => 'Proprietary valuation model scoring assets across revenue certainty, grid access, technology risk, and four more factors. Revenue Certainty Scores from 0-100.' ),
	array( 'title' => 'Portfolio analytics', 'desc' => 'Technology mix, market distribution, actual vs forecast generation, revenue projections, and RE100 progress — all at a glance across your entire book.' ),
	array( 'title' => 'Performance benchmarking', 'desc' => 'Compare actual generation against forecasts and market averages. Identify underperformers early. Optimise your portfolio mix with real performance data.' ),
);
?>

<section class="hero">
	<div class="absolute inset-0 grid-bg"></div>
	<div class="container">
		<div class="hero-content">
			<div class="hero-tag">Investment</div>
			<h1>Built for<br><span class="text-etc-500">investment committees.</span></h1>
			<p class="hero-lead">
				From deal sourcing and due diligence to portfolio management and IFRS 9
				compliance &mdash; ETC is the platform energy infrastructure investors actually
				need, not the one that was built for someone else and rebranded.
			</p>
			<div class="hero-actions">
				<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-primary">Request access <?php echo etc_icon_arrow_right(); ?></a>
			</div>
		</div>
	</div>
</section>

<section class="section section--border">
	<div class="container">
		<div class="grid grid-3 grid-px grid-rounded grid-bg-subtle">
			<?php foreach ( $pillars as $p ) : ?>
			<div class="surface-1 p-8">
				<h3 class="text-base font-semibold text-white mb-3"><?php echo esc_html( $p['title'] ); ?></h3>
				<p class="text-13 text-etc-500 leading-relaxed"><?php echo esc_html( $p['desc'] ); ?></p>
			</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="section section--alt section--border">
	<div class="container-md text-center">
		<h2 class="text-3xl font-bold">See the platform in action</h2>
		<p class="mt-4 text-etc-400">Schedule a walkthrough tailored to your investment workflow.</p>
		<div class="mt-8">
			<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-primary">Request access <?php echo etc_icon_arrow_right(); ?></a>
		</div>
	</div>
</section>

<?php get_footer(); ?>
