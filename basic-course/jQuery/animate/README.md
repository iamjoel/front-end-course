# [动画](https://api.jquery.com/animate/)
`.animate(要动画属性对象 [,动画持续时间][,动画缓动函数][,动画完成回调])`

其中
* 要动画属性对象: 不是所有的 CSS 属性才可以做动画。只有那些数值型的才可以，比如，高度，宽度等。
* 动画持续时间：可选，默认值是 400毫秒。其值可以是数字或字符串。数字的单位是毫秒。字符串的可选值是 `fast`（200毫秒） 和 `slow`（600毫秒）。
* 缓动函数（描述了各个阶段动画的快慢）： 可选，默认是 swing。可选值只有 `linear` 和 `swing`，要用更多缓动函数，可以用第三库 [easing](http://gsgd.co.uk/sandbox/jquery/easing/)。 较详细的介绍见[这里](http://www.jianshu.com/p/9b6824f7af51)。

## Demo
HTML
```
<a id="clickme">点我</a>
<div class="target" style="width: 100px; height: 100px; background:#f00"></div>

```

JS
```
var $target = $('.target');
$('#clickme').click(function(){
  $target.animate({
    width: '150px',
    height: '+=50px'
  }, 1000, function(){
    console.log('动画完成');
  });
});
```