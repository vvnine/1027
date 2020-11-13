import Vue from 'vue'
// import router from './router'
// //创建组件构造器对象
// const cpnC = Vue.extend({
//     template:`
//     <div>
//         <h2>创建组件构造对象</h2>
//         <p>创建组件构造对象1</p>
//     </div>`
// })
// //注册组件全局
// vue.component('cpn',cpnC)
const app = new Vue({
    el:'#app',
    data:{
        isShow:false,
        score:90,
        isUser:true,
        sex:'',
        isAgree:false,
        movies:[],
        fruit:'香蕉',
        fruits:[]
    },
    computed:{
        result(){
        let showMessage = '';
          if(this.score>= 90){
             showMessage = '优秀111'
         }else if(this.score>=80){
             showMessage = '良好222'
         }
         return showMessage
    }},
    components:{//注册局部语法糖
        'cpn':{
            template:`
            <div>
                <h2>创建组件构造对象</h2>
                <p>创建组件构造对象1</p>
            </div>`
            
    }}
})
window.app=app;
new Vue({
    el:'#app',
    router,
    render: h => h (App)
})