


//PACMAN constructor method
function PACMAN (initX, initY) {
  this.PacmanDia = 80;
  this.posX = initX;
  this.posY = initY;
  this.dirX = 1;
  this.dirY = 0;
  this.curTime = 0;
  this.targetTime = 2;
  this.direction = 0;
  this.mouthDirection = 0;
  this.eyeX = 0;
  this.eyeY = 0;


}


//Method to Draw PACMAN
PACMAN.prototype.drawPacMan = function (){

  this.edgeCheck();
  this.move();
  this.timeCheck();
  // this.rotateMouth();

  push();
  translate(this.posX, this.posY);
  fill(random(0,256),random(0,256),random(0,256)); //fill color random
  strokeWeight(4); //stroke wieght around PACMAN
  stroke(51); //stroke color of PACMAN
  arc(0, 0, this.PacmanDia , this.PacmanDia, PI*(1/6), PI*(-1/6));
  elipse(this.PacmanDia/0.05 + 10, this.PacmanDia/0.05+20);
  pop();
}


PACMAN.prototype.move = function (){
  this.posX += this.dirX;
  this.posY += this.dirY;

  // edge check, so that the pacman cannot leave the canvas, but simply stays in the current position, until a new direction is choosen.
}

PACMAN.prototype.timeCheck = function (){
  if (this.curTime/frameRate() >= this.targetTime){
    this.directionChange();

  } else {
    this.curTime++;
  }
}


PACMAN.prototype.directionChange = function () {
  var dir;

  do {
    dir = floor (random(4));
  } while (dir == this.direction)
  this.direction = dir;

  this.randTime();

  if ( this.direction == 0 ) {
    this.northDir();

  } else if (this.direction == 1){
    this.southDir();
  }
  else if (this.direction == 2){
    this.eastDir();
  }
  else if (this.direction == 3){
    this.westDir();
  }
};



PACMAN.prototype.northDir = function () {
  this.dirX = 0;
  this.dirY = -1;
}

PACMAN.prototype.southDir = function () {
  this.dirX = 0;
  this.dirY = 1;
}
PACMAN.prototype.westDir = function () {
  this.dirX = -1;
  this.dirY = 0;
}
PACMAN.prototype.eastDir = function () {
  this.dirX = 1;
  this.dirY = 0;
}


PACMAN.prototype.randTime = function (){
  this.targetTime = random(4);
  this.curTime = 0;
}


PACMAN.prototype.edgeCheck = function () {
  if (this.posX <= 0 + this.PacmanDia/2 || this.posX >= 800 - this.PacmanDia/2) {
    this.dirX = 0;
  }

  if (this.posY <= 0 + this.PacmanDia/2 || this.posY >= 600 - this.PacmanDia/2) {
    this.dirY = 0;
  }

  if(this.posY <= this.PacmanDia/2){
    this.posY = this.PacmanDia/2 + 1;
  }
  if(this.posX <= this.PacmanDia/2){
    this.posX = this.PacmanDia/2 + 1;
  }
  if(this.posY >= height - this.PacmanDia/2){
    this.posY = height - this.PacmanDia/2 - 1;
  }
  if(this.posX >= width - this.PacmanDia/2){
    this.posX = width - this.PacmanDia/2 - 1;
  }


}
// Create a function that changes the movement direction of the pacman. Such that it randomly chooses a new direction (North, South, East, West), but cannot keep the same direction.
// Additionally, the mouth of the pacman should rotate to reflect the new direction.
//PACMAN.prototype.randMove = function(){
