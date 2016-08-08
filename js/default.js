$(document).ready(function () {
  resizeSection();
  initMap();

});

$(window).on('resize', function(){
  resizeSection();
});


/* Map */
function initMap() {
  var myLatLng = {lat: 37.52428, lng: 127.0495799};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('Map'), {
    center: myLatLng,
    mapTypeControl: false,
    streetViewControl: false,
    zoomControl: false,
    scrollwheel: false,
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
  $sectionIntro.height(winHeight);

  if( winWidth >= 850 ){
    $sectionIntro.height(winHeight);
  }
  else {
    $sectionIntro.height(530);
  }
};



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

// http://james.padolsey.com/javascript/shuffling-the-dom/
(function($){
    $.fn.shuffle = function() {

        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });

        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });

        return $(shuffled);
    };
})(jQuery);
