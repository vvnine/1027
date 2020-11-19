import Vue from 'vue'
import Calculator from './Calculator.vue'
import router from './router';
Vue.config.productionTip = false
const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
  router:router,
  render: h => h(Calculator)
}).$mount(root)