// Perlin Terrain
// Bishal Ghose
// Date



let rectangleSize = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rectMode(CORNERS);
  generateTerrain();
}



function generateTerrain(){
  noStroke();
  fill(255,0,0);
  for (let x = 0; x < windowWidth; x+= rectangleSize){
    let variable = noise(rectangleSize/100);
    let mapNoisedVariable = map(variable, 0, 1,0 , windowHeight);
    console.log(variable, mapNoisedVariable, x, windowHeight, mapNoisedVariable);
    rect(x, windowHeight, x + rectangleSize, mapNoisedVariable);
  }
}