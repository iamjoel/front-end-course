# 基本结构

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>页面的标题</title>
</head>
<body>
  页面中要显示的内容都在这里
</body>
</html>
```
其中
* DOCTYPE 定义了文档类型。`<!DOCTYPE html>`表明这是一个HTML5文档。 DOCTYPE 的具体介绍见[这里](quirks-mode-and-standards-mode.md)。
* `<html>`和`</html>`之间的内容描述了网页
* `<head>`和`</head>`之间的内容描述了网页的一些额外信息。不会被显示。
* `<body>`和`</body>`之间的内容描述网页的可见部分。
* `<title>`之间的内容描述了网页的标题。会在网页标签上显示
* `<meta charset="utf-8">`让浏览器用utf-8的编码格式来对文档内容进行编码

[demo](demo/struct.html)

