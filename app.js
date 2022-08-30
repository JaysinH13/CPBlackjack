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
  var cardNum1 = Math.floor(Math.random() * 14) + 1;

  if (cardNum1 == 11) {
    cardNum1 = "Jack"
  };
  if (cardNum1 == 12) {
    cardNum1 = "Queen"
  };
  if (cardNum1 == 13) {
    cardNum1 = "King"
  };
  if (cardNum1 == 14) {
    cardNum1 == "Ace"
  }

  var suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
  var random = Math.floor(Math.random() * suits.length);

  console.log(cardNum1 + " of " + suits[random]);

  var cardNum2 = Math.floor(Math.random() * 14) + 1;

  if (cardNum2 == 11) {
    cardNum2 = "Jack"
  };
  if (cardNum2 == 12) {
    cardNum2 = "Queen"
  };
  if (cardNum2 == 13) {
    cardNum2 = "King"
  };
  if (cardNum2 == 14) {
    cardNum2 = "Ace"
  }

  var suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
  var random = Math.floor(Math.random() * suits.length);
  console.log(cardNum2 + " of " + suits[random]);
  if (cardNum1 == "King" || cardNum1 == "Queen" || cardNum1 == "Jack") {
    cardNum1 = 10
};
  if (cardNum2 == "King" || cardNum2 == "Queen" || cardNum2 == "Jack") {
    cardNum2 = 10
};
  if (cardNum1 == "Ace") {
    cardNum1 = 11
  }
  if (cardNum2 == "Ace") {
    cardNum2 = 11
  }
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
  if (cardNum3 == 14) {
    cardNum3 = "Ace"
  }
  var random = Math.floor(Math.random() * suits.length);
  console.log(cardNum3 + " of " + suits[random]);
  if (cardNum3 == "King" || cardNum3 == "Queen" || cardNum3 == "Jack") {
    cardNum3 = 10
  };
  if (cardNum3 == "Ace") {
    cardNum3 = 11
  }
  cardTotal2 = cardNum3 + cardTotal
  console.log(`You have a total of ${cardTotal2}`);
  if (cardTotal2 > 21) {
    console.log(`You went over with a ${cardTotal2}`);
    randomDealerNum = Math.floor(Math.random() * 5) + 17;
    console.log(`The dealer has: ${randomDealerNum}`);
  } else {
    var returnChoice3 = prompt("Hit or stand?")
    if (returnChoice3 == "hit" || returnChoice2 == "Hit") {
      let cardNum4 = Math.floor(Math.random() * 13) + 1;
      if (cardNum4 == 11) {
        cardNum4 = "Jack"
      };
      if (cardNum4 == 12) {
        cardNum4 = "Queen"
      };
      if (cardNum4 == 13) {
        cardNum4 = "King"
      };
      if (cardNum4 == 14) {
        cardNum4 = "Ace"
      }
      var random = Math.floor(Math.random() * suits.length);
      console.log(cardNum4 + " of " + suits[random]);
      if (cardNum4 == "King" || cardNum4 == "Queen" || cardNum4 == "Jack") {
        cardNum4 = 10
      };
      if (cardNum4 == "Ace") {
        cardNum4 = 11
      }
      cardTotal3 = cardNum4 + cardTotal

      if (cardTotal3 > 21) {
        console.log(`You went over with a ${cardTotal3}`);
        randomDealerNum = Math.floor(Math.random() * 5) + 17;
        console.log(`The dealer has: ${randomDealerNum}`);

  } if (cardTotal3 < 21) {

  }
};
} if (returnChoice2 == "stand") {
  randomDealerNum = Math.floor(Math.random() * 5) + 17;
  console.log(`The dealer has: ${randomDealerNum}`);
};
  if (cardTotal > randomDealerNum) {
    randomDealerNum = Math.floor(Math.random() * 5) + 17;
    console.log(`The dealer has: ${randomDealerNum}`);
    console.log("You won!");
  }
  if (cardTotal < randomDealerNum) {
    randomDealerNum = Math.floor(Math.random() * 5) + 17;
    console.log(`The dealer has: ${randomDealerNum}`);
    console.log("You lost!");
  }
}
