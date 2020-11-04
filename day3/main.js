alert("接下来是魔法世界")
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


