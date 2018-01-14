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
            
            var multiplier = 10;
            var rotateDeg = getRandomInt(360 * multiplier, 720 * multiplier);
            s.style.transform = "rotate("+ rotateDeg +"deg)";
            
            spinnerValue = getSpinnerLocation(rotateDeg, "normalSpinner");
            
        },100);
        
    }else if (turn==3) {
        
        if (spinnerValue === "red") {
            var x = document.getElementById("wheel");
            x.classList.add("hidden");
            var p = document.getElementById("poisonwheel");
            p.classList.remove("hidden");
            var s = document.getElementById("wheeltip");
            s.classList.add("spinning");
            setTimeout(function() {
                
                var s = document.getElementById("wheeltip");
                var multiplier = 3;
                var rotateDeg = getRandomInt(320 * multiplier, 720  * multiplier);
                s.style.transform = "rotate("+ rotateDeg +"deg)";

                spinnerValue = getSpinnerLocation(rotateDeg, "poisonSpinner");

            },100);
        } else if (spinnerValue === "green") {
            var x = document.getElementById("wheel");
            x.classList.add("hidden");
            var y = document.getElementById("player1");
            y.classList.add("position2");
            y.classList.remove("position1");
            var z = document.getElementById("wheeltip");
            z.classList.add("hidden");
            score1result++;
            document.getElementById("score1result").innerText = score1result;
        } else if (spinnerValue === "blue") {
            var t = document.getElementById("table");
            t.classList.remove("hidden");
            var x = document.getElementById("wheel");
            x.classList.add("hidden");
            var s = document.getElementById("wheeltip");
            s.classList.add("hidden");
        } else if (turn==3) {
            if (spinnerValue ==="dead") {
                var b = document.getElementById("board");
                b.classlist.add("hidden");
            }
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
        
    } else if (spinnerType === "poisonSpinner") {
        //Other spinner
        if (absoluteDeg < 226 && absoluteDeg >= 0) {
            //continue
            console.log("dead");
            return "dead";
       
        } else {
            //red
            console.log("alive");
            return "alive";
          
            
        }
        
    }
    
}

function reply_click(innerText) {
    console.log(innerText);
    
    var questionDiv = document.getElementById("question");
    var questionTextElement = document.getElementById("questionText");
    var optionAElement = document.getElementById("optionA");
    var optionBElement = document.getElementById("optionB");
    var optionCElement = document.getElementById("optionC");
    var optionDElement = document.getElementById("optionD");
    
    questionDiv.dataset.questionSelected = innerText;
    
    switch(innerText) {
        case "1":
            questionTextElement.innerText = "Approximately how many domesticated bees are left in the world?";
            optionAElement.innerText = "some option a";
            optionBElement.innerText = "some option b";
            optionCElement.innerText = "some option c";
            optionDElement.innerText = "some option d";
            break;
        case "2":
            questionTextElement.innerText = "What color is this?";
            optionAElement.innerText = "some option a2";
            optionBElement.innerText = "some option b2";
            optionCElement.innerText = "some option c2";
            optionDElement.innerText = "some option d2";
            break;
    }
    
    questionDiv.classList.remove("hidden");

}

function answer(idClicked) {
    var questionDiv = document.getElementById("question");
    var questionId = questionDiv.dataset.questionSelected;
    
    if (idClicked === "optionA") {
        
        if (questionId === "1" || questionId === "2") {
            //correct
            score1result++;
            document.getElementById("score1result").innerText = score1result;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
            var p = document.getElementById("player1");
            p.classList.add("position2");
            p.classList.remove("position1");
        } else {
            //incorrect
        }
        
    } else if (idClicked === "optionB") {
        if (questionId === "1" || questionId === "2") {
        score1result++;
            document.getElementById("score1result").innerText = score1result;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
            var p = document.getElementById("player1");
            p.classList.add("position2");
            p.classList.remove("position1");
        } else {
            
        }
    } else if (idClicked === "optionC") {
        if (questionId === "1" || questionId === "2") {
        score1result++;
            document.getElementById("score1result").innerText = score1result;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
            var p = document.getElementById("player1");
            p.classList.add("position2");
            p.classList.remove("position1");
        } else {
            
        }
    } else if (idClicked === "optionD") {
        if (questionId === "1" || questionId === "2") {
        score1result++;
            document.getElementById("score1result").innerText = score1result;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
            var p = document.getElementById("player1");
            p.classList.add("position2");
            p.classList.remove("position1");
        } else {
            
        }
    } 
    
}