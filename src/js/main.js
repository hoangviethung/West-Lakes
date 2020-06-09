import {
	getSVGs,
	Loading
} from './util/utilities';
import Cookie from './lib/Cookie';
import Swiper from 'swiper';

const setBackgroundByAttr = () => {
	const items = document.querySelectorAll('[data-bg]');

	items.forEach((item) => {
		item.style.backgroundImage = `url(${item.getAttribute('data-bg')})`;
	})
}

const sliderIndex__2 = () => {
	const sliderIndex__2 = new Swiper('.slider-main-index__2 .swiper-container', {
		speed: 1000,
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },
		navigation: {
			nextEl: '.slider-main-index__2 .swiper-button-next',
			prevEl: '.slider-main-index__2 .swiper-button-prev',
		},
	})
}

const sliderIndex__9 = () => {
	const sliderIndex__9 = new Swiper('.slider-item__index-9 .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 22,
		navigation: {
			nextEl: '.slider-item__index-9 .swiper-button-next',
			prevEl: '.slider-item__index-9 .swiper-button-prev',
		},
	})
}

document.addEventListener('DOMContentLoaded', () => {
	Cookie();
	getSVGs();
	Loading();
	// Set Background By Attr
	setBackgroundByAttr();
	// SLIDER INDEX 2
	sliderIndex__2();
	// SLIDER INDEX 9
	sliderIndex__9();
});

// CHECK FORM VALID

// if ($("form").valid() === true) {}
// console.log('Kết quả kiểm tra điều kiện là:' + ' ' + $(".block-send-mail form").valid());