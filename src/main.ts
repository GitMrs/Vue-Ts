import Vue from 'vue';
import App from './App.vue';
import {NavBar} from 'vant';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'vant/lib/vant-css/index.css';
Vue.config.productionTip = false;
Vue.use(NavBar);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
