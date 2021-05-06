let people = ["Greg", "Mary", "Devon", "James"] //  <= ini variabel
// variabel people  menyimpan array
// cara mengakses index di dalam array
// tanda [] ini untuk memanggil index nomor berapa contoh  people[0] sama dengan Greg

// console.log(people[0])

// kita mau loop yang ada di variable tersebut
for (var i = 0; i < people.length; i++) { // i itu sama dengan nol, jika i kurang dari panjang index array, i akan bertambah
        console.log(people[i]) // yang aku print di terminal itu i
}

const removeArray = (arr, item) => {
        let newArray = [...arr]
        const index = newArray.findIndex((element) => element === item)
        if (index !== -1) {
                newArray.splice(index, 1)
                return newArray
        }

}

let matt = [...people]

function Mary(param) {
        for (i = 0; i < 2; i++)
                console.log(param[i])

}

function copyArray(arr) {
        arr.slice()
        return arr
}

function indexof(arr, search) {
        var total = arr.indexOf(search)
        return total
}

let devon = [...people]
devon.splice(2, 1, "Elizabeth", 'Artie')

console.log(removeArray(people, 'Greg'))
console.log(removeArray(people, 'James'))

matt.unshift('Matt')
console.log(matt)

people.push('Endi')
console.log(people)

console.log(Mary(people))

console.log(copyArray(people))

console.log(indexof(people, 'Mary'))
console.log(indexof(people, 'Foo'))

console.log(devon)

