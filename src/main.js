import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import store from "./store";

import vPlayBack from "v-playback";
import feather from "vue-icon";

Vue.use(vPlayBack);
Vue.use(feather, "v-icon");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
