# JSON
JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。它基于ECMAScript的一个子集。 JSON采用完全独立于语言的文本格式，但是也使用了类似于C语言家族的习惯（包括C、C++、C#、Java、JavaScript、Perl、Python等）。这些特性使JSON成为理想的数据交换语言。 易于人阅读和编写，同时也易于机器解析和生成(一般用于提升网络传输速率)。

## 合法的JSON
JSON 数据的书写格式是：名称/值对。
名称/值对组合中的名称写在前面（在双引号中），值对写在后面(同样在双引号中)，中间用冒号隔开，如
```
"firstName":"John"
```

JSON 值可以是
* 数字（整数或浮点数）
* 字符串（在双引号中）
* 逻辑值（true 或 false）
* 数组（在方括号中）
* 对象（在花括号中）
* null

JSON demo
```
{
  "name": "Kitty",
  "age": 1,
  "describe": "She is a Cat",
  "Children": ["a", "b", "c"]
}
```

## 常用方法
* JSON.stringify(json) 将 JSON 转换成字符串
* JSON.parse(jsonString) 将 jsonStrng 转化为对象


[JSONLint](http://jsonlint.com/) 验证 JSON 的工具。