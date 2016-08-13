$(document).ready(function() {

	var filmArray = [];

	init();

	$('#flickr-button').on('click', function(e){
		toggleImageDisplay(e.currentTarget);
	})

	function init(){
		window.cb = function(data) {
			filmArray = data.items;

			var i = 0;
			changeImage(filmArray[i]);
			$('#results').on('click', function(e){
				i++;
				if (i == filmArray.length){
					i = 0;
				}
				changeImage(filmArray[i]);
				e.preventDefault();
			})
		};

		var tags = 'london';
		var script = document.createElement('script');
		script.src = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=cb&tags=' + tags;
		document.head.appendChild(script);
	}

	function changeImage(data){
		$('img#film-id').attr('src', data.media.m);
	}

	function toggleImageDisplay(button){
		if (button.value == 'Show Flickr feed'){
			$(button).attr('value', 'Hide Flickr feed');
			$(button).addClass('red').removeClass('blue');
			$('#results-container').slideDown('slow');
		} else {
			$(button).attr('value', 'Show Flickr feed');
			$(button).addClass('blue').removeClass('red');
			$('#results-container').slideUp('slow');
		}
	}
    
});