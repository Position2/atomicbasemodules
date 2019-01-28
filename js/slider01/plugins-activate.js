/* ===================================
Atomic Basic Modules Plugin Activate
===================================== */
(function($jq) {
  $jq(document).ready(function() {
    $jq('.basic-slider').owlCarousel({
       loop: true,
        autoplay: 10000,
        smartSpeed: 1000,
        dots: true,
        lazyLoad: true,
        autoplayHoverPause: true,
        responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } }
    })
  });
})(jQuery);
