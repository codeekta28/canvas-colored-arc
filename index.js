console.log("This is index.js file");
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.addEventListener("mousemove",(e)=>{
let context = canvas.getContext("2d");
let randomColor = Math.floor(Math.random()*16777215).toString(16);
context.fillStyle=`#${randomColor}`;
context.beginPath();
let arc = context.arc(e.clientX,e.clientY,50,0,2*Math.PI,false);
context.fill();
context.strokeStyle = "red";
context.stroke();
canvas.innerHTML = arc



})