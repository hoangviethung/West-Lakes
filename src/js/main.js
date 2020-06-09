import { getSVGs, Loading } from './util/utilities';
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
		'.slider-main-index__2 .swiper-container',
		{
			speed: 1000,
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			navigation: {
				nextEl: '.slider-main-index__2 .swiper-button-next',
				prevEl: '.slider-main-index__2 .swiper-button-prev',
			},
		}
	);
};

const indexVideo = () => {
	// Video wrapper
	var videoWrapper = document.querySelector('#video-container');
	// Video
	if (videoWrapper) {
		var video = document.querySelector('#player');

		// Buttons
		var playButton = document.querySelector('#play-pause');
		var muteButton = document.querySelector('#mute');
		var fullScreenButton = document.querySelector('#full-screen');

		// Sliders
		var seekBar = document.querySelector('#seek-bar');
		var volumeBar = document.querySelector('#volume-bar');

		// Event handler
		console.log(video.pause);
		playButton.addEventListener('click', function () {
			if (video.paused == true) {
				// Play the video
				video.play();

				// Update the button text to 'Pause'
				playButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><g transform="translate(-951 -1034.333)"><rect width="5" height="15" transform="translate(951 1034.333)" fill="#dcc375"/><rect width="5" height="15" transform="translate(961 1034.333)" fill="#dcc375"/></g></svg>';
			} else {
				// Pause the video
				video.pause();

				// Update the button text to 'Play'
				playButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15"><path id="Polygon_1" data-name="Polygon 1" d="M6.634,1.5a1,1,0,0,1,1.732,0l5.769,10a1,1,0,0,1-.866,1.5H1.731a1,1,0,0,1-.866-1.5Z" transform="translate(13) rotate(90)" fill="#dcc375" opacity="0.797"/></svg>';
			}
		});
	}
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
});

// CHECK FORM VALID

// if ($("form").valid() === true) {}
// console.log('Kết quả kiểm tra điều kiện là:' + ' ' + $(".block-send-mail form").valid());
