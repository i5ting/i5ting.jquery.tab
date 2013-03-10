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
  
  $.fn.i5ting_jquery_tab = function(options) {
	  debug(this);
	  var opts = $.extend({}, $.fn.i5ting_jquery_tab.defaults, options);  
	  
    return this.each(function() {
			
		  opts.current_tab_content = $('.i5ting_tab_content');//$(container).find('.i5ting_tab_content div.i5ting_tab_content_item').eq( opts.current_tab_index );
			
			var container = $(this);
	  	$(container).find('.i5ting_tab_list li').click(function(e){
				opts.current_tab_index = $(this).prevAll().length;
				
				console.log(opts.current_index );
				
				// opts.current_tab_content = $(container).find('.i5ting_tab_content div.i5ting_tab_content_item').eq( opts.current_tab_index );
				
				
	  		$(this).addClass('current').siblings().removeClass('current');
			  console.log($('.i5ting_tab_content div.i5ting_tab_content_item'));
	  		$(container).find('.i5ting_tab_content div.i5ting_tab_content_item').eq( opts.current_tab_index ).show().siblings().hide();		
	  	});
	
	  	$(".i5ting_tab_list li").hover(function(){
	  		$(this).addClass("over");
	  	},function(){
	  		$(this).removeClass("over");	
	  	});
			
			
			$(container).find('.i5ting_tab_list #up_sen').click(function(){
				console.log($(this).hasClass('up'));
				
				if($(this).hasClass('up')){
					$(this).removeClass('up').addClass('down');
					opts.current_tab_content.hide();
				}else{
					$(this).removeClass('down').addClass('up');
					opts.current_tab_content.show();
				}
			});
			
		
	    });
			
			
	
  };
	
  function debug($obj) {    
     if (window.console && window.console.log)    
       window.console.log('hilight selection count: ' + $obj.size());    
   };  
     
  $.fn.i5ting_jquery_tab.defaults = {   
		current_tab_index: 0, 
  	fixed_hight: 'red',    
    background: 'yellow'    
  };  

}(jQuery));
