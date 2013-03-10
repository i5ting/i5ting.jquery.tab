/*
 * i5ting-jquery-tab
 * https://github.com/i5ting/i5ting-jquery-tab
 *
 * Copyright (c) 2013 i5ting
 * Licensed under the MIT license.
 */

(function($) {

  
	function i5ting_tab_list_li_hover(){
	  //tab 头hover时间处理 
  	$(".i5ting_tab_list li").hover(function(){
  		$(this).addClass("over");
  	},function(){
  		$(this).removeClass("over");	
  	});
			
	}
	
	function tab_content_btn_show_or_hide(container){
		$(container).find('.i5ting_tab_list #up_sen').click(function(){
			if($(this).hasClass('up')){
				$(this).removeClass('up').addClass('down');
				$(container).find('.i5ting_tab_content').hide();
			}else{
				$(this).removeClass('down').addClass('up');
				$(container).find('.i5ting_tab_content').show();
			}
		});
	}
	
	function add_tab_content_btn_if_need(container,opts){
		if(opts.is_tab_content_btn_show){
			$('<a></a>',
					{  
					 	'href'  : "javascript:;",
						'class' : 'up',
						'id'    : 'up_sen'
					}
			).prependTo( $(container).find('.i5ting_tab_list') );
		}
	}
	
	function add_fix_height_if_need(container,opts){
		if(opts.fix_height){
			$(container).find('.i5ting_tab_content_item').css('height',opts.fix_height);	
		}
	}
	
  $.fn.i5ting_jquery_tab = function(options) {
	  var opts = $.extend({}, $.fn.i5ting_jquery_tab.defaults, options);  
		var container = $(this);
			
		//如果is_tab_content_btn_show=yes，则显示上下箭头
		add_tab_content_btn_if_need($(this),opts);
	
	  
    return this.each(function() {
		  opts.current_tab_content = $('.i5ting_tab_content');
			//$(container).find('.i5ting_tab_content div.i5ting_tab_content_item').eq( opts.current_tab_index );
			// container = $(this);

			
			//tab 头点击处理
	  	$(container).find('.i5ting_tab_list li').click(function(e){
				opts.current_tab_index = $(this).prevAll().length;
				
				console.log(opts.current_index );
				
	  		$(this).addClass('current').siblings().removeClass('current');
			  console.log($('.i5ting_tab_content div.i5ting_tab_content_item'));
	  		$(container).find('.i5ting_tab_content div.i5ting_tab_content_item').eq( opts.current_tab_index ).show().siblings().hide();		
	  	});
	
		  
			i5ting_tab_list_li_hover();
			

		  tab_content_btn_show_or_hide($(this));
			

			add_fix_height_if_need(container,opts);
		
	  });//end return
  };//end i5ting_jquery_tab
	
 
     
  $.fn.i5ting_jquery_tab.defaults = {   
		current_tab_index: 0, 
		is_tab_content_btn_show: true, /*显示上下箭头*/
    // fix_height :'200px',  /*如果没有配置fix_height，则自适应*/
		    
  };  

}(jQuery));
