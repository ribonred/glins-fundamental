let people = ["Greg", "Mary", "Devon", "James"]

/* CASE_ONE */

const semuaOrang = () => {
        for (let i = 0; i < people.length; i++) {
                console.log(people[i]);
        }
};
semuaOrang();

// /* Cari orang menggunakan Filter*/
// const checkPeople = (i) => {
//     const newArr = orang.filter((e) => i.toUpperCase() !== e.toUpperCase());
//     console.log(newArr, "<-- ini hapus Greg");
// };

// checkPeople("greg");

/* Hapus Greg */
people.shift();
console.log(people, "<-- ini hapus Greg");

/* Hapus James */
people.pop();
console.log(people, "<-- ini hapus James");

/* Nambah Matt ke depan */
const nambahMatt = (nama) => {
        people.unshift(nama);
        console.log(people, "<-- ini nambah Matt");
}
nambahMatt("Matt");

/* Nambah nama Dewi */
const namaKu = (nama) => {
        people.push(nama);
        console.log(people, "<-- ini nambah Dewi");
}
namaKu("Dewi");

/* Marry keluar */
const maryOut = (simary) => {
        for (let i = 0; i < simary.length; i++) {
                console.log(simary[i]);
                if (simary[i] == 'Mary') {
                        console.log("Mary out")
                        break;
                }
        }
};
maryOut(people);

/* SLice */
const cutArray = (array, start, end) => {
        console.log(array.slice(start, end));
};
cutArray(people, 2, 4,);

/* Mary dan Foo posisi */
const posisiArray = (array, string) => {
        console.log(array.indexOf(string));
};
posisiArray(people, "Mary");
posisiArray(people, "Foo");

/* hapus Devon dan Add Elizabeth, Artie */
let peopleNew = ["Greg", "Mary", "Devon", "James"];
console.log(peopleNew);
peopleNew.splice(2, 1, "Elizabeth", "Artie");
console.log(peopleNew, "<-- Elizabeth and Artie in here");

/* Add Bob */
let withBob = peopleNew.concat("Bob");
console.log(withBob, "<-- New Family");
