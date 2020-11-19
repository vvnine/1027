alert("欢迎来到魔法世界")
var that;
class Tab{
  constructor(id) {
    //获取元素
    that = this;
    this.main = document.querySelector(id);
    this.lis = this.main.querySelectorAll('li');
    this.img = this.main.querySelector('img');
    this.init();
  }
  init(){
    for (var i=0;i<this.lis.length;i++){
      this.lis[i].index = i;
      this.lis[i].onclick = this.toggleTab;
      }
    }
  toggleTab(){
    this.className='bannerNew';
    this.img.src = 'img/22.jpg';
}
}
new Tab('#banner');


//   toggleTab(){
//     this.updateNode();
//     this.add.onclick = this.addT
//   }
// }

var mv = document.getElementById('mv');
var flag = 1;
mv.onclick = function(){
  if(flag ===1){
    mv.src = 'img/22.jpg';
    flag = 2;
  }else if(flag === 2){
    mv.src = 'img/11.jpeg';
    flag = 1;
  }
}
window.onbeforeunload = function(){
  return"确定离开页面吗？";
}
let myImage = document.querySelector('img');
myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'img/11.jpeg') {
    myImage.setAttribute('src', 'img/22.jpg');
  } else {
    myImage.setAttribute('src', 'img/11.jpeg');
  }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  myHeading.textContent = '欢迎，霍格沃茨' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '欢迎，霍格沃茨' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '欢迎，霍格沃茨' + myName;
  }
}

// var that;
// class Tab {
//   constructor(id) {
//     that = this;
//     this.main = document.querySelector(id);
//     this.ul = this.main.querySelector(".fisrstnav ul:first-child");
//     this.fsection = this.main.querySelector(".tabscon");
//     this.init();
//   };

//   init() {
//     this.updateNode();
//     for (var i = 0; i < this.lis.length; i++) {
//       this.lis[i].index = i;
//       this.lis[i].onclick = this.toggleTab;
//     }
//   };
//   updateNode() {
//     this.lis = this.main.querySelectorAll("li");
//     this.sections = this.main.querySelectorAll("section");
//     this.spans = this.main.querySelectorAll(".fisrstnav li span:first-child");
//   };
//   toggleTab() {
//     that.clearClass();
//     console.log("tab" + this.index);
//     this.className = "liactive";
//     that.sections[this.index].className = "conactive";
//   };
//   clearClass() {
//     for (var i = 0; i < this.lis.length; i++) {
//       this.lis[i].className = "";
//       this.sections[i].className = "";
//     }
//   };
// }
// var tab = new Tab("#tab");
