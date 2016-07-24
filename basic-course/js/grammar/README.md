# 基本语法
## 变量
用 `var` 来声明(也叫定义)变量。用变量名来访问变量。

```
var b;// 声明变量
b = 4;// 给变量赋值
// 声明变量的时候，同时赋值
var a = 'sth';// 函数作用域的变量
a; //访问变量
a = 343; // 因为我是若类型啊
// ES6
let a = 3;// 块作业域的变量
const URL = 'xxx';// 常量
```

注意: 在使用变量前要先定义。


### 运算符
* `+,-,*,/,%`
* `++,--`
* `&,|,^` 位运算
* `&&,||`
* `?:`(三元运算符)

```
true ? 1 : 0;
if(a > 0 && b > 0){}
```

### 运算符的优先级
```
1 + 1 * 3 * (1 + 1);
1 + 3 > 3 ? 1 : 2;
```

## 注释
```
// 单行注释
/*
多
行
注释
*/
```

## [基本数据类型](http://yanhaijing.com/basejs/)
* 布尔值。 true,false
* [字符串](http://www.devdocs.me/javascript-string/)
  * 创建
  * 连接
  * 索引
  * 替换
* 数字
* 对象
  * 数组
  * 函数
  * 正则
  * 日期
* undefined,null

## 类别判断
* typeof
* Array.isArray()

## 条件
```
var a = 3;
if(a > 1){
  
} else if(a < 0){
  
} else {
  
}

switch(a){
  case 1:
    break;
  case 2:
    break;
  case 3:
    break;
  default:
    break;
}
```

## 循环
```
var i = 0;
while(i < 10){
  // doSth
  i++;
}

for(var i = 0; i < 10; i++){
  // doSth
}
```

## 函数
用 `function` 来定义函数。用 `方法名(参数1, 参数2...)` 来调用函数。

```
// 不带参数的
function getInfo(){
  // doSth
};
// 调用
getInfo();
// 带参数的，参数可以是变量，也可以是函数
function getUser(id, other){
  // doSth
};

getUser(1, {});

// 获取不定参数
function add(){
  var sum = 0;
  var argsLen = arguments.length;
  for(var i = 0; i < argsLen; i++){
    sum = sum + arguments[i];
  }
  return sum;
}

add(1, 2);
add(1, 2, 3);
```


### 函数声明提升
函数声明会被提升，他们全被移动到当前作用域开始之处。这允许你在函数声明之前调用它们：
```
function foo() {
    bar();  // 没问题，bar被提升
    function bar() {
        ...
    }
}
```

注意：虽然变量声明也会被提升，但赋值的过程不会被提升：
```
function foo() {
    bar();  // 有问题，bar是undefined
    var bar = function () {
        // ...
    };
}

```

这就是函数和函数表达式的区别

思考下面程序的输出
```
function foo(){
  console.log(c);// 报错；3；或 undefined
  var c = 3;
}

function foo(){
  var c;
  console.log(c);// 报错；3；或 undefined
  c = 3;
}

foo();
```

## 变量的作用域
```

if(true){
  var a = 3;
  let b = 4;
}
a; // 访问的了 3
a = 4;

b; // 访问不了

function doIt(){
  var c = 3;
}
doIt();

c;// 访问不了
```

## this
this 指向调用该函数的对象。

```
var name = 'joel';
function say(){
  console.log(this.name);
};
say();// 输出：joel
console.log(this.name);// 输出：joel

var info = {
  name: 'info',
  des: '...',
  sayIt: function(){console.log(this.name);}
};

info.sayIt(); // 输出：info

var another = {
  name: 'another'
}

info.sayIt.call(another);// 输出：another
var c = info.sayIt;
c();
info.sayIt.bind(another)(); // 输出：another

setTimeout(info.sayIt, 10);// 输出: joel
setTimeout(function(){
  info.sayIt(); // 输出: info
}, 10);
setTimeout(info.sayIt.bind(info), 10); // 输出: info

functon changeThis(callback){
  callback.call(window);
}
changeThis(info.sayIt);
```


