# Deck-of-Cards
Fun little app using the deck of cards API.


To get started, run npm install to install the project dependencies.

Navigate to the directory to which the repo is cloned and run node deckofcards.js - this command will use the deckofcards API
to grab a shuffled deck, print the first five cards to the console, and then draw five cards at a time to create 10 poker hands.

The winning hand from the hands generated above will be logged to the console.

To run tests, simply type npm test into the terminal.

The only assumption I made here was that a straight must be in the following order: 2-> 3-> 4-> 5-> 6. I did NOT allow for wraparounds, eg,
King->Ace->2->3->4 is not a straight, and likewise, Jack->Queen->King->Ace->2 is also not a straight.
