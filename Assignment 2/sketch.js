// Perlin Terrain
// Bishal Ghose


// Left arrow key = smaller rectangles
// Right arrow key = bigger rectangles

// Setting the global variables 
let noiseIncrement = 1;
let time = 0;
let averageHeight = 0;
let biggestHeightCoords;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}


// Calling the functions every frame
function draw() {
  createCanvas(windowWidth, windowHeight);
  background(255); noStroke(); fill(0);

  generateTerrain();
  displayAverageHeight(averageHeight);
  drawFlag();
}

// Function to generate the terrain & find biggest/average heights
function generateTerrain(){

  let listOfHeights = [];
  let biggestHeight = height;

  noStroke(); fill(0);

  // Sets a noise variable depending on the time and x-value, maps it and draws a rectangle with that variable
  for (let x = 0; x < width; x += noiseIncrement){
    let noiseVariable = noise((x + time) / 100);
    let mapNoisedVariable = map(noiseVariable, 0, 1, height/2 , height);

    listOfHeights.push([mapNoisedVariable, x]); // Saves the variables
    rect(x, height, x + noiseIncrement, mapNoisedVariable);
  }

  /* Calculates the biggest height by looping through and comparing every height
  and sets up the sum of all the heights as average height to calculate later */
  for (let i of listOfHeights){
    averageHeight += i[0];
    if (i[0] < biggestHeight) {
      biggestHeight = i[0];
      biggestHeightCoords = [i[1], biggestHeight];
    }
  }

  // Calculate average height and increase time based on rectangle width
  averageHeight /= listOfHeights.length;
  time += noiseIncrement;
}

// Gets the x,y of the biggest height and draws a flag based on those coords
function drawFlag() {
  let xCord = biggestHeightCoords[0] + noiseIncrement/2;
  let yCord = biggestHeightCoords[1];

  strokeWeight(5);
  line(xCord, yCord, xCord, yCord - 50);
  fill(255, 0, 0);
  triangle(xCord, yCord - 25, xCord, yCord - 50, xCord + 25, yCord - 37.5);
}

// Displays the average average height with text when given the average height
function displayAverageHeight(averageHeight){
  stroke(255,0,0); strokeWeight(2);

  line(0, averageHeight, width, averageHeight);
  fill(255);
  text("Average Height = " + Math.round(Math.abs(averageHeight - height)) + " pixels", width*1/70, height*39/40);
}


// When the left or right arrow keys are pressed the size of the terrain rectangle changes 
function keyPressed(){
  // Right arrow key = bigger rectangles
  if (keyCode === 39){ 
    noiseIncrement += 1;
  }

  // Left arrow = smaller rectangles
  else if (keyCode === 37 && noiseIncrement !== 1){
    noiseIncrement -= 1;
  }
}