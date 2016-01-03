/**
 * BG Slider - plugin for jQuery
 */
(function($) {
  var methods = {
    init : function( options ) {
      options.timeout = options.timeout * 1000;
      options.speed = options.speed + 's';
      this.css('transition', options.speed);
      var str_slides = this.attr('data-sliders');
      if (str_slides != undefined) {
        options.slides = str_slides.split(';');
        options.total = options.slides.length;
        $(this).data('bg_slider-options', options);
        if (options.total > 1) {
          options.current = -1;
          this.bg_slider('goSlides');
        }
      }

    },
    goSlides : function( ) {
      var options = $(this).data('bg_slider-options');
      if (options && typeof options === 'object') {
        options.current = options.current + 1;
        if (options.current >= options.total) {
          options.current = 0;
        }
        $(this).data('bg_slider-options', options);
        this.css('backgroundImage', 'url('+options.slides[options.current]+')');
        var handler = this.attr('id');
        setTimeout(function() {$('#' + handler).bg_slider('goSlides');}, options.timeout);
      }
    }
  };

  $.fn.bg_slider = function(method) {
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply(this, arguments );
    } else {
      $.error( 'Method ' +  method + ' not exists' );
    }
  }
})(jQuery);