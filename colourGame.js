var colours = generateRandomColours(6);

var squares = document.querySelectorAll(".square")
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisplay")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
  colours = generateRandomColours(6);       //generate all new colours
  pickedColour = pickColour();              //pick a new random colour from Aaray
  colourDisplay.textContent = pickedColour; //chage colours of squares
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colours[i];
  }
  h1.style.background = "#232323";
  resetButton.textContent = "New Colours";
});

colourDisplay.textContent = pickedColour;

function changeColoursToCorrectAnswer(colour){
  //loop through all squares
  for (var i = 0; i < squares.length; i++){
    //change each colour to match given colour
    squares[i].style.background = colour;
  }
}

for(var i = 0; i < squares.length; i++){
  squares[i].style.background = colours[i];  //add initial colours to squares

  squares[i].addEventListener("click", function(){
    var clickedColour = this.style.background;  //grab colour of clicked square
    if(clickedColour === pickedColour){         //compare colour & pickedColour
      messageDisplay.textContent = "Correct!";
      changeColoursToCorrectAnswer(clickedColour);
      h1.style.background = clickedColour;
      resetButton.textContent = "Play Again";
    }else{
      this.style.background = "#232323";
      messageDisplay.textContent = "Not quite";
    }
  });
}

function pickColour(){
  //Picks one of the coloured squares at random (Math.Floor() cuts out the decimals I think)
  var random = Math.floor(Math.random() * colours.length); 
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
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256)
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256)
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256)
  return "rgb(" + r + ", " + g + ", " + b + ")"
  
}
