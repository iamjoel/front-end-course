;(function ($) {
  $(document).ready(function () {
    $('.js-content-input').keyup(function () {
      $('#pre').html($('.js-content-input').val());
    });
  });
})(jQuery);