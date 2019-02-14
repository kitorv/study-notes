<template>
  <div :class="['k-v-home',mediaClass]"
       :style="{'height':`${windowHeight}px`}"
       @click="handleClickOutSide">

    <div class="k-v-home--sidebar"
         @click.stop>
      <button class="k-v-home--sidebar-button"
              @click="showMenu = !showMenu"
              :class="menuClass"></button>
      <k-transition-collapse>
        <div class="k-v-home--sidebar-menu"
             v-show="showMenu">
          <template v-for="({path,name},index) in routeList">
            <h3 class="k-v-home--sidebar-title"
                v-if="!convertUrl(path)"
                :key="index">{{name}}</h3>
            <router-link class="k-v-home--sidebar-link"
                         v-else
                         :key="index"
                         :to="convertUrl(path)"
                         @click.native="handleRouteLinkClick">{{name}}</router-link>
          </template>
        </div>
      </k-transition-collapse>
    </div>
    <div class="k-v-home--content"
         @scroll="handleScroll"
         ref="main">
      <div class="k-v-home--banner">
        <div>Study Notes</div>
        <a class="k-v-home--banner-link"
           :href="github"><i class="k-icon-star"></i>Star on GitHub</a>
      </div>
      <div class="k-v-home--tags">
        <div :class="['k-v-home--tag',{'k-v-home--tag-active':selectTagIndex==index}]"
             v-for="({name}, index) in tagList"
             :key="index"
             @click="selectTagIndex=index">{{name}}</div>
      </div>
      <div class="k-v-home--view">
        <transition name="k-fade-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <div :class="['k-v-home--back-top',{'k-v-home--back-top-visiable':showBackToTop}]"
         @click.stop="handleBackToTop">
      <i class="k-icon-icon-arrow-up"></i>
    </div>
  </div>
</template>

<script>
import KTransitionCollapse from "@/components/k-transition-collapse";
import { routes } from "../setting";
import { repository } from "../../package";
import { scrollToTop } from "../util.js";

export default {
  name: "home",
  components: { KTransitionCollapse },
  data() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    return {
      windowWidth: windowWidth,
      showMenu: windowWidth > 992,
      routeList: routes,
      github: repository.url,
      showBackToTop: false,
      selectTagIndex: 0,
      windowHeight: windowHeight
    };
  },
  computed: {
    mediaClass() {
      if (this.windowWidth <= 992) {
        return "k-v-home-small";
      }
      if (this.windowWidth > 992 && this.windowWidth <= 1440) {
        return "k-v-home--mid";
      }
      return "k-v-home--large";
    },
    menuClass() {
      return this.showMenu ? "k-icon-close" : "k-icon-menu";
    },
    tagList() {
      return [{ name: "ALL" }, ...routes.filter(m => !m.path)];
    }
  },
  methods: {
    handleClickOutSide() {
      if (this.mediaClass != "k-v-home-small") return;
      this.showMenu = false;
    },
    handleRouteLinkClick() {
      this.$refs.main.scrollTop = 0;
      this.handleClickOutSide();
    },
    convertUrl(path) {
      return path.replace(/@/, "").replace(/.(md|vue)$/, "");
    },
    handleScroll() {
      let scrollTop = this.$refs.main.scrollTop;
      this.showBackToTop = scrollTop > 100;
    },
    handleBackToTop() {
      let scrollTop = this.$refs.main.scrollTop;
      scrollToTop(this.$refs.main, scrollTop, 0);
    }
  },
  watch: {
    selectTagIndex(index) {
      if (index == 0) {
        this.routeList = routes;
        return;
      }
      let currIndex = 0;
      let routeList = [];
      routes.forEach(route => {
        if (!route.path) {
          currIndex++;
        }
        if (!routeList[currIndex]) {
          routeList[currIndex] = [];
        }
        routeList[currIndex].push(route);
      });
      this.routeList = routeList[index];
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      this.showMenu = this.windowWidth > 992;
    });
  }
};
</script>

<style lang="scss" scoped>
// 通用样式
.k-v-home {
  position: relative;
  height: 100%;
  background: #f2f3f8;
  color: #324b64;
}
.k-v-home--sidebar {
  box-sizing: border-box;
  background: linear-gradient(-30deg, #273149, #1c273f);
  box-shadow: 0.4rem 0.4rem 0.8rem rgba(0, 32, 64, 0.1);
  color: #fff;

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

.k-v-home--sidebar-button {
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

.k-v-home--sidebar-title {
  color: #e3f5ff;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
}

.k-v-home--sidebar-link {
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

  &:hover {
    background: hsla(0, 0%, 100%, 0.1);
    border-color: pink;
    color: #88f4ff;
  }

  &.router-link-active {
    border-color: pink;
    color: #88f4ff;
  }
}

.k-v-home--content {
  height: 100%;
  overflow: auto;
}

.k-v-home--banner {
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
}

.k-v-home--banner-link {
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

  .k-icon-star {
    margin-right: 10px;
    font-size: 20px;
  }
}

.k-v-home--tags {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  padding: 0 1rem;
}

.k-v-home--tag {
  display: inline-block;
  top: -1px;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  color: #8385aa;
  white-space: nowrap;
  border: 1px solid #c8cbf2;
  line-height: 2;
  padding: 0 0.5rem;
  margin: 0 0.1rem;
  transition: all 0.1s ease-out;
  outline: 0;
  user-select: none;
  cursor: pointer;
  margin-bottom: 1rem;
  margin-right: 1rem;
  border-radius: 0.2rem;
  height: 2rem;

  &:hover {
    background: #8385aa;
    border-color: #8385aa;
    color: #fff;
  }
}

.k-v-home--tag-active,
.k-v-home--tag-active:hover {
  background: #7983ff;
  border-color: #7983ff;
  color: #fff;
}

.k-v-home--view {
  padding: 0 2%;

  > section {
    width: 100%;
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

// 分辨率小于992
.k-v-home-small {
  .k-v-home--sidebar {
    background: #273149;
    box-shadow: 0 0.25rem 0.5rem -0.1rem rgba(0, 32, 128, 0.2);
    position: fixed;
    width: 100%;
    z-index: 2;
  }

  .k-v-home--sidebar-button .k-icon-close {
    transform: rotate(45deg);
  }

  .k-v-home--sidebar-menu {
    max-height: 378px;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 0 0.75rem 0.5rem 0.75rem;
    border-top: 1px solid #5f73a5;
  }
}

// 分辨率大于992、小于1440
.k-v-home--mid {
  .k-v-home--sidebar {
    position: absolute;
    left: 0;
    top: 0;
    width: 20%;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    padding: 0 0.75rem 1rem 0.75rem;
    overflow-y: auto;
    z-index: 100;
  }

  .k-v-home--sidebar-button {
    display: none;
  }

  .k-v-home--content {
    margin-left: 20%;
  }

  .k-v-home--view {
    max-width: 64rem;
    margin: 0 auto;
  }
}

// 分辨率大于1440
.k-v-home--large {
  .k-v-home--sidebar {
    position: absolute;
    left: 0;
    top: 0;
    width: 260px;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    padding: 0 0.75rem 1rem 0.75rem;
    overflow-y: auto;
    z-index: 100;
  }

  .k-v-home--sidebar-button {
    display: none;
  }

  .k-v-home--content {
    margin-left: 260px;
  }

  .k-v-home--view {
    max-width: 64rem;
    margin: 0 auto;
  }
}

.k-v-home--back-top {
  cursor: pointer;
  font-weight: 700;
  background: #fff;
  width: 3rem;
  height: 3rem;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  border-radius: 50%;
  user-select: none;
  box-shadow: 0 0.4rem 0.8rem -0.1rem rgba(0, 32, 128, 0.15);
  transition: all 0.2s ease-out;
  visibility: hidden;
  opacity: 0;
  z-index: 1;
  border: 1px solid rgba(0, 32, 128, 0.1);
  outline: 0;
  color: inherit;

  &:focus,
  &:hover {
    transform: scale(1.2);
    box-shadow: 0 0.8rem 1.6rem -0.2rem rgba(0, 32, 128, 0.15);
    color: #35a8ff;
  }

  .k-icon-icon-arrow-up {
    font-size: 1.5rem;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.k-v-home--back-top-visiable {
  visibility: visible;
  opacity: 1;
}
</style>
