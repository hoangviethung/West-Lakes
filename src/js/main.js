import {
	getSVGs,
	Loading
} from './util/utilities';
import Cookie from './lib/Cookie';
import Mapping from './lib/MoveElement';
import CommonController from './lib/CommonController';

const setBackgroundByAttr = () => {
	const items = document.querySelectorAll('[data-bg]');

	items.forEach((item) => {
		item.style.backgroundImage = `url(${item.getAttribute('data-bg')})`;
	});
};

// SHOW BACK TO TOP
const showBackToTop = () => {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 800) {
			$('#back-to-top').addClass('active');
		} else {
			$('#back-to-top').removeClass('active');
		}
	});

	$('#back-to-top').on('click', function (e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: 0,
		});
	});
};

// ACTIVE HEADER WHEN SCROLL
function activeHeader() {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$('header').addClass('active');
		} else {
			$('header').removeClass('active');
		}
	});
}

const showSearch = () => {
	$('.search .icon').on('click', function (e) {
		e.preventDefault();
		$(this).parent('.search').toggleClass('active');
	});
};

const toggleMobile = () => {
	$('.toggle-menu-mobile').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('nav').toggleClass('active');
		$('body').toggleClass('disabled');
		$('#overlay').toggleClass('active');
	});

	$('#overlay').click(function (e) {
		e.preventDefault();
		$(this).removeClass('active');
		$('body').removeClass('disabled');
		$('nav').removeClass('active');
		$('.toggle-menu-mobile').toggleClass('active');
	});
};

const sliderIndex__2 = () => {
	const sliderIndex__2 = new Swiper(
		'.slider-main-index__2 .swiper-container', {
			speed: 1500,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.slider-main-index__2 .swiper-button-next',
				prevEl: '.slider-main-index__2 .swiper-button-prev',
			},
			breakpoints: {
				1025: {
					autoHeight: false,
				},
			},
		}
	);

	$('.slider-main-index__2 .swiper-button-pause').click('click', function () {
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			sliderIndex__2.autoplay.stop();
		} else {
			sliderIndex__2.autoplay.start();
		}
	});
};

const indexVideo = () => {
	const player = new Plyr('#player', {
		hideControls: false,
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
	$('[data-plyr="play"')
		.find('.icon--pressed')
		.replaceWith(
			'<svg class="icon--pressed" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-949 -1032.333)"><rect width="4" height="15" transform="translate(951 1034.333)" fill="#dcc375"/><rect width="4" height="15" transform="translate(961 1034.333)" fill="#dcc375"/></g></svg>'
		);
	$('[data-plyr="play"')
		.find('.icon--not-pressed')
		.replaceWith(
			'<svg id="plyr-play"class="icon--not-pressed"  viewBox="0 0 18 18"><path fill="#dcc375" d="M15.562 8.1L3.87.225c-.818-.562-1.87 0-1.87.9v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z"></path></svg>'
		);
	$('[data-plyr="mute"]')
		.find('.icon--not-pressed')
		.replaceWith(
			'<svg class="icon--not-pressed xmlns="http://www.w3.org/2000/svg" width="27.39" height="20.543" viewBox="0 0 27.39 20.543"><g transform="translate(19 -137.508)"><path d="M23.379,83.955l-.005-.006a.846.846,0,0,1-.611.259.853.853,0,0,1-.569-1.491,11.939,11.939,0,0,0,2.281-13.654l.01,0a.855.855,0,1,1,1.558-.7l.007,0a13.707,13.707,0,0,1-2.67,15.6Zm-.268-17.388a.856.856,0,1,1,.856-.856.856.856,0,0,1-.856.856ZM19.8,80.262a.853.853,0,1,1-1.263-1.145l0,0a6.847,6.847,0,0,0,.023-9.659.854.854,0,1,1,1.183-1.232l0,0A8.554,8.554,0,0,1,19.8,80.262Zm-6.965,4.281a2.591,2.591,0,0,1-.531-.056,3.417,3.417,0,0,1-1.906-.96l-1.7-1.7.007-.007a.854.854,0,0,1,1.208-1.208l0,0,1.705,1.706a1.675,1.675,0,0,0,.955.471.836.836,0,0,0,.256.043.856.856,0,0,0,.856-.856V66.567a.844.844,0,0,0-1.107-.814,1.668,1.668,0,0,0-.959.472L7.008,70.847H3.424a1.712,1.712,0,0,0-1.712,1.712v3.424A1.712,1.712,0,0,0,3.424,77.7h.856a.856.856,0,1,1,0,1.712H3.424A3.424,3.424,0,0,1,0,75.982V72.559a3.424,3.424,0,0,1,3.424-3.424H6.281l4.12-4.12a3.425,3.425,0,0,1,1.906-.959,2.566,2.566,0,0,1,3.1,2.512V81.975a2.568,2.568,0,0,1-2.567,2.568Zm-5.564-6.42a.856.856,0,1,1-.856.857.856.856,0,0,1,.856-.857Z" transform="translate(-19 73.508)" fill="#dcc375" fill-rule="evenodd"/></g></svg>'
		);
	$('[data-plyr="mute"]')
		.find('.icon--pressed')
		.replaceWith(
			'<svg class="icon--pressed id="plyr-muted" viewBox="0 0 18 18"><path d="M12.4 12.5l2.1-2.1 2.1 2.1 1.4-1.4L15.9 9 18 6.9l-1.4-1.4-2.1 2.1-2.1-2.1L11 6.9 13.1 9 11 11.1zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z" fill="#dcc375"></path></svg>'
		);
	$('[data-plyr="fullscreen"]')
		.find('.icon--pressed')
		.replaceWith(
			'<svg class="icon--pressed" width="19.486" height="19.485" xmlns="http://www.w3.org/2000/svg" class="icon--pressed"> <g> <title>background</title> <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"/> </g> <g> <title>Layer 1</title> <g id="svg_1"> <g id="svg_2" transform="rotate(-135 15.093017578125,8.982322692871094) "> <path id="svg_3" stroke-width="1.5" stroke-linecap="round" stroke="#dcc375" fill="none" d="m18.340018,10.264323l0,5.72"/> <path id="svg_4" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" stroke="#dcc375" fill="none" d="m15.093018,13.082323l3.309,-4.1l3.357,4.1"/> </g> <g id="svg_5" transform="rotate(135 9.044750213623047,4.268333435058594) "> <path id="svg_6" stroke-width="1.5" stroke-linecap="round" stroke="#dcc375" fill="none" d="m12.29175,5.550334l0,5.72"/> <path id="svg_7" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" stroke="#dcc375" fill="none" d="m9.04475,8.368334l3.309,-4.1l3.357,4.1"/> </g> <g id="svg_8" transform="rotate(-45 10.379028320312496,15.0928955078125) "> <path id="svg_9" stroke-width="1.5" stroke-linecap="round" stroke="#dcc375" fill="none" d="m13.626028,16.374895l0,5.72"/> <path id="svg_10" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" stroke="#dcc375" fill="none" d="m10.379028,19.192896l3.309,-4.1l3.357,4.1"/> </g> <g id="svg_11" transform="rotate(45 4.3307609558105495,10.442188262939451) "> <path id="svg_12" stroke-width="1.5" stroke-linecap="round" stroke="#dcc375" fill="none" d="m7.577761,11.724188l0,5.72"/> <path id="svg_13" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" stroke="#dcc375" fill="none" d="m4.330761,14.542188l3.309,-4.1l3.357,4.1"/> </g> </g> </g></svg>'
		);
	$('[data-plyr="fullscreen"]')
		.find('.icon--not-pressed')
		.replaceWith(
			'<svg class="icon--not-pressed" width="19.486" height="18" xmlns="http://www.w3.org/2000/svg"> <g> <title>background</title> <rect x="-1" y="-1" width="21.486" height="20" id="canvas_background" fill="none"/> </g> <g> <title>Layer 1</title> <g id="svg_1"> <g id="svg_2"> <path d="m14.993518,1.454571l0,5.72" fill="none" stroke="#dcc375" stroke-linecap="round" stroke-width="1.5" id="svg_3" transform="rotate(45 14.993519783020027,4.314567089080809) "/> <path d="m13.200598,4.946111l3.309,-4.1l3.357,4.1" fill="none" stroke="#dcc375" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" id="svg_4" transform="rotate(45 16.533597946166992,2.8961122035980225) "/> </g> <g id="svg_5" transform="rotate(180 16.491416931152344,15.312791824340822) " stroke="null"> <path d="m17.909868,13.992869l0,5.72" fill="none" stroke-linecap="round" stroke-width="1.5" id="svg_6" transform="rotate(-45 17.909872055053707,16.852870941162113) " stroke="#dcc375"/> <path d="m13.158418,17.362789l3.309,-4.1l3.357,4.1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" id="svg_7" transform="rotate(-45 16.491416931152347,15.312791824340817) " stroke="#dcc375"/> </g> <g transform="rotate(-135 3.8398504257202135,14.217482566833494) " id="svg_8"> <path d="m3.753851,11.998479l0,5.72" fill="none" stroke="#dcc375" stroke-linecap="round" stroke-width="1.5" id="svg_9"/> <path d="m0.506851,14.816479l3.309,-4.1l3.357,4.1" fill="none" stroke="#dcc375" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" id="svg_10"/> </g> <g transform="rotate(-45 3.894302368164061,3.858327865600585) " id="svg_11"> <path d="m3.808301,1.639331l0,5.72" fill="none" stroke="#dcc375" stroke-linecap="round" stroke-width="1.5" id="svg_12"/> <path d="m0.561301,4.457331l3.309,-4.1l3.357,4.1" fill="none" stroke="#dcc375" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" id="svg_13"/> </g> </g> </g></svg>'
		);

	$('.plyr__control--overlaid').html(`
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="138.144" height="138.143" viewBox="0 0 138.144 138.143"><defs><filter id="a" x="0" y="0" width="138.144" height="138.143" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="b"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(-876 -3769)" opacity="0.503"><g transform="matrix(1, 0, 0, 1, 876, 3769)" filter="url(#a)"><g transform="translate(9 6)" fill="#f7f9f9"><path d="M 60.07175827026367 118.6435241699219 C 52.16395950317383 118.6435241699219 44.49350738525391 117.0951080322266 37.27344131469727 114.0412750244141 C 33.80315780639648 112.5734786987305 30.45594215393066 110.7566452026367 27.32477569580078 108.6412734985352 C 24.22297477722168 106.5457382202148 21.3061408996582 104.1391067504883 18.65527534484863 101.4882583618164 C 16.00440788269043 98.83739471435547 13.59779167175293 95.92053985595703 11.50225830078125 92.81874084472656 C 9.38689136505127 89.68757629394531 7.570058345794678 86.34035491943359 6.102258205413818 82.87007141113281 C 3.048424959182739 75.6500244140625 1.500008225440979 67.97956085205078 1.500008225440979 60.07175827026367 C 1.500008225440979 52.16395950317383 3.048424959182739 44.49350738525391 6.102258205413818 37.27344131469727 C 7.570058345794678 33.80315780639648 9.38689136505127 30.45594215393066 11.50225830078125 27.32477569580078 C 13.59779167175293 24.22297477722168 16.00440788269043 21.3061408996582 18.65527534484863 18.65527534484863 C 21.3061408996582 16.00440788269043 24.22297477722168 13.59779167175293 27.32477569580078 11.50225830078125 C 30.45594215393066 9.38689136505127 33.80315780639648 7.570058345794678 37.27344131469727 6.102258205413818 C 44.49350738525391 3.048424959182739 52.16395950317383 1.500008225440979 60.07175827026367 1.500008225440979 C 67.97956085205078 1.500008225440979 75.6500244140625 3.048424959182739 82.87007141113281 6.102258205413818 C 86.34035491943359 7.570058345794678 89.68757629394531 9.38689136505127 92.81874084472656 11.50225830078125 C 95.92053985595703 13.59779167175293 98.83739471435547 16.00440788269043 101.4882583618164 18.65527534484863 C 104.1391067504883 21.3061408996582 106.5457382202148 24.22297477722168 108.6412734985352 27.32477569580078 C 110.7566452026367 30.45594215393066 112.5734786987305 33.80315780639648 114.0412750244141 37.27344131469727 C 117.0951080322266 44.49350738525391 118.6435241699219 52.16395950317383 118.6435241699219 60.07175827026367 C 118.6435241699219 67.97956085205078 117.0951080322266 75.6500244140625 114.0412750244141 82.87007141113281 C 112.5734786987305 86.34035491943359 110.7566452026367 89.68757629394531 108.6412734985352 92.81874084472656 C 106.5457382202148 95.92053985595703 104.1391067504883 98.83739471435547 101.4882583618164 101.4882583618164 C 98.83739471435547 104.1391067504883 95.92053985595703 106.5457382202148 92.81874084472656 108.6412734985352 C 89.68757629394531 110.7566452026367 86.34035491943359 112.5734786987305 82.87007141113281 114.0412750244141 C 75.6500244140625 117.0951080322266 67.97956085205078 118.6435241699219 60.07175827026367 118.6435241699219 Z" stroke="none"/><path d="M 60.07175827026367 2.999992370605469 C 52.36579132080078 2.999992370605469 44.89193725585938 4.508537292480469 37.85777282714844 7.483741760253906 C 34.4766845703125 8.913833618164063 31.21539306640625 10.68402862548828 28.16448211669922 12.74517822265625 C 25.14179229736328 14.78726959228516 22.29928588867188 17.13257598876953 19.71591949462891 19.71591949462891 C 17.13257598876953 22.29928588867188 14.78726959228516 25.14179229736328 12.74517822265625 28.16448211669922 C 10.68402862548828 31.21539306640625 8.913833618164063 34.4766845703125 7.483741760253906 37.85777282714844 C 4.508537292480469 44.89193725585938 2.999992370605469 52.36579132080078 2.999992370605469 60.07175827026367 C 2.999992370605469 67.77772521972656 4.508537292480469 75.25157165527344 7.483741760253906 82.28573608398438 C 8.913833618164063 85.66683197021484 10.68402862548828 88.92812347412109 12.74517822265625 91.97903442382813 C 14.78726959228516 95.00172424316406 17.13257598876953 97.84423065185547 19.71591949462891 100.4275970458984 C 22.29928588867188 103.0109405517578 25.14179229736328 105.3562469482422 28.16448211669922 107.3983383178711 C 31.21539306640625 109.4594879150391 34.4766845703125 111.2296829223633 37.85777282714844 112.6597747802734 C 44.89193725585938 115.6349792480469 52.36579132080078 117.1435241699219 60.07175827026367 117.1435241699219 C 67.77772521972656 117.1435241699219 75.25157165527344 115.6349792480469 82.28573608398438 112.6597747802734 C 85.66683197021484 111.2296829223633 88.92812347412109 109.4594879150391 91.97903442382813 107.3983383178711 C 95.00172424316406 105.3562469482422 97.84423065185547 103.0109405517578 100.4275970458984 100.4275970458984 C 103.0109405517578 97.84423065185547 105.3562469482422 95.00172424316406 107.3983383178711 91.97903442382813 C 109.4594879150391 88.92812347412109 111.2296829223633 85.66683197021484 112.6597747802734 82.28573608398438 C 115.6349792480469 75.25157165527344 117.1435241699219 67.77772521972656 117.1435241699219 60.07175827026367 C 117.1435241699219 52.36579132080078 115.6349792480469 44.89193725585938 112.6597747802734 37.85777282714844 C 111.2296829223633 34.4766845703125 109.4594879150391 31.21539306640625 107.3983383178711 28.16448211669922 C 105.3562469482422 25.14179229736328 103.0109405517578 22.29928588867188 100.4275970458984 19.71591949462891 C 97.84423065185547 17.13257598876953 95.00172424316406 14.78726959228516 91.97903442382813 12.74517822265625 C 88.92812347412109 10.68402862548828 85.66683197021484 8.913833618164063 82.28573608398438 7.483741760253906 C 75.25157165527344 4.508537292480469 67.77772521972656 2.999992370605469 60.07175827026367 2.999992370605469 M 60.07175827026367 -7.62939453125e-06 C 93.24846649169922 -7.62939453125e-06 120.1435241699219 26.89505004882813 120.1435241699219 60.07175827026367 C 120.1435241699219 93.24846649169922 93.24846649169922 120.1435241699219 60.07175827026367 120.1435241699219 C 26.89505004882813 120.1435241699219 -7.62939453125e-06 93.24846649169922 -7.62939453125e-06 60.07175827026367 C -7.62939453125e-06 26.89505004882813 26.89505004882813 -7.62939453125e-06 60.07175827026367 -7.62939453125e-06 Z" stroke="none" fill="#fff"/></g></g><g transform="translate(930.352 3812.828)" opacity="0.845" style="mix-blend-mode:multiply;isolation:isolate"><g transform="translate(0 0)"><path d="M42.73,22.352,17.366,7.445A6.88,6.88,0,0,0,7,13.385V43.2a6.88,6.88,0,0,0,3.463,5.986,7.063,7.063,0,0,0,3.417.917,6.88,6.88,0,0,0,3.486-.963L42.73,34.231a6.88,6.88,0,0,0,0-11.879Zm-2.293,7.912L15.21,45.193a2.293,2.293,0,0,1-3.623-2V13.385a2.293,2.293,0,0,1,1.147-2,2.477,2.477,0,0,1,1.147-.321,2.293,2.293,0,0,1,1.147.321l25.227,14.93a2.293,2.293,0,0,1,0,3.945Z" transform="translate(-7 -6.496)" fill="#054b37"/></g></g></g></svg>`);
	player.on('loadeddata', function () {
		let minuteDuration = Math.floor(player.duration / 60);

		let secondDuration = Math.floor(player.duration % 60);
		if (minuteDuration < 10) {
			minuteDuration = '0' + minuteDuration;
		}
		if (secondDuration < 10) {
			secondDuration = '0' + secondDuration;
		}
		player.on('timeupdate', (e) => {
			let currentMinute = Math.floor(e.detail.plyr.currentTime / 60);
			if (currentMinute < 10) {
				currentMinute = '0' + currentMinute;
			}
			let currentSecond = Math.floor(e.detail.plyr.currentTime % 60);
			if (currentSecond < 10) {
				currentSecond = '0' + currentSecond;
			}
			$('.plyr__time--current').html(
				`${currentMinute}:${currentSecond} / ${minuteDuration}:${secondDuration}`
			);
		});
	});
};

const imageMapResizer = () => {
	$('map').imageMapResize();
};

const imageMapEffect = () => {
	let swiper, effect;
	let autoplay = true;
	let i = 1;
	const generatePosition = () => {
		if (window.innerWidth > 1024) {
			$('.image-map [area-target').each(function () {
				const targetNumber = $(this).attr('area-target');
				const x = Number($(this).attr('coords').split(',')[0]);
				const y = Number($(this).attr('coords').split(',')[1]);
				const r = Number($(this).attr('coords').split(',')[2]);
				const dialogWrapperHeight = $('.map-dialog').height();
				if (
					window.innerWidth - x - 125 <
					$(`.dialog-${targetNumber} .dialog-wrapper`).width()
				) {
					$(`.dialog-${targetNumber}`).addClass('right');
					$(`.dialog-${targetNumber}`).css({
						position: 'absolute',
						bottom: dialogWrapperHeight - y + r / 2 + 34,
						right: window.innerWidth - r - x - 34,
						opacity: '0',
					});
				} else {
					$(`.dialog-${targetNumber}`).addClass('center');
					$(`.dialog-${targetNumber}`).css({
						position: 'absolute',
						bottom: dialogWrapperHeight - y + r / 2 + 34,
						left: x,
						opacity: '0',
					});
				}
			});
		}
	};
	generatePosition();

	if (window.innerWidth > 1024) {
		effect = setInterval(() => {
			$(`.dialog`).removeClass('show');
			$(`.dialog-${i}`).addClass('show');
			i += 1;
			if (i > 7) {
				i = 1;
			}
		}, 1000);
	}

	$('.image-map [area-target]')
		.on('mouseenter', function (e) {
			clearInterval(effect);
			const targetumber = $(this).attr('area-target');
			$(`.dialog`).removeClass('show');
			$(`.dialog-${targetumber}`).addClass('show');
		})
		.on('mouseout', function () {
			const targetNumber = $(this).attr('area-target');
			$(`.dialog-${targetNumber}`).removeClass('show');
			if (autoplay) {
				effect = setInterval(() => {
					$(`.dialog`).removeClass('show');
					$(`.dialog-${i}`).addClass('show');
					i += 1;
					if (i > 7) {
						i = 1;
					}
				}, 1000);
			}
		})
		.on('click', function (e) {
			e.preventDefault();
			if (window.innerWidth >= 1025) {
				autoplay = false;
				clearInterval(effect);
				const targetNumber = $(this).attr('area-target');
				$(`.map-index-4-slider-${targetNumber}`).addClass('active');
				$('.index-4 .map-index-4').addClass('pull-right');
				$('.map-index-4-slider-wrapper').addClass('pull-right');
				swiper = index4Slider();
			}
		});
	$('.map-index-4-slider-controls .map-index-4-slider-close').on(
		'click',
		function () {
			autoplay = true;
			$('.index-4 .map-index-4').removeClass('pull-right');
			$('.map-index-4-slider-wrapper').removeClass('pull-right');
			effect = setInterval(() => {
				$(`.dialog`).removeClass('show');
				$(`.dialog-${i}`).addClass('show');
				i += 1;
				if (i > 7) {
					i = 1;
				}
			}, 1000);
			setTimeout(() => {
				$(`.map-index-4-slider.active`).removeClass('active');
				if (swiper) {
					swiper.destroy(true, true);
				}
			}, 500);
		}
	);

	$('[data-dialog]').on('click', function (e) {
		let swiper;
		const targetNumber = $(this).attr('data-dialog');
		const src = `#map-index-4-slider-${targetNumber}`;
		$.fancybox.open({
			src: src,
			type: 'inline',
			opts: {
				touch: false,
				beforeShow: function (instance, current) {
					$(`.map-index-4-slider-${targetNumber}`).addClass('active');
					swiper = index4Slider();
				},
				beforeClose: function () {
					setTimeout(() => {
						$(`.map-index-4-slider.active`).removeClass('active');
						if (swiper) {
							swiper.destroy(true, true);
						}
					}, 500);
				},
			},
		});
	});
};

const sliderMenu = () => {
	const sliderMenu = new Swiper('.slider-menu .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 15,
		breakpoints: {
			1440: {
				slidesPerView: 7,
			},
		},
	});
	return sliderMenu
};

const index4Slider = () => {
	return new Swiper('.map-index-4-slider.active .swiper-container', {
		slidesPerView: 1,
		// fadeEffect: {
		// 	crossFade: true,
		// },
		// effect: 'fade',
		observer: true,
		observeParents: true,
		spaceBetween: 10,
		loop: true,
		speed: 1200,
		navigation: {
			prevEl: '.map-index-4-slider-prev-mobile',
			nextEl: '.map-index-4-slider-next-mobile',
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 1,
			},
			1025: {
				navigation: {
					prevEl: '.map-index-4-slider-controls .map-index-4-slider-prev',
					nextEl: '.map-index-4-slider-controls .map-index-4-slider-next',
				},
			}
		},
	});
};

const sliderIndex__9 = () => {
	const sliderIndex__9 = new Swiper(
		'.slider-item__index-9 .swiper-container', {
			slidesPerView: 1,
			spaceBetween: 10,
			navigation: {
				nextEl: '.slider-item__index-9 .swiper-button-next',
				prevEl: '.slider-item__index-9 .swiper-button-prev',
			},
			breakpoints: {
				575: {
					slidesPerView: 2,
				},
				1025: {
					slidesPerView: 3,
					spaceBetween: 22,
				},
			},
		}
	);
};

const sliderThumbnailVideo = () => {
	const sliderThumbnailVieo = new Swiper(
		'.slider-thumnail-video .swiper-container', {
			slidesPerView: 2,
			spaceBetween: 10,
			navigation: {
				nextEl: '.slider-thumnail-video .swiper-button-next',
				prevEl: '.slider-thumnail-video .swiper-button-prev',
			},
			breakpoints: {
				1025: {
					slidesPerView: 3,
					spaceBetween: 22,
				},
			},
			on: {
				init: function () {
					$('.slider-thumnail-video .swiper-slide').each(function (
						index
					) {
						const urlActive = $('.review-video .youtube-api').attr(
							'data-url'
						);
						$(this).on('click', function () {
							const url = $(this).find('.item').attr('data-url');
							const id = getYoutubeID(url);
							$(this).addClass('active');
							$('.slider-thumnail-video .swiper-slide')
								.not(this)
								.removeClass('active');
							if (player) {
								player.loadVideoById(id);
							}
							const title = $(this).find('.text h3').html();
							const description = $(this)
								.find('.text p.d-n')
								.html();
							const date = $(this).find('.text .date').html();
							$('.index-10 .review-video .youtube-api').attr(
								'data-url',
								url
							);
							$('.index-10 .review-video .content h3').html(
								title
							);
							$('.index-10 .review-video .content p').html(
								description
							);
							$('.index-10 .review-video .content .date').html(
								date
							);
						});

						// Get Video Thumbnail
						// const imageThumbnail = `http://i3.ytimg.com/vi/${id}/hqdefault.jpg`;
						// $(this).find('.img img').attr('src', imageThumbnail);
					});
					$('.slider-thumnail-video .swiper-slide')
						.eq(0)
						.triggerHandler('click');
				},
			},
		}
	);
};

const index5Toggle = () => {
	let swiper;
	$('.map-index-5 [data-target]').on('click', function (e) {
		$('.matbang-slider').removeClass('active');
		$('.matbang-slider').removeClass('show');
		const target = $(this).attr('data-target');
		$(this).addClass('active');
		if (swiper instanceof Swiper) {
			swiper.destroy(true, true);
		}
		$('.map-index-5 [data-target]').not(this).removeClass('active');
		$('.map-index-5 .index-5-aside').addClass('active');
		$(`#${target}`).addClass('active');
		setTimeout(() => {
			$(`#${target}`).addClass('show');
		}, 50);
		swiper = index5Slider(target);
	});

	$('.map-index-5 .map-index-4-slider-close').on('click', function () {
		$('.map-index-5 .index-5-aside').removeClass('active');
		if (swiper instanceof Swiper) {
			swiper.destroy(true, true);
		}
		$('.map-index-5 [data-target].active').removeClass('active');
		setTimeout(() => {
			$('.matbang-slider').removeClass('active');
		}, 500);
	});

	if (window.innerWidth < 1025) {
		$('[data-target="matbang-1"]').triggerHandler('click');
	}
};

const index5Slider = (selector) => {
	return new Swiper(`#${selector} .swiper-container`, {
		slidesPerView: 1,
		// fadeEffect: {
		// 	crossFade: true,
		// },
		// effect: 'fade',
		observer: true,
		observeParents: true,
		spaceBetween: 10,
		loop: true,
		speed: 1200,
		navigation: {
			prevEl: '.map-index-4-slider-prev-mobile',
			nextEl: '.map-index-4-slider-next-mobile',
		},
		breakpoints: {
			1025: {
				navigation: {
					prevEl: '.index-5-aside .map-index-4-slider-prev',
					nextEl: '.index-5-aside .map-index-4-slider-next',
				},
			}
		},
	});
};

const moveIndex4 = () => {
	return new Mapping('.map-dialog', {
		mobileNode: '.map-index-4-container .block-content',
		mobileMethod: 'appendTo',
		desktopNode: '.map-index-4 .map-wrapper',
		desktopMethod: 'appendTo',
		breakpoint: 1025,
	}).watch();
};

const scrollToSection = () => {
	let scrollToContactForm = false;
	let isShowed = false;
	const isIndex = document.querySelector('.index-page');
	if (isIndex != null) {

		$('[data-scroll-to]').on('click', function (e) {
			e.preventDefault();
			const scrollToNumber = $(this).attr('data-scroll-to');
			$('html,body').animate({
					scrollTop: $(`[data-scroll-id="${scrollToNumber}"]`).offset().top -
						$('header').height(),
				},
				1200
			);
			$('header nav').removeClass('active');
			$('#overlay').removeClass('active');
			$('body').removeClass('disabled');
		});
		const activeSectionWhenScroll = () => {
			$('[data-scroll-id]').each(function () {
				if (
					this.getBoundingClientRect().top < 2 * $('header').height() &&
					this.getBoundingClientRect().top > 0
				) {
					const toId = $(this).attr('data-scroll-id');
					$(`header [data-scroll-to]`).parent().removeClass('active');
					$(`header [data-scroll-to="${toId}"]`)
						.parent()
						.addClass('active');
					if (toId == '1') {
						sliderMenu().update();
					}
					sliderMenu().slideTo(Number(toId) - 1);
					if (toId == '4') {
						if (isShowed == false) {
							$.fancybox.open({
								src: '#index-6-popup',
								type: 'inline',
								opts: {
									touch: false,
									afterClose: function () {
										if (scrollToContactForm) {
											$('html,body').animate({
													scrollTop: $('.index-11').offset()
														.top -
														$('header').height(),
												},
												1200
											);
										}
									},
								},
							});
							isShowed = true;
						}
					}
				} else {}
			});
		};

		activeSectionWhenScroll();
		$(window).on('scroll', function () {
			activeSectionWhenScroll();
		});

		const quanque = localStorage.getItem('scrollToNumber')
		if (quanque != null) {
			localStorage.removeItem('scrollToNumber');
			$(`[data-scroll-to="${quanque}"]`).triggerHandler('click')
		}

		$('body').on(
			'click',
			'#index-6-popup.fancybox-content .btn-close',
			function () {
				scrollToContactForm = true;
				$.fancybox.close(true);
			}
		);
	} else {
		$('[data-scroll-to]').on('click', function (e) {
			e.preventDefault();
			const scrollToNumber = $(this).attr('data-scroll-to');
			const href = $(this).attr('href');
			localStorage.setItem('scrollToNumber', scrollToNumber);
			window.location.href = href
		})
	}
};

const addClassToBody = () => {
	const className = $('#js-page-verify').attr('class');
	$('body').addClass(className);
};

const ImageMapCanvas = () => {
	const setSizeCanvas = (mapImage, canvas) => {
		const width = mapImage.clientWidth;
		const height = mapImage.clientHeight;
		canvas.setAttribute('width', width);
		canvas.setAttribute('height', height);
	};

	const clearCanvas = (canvasContext, canvas) => {
		canvasContext.clearRect(0, 0, canvas.width, canvas.height);
	};

	const mapElements = Array.from(document.querySelectorAll('.imgMapCanvas'));

	for (let mapElement of mapElements) {
		const map = mapElement.querySelector('map');
		const canvas = mapElement.querySelector('canvas');
		const canvasContext = canvas.getContext('2d');
		const mapImage = mapElement.querySelector('img');
		const imageUrl = mapImage.getAttribute('src');
		const areas = Array.from(map.querySelectorAll('area'));

		// Initialize map canvas
		imageMapResize();
		// Set background
		canvas.style.backgroundImage = `url('${imageUrl}')`;
		canvas.classList.add('background-added');
		// Set size for canvas
		setSizeCanvas(mapImage, canvas);
		// Re-initialize canvas when window resize
		window.addEventListener('resize', () => {
			clearCanvas(canvasContext, canvas);
			setSizeCanvas(mapImage, canvas);
		});
		const getOpacityPeriod = (degrees) => {
			return (Math.abs(Math.sin(degrees * (Math.PI / 180))) * 3) / 2;
		};
		let degreeStep = 90 / 100;
		let degree = 0;
		let opacity = 0;
		// Draw Canvas and some effects
		// const drawMap = () => {
		// 	degree += degreeStep;
		// 	opacity = getOpacityPeriod(degree) - 0.5;

		// 	clearCanvas(canvasContext, canvas);
		// 	areas.forEach((area) => {
		// 		const coords = area.getAttribute('coords');
		// 		const coordsRef = coords.split(',');
		// 		// canvasContext.lineWidth = 3;
		// 		canvasContext.fillStyle = `rgba(220, 195, 117,${opacity})`;
		// 		// canvasContext.strokeStyle = 'rgb(34, 100, 57)';
		// 		canvasContext.beginPath();
		// 		canvasContext.arc(
		// 			coordsRef[0],
		// 			coordsRef[1],
		// 			coordsRef[2],
		// 			0,
		// 			2 * Math.PI
		// 		);
		// 		// canvasContext.stroke();
		// 		canvasContext.fill();
		// 		canvasContext.closePath();
		// 	});
		// 	window.requestAnimationFrame(drawMap);
		// };
		// window.requestAnimationFrame(drawMap);
	}
};

const ajaxForm = () => {
	$('.index-11 .block-form .submit button').on('click', function (e) {
		e.preventDefault();
		const _thisBtn = $(this);
		const url = _thisBtn.attr('data-url');
		const formData = new FormData();
		$('.index-11 .block-form .form-control').each(function () {
			const name = $(this).attr('name');
			const value = $(this).val();
			formData.append(name, value);
		});

		if ($('.index-11 .block-form form').valid()) {
			$.ajax({
				url: url,
				type: 'post',
				data: formData,
				processData: false,
				contentType: false,
				beforeSend: function () {
					_thisBtn.attr('disabled', 'disabled');
				},
				success: function (res) {
					if (res.Code == 200) {
						$('.index-11 .block-form .form-control').each(
							function () {
								$(this).val('');
							}
						);
					}
					alert(`${res.Message}`);
					_thisBtn.removeAttr('disabled');
				},
			});
		}
	});
};

document.addEventListener('DOMContentLoaded', () => {
	addClassToBody();
	Cookie();
	getSVGs();
	Loading();
	// WOW
	new WOW().init();
	// SCROLL TO SECTION
	scrollToSection();
	// Index 4
	moveIndex4();

	// Set Background By Attr
	setBackgroundByAttr();
	// Index Video
	indexVideo();
	// SLIDER INDEX 2
	sliderIndex__2();
	// INDEX 9
	index5Toggle();
	// SLIDER INDEX 9
	sliderIndex__9();
	sliderThumbnailVideo();
	// MENU
	toggleMobile();
	// ACTIVE HEADER WHEN SCROLL
	activeHeader();
	ajaxForm();
	CommonController();
	showSearch();
	showBackToTop();
	sliderMenu();
});

const imgDOM = document.querySelector('.imgMapCanvas .map-image img')

if (imgDOM) {
	const imgSrc = imgDOM.getAttribute('src');
	const img = new Image();
	img.src = imgSrc;
	img.addEventListener('load', () => {
		// Image Map Draw With Canvas
		imageMapResizer();
		ImageMapCanvas();
		imageMapEffect();
	});
}

// CHECK FORM VALID

// if ($("form").valid() === true) {}
// console.log('Kết quả kiểm tra điều kiện là:' + ' ' + $(".block-send-mail form").valid());