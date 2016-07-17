# 基本语法
## 定义变量
```
var a = 'sth';// 函数作用域的变量
// ES6
let a = 3;// 块作业域的变量
const URL = 'xxx';// 常量
```

## 定义函数
```
// 不带参数的
function getInfo(){
  // doSth
};
// 带参数的，参数可以是变量，也可以是函数
function getUser(id, other){
  // doSth
};
// 获取不定参数
function add(){
  var sum = 0;
  var agsLen = arugmnents.length;
  for(var i = 0; i < argsLen; i++){
    sum = sum + argumnents[i];
  }
  return sum;
}
// 函数表达式
var getSth = function(){
  // doSth
}
```

## 函数

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

## 闭包

## this
```
var name = 'joel';
function say(){
  console.log(this.name);
};

var info = {
  name: 'info',
  des: '...',
  sayIt: function(){console.log(this.name);}
};

var another = {
  name: 'another'
}

info.sayIt.call(another);

```
