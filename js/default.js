/* Map */
function initMap() {
  var myLatLng = {lat: 37.5239573, lng: 127.0495906};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('Map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 17
  });
  var image = 'img/marker.png';
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    icon: image
  });
};

/* resizeSection */
function resizeSection(){
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  var $sectionIntro = $('#sectionIntro');
  var $contentWrapper = $('#contentWrapper');
  $sectionIntro.height(winHeight);

  if( winHeight >= 900 ){
    $contentWrapper.css(
      'margin-top', 310);
  }
  else {
    $contentWrapper.css(
      'margin-top', winHeight/2-80);
  }
};

$(document).ready(function () {
  resizeSection();
  initMap();
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
    $iphoneImg.css('top', -170);
    $iphoneShadow.css('opacity', 1);
  }
  else {
    $iphoneImg.css('top', -280);
    $iphoneShadow.css('opacity', 0);
  }
});
