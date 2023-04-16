//回到顶部 scrollTo是滚动条
const gotop=document.querySelector(".gotop")
gotop.addEventListener('click',function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
});

//增加回到顶部时图标消失
window.addEventListener("scroll", function () {
    if (window.scrollY >= 600) {
      gotop.style.opacity = 1;
    } else {
      gotop.style.opacity = 0;
    }
  });


//增加个模块进场动画没用到js

//增加夜间主体切换，这个对我很难，实际很简单理解
// 其次还运用到了本地存储,这里就不了解了吧
const themeToggle = document.querySelector(".mycheckbox");
const body = document.querySelector("body");
const darkmode = localStorage.getItem("dark");

if (darkmode) {
  body.classList.add("dark");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", function () {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("dark", "active");
  } else {
    localStorage.removeItem("dark");
  }
});

// music
const music=document.querySelector("#music")
const start=document.querySelector("#musicbtn")
let a=1
music.play()
start.addEventListener('click',function(){
  console.log(a)
 if(a===1){
  music.pause();
  a=2;
 }
 else {
  music.play();
  a=1;
 }
 
});