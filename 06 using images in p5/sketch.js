// Image Basics
// Mr. Scott
// Feb 26, 2025


// Global Variables

let lionL, lionR;
let pinImages = []; //0-8
let facing;

function preload(){
  //function runs and won't end until all file loading is compelte
  lionL = loadImage("./assets/lion-left.png");
  lionR = loadImage("./assets/lion-right.png");
  for (let i = 0; i <= 8; i ++){
    pinImages.push(loadImage("./assets/pin-0"+ i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);

  image(pinImages[frameCount], width/2, height/2);
  frameCount++;
  if(frameCount % 3 === 0) {
    currentFrame++
    if(currentFrame > 8) currentFrame = 0;
  }




  drawLion();




}

function drawLion(){
  //Line code
  let sizeX = lionL.width /2;
  let sizeY = lionL.height /2;
  
  if(movedX > 0) {facing = "right"}
  else if(movedX < 0) {facing = "left"}
  
  if (facing === "left"){
    image (lionL, mouseX, mouseY, sizeX, sizeY);
  }
  else {
    image (lionR, mouseX, mouseY, sizeX, sizeY);
  }
}