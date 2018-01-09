var stage=1
var score1result=0
var turn=0


function start() {
    //GET IMAGE ELEMENT
    //Add hidden class
    var x = document.getElementById("cover"); 
    x.classList.add("hidden");
    var z = document.getElementById("board"); 
    z.classList.remove("hidden");
    var z = document.getElementById("player1"); 
    z.classList.remove("hidden");
    var z = document.getElementById("score1");
    z.classList.remove("hidden");
    var z = document.getElementById("score1result");
    z.classList.remove("hidden");
    var z = document.getElementById("nextbutton");
    z.classList.remove("hidden");
}

document.getElementById("score1result").innerText = score1;

function nextround(){
    turn=turn+1
    console.log(turn)
    handlenewturn()
}

function handlenewturn() {
      if (turn==1) {
        var y = document.getElementById("player1");
        y.classList.add("position1");
        y.classList.remove("position0");
        
    } else if (turn==2) {
        console.log(turn)
        var w = document.getElementById("wheel");
        w.classList.remove("hidden");
    }
    
}