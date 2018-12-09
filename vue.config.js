const kMarkdownSnippet = require("./webpack/k-markdown-snippet");
const kMarkdownSnippetCode = require("./webpack/k-markdown-snippet-code");

const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require("path");
const { routes } = require("./src/setting");

let staticRouteList = ["/"];
routes.forEach(({ path }) => {
  if (!path) return;
  let pathArray = path.split(".");
  pathArray.pop();
  let url = pathArray.join("");
  staticRouteList.push(url);
});

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
          return source.replace(/```[a-zA-Z]+/g, value => {
            value = value.toLowerCase();
            return `---snippet ${value.replace(/```/g, "")} \n---\n ${value}`;
          });
        },
        use: [
          kMarkdownSnippet,
          kMarkdownSnippetCode
        ]
      });
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV !== "production") return;
    return {
      plugins: [
        new PrerenderSPAPlugin({
          // 生成文件的路径，也可以与webpakc打包的一致。
          // 下面这句话非常重要！！！
          // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
          staticDir: path.join(__dirname, "dist"),

          // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
          routes: staticRouteList,

          // 这个很重要，如果没有配置这段，也不会进行预编译
          renderer: new Renderer({
            inject: {
              foo: "bar"
            },
            headless: false,
            // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
            renderAfterDocumentEvent: "render-event"
          })
        })
      ]
    };
  }
};
