<?php /*
Template Name: Home
*/ ?>
<?php get_header(); ?>
<div id="content" class="full grid">
	
	<div id="projects" class="full homeSection clearfix">
		<h3><span>about me</span></h3>
		<p>I am a cinematographer and director with a passion for telling visually rich, human centred stories with a particular focus on action, adventure and the natural world.</p>
		<div class="thumbs-showreel clearfix">
			<div class="showreel first" data-src="http://player.vimeo.com/video/101213107?autoplay=1" style="background-image:url(<?php echo bloginfo('template_directory'); ?>/images/director_reel.jpg)">
				<div class="container">
					<iframe  width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
				</div>
				<div class="showreel-overlay">	
					<span class="showreel-play"></span>
					<span class="showreel-title">director</span>
					<span class="showreel-label">showreel</span>
				</div>
			</div>
			<div class="showreel second" data-src="http://player.vimeo.com/video/101221700?autoplay=1" style="background-image:url(<?php echo bloginfo('template_directory'); ?>/images/cinematographer_reel.jpg)">
				<div class="container">
				<iframe  width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
				</div>
				<div class="showreel-overlay">	
					<span class="showreel-play"></span>
					<span class="showreel-title">cinematographer</span>
					<span class="showreel-label">showreel</span>
				</div>
			</div>
		</div>
		<a class="button" href="<?php echo get_permalink( get_page_by_title( 'about' ) )  ?>">READ MORE...</a>
	</div>

<?php $home_project_count = intval(of_get_option('ttrust_home_project_count')); ?>
<?php if($home_project_count > 0) : ?>	
<div id="projects" class="full homeSection clearfix">
	<h3><span><?php echo of_get_option('ttrust_recent_projects_title'); ?></span></h3>		
	<?php
	if(of_get_option('ttrust_home_project_type') == "featured") : //Show only featured projects 
		query_posts( array(
			'ignore_sticky_posts' => 1,
			'meta_key' => '_ttrust_featured_value',
			'meta_value' => 'true',    			
    		'posts_per_page' => of_get_option('ttrust_home_project_count'),
    		'post_type' => array(				
				'project'					
				)
			));
	else:
		query_posts( array(
			'ignore_sticky_posts' => 1,			  			
    		'posts_per_page' => of_get_option('ttrust_home_project_count'),
    		'post_type' => array(				
				'project'					
				)
			));	
	endif;
	?>		
					
	<div class="thumbs clearfix">			
		<?php  while (have_posts()) : the_post(); ?>			
			<?php get_template_part( 'part-project-thumb'); ?>
		<?php endwhile; ?>
		<?php wp_reset_query();	?>		
	</div>
</div>
<?php endif; ?>

</div>

<?php get_footer(); ?>	