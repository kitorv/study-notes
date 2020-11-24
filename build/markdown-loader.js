const MarkdownIt = require("markdown-it");

module.exports = function(source) {
  // 初始化 MarkdownIt 用于转换md文件为html
  const markdownIt = new MarkdownIt({
    html: true
  });

  // markdown渲染为html代码
  source = markdownIt.render(source);

  return `<template><v-markdown-view>${source}</v-markdown-view></template>`;
};
