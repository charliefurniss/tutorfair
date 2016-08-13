$(document).ready(function() {

	var filmArray = [];

	$('#flickr-button').on('click', function(){
		(function() {

		  //changed the callback so that it is defined
		  window.cb = function(data) {
		    console.log(data);

		    filmArray = data.items;
		    
		    var i = 0;

		    ammendHTML(filmArray[i]);

		    $('#results').on('click', function(){
		    	console.log("here");
		    	i++;
		    	ammendHTML(filmArray[i]);
		    })

		  };

		  var tags = "london";
		  var script = document.createElement('script');

		  script.src = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=cb&tags=" + tags;
		  document.head.appendChild(script);

		})();
	})

	function ammendHTML(data){
		$('#results').empty();
		$('#results').append('<div class="col-lg-12"><img class="film-image" id="film-id" alt="" src="' + data.media.m + '"/></div>');
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