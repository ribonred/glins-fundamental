let people = ["Greg", "Mary", "Devon", "James"]; //  <= ini variabel
// variabel people  menyimpan array
// cara mengakses index di dalam array
// tanda [] ini untuk memanggil index nomor berapa contoh  people[0] sama dengan Greg

// //Case 1, line1 console.log smua orang
// for (let i of people) {
//   console.log(i);
// }

// Case 1 hapusgreg
// people.splice(0, 1);
// console.log(people);

// Case 1 hapusjames
// people.splice(3, 4);
// console.log(people);

// Case 1 add Matt to the front array
// const x = ["Matt"];
// x.push("Greg", "Mary", "Devon", "James");
// console.log(x);

// Case 1 add Vega to the end array
// const x = ["Matt", "Greg", "Mary", "Devon", "James"];
// const length = x.length;
// x[length] = "Vega";
// console.log(x);

// Case 1 mary exit from loop *sala keknya
// const x = ["Matt", "Greg", "Mary", "Devon", "James", "Vega"];
// console.log(x);
// const index = x.indexOf("Mary");
// if (index > -1) {
//   x.splice(index, 1);
// }
// console.log(x);

// Case 1  not include mary or matt
const x = ["Matt", "Greg", "Mary", "Devon", "James", "Vega"];
console.log(x.slice(1, 6));

// belum selesai
