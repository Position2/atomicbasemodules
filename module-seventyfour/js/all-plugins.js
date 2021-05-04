$( document ).ready(function() {
	$(".resources-filter-content .each-content").slice(0, 9).show();
    $(".load-more-cta .load-more").on("click", function(e){
      e.preventDefault();

      var disVal = $(".resources-industries select option.cdd-active").val(),
      disFilter = $(".resources-categories select option.cdd-active").val(),
      disFinVal = disVal == "all" ? "*" : "." + disVal,
      disFinFilter = disFilter == "all" ? "*" : "." + disFilter,
      finalFilter = disFinVal + disFinFilter; 
      // console.log(finalFilter);

      $(".resources-filter-content .each-content:hidden" + finalFilter).slice(0, 6).show();
      if($(".resources-filter-content .each-content:hidden" + finalFilter).length == 0) {
          $(".load-more-cta .load-more").addClass("noContent");
      }   
      if($(".resources-filter-content .each-content:visible" + finalFilter).length == 0) {
        $(".resources-filter-content").addClass("noResource");
      }   
    });
    function loadMore() {
      var disVal = $(".resources-industries select option.cdd-active").val(),
        disFilter = $(".resources-categories select option.cdd-active").val(),
        disFinVal = disVal == "all" ? "*" : "." + disVal,
        disFinFilter = disFilter == "all" ? "*" : "." + disFilter,
        finalFilter = disFinVal + disFinFilter; 
        // console.log(finalFilter);
      if($(".resources-filter-content .each-content:hidden" + finalFilter).length == 0) {
        $(".load-more-cta .load-more").addClass("noContent");
      }
      if($(".resources-filter-content .each-content:visible" + finalFilter).length == 0) {
        $(".resources-filter-content").addClass("noResource");
      }
      
    }
    // industries drop dwon on change
    $(".resources-industries select").change(function() {
      var dis = $(this),
          disVal = dis.find('option:selected').val(),
          disFilter = $(".resources-categories select option.cdd-active").val(),
          disFinVal = disVal == "all" ? "*" : "." + disVal,
          disFinFilter = disFilter == "all" ? "*" : "." + disFilter,
          finalFilter = disFinVal + disFinFilter;       
          // console.log("disVal")   
          // console.log(disVal)   
          console.log("finalFilter")   
          console.log(finalFilter) 
      dis.find('option:selected').addClass('cdd-active').siblings().removeClass('cdd-active');
      $("#ResourcesFilter .resources-filter-content .each-content").hide(0);
      $(".resources-filter-content .each-content:hidden" + finalFilter).slice(0, 9).show();
      $(".load-more-cta .load-more").removeClass("noContent");
      $(".resources-filter-content").removeClass("noResource");
      loadMore();
    }).keypress(function(e) {
          if (e.which === 13) {
            this.click();
            return false;  
          }
        });
    // categories drop down on change
    $(".resources-categories select").change(function() {
      var dis = $(this),
          disVal = dis.find('option:selected').val(),
          disFilter = $(".resources-industries select option.cdd-active").val(),
          disFinVal = disVal == "all" ? "*" : "." + disVal,
          disFinFilter = disFilter == "all" ? "*" : "." + disFilter,
          finalFilter = disFinVal + disFinFilter;       
          // console.log("disVal")   
          // console.log(disVal)   
          console.log("finalFilter")   
          console.log(finalFilter) 
      dis.find('option:selected').addClass('cdd-active').siblings().removeClass('cdd-active');
      $("#ResourcesFilter .resources-filter-content .each-content").hide(0);
      $(".resources-filter-content .each-content:hidden" + finalFilter).slice(0, 9).show();
      $(".load-more-cta .load-more").removeClass("noContent");
      $(".resources-filter-content").removeClass("noResource");
      loadMore();
    }).keypress(function(e) {
          if (e.which === 13) {
            this.click();
            return false;  
          }
        });
});