// 配置路由信息，安装插件
import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
import About from '../components/About'
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [{
    path:'/home',//配置组件和路径映射关系
    component:Home
},{
    path:'/about',
    component:About
}
]
// 3.将router对象传入到Vue实例
export default router