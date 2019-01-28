/* ===================================
Atomic Basic Modules Plugin Activate
===================================== */
(function($jq) {
  $jq(document).ready(function() {
     // Home Banner Slider - bxSlider
    $jq('.full-page-slider').bxSlider({
        auto: true,
        easing: 'easeInCirc',
        mode: 'fade',
        speed: 1000,
        pause: 8000,
        pager: true,
        controls: false,
        minSlides: 1,
        maxSlides: 1
    });
  });
})(jQuery);
