import CardNumber from "../values/CardNumber";
import Mark from "../values/Mark";

class Card {
  private readonly number: CardNumber;
  private readonly mark: Mark;

  constructor(number: string,mark: string){
    this.number = CardNumber.of(number);
    this.mark = Mark.of(mark);
  }

  getNumber(): CardNumber{
    return this.number;
  }

  getMark(): Mark{
    return this.mark;
  }
}

export default Card;
