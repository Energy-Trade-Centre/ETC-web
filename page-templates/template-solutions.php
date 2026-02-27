<?php
/**
 * Template Name: Solutions
 *
 * @package ETC
 */

get_header();

$solutions = array(
	array(
		'tag' => 'PROCUREMENT',
		'title' => 'For corporate buyers & utilities',
		'desc' => "Your CFO doesn't want a PPA. They want a risk-adjusted position with transparent downside. ETC gives procurement teams the liquidity, analytics, and execution speed to deliver certainty.",
		'href' => '/solutions/buyers/',
		'points' => array(
			'4,500+ live PPA offers across 12 markets',
			'Monte Carlo NPV modelling for board presentations',
			'24/7 CFE hourly matching and verification',
			'Lightning PPA: 14-day close on standardised terms',
		),
	),
	array(
		'tag' => 'ORIGINATION',
		'title' => 'For developers & asset owners',
		'desc' => "Stop relying on three brokers and a Rolodex. ETC gives your development team direct access to the widest institutional buyer network — with deal structures that maximise your transaction value.",
		'href' => '/solutions/sellers/',
		'points' => array(
			'Direct access to institutional buyer network',
			'Asset+PPA bundling for 25-35% premium',
			'Auction and bilateral deal structures',
			'Global reach across 28 countries',
		),
	),
	array(
		'tag' => 'INVESTMENT',
		'title' => 'For infrastructure funds & portfolio managers',
		'desc' => "From deal sourcing to IFRS 9 compliance, ETC is the platform energy infrastructure investors actually need — built for investment committees, not retrofitted from a consumer tool.",
		'href' => '/solutions/investors/',
		'points' => array(
			'Monte Carlo simulation across 40+ scenarios',
			'IFRS 9 credit risk classification',
			'7-factor proprietary asset valuations',
			'Portfolio performance benchmarking',
		),
	),
);
?>

<section class="hero">
	<div class="absolute inset-0 grid-bg"></div>
	<div class="container">
		<div class="hero-content">
			<h1>
				Built for every<br>
				<span class="text-etc-500">side of the trade.</span>
			</h1>
			<p class="hero-lead">
				Whether you&rsquo;re buying certainty, originating offtake, or managing a portfolio &mdash;
				ETC replaces fragmented tools with unified market infrastructure.
			</p>
		</div>
	</div>
</section>

<section class="section section--border">
	<div class="container" style="display:flex;flex-direction:column;gap:1px">
		<?php foreach ( $solutions as $s ) : ?>
		<a href="<?php echo esc_url( home_url( $s['href'] ) ); ?>" class="card p-8" style="display:grid;gap:2rem;text-decoration:none" onmouseover="this.style.background='var(--etc-850)'" onmouseout="this.style.background=''">
			<div class="grid-2-asym" style="align-items:center">
				<div>
					<div class="cap-tag"><?php echo esc_html( $s['tag'] ); ?></div>
					<h2 class="text-2xl font-bold" style="transition:color 0.2s"><?php echo esc_html( $s['title'] ); ?></h2>
					<p class="mt-3 text-14 text-etc-500 leading-relaxed"><?php echo esc_html( $s['desc'] ); ?></p>
					<div class="cap-link mt-5">Learn more <?php echo etc_icon_arrow_right(); ?></div>
				</div>
				<div>
					<ul style="display:flex;flex-direction:column;gap:0.75rem">
						<?php foreach ( $s['points'] as $p ) : ?>
						<li class="flex items-center gap-3 text-13 text-etc-400">
							<div class="stat-dot"></div>
							<?php echo esc_html( $p ); ?>
						</li>
						<?php endforeach; ?>
					</ul>
				</div>
			</div>
		</a>
		<?php endforeach; ?>
	</div>
</section>

<?php get_footer(); ?>
