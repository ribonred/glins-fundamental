let people = ["Greg", "Mary", "Devon", "James"];

//Case_1 
//tampil semua data
const allOrang = () => {
    for (let i = 0; i < people.length; i++) {
        console.log(people[i]);
    }

}

//Hapus Greg
const hapusGreeg = (p) => {
    p.shift();
    console.log(p, "=====> ini hapus Greg");

}

//cari orang kemudian menggunakan filter
const cariGred = (z) => {
    const findGreg = people.filter((i) => z.toUpperCase() !== i.toUpperCase());
    console.log(findGreg, "=====> ini cari kemudian di hapus Greg");
}


allOrang();
hapusGreeg(people);
cariGred("greg");
// hapusOrang("James");
// console.log(people, "====> Ini Hapus James");





// menghapus Greed pada Array
// people.shift();
// console.log(people);
