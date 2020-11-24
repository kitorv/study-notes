const MarkdownIt = require("markdown-it");
const hljs = require("./markdown-hilghlight");

module.exports = function(source) {
  // 初始化 MarkdownIt 用于转换md文件为html
  const markdownIt = new MarkdownIt({
    html: true,
    highlight: function(content, language) {
      language = language && hljs.getLanguage(language) ? language : "html";
      const formatCode = hljs.highlight(language, content, true).value;
      return `<pre class="language-${language}">${formatCode}</pre>`;
    }
  });

  // markdown渲染为html代码
  source = markdownIt.render(source);

  return `<template><v-markdown-view>${source}</v-markdown-view></template>`;
};
