import ValueObject from "./base";

class Mark extends ValueObject<string> {
  
  isValid(val: string):boolean{
    const permissableMark = ["heart","spade","diamond","club"];
    return permissableMark.includes(val);
  }

  static of(_val: string): Mark {
    return new this(_val);
  }
}

export default Mark;
