# CSS媒体查询(media-queries)
媒体查询 包含了一个媒体类型和至少一个使用如宽度、高度和颜色等媒体属性来限制样式表范围的表达式。它为我们在不同的设备和环境下实现丰富的界面提供了一种快捷方法。

简单来说，通过媒体查询可以对支持某个特性的设备设定特定的样式。

## 语法
媒体查询可以在 link标签上加media属性或css文件中使用。
```
<!-- link元素中的CSS媒体查询 -->
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />

<!-- 样式表中的CSS媒体查询 -->
<style>
@media (max-width: 600px) {
  .facet_sidebar {
    display: none;
  }
}
</style>
```

### 媒体查询语句结构
由媒体类型 +一到多个CSS属性判断组成，而多个CSS属性判断可以用关键字and连接。媒体类型是可选的，默认是全部（all）。
```
@media screen and (min-width:1024px) and (max-width:1280px) and (animation){
	body{font-size:14px;}
}
```

#### max与min
他们是要配合支持它们的属性使用的,如：
```
@media (min-width:1000px) and (min-width:1500px){
	body{font-size:14px;}
}
```

### 逻辑操作符
操作符 not，and 和 only 可以用来构建复杂的媒体查询。    
and 操作符用来把多个 媒体属性 组合起来，合并到同一条媒体查询中。只有当每个属性都为
真时，这条查询的结果才为真。    
not 操作符用来对一条媒体查询的结果进行取反。    
only 操作符表示仅在媒体查询匹配成功的情况下应用指定样式。可以通过它让选中的样式在老式浏览器中不被应用。    
*注意：若使用了 not 或 only 操作符，必须明确指定一个媒体类
型。*

### media query支持的属性
 属性  | 值 | 是否接受 min/max 前缀 | 描述|
------ | ------------- |----------- |-------
color  | 整数  | yes  | 每种色彩的字节数
device-aspect-ratio  | 整数/整数  | yes  | 宽高比例
device-height  | 整数+单位  | yes  | 设备屏幕的输出高度
device-width  | 整数+单位  | yes  | 设备屏幕的输出宽度
grid  | 整数  | no  | 是否是基于格栅的设备
height  | 整数+单位  | yes  | 渲染界面的高度
monochrome  | 整数  | yes  | 单色帧缓冲器中每像素字节
resolution  | 分辨率(“dpi/dpcm”)  | yes  | 分辨率
scan  | Progressive interlaced  | no  |tv媒体类型的扫描方|
width  | 整数+单位  | yes  | 渲染界面的宽度
orientation  | Portrait/landscape  | no  | 横屏或竖屏

### webkit浏览器对media query支持的属性
常见的有
* transform-2d	只用于支持使用 -webkit-transform实现2D变换的浏览器
* transform-3d	只用于支持使用 -webkit-transform实现3D变换的浏览器
* transition	只用于支持使用-webkit-transition实现变换效果的浏览器
* animation	只用于支持使用-webkit-animation实现动画的浏览器


## 媒体类型(media type)列表
* all	所有设备
* braille	盲文
* embossed	盲文打印
* handheld	手持设备
* print	文档打印或打印预览模式
* projection	项目演示，比如幻灯
* screen	彩色电脑屏幕
* speech	演讲
* tty	固定字母间距的网格的媒体，比如电传打字机
* tv 电视

## 实例
### android手机的多分辨率问题
android系统的开放性导致其终端的多样性，那么对于各种各样的android手机来说，屏幕分辨率的差异导致针对android手机的页面重构复杂性增加，那么我们可以用media query为每种分辨率提供特定样式：
```
/* for 240 px width screen */
@media only screen and (max-device-width:240px){
    selector{
    }
}

/* for 360px width screen */
@media only screen and (min-device-width:241px) and (max-device-width:360px){
    selector{
    }
}

/* for 480 px width screen */
@media only screen (min-device-width:361px)and (max-device-width:480px){
    selector{
    }
}
```

## device-aspect-ratio
device-aspect-ratio可以用来适配特定屏幕长宽比的设备，这也是一个很有用的属性，比如，我们的页面想要对长宽比为4:3的普通屏幕定义一种样式，然后对于16:9和16:10的宽屏，定义另一种样式，比如自适应宽度和固定宽度：
```
/* for 4:3 screen */
@media only screen and (device-aspect-ratio:4/3){
    selector{
    }
}

/* for 16:9 and 16:10 screen */
@media only screen and (device-aspect-ratio:16/9) and (device-aspect-ratio:16/10){
    selector{
    }
}
```

## -webkit-device-pixel-ratio以及 resolution
像素密度。    
-webkit-device-pixel-ratio时非标准写法。标准是用resolution。见 http://caniuse.com/#feat=css-media-resolution 。
```
@media (-webkit-min-device-pixel-ratio: 1.5), /* Webkit */
       (min-resolution: 1.5dppx)              /* The Future */
...
}
```
通过这个我们可以用来对Retina屏中使用的更清晰对图片。一个脚本脚步[retinajs](http://imulus.github.io/retinajs/)

## 资源
* http://www.qianduan.net/media-type-and-media-query.html