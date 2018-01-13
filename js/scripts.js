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

var spinnerValue;

function handlenewturn() {
      if (turn==1) {
        var y = document.getElementById("player1");
        y.classList.add("position1");
        y.classList.remove("position0");
        
    } else if (turn==2) {
        console.log(turn)
        var w = document.getElementById("wheel");
        w.classList.remove("hidden");
        var s = document.getElementById("wheeltip");
        s.classList.remove("hidden");
        setTimeout(function() {
            
            var multiplier = 20;
            var rotateDeg = getRandomInt(360 * multiplier, 720 * multiplier);
            s.style.transform = "rotate("+ rotateDeg +"deg)";
            
            spinnerValue = getSpinnerLocation(rotateDeg, "normalSpinner");
            
        },1000);
        
    }else if (turn==3) {
        
        if (spinnerValue === "red") {
            var x = document.getElementById("wheel");
            x.classList.add("hidden");
            var p = document.getElementById("poisonwheel");
            p.classList.remove("hidden");
            var z = document.getElementById("wheeltip");
            z.classList.add("hidden");
        } else if (spinnerValue === "green") {
            var x = document.getElementById("wheel");
            x.classList.add("hidden");
            var y = document.getElementById("player1");
            y.classList.add("position2");
            y.classList.remove("position1");
            var z = document.getElementById("wheeltip");
            z.classList.add("hidden");
        } else if (spinnerValue === "blue") {
            var t = document.getElementById("table");
            t.classList.remove("hidden");
        }
        
    
    }
    
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getSpinnerLocation(rotateDeg, spinnerType) {
    
    var absoluteDeg = rotateDeg % 360;
    
    if (spinnerType === "normalSpinner") {
        
        if (absoluteDeg < 134 && absoluteDeg >= 0) {
            //continue
            return "green";
        } else if (absoluteDeg < 181 && absoluteDeg >= 134) {
            //red
            return "red";
        } else {
            //blue section
            return "blue"
        }
        
    } else {
        //Other spinner
    }
    
}