// OneShot (Final Project)
// Bishal
// Date




let modelObj;

function preload() {
  modelObj = loadModel("assets/untitled.obj");
}


function setup() {
  createCanvas(1000, 650, WEBGL);
}

function draw() {
  background(200);
  scale(100);

  rotate(0.01 * frameCount, [0,0,0]);
  model(modelObj);
}
