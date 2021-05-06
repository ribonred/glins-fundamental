let people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// remove greg from the list

const removeName = (name) => {
  const x = people.filter((xaxa) => xaxa !== name);
  return x;
};

console.log(removeName("Greg"));

// Add Matt to array
const addName = (name) => {
  //   people.push(name);
  //   // console.log(hasil);
  console.log([name, ...people]);
};

addName("Matt");

// remove greg and return all the remaining

for (let i = 0; i < people.length; i++) {
  if (people[i] === "Greg") {
    people.splice(i, 1);
  }
}
console.log(people);

// stop when meet mary
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] == "Mary") break;
}

// Write the function to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
const arrSlice = () => {
  const newArr = ["Greg", "Mary", "Devon", "James", "Matt"];
  console.log(newArr.slice(0, 4));
};

arrSlice();

// Write the function that gives the indexOf where "Mary" is located.
const findIndex = (name) => {
  console.log(people.indexOf(name));
};
findIndex("Mary");
// Write the function that gives the indexOf where "Foo" is located (this should return -1).
findIndex("foo");

// Redefine the people variable with the value you started with. Using the splice function, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].

const newArr = people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

// Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
const withBob = [...people, "Bob"];
console.log(withBob);
