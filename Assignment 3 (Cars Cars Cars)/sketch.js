// Cars Cars Cars
// Bishal Ghose
// Date


let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  for (let i = 0; i < 20; i++){
    eastbound.push(new Car1(random(0, width,), "east"));
    westbound.push(new Car1(random(0, width,), "west"));
  }
}

function draw() {
  noStroke();
  createCanvas(windowWidth, windowHeight);
  background(220);
  drawRoad();
  noStroke();
  for (let i = 0; i < eastbound.length; i++){
    eastbound[i].action();
  }
  for (let i = 0; i < westbound.length; i++){
    westbound[i].action();
  }
}






function drawRoad() {
  stroke(255, 0, 0);
  strokeWeight(10);
  fill(0);

  rect(width/2, height/2, width + 10, height/2);

  stroke(255, 255, 0);
  strokeWeight(4);

  for (let i = 0; i <= width; i += 30){
    line(i+ 7.5, height/2, i + 22.5, height/2);
  }
}


class Car1 {
  constructor(x, direction){
    this.type = round(random(0,1));
    this.color1 = [random(255), random(255), random(255)];
    this.color2 = random(255);
    this.x = x;
    if (direction === "east"){
      this.y = random(0, height/2);
    }
    else {
      this.y = random(height/2, height);
    }
    this.width = random(30,40);
    this.height = random(20,30);
    this.xSpeed = random(1,4);

    this.direction = direction;
  }
  display(){
    switch (this.type) {
    case 0: //Truck
      rect(this.x, this.y, this.width, this.height);
      if (this.direction === 'east') {
        rect(this.x - this.width/1.99, this.y, this.width, this.height);
      }
      else {
        rect(this.x + this.width/1.99, this.y, this.width, this.height);
      }
    case 1: //Car
      circle(this.x, this.y, 20);
    }
  }
  speedUp(){
    if (this.xSpeed < 8){
      this.xSpeed += random(0,2);
    }
  }
  speedDown(){
    let randomNumber = random(0,2);
    if (this.xSpeed - randomNumber <= 0){
      this.xSpeed = 1;
    }
    else{
      this.xSpeed -= randomNumber;
    }
  }
  changeColor(){
    this.color1 = [random(255), random(255), random(255)];
  }
  move(){
    if (this.direction === "east"){
      this.x -= this.xSpeed;
      if (this.x <= 0){
        this.x = width;
      }
    }
    else {
      this.x += this.xSpeed;
      if (this.x >= width){
        this.x = 0;
      }
    }
  }
  action(){
    fill(this.color1);
    this.move();
    if (round(random(0,100)) === 1){
      this.speedUp();
    }
    if (round(random(0,100)) === 1){
      this.speedDown();
    }
    if (round(random(0,100)) === 1){
      this.changeColor();
    }
    this.display();
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