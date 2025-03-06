// Perlin Terrain
// Bishal Ghose
// Date



let noiseIncrement = 1;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}

function draw() {
  background(255); noStroke(); fill(0);
  generateTerrain();
}

function generateTerrain(){
  noStroke();
  fill(255,0,0);
  for (let x = 0; x < windowWidth; x+= noiseIncrement){
    let variable = noise((x+time)/100);
    let mapNoisedVariable = map(variable, 0, 1, windowHeight/2 , windowHeight);
    rect(x, windowHeight, x + noiseIncrement, mapNoisedVariable);
  }
  time += 1;
}