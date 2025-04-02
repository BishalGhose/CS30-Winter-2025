// OneShot (Final Project)
// Bishal
// Date







function setup() {
  createCanvas(1000, 650);
}

function draw() {
  background(0,255,255);
  stroke(10,10,255);
  strokeWeight(50);
  line(width/2, 0, width/2 + 150, height);
  stroke(255, 0, 255);
  strokeWeight(5);
  line(width/2 - 25, 0, width/2 + 125, height);
  line(width/2 + 25, 0, width/2 + 175, height);
  fill(0,149,255);
  noStroke();
  triangle(width/2 + 30, 0, width, 0, width, height);
}
