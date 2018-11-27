<template>
  <div class="home">
    <k-test></k-test>
  </div>
</template>

<script>

import KTest from '@/notes/test.md'
console.log(KTest);


export default {
  name: "home",
  components: { KTest }
};
</script>
