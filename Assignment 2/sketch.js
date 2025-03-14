// Perlin Terrain
// Bishal Ghose
// Date



let noiseIncrement = 1;
let time = 0;
let averageHeight = 0;
let biggestHeightCoords;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}

function draw() {
  background(255); noStroke(); fill(0);
  generateTerrain();
}

function generateTerrain(){
  let listOfHeights = [];
  let biggestHeight = windowHeight;
  noStroke();   fill(0);
  for (let x = 0; x < windowWidth; x += noiseIncrement){
    let noiseVariable = noise((x + time)/100);
    let mapNoisedVariable = map(noiseVariable, 0, 1, windowHeight/2 , windowHeight);
    listOfHeights.push([mapNoisedVariable, x]);
    rect(x, windowHeight, x + noiseIncrement, mapNoisedVariable);
  }

  for (let i of listOfHeights){
    averageHeight += i[0];
    if (i[0] < biggestHeight) {
      biggestHeight = i[0];
      biggestHeightCoords = [i[1], biggestHeight];
    }
  }

  averageHeight = averageHeight/listOfHeights.length;
  drawFlag();
  time += 1;
}

function drawFlag() {
  strokeWeight(5);
  stroke(100);
  line(biggestHeightCoords[0], biggestHeightCoords[1], biggestHeightCoords[0], biggestHeightCoords[1] - 50);
}