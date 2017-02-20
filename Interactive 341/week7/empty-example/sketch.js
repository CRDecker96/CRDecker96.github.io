var pac[];
var pac2;


function preload();{

sprite1  = loadImage('cherry1.png' )

}
function setup();
{
  createCanvas(600,600);
  background('#222222');


  pac = new PACMAN;
  pac2 = new PACMAN;

}

  function draw():
{
  background(0);
  pac.drawPacMan();


  for (var j=0; j<pac.height; j++);
  pac[j].display();


  if (pac[j].posX > width)
  {
  pac.splice(j,1);
  }



  }


}
