// var myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
// myFish.splice(1, 0, 'drum')
// console.log(myFish)
// const months = ['Jan', 'March', 'April', 'June'];
// console.log(months.splice(1, 0, 'Feb'));
// function suhuBahan(suhu){
//     var ketentuan_suhu_min = 10
//     var ketentuan_suhu_max = 15
//     if(suhu < ketentuan_suhu_min){
//         return 'Maaf suhu kurang'
//     }else if(suhu > ketentuan_suhu_max){
//         return 'Suhu berlebih'
//     }else{
//         return 'lanjut'
//     }
// }

// // JSON javascript object notation
var fungsi = function get_name(){
    console.log('ini dari fungsi')
}

var object_kosong = {} // ini sama saja dengan suatu object, objectnya tapi kosong
//ini objnya.inikeynya = ini value nya
object_kosong.ini_isinya = 'hati'
// console.log(object_kosong)



// console.log(Orang ,'ini keselurhan detail object orang')
// console.log(Orang.name      ,'ini nama orangnya')
// console.log(Orang.umur    ,'ini umur orangnya')
// Orang.tas.unshift('batu bata')
// var add = 0

        
        
        
var Orang = {
    'key':'value' ,// string, int, array, object, array of object,fungsi, class
    'name':'jono',
    'umur':21,
    'tas':[
        'hp',
        'dompet'
    ],
    'jam_tangan':{
        'merk':'Bata',
        'warna':'item',
    },
    'fungsi':fungsi,
    'ini_object':object_kosong

}
console.log(Orang.ini_object)
console.log(Orang.ini_object.ini_isinya)
// tergantung kasusnya seprti apa ?
// temukan batu bata di dalam list tas
// for(i=0;i < Orang.tas.length;i++){
//         // add +=1
//         console.log(`ini adalah i tadi ${i+1} yang itu dan ini adalah item dari index i yang itu ${Orang.tas[i]}`)
//         if (Orang.tas[i] == 'batu bata'){
//                 console.log('orang ini mau tawuran')
//             }
//         }
// console.log(Orang.tas[0]  ,'ini di dalam tas orangnya, barang nomor 1')
// console.log(Orang.tas[1]  ,'ini di dalam tas orangnya, barang nomor 2 ')
// console.log(Orang.tas[2]  ,'ini di dalam tas orangnya, barang nomor 3 ')
// console.log( `ini jam tangan merk nya ${Orang.jam_tangan.merk}`)
// console.log( `ini jam tangan warnanya nya ${Orang.jam_tangan.warna}`)



// console.log(suhuBahan(12))