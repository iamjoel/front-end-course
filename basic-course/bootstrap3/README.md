# Bootstrap3 [官网](http://getbootstrap.com/) [中文版](http://v3.bootcss.com/)
## 使用方法
1. 下载 Bootstrap。 见[这里](http://v3.bootcss.com/getting-started/)。
1. 在页面中引入 Bootstrap 的 CSS，JS 和 jQuery。也可以用某某提供的免费 CDN 上的

```
<link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
<script src="//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
```

当然也可以定制化 BootStrap。见 [见这里](http://v3.bootcss.com/customize/)

## 基本模板
```
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>你好，世界！</h1>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```

## 一些工具类
### table
给 table 加如下类名
* table ：Bootstrap 的 table
* table-striped： 条纹状表格
* table-bordered: 带边框的表格
* table-hover: 让 `<tbody>` 中的每一行对鼠标悬停状态作出响应

在 tr 或 td 上一些状态类
* active
* success
* info
* warning
* danger

## 常用组件

## 字体图标
fontawesom

## 栅格系统

## 注意点
Bootstrap 里设置所以元素的 box-sizing 为 border-box。
```
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
```

