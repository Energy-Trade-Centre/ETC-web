<?php
/**
 * Template Name: Buyers / Procurement
 *
 * @package ETC
 */

get_header();

$pillars = array(
	array( 'title' => 'Market access, not broker access', 'desc' => 'See 4,500+ offers across 12 markets. Not a curated shortlist from a single broker — the full market with transparent P50 pricing and ETC Confidence Scores.' ),
	array( 'title' => 'CFO-ready risk modelling', 'desc' => 'Every deal comes with Monte Carlo NPV bands, IFRS 9 credit classification, and counterparty exposure analysis. Present to your board with confidence, not caveats.' ),
	array( 'title' => '14-day execution via Lightning PPA', 'desc' => 'Standardised terms on sub-25MW deals mean you can move from discovery to signed contract in under two weeks. No more 11-week procurement cycles.' ),
	array( 'title' => '24/7 CFE verification', 'desc' => 'Go beyond annual RECs. Track your true hourly carbon-free energy score, identify gap hours, and model the cost to reach your 24/7 targets.' ),
	array( 'title' => 'Portfolio-level intelligence', 'desc' => 'Monitor generation vs forecast, settlements, compliance deadlines, and RE100 progress across your entire PPA book from a single dashboard.' ),
	array( 'title' => 'Counterparty transparency', 'desc' => "Credit ratings, risk scores, deal history, and NDA tracking on every counterparty. Know who you're trading with before you start negotiating." ),
);

$workflow = array(
	array( 'step' => '01', 'title' => 'Discover', 'desc' => 'Browse the marketplace or publish an RFP to 4,500+ sellers. Filter by technology, geography, risk, and price.' ),
	array( 'step' => '02', 'title' => 'Model', 'desc' => 'Run Monte Carlo simulations, benchmark against market P50, and stress-test your downside. Build your investment case.' ),
	array( 'step' => '03', 'title' => 'Execute', 'desc' => 'Negotiate in the Deal Room or close instantly via Lightning PPA. Average time from first offer to signing: 58 days.' ),
	array( 'step' => '04', 'title' => 'Manage', 'desc' => 'Track portfolio performance, settlements, 24/7 CFE scores, and compliance — all in real time from your command centre.' ),
);
?>

<section class="hero">
	<div class="absolute inset-0 grid-bg"></div>
	<div class="container">
		<div class="hero-content">
			<div class="hero-tag">Procurement</div>
			<h1>Buy certainty.<br><span class="text-etc-500">Not complexity.</span></h1>
			<p class="hero-lead">
				Your CFO doesn&rsquo;t want a PPA. They want a risk-adjusted position with
				transparent downside. ETC gives your procurement team the liquidity,
				analytics, and execution speed to deliver exactly that.
			</p>
			<div class="hero-actions">
				<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-primary">Get access <?php echo etc_icon_arrow_right(); ?></a>
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
	<div class="container">
		<h2 class="text-3xl font-bold mb-16">How it works</h2>
		<div class="grid grid-4" style="gap:2rem">
			<?php foreach ( $workflow as $w ) : ?>
			<div>
				<div class="mono text-4xl font-extrabold text-etc-750 mb-4"><?php echo esc_html( $w['step'] ); ?></div>
				<h3 class="text-lg font-semibold text-white mb-2"><?php echo esc_html( $w['title'] ); ?></h3>
				<p class="text-13 text-etc-500 leading-relaxed"><?php echo esc_html( $w['desc'] ); ?></p>
			</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="section section--border">
	<div class="container-md text-center">
		<h2 class="text-3xl font-bold">Start procuring on ETC</h2>
		<p class="mt-4 text-etc-400">Join the corporate procurement teams that have moved beyond brokerage.</p>
		<div class="mt-8">
			<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-primary">Request access <?php echo etc_icon_arrow_right(); ?></a>
		</div>
	</div>
</section>

<?php get_footer(); ?>
