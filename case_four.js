let namesAndHobbies = {
    'elie': "JavaScript",
    'matt': "jogging",
    'janey': "table building",
    'tim': "sailing"
}

// export { namesAndHobbies }

// module.exports ={
//     namesAndHobbies
// }

function inverse(object) {
    var hasil = {};
    for (var key in object) {
        hasil[object[key]] = key;
    }
    return hasil;
}

console.log(inverse(namesAndHobbies))

namesAndHobbies.endi = 'basket'

console.log(namesAndHobbies)

if (namesAndHobbies.hasOwnProperty('endi')) {
    console.log(true)
} else {
    console.log(false)
}
