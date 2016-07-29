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
  var $navLogo = $('.nav-logo');
  var $inlineListItem = $('.inline-list-item a');

  /* nav-scroll */
  if(winWidth >= 768){
    if ( ($nav.offset().top)+(winHeight/2) > winHeight) {
        $nav.addClass("nav-scroll");
        $navLogo.css("background", "url('../ss-web/img/logo-black.png')");
        $navLogo.css("background-size", "cover");
        $inlineListItem.addClass("item-scroll");
    }
    else {
        $nav.removeClass("nav-scroll");
        $navLogo.css("background", "url('../ss-web/img/logo-white.png')");
        $navLogo.css("background-size", "cover");
        $inlineListItem.removeClass("item-scroll");
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
