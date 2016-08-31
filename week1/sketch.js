function setup() {
  createCanvas(2000, 500);
  background('rgb(100%,0%,10%)');
}

function draw() {
  
  stroke(255); 
  fill(100, 50, 50);
  rect(50, 100, 100, 70);
  
  // stroke(90, 80, 60); 
  // fill(50, 50, 50);
  // // // triangle(50, 50, 100, 100, 50, 200);
  
  // this is a circle
  // ellipseMode(CORNER); 
  fill(70, 0, 200, 80); 
  ellipse(50, 100, 100, 100);
  
  fill(80, 89, 80);
  ellipse(50, 100, 100, 100);
  
  // added two white lines
  stroke(201);
  line(50, 100, 100, 0); 
  line(30, 200, 2000, 500); 
}
