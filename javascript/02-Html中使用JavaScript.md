# Html中使用JavaScript
## script标签
在Html页面中使用JavaScript主要方法就是使用script标签
> ### script的6个属性
- async：异步加载脚本，不确定各个脚本执行顺序，脚本加载完成后执行
``` Html
<script type="text/javascript" async="async" src="example1.js"></script>
```
- charset：字符集设置，一般不使用浏览器会默认
- defer：文档解析完成后在执行文件
``` Html
<script type="text/javascript" defer="defer" src="example1.js"></script>
```
- language：已经废弃，指定JavaScript的版本号
- src：引用外部的js文件
- type：指定JavaScript的类型，一般都是`text/javascript`
## script的加载执行顺序
默认没有通过属性设置会按照放置的位置加载执行，先执行文档遇到script标签就执行script的代码或者引用外部文件在进行执行
``` Html
<!DOCTYPE html>
<html>
<head>
    <title>Example HTML Page</title>
</head>
<body>
    <!-- 这里放内容 -->
    <script type="text/javascript" src="example1.js"></script>
    <script type="text/javascript" src="example2.js"></script>
</body>
</html>
```
这样，在解析包含的JavaScript 代码之前，页面的内容将完全呈现在浏览器中。而用户也会因为浏览器窗口显示空白
页面的时间缩短而感到打开页面的速度加快了。
## JavaScript 嵌入代码与外部文件
- 页面直接书写JavaScript代码
```Html
<script type="text/javascript">
    function sayHi(){ alert("Hi!"); }
</script>
```
- 引用外部文件
```Html
<script type="text/javascript" src="example1.js"></script>
```
>可维护性：无需触及Html页面直接对应的js文件即可更改代码

>可缓存：相同的js文件会被浏览器缓存页面使用相同的文件，最终结果就是能够加快页面加载的速度

>适应未来：通过外部文件来包含JavaScript 无须使用前面提到XHTML 或注释hack。HTML 和XHTML 包含外部文件的语法是相同的

## 文档模式
IE5.5 引入了文档模式的概念，而这个概念是通过使用文档类型（doctype）切换实现的，指定文档的解析标准，目前发展到Html5基本都
使用最新的标准`<!DOCTYPE html>`
``` Html
<!-- HTML 4.01 严格型 -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

<!-- XHTML 1.0 严格型 -->
<!DOCTYPE html PUBLIC
"-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- HTML 4.01 过渡型 -->
<!DOCTYPE HTML PUBLIC
"-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">

<!-- HTML 4.01 框架集型 -->
<!DOCTYPE HTML PUBLIC
"-//W3C//DTD HTML 4.01 Frameset//EN"
"http://www.w3.org/TR/html4/frameset.dtd">

<!-- XHTML 1.0 过渡型 -->
<!DOCTYPE html PUBLIC
"-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<!-- XHTML 1.0 框架集型 -->
<!DOCTYPE html PUBLIC
"-//W3C//DTD XHTML 1.0 Frameset//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">

<!-- HTML 5 -->
<!DOCTYPE html>
```
## noscript标签
不支持JavaScript的浏览器中可以使用该标签来实现JavaScript的使用
``` Html
<html>
<head>
    <title>Example HTML Page</title>
    <script type="text/javascript" defer="defer" src="example1.js"></script>
    <script type="text/javascript" defer="defer" src="example2.js"></script>
</head>
<body>
    <noscript>
        <p>本页面需要浏览器支持（启用）JavaScript。
    </noscript>
</body>
</html>
```