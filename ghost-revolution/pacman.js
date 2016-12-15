// PACMAN CLASS
//TODO: add attribution to others work
function Pacman(image)
{
  // set default properties
  this.xpos = 400;
  this.ypos = height * 0.85;
  this.speed = 6;
  this.direction = "stopped";

  // eyeCounter will determine which pacman sprite to display (1, 2 or 3)
  this.eyeCounter = 1;
}

Pacman.prototype.display = function()
{
  // check for every fifth frame
  if(frameCount % 5 === 0)
  {
    // if the eyeCounter is equal to 3, reset eyeCounter by setting it equal to 1
    // otherwise, increment eyeCounter
    if(this.eyeCounter == 3)
    {
      this.eyeCounter = 1;
    } else {
      this.eyeCounter++;
    }
  }

  push();
  imageMode(CENTER);

  // if pacman is facing right
  if( keyCode === RIGHT_ARROW )
  {
    // display the correct sprite image based on the eyeCounter

        image(pacmanRight2, this.xpos, this.ypos);


    // move pacman to the right
    this.xpos = this.xpos + this.speed;

    this.speed = this.speed * 0.05;
  }

  // if pacman is facing left
  if( keyCode === LEFT_ARROW )
  {

        image(pacmanLeft1, this.xpos, this.ypos);


    // move pacman to the left
    this.xpos = this.xpos - this.speed;
    this.speed = this.speed * 0.05;
  }

  // if pacman is just starting out and hasn't started moving yet
  if(this.direction == 'stopped')
  {
    image(pacmanCenter3, this.xpos, this.ypos);
    this.speed = 4;
  }

  // wrap pacman if pacman reaches the edge of the screen
  if(this.xpos > width)
  {
    this.xpos = 0;
  }
  if(this.xpos < 0)
  {
    this.xpos = width;
  }
}
