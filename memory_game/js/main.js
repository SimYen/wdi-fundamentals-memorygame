console.log("Up and running!");
/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
*/
const cards = ["queen", "queen", "king", "king"];
let cardInPlay = [];
let cardOne = cards[0];
cardInPlay.push(cardOne);
console.log("User flipped " + cardInPlay[0]);
let cardTwo = cards[2];
cardInPlay.push(cardTwo);
console.log("User flipped " + cardInPlay[1]);
if (cardInPlay.length === 2) {
	if (cardInPlay[0] === cardInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
}