const myObject = {
    property: 'Value!',
    otherProperty: 77,
    obnoxious : function() {
        console.log("Hello World");
   }
}

// dot notation
// myObject.obnoxious(); // 'Value!'

// bracket notation
// myObject["obnoxious"](); // [Function]

// example one
const playerOneName = "tim"
const playerTwoName = "jenn"
const playerOneMarker = "X"
const playerTwoMarker = "O"

// example two
const playerOne = {
  name: "tim",
  marker: "X"
}

const playerTwo = {
  name: "jenn",
  marker: "O"
}

function printName(player) {
    console.log(player.name)
}

// printName(playerOne);
// printName(playerTwo);

// console.log(playerOneName);
// console.log(playerTwoName);

function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function() {
        console.log(name)
    }
}
const player = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

// console.log(player) // 'steve'

// player.sayName();
// player2.sayName();

function book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${read}`);
    }
}

const book1 = new book("The Hobbit","J.R.R. Tolkien",295,"not read yet");

book1.info();