// Any Sticky Header with Js

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header-menu");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger" ).on('click', function() {	
			$(this).toggleClass('active');
			$('.main-menu').slideToggle(500);
		});
	}

	// COUNTER NUMBERS
    jQuery('.count-now').appear(function() {
      jQuery('.count-now').countTo();
    });

// Sticky with jQuery

// $(window).scroll(function(){
//   let sticky = $('.menu-section'),
//   scroll = $(window).scrollTop();

//   if(scroll >= 100) sticky.addClass('fixed');
//   else sticky.removeClass('fixed');
// });
    // Wow JS
new WOW().init();