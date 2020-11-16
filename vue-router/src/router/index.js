//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'
//懒加载
const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')

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
    component: Home,
    meta:{
      title:'首页'
    },
    children:[{
      path:'news',//子路由不用加反斜杠
      component:HomeNews
    },
    {
      path:'message',//子路由不用加反斜杠
      component:HomeMessage
    }
  ]
  },
  {
    path: '/about',
    component: About,
    meta:{
      title:'关于'
    }, },
    {
      path: '/user/:userId',
      component: User,
      meta:{
        title:'用户'
      }, }
]
const router = new VueRouter({
  routes,
  // mode: 'history',//使地址栏没有#哈希，但是需要其他配置会出错
  mode:'hash',
  linkActiveClass:'active'//可以更改class的默认名字
})

//全局守卫
router.beforeEach((to, from, next) => {
  //从from跳转到to
  document.title = to.matched[0].meta.title
  next()
})

//将router对象传入实例中
export default router