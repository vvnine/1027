<template>
  <div>
      <div class='calculator1'>
        <div class="screen">{{output || '0'}}</div>
        <table>
        <tbody class="number">
          <tr>
            <td @click="percent">%</td>
            <td @click="sign">+/-</td>
            <td @click="times">*</td>
            <td @click="divide">/</td>
          </tr>
          <tr>
            <td @click="append(1)">1</td>
            <td @click="append(2)">2</td>
            <td @click="append(3)">3</td>
            <td @click="add">+</td>
          </tr>
          <tr>
            <td @click="append(4)">4</td>
            <td @click="append(5)">5</td>
            <td @click="append(6)">6</td>
            <td @click="minus">-</td>
          </tr>
          <tr>
            <td @click="append(7)">7</td>
            <td @click="append(8)">8</td>
            <td @click="append(9)">9</td>
            <td @click="clear">C</td>
          </tr>
          <tr>
            <td @click="dot">.</td>
            <td @click="append(0)">0</td>
            <td @click="equal" colspan="2">=</td>
          </tr>
        </tbody>
      </table></div>
  </div>
</template>
<script>
  export default{
      name:"GeneralCal",
      data(){
        return {
          //previous保存你点击运算符之前的值
          previous:null,
          //输出到显示界面的字符串
          output:'',
          //记录当前的运算函数（+-*/）当点击等号时发出这个函数
          operator:null,
          //运算符标志
          operatorClicked: false
        }
     },
      methods:{
          percent(){
            //this.optput除以100，转成浮点型
           this.output=`${parseFloat(this.output)/100}`
            },
          clear(){
            //把输出的显示界面字符清空
            this.output = '';
          },
          append(number){
            //如果点击了运算符，那么this.operatorClicked就会被改为true
            if(this.operatorClicked){
              //然后将此时的输出清空
                    this.output='';
                    //将运算符标志改为false
                    this.operatorClicked=false;
                }
            this.output = `${this.output}${number}`; //this.output+number拼接字符串
          },
          sign(){
            //输入框如果查找有没有-这个字符串，找不到返回-1，找到的话修改索引
            //charAt() 方法可返回指定位置的字符,slice()方法提取字符串的一部分并返回一个新字符串。
            this.output = this.output.charAt(0) === '-' ?this.output.slice(1) : `-${this.output}`;
            },
          dot(){
            //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
            //indexOf() 方法对大小写敏感！如果要检索的字符串值没有出现，则该方法返回-1。
            //前面this.output.indexOf没有找到.所以返回-1，然后执行if语句
             if(this.output.indexOf('.') === -1){
              //在这个末尾加上点
              this.append('.');
            }
          },
          minus(){
            this.operator=(a,b)=>a-b;
            //previous保存你点击运算符之前的值,operatorClicked运算符标志
            this.previous = this.output;
            this.operatorClicked= true;
          },
          add(){
            this.operator=(a,b)=>a+b;
            this.previous = this.output;
            this.operatorClicked= true;
          },
          divide(){
            this.operator=(a,b)=>a/b;
            this.previous = this.output;
            this.operatorClicked= true;
          },
          times(){
            this.operator=(a,b)=>a*b;
            this.previous = this.output;
            this.operatorClicked= true;
          },
          equal(){
            //执行这个operator函数 第一个参数为output 第二个参数为previous
            this.output=`${this.operator(parseFloat(this.output),parseFloat(this.previous))}`;
            this.previous = null;
          }
      }
  }
</script>
<style>
   .calculator1{
    width:150px;
    height: 100%;
    margin:50px auto;
    background-color: rgb(160, 160, 252);
    border-radius: 5px;
    }  
  .calculator1 .screen{
    width:148px;
    height:35px;
    border:1px solid black;
    text-align: right;
    border-radius: 5px;
  }
  .calculator1 .number td{
    width:35px;
    height:35px;
    text-align: center;
    line-height:35px;
    border:1px solid black;
    border-radius: 5px;
  }
</style>