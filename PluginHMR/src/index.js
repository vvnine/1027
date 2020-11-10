// // 引入
// import './index.css';
// var root = document.getElementById('root');
// root.innerHTML = '<div class="iconfont icon-gouwuche"></div>';
import './style.css';
var btn = document.createElement('button');
btn.innerHTML= '点击';
document.body.appendChild(btn);
btn.onclick = function(){
    var div = document.createElement('div');
    div.innerHTML='item';
    document.body.appendChild(div);
}