var y = 0; 
var al = 255;
var alchange = -50; 
var rad = 250;


function setup() {
createCanvas(600,600);

}

function draw(){ 
  background (0);
  fill(100, al);
  ellipse(y, height/2, rad*2, rad*2);
   if (y >= width + rad) {y = -rad};
   y++}
   

  
  
function mouseDragged(){ //when mouse is dragged the color of the circle changes as it moves 
  al += alchange;
  if (al <= 0 || al > 255) {
    alchange = alchange * -1;
  } 
  var col= {// color randomization set up
  r:random(1,250), 
  g:random(1,250),
  b:random(1,250)}
  
  {if(mouseIsPressed)//attemped to make background color to change 
  background (col.r,col.g,col.b)}
}
  
  


  
  
  
  
  
  
  
  
