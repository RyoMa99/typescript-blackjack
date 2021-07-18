import ValueObject from "./base";

class CardNumber extends ValueObject<number> {
  isValid(val: number): boolean {
    const permissableNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    return permissableNumber.includes(val);
  }

  static of(_val: number): CardNumber {
    return new this(_val);
  }
}

export default CardNumber;
