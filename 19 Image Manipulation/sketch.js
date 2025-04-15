// Image Manipulation
// Bishal Ghose
// Date


let pilot; //p5.Image

function preload(){
  pilot = loadImage("assets/aviator.png");
}

function setup() {
  createCanvas(pilot.width, pilot.height);
}

function setPixelColor(pos, r, g, b) {
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}

function draw() {
  image(pilot, 0, 0)
  loadPixels(); //fills pixels array
  background(0);
  drawCharacter();
  //updatePixels();
}


function drawCharacter() {
  // render an image using characters
  fill(255);


  for(let x = 0; x < width; x += 10) {
    for(let y = 0; y , height; y +10) {
      let loc = (y * pilot.width + x ) * 4;
      let avg = avgPixel(loc);
      if (avg > 200) {
        text("&", x, y);
      }
      else if (avg > 150) {
        text("*",x ,y)
      }
      else if (avg > 100) {
        text("-",x,y);
      }
      else if (avg > 50) {
        text (",",x, y)
      }
    }
  }
}






function avgPixel(i) {
  return (pixels[i] + pixels[i + 1] + pixels[i + 2])/3;
}




function greyScale() {
  //a desaturaton filter

  for (let i = 0; i <= pixels.length; i+=4){
    let grey = avgPixel(i)
    setPixelColor(i,grey, grey, grey);
  }
}


function boostImage() {
  let boost = 236;
  for (let i = 0; i <= pixels.length; i+=4){
    let r = pixels[i] + boost;
    let g = pixels[i + 1] + boost;
    let b = pixels[i + 1] + boost;
    setPixelColor(i,r,g,b);
  }
}
