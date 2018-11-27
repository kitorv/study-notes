<template>
  <div class="k-v-home">
    <k-test></k-test>
  </div>
</template>

<script>

import KTest from '@/notes/test.md'

export default {
  name: "home",
  components: { KTest }
};
</script>
<style lang="scss" scoped>
.k-v-home {
  /deep/ {
    h1 {
      font-size: 2rem;
    }
  }
}
</style>

