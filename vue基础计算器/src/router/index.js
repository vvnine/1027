import Vue from 'vue'
import VueRouter from 'vue-router'
import GeneralCal from '../components/GeneralCal.vue'
import BmiCal from '../components/BmiCal.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/generalcal',
    component: GeneralCal,
    meta:{
      title:'普通计算器'
    }, 
  },
  {
    path: '/bmical',
    component: BmiCal,
    meta:{
      title:'BMI计算器'
    },
   }
]
const router = new VueRouter({
  routes,
  mode:'hash',
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})
export default router