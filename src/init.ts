import CardNumber from "./values/CardNumber";
import Mark from "./values/Mark";
import Card from "./domain/Card";
import Deck from "./domain/Deck";

const Deck1 = new Deck();
console.log(Deck1);
console.log(Deck1.getDeck());

const Card1 = new Card(2, "heart");
const Card2 = new Card(11, "diamond");
console.log(Card1);
console.log(Card1.getMark());
console.log(Card1.getNumber());
console.log(Card1.getNumberString());
console.log(Card2.getNumber());
console.log(Card2.getNumberString());
// const Card3 = new Card(15, "heart"); // error

const Mark1 = Mark.of("heart");
const Mark2 = Mark.of("diamond");
// const Mark3 = Mark.of("doraemon"); // error

const Num1 = CardNumber.of(1);
const Num2 = CardNumber.of(5);
// const Num3 = CardNumber.of(14); // error
