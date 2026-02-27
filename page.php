<?php
/**
 * Default page template
 *
 * Used for standard WordPress pages (Privacy, Terms, etc.)
 *
 * @package ETC
 */

get_header();
?>

<section class="section">
	<div class="container-sm">
		<?php while ( have_posts() ) : the_post(); ?>
		<h1 class="text-4xl font-extrabold mb-8"><?php the_title(); ?></h1>
		<div class="entry-content">
			<?php the_content(); ?>
		</div>
		<?php endwhile; ?>
	</div>
</section>

<?php get_footer(); ?>
