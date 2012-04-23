(function($) {
  $.fn.shaker = function(options) {

    var opts = $.extend({}, $.fn.shaker.defaults, options);

    return this.each(function() {
		var direction = (opts.vertical) ? "top" : "left";
		var shakes = this.shakes;
		if (this.shakes < 1) { shakes = 3 };
		$(this).css(direction, "-=" + spread/2);
		for (var i=0; i<shakes; i++) {
			$(this).css(direction, "+=" + spread);
			$(this).css(direction, "-=" + spread);
		}
		$(this).css(direction, "+=" + spread/2);
    });

  }

  $.fn.shaker.defaults = {
		spread: 16,
		speed: 20,
		shakes: 3,
		vertical: false
	}
})(jQuery);