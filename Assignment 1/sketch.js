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
  console.log(random(1,10));
}

function drawStars(rate, seedNumber) {
  noStroke();
  randomSeed(seedNumber);
  for (let stars = 0; stars <= random(20,30) * rate; stars++){
    let randomSizeOfCircle = random(40,60)/10;
    circle(random(0,windowHeight), random(0,windowWidth/2), randomSizeOfCircle);
    fill(255,255,0,random(100,255));
  }
}


function drawTerrain(seedNumber) {
  fill(255,255,0);
  circle(windowHeight/2,windowWidth, windowHeight, windowWidth-windowWidth/10);
  for (let blocks = 0; blocks <= 70; blocks++){
    randomDarkness = random(0,100);
    fill(randomDarkness,random(200,255),randomDarkness);
    circle(random(0,windowHeight), random(windowWidth/1.5, windowWidth),random(160,350));
  }
}

function mouseClicked(){
  seed = seed + 1;
}