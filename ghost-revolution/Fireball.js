
//Fireball constructor method
function Fireball(initX, initY, delta, image){
this.xpos = initX;
this.ypos = initY;
this.image = image;
this.delta = delta;
this.objWidth = 60;
this.objHeight = this.objWidth * (11/8);

}

Fireball.prototype.display = function () {
  push();
  translate(this.xpos, this.ypos);
  rotate(PI);
  image(this.image, 0, 0, this.objWidth, this.objHeight);
  this.updatePosY();
  pop();
}

// TODO: Make this update the Y position
Fireball.prototype.updatePosY = function () {
  this.ypos = this.ypos + this.delta;
  this.delta += this.delta*0.01;
}
