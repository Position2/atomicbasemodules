(function($jq) {
  $jq(document).ready(function() {
    //Smooth scroll external begins
    $jq(".nav-link").click(function() {
      var dis = $jq(this),
        target = dis.data("href"),
        offset = parseInt($jq(target).offset().top),
        header = $jq(".title");
      dis.addClass("active").siblings().removeClass("active");
      var newOffset = ($jq(window).width() > 1024) ? offset - (header.outerHeight()) : offset;
      $jq('html,body').stop().animate({ scrollTop: newOffset }, 200);
    });

    function findActiveSection() {
      var winHO = $jq(window).height(),
        winH = winHO - 200;
      return $jq("div.rule").map(function() {
        var dis = $jq(this),
          disY = dis[0].getBoundingClientRect().top;
        if ((disY < winH) && (disY > -200))
          return dis;
        else if ((disY < winHO) && (disY > -200))
          return dis;
      });
    }
    var prop_scrol_time = "";
    if ($jq(window).width() > 1024) {
      $jq(window).scroll(function() {
        clearTimeout(prop_scrol_time);
        prop_scrol_time = setTimeout(function() {
          var cActive = findActiveSection();
          $jq(".nav-link").removeClass("active").filter("[data-href='#" + $jq(cActive[0]).attr("id") + "']").addClass("active");
        }, 200);
      })
    }
    //Tabs
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e) {
      e.preventDefault();
      var $this = $(this),
        tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
      others.removeClass('active');
      $this.addClass('active');
      $(tabgroup).children('div').hide();
      $(target).show();

    })
    //Smooth scroll external ends
    // $('ul.tabs li').click(function() {
    //   var tab_id = $(this).attr('data-tab');
    //   $('ul.tabs li').removeClass('current');
    //   $('.tab-content').removeClass('current');
    //   $(this).addClass('current');
    //   $("#" + tab_id).addClass('current');
    // })
  });
})(jQuery)