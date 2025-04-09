// Cars Cars Cars
// Bishal Ghose

// Space = change to red light
// Left Click = add car to eastbound/top half
// Shift + Left Click = add car to westbound/bottom half
// Right Click = remove car to eastbound/top half
// Shift + Right Click = remove car to westbound/bottom half

// Setting the global variables
let eastbound = [];
let westbound = [];
let light;
let timer = 0;
let changingLight = false;


// Creating canvas, making the light, and pushing 20 cars to each bound
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  light = new trafficLight();
  for (let i = 0; i < 20; i++){
    eastbound.push(new Car("east"));
    westbound.push(new Car("west"));
  }
}

// Drawing the road and calling the lights manager and main players for cars
function draw() {
  drawRoad();
  mainPlayer(eastbound, "east");
  mainPlayer(westbound, "west");
  lightManager();
}


/* This compares all the distances in both east/west bounds 
 & slows down/speeds up depending on it and calls .action() for every item */
function mainPlayer(boundArray, direction){
  for (let i = 0; i < boundArray.length; i++){
    for (let u = 0; u < boundArray.length; u++){
      if (i === u) {
        continue;
      }
      
      // Sets xDistance depending on direction
      let xDistance;
      if (direction === "east"){
        xDistance = boundArray[i].x - boundArray[u].x;
      }
      else {
        xDistance = boundArray[u].x - boundArray[i].x;
      }

      /* Distance comparer, if cars are too close, the front 
      one will speed up while the back one slows down*/
      let yDistance = Math.abs(boundArray[i].y - boundArray[u].y);
      if (xDistance >= 0 && xDistance <= 45 && yDistance <= 20) {
        boundArray[i].xSpeed = boundArray[u].xSpeed/2;
        boundArray[u].xSpeed *= 1.5;
      }
    }
    boundArray[i].action(); // Calls the action function for every item in array
  }
}



// Draws the road and road lines
function drawRoad() {
  stroke(255, 0, 0);
  strokeWeight(10);
  fill(0);

  rect(width/2, height/2, width + 10, 1.1 * height/2); // Road

  stroke(255, 255, 0);
  strokeWeight(4);

  // Road lines
  for (let i = 0; i <= width; i += 30){
    line(i + 7.5, height/2, i + 22.5, height/2);
  }
  noStroke();
}



// Creates the traffic light object
class trafficLight{
  // State for the color of the trafic light
  constructor(){
    this.state = "green";
  }

  // Draws the traffic light
  draw(){
    stroke(0);
    fill(this.state);
    let diameter = height/5;
    circle(diameter/2, diameter/2, diameter);
    noStroke();
  }
}


/* When the space bar is pressed and !changing light, 
 state turns to yellow and every car slows down and updates timer */
function keyPressed(){
  if (keyCode === 32 && !changingLight) {
    changingLight = true;
    light.state = "yellow";

    for (let i of eastbound.concat(westbound)){ // Combines arrays and slows all cars down
      i.xSpeed = random(1);
    }

    timer = frameCount;
  }
}


// Manager for lights
function lightManager(){
  light.draw(); 

  // When changing light = true and 120 frames passes state changes to red and all cars stop
  if (changingLight && frameCount - timer >= 120) {
    light.state = "red";
    for (let i of eastbound.concat(westbound)){
      i.xSpeed = 0;
    }
  }

  // After another 120 frames it changes to green and changingLight becomes false
  if (changingLight && frameCount - timer >= 240) {
    light.state = "green";    
    changingLight = false;
  }
}


// Creates a car object
class Car {

  // Sets the all the important variables needed for the car
  constructor(direction){
    this.type = round(random(0,1));
    this.color = [random(255), random(255), random(255)];
    this.width = random(20,30);
    this.height = random(12,16);
    this.xSpeed = random(1);
    this.direction = direction;
    this.x = random(0, width);

    // Puts y in correct lane depending on direction
    if (direction === "east"){
      this.y = random(height/4, height/2.05);
    }
    else {
      this.y = random(height/1.95, 3*height/4);
    }
  }


  // Displays the vehicle object 
  display(){
    switch (this.type) {

    case 0: // Truck
      rect(this.x, this.y, this.width, this.height);
      // Draws the front face depending on direction
      if (this.direction === 'east') {
        rect(this.x - this.width*0.7, this.y, this.width/5, this.height);
      }
      else {
        rect(this.x + this.width*0.7, this.y, this.width/5, this.height);
      }
      break;
      
    case 1: // Car
      rect(this.x, this.y, this.width * 1.3, this.height);
      
      // Draws the wheels using ellipses
      fill(255);
      ellipse(this.x - this.width * 0.6, this.y + this.height/2, 8, 4);
      ellipse(this.x - this.width * 0.6, this.y - this.height/2, 8, 4);
      ellipse(this.x + this.width * 0.6, this.y + this.height/2, 8, 4);
      ellipse(this.x + this.width * 0.6, this.y - this.height/2, 8, 4);

      break;
    }
  }

  // Speeds up the vehicle depending on how far it has gone (makes traffic look better)
  exponentialSpeedUp(){
    if (!changingLight) {
      this.xSpeed +=  map(width - this.x, 0, width, 1, 2)/50;
    }
  }

  // Speeds up the vehicle
  speedUp(){
    this.xSpeed *= 1.1;
  }

  // Slows down the vehicle
  speedDown(){
    this.xSpeed *= 0.7;
  }

  /* Sets a speed limit to the vehicle to 5 and if it exceeds 5, 
  it slows down to a random speed from 1-5 */
  speedLimit(){
    if (this.xSpeed > 5){
      this.xSpeed = random(1,5);
    }
  }

  // Sets a new rgb value to the car
  changeColor(){
    this.color = [random(255), random(255), random(255)];
  }

  // Moves the vehicles by adding/subtracting xSpeed depending on direction
  move(){
    // East
    if (this.direction === "east"){
      this.x -= this.xSpeed;
      // If vehicle goes to x=0 it teleports it back and sets a new random y value
      if (this.x <= 0){
        this.x = width;
        this.y = random(height/4, height/2.05);
      }
    }

    // West
    else {
      this.x += this.xSpeed;
      // If vehicle goes to x=width it teleports it back and sets a new random y value
      if (this.x >= width){
        this.x = 0;
        this.y = random(height/1.95, 3*height/4);
      }
    }
  }


  // Main function for calling the required functions of the vehicle
  action(){
    fill(this.color);

    this.speedLimit();
    this.move();

    // Check if changing light is not true before it runs
    if (!changingLight) {
      this.exponentialSpeedUp();

      // Sets a 1% chance for each function to be called
      let randomNum = floor(random(1,101));
      if (randomNum === 1){
        this.speedUp();
      }
      else if (randomNum === 2) {
        this.speedDown();
      }
      else if (randomNum === 3){
        this.changeColor();
      }
    }

    this.display();
  }
}


/* When mouse is released, checks if it's left button and checks
if keycode 16(shift) is down and adds cars on east/west bound */
function mouseReleased(){ 
  if (mouseButton === LEFT) { // Adds cars
    if (keyIsDown(16)) {
      westbound.push(new Car("west"));
    }
    else {
      eastbound.push(new Car("east"));
    }
  }
}


