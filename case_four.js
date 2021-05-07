let namesAndHobbies = {
    'elie': "JavaScript",
    'matt': "jogging",
    'janey': "table building",
    'tim': "sailing"
}

console.log(namesAndHobbies)

// module.exports ={
//     namesAndHobbies
// }
let key = Object.keys(namesAndHobbies)
let value = Object.values(namesAndHobbies)
let entries = Object.entries(namesAndHobbies)

for (let [namesAndHobbies, count] of entries) {
    console.log(`${count} => ${namesAndHobbies}`)
}

namesAndHobbies.elok = 'badminton'
console.log(namesAndHobbies)

const keyExist = () => {
    if (namesAndHobbies.hasOwnProperty('elok')) {
        return true
    } else {
        return false
    }
}
console.log(keyExist())
