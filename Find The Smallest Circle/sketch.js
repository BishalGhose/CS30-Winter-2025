// Find the Smallest Circle
// Bishal Ghose
// March 5th, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let randomXValue = 0;
let randomYValue = 0;
let randomSize = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  randomSeed();
  background(0);
  drawCircles();
}

function drawCircles(){
  let size = 50;
  let ListOfCircles = [];
  for (let i = 0; i < 100; i++) {
    randomXValue = random(0,windowWidth);
    randomYValue = random(0, windowHeight);
    randomSize = random(10,50);
    ListOfCircles.push(randomSize);
    for (let i of ListOfCircles){
      if (i < size) {
        size = i;
        fill(255,0,0);
        break;
      }
      else {
        fill(255);
      }
    }
  }
  console.log("hi")
  circle(randomXValue, randomYValue, randomSize);
  console.log(randomXValue, randomYValue, randomSize);
}