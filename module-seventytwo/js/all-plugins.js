$( document ).ready(function() {
	$(".lines").click(function () {
	    
	  if ( $(".menu").hasClass("small") ) {
	    $(".menu").removeClass("small"); 
	  }
	  
	  if ( $(".menu").hasClass("expanded") ) {
	    $(".menu").addClass("small"); 
	  }
	  
	  $(".menu").toggleClass("expanded");   
	});
});