// Scene Assignment
// Bishal Ghose
// 2/11/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//Sets the important variables needed for the game
let dayCycle = 1;
let seed = 1;
let currentBack = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  //Resizes canvas , sets no stroke, sets the seed
  resizeCanvas(windowWidth, windowHeight);
  noStroke();
  randomSeed(seed);

  //Manager for day/night cycle, draws stuff like sun, clouds, stars depending on day/night
  switch(dayCycle){
  case 1:
    background(0);
    drawStars(1.5);
    drawMoon();
    drawTerrain(70);
    break;
  case 2: 
    background(0,220,255);
    drawTerrain(70);
    drawClouds(12);  
    break;
  }
  console.log(seed);
}


function drawMoon(){
  stroke(50,50,50,100);
  fill(120,120,120);
  strokeWeight(17);
  circle(mouseX,mouseY,200);
  noStroke();

  fill(70);
  circle(mouseX + 10,mouseY + 40,50);
  circle(mouseX - 10,mouseY - 70,20);
  circle(mouseX - 50,mouseY - 20,40);
  circle(mouseX - 50,mouseY - 20,60);
}


//Draws stars randomly throughout the screen with a rate variable controlling the density
function drawStars(rate) {
  for (let stars = 0; stars <= random(28,40) * rate; stars++){
    fill(255,255,0,random(100,255));
    let randomSizeOfStar = random(4,9);
    circle(random(0,windowWidth), random(0,windowHeight/1.3), randomSizeOfStar);
  }
}


//Draws clouds using elipses and a normal distribution to make them more dense near the top
function drawClouds(rate){
  for (let clouds = 0; clouds < rate; clouds ++){
    fill(random(220,255)); 
    ellipse(random(0,windowWidth), randomGaussian(120,100), random(190,250), random(100,120));
  }  
}


//Draws random terrain using circles and determines the season depending on the value of "currentBack"
function drawTerrain(rate) {
  switch (currentBack) {
  case 1: //Summer Season
    for (let chunks = 0; chunks <= rate; chunks++){
      randomDarkness = random(0,100);
      fill(randomDarkness,random(200,255),randomDarkness);
      circle(random(0,windowWidth), random(windowHeight-chunks, windowHeight),random(200,400));
    }
    break;
  case 2: //Winter Season
    for (let chunks = 0; chunks <= rate; chunks++){
      fill(255-random(0,30));
      circle(random(0,windowWidth), random(windowHeight-chunks, windowHeight),random(200,400));
    }
    break;
  case 3: //Fall Season
    for (let chunks = 0; chunks <= rate; chunks++){
      fill(255-random(0,25), 165-random(-25,25), random(0,25));
      circle(random(0,windowWidth), random(windowHeight-chunks, windowHeight),random(200,400));
    }
    break;
  case 4: //Pink Season
    for (let chunks = 0; chunks <= rate; chunks++){
      fill(255-random(0,20), 192-random(-20,20), 203-random(-12,12));
      circle(random(0,windowWidth), random(windowHeight-chunks, windowHeight),random(200,400));
    }
    break;
  }


}


//Changes the seed when mouse is pressed and manages the currentBack variable based on if the middle mouse button is pressed
function mousePressed(){
  seed += 1;
  console.log(mouseButton);
  if (mouseButton === CENTER){
    if (currentBack === 4){
      currentBack = 1;
    }
    else {
      currentBack += 1;
    }
  }
}

//When a key is pressed it checks if it's keycode 32(Space Bar) then changes the day/night cycle variable and changes the seed
function keyPressed(){
  if (keyCode === 32) {
    switch (dayCycle){
    case 1: 
      dayCycle = 2;
      break;
    case 2:
      dayCycle = 1; 
      break;
    }
    seed += 1;
  }
}

