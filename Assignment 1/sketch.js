// Scene Assignment
// Bishal Ghose
// 2/11/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let globalStatus;
let seed = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
}




function draw() {

  
  background(0);

  drawStars(1.2, seed);
  drawTerrain(seed);
  drawHouse();
  console.log(random(1,10));
}

function drawStars(rate, seedNumber) {
  noStroke();
  randomSeed(seedNumber);
  for (let stars = 0; stars <= random(28,40) * rate; stars++){
    fill(255,255,0,random(100,255));
    let randomSizeOfCircle = random(40,60)/10;
    circle(random(0,windowHeight), random(0,windowWidth/1.3), randomSizeOfCircle);
  }
}


function drawTerrain(seedNumber) {
  fill(255,255,0);
  for (let chunks = 0; chunks <= 70; chunks++){
    randomDarkness = random(0,100);
    fill(randomDarkness,random(200,255),randomDarkness);
    circle(random(0,windowHeight), random(windowWidth-chunks, windowWidth),random(200,400));
  }
}

function drawHouse(){
  let randomXPos = random(75,windowWidth-75);
  fill(255, 229, 180);
  square(randomXPos,windowWidth/1.4,150);
  fill(165, 42, 42);
  rect(randomXPos + 50, (windowWidth/1.4) + 80,50,70);
  fill(0,0,0);
  circle(randomXPos + 90, (windowWidth/1.4) + 121, 5);
}

function mouseClicked(){
  seed = seed + 1;
}