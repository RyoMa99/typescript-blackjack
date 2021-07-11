import ValueObject from "./base";

class CardNumber extends ValueObject<string> {
  
  isValid(val: string):boolean{
    const permissableNumber = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    return permissableNumber.includes(val);
  }

  static of(_val: string): CardNumber {
    return new this(_val);
  }
}

export default CardNumber;
