let { calculate, getHighCard } = require("./calculate");
const fetch = require("node-fetch");
let deckId = null;
let heirarchy = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "JACK",
  "QUEEN",
  "KING",
  "ACE"
];

//grab a shuffled deck
fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(
  response => {
    response.json().then(data => {
      //record deck Id
      deckId = data.deck_id;
      //grab five cards of that shuffled deck
      fetch(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`
      ).then(response => {
        response.json().then(data => {
          //grab all 10 hands
          let hands = [];
          for (let i = 0; i <= 9; i++) {
            let hand = [];
            for (let j = 0; j <= 4; j++) {
              //print first 5 cards
              if (i == 0) console.log(data.cards[i * 5 + j]);
              //push cards to hand
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
          hands.forEach(hand => console.log(calculate(hand)));
          console.log("THE WINNING HAND WAS :", hands[0]);
        });
      });
    });
  }
);
