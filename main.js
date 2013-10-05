$.fn.editable.defaults.mode = 'inline';
$(document).ready(function() {

	//TO DO: add a .supplant to make that string concatenation less ugly!

	$(".profiledata").hide(function() {
	});

	$(".calybutton").click(function() {
	 	$(".profiledata").toggle();
	 	$(this).text(function(i, text){
          return text === "Show Form" ? "Hide Form" : "Show Form";
      })
	});

	
	$(".profiledata" ).submit(function() {
		console.log("test");
		$(".profiledata").append($('.displayprofile'));
			$('.displayprofile').append("Name: " + $('#name').val()+ "<br>"+
										"Bio: " + $('#bio').val()+ "<br>" +
										"Favorite Books: " + $('#books').val()+ "<br>" +
										"Favorite Libraries: " + $('#libraries').val()+"</div>");
		return false;
	});

	

 });//this closes document ready


