// Closure for my variables to be private.
(function( $ ) {

	// Default options
	var defaultOpt = {
		slideShow: false,
		interval: 4000,
		animation: "slide"
	}

	var amount = 0;

	// Plugin definition.
	$.fn.boSlider = function( options ) {
		// Merging options
		var options = $.extend({}, defaultOpt, options);
		// Initializing slider
		++amount;
		initSlider(options, this);
	};

	// Function responsibe for slider generation
	function initSlider(options, element) {
		// Scraping main information about our slider
		var slides = [];
		$(element[amount-1]).children().each(function() {
            var li = $( this );
            var obj = {};

            obj['data-url'] = li.attr("data-url");
            obj['data-type'] = li.attr("data-type");

            slides.push(obj);
        });

		// Replacing the <ul> with the newly generated slider
		$(element[amount-1]).replaceWith(function () {
			var i;
			var elements = "";
			for (var i = 0; i < slides.length; i++) {
				var active = i == 0 ? 'active' : '';
				elements += "<div class='bo-slide " + active +"'>\n";
				elements += "<img src='"+ slides[i]['data-url'] + "' alt='" + slides[i]['data-type'] +"'>\n";
				elements += "</div>\n";
			}
			elements += "<a class='bo-prev'>&#10094;</a>\n"; // Previous button
			elements += "<a class='bo-next'>&#10095;</a>\n"; // Next button

			var list = "<div class='bo-slider' id='slider-" + amount + "'>" + elements + '</div>\n';
			// Navigation dots
			list += "<div class='bo-dots'>\n";
			for (var i = 0; i < slides.length; i++) {
				var active = i == 0 ? 'selected' : '';
				list += "<span class='bo-dot " + active + "' data-bo-dot-index='"+ i +"'></span>\n"
			}
			list += "</div>";
			return list;
		});
		// Creating new Slider object, which will contain main information about our slider
	}

	// Defining Slider class
	function Slider(classname, options, slides) {
		this.active = 0;
		this.options = options;
		this.slides = slides;
	}

// End of the closure.
 
})( jQuery );