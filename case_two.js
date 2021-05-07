


var hege = ["Cecilie", "Lone", "Linus", "totok"]; //lis A
var stale = ["Emil", "Tobias", "Linus", "Cecilie"];        //Lis B
// var data_baru = [];

let cari_sama = (a, b) => {

    for (let i = 0; i < a.length && b.length; i++) {
        let arr_a = a[i];
        let arr_b = b[i];
        // console.log(arr_a, "===> A");
        // console.log(arr_b, "===> B");
        const cari_sama = a.filter(a => a == arr_b);
        console.log(cari_sama, "data sama");
        // let new_arr = data_baru.push(cari_sama) 
        hapus_sama(a, cari_sama);
    }
}

let hapus_sama = (ar, h) => {
    for (let i = 0; i < h.length; i++) {
        const hapus_sama1 = ar.filter(ar => ar != h[i]);
        console.log(hapus_sama1, "Hapuss Ini 1");
        // const hapus_sama2 = hapus_sama1.filter(hapus_sama1 => hapus_sama1 != cari_sama);
        // console.log(hapus_sama2, "Hapuss Ini 2");
    }
}
cari_sama(hege, stale);
// console.log(cari_sama(hege, stale), "hasilcari")
// hapus_sama(cari_sama)

// function removeElement(array, elem) {
//     var index = array.indexOf(elem);
//     if (index > -1) {
//         return array.splice(0, index);
//     } else {
//         return new Array
//     }
// }


// function arrayDiff(arrayA, ArrayB) {
//     for (var i = 0; i < ArrayB.length; i++) {
//         var result = removeElement(arrayA, ArrayB[i])
//         if (result.length > 0) {
//             return result
//         }
//     }

// }


// console.log(arrayDiff(hege, stale))