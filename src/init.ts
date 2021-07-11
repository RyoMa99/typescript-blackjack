import CardNumber from "./values/CardNumber";
import Mark from "./values/Mark";
import Card from "./domain/Card";

const Card1 = new Card("2","heart");
const Card2 = new Card("A","diamond");
const Card3 = new Card("1","heart"); // error


const Mark1 = Mark.of("heart");
const Mark2 = Mark.of("diamond");
const Mark3 = Mark.of("doraemon");

const Num1 = CardNumber.of("A");
const Num2 = CardNumber.of("5");
const Num3 = CardNumber.of("taro");