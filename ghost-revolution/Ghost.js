// GHOST CLASS
function Ghost()
{
  // set default properties
  this.xpos = random(0, width);
  this.ypos = 0;
  this.speed = random(1, 2);
  this.type = Math.ceil(random(4));
  this.visible = true;
}

Ghost.prototype.display = function()
{
  imageMode(CENTER);

  if (this.visible) {

    // show different color ghost based on it's random 'type' value
    switch(this.type)
    {
      case 1: image(ghostRed, this.xpos, this.ypos, 42, 44); break;
      case 2: image(ghostGreen, this.xpos, this.ypos, 42, 44); break;
      case 3: image(ghostOrange, this.xpos, this.ypos, 42, 44); break;
      case 4: image(ghostBlue, this.xpos, this.ypos, 42, 44); break;
    }
    this.ypos = this.ypos + this.speed;
  } else {
    this.ypos = height + 10;
  }
}
