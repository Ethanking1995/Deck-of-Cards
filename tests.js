let { calculate, getHighCard } = require("./calculate");

describe("The calculate function properly scores a hand", function() {
  let hand = [
    { suit: "HEARTS", value: "ACE" },
    { suit: "HEARTS", value: "KING" },
    { suit: "HEARTS", value: "QUEEN" },
    { suit: "HEARTS", value: "JACK" },
    { suit: "HEARTS", value: "10" }
  ];
  it("can handle a royal flush", function() {
    expect(calculate(hand)).toEqual(10);
  });
  let hand2 = [
    { suit: "HEARTS", value: "8" },
    { suit: "HEARTS", value: "KING" },
    { suit: "HEARTS", value: "QUEEN" },
    { suit: "HEARTS", value: "JACK" },
    { suit: "HEARTS", value: "10" }
  ];
  it("can handle a flush which is almost a royal straight flush", function() {
    expect(calculate(hand2)).toEqual(6);
  });
  let hand3 = [
    { suit: "CLUBS", value: "ACE" },
    { suit: "HEARTS", value: "KING" },
    { suit: "HEARTS", value: "QUEEN" },
    { suit: "HEARTS", value: "JACK" },
    { suit: "HEARTS", value: "10" }
  ];
  it("can handle a straight which is almost a flush", function() {
    expect(calculate(hand3)).toEqual(5);
  });
  let hand4 = [
    { suit: "CLUBS", value: "ACE" },
    { suit: "HEARTS", value: "ACE" },
    { suit: "CLUBS", value: "QUEEN" },
    { suit: "SPADES", value: "QUEEN" },
    { suit: "SPADES", value: "QUEEN" }
  ];
  it("can accomodate a full house", function() {
    expect(calculate(hand4)).toEqual(7);
  });
  let hand5 = [
    {
      suit: "S",
      value: "INVALID"
    }
  ];
  it("can handle a card with invalid value", function() {
    expect(calculate(hand5)).toEqual(-1);
  });
  let hand6 = [{ suit: "INVALID", value: "ACE" }];
  it("can handle a hand with invalid suit", function() {
    expect(calculate(hand6)).toEqual(-1);
  });

  let hand7 = [
    { suit: "CLUBS", value: "ACE" },
    { suit: "HEARTS", value: "KING" },
    { suit: "CLUBS", value: "QUEEN" },
    { suit: "SPADES", value: "QUEEN" },
    { suit: "SPADES", value: "QUEEN" }
  ];
  it("handles three of a kind", function() {
    expect(calculate(hand7)).toEqual(4);
  });
  let hand8 = [
    { suit: "HEARTS", value: "KING" },
    { suit: "CLUBS", value: "QUEEN" },
    { suit: "SPADES", value: "QUEEN" },
    { suit: "SPADES", value: "QUEEN" }
  ];
  it("handles an incomplete hand", function() {
    expect(calculate(hand8)).toEqual(-1);
  });
  let hand9 = [
    { suit: "CLUBS", value: "ACE" },
    { suit: "HEARTS", value: "KING" },
    { suit: "CLUBS", value: "QUEEN" },
    { suit: "SPADES", value: "KING" },
    { suit: "SPADES", value: "QUEEN" }
  ];
  let hand10 = [
    { suit: "CLUBS", value: "ACE" },
    { suit: "HEARTS", value: "KING" },
    { suit: "CLUBS", value: "QUEEN" },
    { suit: "SPADES", value: "3" },
    { suit: "SPADES", value: "QUEEN" }
  ];
  it("handles two pairs and one pair", function() {
    expect(calculate(hand9)).toEqual(3);
    expect(calculate(hand10)).toEqual(2);
  });
});
