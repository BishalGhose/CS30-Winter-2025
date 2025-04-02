// Perlin Terrain
// Bishal Ghose
// Date


//Setting the global variables 
let noiseIncrement = 1;
let time = 0;
let averageHeight = 0;
let biggestHeightCoords;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  frameRate(10);
}


//Calling the functions every frame
function draw() {
  background(255); noStroke(); fill(0);

  generateTerrain();
  displayAverageHeight(averageHeight);
  drawFlag();
}


function generateTerrain(){
  let listOfHeights = [];
  let biggestHeight = windowHeight;

  noStroke(); fill(0);

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

  time += 1;
}

function drawFlag() {
  let xCord = biggestHeightCoords[0] + noiseIncrement/2;
  let yCord = biggestHeightCoords[1];

  strokeWeight(5);
  line(xCord, yCord, xCord, yCord - 50);

  fill(255, 0, 0);
  triangle(xCord, yCord - 25, xCord, yCord - 50, xCord + 25, yCord - 37.5);
}

function displayAverageHeight(averageHeight){
  stroke(255,0,0); strokeWeight(2);

  line(0, averageHeight, windowWidth, averageHeight);
  fill(255);
  text("Average Height = " + Math.round(Math.abs(averageHeight - windowHeight)) + " pixels", windowWidth*1/70, windowHeight*39/40);
}


// When the left or right arrow keys are pressed the size of the terrain rectangle changes 
function keyPressed(){
  if (keyCode === 37){ // Left arrow key = bigger rectangles
    noiseIncrement *= 1.1;
  }
  else if (keyCode === 39){
    noiseIncrement *= 0.9; // smaller arrow key = bigger rectangles
  }
}