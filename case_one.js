'use strict';

let people = ['Greg', 'Mary', 'Devon', 'James'];


// console.log(people);
// people.forEach(i => console.log(i));

// //Cara Pertama

// const delArrFirstEl = a => a.shift();

// delArrFirstEl(people);


// const delArrLastEl = a => a.pop();
// delArrLastEl(people)



//Cara Kedua

const delFirstArr = (...a) => {
    const newArr =  a.filter(a => a.shift())
    console.log(newArr);
}

delFirstArr(people);

const delLastArr = (...a) => {
    const newArr =  a.filter(a => a.pop())
    console.log(newArr);
}

delLastArr(people);
// 
people.forEach(i => console.log(i));

// // ///////////////////////////////////////////////////////////////////////////

//Function to remove 'James' from the array
console.log(people);
const delArrLastEl = a => a.pop();
delArrLastEl(people)
console.log(people);
for(let i of people) console.log(i);


//Function to add 'Matt' to the front of array
const addFirstArr = a => {
    people.unshift(a)
    console.log(people)
} ; 
addFirstArr('Matt');


//Function to add 'Giovanni' to the end of array
const addLastArr = a => {
    people.push(a)
    console.log(people);
}
addLastArr('Gio');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Write the function Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for(let i = 0; i < people.length; i++) {
        console.log(people[i]);
        if(people[i] === 'Mary') break;
}

//Write the function to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".

const arrSlice = () => {
        console.log(people.slice(1));
}

arrSlice();

//Write the function that gives the indexOf where "Mary" is located.

const indexOf = () => {
        console.log(people.indexOf('Mary'));
}

indexOf();

//Write the function that gives the indexOf where "Foo" is located (this should return -1).

const indexOfFoo = () => {
        console.log(people.indexOf('Foo'))
}

indexOfFoo();

//Redefine the people variable with the value you started with. Using the splice function, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
console.log(people.splice(2, 3, 'Elizabeth', 'Artie'));
console.log(people);

//Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
const withBob = [...people, 'Bob'];
console.log(withBob);

