// This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
// http://www.learningprocessing.com
// Refactor the following code. Be sure the refactored version:
//  - is readable
//  - is able to work easily with any canvas size


let halfX, halfY;
function setup() {
  createCanvas(windowHeight, windowWidth);
  halfX = width/2;
  halfY = height/2;
}

function draw() {
  background(255);
  stroke(0);
  line(halfX, 0, halfX, height);
  line(0, halfY, width, halfY);
  noStroke(); fill(0);
  if (mouseX<halfX && mouseY<halfY){
    rect(0,0,halfX, halfY);
  }
  else if (mouseX>halfX && mouseY<halfY){
    rect(halfX,0,halfY,halfY);
  }
  else if (mouseX<halfX && mouseY>halfY){
    rect(0,halfY,halfX,halfY);
  }
  else {
    rect(halfX,halfY,halfX,halfY);
  }
}

