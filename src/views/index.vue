<template>
  <div class="view">
    <div class="header">
      <div class="navbar">
        <router-link to="/" class="logo">Study Notes</router-link>
        <div class="flex-1" />
        <a
          target="_blank"
          href="https://github.com/kitorv/study-notes"
          class="github"
        >
          <svg
            t="1606136947439"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="13389"
          >
            <path
              d="M512 12.63616c-282.74688 0-512 229.21216-512 512 0 226.22208 146.69824 418.14016 350.12608 485.82656 25.57952 4.73088 35.00032-11.10016 35.00032-24.63744 0-12.20608-0.47104-52.55168-0.69632-95.31392-142.4384 30.96576-172.50304-60.416-172.50304-60.416-23.28576-59.16672-56.85248-74.91584-56.85248-74.91584-46.44864-31.78496 3.50208-31.1296 3.50208-31.1296 51.4048 3.60448 78.47936 52.75648 78.47936 52.75648 45.6704 78.27456 119.76704 55.64416 149.01248 42.55744 4.58752-33.09568 17.85856-55.68512 32.50176-68.46464-113.72544-12.94336-233.2672-56.85248-233.2672-253.0304 0-55.88992 20.00896-101.5808 52.75648-137.4208-5.3248-12.9024-22.85568-64.96256 4.95616-135.49568 0 0 43.008-13.74208 140.84096 52.49024 40.83712-11.34592 84.64384-17.03936 128.16384-17.24416 43.49952 0.2048 87.32672 5.87776 128.24576 17.24416 97.73056-66.2528 140.65664-52.49024 140.65664-52.49024 27.87328 70.53312 10.3424 122.59328 5.03808 135.49568 32.82944 35.86048 52.69504 81.53088 52.69504 137.4208 0 196.64896-119.78752 239.94368-233.79968 252.6208 18.37056 15.89248 34.73408 47.04256 34.73408 94.80192 0 68.5056-0.59392 123.63776-0.59392 140.51328 0 13.6192 9.216 29.5936 35.16416 24.576 203.32544-67.76832 349.83936-259.62496 349.83936-485.76512 0-282.78784-229.23264-512-512-512z"
              p-id="13390"
              fill="#ffffff"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="sidebar">
      <p class="title">互联网</p>
      <router-link to="/" class="link">互联网是如何工作</router-link>
      <router-link to="/zzz" class="link">Http</router-link>
      <router-link to="/xxxx" class="link">浏览器运行机制</router-link>
      <p class="title">HTML</p>
      <router-link to="/dfa" class="link">html基础</router-link>
      <router-link to="/zzz" class="link">可访问</router-link>
      <router-link to="/xxxx" class="link">SEO优化</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.view {
  height: 100%;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #242349;
  height: 64px;
  padding: 0 24px;
}

.navbar {
  display: flex;
  align-items: center;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
  height: 100%;
  color: #ffffff;
  font-weight: bold;
  font-size: 28px;
}

.flex-1 {
  flex: 1;
}

.github {
  display: inline-block;
  height: 36px;
  width: 36px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
}

.sidebar {
  position: fixed;
  left: 0;
  bottom: 0;
  top: 65px;
  width: 300px;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #f5f5f5;
  z-index: 10;
  margin: 0;
  box-sizing: border-box;
  overflow-y: auto;
}

.title {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.44);
  margin: 20px 24px 6px 24px;
  text-transform: uppercase;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: bold;
  line-height: 1.43;
  letter-spacing: 0.01071em;
}

.link {
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  font-size: 14px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  padding: 4px 20px;
  border-left: 4px solid transparent;

  &.router-link-active {
    border-left-color: #ab47bc;
    color: #ab47bc;
  }
}
</style>
