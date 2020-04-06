(function($jq) {
$jq(document).ready(function(){
// window scroll
var popupInit = false,
    cookieldp = Cookies.get('delayloadpopup'),
    prop_scrol_time = "";
    function popupdelay(){
      if ((cookieldp == "" || typeof(cookieldp) == "undefined") && !popupInit && $("#PopupDelay").size() > 0 && $(window).width() > 1024) {
        //fancybox  
        popupInit = true;
        $.fancybox.open({
          src: '#PopupDelay',
          type: 'inline',
          opts: {
            afterClose: function() {
              Cookies.set('delayloadpopup', '1');
            }
          }
        });
      }
    }
  $(window).load(function() {
    setTimeout(popupdelay, 15000);
  });  
  
});
})(jQuery)