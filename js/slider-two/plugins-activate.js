/* ===================================
Atomic Basic Modules Plugin Activate
===================================== */
(function($jq) {
  $jq(document).ready(function() {
    $jq('.slider-two').bxSlider({
      auto: true,
      speed: 1000,
      pause: 6000,
      easing: 'easeInCirc',
      mode: 'fade',
      pager: true,
      controls: false,
      infiniteLoop: true,
      hideControlOnEnd: true,
      minSlides: 1,
      maxSlides: 1,
      pagerCustom: '#SliderThumbnail'
    });
  });
})(jQuery);
