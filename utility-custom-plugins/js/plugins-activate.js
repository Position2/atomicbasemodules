  (function($) {
    $(document).ready(function() {
      /*Overall Filter*/
      function allFilter() {
        var ddVal = $(".custom-dropdown").data("val"),
          tags = $(".ac-tag").map(function() {
            var disText = $(this).text().toLowerCase().replace(" x", '');
            return "(?=.*" + disText + ")";
          }).get(),
          matchRegex = tags.join('');
        $("#noresult").hide();
        var firstLevelFilter = $(".each-module-prview").hide().filter(ddVal)
        if (tags.length > 0) {
          var secondLevelFilter = firstLevelFilter.filter(function() {
            var disText = $(this).text().toLowerCase().trim().replace(/\s/g, '');
            var matched = disText.match(new RegExp(matchRegex, 'g'));
            return matched != null ? matched.length > 0 : false;
          });
          secondLevelFilter.show();
        } else {
          firstLevelFilter.show();
        }
        $("#noresult").toggle($(".each-module-prview:visible").length <= 0)
        $(".clearall").toggle($(".ac-tag").length > 0)
      }

      /*Custom Dropdown - Starts*/
      $(".custom-dropdown").click(function() {
        var dis = $(this),
          disList = dis.find(".custom-dd-list");
        dis.toggleClass("active");
        $(".custom-dropdown").not(dis).removeClass("active").find(".custom-dd-list").hide();
        disList.toggle();
      }).change(function() {
        allFilter();
      })
      $(".custom-dropdown").find(".custom-dd-list ul li").click(function() {
        var dis = $(this),
          parent = dis.parents(".custom-dropdown"),
          selVal = dis.attr("data-val"),
          selHtml = dis.text();
        dis.siblings().removeClass("cdd-active");
        (typeof selVal != "undefined") && (parent.find(".custom-dd-selected").html(selHtml));
        if ((selVal != "") && (typeof selVal != "undefined")) {
          dis.addClass("cdd-active");
          dis.removeClass("active").find(".custom-dd-list").hide();
          parent.data("val", selVal);
        }
        parent.trigger("change");
      });
      $(".custom-dropdown").map(function() {
        var dis = $(this),
          disActive = dis.find(".cdd-active"),
          selVal = disActive.attr("data-val"),
          selHtml = disActive.text();
        (typeof selVal != "undefined") && (dis.find(".custom-dd-selected").html(selHtml));
        if ((selVal != "") && (typeof selVal != "undefined")) {
          dis.data("val", selVal);
        }
      })
      /*Custom Dropdown - Ends*/

      /*Autocomplete - Starts*/
      function findNextActive(prev) {
        var optPrev = (typeof(prev) != "undefined" && prev);
        allLi = $(".autocomplete").find("li"),
          notHidden = allLi.filter(":visible"),
          curActive = notHidden.filter(".focused"),
          nextActive = "";
        allLi.removeClass("focused");
        if (curActive.length > 0) {
          nextActive = optPrev ? curActive.prevAll("li:visible").first() : curActive.nextAll("li:visible").first();
          if (nextActive.length <= 0) {
            nextActive = optPrev ? notHidden.last() : notHidden.first();
          }
        } else {
          nextActive = optPrev ? notHidden.last() : notHidden.first();
        }
        nextActive.addClass("focused");
      }
      $("#search").click(function() {
        $(".autocomplete").show();
      }).keyup(function(event) {
        var filterVal = $(this).val().toLowerCase();
        $(".autocomplete ul li").hide().filter(function() {
          var reg = new RegExp("^(" + filterVal + ".*)$");
          return reg.test($(this).text().toLowerCase());
        }).show();
        var liVisibles = ($(".autocomplete").find("li:visible").length <= 0);
        liVisibles ? $(".autocomplete ul").addClass("hideme") : $(".autocomplete ul").removeClass("hideme");
        $(".no_match").toggle(liVisibles);
        if (event.which == 38) {
          findNextActive(true)
        } else if (event.which == 40) {
          findNextActive()
        } else if (event.which == 13) {
          $(".autocomplete").find("li.focused:not(.hidden)").click();
        }
      });
      $(".autocomplete ul li").click(function() {
        $(".autocomplete ul li").show();
        var disLi = $(this),
          disLiVal = disLi.text().toLowerCase();
        $("#search").val("");
        disLi.addClass("hidden");
        $("<span/>", {
            "class": "ac-tag badge badge-pill badge-primary"
          }).attr("data-map", disLi.index())
          .html(disLi.data("filter") + " x")
          .appendTo($(".tags_wrapper"))
        allFilter();
        $("#search").focus();
      })
      $("body").on("click", ".ac-tag", function() {
        $(".autocomplete ul li").eq($(this).data("map")).removeClass("hidden");
        $(this).remove();
        allFilter();
      })
      $(".clearall").click(function() {
        $(".autocomplete ul li").removeClass("hidden");
        $(".ac-tag").remove();
        allFilter();
      })
      /*Autocomplete - Ends*/
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
      /*Document Click*/
      $(document).click(function(e) {
        var dis = $(e.target);
        if (!dis.hasClass("custom-dropdown") && dis.parents(".custom-dropdown").length <= 0) {
          $(".custom-dropdown").removeClass("active").find(".custom-dd-list").hide();
        }
        if (!dis.hasClass("autocomplete_wrapper") && dis.parents(".autocomplete_wrapper").length <= 0) {
          $(".autocomplete").hide();
        }
      })
    });
  })(jQuery);
