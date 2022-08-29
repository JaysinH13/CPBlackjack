const prompt = require('prompt-sync')();
let promptLoop = false;

var returnChoice = prompt('Would you like to play blacjack? y/n? ')

switch (returnChoice) {
  case 'y':
    promptLoop = true;
    break;
  case 'n':
    console.log('Goodbye!');
    promptLoop = false;
    break;
  default:
    console.log('Invalid answer');
    promptLoop = false;
}
while (promptLoop == true) {
  var cardNum1 = Math.floor(Math.random() * 13) + 1;

  if (cardNum1 == 11) {
    cardNum1 = "Jack"
  };
  if (cardNum1 == 12) {
    cardNum1 = "Queen"
  };
  if (cardNum1 == 13) {
    cardNum1 = "King"
  };

  var suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
  var random = Math.floor(Math.random() * suits.length);

  console.log(cardNum1 + " of " + suits[random]);

  var cardNum2 = Math.floor(Math.random() * 13) + 1;

  if (cardNum2 == 11) {
    cardNum2 = "Jack"
  };
  if (cardNum2 == 12) {
    cardNum2 = "Queen"
  };
  if (cardNum2 == 13) {
    cardNum2 = "King"
  };

  var suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
  var random = Math.floor(Math.random() * suits.length);

  console.log(cardNum2 + " of " + suits[random]);

  if (cardNum1 == "King" || cardNum1 == "Queen" || cardNum1 == "Jack") {
    cardNum1 = 10
};
  if (cardNum2 == "King" || cardNum2 == "Queen" || cardNum2 == "Jack") {
    cardNum2 = 10
};
  var cardTotal = cardNum1 + cardNum2

  console.log(`You have a total of ${cardTotal}`);

  break;
}



var returnChoice2 = prompt("Hit or Stand?")

if (returnChoice2 == "hit" || returnChoice2 == "Hit") {
  let cardNum3 = Math.floor(Math.random() * 13) + 1;
  if (cardNum3 == 11) {
    cardNum3 = "Jack"
  };
  if (cardNum3 == 12) {
    cardNum3 = "Queen"
  };
  if (cardNum3 == 13) {
    cardNum3 = "King"
  };
  var random = Math.floor(Math.random() * suits.length);
  console.log(cardNum3 + " of " + suits[random]);
  if (cardNum3 == "King" || cardNum3 == "Queen" || cardNum3 == "Jack") {
    cardNum3 = 10
  };

  cardTotal2 = cardNum3 + cardTotal


  if (cardTotal2 > 21) {
    console.log(`You went over with a ${cardTotal2}`);
  } else {
    console.log(`You ended with a ${cardTotal2}`);
  }
} else if (returnChoice2 == "stand" && "Stand") {
  randomDealerNum = Math.floor(Math.random() * 5) + 17;
  console.log(`The dealer has: ${randomDealerNum}`);
} else {

};
