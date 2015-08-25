(function($) {
  $.fn.mouseoutall = function(callback) {
    if (typeof (callback) !== 'function') {
      return this;
    }
    var items = $(this);
    var mouseout = function() {
      var allOut = true;
      items.each(function() {
        var out = $(this).data('jqueryMouseoutallHovering') !== '1';
        allOut = allOut && out;
      });
      if (allOut) {
        callback();
      }
    };
    $(this).each(function() {
      $(this).hover(function() {
        $(this).data('jqueryMouseoutallHovering', '1');
      }, function() {
          $(this).data('jqueryMouseoutallHovering', '0');
          setTimeout(mouseout, 0);
        });
    });
    return this;
  };
})(jQuery);