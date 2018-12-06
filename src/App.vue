<template>
  <div id="app">
    <k-home></k-home>
  </div>
</template>

<script>
import KHome from "@/views/home";
export default {
  components: { KHome }
};
</script>


<style lang="scss">
@import url("./assets/style/icon.scss");
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  background: #f2f3f8;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
</style>
