$(document).ready(function(){
	
	$('.librarian-button').click(function(){
		var form_id = $(this).attr('data-tab');

		$('.librarian-form-button').removeClass('current');
		$('.librarian-form-content').removeClass('current');

		$(this).addClass('current');
		$("#"+form_id).addClass('current');
	});

	$("#inputUser").click(function () {
		event.preventDefault();
		var patronClassChoice = $("#patronClassification").val();
		var isChild;
		var isAdult;

		if (patronClassChoice == "Option 1") {
			isChild = true;
			isAdult = false;
		} else {
			isChild = false;
			isAdult = true;
		}

		var patronInput = {
			name: $("#patronName").val(),
			phone: $("#patronNumber").val(),
			email: $("#cardNumber").val(),
			cardNumber: $("#patronEmail").val(),
			isChild: isChild,
			isAdult: isAdult
		   }
		
		console.log(patronInput);
	});

	$("#inputMedia").click(function () {
		event.preventDefault();

		var mediaInput = {
			title: $("#mediaTitleInput").val(),
			author: $("#mediaAuthorInput").val(),
			description: $("#mediaDescriptionInput").val(),
			genre: $("#mediaGenreInput").val(),
			audience: $("#mediaAudienceInput").val(),
		}

		console.log(mediaInput);
	})

});