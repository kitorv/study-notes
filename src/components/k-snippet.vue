<template>
  <div class="k-snippet">
    <h2 class="k-snippet--title">
      <slot name="title">{{title}}</slot>
    </h2>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
};
</script>
<style lang="scss" scoped>
.k-snippet {
  background: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.4rem 0.8rem -0.1rem rgba(0, 32, 128, 0.1), 0 0 0 1px #f0f2f7;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  padding: 2rem 5%;
  position: relative;

  .k-snippet--title {
    border-bottom: 1px solid rgba(0, 32, 128, 0.1);
    font-size: 1.8rem;
    line-height: 1.3;
    margin-bottom: 1.25rem;
    margin-top: 0;
    padding: 0.5rem 0;

    > p {
      padding: 0;
      margin: 0;
    }
  }

  .k-snippet--description {
    margin: 0.5rem 0 1rem 0;
  }

  .k-snippet--tag {
    background: #333;
    background: #fff;
    background-repeat: no-repeat;
    border: 1px solid #c6d6ea;
    border-bottom-color: #b3c9e3;
    border-radius: 3px;
    box-shadow: 0 0.25rem 0.5rem -0.1rem rgba(0, 32, 64, 0.15);
    padding: 0 0.8rem;
    text-transform: uppercase;
    display: inline-block;
    font-size: 1.1rem;
    line-height: 2;
    margin: 0.2rem 0 0.8rem;
    background-image: linear-gradient(135deg, #01d0ff, #5ae4b1);
    border: none;
    color: #fff;

    &.k-snippet--tag-html {
      background-image: linear-gradient(135deg, #ff4c9f, #ff7b74);
      border: none;
      color: #fff;
    }
    &.k-snippet--tag-css {
      background-image: linear-gradient(135deg, #7983ff, #5f9de9);
      border: none;
      color: #fff;
    }

    &.k-snippet--tag-javascript {
      background-image: linear-gradient(135deg, #f55555, #ff8239);
      border: none;
      color: #fff;
    }

    &.k-snippet--tag-typescript {
      background-image: linear-gradient(135deg, #f55555, #ff8239);
      border: none;
      color: #fff;
    }
  }

  > p {
    margin: 0.5rem 0 0.5rem 0;
  }

  > h3,
  > h4,
  > h5,
  > h6 {
    margin: 1rem 0 0.5rem 0;
  }

  ol {
    margin-top: 0.5rem;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
      word-break: break-all;
      word-wrap: break-word;
    }
  }

  ul {
    margin-top: 0.5rem;
    padding-left: 1.25rem;

    li {
      margin-bottom: 0.5rem;
      word-break: break-all;
      word-wrap: break-word;
    }
  }

  code:not([class*="lang"]) {
    background: #fcfaff;
    border: 1px solid #e2ddff;
    border-radius: 0.15rem;
    color: #4b00da;
    font-family: Consolas, Menlo, Courier, monospace;
    font-size: 0.9rem;
    margin: 0 0.1rem;
    padding: 0.2rem 0.4rem;
    word-break: break-all;
    word-wrap: break-word;
  }
  .k-snippet--table {
    overflow: auto;

    > table {
      border-collapse: collapse;
      border-spacing: 0;
      empty-cells: show;
      border: 1px solid #95bae0;
      width: 100%;
      margin: 0.8rem 0 1rem;
      font-size: 1rem;

      th,
      td {
        color: #314659;
        border: 1px solid #95bae0;
        text-align: left;
        padding: 10px 15px;
        word-break: break-all;
        word-wrap: break-word;
      }

      th {
        color: #324b64;
        font-weight: 700;
        background: #f1f2f7;
        min-width: 100px;
      }
    }
  }

  > blockquote {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;

    > p {
      border-left: 4px solid #f66;
      margin: 1rem 0;
      padding: 1rem 0 1rem 1rem;
      background-color: #f8f8f8;
      border-radius: 0.25rem;
      position: relative;
    }

    > p:before {
      content: "!";
      background-color: #f66;
      position: absolute;
      top: 18px;
      left: -12px;
      color: #fff;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      text-align: center;
      line-height: 20px;
      font-weight: bold;
      font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial,
        sans-serif;
      font-size: 14px;
    }
  }

  > pre {
    background: linear-gradient(-30deg, #273149, #1c273f);
    border-radius: 0.25rem;
    color: #d7ecff;
    font-family: Consolas, Menlo, Courier, monospace;
    font-size: 1rem;
    hyphens: none;
    line-height: 2;
    margin: 0;
    tab-size: 4;
    text-align: left;
    white-space: pre;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    overflow: auto;
    padding: 0.75rem 1.25rem;
  }

  pre + .k-snippet--tag {
    margin-top: 1rem;
  }

  code {
    font-family: Consolas, Menlo, Courier, monospace;
  }

  img {
    max-width: 100%;
  }

  .hljs-tag {
    color: #5ac8e3;
  }

  .hljs-comment,
  .hljs-quote {
    color: #20dc70;
  }

  .hljs-meta {
    color: #2cefd8;
  }

  .hljs-string,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-regexp {
    color: #ffd694;
  }

  .hljs-number,
  .hljs-addition {
    color: #d7ecff;
  }

  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-literal,
  .hljs-type,
  .hljs-template-variable,
  .hljs-attribute,
  .hljs-link {
    color: #85b4ff;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class {
    color: #2cefd8;
  }

  .hljs-attr {
    color: #c7f683;
  }

  .hljs-title,
  .hljs-variable,
  .hljs-deletion,
  .hljs-template-tag {
    color: #ff4c9f;
  }

  .hljs-section,
  .hljs-doctag,
  .hljs-strong {
    font-weight: bold;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-selector-pseudo,
  .hljs-selector-class {
    color: #c7f683;
  }
}
</style>
