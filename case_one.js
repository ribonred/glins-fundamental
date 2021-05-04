let people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// remove greg from the list

const removeName = (name) => {
  const x = people.filter((names) => names === name);
  return x;
};

console.log(removeName("Greg"));

// remove greg and return all the remaining

for (let i = 0; i < people.length; i++) {
  if (people[i] === "Greg") {
    people.splice(i, 1);
  }
}
console.log(people);
