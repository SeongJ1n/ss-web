function resizeSection(){
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  var $sectionIntro = $('#sectionIntro');
  var $contentWrapper = $('#contentWrapper');
  $sectionIntro.height(winHeight);

  if( winHeight >= 900 ){
    $contentWrapper.css(
      'margin-top', 640);
  }
  else {
    $contentWrapper.css(
      'margin-top', winHeight-160);
  }
};

$(document).ready(function () {
  resizeSection();
});

$(window).on('resize', function(){
  resizeSection();
});

$(window).scroll(function() {
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  var $nav = $('#nav');
    if(winWidth >= 768){
      if ($nav.offset().top > winHeight) {
          $nav.addClass("nav-scroll");
      }
      else {
          $nav.removeClass("nav-scroll");
      }
    }
});
