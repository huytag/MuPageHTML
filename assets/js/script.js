(function ($) {
	$(function () {
		$(document).ready(function () {
			// hambuger();
			$(window).scroll(function () {
				bgscrollHeader();
			});		
		});

		function bgscrollHeader() {
			let elemen = $(".header");
			if ($(window).scrollTop() > 200) {
				elemen.addClass("is-active");
			} else
				elemen.removeClass("is-active");
		}

		function hambuger() {
			if ($('.hamburger-box').length > 0) {
				$('.hamburger-box').on('click', function (e) {
					$(this).toggleClass("is-active");
					$('.header-right').stop().slideToggle(200)
					$('html').toggleClass("is-active");
				});
			}

		}

	});
})(jQuery);