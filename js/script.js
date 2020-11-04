$(document).ready(function () {


    $('.with-dropdown').click( function () {
      $(this).children('.dropdown').toggleClass('active');
    });

    $('.with-dropdown').click( function () {
      if ($(this).children(".dropdown").hasClass("active")){
        $('.dropdown').removeClass('active');
        $(this).children('.dropdown').addClass('active');
      }

    });


});
