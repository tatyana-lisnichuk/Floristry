import Vue from 'vue';
import App from './App.vue';
import router from './router';

// import Unsplash from 'vue-unsplash';
// Access Key is mandatory to use Unsplash API
// createApp(App)
//   .use(Unsplash, { accessKey: "FCePH_UxP8iSaD3O-b3UoX6z9eHDhdfI46BJD4bskHM" });

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
