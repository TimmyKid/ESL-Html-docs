  $(window).scroll(function () {
    if ($(document).scrollTop() > 20){
      $('nav').addClass('navbar-darker');
    }
    else {
      $('nav').removeClass('navbar-darker');
    }
});
