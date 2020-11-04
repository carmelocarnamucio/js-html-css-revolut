$(document).ready(function () {

    $('.with-dropdown').click( function () {
      $('.dropdown').removeClass('active');
      $(this).children('with-dropdown').addClass('active');
    });

    $('.with-dropdown').click( function () {
      $(this).children('.dropdown').toggleClass('active');
    });
});
