import Vue from 'vue';
import App from './App.vue';
import router from './router';

// import Unsplash from 'vue-unsplash';
// Access Key is mandatory to use Unsplash API
// createApp(App)
//   .use(Unsplash, { accessKey: "FCePH_UxP8iSaD3O-b3UoX6z9eHDhdfI46BJD4bskHM" });
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Install BootstrapVue
Vue.use(BootstrapVue);

// Install BootstrapVue icon
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
