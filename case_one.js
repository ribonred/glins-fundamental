let people = ["Greg", "Mary", "Devon", "James"] //  <= ini variabel
// variabel people  menyimpan array
// cara mengakses index di dalam array
// tanda [] ini untuk memanggil index nomor berapa contoh  people[0] sama dengan Greg
console.log(people.length)
console.log(people)

// kita mau loop yang ada di variable tersebut
// for (var i = 0; i < people.length; i++) { // i itu sama dengan nol, jika i kurang dari panjang index array, i akan bertambah
//         //console.log(people[i]) // yang aku print di terminal itu i
//         if (people.length === 4) {
//                 const removeGreg = () => {
//                         people.shift()
//                         return people
//                 }
//                 const removeJames = () => {
//                         people.pop()
//                         return people
//                 }

//                 console.log(removeGreg());
//                 console.log(removeJames());
//         } else if (people !== 4) {
// const addMatt = () => {
//         people.splice(0, 0, 'Matt')
//         return people

// }
// const addMe = () => {
//         people.splice(3, 0, 'elok')
//         return people
// }
// console.log(addMatt());
// console.log(addMe());
//         }

// }
// console.log(people.length)

// for (var i = 0; i < people.length; i++) { // i itu sama dengan nol, jika i kurang dari panjang index array, i akan bertambah
//         // console.log(people[i]) // yang aku print di terminal itu i
// const removeGreg = () => {
//         people.shift()
//         return people
// }

//         const removeJames = () => {
//                 people.pop()
//                 return people
//         }

//         const addMatt = () => {
//                 people.splice(0, 0, 'Matt')
//                 return people
//         }

//         const addMe = () => {
//                 people.splice(3, 0, 'Elok')
//                 return people
//         }
//         console.log(removeGreg(), '<-----Greg removed')
//         console.log(removeJames(), '<-----James removed')
//         console.log(addMatt(), '<-----Matt added')
//         console.log(addMe(), '<-----Me added')
// }

// const allPeople = people.slice()
// console.log(allPeople)

// console.log(people.length)

const allPeople = () => {
        for (var i = 0; i < people.length; i++) {
                // console.log(people[i], '<-----initial case')

                if (people.length === 4) {
                        const removeGreg = () => {
                                people.shift()
                                return people
                        }
                        const removeJames = () => {
                                people.pop()
                                return people
                        }

                        console.log(removeGreg());
                        console.log(removeJames());
                }
                else if (people.length !== 4) {
                        const addMatt = () => {
                                people.splice(0, 0, 'Matt')
                                return people

                        }
                        const addMe = () => {
                                people.splice(3, 0, 'elok')
                                return people
                        }
                        console.log(addMatt());
                        console.log(addMe());
                }

        }
}
allPeople()