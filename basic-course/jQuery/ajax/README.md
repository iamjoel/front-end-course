# ajax
## 基本用法
`$.ajax(url[,ajaxSetting])`

## ajaxSetting
* `url`
* `data`
* `type` 请求的method,包括 GET,POST,PUT,PATCH,DELETE
* `headers` 设置请求头信息
* `async` 是否用同步的方式，默认是 false
* `dataType` 对从服务器端返回来的数据按照什么格式进行解析，格式包括 xml, json, script, 或 html
* `beforeSend`  Function( jqXHR jqXHR, PlainObject settings )

### 回调
* `success`
类型: Function( PlainObject data, String textStatus, jqXHR jqXHR )
* `fail`
* `always`
* `complete`

## jqXHR
`$.ajax`的返回值    
jqXHR上的属性和方法
* readyState
* status 服务器端返回的状态码
* statusText
* readyState
* setRequestHeader(name, value)
* getAllResponseHeaders()
* getResponseHeader()
* statusCode()
* abort() 停止请求


## 配置全局ajax默认值
`$.ajaxSetup(options)`    
如:
```
$.ajaxSetup({
    'headers': {
        'content-type': 'application/json'
    }
});
```
不建议

## 跨域 Ajax
如果不做处理，由于同源策略，ajax 是不能跨域的。解决方式主要有两种：服务器加跨域头和jsonp。

详细见[这里](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)。

## 服务器加跨域头(跨域资源共享 CORS)

```
Access-Control-Allow-Origin: http://api.bob.com
或
Access-Control-Allow-Origin: *

```

详细见[这里](http://www.ruanyifeng.com/blog/2016/04/cors.html)

## jsonp
客户端
```
<script src="http://example.com/ip?callback=foo"></script>
<script>
  window.foo = function (data) {
    // 服务器端返回后
  }
</script>
```

服务器端返回
```
foo({
  "ip": "8.8.8.8"
});
```


## 参考
http://api.jquery.com/jQuery.ajax/
