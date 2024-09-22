const button=document.querySelector('.button');
const setbgcolor=()=>{
    var randomcolor="rgb(" + Math.round(Math.random() * 255)+ 
    "," + Math.round(Math.random() * 255) + 
    "," + Math.round(Math.random() * 255) + ")";
    const Bgcolor= document.querySelector('.div');
    Bgcolor.style.backgroundColor=randomcolor;
}
button.addEventListener("click",setbgcolor);
setbgcolor();

const button1=document.querySelector('.button1');
const setbgcolor1=()=>{
    var randomcolor1="rgb(" + Math.round(Math.random() * 255)+ 
    "," + Math.round(Math.random() * 255) + 
    "," + Math.round(Math.random() * 255) + ")";
    const Bgcolor1= document.querySelector('.div1');
    Bgcolor1.style.backgroundColor=randomcolor1;
}
button1.addEventListener("click",setbgcolor1);
setbgcolor1();

const button2=document.querySelector('.button2');
const setbgcolor2=()=>{
    var randomcolor2="rgb(" + Math.round(Math.random() * 255)+ 
    "," + Math.round(Math.random() * 255) + 
    "," + Math.round(Math.random() * 255) + ")";
    const Bgcolor2= document.querySelector('.div2');
    Bgcolor2.style.backgroundColor=randomcolor2;
}
button2.addEventListener("click",setbgcolor2);
setbgcolor2();