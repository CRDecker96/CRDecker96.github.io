

var pac;
var pac2;

 function setup() {
  createCanvas(800,600);
  background('#222222');

  pac = new PACMAN (100,100);
  pac2 = new PACMAN (500,120);
  pac3 = new PACMAN (500,700);


}

 function draw() {
   background(0);
pac.drawPacMan();
pac2.drawPacMan();


   //drawPacMan(100, 100);




 }
