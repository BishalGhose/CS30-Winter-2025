// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  drawRoad();
}

function drawRoad() {
  stroke(255, 0, 0);
  strokeWeight(10);
  fill(0);

  rect(width/2, height/2, width + 10, height/2)

  stroke(255, 255, 0);
  strokeWeight(4);

  for (let i = 0; i <= width; i += 30){
    line(i+ 7.5, height/2, i + 22.5, height/2)
  }
}


class Car {
  constructor(x, y){
    this.type = round(random(0,1));
    this.color1 = [random(255), random(255), random(255)];
    this.color2 = random(255);
    this.x = x;
    this.y = y;
  }





}