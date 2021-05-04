let people = ["Greg", "Mary", "Devon", "James"]; //  <= ini variabel
// variabel people  menyimpan array
// cara mengakses index di dalam array
// tanda [] ini untuk memanggil index nomor berapa contoh  people[0] sama dengan Greg

// console.log(people[0])

// // kita mau loop yang ada di variable tersebut
// const allPeople = () => {
//         for (let i = 0; i < people.lenght; i++) { // i itu sama dengan nol, jika i kurang dari panjang index array, i akan bertambah
//                 console.log(people[i]); // yang aku print di terminal itu i

//         }
// };


//Case_1 
//tampil semua data
const allOrang = () => {
        for (let i = 0; i < people.length; i++) {
                console.log(people[i]);
        }
}
allOrang();


//cari orang kemudian menggunakan filter
const cariOrang = (o) => {
        const allNew = people.filter((i) => o.toUpperCase() !== i.toUpperCase());
        console.log(allNew);

}

cariOrang("greg");

//menghapus Greed pada Array
people.shift();
console.log(people);





