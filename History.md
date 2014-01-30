0.1.0 / 2014-01-26
==================

  * updated docs/site
  * added readme
  * got everything working
  * initial commit

0.1.1 / 2014-01-29
==================

* 增加tab changed callback函数
* 所有事件使用on绑定，便于处理后增dom的处理，缺点是要求jq版本必须是1.7以后
* 抽出$.tab_header_changed
* 抽出$.tab_content_changed
* 自动轮播


0.1.2 / 2014-01-30 && 2014-01-31
==================

* 给tab绑定hover效果,只有当is_slide=true时才有用
* fix: 点击的时候，调用打印函数
* 给tab_content增加padding
* 增加grunt build settings


