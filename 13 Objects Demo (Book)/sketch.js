// Object Demo (books)
// Mr. Scott
// March 12, 2025



let myBook;
let bookshelf = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  //Make 20 books in a row
  let x = 50;
  let covers = ["softcover", "hardcover", "leatherbound"];
  for(let i = 0; i < 20; i++){
    let choise = int(random(3));
    bookshelf.push(new Book("A", "Mr. Booth", 11111111, covers[choice], 200, x));
    x += 20;
  }
  myBook = new Book("CS30 Text", "Mr.Scott", 1234567891011, "leatherbound", 515, width * 0.3);
  myBook2 = new Book("A road", "Bishal", 1243554691011, "softcover", 515, width * 0.4);
  myBook3 = new Book("Journeys end", "tell", 1243554691011, "hardcover", 515, width * 0.5);
}

function draw() {
  background(220);
  myBook.display();
  myBook2.display();
  myBook3.display();
}


//Nice to organize clas at the bottom...
class Book {
  //1. constructor
  constructor(title, author, isbn, cover, pages, x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;
  }

  //2. class methods
  display(){
    //render our book object on the canvas
    rectMode(CENTER); textAlign(CENTER,CENTER);
    textSize(20);


    switch(this.cover){
      case "softcover":
        fill(250,200,150); break;
      case "hardcover":
        fill(120,255,255); break;
      case "leatherbound":
        fill(150,100,15);  break;
    }


    rect(this.x, height/2, this.pages/10, 150);
    fill(255);

    text(this.title[0], this.x, height/2 - 50);
    print("hi")
  }
  printOut(){
    //print out the data in a nice format
    console.log(this.title + ", by" + this.author);
    console.log("Lenght: " + this.pages);
    console.log("ISBN: " + this.isbn);
  }
}






