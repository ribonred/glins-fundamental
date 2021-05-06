let people = ["Greg", "Mary", "Devon", "James"];

// people.shift();
// people.pop();
// people.unshift("Matt");
// people.push("Nico");
// console.log(people[i]);
for(let i =0; i< people.length; i++){
    console.log(people[i]);
}

const removeName = (name) => {
  const x = people.filter((xaxa) => xaxa !== name);
  return x;
};
console.log(removeName("Greg"));

const removeName2 = (name) => {
  const x = people.filter((xaxa) => xaxa !== name);
  return x;
};
console.log(removeName("James"));

const addName = (name) => {
    // people.push(addName);
    // console.log(addName("Matt"));
    console.log([name, ...people]);
  };
addName("Matt");


const addName2 = (name) => {
  // people.push(addName);
  // console.log(addName("Matt"));
  console.log([people, ...name]);
};
addName("Nico");

// stop when meet mary
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] == "Mary") break;
}

//hapus Marry or Matt
const arrSlice = () => {
  const newArr = ["Greg", "Mary", "Devon", "James", "Matt"];
  console.log(newArr.slice(0, 4));
};

arrSlice();

//location Marry
console.log(people.indexOf("Mary"));

//
console.log(people.indexOf("foo"));

//
const newArr = people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);



