<template>
  <div class="k-menu-group">
    <h3 class="k-menu-group--title">{{title}}</h3>
    <slot></slot>
  </div>

</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.k-menu-group {
  .k-menu-group--title {
    color: #e3f5ff;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
}
</style>
