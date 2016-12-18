var ellipse;
var Xcord = 200 + 2;
var Ycord = 200;
var colors = ['#222222', 'magenta'];
var color = random(colors);



function setup(){
createCanvas(windowWidth,windowHeight);

noloop();
}

function Draw(){
background(256);

var l = 0;

while (l <= width);

fill(0);
stroke(255);
strokeWeight(2);
ellipse(l,Ycord,50,50);
l = l + 50
l++
}

if (mouseIsPressed) {
  for (var x; x > width, x = x + 25){
  push();
  fill(color)
  stroke(0);
  strokeWeight(2);
  rect(x,Ycord-100,45,45)
  pop();
  x++
  }
}
