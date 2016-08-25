

$(document).ready(function(){




	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

// set variable scopes to global
var randomNumber;
var theGuess;
var guessCount = 0;
var theDifference;
var wonGame = false;


//create random number
var newNumber = function() {
	randomNumber = Math.floor((Math.random()*101)+1);
};

//clear guess input box
var clearTheGuess = function() {
	$('#userGuess').val("").focus();
};

// remove guesses
var removeGuesses = function() {
	$("ul#guessList li").remove();
};

// number of guesses
var howManyGuesses = function (){
	$('#count').text(guessCount);
};

//give user feedback
var giveFeedback = function(feedback) {
	$('#feedback').text(feedback);
};

//check guess difference for feedback

var checkAnswer = function () {
	theDifference = Math.abs(randomNumber - theGuess);
		/*console.log("the randomNumber is " + randomNumber);*/
		console.log("the difference is " + theDifference);

	if(theDifference === 0){
		giveFeedback("Winner, Winner!");
		$('#userGuess').val(randomNumber + "!");
			wonGame = true;
	} else if (theDifference < 10) {
		giveFeedback("Very Hot!");
	} else if (theDifference < 20) {
		giveFeedback("Hot");
	} else if (theDifference < 30) {
		giveFeedback("Warm");
	} else if (theDifference < 50) {
		giveFeedback("cold");
	} else {
		giveFeedback("Ice Cold");
	}

};


// log the users guesses then compare against rando#


$('form').submit(function(event) {
	event.preventDefault(); //no reload
	if (wonGame === false) {
		theGuess = +$('#userGuess').val();
			//number validity check
		if(theGuess % 1 !== 0 || theGuess > 100 || theGuess < 0){
			alert("Not a valid number");
			return(false);

		} else {
			event.preventDefault();
			$('ul#guessList').append("<li>" +theGuess+ "</li>");
			console.log("the guess was " + theGuess);
			clearTheGuess();
			guessCount++; 
			howManyGuesses();
			checkAnswer();
		}
	} else {
		giveFeedback("You won already, so start a new game!");
	}
});

//start a new game

$('.new').click(function() {
	newNumber();
	removeGuesses();
	clearTheGuess();
	guessCount = 0;
	wonGame = false;
	howManyGuesses();
	giveFeedback("Make your Guess!")
});


/* oh my
	//provides user feedback on their guess
	if(theDifference >= 50) {
		var str = document.getElementById("feedback").innerHTML;
		var resIce = str.replace("Make your Guess!" || "cold", "Ice Cold!");
		document.getElementById("feedback").innerHTML = resIce;		 
	}

	else if (theDifference < 50 && > 30 ) {
		var str = document.getElementById("feedback").innerHTML;
		var rescold = str.replace("Make your Guess!" || "Ice Cold!", "Cold");
		document.getElementById("feedback").innerHTML = rescold;		 
		}



});
		*/



});


