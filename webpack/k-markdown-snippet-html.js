module.exports = [
  require("markdown-it-container"),
  "k-markdown-snippet-html",
  {
    validate: function(params) {
      return params.trim().match(/^snippet\s*(.*)$/);
    },
    render(tokens, index) {
      let { nesting } = tokens[index];
      if (nesting === 1) {
        return `<div class="k-snippet--tag k-snippet--tag-html">HTML</div>`;
      } else {
        return `\n`;
      }
    },
    marker: "^"
  }
];
