<template>
  <div>
    <br>
    <div class="bmi">
      <div class="input1">
      <div>体重：</div>
      <div><input type="text" v-model="weight"> <div>公斤(kg)</div></div>
      <div>身高：</div>
      <div><input type="text" v-model="tall"> <div>厘米(kg)</div></div>
      </div>
      <!-- <div><button @click="cal">计算</button></div> 用了computer,不用点击按钮就能出来-->
      <div class="output">
      <div>健康值：</div>
      <div>{{health}}（BMI）</div>
      <div>系统评价：</div>
      <div>{{assess}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
      name:"BmiCal",
      data(){
        return{
          weight: window.localStorage.getItem('weight') || '',
          tall: window.localStorage.getItem('tall') || '',
          // assess:'',
        }
      },
      computed: {
         health(){
           let health = this.weight / ((this.tall * this.tall)/10000);
          //  let assess="";
          //  switch(true){
          //     case health<18.5:
          //     assess ="体重过轻";
          //     break;
          //     case health>=18.5&&health<23.9:
          //     assess ="体重正常";
          //     break;
          //     case health>=23.9&&health<27:
          //     assess ="体重过重";
          //      break;
          //     case health>=27&&health<32:
          //     assess ="体重肥胖";
          //     break;
          //     case health>32:
          //     assess ="体重非常肥胖";
          //      break;
          //  }
           return  health;
        },
        assess(){
          let assess ="";
          let health = this.weight / ((this.tall * this.tall)/10000);
          switch(true){
              case health<18.5:
              assess ="体重过轻";
              break;
              case health>=18.5&&health<23.9:
              assess ="体重正常";
              break;
              case health>=23.9&&health<27:
              assess ="体重过重";
               break;
              case health>=27&&health<32:
              assess ="体重肥胖";
              break;
              case health>32:
              assess ="体重非常肥胖";
               break;
              //  console.typeof(health)
           }
           return assess;
        }
      },
  }
</script>

<style>
  .bmi{
    font-size:16px;
    width:421px;
    height:100%;
    border: 1px solid rgb(58, 97, 50);
    border-radius: 5px;
    text-align: center;
    margin:10px auto;
  }
  .input1{
    display: flex;
    flex-wrap:wrap;
  }
  .input1 div:nth-child(2n-1),
  .output div:nth-child(2n-1)
  {
    background-color:rgb(111, 235, 107);
    width:120px;
    border-right:1px solid black;
  }
  .input1 div{
    border-bottom: 1px solid black;
  }
  .bmi div:nth-child(2){
    border-bottom: 1px solid black;
  }
  .bmi button{
    width:200px;
  }
  .bmi .input1 div:nth-child(2n){
    width:300px;
  }
  .bmi input{
    width:150px;
  }
  .output{
    display: flex;
    flex-wrap:wrap;
  }
  .output div{
    width:50%;
  }
  .output div:first-child{
    border-bottom: 1px solid black;
  }
  .output div:nth-child(2){
    border-bottom: 1px solid black;
  }
  .bmi .output div:nth-child(2n){
    width:300px;
  }
</style>