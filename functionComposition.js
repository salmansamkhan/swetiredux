import { compose, pipe } from "lodash/fp";

let input = "    JavaScript    ";

const trim = (str) => str.trim();
const wrapIndiv = (str) => `<div>${str}</div>`;
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

const result = wrapIndiv(toLowerCase(trim(input)));

const transportRightToLeft = compose(wrapIndiv, toLowerCase, trim);

const transportLeftToRight = pipe(trim, toLowerCase, wrap("div"));

console.log(transportRightToLeft(input));
console.log(transportLeftToRight(input));

// console.log(result);
