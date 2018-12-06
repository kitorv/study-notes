module.exports = {
  // github的地址
  github: "https://github.com/kitorv/study-notes",
  // 1.url：markdown的文件路径，不配置生成分组标题
  // 2.name：生成菜单标题或者分组标题，必填
  routes: [
    { path: "", name: "测试分组" },
    { path: "/notes/test.md", name: "测试" },
    { path: "/notes/test1.md", name: "测试1" },
    { path: "/notes/test2.md", name: "测试2" }
  ]
};
