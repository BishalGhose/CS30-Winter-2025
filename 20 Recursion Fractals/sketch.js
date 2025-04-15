// Fractals Demo
// Mr. Scott
// April 14, 2025
// Cantor Set, Circle Fractal, Rectangle Fractal


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  circleFractal(width/2, height/2, 500, 256);
}

// function reCircle(x, y, d) {
//   // Recursively draw circles as long as
//   // Diameter > 5
//   circle (x,y,d);
//   if (d > 1){
//     reCircle(x,y,d*0.9);
//   }
//   // Implicit base case (if d < 10)

// }



// function cantor(x, y, length , depth){
//   if (depth > 1){
//     y += 20;
//     line(x,y, x + length, y);
//     cantor(x, y, length/3, depth - 1)
//     cantor(x + 2*length/3, y, length/3, depth - 1)
//   }
// }

function circleFractal(x, y, d) {
  if (d > 0.1) {
    noFill();
    circle(x, y, d);
    circleFractal(x - d/2, y, d/2)
    circleFractal(x + d/2, y, d/2)
    circleFractal(x, y - d/2, d/2)
  }
}