(function($) {
  $.fn.mouseoutall = function(a, b) {
    var callback = typeof (a) === 'function' ? a : b;
    var delay = typeof (a) === 'number' ? a : b;

    if (typeof (callback) !== 'function') {
      return this;
    }
    if (typeof (delay) !== 'number') {
      delay = 0;
    }

    var items = $(this);
    var timer = null;

    var mouseout = function() {
      var allOut = true;
      items.each(function() {
        var out = $(this).data('jqueryMouseoutallHovering') !== '1';
        allOut = allOut && out;
      });
      if (allOut) {
        if (delay) {
          timer = setTimeout(callback, delay);
        } else {
          callback();
        }
      }
    };

    $(this).each(function() {
      $(this).hover(function() {
        $(this).data('jqueryMouseoutallHovering', '1');
        clearTimeout(timer);
      }, function() {
          $(this).data('jqueryMouseoutallHovering', '0');
          setTimeout(mouseout, 0);
        });
    });
    return this;
  };
})(jQuery);
