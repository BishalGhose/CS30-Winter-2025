// Perlin Terrain
// Bishal Ghose
// Date



let noiseIncrement = 0.01;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}

function draw() {
  rectMode(CORNERS);
  generateTerrain();
}



function generateTerrain(){
  noStroke();
  fill(255,0,0);
  for (let x = 0; x < windowWidth; x+= noiseIncrement){
    let rectHeight = noise(x) ;
    let mappedRectHeight = map(rectHeight, 0,1,windowHeight*0.5, windowHeight);
    console.log(x,windowHeight, x + noiseIncrement, mappedRectHeight);
    rect(x,windowHeight, x + noiseIncrement, mappedRectHeight);
  }
}