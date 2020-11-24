import { createApp } from "vue";
import router from "./router";
import App from "./app.vue";
import VMarkdownView from "./components/markdown-view.vue";

const app = createApp(App);
app.use(router);
app.component("VMarkdownView", VMarkdownView);
app.mount("#app");
