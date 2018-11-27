module.exports = [
  require("markdown-it-container"),
  "k-markdown-snippet-javascript",
  {
    validate: function(params) {
      return params.trim().match(/^snippet\s*(.*)$/)
    },
    render(tokens, index) {
      let { nesting } = tokens[index]
      if (nesting === 1) {
        return `<div class="k-snippet--tag k-snippet--tag-javascript">Javascript</div>`
      } else {
        return `\n`
      }
    },
    marker: "="
  }
]
