import Vue from "vue"
import App from "@/App.vue"
import router from "@/router"
import KSnippet from "@/components/k-snippet"
Vue.component("KSnippet", KSnippet)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
