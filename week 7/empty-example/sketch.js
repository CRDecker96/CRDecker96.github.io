var pac;
var sprite1;

function preload();{

sprite1  = loadImage('heart.png' )

}
function setup();
{
  createCanvas(600,600)
  background('#222222')

  sprite1 = new sprite1
  pac = new PACMAN

}

  function draw():
{
  background(0);
  pac.drawPacMan();
  sprite1.display();


}
