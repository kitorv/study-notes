module.exports = {
  lintOnSave: process.env.NODE_ENV !== "production",
  pages: {
    index: {
      entry: "src/index.ts",
    },
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
