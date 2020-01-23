//need a function to calculate the score of a hand, then add score + high card as final score for a tiebreaker
//winning hand is the hand with the max score
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
function calculate(hand) {
  if (hand.length !== 5) return -1;
  //use to break ties
  if (isRoyalFlush(hand)) {
    return 10;
  }
  if (isStraightFlush(hand)) {
    return 9;
  }
  if (isFourKind(hand)) {
    return 8;
  }
  if (isFullHouse(hand)) {
    return 7;
  }
  if (isFlush(hand)) {
    return 6;
  }
  if (isStraight(hand)) {
    return 5;
  }
  if (isThreeKind(hand)) {
    return 4;
  }
  if (isTwoPair(hand)) {
    return 3;
  }
  if (isPair(hand)) {
    return 2;
  }
  //high card
  else {
    return 1;
  }
}

function isRoyalFlush(hand) {
  let suit = hand[0].suit;
  if (hand[0].value !== "10") return false;
  for (let i = 1; i <= 4; i++) {
    if (hand[i].suit !== suit || heirarchy[i + 9] !== hand[i].value)
      return false;
  }
  return true;
}
function isStraightFlush(hand) {
  return isStraight(hand) && isFlush(hand);
}
function isFourKind(hand) {
  let counter = {};
  for (let i = 0; i < hand.length; i++) {
    counter[hand[i].value] = counter[hand[i].value] + 1 || 1;
    if (counter[hand.value] == 4) return true;
  }
  return false;
}
function isFullHouse(hand) {
  let values = new Set();
  for (let i = 0; i < hand.length; i++) {
    values.add(hand[i].value);
  }
  return values.size == 2;
}
function isFlush(hand) {
  let suit = hand[0].suit;
  return hand.every(card => card.suit == suit);
}
function isStraight(hand) {
  for (let i = 1; i < hand.length; i++) {
    let prev = heirarchy.indexOf(hand[i - 1].value);
    let cur = heirarchy.indexOf(hand[i].value);
    if (cur - prev !== 1) return false;
  }
  return true;
}

function isThreeKind(hand) {
  let counter = {};
  for (let i = 0; i < hand.length; i++) {
    counter[hand[i].value] = counter[hand[i].value] + 1 || 1;
    if (counter[hand[i].value] == 3) return true;
  }
  return false;
}

function isTwoPair(hand) {
  let counter = {};
  let pairs = 0;
  for (let i = 0; i < hand.length; i++) {
    counter[hand[i].value] = counter[hand[i].value] + 1 || 1;
    if (counter[hand[i].value] == 2) pairs += 1;
  }
  return pairs == 2;
}
function isPair(hand) {
  let counter = {};
  for (let i = 0; i < hand.length; i++) {
    counter[hand[i].value] = counter[hand[i].value] + 1 || 1;
    if (counter[hand[i].value] == 2) return true;
  }
  return false;
}

function getHighCard(hand) {
  let max = 0;
  for (let i = 0; i < hand.length; i++) {
    let value = heirarchy.indexOf(hand[i].value);
    if (value > max) max = value;
  }
  return max;
}
module.exports = { calculate, getHighCard };
