<?php /*
Template Name: Blog
*/ ?>
<?php get_header(); ?>

<div id="pageHead" class="page-header">
	<h1>Blog</h1>
	<p class="subhead">Updates from the field. Follow me here: <a href="http://instagram.com/adventuresinmotion" target="_blank">@adventuresinmotion</a></p>
</div>

<div id="content" class="clearfix full">
  <div id="instagram-container" class="inst-container"></div>
</div>		

<?php 
	wp_enqueue_script('jqueryslider');
	wp_enqueue_script('vendor');
	wp_enqueue_script('blog');
	get_footer(); 
?>