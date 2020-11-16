<template>
  <div>
      <h2>用户</h2>
      <p>用户内容</p>
      <h2>{{userId}}</h2>
      <h2>{{$route.params.userId}}</h2>
  </div>
</template>
<script>
  export default{
      name:"User",
      computed: {
        userId(){
          return this.$route.params.userId
        }
      },
      created(){
        console.log('User created');
      },
      destroyed() {
        console.log('User destroyed');
      }
  }
</script>