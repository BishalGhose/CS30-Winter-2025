// Puzzle Assignment
// Bishal Ghose

// Space = Switch between cross/square
// Shift = Cheat mode

// Sets the important variables
const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[],[],[],[]];
let shapeState = 1;
let direction;
let activeSquares;


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 1);  // Changes color mode range to 0-1
  textSize(200);
  textAlign(CENTER, CENTER);

  // Randomly fills the arrays with 0 or 1's
  for (let i = 0; i < NUM_ROWS; i++) {
    for (let x = 0; x < NUM_COLS; x++) {
      gridData[i].push(round(random(0,1)));
    }
  }

  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;
}

function draw() {
  determineActiveSquare();   // Figure out which tile the mouse cursor is over
  drawGrid();
  winChecker();               // Render the current game board to the screen (and the overlay) 
}

// Gets the summed values of the entire array, then if its equal to 0 or 20 the player wins and displays text
function winChecker(){
  let summedValues = 0;
  for (let i of gridData.flat()){
    summedValues += i;
  }

  if (summedValues === 0 || summedValues === 20){
    fill(0,1,0);
    text("You Win!", width/2, height/2);
  }
}

// Flips every item in the gridData array that is also present in the active square array
function mousePressed(){
  for (let i of activeSquares) {
    flip(i[0], i[1]);
  }
}

function flip(col, row){
  // given a column and row for the 2D array, flip its value from 0 to 1 or 1 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      gridData[row][col] = 1 - gridData[row][col];
    }
  }
}

function determineActiveSquare(){
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);


  // Uses switch to determine the activeSquares depending on the shapeState
  switch (shapeState) {
  case 0: // 1 Square state
    activeSquares = [[currentCol, currentRow]];
    break;

  case 1: // Cross state
    activeSquares = [[currentCol, currentRow], [currentCol + 1, currentRow],  [currentCol - 1, currentRow], [currentCol, currentRow + 1], [currentCol, currentRow - 1]];
    break;

  case 2: // Square state
    determineMouseDirection();

    // Determines which way to shape the 2x2 square depending on direction
    if (direction === 45){
      activeSquares = [[currentCol, currentRow], [currentCol + 1, currentRow], [currentCol, currentRow - 1], [currentCol + 1, currentRow - 1]];
    }
    else if (direction === 135){
      activeSquares = [[currentCol, currentRow], [currentCol - 1, currentRow], [currentCol, currentRow - 1], [currentCol - 1, currentRow - 1]];
    }
    else if (direction === 225){ 
      activeSquares = [[currentCol, currentRow], [currentCol - 1, currentRow], [currentCol, currentRow + 1], [currentCol - 1, currentRow + 1]]; 
    }
    else {
      activeSquares = [[currentCol, currentRow], [currentCol + 1, currentRow], [currentCol, currentRow + 1], [currentCol + 1, currentRow + 1]];
    } 
    break;
  }
}

function drawGrid(){
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      fill(gridData[y][x]); 
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);

      // Fills every active square with a green overlay
      for (let i of activeSquares){
        if (x === i[0] && y === i[1]){
          fill(0,1, 0, 0.5);
          rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
        }
      }
    }
  }
}


// If shift is pressed then shapeState goes to 1 square state)
function keyPressed(){
  if (keyCode === 16){ 
    shapeState = 0;
    return;
  }

  // If space is pressed and shift is not down switches between cross/square state
  if (keyCode === 32 && !keyIsDown(16)) {
    switch (shapeState) {
    case 1: 
      shapeState = 2;
      break;
    case 2:
      shapeState = 1;   
      break;
    }
  }
}

function keyReleased(){
  // If shift is released then shapeState goes to cross state
  if (keyCode === 16) {
    shapeState = 1;
  }
}  



function determineMouseDirection(){
  // Determines the distance of the mouse relative to the center of the current square
  let dx = mouseX - currentCol * rectWidth - rectWidth/2;
  let dy = mouseY - currentRow * rectHeight - rectHeight/2;

  // Using that relative distance, it checks the relative corner the mouse is in and sets the direction
  if (dy <= 0){
    if (dx <= 0){
      direction = 135;
    }
    else {
      direction = 45; 
    }
  }
  else {
    if (dx <= 0){
      direction = 225;
    }
    else {
      direction = 315;
    }
  }
}