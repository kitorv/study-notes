<template>
  <div :class="['k-v-home',mediaClass]">
    <div class="k-v-home--sidebar" v-clickoutside="handleClickOutSide">
      <button @click="showMenu = !showMenu" :class="menuClass"></button>
      <k-transition-collapse>
        <div v-show="showMenu">
          <h3>Javascript</h3>
          <router-link to="/home/javascript-01" @click.native="handleRouteLinkClick">Javascript概要</router-link>
          <h3>plan</h3>
          <router-link to="/home/plan" @click.native="handleRouteLinkClick">复习计划</router-link>
        </div>
      </k-transition-collapse>
    </div>
    <div class="k-v-home--main" ref="main">
      <div class="k-v-home--main-banner">Study Notes</div>
      <div class="k-v-home--main-content">
        <transition name="k-fade-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import KTransitionCollapse from '@/components/k-transition-collapse'
import clickoutside from '@/directives/clickoutside'

export default {
  name: "home",
  components: { KTransitionCollapse },
  directives: {
    clickoutside
  },
  data() {
    return {
      windowWidth: document.body.clientWidth,
      showMenu: true
    }
  },
  computed: {
    mediaClass() {
      if (this.windowWidth <= 992) {
        this.showMenu = false
        return 'k-v-home--s'
      }
      if (this.windowWidth > 992 && this.windowWidth <= 1440) {
        this.showMenu = true
        return 'k-v-home--m'
      }
      if (this.windowWidth > 1440) {
        this.showMenu = true
        return 'k-v-home--l'
      }
    },
    menuClass() {
      return this.showMenu ? 'k-icon-close' : 'k-icon-menu'
    }
  },
  methods: {
    handleClickOutSide() {
      if (this.mediaClass != 'k-v-home--s') return
      this.showMenu = false
    },
    handleRouteLinkClick() {
      this.$refs.main.scrollTop = 0
      this.handleClickOutSide()
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = document.body.clientWidth
    })
  }
};
</script>
<style lang="scss" scoped>
.k-v-home {
  position: relative;
  height: 100%;
  background: #f2f3f8;
  color: #324b64;

  .k-v-home--sidebar {
    box-sizing: border-box;
    background: linear-gradient(-30deg, #273149, #1c273f);
    box-shadow: 0.4rem 0.4rem 0.8rem rgba(0, 32, 64, 0.1);
    color: #fff;

    > div {
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
      background: #5b67ff;
      background: linear-gradient(25deg, #95e2ff, #5f79ff, #8ed5ff);
      color: #fff;
      margin-bottom: 2rem;
      overflow: hidden;
      padding: 5rem 1rem 4rem;
      position: relative;
      text-align: center;
      z-index: 1;
      font-size: 4rem;

      &:after {
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12'%3E%3Cpath d='M12 0l12 12H0z' fill='%23f2f3f8'/%3E%3C/svg%3E");
        background-size: 24px 24px;
        bottom: -7px;
        content: "";
        height: 24px;
        left: 0;
        position: absolute;
        width: 100%;
        z-index: 3;
      }
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

  .k-fade-in-enter-active,
  .k-fade-in-leave-active {
    transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .k-fade-in-enter,
  .k-fade-in-leave-active {
    opacity: 0;
  }
}

.k-v-home--s {
  .k-v-home--sidebar {
    background: #273149;
    box-shadow: 0 0.25rem 0.5rem -0.1rem rgba(0, 32, 128, 0.2);
    position: fixed;
    width: 100%;
    z-index: 2;

    .k-icon-close {
      transform: rotate(45deg);
    }

    > button {
      background-color: transparent;
      border: 0;
      color: inherit;
      cursor: pointer;
      display: inline-block;
      font: inherit;
      margin: 0;
      outline: 0;
      overflow: visible;
      padding: 1rem;
      text-transform: none;
      font-size: 1.5rem;
      transition: all 0.1s ease-out;

      &.k-icon-close {
        transform: rotate(90deg);
      }
    }

    > div {
      max-height: 378px;
      overflow-y: auto;
      box-sizing: border-box;
      padding: 0 0.75rem 0.5rem 0.75rem;
      border-top: 1px solid #5f73a5;
    }
  }
}

.k-v-home--l,
.k-v-home--m {
  display: flex;

  .k-v-home--sidebar {
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    padding: 0 0.75rem;
    overflow-y: auto;

    > button {
      display: none;
    }
  }
  .k-v-home--main {
    flex: 1;

    .k-v-home--main-content {
      max-width: 64rem;
      margin: 0 auto;
    }
  }
}

.k-v-home--m {
  .k-v-home--sidebar {
    width: 20%;
  }
}

.k-v-home--l {
  .k-v-home--sidebar {
    width: 260px;
  }
}
</style>

