import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'slick-carousel/slick/slick.css';
import "animate.css";
import "wowjs/css/libs/animate.css";

import VueToastr2 from "vue-toastr-2";
import "vue-toastr-2/dist/vue-toastr-2.min.css";

window.toastr = require("toastr");

Vue.use(VueToastr2);

import VueSmoothScroll from "vue2-smooth-scroll";
Vue.use(VueSmoothScroll);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
