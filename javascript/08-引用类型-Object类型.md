## 引用类型
### Object类型
- 构造函数定义
``` JavaScript
var person = new Object();
person.name = "Nicholas";
person.age = 29;
```
- 字面量定义
``` JavaScript
var person = {
name : "Nicholas",
age : 29
};
```
- 在通过对象字面量定义对象时，实际上不会调用Object 构造函数（Firefox 2 及更早版本会调用Object 构造函数；但Firefox 3 之后就不会了）。
- 对象属性的访问
``` JavaScript
alert(person["name"]); //"Nicholas"
alert(person.name); //"Nicholas"

//方括号访问属性，可以使用变量方式
var propertyName = "name";
alert(person[propertyName]); //"Nicholas"
```
### Array类型
#### 1. 数组的定义
``` JavaScript
var colors = new Array(3); // 创建一个包含3 项的数组
var names = new Array("Greg"); // 创建一个包含1 项，即字符串"Greg"的数组
var colors = Array(3); // 创建一个包含3 项的数组
var names = Array("Greg"); // 创建一个包含1 项，即字符串"Greg"的数组
var colors = ["red", "blue", "green"]; // 创建一个包含3 个字符串的数组
var names = []; // 创建一个空数组
var values = [1,2,]; // 不要这样！这样会创建一个包含2 或3 项的数组
var options = [,,,,,]; // 不要这样！这样会创建一个包含5 或6 项的数组
```
#### 2. 数组长度：长度可以操作即可改变数组
``` JavaScript
var colors = ["red", "blue", "green"]; // 创建一个包含3 个字符串的数组
colors.length = 2;
alert(colors[2]); //undefined
colors[colors.length] = "black"; //（在位置2）添加一种颜色
```
#### 3. 检测数组
``` JavaScript
if (value instanceof Array){
    //对数组执行某些操作
}
if (Array.isArray(value)){
    //对数组执行某些操作
    //支持 Array.isArray()方法的浏览器有IE9+、Firefox 4+、Safari 5+、Opera 10.5+和Chrome。
}
```
#### 4. 转换方法
- Array重新了toLocaleString()、toString()和valueOf()方法
``` JavaScript
var colors = ["red", "blue", "green"]; // 创建一个包含3 个字符串的数组
alert(colors.toString()); // red,blue,green
alert(colors.valueOf()); // red,blue,green
alert(colors); // red,blue,green，默认String方法进行转换
```
- 可以自定义重写方法
``` JavaScript
var person1 = {
    toLocaleString : function () {
        return "Nikolaos";
    },
    toString : function() {
        return "Nicholas";
    }
};
var person2 = {
    toLocaleString : function () {
        return "Grigorios";
    },
    toString : function() {
        return "Greg";
    }
};
var people = [person1, person2];
alert(people); //Nicholas,Greg
alert(people.toString()); //Nicholas,Greg
alert(people.toLocaleString()); //Nikolaos,Grigorios
```
- 数组转为字符串
``` JavaScript
var colors = ["red", "green", "blue"];
alert(colors.join(",")); //red,green,blue
alert(colors.join("||")); //red||green||blue
```
#### 5. 栈方法
``` JavaScript
var colors = new Array(); // 创建一个数组
var count = colors.push("red", "green"); // 推入两项
alert(count); //2
count = colors.push("black"); // 推入另一项
alert(count); //3
var item = colors.pop(); // 取得最后一项
alert(item); //"black"
alert(colors.length); //2
```
#### 6. 队列方法
``` JavaScript
var colors = new Array("yellow"); //创建一个数组
var count = colors.unshift("red", "green"); //推入两项
alert(count); //3
count = colors.unshift("black"); //推入另一项
alert(count); //3
var item = colors.pop(); //取得最后一项
alert(item); //"green"
alert(colors.length); //2
```
#### 7. 排序方法
- reverse数据反转
``` JavaScript
var values = [1, 2, 3, 4, 5];
values.reverse();
alert(values); //5,4,3,2,1=>数据反转
```
- 简单排序
``` JavaScript
var values = [0, 1, 5, 10, 15];
values.sort();
alert(values); //0,1,10,15,5
```
- 自定义排序
``` JavaScript
function compare(value1, value2) {
    if (value1 < value2) {
        return 1;
    } else if (value1 > value2) {
        return -1;
    } else {
        return 0;
    }
}
var values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values); // 15,10,5,1,0
```
>在默认情况下，sort()方法按升序排列数组项——即最小的值位于最前面，最大的值排在最后面。
为了实现排序，sort()方法会调用每个数组项的toString()转型方法，然后比较得到的字符串，以
确定如何排序
#### 7. 操作方法
- concat方法
``` JavaScript
var colors = ["red", "green", "blue"];
var colors2 = colors.concat("yellow", ["black", "brown"]);
alert(colors); //red,green,blue
alert(colors2); //red,green,blue,yellow,black,brown
```
- slice方法
``` JavaScript
var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1,4);
alert(colors2); //green,blue,yellow,purple
alert(colors3); //green,blue,yellow
```
- splice方法

 |   参数    |   描述   |   
 |   :-               |   :-                         |  
 |  index  |   必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。  | 
 |  howmany  |   必需。要删除的项目数量。如果设置为 0，则不会删除项目。  |  
 |  item1, ..., itemX  |   可选。向数组添加的新项目。  | 

``` JavaScript
var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1); // 删除第一项
alert(colors); // green,blue

alert(removed); // red，返回的数组中只包含一项
removed = colors.splice(1, 0, "yellow", "orange"); // 从位置1 开始插入两项
alert(colors); // green,yellow,orange,blue

alert(removed); // 返回的是一个空数组
removed = colors.splice(1, 1, "red", "purple"); // 插入两项，删除一项
alert(colors); // green,red,purple,orange,blue
alert(removed); // yellow，返回的数组中只包含一项
```
#### 7. 位置方法
- indexOf方法
``` JavaScript
var numbers = [1,2,3,4,5,4,3,2,1];
alert(numbers.indexOf(4)); //3
alert(numbers.indexOf(4, 4)); //5  参数：搜索值，开始索引
```
- lastIndexOf方法
``` JavaScript
var numbers = [1,2,3,4,5,4,3,2,1];
alert(numbers.lastIndexOf(4)); //5
alert(numbers.lastIndexOf(4, 4)); //3 参数：搜索值，开始索引
```
>使用indexOf()和lastIndexOf()方法查找特定项在数组中的位置非常简单，支持它们的浏览器包
括IE9+、Firefox 2+、Safari 3+、Opera 9.5+和Chrome。
#### 8. 迭代方法
- every()：对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true。
``` JavaScript
var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item, index, array){
    return (item > 2);
});
alert(everyResult); //false
```
- some()：对数组中的每一项运行给定函数，如果该函数对任一项返回true，则返回true。
``` JavaScript
var someResult = numbers.some(function(item, index, array){
    return (item > 2);
});
alert(someResult); //true
```
- filter()：对数组中的每一项运行给定函数，返回该函数会返回true 的项组成的数组。
``` JavaScript
var numbers = [1,2,3,4,5,4,3,2,1];
    var filterResult = numbers.filter(function(item, index, array){
return (item > 2);
});
alert(filterResult); //[3,4,5,4,3]
```
- forEach()：对数组中的每一项运行给定函数。这个方法没有返回值。
``` JavaScript
var numbers = [1,2,3,4,5,4,3,2,1];
    numbers.forEach(function(item, index, array){
//执行某些操作
});
```
- map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
``` JavaScript
var numbers = [1,2,3,4,5,4,3,2,1];
var mapResult = numbers.map(function(item, index, array){
    return item * 2;
});
alert(mapResult); //[2,4,6,8,10,8,6,4,2]
```
#### 8. 归并方法
- reduce方法
``` JavaScript
var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array){
    return prev + cur;
});
alert(sum); //15=>1+2+3+4+5
```
- reduceRight方法
``` JavaScript
var values = [1,2,3,4,5];
var sum = values.reduceRight(function(prev, cur, index, array){
    return prev + cur;
});
alert(sum); //15=>5+4+3+2+1
```
### Date类型
- 时间转换
``` JavaScript
var someDate = new Date(Date.parse("May 25, 2004"));
```
- 时间比较：Date 类型的valueOf()方法，则根本不返回字符串，而是返回日期的毫秒表示
``` JavaScript
var date1 = new Date(2007, 0, 1); //"January 1, 2007"
var date2 = new Date(2007, 1, 1); //"February 1, 2007"
alert(date1 < date2); //true
alert(date1 > date2); //false
```
<!--
### RegExp类型
### Function类型
### 基本包装类型
### 单体内置对象-->