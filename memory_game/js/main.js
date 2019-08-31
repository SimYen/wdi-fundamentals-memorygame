//console.log("Up and running!");

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardInPlay = [];

//check for a match
function checkForMatch() {
	if (cardInPlay[0] === cardInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

function flipCard(cardId) {
	//display card flipped over
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	//add card flipped to cardsInPlay array
	cardInPlay.push(cards[cardId].rank);
	

	//check if cards flipped match
	if (cardInPlay.length === 2) {
		checkForMatch();
	}	
}

//test function
flipCard(0);
flipCard(2);