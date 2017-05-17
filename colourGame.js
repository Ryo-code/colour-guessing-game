var colours = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square")
var pickedColour = colours[3];
var colourDisplay = document.getElementById("colourDisplay")
var messageDisplay = document.querySelector("#message");

colourDisplay.textContent = pickedColour;

function changeColoursToCorrectAnswer(colour){
  //loop through all squares
  for (var i = 0; i < squares.length; i++){
    //change each colour to match given colour
    squares[i].style.background = colour;
  }
}

for(var i = 0; i < squares.length; i++){
  //add initial colours to squares
  squares[i].style.background = colours[i]

  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    var clickedColour = this.style.background;
    if(clickedColour === pickedColour){
      messageDisplay.textContent = "Correct!";
      changeColoursToCorrectAnswer(clickedColour);
    }else{
      this.style.background = "#232323";
      messageDisplay.textContent = "Try again ;)"
    }
  });
}
