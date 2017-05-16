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

colourDisplay.textContent = pickedColour;

for(var i = 0; i < squares.length; i++){
  //add initial colours to squares
  squares[i].style.background = colours[i]

  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    var clickedColour = this.style.background;
    if(clickedColour === pickedColour){
      alert("Correct!");
    }else{
      this.style.background = "#232323"
    }
  });
}


