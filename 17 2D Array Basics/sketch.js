// 2D Array Basics
// Mr. Scott
// April 3, 2025
// Working with 2D Arrays, Visualizations

let grid = [];

let squareSize = 60;
const NUM_ROWS = 3; const NUM_COLS = 5;

function setup() {
  createCanvas(NUM_COLS * squareSize, NUM_ROWS * squareSize);
  for (let i = 0; i < 3; i ++) {
      console.log()
      grid.push([[round(random(1)) * 255], [round(random(1)) * 255],[round(random(1)) * 255],[round(random(1)) * 255],[round(random(1)) * 255]]);
  }
}

function renderGrid() {
  // interpret the information in the 2D array, and draw
  // a grid of colors on the screen to reflect it.
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x * squareSize, y * squareSize, squareSize);
    }
  }
}

function getCurrentY() {
  //determine current row of the mouse position
  let constrainedY = constrain(mouseY, 0, height - 1);
  return floor(constrainedY / squareSize);
}

function getCurrentX() {
  //determine current col of the mouse position
  let constrainedX = constrain(mouseX, 0, width - 1);
  return floor(constrainedX / squareSize);
}

function mousePressed() {
  //flip current tile to a random greyscale value
  let x = getCurrentX();
  let y = getCurrentY();

  if (y < 2){
    flip(y + 1, x);
  }
  if (y > 0){
    flip(y - 1, x);
  }
  if (x < 4){
    flip(y, x + 1);
  }
  if (x > 0){
    flip(y, x -1);
  }

}

function draw() {
  background(220);
  renderGrid();

}


function flip(y,x){
  if (grid[y][x] === 255){
    grid[y][x] = 0;
  }
  else {
    grid[y][x] = 255;
  }
}