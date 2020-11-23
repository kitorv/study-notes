<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td,
hr,
button,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  color: #242349;
  font-size: 12px;
}

ul,
ol {
  list-style: none;
}

a {
  color: #242349;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  transition: color 0.3s;
  cursor: pointer;
}

a:active,
a:hover {
  text-decoration: none;
  outline: 0;
}

svg {
  height: 100%;
  width: 100%;
}

#app {
  font-family: "Microsoft YaHei", -apple-system, "PingFang SC",
    "Helvetica Neue For Number", BlinkMacSystemFont, "Segoe UI", Roboto,
    "Hiragino Sans GB", "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  color: #242349;
}
</style>
