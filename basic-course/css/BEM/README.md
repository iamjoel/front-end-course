# BEM
[BEM](http://getbem.com/) 是一种前端项目开发的方法学，由 Yandex 公司提出。BEM 的名称来源于该方法学的三个组成部分的英文首字母，分别是块（Block）、元素（Element）和修饰符（Modifier）。这三个不同的组成部分称为 BEM 实体。

## 解决的问题
当一个项目比较大的时候，容易产出样式冲突的问题。BEM 主要解决样式的冲突的问题，以此帮助你在前端开发中实现可复用的组件和代码共享。

感兴趣的可以其他解决代码样式冲突的方案：[【译】CSS 模块](http://www.w3ctech.com/topic/1479)。

## 概念
### 块
块即是通常所说的 Web 应用开发中的组件或模块。每个块在逻辑上和功能上都是相互独立的。块中封装了组件相关的 JavaScript、CSS 代码和 HTML 模板。由于块是独立的，可以在应用开发中进行复用，从而降低代码重复并提高开发效率。块可以放置在页面上的任何位置，也可以互相嵌套。同一个块可以在页面上存在多个实例。块的不同实例具有相似的结构。一个典型的块的示例是菜单。一个项目中可以有多个不同的菜单，具体相似的结构和样式。

块的名称应该是全局唯一的。一个页面可以

### 元素
元素是块中的组成部分。元素不能离开块来使用。在菜单块中，每个菜单项是块中的元素。

### 修饰符
修饰符用来定义块或元素的外观和行为。同样的块在应用不同的修饰符之后，会有不同的外观。当菜单块出现在页面上的不同位置时，可以有不同的样式。菜单块中的菜单项可以有选中或非选中的状态。

## 例子
HTML
```
<ul class="menu">
  <li class="menu__item menu__item--selected">Menu Item 1</li>
  <li class="menu__item">Menu Item 2</li>
  <li class="menu__item">Menu Item 3</li>
</ul>
```

CSS
```
.menu {
 list-style: none;
}
.menu__item {
 font-weight: bold;
}
.menu__item--selected {
 color: red;
}
```

## BEM 常见问题
### 避免 .block__el1__el2
如
```
<div class='block'>
    <div class='block__elem1'>
        <div class='block__elem1__elem2'>
            <div class='block__elem1__elem2__elem3'></div>
        </div>
    </div>
</div>
```

优化为
```
<div class='block'>
    <div class='block__elem1'>
        <div class='block__elem2'>
            <div class='block__elem3'></div>
        </div>
    </div>
</div>
```

### modify 影响元素的写法
避免用 block-name–-modifier-name__element-name 的写法
```
// bad
<div class="block block--xmas">
  <button class="block__btn block--xmas__btn"></button>
</div>

// good

<div class="block block--xmas">
  <button class="block__btn"></button>
</div>
<style>
.block--xmas .block__button {
    /* Jingle bells, jingle bells, jingle all the way.*/
}
</style>
```

### 组件下的组件
避免用 block-name__block2-name 的写法

```
// bad
<div class='block'>
    <div class='block__block2'>
        <div class='block__block2__elem'>
        </div>
    </div>
</div>

// good
<div class='block'>
    <div class='block2 block2--modifier'>
        <div class='block2__elem'>
        </div>
    </div>
</div>
```

### 响应式组件的处理
用 @ 。如
```
<div class="block block2@sm"></div>
<style>
@media (min-width: 15em) {
  .block2\@sm {}
}
</style>
```

## 拓展阅读
* [BEM 101](https://css-tricks.com/bem-101/)
* [Battling BEM (Extended Edition): 10 Common Problems And How To Avoid Them](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/)
* [BEM FAQ](http://getbem.com/faq/#custom-tags-for-blocks)
* [BEMIT: Taking the BEM Naming Convention a Step Further](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/) Healthchecks 这块挺有意思。