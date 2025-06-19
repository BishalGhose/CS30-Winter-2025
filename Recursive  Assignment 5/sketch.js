// Recursion Assignment
// Bishal Ghose

// Starting Seed
let seed = 1;
let leafTable = []; branchTable = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}


// Calls the recursive branches and draw leafs and sets the background, seed, stroke, strokeweight
function draw() {
  background(0);
  leafTable = []; branchTable = [];
  randomSeed(seed);
  recursiveTree(width/2, height, 8, 250, 15, 255, 3 * Math.PI/2, 500);
  drawTree();
}


function recursiveTree(x, y, depth, len, weight, transparency, direction, circleSize) {
  if (depth <= 5){ // Pushes the values for the leaf into the table and returns once depth hits 0
    leafTable.push([x, y, circleSize]);
    if (depth === 0){
      return;
    }
  }

  // Makes 2-4 random branches
  for (let i = 1; i <= Math.floor(random(2,4)); i ++){
    // Finds the x and y using trig functions and pushes branch info into table
    let finalX = x + cos(direction) * len;
    let finalY = y + sin(direction) * len;
    branchTable.push([x, y, finalX, finalY, transparency, weight]); 

    // Recursive call
    recursiveTree(finalX, finalY, depth - 1, len * random(0.65, 0.75), weight  * 0.75, transparency  *  0.5, direction + random(-Math.PI/4, Math.PI/4), circleSize * 0.75);
  }
}


// Draws Tree (I know i could have put this in the recursive function but I wanted the leaves not to overlap with branches)
function drawTree(){
  for (let i of leafTable){ // Draws Leaves
    fill(0, random(180,255), 0);
    noStroke();
    circle(i[0], i[1], i[2]);
  }

  for (let i of branchTable) { // Draws Branches
    stroke(150, 75, 0, i[4]); 
    strokeWeight(i[5]);
    line(i[0], i[1], i[2], i[3], i[4]); 
  }
}


// Changes seed every time mouse is clicked
function mouseClicked(){
  seed += 1;
}