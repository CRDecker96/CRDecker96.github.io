var x = 500;
var y = 500;
var colors = ['red','#222222','magenta','cyan']
var color = random(colors);
var angle1 = 0.0;
var segLength = mouseX; //set up length for interactive line
var height = windowHeight;
var width = windowWidth;
var ellipse[];
var ellipseX = random(0,windowWidth); //random X pos
var ellipseY = random(0,windowHeight); //random y pos
var ellipseWidth = random(1,100);
var ellipseHeight = ellipseWidth;


 function setup() {
  createCanvas(height,width);
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



   fill (color) //color of the interactive
   stroke(' rgb(100%, 0%,100%,0.5)');
   strokeWeight(10);
   segment( dx, dy, angle1); //segment inside the circle
   ellipse(dx, dy, 50, 50); //creates the shape for the middle

   if (mouseIsPressed();)
   {
     push();
     fill(colors);
     stroke(colors);
     ellipse(ellipseX + 20,ellipseY,ellipseWidth,ellipseWidth);
     pop();
     ++
   }
 }
