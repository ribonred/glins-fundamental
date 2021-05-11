var hege = ["Totok", "Cecilie", "Lone", "Linus", "Bagus"]; //lis A
var stale = ["Emil", "Totok", "Linus", "Cecilie"];        //Lis B
console.log(hege)
console.log(stale)

const cari_sama = () => {

    return [...new Set(hege.concat(stale))]
}
console.log(cari_sama(), "<===== Hasil Hapus Data Sama Selesai");