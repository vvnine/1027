<template>
  <div>
      <h2>用户</h2>
      <p>用户内容</p>
      <h2>{{$router}}</h2>
  </div>
</template>
<script>
  export default{
      name:"User",
      computed: {
        userId(){
          return this.$route.params.userid
        }
      },
  }
</script>