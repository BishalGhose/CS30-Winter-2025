// Refactoring 1
// Bishal Ghose


let xPos = 200; let yPos = 300; 
let xSpeed, ySpeed;
const rectWidth = 250; const rectHeight = 75;


function setup() {
	createCanvas(windowWidth, windowHeight);
  xSpeed = random(3,8); ySpeed = random(3,8);
}


function draw() {
	moveRectangle();
	background(80, 80, 80);
	rect(xPos, yPos, rectWidth, rectHeight);
}


function moveRectangle() {
	xPos += xSpeed; 
	yPos += ySpeed;

	if (yPos >= height - rectHeight || yPos <= 0){
    ySpeed = -ySpeed;
  }

	if (xPos >= width - rectWidth || xPos <= 0){
    xSpeed = -xSpeed;
  }
}