// Scene Assignment
// Bishal Ghose
// 2/11/2025

// Tutorial:
// Middle mouse button: Change seasons
// Left click: Generate new terrain
// Space Bar: Changes Night/Day cycle


//Sets the important variables needed for the game
let dayCycle = 1;
let seed = 1;
let currentBack = 1;
let nameFont;


function setup() {
  createCanvas(windowWidth, windowHeight);
  nameFont = loadFont("./Sinethar.otf"); //Loads the font from scripts parent
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
    drawTree();
    break;
  case 2: 
    background(0,220,255);
    drawDayGradient();
    drawSun(); 
    drawTerrain(70);
    drawClouds(12);  
    drawTree();
    break;
  }
  drawMyName();
}

//Draws a moon and makes it follow the players mouse
function drawMoon(){
  stroke(50,100);
  fill(120);
  strokeWeight(17);
  circle(mouseX,mouseY,200);
  noStroke();

  //Draws the specs/craters on the moon
  fill(70);
  circle(mouseX + 2, mouseY + 48, 50);
  circle(mouseX - 10, mouseY - 70, 25);
  circle(mouseX - 50, mouseY - 20, 40);
  circle(mouseX + 40, mouseY - 30, 55);
  circle(mouseX - 52, mouseY + 33, 20);
  circle(mouseX + 55, mouseY + 27, 27);
}


//Draws a sun and makes it follow the players mouse
function drawSun(){
  stroke(255,255,0,100);
  fill(255,255,0);
  strokeWeight(17);
  circle(mouseX,mouseY,200);
  noStroke();
}

//Draws stars randomly throughout the screen with a rate variable controlling the density
function drawStars(rate) {
  for (let stars = 0; stars <= random(28,40) * rate; stars++){
    fill(255,255,0,random(100,255));
    let randomSizeOfStar = random(4,9);
    circle(random(0,windowWidth), random(0,windowHeight/1.3), randomSizeOfStar);
  }
}

function drawDayGradient(){
  bezier(0,windowHeight/2, windowWidth/2, windowHeight/2, windowWidth/3, windowHeight/3, windowWidth, windowHeight/2);
}


//Draws my name in the bottom right corner
function drawMyName(){
  fill(0);
  textFont(nameFont,30);
  text("Bishal", windowWidth/1.1, windowHeight/1.01);
}





//Draws clouds using elipses and a normal distribution to make them more dense near the top
function drawClouds(rate){
  for (let clouds = 0; clouds < rate; clouds ++){
    fill(random(220,255)); 
    ellipse(random(0,windowWidth), randomGaussian(120,100), random(190,250), random(100,120));
  }  
}


//Draws a tree using lines and circles
function drawTree(){ 
  stroke(154,92,66);
  //branch
  strokeWeight(50);
  line(27 * windowWidth/140, windowHeight/2 + windowHeight/3, windowWidth/2.8, 13 * windowHeight/18); 
  //trunk
  strokeWeight(100);
  line(27 * windowWidth/140, windowHeight/2, 27 * windowWidth/140, windowHeight);
  noStroke();

  //Branch Leaves
  fill(getSeasonColor());
  circle(windowWidth/2.8, 13 * windowHeight/18, 130);
  //Main Leaves
  fill(getSeasonColor());
  circle(28 * windowWidth/140, windowHeight/2, 300);
  fill(getSeasonColor());
  circle(47 * windowWidth/140, windowHeight/1.85, 200);
  fill(getSeasonColor());
  circle(7 * windowWidth/140, windowHeight/1.8, 170);
  fill(getSeasonColor());
  circle(28 * windowWidth/140, windowHeight/1.8, 230);
}



//Sets up a switch case based on currentBack to return a shade of the color associated with the season
function getSeasonColor() {
  switch (currentBack) {
    case 1: //Summer Season
      randomDarkness = random(0,100);
      return [randomDarkness,random(200,255),randomDarkness];
      break;
    case 2: //Winter Season
      return [255-random(0,30)];
      break;
    case 3: //Fall Season
      return [255-random(0,25), 165-random(-25,25), random(0,25)];
      break;
    case 4: //Pink/Spring Season
      return [255-random(0,20), 192-random(-20,20), 203-random(-12,12)];
      break;
  }
}



//Draws random terrain using circles and calls the getSeasonColor function for the color
function drawTerrain(rate) {
  for (let chunks = 0; chunks <= rate; chunks++){
    fill(getSeasonColor());
    circle(random(0,windowWidth), random(windowHeight-chunks, windowHeight),random(200,400));
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







