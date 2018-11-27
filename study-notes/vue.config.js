const kMarkdownSnippet = require("./webpack/k-markdown-snippet.js")
const kMarkdownSnippetHtml = require("./webpack/k-markdown-snippet-html.js")
const kMarkdownSnippetCss = require("./webpack/k-markdown-snippet-css.js")
const kMarkdownSnippetJavascript = require("./webpack/k-markdown-snippet-javascript.js")

module.exports = {
  // 配置【vue-markdown-loader】解析md格式的文件
  chainWebpack: config => {
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .options({
        raw: true,
        preventExtract: true,
        preprocess: function(markdownIt, source) {
          console.log("-----------------------------xxxx")
          return source
            .replace(/\`\`\`html/g, "+++snippet \n+++\n```html")
            .replace(/\`\`\`css/g, "---snippet \n---\n```css")
            .replace(/\`\`\`javascript/g, "===snippet \n===\n```javascript")
        },
        use: [kMarkdownSnippet, kMarkdownSnippetHtml, kMarkdownSnippetCss, kMarkdownSnippetJavascript]
      })
  }
}
