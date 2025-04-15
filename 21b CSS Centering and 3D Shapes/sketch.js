// CSS Centering and 3D Shapes
// Bishal Ghose
// April 15, 2015

let angle = 5;

function setup() {
  createCanvas(500,500, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(220); // WEBGL has 0,0 at the center
  lights();
  rotateX(-20,)
  rotateY(frameCount);

  angle = map(mouseX, 0, width, -120, 120);
  for (let i = 0; i < 360; i += 45){
    push();
    rotateY(i);
    drawBox(30);
    pop();
  }
  drawBox(30);
}

function drawBox(size){
  if ( size > 3){
    rotateZ(angle);
    translate(size * 1.5, 0);
    box(size, size)

    drawBox(size * 0.8)
  }
}