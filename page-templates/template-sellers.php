<?php
/**
 * Template Name: Sellers / Origination
 *
 * @package ETC
 */

get_header();

$pillars = array(
	array( 'title' => 'Institutional buyer network', 'desc' => "Direct access to corporates, utilities, infrastructure funds, and pension funds actively seeking offtake. Not a cold outreach list — a live market." ),
	array( 'title' => 'Asset+PPA bundling', 'desc' => 'Bundle asset sales with negotiated PPA offtake for 25-35% higher transaction value. A deal structure unique to ETC that maximises your exit multiples.' ),
	array( 'title' => 'Fair price discovery', 'desc' => 'Auction mechanics and transparent market data ensure best execution. No opaque broker margins. Your price is set by the market, not by an intermediary.' ),
	array( 'title' => 'Global reach', 'desc' => "List in any of 28 countries across 12 electricity markets. Access buyer pools in markets your existing broker network can't reach." ),
	array( 'title' => 'Every development stage', 'desc' => 'Greenfield, ready-to-build, NTP, construction, operational, secondary sale. ETC matches you with the right buyers at every stage of your project lifecycle.' ),
);

$stages = array( 'Greenfield', 'Ready to Build', 'NTP', 'Construction', 'Operational', 'Secondary Sale' );
?>

<section class="hero">
	<div class="absolute inset-0 grid-bg"></div>
	<div class="container">
		<div class="hero-content">
			<div class="hero-tag">Origination</div>
			<h1>Maximise your<br><span class="text-etc-500">deal flow and value.</span></h1>
			<p class="hero-lead">
				Stop relying on three brokers and a Rolodex. ETC gives your development
				team direct access to the widest institutional buyer network in the market &mdash;
				with deal structures that maximise your transaction value.
			</p>
			<div class="hero-actions">
				<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-primary">List your projects <?php echo etc_icon_arrow_right(); ?></a>
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
	<div class="container text-center">
		<h2 class="text-2xl font-bold mb-8">Every stage of development</h2>
		<div class="flex flex-wrap justify-center gap-3">
			<?php foreach ( $stages as $s ) : ?>
			<div class="card px-5 py-3">
				<span class="text-13 font-medium text-etc-300"><?php echo esc_html( $s ); ?></span>
			</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="section section--border">
	<div class="container-md text-center">
		<h2 class="text-3xl font-bold">Ready to reach more buyers?</h2>
		<p class="mt-4 text-etc-400">Join 1,300+ developers originating on ETC.</p>
		<div class="mt-8">
			<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-primary">Get started <?php echo etc_icon_arrow_right(); ?></a>
		</div>
	</div>
</section>

<?php get_footer(); ?>
