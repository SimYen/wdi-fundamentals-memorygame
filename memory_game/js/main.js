//console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"];

var cardInPlay = [];

//check for a match
var checkForMatch = function () {
	if (cardInPlay[0] === cardInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

var flipCard = function (cardId) {
	//display card flipped over
	console.log("User flipped " + cards[cardId]);
	//add card flipped to cardsInPlay array
	cardInPlay.push(cards[cardId]);

	//check if cards flipped match
	if (cardInPlay.length === 2) {
		checkForMatch();
	}	
}

//test function
flipCard(0);
flipCard(2);