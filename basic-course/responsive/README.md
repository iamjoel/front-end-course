# 响应式介绍
## 什么是响应式网站
网站在各种各样的设备使用体验都还不错。体验包括：视觉体验和交互体验。

## 响应式的优势
因为一套代码可以在不同设备工作。对用户友好；节约总成本；好维护。

## 响应式的方法
* 某元素在大屏和小屏幕宽度不一样。比如，在大屏中宽度占屏幕宽度的四分之一，在小屏中显示 100%。
* 元素的显示和隐藏
* 不同设备加载不同尺寸的图片
* 导航链接在 PC 站在显示在一行，在小屏手机上，导航折叠成一个按钮，点按钮看到所有的按钮
* 移动设备的某些浏览器上，点击会用300ms的延迟（mobile browsers will wait approximately 300ms from the time that you tap the button to fire the click event. The reason for this is that the browser is waiting to see if you are actually performing a double tap.）。可以用[fastclick](https://github.com/ftlabs/fastclick)。
* PC 页面用分页，手机用下拉加载下一页

## 技术手段
### 媒体查询(Media Queries)
[这里](media-queries)

要兼容性 IE8。可使用 repond.js。

### 用 rem 做单位
元素的尺寸相关的都用 rem 来做单位。控制 html 的 字号大小与屏幕宽度有一个大概正比的关系。

用媒体查询来做。html的默认字号是16px.
```
html {
  font-size: 62.5%
}

@media only screen and (min-width: 481px) {
  html {
    font-size:94%!important
  }
}

@media only screen and (min-width: 561px) {
  html {
    font-size:109%!important
  }
}

@media only screen and (min-width: 641px) {
  html {
    font-size:125%!important
  }

  body {
    max-width: 640px
  }
```

用JS。主要代码
```
var width = docEl.getBoundingClientRect().width;// 屏幕宽度
if (width > 540) { // 最大宽度
    width = 540;
}
// psd 和 屏幕是等比的
// psd宽度(这里假设为640px)/psd上100px = 屏幕宽度/屏幕上的100px
// 设置：屏幕上的100px = 1rem
// 1rem = 屏幕宽度/6.4
var rem = width / 6.4; // 640px的psd中，1rem = 100px。换算是除100。即使不用Sass也很好算
docEl.style.fontSize = rem + 'px';

```

完整版见[这里](demo/assets/vendor/caculate-rem.js)。


具体解释[见这里](http://caibaojian.com/rem-responsive-2.html)。

### 响应式图片
使用 picture 元素。
```
<picture>
    <source srcset="smaller_landscape.jpg" media="(max-width: 40em) and (orientation: landscape)">
    <source srcset="smaller_portrait.jpg" media="(max-width: 40em) and (orientation: portrait)">
    <source srcset="default_landscape.jpg" media="(min-width: 40em) and (orientation: landscape)">
    <source srcset="default_portrait.jpg" media="(min-width: 40em) and (orientation: portrait)">
    <img srcset="default_landscape.jpg" alt="My default image">
</picture>
```

详细见[这里](http://www.w3cplus.com/html5/quick-tip-how-to-use-html5-picture-for-responsive-images.html)。

## 其他概念
### 视口(viewport)
对于响应式设计的页面，必须设置视口
```
<meta name="viewport" content="width=device-width">
```

如果你没有定义viewport，如果你的网站的宽度大于980或者小于980，iPhone（包括android）会把它默认以980px的窗口来缩放和渲染，这样就会有各种问题。页面超过980部分的会显示不全，小于的会有白色背景。

### 设备像素比率（Device Pixel Ratio，DPR）
设备像素即屏幕设置的分辨率。设置的分辨率不一定等于显示器的物理分辨率，大多数情况下，我们设置的分辨率与物理分辨率一致，显示效果才最佳。  
CSS像素指在CSS中的单位PX。  

* 在缩放级别为100%时，设备像素比率为1的设备上，1个CSS像素等于1个设备像素。
* 在缩放级别为100%时，retina设备上，1个CSS像素等于4个设备像素。
* 在缩放级别为100%时，设备像素比率为1.5的设备上，1个CSS像素等于1.5个设备像素。
* 在缩放级别为200%时，设备像素比率为1的设备上，1个CSS像素等于4个设备像素。

### 移动设备优先
所做的设计优先考虑移动设备的用户。对前端来说先写移动端的 CSS;PC 的 CSS 放在媒体查询中写。移动优先的代码，如

```
.news__item{
  width: 50%;
}
/* ipad 以及更大的屏幕 */
@media (min-width: 768px){
  .news__item{
    width: 50%;
  }
}

```

当然桌面优先与移动设备优先想法。