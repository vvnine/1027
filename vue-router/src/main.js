import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false
const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
  router: router,
  render: h => h(App)
}).$mount(root)