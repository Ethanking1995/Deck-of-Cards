let { calculate, getHighCard } = require("./calculate");
const fetch = require("node-fetch");
//grab a shuffled deck
fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(
  response => {
    response.json().then(data => {
      deckId = data.deck_id;
      //make poker hands with the shuffled deck
      fetch(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`
      ).then(response => {
        response.json().then(data => {
          let hands = [];
          for (let i = 0; i <= 9; i++) {
            let hand = [];
            for (let j = 0; j <= 4; j++) {
              //print first 5 cards of the first hand
              if (i == 0) console.log(data.cards[i * 5 + j]);
              hand.push(data.cards[i * 5 + j]);
            }
            //push hand to hands
            hands.push(hand);
          }
          hands.sort((handA, handB) => {
            if (calculate(handB) - calculate(handA) !== 0)
              return calculate(handB) - calculate(handA);
            return getHighCard(handB) - getHighCard(handA);
          });
          console.log("THE WINNING HAND WAS :", hands[0]);
        });
      });
    });
  }
);
