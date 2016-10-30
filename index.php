<?php get_header(); ?>

<?php if(!is_front_page()) : ?>
<div id="pageHead">
	<h1>Blog</h1>
	<p class="subhead">Updates from the field. Follow me here: <a href="http://instagram.com/adventuresinmotion" target="_blank">@adventuresinmotion</a></p>
</div>
<?php endif; ?>

<div id="content" class="clearfix full">
	<div id="instagram-container"></div>
	<div class="center">
		<button id="load-more" class="button loader-icon-active">
			<div class="loader-icon"><i class="icon-loader"></i></div><span>LOAD MORE...</span>
		</button>
	</div>
</div>		

<?php 

	wp_enqueue_script('vendor');
	wp_enqueue_script('blog');

	get_footer(); 
?>