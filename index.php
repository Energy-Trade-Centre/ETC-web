<?php
/**
 * Default index template (required by WordPress)
 *
 * @package ETC
 */

get_header();
?>

<section class="section">
	<div class="container-sm">
		<?php if ( have_posts() ) : ?>
			<?php while ( have_posts() ) : the_post(); ?>
			<article style="margin-bottom:3rem">
				<h2 class="text-2xl font-bold mb-2">
					<a href="<?php the_permalink(); ?>" style="color:#fff;transition:color 0.2s"><?php the_title(); ?></a>
				</h2>
				<div class="text-13 text-etc-500 mb-4"><?php echo get_the_date(); ?></div>
				<div class="entry-content"><?php the_excerpt(); ?></div>
			</article>
			<?php endwhile; ?>
		<?php else : ?>
			<p class="text-etc-400">No posts found.</p>
		<?php endif; ?>
	</div>
</section>

<?php get_footer(); ?>
