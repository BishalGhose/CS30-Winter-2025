// User Events
// Bishal Ghose
// Feb 7, 2025

// Global Variable Declarations
// Define your globals here.
// you can only store simple/primitive data
// at this point. (no system variables)

let tSize = 10;
let x; // declaration only

function setup() {
  // runs once, right at the start
  createCanvas(windowWidth, windowHeight);
  x = width/2; //initialization, do in steup()
  rectMode(CENTER);
}

function draw() {
  //runs over and over, targeting 60 fps
  background(220);
  //console.log("Current Frame: " + frameCount);
  
  //---------Mouse Section -------------
  fill("green"); //fill/stroke can user color strings
  textSize(tSize);
  text(mouseX + "," + mouseY + " " + mouseButton, mouseX, mouseY);

  //--------Keyboard Section-------------
  fill(123,213,56);
  square(x,200,50,5);

  if (keyIsDown(LEFT_ARROW)){
    x = x-5;
    if (x < 0) {
      x = width;
    }
  if (keyIsDown(RIGHT_ARROW)){
    x = x + 5;
    if (x > width) {
      x = 0;
    }
  }
  
}

function mousePressed(){
  //this is called Automatically...do NOT call it
  //yourself.
  // This is called ONCE PER MOUSE BUTTON PRESS
  tSize = random(5,100);
}