(function () {

	// Init image previews
	var elements = document.querySelectorAll( '.intense' );
	Intense( elements );

	// Init thumbnail filtering
	var mixer = mixitup('#gallery');

	// Filtering controls
	$('.filter-control').click(function(e) {
		e.preventDefault();
	})

})();