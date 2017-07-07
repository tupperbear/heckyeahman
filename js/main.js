(function () {

	// Init image previews
	var elements = document.querySelectorAll( '.intense' );
	Intense( elements );

	// Init thumbnail filtering
	var mixer = mixitup('#gallery');

	// Filtering controls
	$('.filter-control').click(function(e) {
		e.preventDefault();
	});

	$('#contact-form').submit(function (e) {
		e.preventDefault();

		$('#control-form-error').hide();

		var form = $(this);
		var name = $('input[name=name]');
		var email = $('input[name=email]');
		var message = $('textarea[name=message]');

		if (!name.val() || !message.val()) {
			$('#control-form-error').show().text('Please complete all fields.');
		} else if (!isEmail(email.val())) {
			$('#control-form-error').show().text('Valid email required.');
		}

		form.find('button').text('Sending...').prop('disabled', true);

		$.ajax({
			url: "https://formspree.io/ohheckyeahman@gmail.com", 
			dataType: "json",
		    method: "POST",
		    data: {
		    	name: name.val(),
		    	email: email.val(),
		    	message: message.val()
		    },
		    success: function (response) {
		    	// Clear form fields
		    	name.val('');
		    	email.val('');
		    	message.val('');

		    	// Reset send button
		    	form.find('button').text('Send Message').prop('disabled', false);

		    	// Show success message
		    	$('#control-form-success').show().text('Thank you, your message has been sent.');
		    	setTimeout(function() {
		    		$('#control-form-success').fadeOut();
		    	}, 3000);
		    },
		    error: function (jqXHR, textStatus, errorThrown) {
		    	console.log(errorThrown);
		    }
		});
	});

	function isEmail(email) {
	    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	    return regex.test(email);
	}

})();