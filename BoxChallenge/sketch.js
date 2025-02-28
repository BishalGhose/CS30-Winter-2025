// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let xpos =0 
let ypos = 0



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  let percenttime = (millis() % 10000) /10000
  if (percenttime <= .25){
    ypos = 0
    xpos = windowWidth *percenttime/.25
  }
  else if (percenttime >= .75){
    xpos = 0
    ypos = windowWidth * .75/ percenttime
  }
  else if (percenttime >= .50){
    xpos -= 5.7
    ypos = windowHeight -50
  }
  else if (percenttime > .25){
    xpos = windowWidth - 50
    ypos = windowWidth * percenttime/.50
  }
  square(xpos,ypos,50);
}
