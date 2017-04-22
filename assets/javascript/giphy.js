$(document).ready(function(){
	$(".animal-btn").on("click", function(){
		var animalType = $(this).data("animal");
		var queryURL = "http://api.giphy.com/v1/gifs/search?q="+animalType+"&api_key=dc6zaTOxFJmzC&limit=10";
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response){
			console.log(response);
			for (var i = 0; i < response.data.length; i++){
				var animalDiv = $("<div>");
				var p = $("<p>").text("Rating: " + response.data[i].rating);
				var animalGif = $("<img>");
				animalGif.attr("src", response.data[i].images.fixed_height.url);

				animalDiv.append(p);
				animalDiv.append(animalGif);
				$("#gifs").append(animalDiv);
			}
		})
	});
});