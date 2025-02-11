// Drawing with Shapes Practice
// Mr. Scott
// Feb 10, 2025

// Global Variable Declarations
let boxX = 200, boxY = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  //drawBox();
  drawCharacter();
}

function drawCharacter(){              
  let bodysize = 3;
  let eyesize = 30;
  let width = 100 * bodysize, height = 80 * bodysize;
  fill(0,255,0);
  rect((windowHeight/2) - (height/2), (windowWidth/2) - (width/2), height, width, 5);
  circle((windowHeight/2), (windowWidth/2) - width/2, height);
  fill(0,0,0);
  circle((windowHeight/2) + height/4, (windowWidth/2) - width/2, eyesize);
  circle((windowHeight/2) - height/4, (windowWidth/2) - width/2, eyesize);
  rect((windowHeight/2) - height/4, (windowWidth/2) - width/3, height/2, width/20, 5);
  rect((windowWidth/2), (windowHeight/2), height/20, width/2, 5);
  rect((windowWidth/2), (windowHeight/2), height/20, width/2, 5);
}







function drawBox() {
  //draw box on screen
  fill(255,155,55);
  rect(boxX,boxY, 50, 30 , 5 ,5);
  rect(boxX,boxY-50, 30);
}

/*function keyPressed(){
  if (key === "a"){
    boxX = 0;
  }
  if (key === "b"){
    boxY = 400;
  }
  if (keyCode === ESCAPE){
    boxX = width * 0.85; //85% across the screen
    boxY = height * 0.6; //605 down the screen
  }
}
*/

