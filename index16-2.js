// var minAge = 18;

function isEligible(age, minAge) {
  return age > minAge;
}

console.log(isEligible(25, 18));

const person = { name: "Sweti" };

const person2 = { age: 32 };

Object.assign(person2, person, { name: "Salman" });

const person3 = { ...person2, name: "Khan" };

console.log(person.name);
console.log(person2);
console.log(person3);
