$(document).ready(function() {
	
	/* nav dropdown menu */
	if ($(window).width() > 768) {
		$('#navbar .nav').removeClass('animated bounceInDown');
		$('ul.nav li.dropdown').hover(function() {
			//$(this).find('.dropdown-menu').stop(true, true).fadeIn();
			//$(this).find('.dropdown-menu').stop(true, true).slideDown();
			$(this).find('.dropdown-menu').removeClass('animated flipOutY').addClass('animated rubberBand');
			$(this).addClass('open');
		}, function() {
			//$(this).find('.dropdown-menu').stop(true, true).fadeOut();
			//$(this).find('.dropdown-menu').stop(true, true).slideUp();
			//$(this).find('.dropdown-menu').removeClass('animated flipInY').addClass('animated flipOutY');
			$(this).removeClass('open');
		});
	} else {
		$('#navbar .nav').addClass('animated bounceInDown');
	}
	
	/* remove focus from bootstrap btn */
	$('.btn').focus(function(event) {
		event.target.blur();
	});

	/* remove empty p tag */
	$('p').each(function() {
		var $this = $(this);
		if ($this.html().replace(/\s|&nbsp;/g, '').length == 0)
			$this.remove();
	});

	/* remove error image */
	$("img").error(function () { 
    	$(this).hide(); 
	});
	
	/* window scroll */
	// $fn.scrollSpeed(step, speed, easing);
	jQuery.scrollSpeed(100, 600);
	
	/* scroll link */
	$(function() {
		$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop : $($anchor.attr('href')).offset().top - 75
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
	
	/* scroll up */
	$('.scroll-up').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
	
	$('.scroll-up').hover(function(event) {
		$(this).addClass('animated jello');
	}, function(){
		$(this).removeClass('animated jello');
	});
	
	/* freewall */
	var wall = new freewall( "#freewall" );
	wall.reset({
		selector: '.brick',
		animate: true,
		cellW: 255,
		cellH: 255,
		fixSize: 0,
		onResize: function() {
				wall.refresh();
			}
	});
	wall.filter( ".essentials" );
	$( '#navbar li' ).click(function(e) {
		$( '#navbar li' ).removeClass( 'active' );
		var filter = $( this ).addClass( 'active' ).data( 'filter' );
		if ( filter ) {
			wall.filter( filter );
		} else {
			wall.unFilter();
		}
		e.preventDefault();
	});
	wall.fitWidth();
	
	/* chart */
	$('.chart').easyPieChart({
		barColor: '#e42313', // The color of the curcular bar. You can either pass a valid css color string, or a function that takes the current percentage as a value and returns a valid css color string.
		trackColor: '#db532d', // The color of the track, or false to disable rendering.
		scaleColor:	'#fff', // The color of the scale lines, false to disable rendering.
		scaleLength: 0, // Length of the scale lines (reduces the radius of the chart).
		lineCap: 'square', // Defines how the ending of the bar line looks like. Possible values are: butt, round and square.
		lineWidth: 15, // Width of the chart line in px.
		size: 320, // Size of the pie chart in px. It will always be a square.
		rotate: 0, // Rotation of the complete chart in degrees.
        animate: 2000, // Object with time in milliseconds and boolean for an animation of the bar growing ({ duration: 1000, enabled: true }), or false to deactivate animations.
        onStart: function() {}, // Callback function that is called at the start of any animation (only if animate is not false).
        onStop:	 function() {}, // Function that is called at the end of any animation (only if animate is not false).
		onStep: function() {}, // Callback function that is called during animations providing the current value (the context is the plugin, so you can access the DOM element via this.$el). 
    });
	
});