import Vue from 'vue'
import app from './app.vue'
import router from './router'
import './common/stylus/fonts.styl'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(app)
})
