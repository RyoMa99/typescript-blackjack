import CardNumber from "../values/CardNumber";
import Mark from "../values/Mark";

class Card {
  private readonly _number: CardNumber;
  private readonly _mark: Mark;

  constructor(number: number, mark: string) {
    this._number = CardNumber.of(number);
    this._mark = Mark.of(mark);
  }

  getNumber(): number {
    return this._number.get();
  }

  getNumberString(): string {
    switch (this._number.get()) {
      case 1:
        return "A";
      case 11:
        return "J";
      case 12:
        return "Q";
      case 13:
        return "K";
      default:
        return this._number.get().toString();
    }
  }

  getMark(): string {
    return this._mark.get();
  }
}

export default Card;
