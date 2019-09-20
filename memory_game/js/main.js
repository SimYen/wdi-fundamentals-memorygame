console.log("Up and running!");

const cards = [
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

function flipCard() {
	//display card flipped over
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	//add card flipped to cardsInPlay array
	cardInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);

	//check if cards flipped match
	if (cardInPlay.length === 2) {
		checkForMatch();
		setTimeout( location.reload(), 1000 );
	}
}

//create new game board
function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', Math.floor(Math.random() * 4));
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();