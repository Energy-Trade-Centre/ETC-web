<?php
/**
 * 404 Template
 *
 * @package ETC
 */

get_header();
?>

<section class="page-404">
	<div class="container text-center">
		<div class="mono text-7xl font-bold text-etc-750 mb-4">404</div>
		<h1 class="text-3xl font-bold mb-4">Page not found</h1>
		<p class="text-etc-400 mb-8">The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.</p>
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn-primary">
			Back to home <?php echo etc_icon_arrow_right(); ?>
		</a>
	</div>
</section>

<?php get_footer(); ?>
