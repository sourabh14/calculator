var keypad = [
	"AC", "C", " % ", " / ",
	"7", "8", "9", " * ",
	"4", "5", "6", " - ",
	"1", "2", "3", " + ",
	"0", ".", "="
];

var disp = document.getElementById("display");
var butn = document.getElementsByClassName("square-button");
var evalString = ""

function buttonPressed() {
    console.log("Key pressed: A/C");
}

for (var i=0; i<butn.length; i++) {
	(function(index) {
        butn[index].addEventListener("click", function() {
        	if (keypad[index] == "AC") {
        		evalString = "";
        	}
        	else if (keypad[index] == "C") {
        		evalString = evalString.slice(0, -1);
        	}
        	else if (keypad[index] == "=") {
        		evalString = eval(evalString);
        	}
        	else {
        		evalString += keypad[index];
        	}
        	disp.innerHTML = evalString;
         })
   	})(i);
}