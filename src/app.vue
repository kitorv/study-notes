<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  color: rgba(0, 0, 0, 0.87);
  padding: 0;
  margin: 0;
}

a {
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
}
</style>
