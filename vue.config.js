const KMarkdownSnippet = require("./webpack/k-markdown-snippet");
const KMarkdownSnippetCode = require("./webpack/k-markdown-snippet-code");
const PrerenderSPAPlugin = require("./webpack/prerender-spa-plugin.js");

module.exports = {
  publicPath: process.argv.includes("--docs") ? "/study-notes" : "/",
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
          markdownIt.renderer.rules.table_open = function() {
            return "<div class='k-snippet--table'><table>";
          };
          markdownIt.renderer.rules.table_close = function() {
            return "</table></div>";
          };
          return source.replace(/```[a-zA-Z]+/g, value => {
            value = value.toLowerCase();
            return `---snippet ${value.replace(/```/g, "")} \n---\n ${value}`;
          });
        },
        use: [KMarkdownSnippet, KMarkdownSnippetCode]
      });
  },
  // 配置【plugins】插件属性
  configureWebpack: () => {
    if (process.env.NODE_ENV !== "production") return;
    if (process.argv.includes("--prerender")) {
      return { plugins: [PrerenderSPAPlugin] };
    }
  }
};
