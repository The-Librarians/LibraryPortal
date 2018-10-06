$(document).ready(function () {

	$('.librarian-button').click(function () {
		var form_id = $(this).attr('data-tab');

		$('.librarian-form-button').removeClass('current');
		$('.librarian-form-content').removeClass('current');

		$(this).addClass('current');
		$("#" + form_id).addClass('current');
	});


	// add a user
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
			phone: $("#patronPhone").val(),
			email: $("#patronEmail").val(),
			cardNumber: $("#cardNumber").val(),
			// temporary solution until we can implement authentication
			password: "password",
			isChild: isChild,
			isAdult: isAdult
		}
		
		console.log(patronInput);
		$.ajax("/api/users/", {
			type: "POST",
			data: patronInput
		}).then(function () {
			console.log("patron added")
		})
	});

	// add a book
	$("#inputBook").on("click", function (event) {
		event.preventDefault();
		console.log("click");
		var bookInput = {
			title: $("#bookTitleInput").val(),
			author: $("#authorInput").val(),
			genre: $("#genreInput").val(),
			audience: $("#audienceInput").val(),
			description: $("#descriptionInput").val(),
			isCheckedOut: $("#checkedOut").val()
		}
		$.ajax("/api/books/", {
			type: "POST",
			data: bookInput
		}).then(function () {
			console.log("book added")
		})
	});

	// add a dvd 
	$("#inputMedia").click(function () {
		event.preventDefault();

		var mediaInput = {
			title: $("#mediaTitleInput").val(),
			author: $("#mediaAuthorInput").val(),
			description: $("#mediaDescriptionInput").val(),
			genre: $("#mediaGenreInput").val(),
			audience: $("#mediaAudienceInput").val(),
		}

		$.ajax("/api/media/", {
			type: "POST",
			data: mediaInput
		}).then(function () {
			console.log("media added")
		})

	})

});