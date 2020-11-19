<template>
  <div id="calculator">
    <router-link to="/generalcal" tag="button">普通计算器</router-link>
    <router-link to="/bmical" tag="button">BMI计算器</router-link>
    <router-view></router-view>
    
  </div>
</template>
<script>
  export default{
    name: 'Calculator',
  }
</Script>

<style>
 
</style>