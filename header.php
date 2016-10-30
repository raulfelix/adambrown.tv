<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
	<title><?php bloginfo('name'); ?> <?php wp_title(); ?></title>
	<meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
	
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/dist/css/master.css" type="text/css" media="screen" />
	<link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS Feed" href="<?php bloginfo('rss2_url'); ?>" />
	<link rel="alternate" type="application/atom+xml" title="<?php bloginfo('name'); ?> Atom Feed" href="<?php bloginfo('atom_url'); ?>" />
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
	
	<?php if (of_get_option('ttrust_favicon') ) : ?>
		<link rel="shortcut icon" href="<?php echo of_get_option('ttrust_favicon'); ?>" />
	<?php endif; ?>
	
	<?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>
	

	<script type="text/javascript">
	  (function(d) {
	    var config = {
	      kitId: 'orn8xmq',
	      scriptTimeout: 3000
	    },
	    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
	  })(document);
	</script>

         <script type="text/javascript">
	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-27505725-1']);
	  _gaq.push(['_trackPageview']);
	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();
	</script>
	<?php wp_head(); ?>	
</head>

<body <?php body_class(); ?> >

<div id="container">	
<div id="header">
	<div class="inside clearfix">
							
		<?php $ttrust_logo = of_get_option('logo'); ?>
		<div id="logo">
		<?php if($ttrust_logo) : ?>				
			<h1 class="logo"><a href="<?php bloginfo('url'); ?>"></a></h1>
		<?php else : ?>				
			<h1><a href="<?php bloginfo('url'); ?>"></a></h1>				
		<?php endif; ?>	
		</div>
		
		<div id="mainNav" class="clearfix">							
			<?php wp_nav_menu( array('menu_class' => 'sf-menu', 'theme_location' => 'main', 'fallback_cb' => 'default_nav' )); ?>			
		</div>			
	</div>	
	
	<?php if(is_front_page()): ?>		
		<div id="homeBanner">			
			<div id="bannerText">
				<h2><?php echo of_get_option('ttrust_banner_text_primary'); ?></h2>
				<p><?php echo of_get_option('ttrust_banner_text_secondary');  ?></p>
			</div>		
		</div>	
	<?php endif; ?>	
</div>

<div class="wrap">
<div id="main" class="clearfix">
	