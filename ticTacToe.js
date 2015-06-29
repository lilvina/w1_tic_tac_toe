// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function() {

var boardGame = document.querySelector("#board");
var boxes = document.querySelectorAll("div.box");
var playerTurn = "X";
var Omoves=[];
var Xmoves =[];
var counter = 0;
var winningCombos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7], [1,5,9],[3,5,7],[3,6,9],[2,5,8]];
var resetButton = document.querySelector("#reset");

function switchTurn() {
  if (playerTurn === "X"){
    playerTurn = "O";
  }
  else {
    playerTurn = "X";
  }
};

for (var i = 0; i < boxes.length; i ++){
boxes[0].getAttribute("id")
}


function XorO (){
  if (playerTurn === "X"){
    console.log("player's Turn", playerTurn)
    this.innerText = "X";
    Xmoves.push(parseInt(this.getAttribute("id")));
    switchTurn();
    console.log("Xmoves", Xmoves);
    checkWinning(Xmoves, "X Player");
    counter ++;
    console.log("counter", counter)
    checkCounter();
  }
  else {
    console.log("player's Turn", playerTurn)
    this.innerText = "O"
    Omoves.push(parseInt(this.getAttribute("id")));
    switchTurn();
    console.log("Omoves", Omoves);
    checkWinning(Omoves, "O Player");
    counter ++;
    console.log("counter", counter)
    checkCounter();
  }
};

var listenerXorO = function(){
  for (var i = 0; i<boxes.length; i++){
    boxes[i].addEventListener("click", XorO);
  }
};


function checkWinning(movesArray, name){
for (var i = 0; i < winningCombos.length; i++) {
  var winCounter = 0;

 for (var j= 0; j < winningCombos[i].length; j++) {
   if(movesArray.indexOf(winningCombos[i][j]) !== -1) {
      winCounter ++
      console.log("win", winCounter);
   }
 
 };
   if (winCounter === 3){
    alert("You win " + name + "!")
   } 
};
}

function checkCounter(){
  if (counter === 9){
    alert("The game is a tie!")
  }
}

function clearBoard(){
  resetButton.addEventListener("click", function(){
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].innerText = "";
    };
    counter = 0;
  })
 }


function gameStarts(){
listenerXorO();
clearBoard();
}


gameStarts();

});