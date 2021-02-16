// var minAge = 18;

function isEligible(age, minAge) {
  return age > minAge;
}

console.log(isEligible(25, 18));

// objects

const person = { name: "Sweti", address: { city: "Vadodara" } };

const person2 = { age: 32 };

person.address.city = "New York";

Object.assign(person2, person, { name: "Salman" });

const person3 = { ...person2, name: "Khan" };

const person4 = { ...person2, address: { ...person2.address }, name: "Khan" };

console.log(person.name);
console.log(person2);
console.log(person3);
console.log(person4);

// arrays imutablity

// library to use for immutability

// immer
