/*
Nichole Anderson
06/01/15
Anderson-Final

File: britPhotos.js
*/

//Make an array of images

var aImages = ["stonehenge_tb.jpg", "Stonehenge", 
			  "londoneye_tb.jpg","London Eye",
			  "bigben_tb.jpg","Big Ben",
			  "TheRomanBaths_tb.jpg","The Roman Baths",
			  "towerBridge_tb.jpg", "Tower Bridge",
			  "mamTor_tb.jpg", "English Countryside"];

$(document).ready(function() {
	for (var i = 0; i < aImages.length; i+=2)
	{
		//counting by twos so it jumps from file name to next one
		var myImage = aImages[i];
		var myText = aImages[i + 1];
		var myTag = "<img src='images2/" + myImage + "' alt='" + 
			myText + "'class='thumb' />";

		//add each image tag to the end of the #divThumb
		$('#divThumb').append(myTag);

	}
	//when user clicks on any thumbnail
	$('.thumb').click(function() {
		console.log("thumb was clicked");
		var myThumb = $(this).attr("src");
		var myImage = myThumb.substring(0, myThumb.lastIndexOf("_")) + "_lg.jpg";

		if($('#lightbox').length > 0) {
			console.log("lightbox already exists");
			//when lightbox exists, change image tag inside of #content
			$('#content').html("<img src='" + myImage + "' />");
			$('#lightbox').show();
		}else{
			//when lightbox doesn't exist, build it
			console.log("building lightbox");
			var myBox = "<div id='lightbox'><p>Click anywhere to close</p>" + "<div id='content'><img src='" + myImage + "' />" + "</div></div>";
			$('body').append(myBox);
		}
	});//end thumb

	$(document).on("click", "#lightbox", function() {
	  //hide the lightbox
	  $('#lightbox').hide();  //end lightbox.hide
	  });//end doc.lightbox.click	
});//end doc ready
