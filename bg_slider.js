/**
 * BG Slider - plugin for jQuery
 *
 * version 1.0
 *
 * Author: Aleksandr Novikov
 * Site: http://pws.ru
 * E-mail: pwsdotru@gmail.com
 *
 * Usage:
 *
 * 1. Define in HTML container with images list (urls separated by semicolons) in attribute data-sliders:
 *   <div data-sliders="demo/img1.jpg;demo/img2.jpg;demo/img3.jpg;demo/img4.jpg" id="demo">
 *
 * 2.Run slider
 *
 * 2.1 with default options
 *   $('#demo').bg_slider();
 *
 * 2.2 or with custom options
 *  $('#demo').bg_slider({timeout: 10, speed: 2});
 *
 *  timeout - time in seconds for show each slide
 *  speed   - time in seconds for switch slides
 */
(function($) {
  var methods = {
    init : function(options) {
      options = options || {};
      options.timeout = options.timeout || 5;
      options.speed = options.speed || 2;

      options.timeout = options.timeout * 1000;
      options.speed = options.speed + 's';
      this.css('transition', options.speed);
      var str_slides = this.attr('data-sliders');
      if (str_slides != undefined) {
        options.slides = str_slides.split(';');
        options.total = options.slides.length;
        $(this).data('bg_slider-options', options);
        if (options.total > 1) {
          var i;
          var images = [];
          for(i = 0; i < options.total; i++) {
            images[i] = new Image();
            images[i].src = options.slides[i];
          }
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
