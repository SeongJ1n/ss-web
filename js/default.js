$(document).ready(function () {
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  var $sectionIntro = $('#sectionIntro');
  var $contentWrapper = $('#contentWrapper');
  $sectionIntro.height(winHeight);

  if(winWidth >= 768){
  $contentWrapper.css(
    'margin-top', winHeight-160);
  }
  else {

  }
});

$(window).on('resize', function(){
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  var $sectionIntro = $('#sectionIntro');
  var $contentWrapper = $('#contentWrapper');
  $sectionIntro.height(winHeight);

  if(winWidth >= 768){
  $contentWrapper.css(
    'margin-top', winHeight-160);
  }
  else {

  }
});
