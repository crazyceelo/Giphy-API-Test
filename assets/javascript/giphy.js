$(document).ready(function(){
	// Initial array that is reserved for creating all buttons on the page.
	var topics = ["dog", "cat", "bird", "lion", 
	"snake", "hamster", "bear", "fish", 
	"squid", "shrimp", "tiger", "cow"];

	// loop to create all initial buttons on the page.
	for (i = 0; i < topics.length; i++){
		var button = $("<button>");
		button.addClass("buttons");
		button.attr("data-animal", topics[i]);
		$(".buttonSection").append(button);
		button.append(topics[i]);
	}

	// clicking this button generates 10 gifs of the selecte animal from an API.
	$(".buttons").on("click", function(){
		var animalType = $(this).data("animal");
		console.log(animalType); // this works
		var queryURL = "http://api.giphy.com/v1/gifs/search?q="+animalType+"&api_key=dc6zaTOxFJmzC&limit=10";
		console.log(queryURL); // this works

		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response){
			console.log(response); // this works
			
		})
	})

	// $(".animal-btn").on("click", function(){
	// 	var animalType = $(this).data("animal");
	// 	var queryURL = "http://api.giphy.com/v1/gifs/search?q="+animalType+"&api_key=dc6zaTOxFJmzC&limit=10";
	// 	$.ajax({
	// 		url: queryURL,
	// 		method: "GET"
	// 	}).done(function(response){
	// 		console.log(response);
	// 		for (var i = 0; i < response.data.length; i++){
	// 			var animalDiv = $("<div>");
	// 			var p = $("<p>").text("Rating: " + response.data[i].rating);
	// 			var animalGif = $("<img>");
	// 			animalGif.attr("src", response.data[i].images.fixed_height.url);

	// 			animalDiv.append(p);
	// 			animalDiv.append(animalGif);
	// 			$("#gifs").append(animalDiv);
	// 		}
	// 	})
	// });
});