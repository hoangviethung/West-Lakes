// Get youtube ID from URL
const getYoutubeID = (url) => {
	if (url !== undefined) {
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
		var match = url.match(regExp);
		if (match && match[7].length == 11) {
			return match[7];
		} else {
			return false;
		}
	} else {
		return false;
	}
};

// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[3];

document.querySelector('body').appendChild(tag);
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
	const youtubeItems = Array.from(document.querySelectorAll('.youtube-api'));
	for (let i = 0; i < youtubeItems.length; i++) {
		const idRandom = new Date().getTime().toString(32).substring(4);
		youtubeItems[i].setAttribute('id', idRandom);
		const elementId = youtubeItems[i].getAttribute('id');
		const videoId = getYoutubeID(youtubeItems[i].getAttribute('data-url'));
		(';');

		player = new YT.Player(elementId, {
			height: '100%',
			width: '100%',
			videoId: videoId,
			events: {
				onReady: onPlayerReady,
				onStateChange: onPlayerStateChange,
			},
			playerVars: {
				autoplay: 0,
				rel: 0,
				showinfo: 0,
				controls: 0,
			},
		});
	}

	$('.slider-thumnail-video .item');

	$('.slider-thumnail-video .item').each(function (index, item) {
		if (index == 0) {
			const urlIndex_0 = $(item).attr('data-url');
			$('.review-video .youtube-api').attr('data-url', urlIndex_0);
			// INNIT VIDEO HERE !!!
		}
		const urlActive = $('.review-video .youtube-api').attr('data-url');
		const url = $(this).attr('data-url');
		// ACTIVE URL THUMBL == URL REVIEW
		if (urlActive == url) {
			$(item).addClass('active');
		}
		const id = getYoutubeID(url);
		$(this).on('click', function () {
			$(this).addClass('active');
			$('.slider-thumnail-video .item').not(this).removeClass('active');
			player.loadVideoById(id);
			const title = $(this).find('.text h3').html();
			const description = $(this).find('.text p.d-n').html();
			const date = $(this).find('.text .date').html();
			$('.index-10 .review-video .youtube-api').attr('data-url', url);
			$('.index-10 .review-video .content h3').html(title);
			$('.index-10 .review-video .content p').html(description);
			$('.index-10 .review-video .content .date').html(date);
		});

		// Get Video Thumbnail
		// const imageThumbnail = `http://i3.ytimg.com/vi/${id}/hqdefault.jpg`;
		// $(this).find('.img img').attr('src', imageThumbnail);
	});
}

// OFF AUTOUPLAY
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	// event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		setTimeout(stopVideo, 6000);
		done = true;
	}
}

function stopVideo() {
	player.stopVideo();
}