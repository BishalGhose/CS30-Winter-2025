// Warm Up Excercises:

// 1. Summing an array
// 2. Drawing with loops practice
// Bishal
// 3/3/2025



function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  for (let x = 0; x <= 10; x++){
    circle(windowWidth*(x/10), windowHeight * (x/10), 60);
    circle(windowWidth*(x/10), windowHeight - windowHeight*(x/10), 60);
  }
}






let array1 = [22, 11, 5, 5, 90, 80, 70, 60];
let sum = 0;

for (let i of array1){
  console.log(i,v)
  sum += i;
}

console.log(sum);




