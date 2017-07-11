// 配置路由组件
import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../components/main/main.vue'
import facilitator from '../components/facilitator/facilitator.vue'
import serviceItem from '../components/serviceItem/serviceItem.vue'
import serviceDetail from '../components/serviceDetail/serviceDetail.vue'
import shanghu from '../components/shanghu/shanghu.vue'
import login from '../components/login/login.vue'
import register from '../components/register/register.vue'

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {path: '/', component: main},// 默认路由
    {path: '/facilitator', component: facilitator},// 服务商路由
    {path: '/item', component: serviceItem},// 服务项路由
    {path: '/detail', component: serviceDetail},// 服务详情路由
    {path: '/shanghu', component: shanghu},// 登录注册路由
    {path: '/login', component: login},// 登录注册路由
    {path: '/register', component: register}// 登录注册路由
  ]
})
