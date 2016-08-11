$(document).ready(function () {
  resizeSection();
  initMap();
});

$(window).on('resize', function(){
  resizeSection();
});

$(window).scroll(function() {
  navScroll();
});

function navScroll() {
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  var $nav = $('#nav');
  var $navLogo = $('.nav-logo');
  var $inlineListItem = $('.inline-list-item a');

  /* nav-scroll */
  if (window.location.pathname == '/ss-web/') {
    if(winWidth >= 850){
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
  }
};

/* Map */
function initMap() {
  var myLatLng = {lat: 37.52428, lng: 127.0495799};

  var map = new google.maps.Map(document.getElementById('Map'), {
    center: myLatLng,
    mapTypeControl: false,
    streetViewControl: false,
    zoomControl: false,
    scrollwheel: false,
    draggable: false,
    zoom: 17
  });
  var image = 'img/marker.png';
  var marker = new google.maps.Marker({
    map: map,
    position: {lat: 37.5239573, lng: 127.0495906},
    icon: image
  });
};

/* resizeSection */
function resizeSection(){
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  var $sectionIntro = $('#sectionIntro');
  var $contentWrapper = $('#contentWrapper')
  $sectionIntro.height(winHeight);
  if( winWidth > 850 ){
    $sectionIntro.height(winHeight);
    $contentWrapper.css('margin-top', ($sectionIntro.height()/2)-80);
  }
  else {
    $sectionIntro.height(400);
    $contentWrapper.css('margin-top', 80);
  }
};
