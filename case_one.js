let people = ["Greg", "Mary", "Devon", "James"] //  <= ini variabel


for (var i = 0; i < people.length; i++) {
        console.log(people[i], '<-----initial case')
}

// const removeName = (name) => {
//         const newArr = people.filter((rem) => rem !== name)
//         return newArr
// };
// console.log(removeName('Greg'))
// console.log(removeName('James'))


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

//stop when mary
for (var i = 0; i < people.length; i++) {
        console.log(people[i])
        if (people[i] == "Mary") break
}

const arrSlice = (nama, a, b) => {
        return nama.slice(a, b)
}
console.log(arrSlice(people, 2, 4))

//location mary
console.log(people.indexOf('Mary'), '<---location Mary')

//location foo
console.log(people.indexOf('Foo'), '<---location Foo')

const getBack = () => {
        people.splice(0, 1, 'Greg')
        return people
}
console.log(getBack())

people.splice(3, 1, 'James')
console.log(people)

const newArr3 = people.splice(2, 1, 'Elizabeth', 'Artie',)
console.log(people)

const withBob = people.concat('Bob')
console.log(withBob)

// const newArr2 = people.splice()




// let fruits = ["Greg", "Mary", "Devon", "James"]

// /**
//  * Filter array items based on search criteria (query)
//  */
// function filterItems(arr, query) {
//         return arr.filter(function (el) {
//                 return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//         })
// }

// console.log(filterItems(fruits, 'eg'))  // ['apple', 'grapes']
// // console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']