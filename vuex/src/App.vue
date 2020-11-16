<template>
  <div id="app">
    <!-- <h2>{{message}}</h2> -->
    <h2>{{$store.state.counter}}</h2>
    <button @click="$store.state.counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>
<script>
  import HelloVuex from './components/HelloVue.vue'
  export default{
   name: 'App',
   components:{
     HelloVuex
   },
   data(){
     return{
       message:'我是App组件',
       counter:0,
     }
   }
  }
</script>