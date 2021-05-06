let people = ["Greg", "Mary", "Devon", "James"]; //  <= ini variabel
// variabel people  menyimpan array
// cara mengakses index di dalam array
// tanda [] ini untuk memanggil index nomor berapa contoh  people[0] sama dengan Greg

console.log(people[0]);

// kita mau loop yang ada di variable tersebut
for (var i = 0; i < people.lenght; i++) {
  // i itu sama dengan nol, jika i kurang dari panjang index array, i akan bertambah
  console.log(i); // yang aku print di terminal itu i
}

// NOMOR 2
people.forEach(function (people) {
  console.log(people);
});

// NOMOR 3

people.shift();
console.log(people);

// NOMOR 4

people.pop();
console.log(people);

// NOMOR 5

people.unshift("Matt");
console.log(people);

// NOMOR 6

people.push("Fajar");
console.log(people);

// NOMOR 7

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] == "Mary") break;
}

// NOMOR 8

let people2 = people.slice(2, 4);
console.log(people2);

// nomor 9

console.log(people.indexOf("Mary"));

// nomor 10

console.log(people.indexOf("Foo"));

// NOMOR 11

people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

// NOMOR 12

let withbob = people.concat("bob");
console.log(withbob);
