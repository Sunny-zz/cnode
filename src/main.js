import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import router from './router'
import './assets/style.less'
import './components/index'
import './plugins/moment'
import './filters/index'
import  store from './store'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
