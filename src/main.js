import Vue from "vue";
import VueResource from "vue-resource";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";

import "./assets/styles/general.scss";
Vue.use(VueResource);
Vue.use(BootstrapVue);
//Vue.http.options.root =
new Vue({
  el: "#app",
  components: {
    App
  },
  render: h => h(App),
});


