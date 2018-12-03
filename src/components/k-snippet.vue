<template>
  <div class="k-snippet">
    <h2 class="k-snippet--title">
      <slot name="title"></slot>
    </h2>
    <slot></slot>
  </div>
</template>
<script>
export default {
}
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

  .snippet h4[data-type] {
    background: #333;
    background: #fff;
    background-repeat: no-repeat;
    border: 1px solid #c6d6ea;
    border-bottom-color: #b3c9e3;
    border-radius: 3px;
    box-shadow: 0 0.25rem 0.5rem -0.1rem rgba(0, 32, 64, 0.15);
    font-size: 0.9rem;
    padding: 0 0.5rem;
    text-transform: uppercase;
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
    margin: 1rem 0 0.8rem;

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
      background-image: linear-gradient(135deg, #ffb000, #f58818);
      border: none;
      color: #fff;
    }

    &.k-snippet--tag-explanation {
      background-image: linear-gradient(135deg, #00cbfd, #01c5ae);
      border: none;
      color: #fff;
    }
  }

  > p {
    margin-top: 0.5rem;
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

    code {
      font-family: Consolas, Menlo, Courier, monospace;
    }
  }

  .hljs-tag {
    color: #5ac8e3;
  }

  .hljs-comment,
  .hljs-quote,
  .hljs-meta {
    color: #444;
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
    color: #bb1166;
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

