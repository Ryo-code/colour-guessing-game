var numSquares = 6;
var colours = generateRandomColours(numSquares);

var squares = document.querySelectorAll(".square")
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisplay")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var ridiculousBtn = document.querySelector("#ridiculousBtn");

easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  ridiculousBtn.classList.remove("selected");
  numSquares = 3;
  colours = generateRandomColours(numSquares);
  pickedColour = pickColour();
  colourDisplay.textContent = pickedColour;

  for (var i = 0; i < squares.length; i++){
    if(colours[i]){
      squares[i].style.background = colours[i];
    }else{
      squares[i].style.background = "none";
    }
  }
})

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  ridiculousBtn.classList.remove("selected");
//refactor later!
  numSquares = 6;
  colours = generateRandomColours(numSquares);
  pickedColour = pickColour();
  colourDisplay.textContent = pickedColour;

  for (var i = 0; i < squares.length; i++){
    squares[i].style.background = colours[i];
    squares[i].style.display = "block";
  }
})

ridiculousBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.remove("selected");
  ridiculousBtn.classList.add("selected");

  numSquares = 9;
  colours = generateRandomColours(numSquares);  
})

resetButton.addEventListener("click", function(){
  colours = generateRandomColours(numSquares);  //generate all new colours
  pickedColour = pickColour();                  //pick a new random colour from Aaray
  colourDisplay.textContent = pickedColour;     //chage colours of squares
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colours[i];
  }
  h1.style.background = "steelblue";
  resetButton.textContent = "New Colours";
});

colourDisplay.textContent = pickedColour;

for(var i = 0; i < squares.length; i++){
  squares[i].style.background = colours[i];  //add initial colours to squares

  squares[i].addEventListener("click", function(){
    var clickedColour = this.style.background;  //grab colour of clicked square
    if(clickedColour === pickedColour){         //compare colour & pickedColour
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
