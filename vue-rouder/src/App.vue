<template>
  <div id="app">    
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-view></router-view> -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
  <router-link to="/home">首页</router-link>
  <router-link to="/about">关于</router-link>
  <router-link :to="'/user/'+userId">用户</router-link>
  <router-view></router-view>
</div>
</template>
<script>
  export default {
    name: 'App',
    data(){
      return{
        userId:'lisi'
      }
    }
    // methods:{
    //   homeClick(){
    //     this.$router.push('/home')
    //   }

    }
</script>
<style>
  .router-link-active {
    color:brown
  }
</style>