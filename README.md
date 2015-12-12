# i5ting-jquery-tab

a copy of iciba.com tab implement


![](doc/1.png)


![](doc/2.png)

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/i5ting/i5ting-jquery-tab/master/dist/i5ting-jquery-tab.min.js
[max]: https://raw.github.com/i5ting/i5ting-jquery-tab/master/dist/i5ting-jquery-tab.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/i5ting-jquery-tab.min.js"></script>
<script>
jQuery(function($) {
  $('.wrap').i5ting_jquery_tab();//tab
});
</script>

<div class="wrap">
   <br/>
   <div class='i5ting_tab_list'>
        <ul>
            <li class="current">
            	<a href="#">张婷作品</a>	
            </li>
            <li>
            	<a href="#">jquery - tab</a>
            </li>
            <li>
            	<a href="#">大学</a>
            </li>
            <li>
            	<a href="#">童年</a>
            </li>
            <li class="last">
            	<a href="#">在人间</a>
            </li>
        </ul>
	</div>
    <div class="i5ting_tab_content">
        <div class="i5ting_tab_content_item current_content">
			1.This is the news part. We will give you the latest news around the world on pretty hearts and the beautiful scenry. 
		</div>
        <div class="i5ting_tab_content_item">
			2.<p>The skill part.</p>
			<p>The skill part.</p>
		</div>
        <div class="i5ting_tab_content_item">
			3.We have a large number of art works. We are so famous and popular that many people come here to watch our show from far distance.
		</div>
        <div class="i5ting_tab_content_item">
			4.A great team is very important to create a brilliant career. We are not alone ,we are a team, we can share all the dificulies.
		</div>
        <div class="i5ting_tab_content_item">
			5.If you have any question about us or our works please leave a message, we will repond at once.
		</div>
    </div>
</div>
```

## Documentation
_(Coming soon)_

### 用法
固定高度显示

```javascript
$('.wrap1').i5ting_jquery_tab({
	fix_height :'200px'
});

```

隐藏tab正文区域的按钮

```javascript
$('.wrap2').i5ting_jquery_tab({
	is_tab_content_btn_show:false
});

```

使用hover事件触发

```javascript
$('.wrap2').i5ting_jquery_tab({
	is_tab_content_btn_show:false,
	current_tab_index: 2, 
	event_trigger_type:'hover'
});
```


### 配置项说明
- 是否固定显示高度

```
fix_height :'200px'
```

如果配置了fix_height属性，则tab将以此高度，固定显示高度。

默认是自动适应高度的。

- 是否显示tab正文区域是否隐藏按钮

```
is_tab_content_btn_show :fase
```

如果配置了is_tab_content_btn_show=false属性，则tab不显示隐藏tab正文区域的按钮。

默认：is_tab_content_btn_show=true

- 增加event_trigger_type

/*现在支持2种类型：  click | hover */

- 设置current_tab_index（说明:此设置是把tab_content设置为对应选中，不修改li的原因是，不预制li class=current会导致进入刷新，会闪屏幕的）

```js
<div class='i5ting_tab_list'> 
     <ul>
         <li >
         	<a href="#">tab说明</a>	
         </li>
         <li>
         	<a href="#">特性</a>
         </li>
         <li class="current">
         	<a href="#">开源协议</a>
         </li>
         <li>
         	<a href="#">源码</a>
         </li>
         <li>
         	<a href="#">张婷作品</a>
         </li>
     </ul>
</div>
```

## 样式修改

- iciba
- github

自己修改current的border-top即可

```
.i5ting_tab_header li.current{
	background:#fff; 
/* iciba #2f82df;*/
/* github #d26911;*/
  border-top:2px solid #d26911;
	padding-top:1px; 
	height:32px; 
	margin-top:0;
	font-weight:bold;
}
```
## Examples

see example dir.

@see index.html

## Release History

v0.1

- 是否固定显示高度
- 是否显示tab正文区域是否隐藏按钮
- 给最后一个li增加last这个css样式
- 增加event_trigger_type:'click', /*现在支持2种类型：  click | hover */
- 设置current_tab_index（说明:此设置是把tab_content设置为对应选中，不修改li的原因是，不预制li class=current会导致进入刷新，会闪屏幕的）

```js
<div class='i5ting_tab_list'> 
     <ul>
         <li >
         	<a href="#">tab说明</a>	
         </li>
         <li>
         	<a href="#">特性</a>
         </li>
         <li class="current">
         	<a href="#">开源协议</a>
         </li>
         <li>
         	<a href="#">源码</a>
         </li>
         <li>
         	<a href="#">张婷作品</a>
         </li>
     </ul>
</div>
```

v0.2
-增加li的背景扩展demo
<div class='i5ting_tab_list i5ting_tab_list_bg'> 


## Refference

- http://www.jb51.net/tools/cssyasuo.shtml



 http://www.keakon.net/2011/08/03/优化UITableView性能
 http://rd.189works.com/article-103536-1.html