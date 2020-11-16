import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  // store,
  render: h => h(App)
})
// const root = document.createElement('div');
// document.body.appendChild(root);
// new Vue({
//   render: h => h(App)
// }).$mount(root)