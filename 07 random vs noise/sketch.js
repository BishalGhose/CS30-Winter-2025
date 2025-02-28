// Random vs Noise
// My. Scott
// Feb 28th, 2025
//
// A look at different ways to use
// Unpredictablity in our programs..

let mySeed;
let noiseStart = 5
let noiseTime;
let noiseSpeed = 0.1;
let randomNum;

function setup() {
  createCanvas(600,600);
  textAlign(CENTER,CENTER);
  mySeed = random(1000);
  //randomNumbers();
}

function draw() {
  noiseTime = noiseStart;
  randomSeed(mySeed);
  background(220);
  randomNumbers();
  noiseNumber();
  noiseStart += noiseSpeed;
}

function noiseNumber(){
  //display a line of several numbers
  //generated wit hthe noise() function. 1-100
  let x = 2;
  while (x <= 500){
    let randomNum = noise(noiseTime);
    randomNum = round(map(randomNum, 0, 1, 1, 100)); // 1-100
  
    fill(140,220,140);
    circle(x,400,randomNum);
    fill(0);
    text(randomNum, x , 400);
    x += 50;
    noiseTime += noiseSpeed;
  }




}

function randomNumbers(){
  //display a line of several numbers generateds
  //with the random() function. 1-100
  // - these should be uniformly distrubted.
  let x = 100 //100, 150, 200, 250....500
  while (x <= 500){
    let randomNum = round(random(1,100));
    fill(200,80,80); noStroke();
    circle(x,200, randomNum);
    fill(0);
    text(randomNum, x, 200);
    x += 50;
  }

}


















