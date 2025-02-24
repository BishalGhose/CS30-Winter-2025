// Drawing with Single Loops
// Bishal Ghose
// Feb 24th


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //gradientBackground();
  //circleline();
  drawcircles(10);
}

function gradientBackground(){
  //ceate a gradient to use as background
  let h = 10;

  //use a loop to draw veritcal stack of rectangles


  for (let y = 0; y < height; y+= h){
    let mappedY = map(y,0,height,0,255);
    let reversedY = map(y,0,height,255,0);

    fill(mappedY, reversedY, 255);
    noStroke();
    rect(0, y, width, h);
  }
}

function circleline(){
  //use a loop (for or while) to draw a line
  // of circle side by side
  let d = 40; //diamter of each circle
  let y = height/2;
  let xStart = 0;
  let xEnd = width/2;

  //use a loop to do the drawing
  for(let x = xStart; x <= xEnd; x+=d){
    //x: 0 40 80 120 160 200 240
    circle(x,y,d);
  }
}

function drawcircles(amountOfCircles){
  for (let x = 0; x <= amountOfCircles; x++){
    circle(width/amountOfCircles * x, 0, 25);
    line(width/amountOfCircles * x, 0, mouseX, mouseY);
    circle(width/amountOfCircles * x, height, 25);
    line(width/amountOfCircles * x, height, mouseX, mouseY);
    circle(0, height/amountOfCircles * x, 25);
    line(0, height/amountOfCircles * x, mouseX, mouseY);
    circle(width, height/amountOfCircles * x, 25);
    line(width, height/amountOfCircles * x, mouseX, mouseY);
  }
}