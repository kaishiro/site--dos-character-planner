(function () {

  'use strict'

  var n;

  $(document).ready(function () {

    n.Toggle.listeners();

  }),

  n = {

    Toggle: {

      listeners: function() {
        $('.toggle').on('click', n.Toggle.toggle_component);
      },

      toggle_component: function(e) {
        var ariaPressed = $(this).attr('aria-pressed');
        var activate = $(this).data('activate').split(" ");
        var deactivate = $(this).data('deactivate').split(" ");

        // Toggle ARIA Role
        if (ariaPressed == 'true') {
          $(this).attr('aria-pressed', 'false');
        }
        else {
          $(this).attr('aria-pressed', 'true');
        }

        // Activate Components
        for (var i=0, l=activate.length; i<l; i++) {
          if ($('.page.active--' + activate[i]).length) {
            $('.page').removeClass('active--' + activate[i]);
          }
          else {
            $('.page').addClass('active--' + activate[i]);
          }
        }

        // Deactivate Components
        for (var i=0, l=deactivate.length; i<l; i++) {
          $('.page').removeClass('active--' + deactivate[i]);
        }
      }
    }
  }

}(jQuery));
