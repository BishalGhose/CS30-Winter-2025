// Cars Cars Cars
// Bishal Ghose
// Date


let eastbound = [];
let westbound = [];
let light;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  light = new trafficLight();

  for (let i = 0; i < 20; i++){
    eastbound.push(new Car("east"));
    westbound.push(new Car("west"));
  }
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  drawRoad();
  light.draw();
  mainPlayer(eastbound, "east");
  mainPlayer(westbound, "west");
}

function mainPlayer(boundArray, direction){
  for (let i = 0; i < boundArray.length; i++){
    for (let u = 0; u < boundArray.length; u++){
      if (i === u) {continue;}
      
      let xDistance;
      if (direction === "east"){
        xDistance = boundArray[i].x - boundArray[u].x;
      }
      else {
        xDistance = boundArray[u].x - boundArray[i].x;
      }

      let yDistance = Math.abs(boundArray[i].y - boundArray[u].y);
      if (xDistance >= 0 && xDistance <= 45 && yDistance <= 20) {
        boundArray[i].xSpeed = boundArray[u].xSpeed/2;
        boundArray[u].xSpeed *= 1.5;
      }
    }
    boundArray[i].action();
  }
}




function drawRoad() {
  stroke(255, 0, 0);
  strokeWeight(10);
  fill(0);

  rect(width/2, height/2, width + 10, 1.1 * height/2);

  stroke(255, 255, 0);
  strokeWeight(4);

  for (let i = 0; i <= width; i += 30){
    line(i + 7.5, height/2, i + 22.5, height/2);
  }
  noStroke();
}


class trafficLight{
  constructor(){
    this.state = "green";
  }

  draw(){
    stroke(0);
    fill(this.state);
    let diameter = height/5;
    circle(diameter/2, diameter/2, diameter);
    noStroke();
  }
}


function keyPressed(){
  if (keyCode === 32){
    let savedFrameCount = frameCount;
    this.state = "yellow";
    while (frameCount - savedFrameCount <= 120) {
      console.log(frameCount,savedFrameCount);
      continue;
    }
    savedFrameCount = frameCount;
    this.state = "red";
    while (frameCount - savedFrameCount <= 120) {
      continue;
    }
    this.state = "green"; 
  }
}












class Car {
  constructor(direction){
    this.type = round(random(0,1));
    this.color = [random(255), random(255), random(255)];
    this.width = random(20,30);
    this.height = random(12,16);
    this.xSpeed = random(1);
    this.direction = direction;
    this.x = random(0, width);

    if (direction === "east"){
      this.y = random(height/4, height/2.05);
    }
    else {
      this.y = random(height/1.95, 3*height/4);
    }
  }

  display(){
    switch (this.type) {

    case 0: //Truck
      rect(this.x, this.y, this.width, this.height);
      if (this.direction === 'east') {
        rect(this.x - this.width*0.7, this.y, this.width/5, this.height);
      }
      else {
        rect(this.x + this.width*0.7, this.y, this.width/5, this.height);
      }
      break;
      
    case 1: //Car
      rect(this.x, this.y, this.width * 1.3, this.height);

      fill(255);
      ellipse(this.x - this.width * 0.6, this.y + this.height/2, 8, 4);
      ellipse(this.x - this.width * 0.6, this.y - this.height/2, 8, 4);
      ellipse(this.x + this.width * 0.6, this.y + this.height/2, 8, 4);
      ellipse(this.x + this.width * 0.6, this.y - this.height/2, 8, 4);

      break;
      
    }
  }

  speedUp(){
    this.xSpeed *= 1.5;
  }

  speedDown(){
    this.xSpeed *= 0.9;
  }

  speedLimit(){
    if (this.xSpeed > 5){
      this.xSpeed = random(1,5);
    }
  }



  changeColor(){
    this.color = [random(255), random(255), random(255)];
  }

  move(){
    if (this.direction === "east"){
      this.x -= this.xSpeed;
      if (this.x <= 0){
        this.x = width;
        this.y = random(height/4, height/2.05);
      }
    }

    else {
      this.x += this.xSpeed;
      if (this.x >= width){
        this.x = 0;
        this.y = random(height/1.95, 3*height/4);
      }
    }
  }



  action(){
    fill(this.color);

    this.speedLimit();
    this.move();
    this.xSpeed +=  map(width - this.x, 0, width, 1, 2)/50;

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

    this.display();
  }
}



function mouseReleased(){
  if (mouseButton === LEFT) {
    if (keyIsDown && keyCode === 16) {
      westbound.push(new Car("west"));
    }
    eastbound.push(new Car("east"));
  }

  else if (mouseButton === RIGHT) {
    if (keyIsDown && keyCode === 16) {
      westbound.pop();
    }
    eastbound.pop();
  }
}



//display()     renders the vehicle (based on its type property)

//move()    updates the x position based on the xSpeed property. If the vehicle exits the side of the Canvas, wrap around to the opposite side.

//speedUp()    increase xSpeed slightly (up to a max of 15 or -15, depending on direction)

//speedDown()   decrease xSpeed slightly (make sure to not slow down past 0. Vehicles should not be able to change direction)

//changeColor()    give the vehicle a new primary color

//action()   this will be main function for a Vehicle, which will call all of the other functions with the following frequency:

//move()                      every frame
//speedUp()              1% chance to call each frame
//speedDown()       1% chance to call each frame
//changeColor()      1% chance to call each frame
//display()                    every frame