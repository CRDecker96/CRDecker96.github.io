# CRDecker96.github.io
createCanvas(2000,2000)
background('#222222');

var x = 100,
y = 100,
angle1 = 0.0,
segLength = 70; 
 
 function setup() {
createCanvas(1000, 1000);
strokeWeight(30.0); 
stroke(230, 200);
}
 
 fuction draw() {
   background(0); 
   
   dx = mouseX - x; 
   dy = mouseY - y; 
   angle1 = atan2(dy, dx) ;
   x = mouseX - (cos(angel1) * segLenth); 
   
   fill ('red')
   stroke(' rgb(100%, 0%,100%,0.5)');
   strokeWeight(10);
   segment( x, y, angel1); 
   ellipse(x, y, 50, 50);
 }
 
 function segment(x, y, a) {
   push()
   translate(x, y); 
   rotate(a); 
   line (0, 0, segLength, 0);
   pop();
 }
