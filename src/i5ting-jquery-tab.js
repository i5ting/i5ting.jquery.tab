/*
 * i5ting-jquery-tab
 * https://github.com/i5ting/i5ting-jquery-tab
 *
 * Copyright (c) 2013 i5ting
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.awesome = function() {
    return this.each(function() {
      $(this).html('awesome');
    });
  };

  // Static method.
  $.awesome = function() {
    return 'awesome';
  };

  // Custom selector.
  $.expr[':'].awesome = function(elem) {
    return elem.textContent.indexOf('awesome') >= 0;
  };
  
  $.fn.no320_jquery_tab = function() {
    return this.each(function() {
        //$(this).html('awesome');
		var container = $(this);
	  	$(container).find('.no320_tab_list li').click(function(e){
	  		$(this).addClass('current').siblings().removeClass('current');
			console.log($('.no320_tab_content div.no320_tab_content_item'));
	  		$(container).find('.no320_tab_content div.no320_tab_content_item').eq( $(this).prevAll().length ).show().siblings().hide();		
	  	});
	
	  	$(".no320_tab_list li").hover(function(){
	  		$(this).addClass("over");
	  	},function(){
	  		$(this).removeClass("over");	
	  	});
		
    });
  };
  

}(jQuery));
