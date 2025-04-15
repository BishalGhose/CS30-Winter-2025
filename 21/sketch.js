// Square Fractal
// Bishal Ghose



function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
}

function draw() {
  background(0);
  randomSeed(1);
  squareFractal(windowWidth/2, windowHeight/2, 200);
}


function squareFractal(x, y, size){
  let halfSize = size/2;
  fill(random(255), random(255), random(255), 100);
  noStroke()
  if (size > 2) {
    square(x, y, size);
    
    squareFractal(x + halfSize, y + halfSize, size/2);
    squareFractal(x - halfSize, y - halfSize, size/2);
    squareFractal(x - halfSize, y + halfSize, size/2);
    squareFractal(x + halfSize, y - halfSize, size/2);

  }
}