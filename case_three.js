let bio = {
    firstName: 'Elok',
    lastName: 'Saputra',
    occupation: 'Mobile Developer'
}

//dot notation
console.log('---dot notation---')
console.log(`Hello I am ${bio.firstName} ${bio.lastName}, and I want to be a ${bio.occupation}`)

//bracket notation
console.log('---bracket notation---')
console.log(`Hello I am ${bio['firstName']} ${bio['lastName']}, and I want to be a ${bio['occupation']}`)

//add my hobby
console.log('---add my hobby---')
bio.hobby = 'Badminton'
console.log(bio)

//remove occupation
console.log('---delete occupation---')
delete bio.occupation
console.log(bio)


