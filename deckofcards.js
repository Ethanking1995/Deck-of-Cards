const fetch = require("node-fetch");
let deckId = null;
let shuffled = false;
//grab a shuffled deck
fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(
  response => {
    response.json().then(data => {
      //record deck Id
      deckId = data.deck_id;
      shuffled = data.shuffled;
      //grab five cards of that shuffled deck
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`).then(
        response => {
          response.json().then(data => {
            data.cards.forEach(card => {
              //print their value and suit
              console.log(card.value + " of " + card.suit);
            });
          });
        }
      );
    });
  }
);
