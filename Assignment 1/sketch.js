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
  console.log(random(1,10))
}

function drawStars(rate, seedNumber) {
  fill(255,255,0);
  strokeWeight(1);
  stroke(255,255,0);
  randomSeed(seedNumber);
  for (let stars = 0; stars <= random(20,30) * rate; stars++){
    fill(255,255,0);
    strokeWeight(1);
    let randomSizeOfCircle = random(40,60)/10
    circle(random(0,windowHeight), random(0,windowWidth/2), randomSizeOfCircle);
    fill(255,255,255);
    circle(random(0,windowHeight), random(0,windowWidth/2), randomSizeOfCircle*2.9);

  }
  randomSeed();
}

function mouseClicked(){
  seed = seed + 1;
}