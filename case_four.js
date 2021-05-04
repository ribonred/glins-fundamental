let namesAndHobbies = {
    'elie': "JavaScript",
    'matt': "jogging",
    'janey': "table building",
    'tim': "sailing"
}


function print() {
    var key = Object.keys(namesAndHobbies)

    for (var i = 0; i < key.length; i++) {
        console.log(namesAndHobbies[key[i]] + " => " + key[i])
    }

    console.log("Adding new property")

    namesAndHobbies.naufal = "main gim"

    if (namesAndHobbies.naufal !== null) {
        console.log(namesAndHobbies.naufal + " => " + 'naufal')
    }
}

print()
// module.exports ={
//     namesAndHobbies
// }
