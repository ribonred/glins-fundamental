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
console.log(removeName("James"));

const addName = (name,boolean) => {
  if(boolean===1){
    console.log([name,...people]);
  }else{
    console.log([...people,name]);
  }
    
  };
addName("Matt",1);
addName("Nico",0);

// stop when meet mary
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] == "Mary") break;
}

//hapus Marry or Matt
const arrSlice = () => {
  console.log(people.slice(0, 4));
};
arrSlice();

//location Marry
console.log(people.indexOf("Mary"));

//
console.log(people.indexOf("foo"));

//
const newArr = people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

let withBob = people.concat("Bob");
console.log(withBob);

