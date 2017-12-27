import Vue from 'vue'
import Chart from 'chart.js'
import App from './App'
import router from './router'
import store from './store'

Chart.defaults.global.defaultFontColor = '#e6e8ff'

Vue.config.productionTip = false

Vue.filter('truncate', function (text, length = 30, clamp = '...') {
  if (text.length <= length) return text

  let tcText = text.slice(0, length - clamp.length)
  let last = tcText.length - 1

  while (last > 0 && tcText[last] !== ' ' && tcText[last] !== clamp[0]) last -= 1

  last = last || length - clamp.length

  tcText = tcText.slice(0, last)

  return tcText + clamp
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
