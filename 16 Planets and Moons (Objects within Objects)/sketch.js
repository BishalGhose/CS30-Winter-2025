// Planets and Moons(Objects within Objects)
// Bishal Ghose
// 3/19/2025





let myPlanet;



function setup() {
  createCanvas(windowWidth, windowHeight);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(0);
  myPlanet.display();
}

function mousePressed(){
  myPlanet.createMoon();
}


class Planet{
  //1. Constructor
  constructor(x,y){
    this.x = x; this.y = y; this.s = 100;
    this.moons = [];
  }
  //2. Class Functions
  display(){
    //draw the planet + all the moons
    fill(255);
    circle(this.x, this.y, this.s);
    console.log(this.moons);
    for (let i of this.moons){
      i.display();
    }
  }

  createMoon(){
    this.moons.push(new Moon());
  }

}


class Moon{
  constructor(){
    this.size = random(10,25);
    this.orbitRadius = random(150,470);
    this.Angle = Math.sqrt(random(0,2*Math.PI));
    this.xPos = Math.cos(this.Angle) * this.orbitRadius ;
    this.yPos = Math.sin(this.Angle) * this.orbitRadius ;
    this.rotateSpeed = random(25,125)/5000;
    this.rotationalAngle = 0;
  }

  display(){
    fill(100);
    push();
    translate(width/2, height/2);
    rotate(this.rotationalAngle);
    circle(this.xPos, this.yPos, this.size);
    pop();

    this.rotationalAngle += this.rotateSpeed;
  }
}



