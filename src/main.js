// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import router from "./router";
import { HTTP as axios } from "./axios.js";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	components: { App: () => import("./layout/Main/Main") },
	template: "<App/>"
});
