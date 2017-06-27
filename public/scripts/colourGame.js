//Variables that aren't selecting things
var numSquares = 6;
var colours = [];
var pickedColour;
//Variables that select various page elements
var squares = document.querySelectorAll(".square")
var colourDisplay = document.getElementById("colourDisplay")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){ //Makes the mode buttons only look active if selected
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");
      this.classList.add("selected");
      if(this.textContent === "Easy"){
        numSquares = 3;
      }else if(this.textContent === "Hard"){
        numSquares = 6;
      }else{
        numSquares = 9;
      }
      reset();
    })
  }
}

function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){ //add click listeners to squares
      var clickedColour = this.style.background;     //grab colour of clicked square
      if(clickedColour === pickedColour){            //compare colour & pickedColour
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again";
        changeColoursToCorrectAnswer(clickedColour);
        h1.style.background = clickedColour;
      }else{
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset(){
  colours = generateRandomColours(numSquares);  //Generate random colours from array.
  pickedColour = pickColour();                  //Picking a new colour (correct answer).
  colourDisplay.textContent = pickedColour;     //Establish one square as correct answer.
  resetButton.textContent = "New Colours";
  messageDisplay.textContent = "";
  for(var i = 0; i < squares.length; i++){      //Change the colour of each (incorrect) square.
    if(colours[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colours[i];
    }else{
      squares[i].style.display = "none";
    }
    squares[i].style.background = colours[i];
  }
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
});

function changeColoursToCorrectAnswer(colour){
  for (var i = 0; i < squares.length; i++){  //loop through all squares
    squares[i].style.background = colour;    //change each colour to match given colour
  }
}

function pickColour(){
  var random = Math.floor(Math.random() * colours.length); 
  //Picks one of the coloured squares at random (Math.Floor() cuts out the decimals I think)
  return colours[random];
}

function generateRandomColours(num){
  var arr = [];                 //make array
  for(var i = 0; i < num; i++){ //repeat num times
    arr.push(randomColour());   //get random colour and push into arr
  }
  return arr;   //return array
}

function randomColour(){
  var r = Math.floor(Math.random() * 256);  //pick a "red" from 0 - 255
  var g = Math.floor(Math.random() * 256);  //pick a "green" from 0 - 255
  var b = Math.floor(Math.random() * 256);  //pick a "blue" from 0 - 255
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
