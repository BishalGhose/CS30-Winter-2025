//Insert your Comment Header here.

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[],[],[],[]];
let clickState = 1;
let direction; 
let activeSquares;


function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 1);
  textSize(100);
  textAlign(CENTER, CENTER);
  for (let i = 0; i < 4; i++) {
    for (let x = 0; x < 5; x++) {
      gridData[i].push(round(random(0,1)));
    }
  }
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(220/255);
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  drawGrid();
  winChecker();               //render the current game board to the screen (and the overlay)
}


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


function mousePressed(){
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
  for (let i of activeSquares) {
    flip(i[0], i[1]);
  }
}

function flip(col, row){
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (gridData[row][col] === 0) gridData[row][col] = 1;
      else gridData[row][col] = 0;
    }
  }
}

function determineActiveSquare(){
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);

  let dx = mouseX - currentCol * rectWidth - rectWidth/2;
  let dy = mouseX - currentCol * rectWidth - rectWidth/2;
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
  console.log(direction);
  switch (clickState) {
  case 0:
    activeSquares = [[currentCol, currentRow]];
    break;

  case 1:
    activeSquares = [[currentCol, currentRow], [currentCol + 1, currentRow],  [currentCol - 1, currentRow], [currentCol, currentRow + 1], [currentCol, currentRow - 1]];
    break;

  case 2:
    if (direction === 45){
      activeSquares = [[currentCol, currentRow], [currentCol + 1, currentRow], [currentCol, currentRow + 1], [currentCol + 1, currentRow + 1]];
      console.log("45");
    }
    else if (direction === 135){
      activeSquares = [[currentCol, currentRow], [currentCol - 1, currentRow], [currentCol, currentRow + 1], [currentCol - 1, currentRow + 1]];
      console.log("135");
    }
    else if (direction === 225){ 
      activeSquares = [[currentCol, currentRow], [currentCol - 1, currentRow], [currentCol, currentRow - 1], [currentCol - 1, currentRow - 1]];
      console.log("225");
    }
    else {
      activeSquares = [[currentCol, currentRow], [currentCol - 1, currentRow], [currentCol, currentRow + 1], [currentCol - 1, currentRow + 1]];
      console.log("315");
    } 
    break;
  }
}

function drawGrid(){
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      for (let i of activeSquares){
        if (x === i[0] && y === i[1]){
          fill(0,255, 0);
          break;
        }
        else {
          fill(gridData[y][x]); 
        }
      }
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}


function keyPressed(){
  if (keyCode === 16){ 
    clickState = 2;
    return;
  }
}

function keyReleased(){
  if (keyCode === 16) {
    clickState = 0;
  }
  
  if (keyCode === 32 && !keyIsDown(16)) {
    switch (clickState) {
    case 1: 
      clickState = 2;
      break;
    case 2:
      clickState = 1;   
      break;
    }
  }
}  