(function ($) {
	$(function () {
		$(document).ready(function () {
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
	});
})(jQuery);