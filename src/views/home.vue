<template>
  <div :class="['k-v-home',mediaClass]" @click="handleClickOutSide">
    <div class="k-v-home--sidebar" @click.stop>
      <button @click="showMenu = !showMenu" :class="menuClass"></button>
      <k-transition-collapse>
        <div v-show="showMenu">
          <template v-for="({path,name},index) in routeList">
            <h3 v-if="!convertUrl(path)" :key="index">{{name}}</h3>
            <router-link v-else :key="index" :to="convertUrl(path)" @click.native="handleRouteLinkClick">{{name}}</router-link>
          </template>
          <template v-if="showPlan">
            <h3>复习计划</h3>
            <router-link to="/plan" @click.native="handleRouteLinkClick">复习时间表</router-link>
          </template>
        </div>
      </k-transition-collapse>
    </div>
    <div class="k-v-home--main" ref="main">
      <div class="k-v-home--main-banner">
        <div>Study Notes</div>
        <a class="k-v-home--main-link" :href="github"><i class="k-icon-star"></i>Star on GitHub</a>
      </div>
      <div class="k-v-home--main-content">
        <transition name="k-fade-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import KTransitionCollapse from "@/components/k-transition-collapse";
import { routes } from "../setting";
import { repository } from "../../package";

export default {
  name: "home",
  components: { KTransitionCollapse },
  data() {
    let windowWidth = document.body.clientWidth;
    return {
      windowWidth: windowWidth,
      showMenu: windowWidth > 992,
      routeList: routes,
      github: repository.url
    };
  },
  computed: {
    mediaClass() {
      if (this.windowWidth <= 992) {
        return "k-v-home--s";
      }
      if (this.windowWidth > 992 && this.windowWidth <= 1440) {
        return "k-v-home--m";
      }
      return "k-v-home--l";
    },
    menuClass() {
      return this.showMenu ? "k-icon-close" : "k-icon-menu";
    },
    showPlan() {
      return localStorage.getItem("page-plan");
    }
  },
  methods: {
    handleClickOutSide() {
      if (this.mediaClass != "k-v-home--s") return;
      this.showMenu = false;
    },
    handleRouteLinkClick() {
      this.$refs.main.scrollTop = 0;
      this.handleClickOutSide();
    },
    convertUrl(path) {
      return path.replace(/@/, "").replace(/.md$/, "");
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      const windowWidth = document.body.clientWidth;
      this.windowWidth = windowWidth;
      this.showMenu = windowWidth > 992;
    });
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
      color: #ffffff;
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

      > a {
        position: relative;
        text-decoration: none;
        background: none;
        color: #ffffff;
        padding: 10px 20px;
        white-space: nowrap;
        border-radius: 4px;
        transition: background-color 0.12s, color 0.12s, border-color 0.12s;
        outline: 0;
        cursor: pointer;
        border: 1px solid #ffffff;
        font-weight: 700;
        font-size: 17px;
        font-weight: bold;

        > i {
          margin-right: 10px;
          font-size: 20px;
        }
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
