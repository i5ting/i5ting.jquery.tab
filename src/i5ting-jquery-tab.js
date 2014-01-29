/*
 * i5ting-jquery-tab
 * https://github.com/i5ting/i5ting-jquery-tab
 *
 * Copyright (c) 2013 i5ting
 * Licensed under the MIT license.
 */

(function($) {
	
	/**
	 * private: 给li绑定hover效果
	 */
	function _tab_list_li_hover(){
	    //tab 头hover时间处理 
	  	$(".i5ting_tab_list li").hover(function(){
	  		$(this).addClass("over");
	  	},function(){
	  		$(this).removeClass("over");	
	  	});		
	}
	
	/**
	 * private: 初始化tab content
	 */
	function _init_tab_content(container,opts){
		$(container).find('.i5ting_tab_content div.i5ting_tab_content_item')
			.eq( opts.current_tab_index ).show().siblings().hide();		
	}
	
	/**
	 * private: 如果is_tab_content_btn_show=yes，则显示上下箭头
	 */
	function _add_tab_content_btn_if_need(container,opts){
		if(opts.is_tab_content_btn_show){
			$('<a></a>',
				{  
				 	'href'  : "javascript:;",
					'class' : 'up',
					'id'    : 'up_sen'
				}
			).prependTo( $(container).find('.i5ting_tab_list') );
			
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
	}
	
	/**
	 * private: 给tab header的最后一个里增加样式，fixed
	 */
	function _add_fix_height_if_need(container,opts){
		if(opts.fix_height){
			$(container).find('.i5ting_tab_content_item').css('height',opts.fix_height);	
		}
	}
	
	/**
	 * private: 
	 */
	function _add_class_for_last_li(container,opts){
		$(container).find('.i5ting_tab_list li').last().addClass('last');
	}
	
	/**
	 * private: 应用配置，完成对应效果
	 */
	function _apply_render_with_config(container,opts){
		// 如果配置项里有opts.fix_height
		_add_fix_height_if_need($(container),opts);
	}
	
	/**
	 * public: 事件处理
	 */
	function event_process(container,opts){
		 $(container).find('.i5ting_tab_list li').on(opts.event_trigger_type ,function(e){
			 // 获取当前tab的index
			 opts.current_tab_index = $(this).prevAll().length;
			 
			 // 当前index样式处理
			 $.tab_header_changed($(this),opts)
			 
			 // 控制tab content显隐
			 $.tab_content_changed(container,opts)
				
			 // 增加回调函数
			 opts.tab_changed(opts.current_tab_index);
		 });
	}
	
	/**
	 * public: 处理tab header变动的公共函数，container_li必须是头部里的li对象
	 */
	$.tab_header_changed = function(container_li,opts){
		// 如果配置项里有opts.fix_height
		$(container_li).addClass('current').siblings().removeClass('current');
	}
	
	/**
	 * public: 处理tab content变动的公共函数，container必须是头部里的tab的container对象
	 */
	$.tab_content_changed = function(container,opts){
		// 如果配置项里有opts.fix_height
		 $(container).find('.i5ting_tab_content div.i5ting_tab_content_item').eq( opts.current_tab_index )
		 	.show().siblings().hide();
	}
	
	/**
	 * public: 初始化tab ui界面
	 */
	function init_tab_ui(container,opts){
		// 给li绑定hover效果
		_tab_list_li_hover();	
		
		// 如果is_tab_content_btn_show=yes，则显示上下箭头
		_add_tab_content_btn_if_need($(container),opts);
		
		// 给tab header的最后一个里增加样式，fixed
		_add_class_for_last_li($(container),opts);
		
		// 初始化tab content
		_init_tab_content($(container),opts);

		// 应用配置，完成对应效果
		_apply_render_with_config($(container),opts);
	}
	
	/**
	 * 插件
	 */
  	$.fn.i5ting_jquery_tab = function(options) {
	  	var opts = $.extend({}, $.fn.i5ting_jquery_tab.defaults, options);  
	
	    return this.each(function() {
			init_tab_ui($(this) ,opts);
			event_process($(this) ,opts);
	  	});
		
  	};//end i5ting_jquery_tab
	
	/**
	 * 插件默认项
	 */
  	$.fn.i5ting_jquery_tab.defaults = {  
		debug: false, 
		current_tab_index: 0, //从0开始
		is_tab_content_btn_show: true, /*显示上下箭头*/
    	fix_height :'100%',  /*如果没有配置fix_height，则自适应*/
		event_trigger_type:'click', /*现在支持2种类型：  click | hover */
		tab_changed:function(current_index){
			console.log('tab changed current_index=' + current_index);
		}
  	};  

}(jQuery));
