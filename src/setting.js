module.exports = {
  // github的地址
  github: "https://github.com/kitorv/study-notes",
  // 1.url：markdown的文件路径，不配置生成分组标题
  // 2.name：生成菜单标题或者分组标题，必填
  routes: [
    { path: "", name: "JavaScript基础" },
    { path: "/notes/javascript/JAVASCRIPT-01.md", name: "简介和使用" },
    { path: "/notes/javascript/JAVASCRIPT-02.md", name: "语法和数据类型" }
  ]
};
