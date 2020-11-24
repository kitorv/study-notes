<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "highlight.js/styles/monokai-sublime.css";

export default defineComponent({});
</script>

<style lang="scss" scoped>
::v-deep() {
  h1,
  h2,
  h6,
  h4,
  h5,
  h6 {
    color: #242349;
  }

  code:not([class*="language-"]) {
    color: #ab47bc;
    padding: 0.25rem 0.5rem;
    margin: 0;
    font-size: 0.85em;
    background: mix(#ab47bc, #ffffff, 5%);
    border: 1px solid mix(#ab47bc, #ffffff, 20%);
    border-radius: 3px;
  }

  pre[class*="language-"] {
    position: relative;
    font-family: Consolas, Monaco, monospace;
    background: linear-gradient(-30deg, #273149, #242349);
    border-radius: 0.25rem;
    color: #d7ecff;
    font-size: 14px;
    line-height: 2;
    margin: 0;
    tab-size: 4;
    text-align: left;
    white-space: pre;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    overflow: auto;
    padding: 1rem 1.25rem;
  }

  .language {
    position: absolute;
    font-size: 12px;
    top: 0.2rem;
    right: 1.25rem;
  }
}
</style>
