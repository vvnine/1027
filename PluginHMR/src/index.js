// // 引入
import "@babel/polyfill";
// import './index.css';
// var root = document.getElementById('root');
// root.innerHTML = '<div class="iconfont icon-gouwuche"></div>';
// import './style.css';
// var btn = document.createElement('button');
// btn.innerHTML= '点击';
// document.body.appendChild(btn);
// btn.onclick = function(){
//     var div = document.createElement('div');
//     div.innerHTML='斑马线';
//     document.body.appendChild(div);
// }
// const arr =[
//     new Promise(()=>{})
// ]
import Vue from 'vue'
const app= new Vue({
    el:'#app',
    data:{
        counter:0,
        currentIndex:0,
        message:'测试测试',
        size:100,
        color:'blue',
        firstName:'Harry',
        lastName:'Potter',
        baseStyle:{backgroundColor:'blue'},
        baseStyle1:{fontSize:'150px'},
        movies: ['丹尼尔·雷德克里夫','鲁伯特·格林特','艾玛·沃特森','理查德·哈里斯'],
        books:[{id:1,name:'第1套',price:50},
              {id:1,name:'第2套',price:60},
              {id:1,name:'第3套',price:66},
              {id:1,name:'第4套',price:55},]
    },
    computed:{
        fullName: function () {
          return this.firstName + ' ' + this.lastName
        },
        totalPrice: function(){
            let result = 0;
            for(let i=0; i < this.books.length; i++ ){
                result += this.books[i].price
            }return result
        }
      },
    methods:{
        add:function(){
            this.counter++
        },
        sub:function(){
            this.counter--
        },
        liClick(index){
            this.currentIndex = index
        },
        getstyle:function(){
            return{fontSize: this.size + 'px' ,backgroundColor: this.color}
        },
    }
})

