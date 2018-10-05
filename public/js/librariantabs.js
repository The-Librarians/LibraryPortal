$(document).ready(function(){
	
	$('.librarian-button').click(function(){
		var form_id = $(this).attr('data-tab');

		$('.librarian-form-button').removeClass('current');
		$('.librarian-form-content').removeClass('current');

		$(this).addClass('current');
		$("#"+form_id).addClass('current');
	})

});