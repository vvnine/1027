//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'
//安装插件
Vue.use(VueRouter)
//创建VueRouter对象
const routes = [
  {
    path: '',
    // component: Home
    redirect: '/home'//重定向
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About },
    {
      path: '/user/:userid',
      component: User }
]
const router = new VueRouter({
  routes,
  mode: 'history',//使地址栏没有#哈希
  linkActiveClass:'active'//可以更改class的默认名字
})
//将router对象传入实例中
export default router