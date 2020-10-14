$(function () {
	/* Slider 1*/
	const Slider1 = $(".slider1");
	Slider1.owlCarousel({
		items: 1,
		smartSpeed: 2000,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplayHoverPause: true,
		loop: true,
		dotsContainer: ('.dots-container'),
	});
	$('#slider1_left').click(function () {
		console.log('Left');
		Slider1.trigger('prev.owl.carousel');
	})

	$('#slider1_right').click(function () {
		console.log('Right');
		Slider1.trigger('next.owl.carousel');
	})
	

	/* Slider 2*/
	const Slider2 = $(".slider2");
	Slider2.owlCarousel({
		items: 1,
		smartSpeed: 2000,
		dots: false,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplayHoverPause: true,
		loop: true,
		
	});
	$('#slider2_left').click(function () {
		console.log('Left');
		Slider2.trigger('prev.owl.carousel');
	})

	$('#slider2_right').click(function () {
		console.log('Right');
		Slider2.trigger('next.owl.carousel');
	})
	
	
	
	/* Slider 3*/
	const Slider3 = $("#slider3");
	Slider3.owlCarousel({
		items: 3,
		smartSpeed: 2000,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplayHoverPause: true,
		loop: true,
		dotsEach:true,
		dotsContainer: ('.dots-certificat'),
		responsive:{
			0:{
				items: 1
			},
			715:{
				items: 2
			},
			1100:{
				items: 3
			}
		}
	});
	$('#slider3_left').click(function () {
		console.log('Left');
		Slider3.trigger('prev.owl.carousel');
	})

	$('#slider3_right').click(function () {
		console.log('Right');
		Slider3.trigger('next.owl.carousel');
	})
	
	
	
	/* Smooth scroll */
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;


		$("html, body").animate({
			scrollTop: blockOffset
		}, 1000);
	});

	/* Header menu */
	$("#burger_menu").on("click", function (event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#menu_nav").toggleClass("active");
	});


	/* Modal-popup */
	const modalCall = $("[data-modal]");
	const modalClose = $("[data-close]");

	modalCall.on("click", function (event) {
		event.preventDefault();

		let $this = $(this);
		let modalId = $this.data('modal');
		$(modalId).addClass('show');
		$("body").addClass('no-scroll');
	});


	modalClose.on("click", function (event) {
		event.preventDefault();
		
		let $this = $(this);
		let modalParent = $this.parents('.popup_wrapper');
			modalParent.removeClass('show');
			$("body").removeClass('no-scroll');
		
	});


	$(".popup_wrapper").on("click", function (event) {
		let $this = $(this);
		setTimeout(function () {
			$this.removeClass('show');
			$("body").removeClass('no-scroll');
		}, 200);
	});
	$(".popup_forma").on("click", function (event) {
		event.stopPropagation();
	});
	

});


