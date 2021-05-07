// var a = [2, 3, 4, 5, 5, 4];
// a.filter(function (value, index) { return a.indexOf(value) == index });

// console.log(a)

let names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl', 'Nancy'];

let names2 = ['Matt', 'Shinoda', 'Shinoda', 'Chester',]

let dup = [...new Set(names)];
let dup2 = [...new Set(names2)]
console.log(dup, dup2);
