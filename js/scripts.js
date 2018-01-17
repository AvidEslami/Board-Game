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
                var rotateDeg = getRandomInt(360 * multiplier, 720  * multiplier);
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
        } 
        
    
    } else if (turn==4) {
        
        if (spinnerValue =="dead") {
                turn = turn-4;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            }
            else if (spinnerValue =="alive") {
                turn = turn-2;
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
            }
        
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
            
        },100);
    } else if (turn==5) {
        if (spinnerValue === "red") {
            var x = document.getElementById("wheel");
            x.classList.add("hidden");
            var p = document.getElementById("poisonwheel");
            p.classList.remove("hidden");
            var s = document.getElementById("wheeltip");
            s.classList.add("spinning");
            setTimeout(function() {
                
                var s = document.getElementById("wheeltip");
                var multiplier = 4;
                var rotateDeg = getRandomInt(360 * multiplier, 720  * multiplier);
                s.style.transform = "rotate("+ rotateDeg +"deg)";

                spinnerValue = getSpinnerLocation(rotateDeg, "poisonSpinner");

            },100);
        } else if (spinnerValue === "green") {
            var x = document.getElementById("wheel");
            x.classList.add("hidden");
            var y = document.getElementById("player1");
            y.classList.add("position3");
            y.classList.remove("position2");
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
                turn = turn-2;
                var p = document.getElementById("poisonwheel");
                p.classList.add("hidden");
            }
            else if (spinnerValue ==="alive") {
                turn = turn-2;
                var l = document.getElementById("poisonwheel");
                l.classList.add("hidden");
            }
        }
    } else if (turn==6) {
        
        if (spinnerValue =="dead") {
                turn = turn-6;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            }
            else if (spinnerValue =="alive") {
                turn = turn-2;
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
            }
        
        console.log(turn)
        var w = document.getElementById("wheel");
        w.classList.remove("hidden");
        var s = document.getElementById("wheeltip");
        s.classList.remove("hidden");
        setTimeout(function() {
            
            var multiplier = 30;
            var rotateDeg = getRandomInt(360 * multiplier, 720 * multiplier);
            s.style.transform = "rotate("+ rotateDeg +"deg)";
            
            spinnerValue = getSpinnerLocation(rotateDeg, "normalSpinner");
            
        },100);
    } else if (turn==7) {
        if (spinnerValue === "red") {
            var x = document.getElementById("wheel");
            x.classList.add("hidden");
            var p = document.getElementById("poisonwheel");
            p.classList.remove("hidden");
            var s = document.getElementById("wheeltip");
            s.classList.add("spinning");
            setTimeout(function() {
                
                var s = document.getElementById("wheeltip");
                var multiplier = 5;
                var rotateDeg = getRandomInt(320 * multiplier, 720  * multiplier);
                s.style.transform = "rotate("+ rotateDeg +"deg)";

                spinnerValue = getSpinnerLocation(rotateDeg, "poisonSpinner");

            },100);
        } else if (spinnerValue === "green") {
            var x = document.getElementById("wheel");
            x.classList.add("hidden");
            var y = document.getElementById("player1");
            y.classList.add("position4");
            y.classList.remove("position3");
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
                turn = turn-2;
                var p = document.getElementById("poisonwheel");
                p.classList.add("hidden");
            }
            else if (spinnerValue ==="alive") {
                turn = turn-2;
                var p = document.getElementById("poisonwheel");
                p.classList.add("hidden");
            }
        }
    } else if (turn==8) {
        
        if (spinnerValue =="dead") {
                turn = turn-8;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            }
            else if (spinnerValue =="alive") {
                turn = turn-2;
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
            }
        
        console.log(turn)
        var w = document.getElementById("wheel");
        w.classList.remove("hidden");
        var s = document.getElementById("wheeltip");
        s.classList.remove("hidden");
        setTimeout(function() {
            
            var multiplier = 40;
            var rotateDeg = getRandomInt(360 * multiplier, 720 * multiplier);
            s.style.transform = "rotate("+ rotateDeg +"deg)";
            
            spinnerValue = getSpinnerLocation(rotateDeg, "normalSpinner");
            
        },100);
    } else if (turn==9) {
        if (spinnerValue === "red") {
            var x = document.getElementById("wheel");
            x.classList.add("hidden");
            var p = document.getElementById("poisonwheel");
            p.classList.remove("hidden");
            var s = document.getElementById("wheeltip");
            s.classList.add("spinning");
            setTimeout(function() {
                
                var s = document.getElementById("wheeltip");
                var multiplier = 6;
                var rotateDeg = getRandomInt(320 * multiplier, 720  * multiplier);
                s.style.transform = "rotate("+ rotateDeg +"deg)";

                spinnerValue = getSpinnerLocation(rotateDeg, "poisonSpinner");

            },100);
        } else if (spinnerValue === "green") {
            var x = document.getElementById("wheel");
            x.classList.add("hidden");
            var y = document.getElementById("player1");
            y.classList.add("position5");
            y.classList.remove("position4");
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
                turn = turn-2;
                var b = document.getElementById("board");
                b.classList.add("hidden");
            }
            else if (spinnerValue ==="alive") {
                console.log("living")
                turn = turn-2;
                var p = document.getElementById("poisonwheel");
                p.classList.add("hidden");
            }
        }
    } else if (turn==10) {
        
        if (spinnerValue =="dead") {
                turn = turn-10;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            }
            else if (spinnerValue =="alive") {
                turn = turn-2;
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
            }
        
        var y = document.getElementById("player1");
            y.classList.add("position0");
            y.classList.remove("position5");
        score1result = score1result+5;
        turn = turn-10;
        document.getElementById("score1result").innerText = score1result;
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
            optionAElement.innerText = "1-6 trillion";
            optionBElement.innerText = "1-6 billion";
            optionCElement.innerText = "1-6 million";
            optionDElement.innerText = "10 trillion";
            break;
        case "2":
            questionTextElement.innerText = "Approximately how many feral bees are left in the world.";
            optionAElement.innerText = "40+ trillion";
            optionBElement.innerText = "40-100 billion";
            optionCElement.innerText = "40-100 million";
            optionDElement.innerText = "500 billion";
            break;
        case "3":
            questionTextElement.innerText = "Originally 5-10% of the bee population would die every year, in 2006 beekeepers were seeing:";
            optionAElement.innerText = "10%";
            optionBElement.innerText = "20%";
            optionCElement.innerText = "30%";
            optionDElement.innerText = "40%";
            break;
        case "4":
            questionTextElement.innerText = "In 2006, 30% of the bee population would die annually, in 2015 beekeepers were seeing:";
            optionAElement.innerText = "13%";
            optionBElement.innerText = "23%";
            optionCElement.innerText = "33%";
            optionDElement.innerText = "43%";
            break;
        case "5":
            questionTextElement.innerText = "Gene Brandi had to replace 500 queen bees per year in the 1970’s, now he has to replace:";
            optionAElement.innerText = "500";
            optionBElement.innerText = "1000";
            optionCElement.innerText = "1500";
            optionDElement.innerText = "2000";
            break;
        case "6":
            questionTextElement.innerText = "Which of the following is not a major cause of bee population decline?";
            optionAElement.innerText = "Pesticides";
            optionBElement.innerText = "Parasites";
            optionCElement.innerText = "Habitat Loss";
            optionDElement.innerText = "Poaching";
            break;
        case "7":
            questionTextElement.innerText = "How many flowers can a bee pollinate in a day?";
            optionAElement.innerText = "50";
            optionBElement.innerText = "500";
            optionCElement.innerText = "5000";
            optionDElement.innerText = "50000";
            break;
        case "8":
            questionTextElement.innerText = "How much honey does a hive produce in a year?.";
            optionAElement.innerText = "2.2-2.4 pounds";
            optionBElement.innerText = "10-30 pounds";
            optionCElement.innerText = "60-100 pounds";
            optionDElement.innerText = "100-1000 pounds";
            break;
        case "9":
            questionTextElement.innerText = "What is the primary food for bees?";
            optionAElement.innerText = "Nectar";
            optionBElement.innerText = "Pollen";
            optionCElement.innerText = "Honey";
            optionDElement.innerText = "Flowers";
            break;
        case "10":
            questionTextElement.innerText = "What does the honey bee population do over the winter?";
            optionAElement.innerText = "Pollinate more flowers";
            optionBElement.innerText = "Migrate to a warmer area";
            optionCElement.innerText = "Take over another hive";
            optionDElement.innerText = "keep the queen warm and patiently wait for spring";
            break;
        case "11":
            questionTextElement.innerText = "How much honey does a small colony of bees need to survive the winter?";
            optionAElement.innerText = "15 pounds";
            optionBElement.innerText = "25 pounds";
            optionCElement.innerText = "35 pounds";
            optionDElement.innerText = "45 pounds";
            break;
        case "12":
            questionTextElement.innerText = "A queen bee lays______ eggs per day?";
            optionAElement.innerText = "10-20";
            optionBElement.innerText = "100-150";
            optionCElement.innerText = "1000-1500";
            optionDElement.innerText = "2450";
            break;
        case "13":
            questionTextElement.innerText = "How many eggs can a queen bee lay in her lifetime?";
            optionAElement.innerText = "1 billion";
            optionBElement.innerText = "1 million";
            optionCElement.innerText = "1 thousand";
            optionDElement.innerText = "1 trillion";
            break;
        case "14":
            questionTextElement.innerText = "What is the role of the male honey bees?";
            optionAElement.innerText = "Protect the hive";
            optionBElement.innerText = "Provide sperm to the queen";
            optionCElement.innerText = "Search for flowers";
            optionDElement.innerText = "Hunt down parasites";
            break;
        case "15":
            questionTextElement.innerText = "What does CCD stand for?";
            optionAElement.innerText = "Criminal Cat Disorder";
            optionBElement.innerText = "Collapse Colony Disorder";
            optionCElement.innerText = "Collony Collapse Disorder";
            optionDElement.innerText = "Colony Cancer Disorder";
            break;
        case "16":
            questionTextElement.innerText = "Why are bees considered Keystone species?";
            optionAElement.innerText = "They are natural predators to keep the food chain balance";
            optionBElement.innerText = "They are at the center of the food web. If you take them out the whole food web will suffer";
            optionCElement.innerText = "They fit through keys";
            optionDElement.innerText = "They are very toxic to humans";
            break;
        case "17":
            questionTextElement.innerText = "What percentage of our crops are bees responsible for?";
            optionAElement.innerText = "20%";
            optionBElement.innerText = "30%";
            optionCElement.innerText = "40%";
            optionDElement.innerText = "50%";
            break;
        case "18":
            questionTextElement.innerText = "What is the role of nurse bee’s?";
            optionAElement.innerText = "They provide medical support";
            optionBElement.innerText = "They help treat the queen";
            optionCElement.innerText = "They feed the worker bees";
            optionDElement.innerText = "They feed the larva";
            break;
        case "19":
            questionTextElement.innerText = "How long have bees been producing honey from flowering plants?";
            optionAElement.innerText = "1 million years";
            optionBElement.innerText = "20 000 years";
            optionCElement.innerText = "10-20 million years";
            optionDElement.innerText = "40+ million years";
            break;
        case "20":
            questionTextElement.innerText = "What is the number one cause of the loss of healthy bee populations?";
            optionAElement.innerText = "Neonicotinoids (toxins)";
            optionBElement.innerText = "Habitat loss";
            optionCElement.innerText = "Starvation";
            optionDElement.innerText = "Poaching";
            break;
        case "21":
            questionTextElement.innerText = "Bee Colonies use their odour to_____?";
            optionAElement.innerText = "Distinguish between friendly or intruder bee's";
            optionBElement.innerText = "Odour for pleasure";
            optionCElement.innerText = "Scare off other colonies or bees";
            optionDElement.innerText = "Mate";
            break;
        case "22":
            questionTextElement.innerText = "Bee’s make occasional trips outside in the winter months for?";
            optionAElement.innerText = "Getting nectar";
            optionBElement.innerText = "Hunting";
            optionCElement.innerText = "Protecting the hive";
            optionDElement.innerText = "Cleansing themselves";
            break;
        case "23":
            questionTextElement.innerText = "What should you do if your hive has been abandoned or is experiencing a heavy loss of bees?";
            optionAElement.innerText = "Buy a new hive";
            optionBElement.innerText = "Search for them";
            optionCElement.innerText = "Wait for them to comeback";
            optionDElement.innerText = "Report it to the Survey/Data Collection to determine the extent of CCD and the current status of honey bee colony production and health";
            break;
        case "24":
            questionTextElement.innerText = "How do bees collect nectar?";
            optionAElement.innerText = "Brushes to their skin";
            optionBElement.innerText = "With their nose";
            optionCElement.innerText = "With their tongue";
            optionDElement.innerText = "Use their tongue";
            break;
        case "25":
            questionTextElement.innerText = "What will happen if the bee population disappears?";
            optionAElement.innerText = "We would have to manually pollinate";
            optionBElement.innerText = "Loss of many crops and crop price rise, honey price rises";
            optionCElement.innerText = "We need to use alternative pollinators";
            optionDElement.innerText = "All of the above";
            break;
        case "26":
            questionTextElement.innerText = "What could be a possible solution for CCD?";
            optionAElement.innerText = "Turn to other pollinators";
            optionBElement.innerText = "Throw garbage at bee hives";
            optionCElement.innerText = "Find a way to make better tasting synthetic honey";
            optionDElement.innerText = "Find out why the problem is occuring";
            break;
        case "27":
            questionTextElement.innerText = "Which community (local,national,global) will suffer from a bee decline?";
            optionAElement.innerText = "ALL will equally suffer";
            optionBElement.innerText = "ALL will equally suffer";
            optionCElement.innerText = "ALL will equally suffer";
            optionDElement.innerText = "ALL will equally suffer";
            break;
        case "28":
            questionTextElement.innerText = "How much of the American gdp do the bees support?";
            optionAElement.innerText = "100 billion";
            optionBElement.innerText = "200 biillion";
            optionCElement.innerText = "10 biillion";
            optionDElement.innerText = "50 biillion";
            break;
        case "29":
            questionTextElement.innerText = "What is one unfortunately an easy solve to the parasite issue that helps humans but doesnt  work on bees?";
            optionAElement.innerText = "Surgery";
            optionBElement.innerText = "Vaccines";
            optionCElement.innerText = "Pills";
            optionDElement.innerText = "All of the above";
            break;
        case "30":
            questionTextElement.innerText = "How much honey does a small colony of bees need to survive the winter?";
            optionAElement.innerText = "15 pounds";
            optionBElement.innerText = "25 pounds";
            optionCElement.innerText = "35 pounds";
            optionDElement.innerText = "45 pounds";
            break;
        case "31":
            questionTextElement.innerText = "How much honey does a small colony of bees need to survive the winter?";
            optionAElement.innerText = "15 pounds";
            optionBElement.innerText = "25 pounds";
            optionCElement.innerText = "35 pounds";
            optionDElement.innerText = "45 pounds";
            break;
        case "32":
            questionTextElement.innerText = "How much honey does a small colony of bees need to survive the winter?";
            optionAElement.innerText = "15 pounds";
            optionBElement.innerText = "25 pounds";
            optionCElement.innerText = "35 pounds";
            optionDElement.innerText = "45 pounds";
            break;
        case "33":
            questionTextElement.innerText = "How much honey does a small colony of bees need to survive the winter?";
            optionAElement.innerText = "15 pounds";
            optionBElement.innerText = "25 pounds";
            optionCElement.innerText = "35 pounds";
            optionDElement.innerText = "45 pounds";
            break;
        case "34":
            questionTextElement.innerText = "How much honey does a small colony of bees need to survive the winter?";
            optionAElement.innerText = "15 pounds";
            optionBElement.innerText = "25 pounds";
            optionCElement.innerText = "35 pounds";
            optionDElement.innerText = "45 pounds";
            break;
        case "35":
            questionTextElement.innerText = "How much honey does a small colony of bees need to survive the winter?";
            optionAElement.innerText = "15 pounds";
            optionBElement.innerText = "25 pounds";
            optionCElement.innerText = "35 pounds";
            optionDElement.innerText = "45 pounds";
            break;
        case "36":
            questionTextElement.innerText = "How much honey does a small colony of bees need to survive the winter?";
            optionAElement.innerText = "15 pounds";
            optionBElement.innerText = "25 pounds";
            optionCElement.innerText = "35 pounds";
            optionDElement.innerText = "45 pounds";
            break;
        case "37":
            questionTextElement.innerText = "How much honey does a small colony of bees need to survive the winter?";
            optionAElement.innerText = "15 pounds";
            optionBElement.innerText = "25 pounds";
            optionCElement.innerText = "35 pounds";
            optionDElement.innerText = "45 pounds";
            break;
        case "38":
            questionTextElement.innerText = "How much honey does a small colony of bees need to survive the winter?";
            optionAElement.innerText = "15 pounds";
            optionBElement.innerText = "25 pounds";
            optionCElement.innerText = "35 pounds";
            optionDElement.innerText = "45 pounds";
            break;
        
    }
        
    
    questionDiv.classList.remove("hidden");

}

function answer(idClicked) {
    var questionDiv = document.getElementById("question");
    var questionId = questionDiv.dataset.questionSelected;
    
    if (idClicked === "optionA") {
        
        if (questionId === "1" || questionId === "2" || questionId === "20" || questionId === "21" || questionId === "26" || questionId === "27") {
            //correct
            score1result = score1result+2;
            document.getElementById("score1result").innerText = score1result;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
                if (turn==3) {
                    var p = document.getElementById("player1");
                    p.classList.add("position2");
                    p.classList.remove("position1");
            } else if (turn==5) {
                var p = document.getElementById("player1");
                p.classList.add("position3");
                p.classList.remove("position2");
            } else if (turn==7) {
                var p = document.getElementById("player1");
                p.classList.add("position4");
                p.classList.remove("position3");
            } else if (turn==9) {
                var p = document.getElementById("player1");
                p.classList.add("position5");
                p.classList.remove("position4");
            }
        } else {
            //incorrect
            turn = turn-2;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
                        score1result = score1result-1;
            document.getElementById("score1result").innerText = score1result;
        }
        
    } else if (idClicked === "optionB") {
        if (questionId === "4" || questionId === "13" || questionId === "14" || questionId === "16" || questionId === "17" || questionId === "27" || questionId === "28") {
        score1result = score1result+2;
            document.getElementById("score1result").innerText = score1result;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
            if (turn==3) {
                    var p = document.getElementById("player1");
                    p.classList.add("position2");
                    p.classList.remove("position1");
            } else if (turn==5) {
                var p = document.getElementById("player1");
                p.classList.add("position3");
                p.classList.remove("position2");
            } else if (turn==7) {
                var p = document.getElementById("player1");
                p.classList.add("position4");
                p.classList.remove("position3");
            } else if (turn==9) {
                var p = document.getElementById("player1");
                p.classList.add("position5");
                p.classList.remove("position4");
            }
        } else {
            turn = turn-2;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
                        score1result = score1result-1;
            document.getElementById("score1result").innerText = score1result;
        }
    } else if (idClicked === "optionC") {
        if (questionId === "3" || questionId === "5" || questionId === "7" || questionId === "8" || questionId === "9" || questionId === "11" || questionId === "12" || questionId === "15" || questionId === "19" || questionId === "24" || questionId === "27") {
        score1result = score1result+2;
            document.getElementById("score1result").innerText = score1result;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
            if (turn==3) {
                    var p = document.getElementById("player1");
                    p.classList.add("position2");
                    p.classList.remove("position1");
            } else if (turn==5) {
                var p = document.getElementById("player1");
                p.classList.add("position3");
                p.classList.remove("position2");
            } else if (turn==7) {
                var p = document.getElementById("player1");
                p.classList.add("position4");
                p.classList.remove("position3");
            } else if (turn==9) {
                var p = document.getElementById("player1");
                p.classList.add("position5");
                p.classList.remove("position4");
            }
        } else {
            turn = turn-2;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
                        score1result = score1result-1;
            document.getElementById("score1result").innerText = score1result;
        }
    } else if (idClicked === "optionD") {
        if (questionId === "6" || questionId === "10" || questionId === "18" || questionId === "22" || questionId === "23" || questionId === "25" || questionId === "27" || questionId === "29") {
        score1result = score1result+2;
            document.getElementById("score1result").innerText = score1result;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
            if (turn==3) {
                    var p = document.getElementById("player1");
                    p.classList.add("position2");
                    p.classList.remove("position1");
            } else if (turn==5) {
                var p = document.getElementById("player1");
                p.classList.add("position3");
                p.classList.remove("position2");
            } else if (turn==7) {
                var p = document.getElementById("player1");
                p.classList.add("position4");
                p.classList.remove("position3");
            } else if (turn==9) {
                var p = document.getElementById("player1");
                p.classList.add("position5");
                p.classList.remove("position4");
            }
        } else {
            turn = turn-2;
            score1result = score1result-1;
            document.getElementById("score1result").innerText = score1result;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
        }
    } 
    
}