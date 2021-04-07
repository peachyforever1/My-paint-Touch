var mouseEvent="empty";
var last_X, last_Y;
var canvas=document.getElementById("my_paint_canvas");
var ctx=canvas.getContext("2d");
var color="purple";
var line_width=2;
canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e){
color=document.getElementById("color").value;
line_width=document.getElementById("width").value;
mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",myMouseMove);
function myMouseMove(e){
current_X= e.clientX-canvas.offsetLeft;
current_Y= e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=line_width;
ctx.moveTo(last_X,last_Y);
ctx.lineTo(current_X,current_Y);
ctx.stroke();
}
last_X=current_X
last_Y=current_Y
}
canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e){
mouseEvent="mouseUP"
}
canvas.addEventListener("mouseleave",myMouseLeave);
function myMouseLeave(e){
mouseEvent="mouseleave"
}
