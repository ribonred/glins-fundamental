// Given the following object below, write code to print the value then the key to the console separated by '=>':
// Add a key for your name, and a value for your favorite hobby to the namesAndHobbies object.
// Write an if statement that console.logs your name and hobby to the console if the key of your name is contained in the object.

 // Output should be:
 // JavaScript => elie
 // jogging => matt
 // table building => janey
// sailing => tim

let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

console.log(`${namesAndHobbies.elie} => elie`)
console.log(`${namesAndHobbies.matt} => matt`)
console.log(`${namesAndHobbies.janey} => janey`)
console.log(`${namesAndHobbies.tim} => tim`)

namesAndHobbies.name = 'Rizki Giovanni';
namesAndHobbies.hobby = 'Badminton';
console.log(namesAndHobbies)

if(namesAndHobbies.name === 'Rizki Giovanni' && namesAndHobbies.hobby === 'Badminton') {
    console.log(` ${namesAndHobbies.name} hobi bermain ${namesAndHobbies.hobby}`)
} else {
    console.log('VALUE TIDAK DITEMUKAN')
}
