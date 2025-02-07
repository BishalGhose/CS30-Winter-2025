// Coordinate System and User Events 
// Bishal Ghose
// Feb 6th, 2025
// Not run-to-completion, but interactive programs...


function setup() {
  // runs ONCE, at the very beginning....
  createCanvas(500, 500);
}

function draw() {
  // draw LOOP, repeats over and over forever...
  // - target of 60 frames per second
  // A new image is drawn at the bottom of the loop
  background(220);
  fivecircles(100);
}

function twoCircle(){
  //draws two circle, one at a fixed location
  //and one at the mouse location
  fill(0,255,0); //green fill
  stroke(0,0,255);
  strokeWeight(5); //thickness of the line:5
  circle(200,100,50);

  noStroke(); //turns off outlines
  fill(255,0,0); //red fill
  circle(mouseX,mouseY,30);
  //secret calculated delay()
  //screen updates at the end of loop
}

function fivecircles(diameterofcircle){
  circle(width,height,diameterofcircle);
  circle(width,0,diameterofcircle);
  circle(0,height,diameterofcircle);
  circle(0,0,diameterofcircle);
  circle(height/2,width/2,diameterofcircle);
}




