export function slider_init () {
	let sliders = document.querySelectorAll('._swiper');
	if(sliders) {
		for (let index = 0; index < sliders.length; index++) {
			let slider = sliders[index];
			if (!slider.classList.contains('swiper-bild')) {
				let slider_items = slider.children;
				if (slider_items) {
					for (let index = 0; index < slider_items.length; index++) {
						let el = slider_items[index];
						el.classList.add('swiper-slide');
					}
				}
				let slider_content = slider.innerHTML;
				let slider_wrapper = document.createElement('div');
				slider_wrapper.classList.add('swiper-wrapper');
				slider_wrapper.innerHTML = slider_content;
				slider.innerHTML = '';
				slider.appendChild(slider_wrapper);
				slider.classList.add('swiper-bild');

				if (slider.classList.contains('_swiper_scroll')) {
					let sliderScroll = document.createElement('div');
					sliderScroll.classList.add('swiper-scrollbar');
					slider.appendChild(sliderScroll);
				}
			}
			if (slider.classList.contains('_gallery')) {
				//.slider.data('LightGallry').destroy(true);
			}
		}
		sliders_bild_callback();
	}
}

export function sliders_bild_callback(params) { }

if (document.querySelector('.slider-reviews__body')) {
	new Swiper('.slider-reviews__body', {
		slidesPerView: 1,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		// Arrows
		navigation: {
			nextEl: '.slider-reviews .slider-arrow_next',
			prevEl: '.slider-reviews .slider-arrow_prev',
		}
	});
}
