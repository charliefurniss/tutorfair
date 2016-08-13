$(document).ready(function() {

	$('#flickr-button').on('click', function(){
		(function() {

		  //changed the callback so that it is defined
		  window.cb = function(data) {
		    console.log(data);
		    
		    $.each(data.items, function(index, data) {
		    	createHTML(index, data);
		    })
		  };

		  var tags = "london";
		  var script = document.createElement('script');

		  script.src = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=cb&tags=" + tags;
		  document.head.appendChild(script);

		})();
	})

	function createHTML(index, data){
		$('.results-list').append('<li class="film col-xs-12 col-sm-6 col-md-4"></li>')
		$('.results-list').find('li').eq(index).append('<div class="film-container"><div class="film-inner row">' + ' <div class="col-xs-3"><img class="film-poster" alt="" src="' + data.media.m + '"/></div></div></div>');
	}
	
	// function cb(data) {
	// 	//use returned data
 //    }

 

 // (function () {
 //     var tags = 'london';
 //     var script = document.createElement('script');
 //     script.src =
 //     'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=cb&tags='
 //     + tags;
 //     document.head.appendChild(script);
 // })();
    
    
});