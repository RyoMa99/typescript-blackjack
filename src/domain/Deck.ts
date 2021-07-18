import Card from "./Card";

class Deck {
  private _cards: Card[];

  constructor() {
    this._cards = [];
    this._initDeck();
  }

  private _initDeck(): void {
    ["heart", "spade", "diamond", "club"].forEach((mark) => {
      for (let num = 1; num < 14; num++) {
        this._cards.push(new Card(num, mark));
      }
    });
  }

  getDeck(): Card[] {
    return this._cards;
  }
}

export default Deck;
