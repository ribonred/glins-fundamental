// create object
console.log('----creating object----')
function Biodata(firstName, lastName, occupation) {
    this.firstName = firstName
    this.lastName = lastName
    this.occupation = occupation
}

let myBio = new Biodata('Elok', 'Saputra', 'Mobile Developer')
console.log(myBio)

//dot notation
console.log('----dot notation----')
console.log(`Hello my name is ${myBio.firstName} ${myBio.lastName}, i want to be a ${myBio.occupation}`)

console.log('-----------------------')
console.log('-----------------------')

//bracket notation
console.log('----bracket notation----')
console.log(`Hello my name is ${myBio['firstName']} ${myBio['lastName']}, i want to be a ${myBio['occupation']}`)

console.log('-----------------------')
console.log('-----------------------')

//adding my hobby
console.log('----adding my hobby----')
myBio.hobby = "Badminton"
console.log(myBio)



//remove occupation
console.log('----removing occupation----')
delete myBio.occupation
console.log(myBio)

