const fetch = require("node-fetch");

let deck = fetch(
  "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
).then(response => {
  response.json().then(data => {
    console.log(data);
  });
});
