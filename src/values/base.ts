abstract class ValueObject<T> {
  private readonly _val: T;

  constructor(val: T) {
    if (this.isValid(val)){
      this._val = val;
    }else{
      throw Error("argument is invalid.");
    }
  }

  abstract isValid(val: T): boolean;

  get(): T {
    return this._val;
  }

}

export default ValueObject;
