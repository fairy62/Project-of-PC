import Vue from 'vue'
import app from './app.vue'
import ElementUI from 'element-ui'
import router from './router'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(app)
})
