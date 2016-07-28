/* resizeSection */
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
  var $sectionAbout = $('#sectionAbout');
  var $iphoneImg = $('#iphoneImg');
  var $iphoneShadow = $('#iphoneShadow');
  var $nav = $('#nav');

  /* nav-scroll */
  if(winWidth >= 768){
    if ( ($nav.offset().top)+100 > winHeight) {
        $nav.addClass("nav-scroll");
    }
    else {
        $nav.removeClass("nav-scroll");
    }
  }

  /* sectionAbout animation */
  if( ($nav.offset().top)+200 > $sectionAbout.offset().top){
    $iphoneImg.css('top', -180);
    $iphoneShadow.css('opacity', 1);
  }
  else {
    $iphoneImg.css('top', -285);
    $iphoneShadow.css('opacity', 0);
  }
});
