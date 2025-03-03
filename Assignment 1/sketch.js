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


//Loads the font from scripts parent
function preload(){
  nameFont = loadFont("./Sinethar.otf"); 
}


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
  case 1: // Night Time
    drawNightGradient(1);
    drawStars(1.5);
    drawMoon();
    drawTerrain(70);
    drawTree();
    break;

  case 2: // Day Time
    drawDayGradient(1);
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
  stroke(50,100); fill(120);
  strokeWeight(17);
  circle(mouseX,mouseY,200);
  noStroke();

  //Draws the specs/craters on the moon 
  fill(70);
  let CoordsAndSizes = [[2,48,50], [-10, -70, 25], [-50, -20, 40], [40, -30,55], [-52, 33, 20], [55, 27, 27]];
  for (let coords of CoordsAndSizes){
    circle(mouseX + coords[0], mouseY + coords[1], coords[2]);
  }
}


//Draws a sun and makes it follow the players mouse
function drawSun(){
  stroke(255,255,0,100); fill(255,255,0); strokeWeight(17);
  circle(mouseX,mouseY,200);
  noStroke();

  //Draws the suns smile and eyes
  fill(0, 100); circle(mouseX,mouseY,150); 
  fill(255,255,0); circle(mouseX,mouseY-10,147);   
  fill(0, 100); circle(mouseX+40,mouseY-30,25); circle(mouseX-40,mouseY-30,25); 
} 
 
// Draws stars randomly throughout the screen with a rate variable controlling the density
function drawStars(rate) {
  for (let stars = 0; stars <= random(28,40) * rate; stars++){
    fill(255,255,0,random(100,255));
    let randomSizeOfStar = random(4,9);
    circle(random(0,windowWidth), random(0,windowHeight/1.3), randomSizeOfStar);
  }
}

// Draws a gradient blue sky with rectangles and mapped function and changes shade based on mouse y position
function drawDayGradient(h){
  let mappedMouseY = map(mouseY, 0, windowHeight, 0, 255)
  for (let y = 0; y <= windowHeight; y++){  
    let mappedBlue = map(y, windowHeight, 0, 0, 255); 
    fill(-(mappedMouseY/2)+60, mappedBlue-(mappedMouseY/2)+60, 255-(mappedMouseY/2)+60);  
    rect(0, y, windowWidth, h);   
  } 
}  


// Draws a gradient purple night sky using rectangles and mapped function
function drawNightGradient(h){
  let mappedMouseY = map(mouseY, 0, windowHeight, 0, 255) ;
  for (let y = 0; y <= windowHeight; y++){  
    let mappedPurple = map(y, windowHeight, 0, 0, 255); 
    fill(mappedPurple/4, 0, mappedPurple/2);  
    rect(0, y, windowWidth, h); 
  }
}



// Draws my name in the bottom right corner
function drawMyName(){
  fill(0);
  textFont(nameFont,30);
  text("Bishal", windowWidth - 80, windowHeight/1.01);
}


// Draws clouds using elipses and a normal distribution to make them more dense near the top
function drawClouds(rate){
  for (let clouds = 0; clouds < rate; clouds ++){
    fill(random(220,255)); 
    ellipse(random(0,windowWidth), randomGaussian(120,100), random(190,250), random(100,120));
  }  
}


// Draws a tree using lines and circles
function drawTree(){ 
  //branch
  stroke(154,92,66); strokeWeight(50);
  line(27 * windowWidth/140, windowHeight/2 + windowHeight/3, windowWidth/2.8, 13 * windowHeight/18); 
 
  //trunk
  strokeWeight(100);
  line(27 * windowWidth/140, windowHeight/2, 27 * windowWidth/140, windowHeight);
  noStroke();

  //Branch Leaves
  fill(getSeasonColor());
  circle(windowWidth/2.8, 13 * windowHeight/18, 130);

  //Main Leaves
  let listofvalues = [[28,2,300], [47,1.85,200], [7,1.8,170], [28,1.8,230]]
  for (let x of listofvalues){
    fill(getSeasonColor());
    circle(x[0] * windowWidth/140, windowHeight/x[1], x[2]);
  }
}


// Sets up a switch case based on currentBack to return a shade of the color associated with the season
function getSeasonColor() {
  switch (currentBack) {
    case 1: // Summer Season
      randomDarkness = random(0,100);
      return [randomDarkness,random(200,255),randomDarkness];
      break;

    case 2: // Winter Season
      return [255-random(0,30)];
      break;

    case 3: // Fall Season
      return [255-random(0,25), 165-random(-25,25), random(0,25)];
      break;

    case 4: // Pink/Spring Season
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
