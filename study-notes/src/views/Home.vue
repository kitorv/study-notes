<template>
  <div class="k-v-home">
    <div class="k-v-home--sidebar">
      <h3>Javascript</h3>
      <router-link to="/">Javascript概要</router-link>
      <router-link to="/a">Html中使用JavaScript</router-link>
      <router-link to="/b">语法和数据类型</router-link>
      <h3>Vue</h3>
      <router-link to="/a">Vue1</router-link>
      <router-link to="/b">Vue2</router-link>
    </div>
    <div class="k-v-home--main">
      <div class="k-v-home--main-banner"></div>
      <div class="k-v-home--main-content">
        <k-test></k-test>
      </div>
    </div>
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
@media (min-width: 992px) {
  .k-v-home {
    display: flex;

    .k-v-home--sidebar {
      width: 20%;
    }

    .k-v-home--main {
      flex: 1;

      .k-v-home--main-content {
        max-width: 64rem;
        margin: 0 auto;
      }
    }
  }
}

@media (min-width: 1400px) {
  .k-v-home {
    display: flex;

    .k-v-home--sidebar {
      width: 260px;
    }
  }
}

.k-v-home {
  position: relative;
  height: 100%;

  .k-v-home--sidebar {
    box-sizing: border-box;
    background: linear-gradient(-30deg, #273149, #1c273f);
    bottom: 0;
    box-shadow: 0.4rem 0.4rem 0.8rem rgba(0, 32, 64, 0.1);
    color: #fff;
    height: 100%;
    left: 0;
    overflow-y: auto;
    top: 0;
    padding: 0 0.75rem;

    > h3 {
      color: #e3f5ff;
      margin-bottom: 0.5rem;
      text-transform: capitalize;
    }

    > a {
      border-left: 2px solid #576a85;
      color: #e3f5ff;
      display: block;
      font-size: 0.95rem;
      font-weight: 500;
      margin-right: -0.75rem;
      padding: 0.75rem 1.5rem 0.75rem 0.75rem;
      overflow-wrap: break-word;
      text-decoration: none;
      word-wrap: break-word;
      transition: all 0.1s ease-out;

      &.router-link-active {
        border-color: pink;
        color: #88f4ff;
      }
      &:hover {
        background: hsla(0, 0%, 100%, 0.1);
        border-color: pink;
        color: #88f4ff;
      }
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.6);
    }

    &::-webkit-scrollbar {
      background-color: #505b76;
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #505b76;
    }
  }

  .k-v-home--main {
    overflow: auto;

    .k-v-home--main-banner {
    }

    .k-v-home--main-content {
      padding: 0 2%;
      > section {
        width: 100%;
      }
    }
  }

  /deep/ {
    h1 {
      font-size: 2rem;
    }
  }
}
</style>

