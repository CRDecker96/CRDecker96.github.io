

var x = 500;
var y = 500; 
var angle1 = 0.0; 
var segLength = 70; //set up length for interactive line
 
 function setup() {
  createCanvas(2000,2000);
  background('#222222');
  strokeWeight(30.0); //setting up stroke and stroke weight for the interactive
  stroke(230, 200);
}
 
 function draw() {
   background(0); 
   
   dx = mouseX - x; 
   dy = mouseY - y; 
   angle1 = atan2(dy, dx) ; //the atan2 is given by the location of the mouse 
   x = mouseX - (cos(angle1) * segLength); //given direction 
   
   fill ('red') //color of the interactive
   stroke(' rgb(100%, 0%,100%,0.5)');
   strokeWeight(10);
   segment( x, y, angle1); //segment inside the circle 
   ellipse(x, y, 50, 50); //creates the shape for the middle 
 }
 
 function segment(x, y, a) {
   push()
   translate(x, y); 
   rotate(a); 
   line (0, 0, segLength, 0);
   pop();
 }