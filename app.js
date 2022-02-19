import * as myFunctions from "./modules/functions.js";
import * as mySpoilers from "./modules/spoilers.js";
import * as myDa from "./modules/da.js";


window.onload = function () { 
	myFunctions.isWebp();
	myFunctions.ibg();

	// Инициализация слайдера
	if (document.querySelector('.slider-reviews__body')) {
		new Swiper('.slider-reviews__body', {
			loop: true,
			autoHeight: true,
			speed: 800,
			// Arrows
			navigation: {
				nextEl: '.slider-reviews .slider-arrow_next',
				prevEl: '.slider-reviews .slider-arrow_prev',
			}
		});
	}

	// Инициализация спойлеров
	const spoilersArray = document.querySelectorAll('[data-spoilers]');
	mySpoilers.initSpoiler(spoilersArray);
	document.addEventListener("click", documentActions)

	// Инициализация Динамического адаптива
	const da = new myDa.DynamicAdapt("max");
	da.init();


	// Actions (делегирование события click)
	function documentActions(e) {


	}




}