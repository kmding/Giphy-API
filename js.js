// Random words for a random array for random searches for the random buttons
var randomArray = ['batman', 'vulpix', '21 pilots', 'seven samurai', 'number five'];
// lets make some buttons for the random array
var currentGif; var animatedGif; var stillGif; var randomGif;
function buttOnMakeR(){
	$('#lesBooton').empty();
	for (var i = 0; i < randomArray.length; i++) {
		var defalutBtns = $('<button>')
		defalutBtns.addClass('gifOverHere');
		defalutBtns.attr('data-name', randomArray[i]);
		defalutBtns.text(randomArray[i]);
		$('#lesBooton').append(defalutBtns);
 	}

 	// function that will make buttons have content?
	$('.gifOverHere').on('click', function(){
		$('#displayjIf').empty();
		var gifOverHere = $(this).data('name');
	// the URL for the giphys
		var giphyURL = 'http://api.giphy.com/v1/gifs/search?q='+ gifOverHere +'&limit=10&api_key=dc6zaTOxFJmzC';
		$.ajax({url: giphyURL, method: 'GET'}).done(function(response){
			currentGif = response.data;
			$.each(currentGif, function(index,value){
				animatedGif = value.images.original.url;
				stillGif = value.images.original_still.url;
				var dotRating = value.rating;
				randomGif = $('<img>').attr('data-animated', animatedGif).attr('data-still', stillGif).attr('src', stillGif).addClass('animateClick');
				var gifBtn = $('<button>');
				gifBtn.append(dotRating, randomGif);
				$('#displayjIf').append(gifBtn);

			});
		});
	});
}
	$(document).on('mouseover','.animateClick', function(){
	   	$(this).attr('src', $(this).data('animated'));                 
}); 
$(document).on('mouseleave','.animateClick', function(){
	   	$(this).attr('src', $(this).data('still'));                   
}); 


	$('#submitButton').on('click', function(){
		var gifOverHere = $('#inPutGif').val().trim();
		randomArray.push(gifOverHere);
		buttOnMakeR();
		
		return false;
	})
	
	buttOnMakeR();