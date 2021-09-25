$(document).ready(function () {
	new WOW().init();

	$('.owl-carousel.owl-carusel1').owlCarousel({
		autoHeight: true,
		slideBy: 4,
		autoplayTimeout: 7000,
		margin: 10,
		nav: true,
		navText: ["", ""],
		rewindNav: true,
		responsive: {
			0: {
				items: 1
			},
			500: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	});
	$('.owl-carousel.owl-carusel2').owlCarousel({
		slideBy: 4,
		autoplayTimeout: 7000,
		autoHeight: false,
		margin: 20,
		nav: true,
		navText: ["", ""],
		rewindNav: true,
		responsive: {
			0: {
				items: 1
			},
			500: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});
});
$(document).ready(function () {

	$('.first-button').on('click', function () {

		$('.animated-icon1').toggleClass('open');
	});
	$('.second-button').on('click', function () {

		$('.animated-icon2').toggleClass('open');
	});
	$('.third-button').on('click', function () {

		$('.animated-icon3').toggleClass('open');
	});
});

$("#go_p").click(function () {
	$("html").load("ru.html")
});




