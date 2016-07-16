# 布局 [demo](demo/layout.html)
在我看来，布局就是页面上元素放置的位置，以及元素的大小。    

因此，布局主要包括如下的内容：
对于单个元素在父元素中的    
* 位置
	* 处于水平居中
	* 处于垂直居中
	* 处于具体的某个位置，是否随页面滚动，位置发生变化
* 尺寸
	* 充满父级元素
	* 固定大小

对于多个元素占一行
* 位置
	* 多个元素都在一侧
	* 部分元素在左，部分在右侧
	* 水平居中
	* 多个元素高度不同的垂直居中
	* 两端对齐
* 尺寸
	* 元素均固定宽度
	* 部分元素固定宽度，剩下的元素填充剩余部分


## 布局的技术
* 浮动布局
* inline-block布局
* 表格布局
* flex
* Grid布局
* 多列布局
* ...

上面的布局都是可以通过上面提到的布局技术来实现的。    
一般来说，对于一个较复杂的页面会用到多种布局技术。    

下面会介绍一些简单的布局的Demo，复杂的布局基本都可以通过简单的布局组合而来。


## 布局框架
* [kite.css](http://hiloki.github.io/kitecss/)
* 栅格系统


## 拓展阅读
* [学习CSS布局](http://zh.learnlayout.com/)
* [CSS 布局模块](http://www.w3cplus.com/css3/css3-layout-modules.html)
* [The Anti-hero of CSS Layout - "display:table"](http://colintoh.com/blog/display-table-anti-hero)
* [Using Flexbox: Mixing Old and New for the Best Browser Support](https://css-tricks.com/using-flexbox/)
* [Layout Secret Weapon #1: The CSS Table Property](http://www.sitepoint.com/solving-layout-problems-css-table-property/)