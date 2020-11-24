<template>
  <div>
    <slot />
  </div>
</template>

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
}
</style>
