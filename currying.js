function add(a) {
  function getb(b) {
    return a + b;
  }
  return getb;
}

function addnew(a) {
  return function (b) {
    return a + b;
  };
}

function addnew1(a) {
  return (b) => {
    return a + b;
  };
}

let first = add(1)(5);
let second = addnew(1)(5);
let third = addnew1(1)(5);

const add2 = (a) => (b) => a + b;

let last = add(1)(3);

console.log(first);
console.log(second);
console.log(third);
console.log(last);
