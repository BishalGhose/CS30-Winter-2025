// Perlin Terrain
// Bishal Ghose
// Date



let time = 0;
let noiseIncrement = 1 ;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}

function draw() {
  background(255); noStroke(); fill(0);
  generateTerrain();
}

function generateTerrain(){
  for (let x = 0; x < windowWidth; x += noiseIncrement){
    let rectHeight = noise((x + time )/100) ;
    let mappedRectHeight = map(rectHeight, 0, 1, windowHeight/2, windowHeight);
    rect(x, windowHeight, x + noiseIncrement, mappedRectHeight);
  }
  time += 1;
}