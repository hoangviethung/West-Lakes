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
	});
};

const sliderIndex__2 = () => {
	const sliderIndex__2 = new Swiper(
		'.slider-main-index__2 .swiper-container', {
			speed: 1000,
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			autoHeight: true,
			navigation: {
				nextEl: '.slider-main-index__2 .swiper-button-next',
				prevEl: '.slider-main-index__2 .swiper-button-prev',
			},
			breakpoints: {
				1025: {
					autoHeight: false,
				}
			}
		}
	);
};

const indexVideo = () => {
	var controls = [
		"<div class='title'>",
		'This is some text',
		'</div>',
		"<div class='button'>",
		"<button type='button' class='btn btn-secondary'>This is a button</button>",
		'</div>',
		"<div class='plyr__controls'>",
		"<button type='button' data-plyr='play'>",
		"<svg><use xlink:href='#plyr-play'></use></svg>",
		"<span class='plyr__sr-only'>Play</span>",
		'</button>',
		"<button type='button' data-plyr='pause'>",
		"<svg><use xlink:href='#plyr-pause'></use></svg>",
		"<span class='plyr__sr-only'>Pause</span>",
		'</button>',
		"<span class='plyr__time'>",
		"<span class='plyr__sr-only'>Current time</span>",
		"<span class='plyr__time--current'>00:00</span>",
		'</span>',
		"<span class='plyr__progress'>",
		"<label for='seek{id}' class='plyr__sr-only'>Seek</label>",
		"<input id='seek{id}' class='plyr__progress--seek' type='range' min='0' max='100' step='0.1' value='0' data-plyr='seek'>",
		"<progress class='plyr__progress--played' max='100' value='0' role='presentation'></progress>",
		"<progress class='plyr__progress--buffer' max='100' value='0'>",
		'<span>0</span>% buffered',
		'</progress>',
		"<span class='plyr__tooltip'>00:00</span>",
		'</span>',
		"<span class='plyr__time'>",
		"<span class='plyr__sr-only'>Duration</span>",
		"<span class='plyr__time--duration'>00:00</span>",
		'</span>',
		"<button type='button' data-plyr='mute'>",
		"<svg class='icon--muted'><use xlink:href='#plyr-muted'></use></svg>",
		"<svg><use xlink:href='#plyr-volume'></use></svg>",
		"<span class='plyr__sr-only'>Toggle Mute</span>",
		'</button>',
		"<span class='plyr__volume'>",
		"<label for='volume{id}' class='plyr__sr-only'>Volume</label>",
		"<input id='volume{id}' class='plyr__volume--input' type='range' min='0' max='10' value='5' data-plyr='volume'>",
		"<progress class='plyr__volume--display' max='10' value='0' role='presentation'></progress>",
		'</span>',
		"<button type='button' data-plyr='captions'>",
		"<svg class='icon--captions-on'><use xlink:href='#plyr-captions-on'></use></svg>",
		"<svg><use xlink:href='#plyr-captions-off'></use></svg>",
		"<span class='plyr__sr-only'>Toggle Captions</span>",
		'</button>',
		"<button type='button' data-plyr='fullscreen'>",
		'<svg xmlns="http://www.w3.org/2000/svg" width="19.486" height="19.485" viewBox="0 0 19.486 19.485"><g transform="translate(-1046.772 -1039.112)"><g transform="translate(1061.865 1048.219) rotate(-135)"><path d="M0,0V5.72" transform="translate(3.247 1.282)" fill="none" stroke="#dcc375" stroke-linecap="round" stroke-width="1.5"/><path d="M0,4.1,3.309,0,6.666,4.1" transform="translate(0)" fill="none" stroke="#dcc375" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></g><g transform="translate(1055.879 1043.505) rotate(135)"><path d="M0,0V5.72" transform="translate(3.247 1.282)" fill="none" stroke="#dcc375" stroke-linecap="round" stroke-width="1.5"/><path d="M0,4.1,3.309,0,6.666,4.1" transform="translate(0)" fill="none" stroke="#dcc375" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></g><g transform="translate(1057.151 1054.205) rotate(-45)"><path d="M0,0V5.72" transform="translate(3.247 1.282)" fill="none" stroke="#dcc375" stroke-linecap="round" stroke-width="1.5"/><path d="M0,4.1,3.309,0,6.666,4.1" transform="translate(0)" fill="none" stroke="#dcc375" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></g><g transform="translate(1051.165 1049.492) rotate(45)"><path d="M0,0V5.72" transform="translate(3.247 1.282)" fill="none" stroke="#dcc375" stroke-linecap="round" stroke-width="1.5"/><path d="M0,4.1,3.309,0,6.666,4.1" transform="translate(0)" fill="none" stroke="#dcc375" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></g></g></svg>',
		"<span class='plyr__sr-only'>Toggle Fullscreen</span>",
		'</button>',
		'</div>',
	].join('');

	new Plyr('#player', {
		hideControls: false,
		html: controls,
		controls: [
			'play-large',
			'play',
			'progress',
			'current-time',
			'mute',
			'volume',
			'fullscreen',
		],
	});
};

const imageMapResizer = () => {
	$('map').imageMapResize();
};

const imageMapEffect = () => {
	let swiper;
	$('.image-map [area-target]')
		.on('mouseenter', function (e) {
			const targetNumber = $(this).attr('area-target');
			const x = Number($(this).attr('coords').split(',')[0]);
			const y = Number($(this).attr('coords').split(',')[1]);
			const r = Number($(this).attr('coords').split(',')[2]);
			const dialogWrapperHeight = $('.map-dialog').height();

			if (
				window.innerWidth - x - 125 <
				$(`.dialog-${targetNumber}`).width()
			) {
				$(`.dialog-${targetNumber}`).addClass('right');
				$(`.dialog-${targetNumber}`).css({
					position: 'absolute',
					bottom: dialogWrapperHeight - y + r / 2 + 34,
					right: window.innerWidth - r - x - 34,
					display: 'block',
				});
			} else {
				$(`.dialog-${targetNumber}`).addClass('center');
				$(`.dialog-${targetNumber}`).css({
					position: 'absolute',
					bottom: dialogWrapperHeight - y + r / 2 + 34,
					left: x,
					display: 'block',
				});
			}
			$(`.dialog-${targetNumber}`).addClass('show');
		})
		.on('mouseout', function () {
			const targetNumber = $(this).attr('area-target');
			$(`.dialog-${targetNumber}`).removeAttr('style');
			$(`.dialog-${targetNumber}`).removeClass('show');
		})
		.on('click', function (e) {
			e.preventDefault();
			const targetNumber = $(this).attr('area-target');
			$(`.map-index-4-slider-${targetNumber}`).addClass('active');
			$('.index-4 .map-index-4').addClass('pull-right');
			$('.map-index-4-slider-wrapper').addClass('pull-right');
			swiper = index4Slider();
		});
	$('.map-index-4-slider-controls .map-index-4-slider-close').on(
		'click',
		function () {
			$('.index-4 .map-index-4').removeClass('pull-right');
			$('.map-index-4-slider-wrapper').removeClass('pull-right');
			setTimeout(() => {
				$(`.map-index-4-slider.active`).removeClass('active');
				if (swiper) {
					swiper.destroy(true, true);
				}
			}, 500);
		}
	);
};

const index4Slider = () => {
	return new Swiper('.map-index-4-slider.active .swiper-container', {
		slidesPerView: 1,
		// fadeEffect: {
		// 	crossFade: true,
		// },
		// effect: 'fade',
		loop: true,
		speed: 1200,
		navigation: {
			prevEl: '.map-index-4-slider-controls .map-index-4-slider-prev',
			nextEl: '.map-index-4-slider-controls .map-index-4-slider-next',
		},
	});
};

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

const sliderThumbnailVieo = () => {
	const sliderThumbnailVieo = new Swiper('.slider-thumnail-video .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 30,
		navigation: {
			nextEl: '.slider-thumnail-video .swiper-button-next',
			prevEl: '.slider-thumnail-video .swiper-button-prev',
		},
	})
}

document.addEventListener('DOMContentLoaded', () => {
	Cookie();
	getSVGs();
	Loading();

	imageMapResizer();
	imageMapEffect();

	// Set Background By Attr
	setBackgroundByAttr();
	// Index Video
	indexVideo();
	// SLIDER INDEX 2
	sliderIndex__2();
	// SLIDER INDEX 9
	sliderIndex__9();
	sliderThumbnailVieo();
});

// CHECK FORM VALID

// if ($("form").valid() === true) {}
// console.log('Kết quả kiểm tra điều kiện là:' + ' ' + $(".block-send-mail form").valid());