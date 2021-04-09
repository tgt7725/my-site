import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import '@/styles/global.less'
import { showMessage } from './utils'
import './mock'
import Loading from "@/directives/Loading";
import Lazy from "@/directives/Lazy";
import './eventBus'

Vue.config.productionTip = false
Vue.prototype.$showMessage = showMessage;
Vue.directive('loading', Loading);
Vue.directive('lazy', Lazy);

store.dispatch('setting/getData');
// import './api/getBanner'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// import * as blog from './api/getBlog'
// blog.getComment().then(resp => console.log(resp))