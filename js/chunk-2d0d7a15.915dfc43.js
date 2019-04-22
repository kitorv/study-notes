(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7a15"],{7842:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",[e("k-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("选择符 API")])]),e("ol",[e("li",[e("code",{pre:!0},[s._v("querySelector()")]),s._v(" 方法")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//取得body 元素")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" body = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".querySelector("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"body"')]),s._v(");\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//取得ID 为"myDiv"的元素')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" myDiv = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".querySelector("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#myDiv"')]),s._v(");\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//取得类为"selected"的第一个元素')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" selected = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".querySelector("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('".selected"')]),s._v(");\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//取得类为"button"的第一个图像元素')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" img = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".body.querySelector("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"img.button"')]),s._v(");\n")])]),e("ol",{attrs:{start:"2"}},[e("li",[e("code",{pre:!0},[s._v("querySelectorAll()")]),s._v(" 方法")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//取得某<div>中的所有<em>元素（类似于getElementsByTagName("em")）')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" ems = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"myDiv"')]),s._v(").querySelectorAll("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"em"')]),s._v(");\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//取得类为"selected"的所有元素')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" selecteds = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".querySelectorAll("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('".selected"')]),s._v(");\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//取得所有<p>元素中的所有<strong>元素")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" strongs = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".querySelectorAll("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"p strong"')]),s._v(");\n\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" i, len, strong;\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" (i = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", len = strongs.length; i < len; i++) {\n strong = strongs[i]; "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//或者strongs.item(i)")]),s._v("\n strong.className = "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"important"')]),s._v(";\n}\n")])]),e("ol",{attrs:{start:"3"}},[e("li",[e("code",{pre:!0},[s._v("matchesSelector()")]),s._v(" 方法")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("matchesSelector")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("element, selector")]),s._v(") ")]),s._v("{\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (element.matchesSelector) {\n   "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" element.matchesSelector(selector);\n }\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (element.msMatchesSelector) {\n   "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" element.msMatchesSelector(selector);\n }\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (element.mozMatchesSelector) {\n   "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" element.mozMatchesSelector(selector);\n }\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (element.webkitMatchesSelector) {\n   "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" element.webkitMatchesSelector(selector);\n }\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("throw")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Error")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Not supported."')]),s._v(");\n}\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (matchesSelector("),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".body, "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"body.page1"')]),s._v(")) {\n "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//执行操作")]),s._v("\n}\n")])]),e("blockquote",[e("p",[s._v("选择符 API 参数都是 CSS 选择符，CSS 选择符可以简单也可以复杂，视情况而定。\n如果传入了不被支持的选择符，会抛出错误。")])])],2),e("k-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("元素遍历")])]),e("ol",[e("li",[e("code",{pre:!0},[s._v("childElementCount")]),s._v("：返回子元素（不包括文本节点和注释）的个数。")]),e("li",[e("code",{pre:!0},[s._v("firstElementChild")]),s._v("：指向第一个子元素；"),e("code",{pre:!0},[s._v("firstChild")]),s._v(" 的元素版。")]),e("li",[e("code",{pre:!0},[s._v("lastElementChild")]),s._v("：指向最后一个子元素；"),e("code",{pre:!0},[s._v("lastChild")]),s._v(" 的元素版。")]),e("li",[e("code",{pre:!0},[s._v("previousElementSibling")]),s._v("：指向前一个同辈元素；"),e("code",{pre:!0},[s._v("previousSibling")]),s._v(" 的元素版。")]),e("li",[e("code",{pre:!0},[s._v("nextElementSibling")]),s._v("：指向后一个同辈元素；"),e("code",{pre:!0},[s._v("nextSibling")]),s._v(" 的元素版。")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" i,\n len,\n child = element.firstChild;\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("while")]),s._v(" (child != element.lastChild) {\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (child.nodeType == "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(") {\n   "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//检查是不是元素")]),s._v("\n   processChild(child);\n }\n child = child.nextSibling;\n}\n")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" i,\n len,\n child = element.firstElementChild;\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("while")]),s._v(" (child != element.lastElementChild) {\n processChild(child); "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//已知其是元素")]),s._v("\n child = child.nextElementSibling;\n}\n")])])],2),e("k-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("类相关扩充")])]),e("ol",[e("li",[e("code",{pre:!0},[s._v("getElementsByClassName()")]),s._v(" 方法")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//取得所有类中包含"username"和"current"的元素，类名的先后顺序无所谓')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" allCurrentUsernames = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementsByClassName("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"username current"')]),s._v(");\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//取得ID 为"myDiv"的元素中带有类名"selected"的所有元素')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" selected = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v("\n .getElementById("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"myDiv"')]),s._v(")\n .getElementsByClassName("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"selected"')]),s._v(");\n")])]),e("ol",{attrs:{start:"2"}},[e("li",[e("code",{pre:!0},[s._v("classList")]),s._v(" 属性")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-html"},[s._v("html")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"bd user disabled"')]),s._v(">")]),s._v("..."),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//删除"user"类')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//首先，取得类名字符串并拆分成数组")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" classNames = div.className.split("),e("span",{pre:!0,attrs:{class:"hljs-regexp"}},[s._v("/\\s+/")]),s._v(");\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//找到要删的类名")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" pos = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-1")]),s._v(",\n i,\n len;\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" (i = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", len = classNames.length; i < len; i++) {\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (classNames[i] == "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"user"')]),s._v(") {\n   pos = i;\n   "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("break")]),s._v(";\n }\n}\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//删除类名")]),s._v("\nclassNames.splice(i, "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(");\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//把剩下的类名拼成字符串并重新设置")]),s._v("\ndiv.className = classNames.join("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('" "')]),s._v(");\n")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//删除"disabled"类')]),s._v("\ndiv.classList.remove("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"disabled"')]),s._v(");\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//添加"current"类')]),s._v("\ndiv.classList.add("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"current"')]),s._v(");\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//切换"user"类')]),s._v("\ndiv.classList.toggle("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"user"')]),s._v(");\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//确定元素中是否包含既定的类名")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (div.classList.contains("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"bd"')]),s._v(") && !div.classList.contains("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"disabled"')]),s._v(")){\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//执行操作")]),s._v("\n)\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//迭代类名")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" i="),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", len=div.classList.length; i < len; i++){\ndoSomething(div.classList[i]);\n}\n")])])],2),e("k-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("焦点管理")])]),e("ol",[e("li",[e("code",{pre:!0},[s._v("document.activeElement")]),s._v(" 获取焦点的元素。")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" button = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"myButton"')]),s._v(");\nbutton.focus();\nalert("),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".activeElement === button); "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//true")]),s._v("\n")])]),e("ol",{attrs:{start:"2"}},[e("li",[e("code",{pre:!0},[s._v("document.hasFocus()")]),s._v(" 是否获取焦点")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" button = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"myButton"')]),s._v(");\nbutton.focus();\nalert("),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".hasFocus()); "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//true")]),s._v("\n")])]),e("blockquote",[e("p",[s._v("文档刚刚加载完成时，"),e("code",{pre:!0},[s._v("document.activeElement")]),s._v(" 中保存的是 "),e("code",{pre:!0},[s._v("document.body")]),s._v(" 元素的引用。\n文档加载期间，"),e("code",{pre:!0},[s._v("document.activeElement")]),s._v(" 的值为 "),e("code",{pre:!0},[s._v("null")]),s._v("。")])])],2),e("k-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("HTMLDocument 的变化")])]),e("ol",[e("li",[e("code",{pre:!0},[s._v("readyState")]),s._v(" 属性: "),e("code",{pre:!0},[s._v("loading")]),s._v(" ，正在加载文档；"),e("code",{pre:!0},[s._v("complete")]),s._v(" ，已经加载完文档。")]),e("li",[s._v("兼容模式: "),e("code",{pre:!0},[s._v("document.compatMode")]),s._v(" 获取浏览器的渲染模式，标准模式还是混杂模式等")]),e("li",[e("code",{pre:!0},[s._v("head")]),s._v(" 属性："),e("code",{pre:!0},[s._v("document.head")]),s._v(" 获取 "),e("code",{pre:!0},[s._v("<head>")]),s._v(" 标签引用")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" head = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".head || "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementsByTagName("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"head"')]),s._v(")["),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("];\n")])])],2),e("k-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("字符集属性")])]),e("p",[s._v("通过 "),e("code",{pre:!0},[s._v("<meta>")]),s._v(" 元素、响应头部或直接设置 "),e("code",{pre:!0},[s._v("charset")]),s._v(" 属性修改这个值")]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("alert("),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".charset); "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//"UTF-16"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".charset = "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"UTF-8"')]),s._v(";\n")])])],2),e("k-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("自定义数据属性")])]),e("p",[s._v("HTML5 规定可以为元素添加非标准的属性，但要添加前缀 "),e("code",{pre:!0},[s._v("data-")]),s._v(" ，目的是为元素提供与渲染无关的信息，\n或者提供语义信息。这些属性可以任意添加、随便命名，只要以 "),e("code",{pre:!0},[s._v("data-")]),s._v(" 开头即可")]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-html"},[s._v("html")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"myDiv"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data-appId")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"12345"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data-myname")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Nicholas"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" div = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"myDiv"')]),s._v(");\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//取得自定义属性的值")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" appId = div.dataset.appId;\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" myName = div.dataset.myname;\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//设置值")]),s._v("\ndiv.dataset.appId = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("23456")]),s._v(";\ndiv.dataset.myname = "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Michael"')]),s._v(";\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//有没有"myname"值呢？')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (div.dataset.myname) {\n alert("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Hello, "')]),s._v(" + div.dataset.myname);\n}\n")])])],2),e("k-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("插入标记")])]),e("ol",[e("li",[e("code",{pre:!0},[s._v("innerHTML")]),s._v(" 属性")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("div.innerHTML = "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Hello & welcome, <b>\"reader\"!</b>'")]),s._v(";\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//无效，第一个标签script代码无效，style也类似")]),s._v("\ndiv.innerHTML = "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"<script defer>alert('hi');<\/script>\"")]),s._v(";\n")])]),e("ol",{attrs:{start:"2"}},[e("li",[e("code",{pre:!0},[s._v("outerHTML")]),s._v(" 属性")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("div.outerHTML = "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"<p>This is a paragraph.</p>"')]),s._v(";\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//等价于")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" p = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".createElement("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"p"')]),s._v(");\np.appendChild("),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".createTextNode("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"This is a paragraph."')]),s._v("));\ndiv.parentNode.replaceChild(p, div);\n")])]),e("ol",{attrs:{start:"3"}},[e("li",[e("code",{pre:!0},[s._v("insertAdjacentHTML()")]),s._v(" 方法")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//作为前一个同辈元素插入")]),s._v("\nelement.insertAdjacentHTML("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"beforebegin"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"<p>Hello world!</p>"')]),s._v(");\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//作为第一个子元素插入")]),s._v("\nelement.insertAdjacentHTML("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"afterbegin"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"<p>Hello world!</p>"')]),s._v(");\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//作为最后一个子元素插入")]),s._v("\nelement.insertAdjacentHTML("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"beforeend"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"<p>Hello world!</p>"')]),s._v(");\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//作为后一个同辈元素插入")]),s._v("\nelement.insertAdjacentHTML("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"afterend"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"<p>Hello world!</p>"')]),s._v(");\n")])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("内存与性能问题。")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" i = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", len = values.length; i < len; i++) {\n ul.innerHTML += "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"<li>"')]),s._v(" + values[i] + "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"</li>"')]),s._v("; "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//要避免这种频繁操作！！")]),s._v("\n}\n")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" itemsHtml = "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(";\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" i = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", len = values.length; i < len; i++) {\n itemsHtml += "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"<li>"')]),s._v(" + values[i] + "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"</li>"')]),s._v(";\n}\nul.innerHTML = itemsHtml;\n")])])],2),e("k-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("scrollIntoView() 方法")])]),e("ol",[e("li",[s._v("基本语法")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("element.scrollIntoView(); "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 等同于element.scrollIntoView(true)")]),s._v("\nelement.scrollIntoView(alignToTop); "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Boolean型参数，true滚动到顶部，false滚动到底部")]),s._v("\nelement.scrollIntoView(scrollIntoViewOptions); "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Object型参数")]),s._v("\n")])]),e("ol",{attrs:{start:"2"}},[e("li",[e("code",{pre:!0},[s._v("Object")]),s._v(" 参数，"),e("code",{pre:!0},[s._v("behavior")]),s._v(" 这个选项决定页面是如何滚动的，实测 "),e("code",{pre:!0},[s._v("auto")]),s._v(" 与 "),e("code",{pre:!0},[s._v("instant")]),s._v(" 都是瞬间跳到相应的位置，而 "),e("code",{pre:!0},[s._v("smooth")]),s._v(" 就是有动画的过程")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("{\n "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("behavior")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"auto"')]),s._v(" | "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"instant"')]),s._v(" | "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"smooth"')]),s._v(",\n "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("block")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"start"')]),s._v(" | "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v("\n}\n")])])],2),e("k-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("专有扩展")])]),e("ol",[e("li",[s._v("文档模式：强制浏览器以某种模式渲染页面，可以使用 "),e("code",{pre:!0},[s._v("HTTP")]),s._v(" 头部信息 "),e("code",{pre:!0},[s._v("X-UA-Compatible")]),s._v(" ，或通过等价的 "),e("code",{pre:!0},[s._v("<meta>")]),s._v(" 标签来设置。")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-html"},[s._v("html")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("meta")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("http-equiv")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"X-UA-Compatible"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("content")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"IE=IEVersion"')]),s._v(" />")]),s._v("\n")])]),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[e("code",{pre:!0},[s._v("children")]),s._v(" 属性：等价于 "),e("code",{pre:!0},[s._v("childNodes")]),s._v(" 属性。")])]),e("li",[e("p",[e("code",{pre:!0},[s._v("contains()")]),s._v(" 方法：检测是否子级包含某个元素。")])])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("contains")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("refNode, otherNode")]),s._v(") ")]),s._v("{\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (\n   "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("typeof")]),s._v(" refNode.contains == "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"function"')]),s._v(" &&\n   (!client.engine.webkit || client.engine.webkit >= "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("522")]),s._v(")\n ) {\n   "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" refNode.contains(otherNode);\n }\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("typeof")]),s._v(" refNode.compareDocumentPosition == "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"function"')]),s._v(") {\n   "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" !!(refNode.compareDocumentPosition(otherNode) & "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("16")]),s._v(");\n }\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" node = otherNode.parentNode;\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("do")]),s._v(" {\n   "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (node === refNode) {\n     "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(";\n   } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" {\n     node = node.parentNode;\n   }\n } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("while")]),s._v(" (node !== "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(");\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n}\n")])])],2),e("k-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("插入文本")])]),e("ol",[e("li",[s._v("插入文本："),e("code",{pre:!0},[s._v("innerText")]),s._v(" 属性、"),e("code",{pre:!0},[s._v("textContent")]),s._v(" 属性")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("getInnerText")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("element")]),s._v(") ")]),s._v("{\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("typeof")]),s._v(" element.textContent == "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"string"')]),s._v("\n   ? element.textContent\n   : element.innerText;\n}\n"),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("setInnerText")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("element, text")]),s._v(") ")]),s._v("{\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("typeof")]),s._v(" element.textContent == "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"string"')]),s._v(") {\n   element.textContent = text;\n } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" {\n   element.innerText = text;\n }\n}\n")])]),e("blockquote",[e("p",[s._v("实际上，"),e("code",{pre:!0},[s._v("innerText")]),s._v(" 与 "),e("code",{pre:!0},[s._v("textContent")]),s._v(" 返回的内容并不完全一样。\n比如，"),e("code",{pre:!0},[s._v("innerText")]),s._v(" 会忽略行内的样式和脚本，而 "),e("code",{pre:!0},[s._v("textContent")]),s._v(" 则会像返回其他文本一样返回行内的样式和脚本代码。\n避免跨浏览器兼容问题的最佳途径，就是从不包含行内样式或行内脚本的 "),e("code",{pre:!0},[s._v("DOM")]),s._v(" 子树副本或 "),e("code",{pre:!0},[s._v("DOM")]),s._v(" 片段中读取文本。")])]),e("ol",{attrs:{start:"2"}},[e("li",[e("code",{pre:!0},[s._v("outerText")]),s._v(" 属性")])]),e("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[s._v("javascript")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("div.outerText = "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Hello world!"')]),s._v(";\n这行代码实际上相当于如下两行代码：\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" text = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".createTextNode("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Hello world!"')]),s._v(");\ndiv.parentNode.replaceChild(text, div);\n")])]),e("blockquote",[e("p",[s._v("支持 "),e("code",{pre:!0},[s._v("outerText")]),s._v(" 属性的浏览器有 IE4+、Safari 3+、Opera 8+和 Chrome。\n由于这个属性会导致调用它的元素不存在，因此并不常用。建议尽可能不要使用这个属性。")])])],2),e("k-snippet",{attrs:{title:""}},[e("template",{slot:"title"},[e("p",[s._v("滚动")])]),e("ol",[e("li",[e("code",{pre:!0},[s._v("scrollIntoViewIfNeeded(alignCenter)")]),s._v(" ：只在当前元素在视口中不可见的情况下，才滚动浏览器窗口或容器元素，最终让它可见。\n如果当前元素在视口中可见，这个方法什么也不做。\n如果将可选的 "),e("code",{pre:!0},[s._v("alignCenter")]),s._v(" 参数设置为 "),e("code",{pre:!0},[s._v("true")]),s._v(" ，则表示尽量将元素显示在视口中部（垂直方向）。\nSafari 和 Chrome 实现了这个方法。")]),e("li",[e("code",{pre:!0},[s._v("scrollByLines(lineCount)")]),s._v(" ：将元素的内容滚动指定的行高，"),e("code",{pre:!0},[s._v("lineCount")]),s._v(" 值可以是正值，也可以是负值。\nSafari 和 Chrome 实现了这个方法。")]),e("li",[e("code",{pre:!0},[s._v("scrollByPages(pageCount)")]),s._v(" ：将元素的内容滚动指定的页面高度，具体高度由元素的高度决定。\nSafari 和 Chrome 实现了这个方法。")])]),e("blockquote",[e("p",[e("code",{pre:!0},[s._v("scrollIntoView()")]),s._v(" 是唯一一个所有浏览器都支持的方法，因此还是这个方法最常用")])])],2)],1)},r=[],l=e("2877"),n={},p=Object(l["a"])(n,a,r,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0d7a15.915dfc43.js.map