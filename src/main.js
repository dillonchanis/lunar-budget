import Vue from 'vue'
import Chart from 'chart.js'
import App from './App'
import router from './router'
import store from './store'

Chart.defaults.global.defaultFontColor = '#e6e8ff'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
