module.exports = {
  lintOnSave: process.env.NODE_ENV !== "production",
  pages: {
    index: {
      entry: "src/index.ts"
    }
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  chainWebpack: config => {
    config.module
      .rule("md")
      .test(/\.md/)
      .use("cache-loader")
      .loader("cache-loader")
      .end()
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("markdown-loader")
      .loader(require("path").resolve(__dirname, "./build/markdown-loader.js"))
      .end();
  }
};
