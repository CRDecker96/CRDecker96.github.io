var ellipse = [];
var Xcord = 200;
var Ycord = 200;
var mouseX;
var mouseY;



function setup();{
createCanvas(600,600);
background('rgb(0,255,0)');
noLoop();
}
function Draw(); {
  Xcord = Xcord += .5
if  (Xcord < 0 )
{
  Xcord = 0
}


  var opacity = 0 +mouseX
  push();
  fill(255,205,0,opacity);
  stroke('#222222');
  strokeWeight(6);
  ellipse(Xcord,Ycord,30,30);
  pop();
  ++

  }
}



}
