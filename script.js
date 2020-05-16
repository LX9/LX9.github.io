var cover = document.getElementsByClassName('cover');
var letter = document.getElementsByClassName('letter');
var mail = document.getElementsByClassName('mail');
var pages = document.getElementById('pages');

mail[0].addEventListener('click', function(event) {
    $('.background').fadeOut('slow');
    $('.mail').addClass('mail-scale');
    $('#pages').fadeIn('slow');
});

function pagination() {

    var offset = $(document).scrollTop();
    var windowHeight = $(window).height();
    var $body = $('body');
  
    switch (true) {
      case (offset > (windowHeight * 3.75)):
        $body.removeClass().addClass('page-5');
        break;
      case (offset > (windowHeight * 2.75)):
        $body.removeClass().addClass('page-4');
        break;
      case (offset > (windowHeight * 1.75)):
        $body.removeClass().addClass('page-3');
        break;
      case (offset > (windowHeight * .75)):
        $body.removeClass().addClass('page-2');
        break;
      default:
        $body.removeClass().addClass('page-1');
     }
  }
  
  pagination();
  
  $(document).on('scroll', pagination);
  
  $(document).on('click', 'a[href^="#"]', function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
  });