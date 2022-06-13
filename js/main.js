// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});

// WOW js

new WOW().init();


// coming-soon-js

	var countDownDate = new Date ("jun 20, 2022 00:00:00").getTime();
	var x = setInterval(function(){
	var now = new Date().getTime();
	var distance = countDownDate - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;

	if(distance < 0){
		clearInterval(x);

		document.getElementById("days").innerHTML = "00";
		document.getElementById("hours").innerHTML = "00";
		document.getElementById("minutes").innerHTML = "00";
		document.getElementById("seconds").innerHTML = "00";
	}

},1000);

jQuery(function ($) {
	"use strict";
	var $window = $(window);
	var windowsize = $(window).width();
	var $root = $("html, body");
	var $this = $(this);
 
 
	/*Testimonials 3columns*/
	$("#testimonial-slider").owlCarousel({
	   items: 3,
	   autoplay:true,
	   autoplayTimeout:3000,
	   autoplayHoverPause: false,
	   loop: true,
	   margin: 30,
	   dots: true,
	   nav: false,
	   responsive: {
		  1280: {
			 items: 3,
		  },
		  768: {
			 items: 2,
		  },
		  320: {
			 items: 1,
		  },
	   }
	});
 
 
 });

 // Owlcarousel
 $(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items:6,
		loop:true,
		margin:10,
		nav:true,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:false,
		center: true,
		navText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
		],
		responsive:{
			320:{
				items:1
			},
			768:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});
});
 
 
