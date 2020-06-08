import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//控制台生产消息
Vue.config.productionTip = process.env.NODE_ENV === "development";

//引入自定义icon
import "./assets/icon/iconfont";

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#content");
