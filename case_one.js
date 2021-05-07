let people = ["Greg", "Mary", "Devon", "James"] //  <= ini variabel
// variabel people  menyimpan array
// cara mengakses index di dalam array
// tanda [] ini untuk memanggil index nomor berapa contoh  people[0] sama dengan Greg


//case 1 no 1

// Using a loop, iterate through this array and console.log all of the people.
const allOfThePeople = () => {
        for (let i = 0; i < people.length; i++) {
                console.log(people[i]);
        }
};
allOfThePeople();
// Write the function to remove "Greg" from the array.
// Write the function to remove "James" from the array.
const removeGregAndJames = (names) => {
        const char = people.filter((value) => value !== names);
        return char;
};
console.log(removeGregAndJames("Greg"));
console.log(removeGregAndJames("James"));
// Write the function to add "Matt" to the front of the array.
// Write the function to add your name to the end of the array.
const addName = (name, a) => {
        if (a === 1) {
                console.log([name, people]);
        } else {
                console.log([people, name]);
        }

};
addName("Matt", 1);
addName("Naufal", 0);
// Write the function Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
const breakMary = () => {
        for (let i = 0; i < people.length; i++) {
                console.log(people[i]);
                if (people[i] == "Mary") break;
        }
};
breakMary()
// Write the function to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
const arrayCopy = (array, a, b) => {
        console.log(array.slice(a, b));
};
arrayCopy(people, 2, 4);
// Write the function that gives the indexOf where "Mary" is located.
// Write the function that gives the indexOf where "Foo" is located (this should return -1).
const getID = (array, isiArray) => {
        console.log(array.indexOf(isiArray));
};
console.log(getID(people, "Mary"));
console.log(getID(people, "Foo"));

// Redefine the people variable with the value you started with. Using the splice function, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"]. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
//part1
const redefine = people.splice(2, 1, 'Elizabeth', 'Artie');
console.log(people);

//part2
let withBob = people.concat('Bob');
console.log(withBob)