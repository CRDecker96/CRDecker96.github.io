
var pacman;
var ghosts = [];
var fireballImage;
var fireball = [];
var lives;
var score;
var ghostRed, ghostGreen, ghostBlue, ghostOrange;
var pacmanLeft1,pacmanRight2,pacmanCenter3;
var gameStarted = false;
var displayHowTo = false;
var ellapsedTime;
var backgroundImage;
var startTime = 0;
var ghostCounter = 0;
var fireCounter = 0;
var ghostHatch = 1;
var fireballHatch = 1;
var ghostSound, fireballSound, bgMusic;
var musicRate;
var bullets = [];

function preload()
{
  // load in ghost images
  ghostRed = loadImage('ghost_red.png');
  ghostGreen = loadImage('ghost_green.png');
  ghostOrange = loadImage('ghost_orange.png');
  ghostBlue = loadImage('ghost_blue.png');


  // load in pacman image
  pacmanLeft1= loadImage('PacManLeft.png');
  // pacmanLeft2 = loadImage('PacmanShip.png');
  // pacmanLeft3 = loadImage('PacmanShip.png');
  pacmanRight2 = loadImage('PacMacRight.png');
  // pacmanRight2 = loadImage('PacmanShip.png');
  pacmanCenter3 = loadImage('PacManCenter.png');

  // load in heart and fireballs image
  heart = loadImage('heart.png');
  fireballImage = loadImage('FireBall.png');
  backgroundImage = loadImage('PacmanBackground.png');

  ghostSound = loadSound('./assets/ghostSound.mp3');
  fireballSound = loadSound('./assets/fireSound.wav');
  bgMusic = loadSound('./assets/bgMusic.mp3');

}

function setup()
{
  // set canvas size
  createCanvas(windowWidth, windowHeight);

  // create pacman object
  pacman = new Pacman();

  // default lives and score values
  lives = 3;
  score = 0;

  // create clear button
  startButton = createButton('Start Game');
  startButton.position(windowWidth/2 - 72, windowHeight/2);
  startButton.mousePressed(startGame);


  instructionsButton = createButton('How to Play');
  instructionsButton.position(windowWidth/2 - 72, windowHeight/2-20);
  instructionsButton.mousePressed(changeHowToVar);

}

function changeHowToVar() {
  //setting to false
  displayHowTo = true;
}

function draw() {
  var minTime = 0;
  var maxTime = 0;

  background('red');


  push();
  fill(0);
  strokeWeight(5);
  stroke(255, 204, 0);
  textSize(72)
  text(" Ghost Revolution! ", windowWidth/4, windowHeight/3);
  pop();


  if(displayHowTo == true) {


    //display intructions
    push();
    fill(0);
    strokeWeight(1.75);
    stroke(255, 204, 0);
    textSize(26)
    text(" [Left] & [Right] arrow keys to move \n [Shift] shoot fire \n [DOWN] arrow to stop \n Objective: Shoot fire balls and destroy the ghosts!", windowWidth/4, windowHeight/2+100);
    pop();

  }



  if(gameStarted == true)
  {



    image (backgroundImage, width/2, height/2, width, height);

    // display score
    push();
    fill(0);
    strokeWeight(2);
    stroke(255, 204, 0);
    textSize(24);
    text("Score: " + score, 30, 50);

    ellapsedTime = millis()/1000 - startTime;
    text("Time Ellapsed: " + floor(ellapsedTime), 30, 80);
    // text(ghostHatch + ":" +ghostCounter, 30, 100);
    pop();
    //display time in seconds


    if (keyIsDown(LEFT_ARROW)) {
      if (pacman.direction == 'stopped') {
        pacman.direction = 'left';
        pacman.speed = 6;
      }
    } else if (keyIsDown(RIGHT_ARROW)) {
      if (pacman.direction == 'stopped') {
        pacman.direction = 'right';
        pacman.speed = 6;
      }
    }




    // display pacman
    pacman.display();

    // random ghost hatching
    ghostCounter++;
    if( ghostCounter >= ghostHatch)
    {
      ghosts.push(new Ghost());
      minTime = constrain( map( ellapsedTime, 0, 120, 2, 0), 0, 2)*frameRate();
      maxTime = constrain( map( ellapsedTime, 0, 120, 10, 0.2), 0.2, 10)*frameRate();
      ghostHatch = Math.ceil(random(minTime, maxTime));
      ghostCounter = 0;

    }

    //random Fireball hatching
    fireCounter++;
    if(fireCounter >= fireballHatch )
    {
      var fireSpeedMax = constrain( map( ellapsedTime, 0, 120, 6, 0.1), 6, 0)*frameRate();
      fireball.push(new Fireball(random(width),0,random(1,height/fireSpeedMax),fireballImage));
      minTime = constrain( map( ellapsedTime, 0, 120, 2, 0), 0, 2)*frameRate();
      maxTime = constrain( map( ellapsedTime, 0, 120, 10, 0.1), 0.1, 10)*frameRate();
      fireballHatch = Math.ceil(random(minTime, maxTime));
      fireCounter = 0;
    }

    // loop through each ghost
    for (var i=0; i<ghosts.length; i++)
    {
      // display ghost
      ghosts[i].display();

      // check if ghost reaches bottom of the screen
      if(ghosts[i].ypos > height)
      {
        // remove ghost
        ghosts.splice(i, 1);

      } else {

        // check if pacman is touching ghost
        var d1 = dist(ghosts[i].xpos, ghosts[i].ypos, pacman.xpos, pacman.ypos);
        if(d1 < 21+48)
        {
          //remove live
          lives--;
          ghostSound.play();

          // remove ghost
          ghosts.splice(i, 1);
        }
      }
    }

    // loop through each FB
    for (var j=0; j<fireball.length; j++)
    {
      // display FB
      fireball[j].display();

      // check if FB reaches bottom of screen
      if(fireball[j].ypos > height)
      {
        // remove FB
        fireball.splice(j, 1);

      } else {

        // check if pacman is touching FB
        var d2 = dist(fireball[j].xpos, fireball[j].ypos, pacman.xpos, pacman.ypos);
        // TODO: REPLACE 25 WITH RELATIVE DISTANCE (ie fireball.radis + pacman.radis)
        if(d2 < (30 + 48))
        {
          // remove FB
          fireball.splice(j, 1);

          // increase score by one
          score++;
          fireballSound.play();

        }
      }
    }

    for (var i = 0; i < bullets.length; i++) {
      var hit;
      hit = bullets[i].shoot(ghosts);
      if (hit) {
        bullets.splice(i, 1);
        score++;
        fireballSound.play();
      }
    }

    // check for game over
    if(lives <= 0)
    {
      // reset lives and score
      lives = 3;
      score = 0;
      startTime = 0;

      // reset pacman's position
      pacman.xpos = 400;
      pacman.direction = "stopped";

      // remove ghosts and fire
      ghosts = [];
      fireballImage = [];


      // set gameStarted to false
      gameStarted = false;

    } else {

      // show start button
    }

    //lives display
    switch(lives)
    {
      case 3:
      image(heart,windowWidth-30, 30);
      image(heart, windowWidth-80, 30);
      image(heart, windowWidth-130, 30);
      break
      case 2:
      image(heart, windowWidth-30, 30);
      image(heart, windowWidth-80, 30);
      break;
      case 1:
      image(heart, windowWidth-30, 30);
      break;
      case 0:
      startButton.show();
      break;
    }

    // effect music rate
    musicRate = constrain(map(ellapsedTime, 60, 120, 0.7, 1.5), 0.7, 2);
    bgMusic.rate(musicRate);
  }
}

function startGame()
{
  // change gameStarted variable
  gameStarted = true;
  startTime = millis()/1000;

  // start music
  musicRate = 0.7;
  bgMusic.rate(musicRate);
  bgMusic.loop();

  startButton.hide();
  instructionsButton.hide();

}

// function keyDown()
// {
//   if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
//     pacman.speed = 6;
//     // pacman.direction = 'moving';
//
//   }
// }
//   // if the right arrow was pressed
//   if(keyCode == RIGHT_ARROW)
//   {
//     // change pacman's direction property
//     pacmanRight2.direction = 'right';
//   }
//
//   // if the left arrow was pressed
//   if(keyCode == LEFT_ARROW)
//   {
//     // change pacman's direction property
//     pacmanLeft1.direction = 'left';
//     }


function keyPressed(){
  if (keyCode === SHIFT) {
    bullets.push( new Bullet(pacman.xpos, pacman.ypos, fireballImage) );
  }
}

function keyReleased() {
  pacman.direction = "stopped";
  pacman.speed = 0;
}
