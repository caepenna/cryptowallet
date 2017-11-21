$(document).ready(function() {

  $('.js-input').blur(function() {
    if ($(this).val()) {
      $(this).closest( '.input-box' ).addClass('-filled');
    } else {
      $(this).closest( '.input-box' ).removeClass('-filled');
    }
  });

});
