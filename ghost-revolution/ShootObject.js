function Bullet(initX, initY, img) {
  this.xpos = initX;
  this.ypos = initY;
  this.speed = 10;
  this.img = img;
  this.width = 30;
  this.height = 30;
  this.display = true;
  this.hit = false;
}

Bullet.prototype.shoot = function ( enemies ) {

  push();

  if (this.display) {

    translate(this.xpos, this.ypos);

    image(this.img, 0, 0, this.width, this.height);
  }

  pop();

  this.hit = this.checkCollision( enemies );


  this.ypos -= this.speed;

  return this.hit;

};

Bullet.prototype.checkCollision = function ( enemies ) {
  var distance, minDist;
  var collision = false;

  for (var i = 0; i < enemies.length; i++) {
    distance = dist(this.xpos, this.ypos, enemies[i].xpos, enemies[i].ypos);
    minDist = this.height*0.5 + 22;
    if(distance <= minDist) {
      enemies[i].visible = false;

      return true;
    }
  }

  return false;

};
